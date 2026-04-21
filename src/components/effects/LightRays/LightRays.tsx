import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Renderer, Program, Triangle, Mesh } from 'ogl';

export type RaysOrigin =
  | 'top-center' | 'top-left' | 'top-right'
  | 'right' | 'left'
  | 'bottom-center' | 'bottom-right' | 'bottom-left';

interface LightRaysProps {
  raysOrigin?: RaysOrigin;
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  pulsating?: boolean;
  fadeDistance?: number;
  saturation?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  noiseAmount?: number;
  distortion?: number;
  className?: string;
}

const DEFAULT_COLOR = '#ffffff';
const colorCache: Record<string, [number, number, number]> = {};
const hexToRgb = (hex: string): [number, number, number] => {
  if (colorCache[hex]) return colorCache[hex];
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const rgb: [number, number, number] = m
    ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255]
    : [1, 1, 1];
  colorCache[hex] = rgb;
  return rgb;
};

const getAnchorAndDir = (origin: RaysOrigin, w: number, h: number) => {
  const outside = 0.2;
  const positions: Record<RaysOrigin, { anchor: [number, number]; dir: [number, number] }> = {
    'top-left': { anchor: [0, -outside * h], dir: [0, 1] },
    'top-right': { anchor: [w, -outside * h], dir: [0, 1] },
    'top-center': { anchor: [0.5 * w, -outside * h], dir: [0, 1] },
    'left': { anchor: [-outside * w, 0.5 * h], dir: [1, 0] },
    'right': { anchor: [(1 + outside) * w, 0.5 * h], dir: [-1, 0] },
    'bottom-left': { anchor: [0, (1 + outside) * h], dir: [0, -1] },
    'bottom-center': { anchor: [0.5 * w, (1 + outside) * h], dir: [0, -1] },
    'bottom-right': { anchor: [w, (1 + outside) * h], dir: [0, -1] },
  };
  return positions[origin] || positions['top-center'];
};

type DeviceProfile = {
  dprCap: number;
  targetFps: number;
  minFps: number;
  supportsMouseTracking: boolean;
  supportsNoise: boolean;
  supportsDistortion: boolean;
};

const getDeviceProfile = (): DeviceProfile => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return {
      dprCap: 1.5,
      targetFps: 60,
      minFps: 24,
      supportsMouseTracking: true,
      supportsNoise: true,
      supportsDistortion: true
    };
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const cores = navigator.hardwareConcurrency ?? 8;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
  const lowEnd = prefersReducedMotion || cores <= 4 || memory <= 4;
  const veryLowEnd = prefersReducedMotion || cores <= 2 || memory <= 2;

  return {
    dprCap: veryLowEnd ? 1 : lowEnd ? 1.25 : 1.75,
    targetFps: veryLowEnd ? 24 : lowEnd ? 30 : 60,
    minFps: veryLowEnd ? 16 : lowEnd ? 20 : 30,
    supportsMouseTracking: !isCoarsePointer && !veryLowEnd,
    supportsNoise: !lowEnd,
    supportsDistortion: !lowEnd
  };
};

const LightRays: React.FC<LightRaysProps> = ({
  raysOrigin = 'top-center',
  raysColor = DEFAULT_COLOR,
  raysSpeed = 1,
  lightSpread = 1,
  rayLength = 2,
  pulsating = false,
  fadeDistance = 1.0,
  saturation = 1.0,
  followMouse = true,
  mouseInfluence = 0.1,
  noiseAmount = 0.0,
  distortion = 0.0,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const uniformsRef = useRef<any>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const smoothMouseRef = useRef({ x: 0.5, y: 0.5 });
  const deviceProfile = useMemo(() => getDeviceProfile(), []);
  const effectiveFollowMouse = followMouse && deviceProfile.supportsMouseTracking;
  const effectiveMouseInfluence = effectiveFollowMouse ? mouseInfluence : 0;
  const effectiveNoiseAmount = deviceProfile.supportsNoise ? noiseAmount : 0;
  const effectiveDistortion = deviceProfile.supportsDistortion ? distortion : 0;

  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const resolutionRef = useRef({ width: 0, height: 0, dpr: 1 });
  const anchorRef = useRef<{ update: (() => void) | null }>({ update: null });
  const raysOriginRef = useRef<RaysOrigin>(raysOrigin);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.01 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateVisibility = () => setIsPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility, { passive: true });
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useEffect(() => {
    raysOriginRef.current = raysOrigin;
  }, [raysOrigin]);

  useEffect(() => {
    if (!isVisible || !isPageVisible || !containerRef.current) return;

    let animationId: number;
    let resizeObserver: ResizeObserver;
    let mesh: Mesh | null = null;
    let hasSetReady = false;
    let targetFps = deviceProfile.targetFps;
    let frameInterval = 1000 / targetFps;
    let lastFrameTime = 0;
    let resizeRafId = 0;
    let lastWidth = 0;
    let lastHeight = 0;
    let overloadCount = 0;
    let recoverCount = 0;
    const anchorState = anchorRef;
    const resolutionState = resolutionRef;

    const init = () => {
      if (!containerRef.current) return;
      let renderer: Renderer;
      let gl: WebGLRenderingContext;
      try {
        renderer = new Renderer({
          dpr: Math.min(window.devicePixelRatio, deviceProfile.dprCap),
          alpha: true,
          premultipliedAlpha: false,
          powerPreference: 'high-performance',
          antialias: false,
          depth: false,
          stencil: false
        });
        rendererRef.current = renderer;
        gl = renderer.gl;
      } catch {
        setIsReady(true);
        return;
      }

      const vert = `
            attribute vec2 position;
            varying vec2 vUv;
            void main() {
              vUv = position * 0.5 + 0.5;
              gl_Position = vec4(position, 0.0, 1.0);
            }
          `;

      const frag = `
            precision mediump float;
            uniform float iTime, raysSpeed, lightSpread, rayLength, pulsating, fadeDistance, saturation, mouseInfluence, noiseAmount, distortion;
            uniform vec2 iResolution, rayPos, rayDir, mousePos;
            uniform vec3 raysColor;
            varying vec2 vUv;

            float noise(vec2 st) {
              return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
            }

            float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed) {
              vec2 sourceToCoord = coord - raySource;
              float dist = length(sourceToCoord);
              vec2 dirNorm = sourceToCoord / dist;
              float cosAngle = dot(dirNorm, rayRefDirection);
              float distortedAngle = cosAngle + distortion * sin(iTime * 2.0 + dist * 0.01) * 0.2;
              float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));
              float maxDistance = iResolution.x * rayLength;
              float lengthFalloff = clamp((maxDistance - dist) / maxDistance, 0.0, 1.0);
              float fadeFalloff = clamp((iResolution.x * fadeDistance - dist) / (iResolution.x * fadeDistance), 0.5, 1.0);
              float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;
              float baseStrength = clamp((0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) + (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)), 0.0, 1.0);
              return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
            }

            void main() {
              vec2 coord = vec2(gl_FragCoord.x, iResolution.y - gl_FragCoord.y);
              vec2 finalRayDir = rayDir;
              if (mouseInfluence > 0.0) {
                vec2 mDir = normalize((mousePos * iResolution.xy) - rayPos);
                finalRayDir = normalize(mix(rayDir, mDir, mouseInfluence));
              }
              float r1 = rayStrength(rayPos, finalRayDir, coord, 36.2214, 21.11349, 1.5 * raysSpeed);
              float r2 = rayStrength(rayPos, finalRayDir, coord, 22.3991, 18.0234, 1.1 * raysSpeed);
              vec3 result = vec3(r1 * 0.5 + r2 * 0.4);
              if (noiseAmount > 0.0) {
                result *= (1.0 - noiseAmount + noiseAmount * noise(coord * 0.01 + iTime * 0.1));
              }
              float brightness = 1.0 - (coord.y / iResolution.y);
              result *= vec3(0.1 + brightness * 0.8, 0.3 + brightness * 0.6, 0.5 + brightness * 0.5);
              if (saturation != 1.0) {
                float gray = dot(result, vec3(0.299, 0.587, 0.114));
                result = mix(vec3(gray), result, saturation);
              }
              gl_FragColor = vec4(result * raysColor, 1.0);
            }
          `;

      const uniforms = {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([0, 0]) },
        rayPos: { value: new Float32Array([0, 0]) },
        rayDir: { value: new Float32Array([0, 1]) },
        raysColor: { value: hexToRgb(raysColor) },
        raysSpeed: { value: raysSpeed },
        lightSpread: { value: lightSpread },
        rayLength: { value: rayLength },
        pulsating: { value: pulsating ? 1.0 : 0.0 },
        fadeDistance: { value: fadeDistance },
        saturation: { value: saturation },
        mousePos: { value: new Float32Array([0.5, 0.5]) },
        mouseInfluence: { value: effectiveMouseInfluence },
        noiseAmount: { value: effectiveNoiseAmount },
        distortion: { value: effectiveDistortion }
      };
      uniformsRef.current = uniforms;

      const geometry = new Triangle(gl);
      const program = new Program(gl, { vertex: vert, fragment: frag, uniforms });
      mesh = new Mesh(gl, { geometry, program });

      const applySize = () => {
        if (!containerRef.current) return;
        const { clientWidth: width, clientHeight: height } = containerRef.current;
        if (!width || !height) return;
        const sizeUnchanged = width === lastWidth && height === lastHeight;
        if (sizeUnchanged) return;
        lastWidth = width;
        lastHeight = height;
        renderer.setSize(width, height);
        const w = width * renderer.dpr;
        const h = height * renderer.dpr;
        resolutionRef.current.width = w;
        resolutionRef.current.height = h;
        resolutionRef.current.dpr = renderer.dpr;
        uniforms.iResolution.value[0] = w;
        uniforms.iResolution.value[1] = h;
        const { anchor, dir } = getAnchorAndDir(raysOriginRef.current, w, h);
        uniforms.rayPos.value.set(anchor);
        uniforms.rayDir.value.set(dir);
        if (mesh) {
          renderer.render({ scene: mesh });
        }
      };

      const updateSize = () => {
        cancelAnimationFrame(resizeRafId);
        resizeRafId = requestAnimationFrame(applySize);
      };
      anchorState.current.update = () => applySize();

      resizeObserver = new ResizeObserver(updateSize);
      resizeObserver.observe(containerRef.current);
      containerRef.current.appendChild(gl.canvas);
      updateSize();

      const loop = (t: number) => {
        animationId = requestAnimationFrame(loop);

        if (t - lastFrameTime < frameInterval) return;
        lastFrameTime = t;

        const u = uniformsRef.current;
        if (!u || !mesh) return;
        const frameDelta = t - lastFrameTime;
        if (frameDelta > frameInterval * 1.8) {
          overloadCount += 1;
          recoverCount = 0;
          if (overloadCount >= 10) {
            overloadCount = 0;
            if (targetFps > deviceProfile.minFps) {
              targetFps = Math.max(deviceProfile.minFps, targetFps - 6);
              frameInterval = 1000 / targetFps;
            }
          }
        } else {
          recoverCount += 1;
          if (recoverCount >= 120) {
            recoverCount = 0;
            if (targetFps < deviceProfile.targetFps) {
              targetFps = Math.min(deviceProfile.targetFps, targetFps + 3);
              frameInterval = 1000 / targetFps;
            }
          }
        }

        u.iTime.value = t * 0.001;

        if (effectiveFollowMouse && effectiveMouseInfluence > 0.0) {
          const s = 0.92;
          smoothMouseRef.current.x = smoothMouseRef.current.x * s + mouseRef.current.x * (1 - s);
          smoothMouseRef.current.y = smoothMouseRef.current.y * s + mouseRef.current.y * (1 - s);
          u.mousePos.value[0] = smoothMouseRef.current.x;
          u.mousePos.value[1] = smoothMouseRef.current.y;
        }

        renderer.render({ scene: mesh });

        if (!hasSetReady) {
          hasSetReady = true;
          setIsReady(true);
        }
      };

      animationId = requestAnimationFrame(loop);
    };

    init();

    return () => {
      cancelAnimationFrame(animationId);
      cancelAnimationFrame(resizeRafId);
      resizeObserver?.disconnect();
      if (rendererRef.current) {
        const gl = rendererRef.current.gl;
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        gl.canvas.remove();
      }
      mesh = null;
      anchorState.current.update = null;
      rendererRef.current = null;
      uniformsRef.current = null;
      resolutionState.current.width = 0;
      resolutionState.current.height = 0;
    };
  }, [
    isVisible,
    isPageVisible,
    deviceProfile.dprCap,
    deviceProfile.targetFps,
    deviceProfile.minFps,
    effectiveFollowMouse,
    effectiveMouseInfluence,
    raysColor,
    raysSpeed,
    lightSpread,
    rayLength,
    pulsating,
    fadeDistance,
    saturation,
    effectiveNoiseAmount,
    effectiveDistortion
  ]);

  useEffect(() => {
    const u = uniformsRef.current;
    if (!u) return;
    u.raysColor.value = hexToRgb(raysColor);
    u.raysSpeed.value = raysSpeed;
    u.lightSpread.value = lightSpread;
    u.rayLength.value = rayLength;
    u.pulsating.value = pulsating ? 1.0 : 0.0;
    u.fadeDistance.value = fadeDistance;
    u.saturation.value = saturation;
    u.mouseInfluence.value = effectiveMouseInfluence;
    u.noiseAmount.value = effectiveNoiseAmount;
    u.distortion.value = effectiveDistortion;
  }, [
    raysColor,
    raysSpeed,
    lightSpread,
    rayLength,
    pulsating,
    fadeDistance,
    saturation,
    effectiveMouseInfluence,
    effectiveNoiseAmount,
    effectiveDistortion
  ]);

  useEffect(() => {
    const u = uniformsRef.current;
    if (!u) return;
    const { width, height } = resolutionRef.current;
    if (!width || !height) return;
    const { anchor, dir } = getAnchorAndDir(raysOrigin, width, height);
    u.rayPos.value.set(anchor);
    u.rayDir.value.set(dir);
    anchorRef.current.update?.();
  }, [raysOrigin]);

  useEffect(() => {
    if (!effectiveFollowMouse) return;
    const handleMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseRef.current.x = Math.min(1, Math.max(0, x));
      mouseRef.current.y = Math.min(1, Math.max(0, y));
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [effectiveFollowMouse]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        opacity: isReady ? 1 : 0,
        transition: 'opacity 0.6s ease-out',
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}
    />
  );
};

export default React.memo(LightRays);
