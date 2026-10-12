"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

const vertex = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }`;

const fragment = `#version 300 es
precision highp float;
uniform float uTime;
uniform vec3 uColor;
uniform vec2 uResolution;
out vec4 fragColor;

vec3 blob(vec3 color, vec3 tint, vec2 p, vec2 center, float size) {
  vec2 d = p - center;
  return mix(color, tint, exp(-dot(d, d) / size));
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  float aspect = uResolution.x / uResolution.y;
  vec2 p = vec2(uv.x * aspect, uv.y);
  float t = uTime * 0.08;

  p += 0.06 * vec2(sin(p.y * 2.2 + t * 3.0), cos(p.x * 1.6 - t * 2.4));

  vec3 deep = uColor * 0.16;
  vec3 dark = uColor * 0.45;
  vec3 green = vec3(uColor.r * 0.6, uColor.g, uColor.b * 0.55);
  vec3 mint = mix(uColor, vec3(0.88, 1.0, 0.85), 0.35);

  vec3 color = deep;
  color = blob(color, dark, p, vec2(aspect * (0.2 + 0.15 * sin(t * 1.3)), 0.75 + 0.1 * cos(t)), 0.18);
  color = blob(color, green, p, vec2(aspect * (0.8 + 0.12 * cos(t * 0.9)), 0.85 + 0.08 * sin(t * 1.7)), 0.14);
  color = blob(color, uColor, p, vec2(aspect * (0.5 + 0.2 * sin(t * 0.7)), 1.05 + 0.06 * sin(t * 1.1)), 0.12);
  color = blob(color, mint, p, vec2(aspect * (0.45 + 0.18 * cos(t * 1.1)), 1.15 + 0.05 * cos(t * 1.9)), 0.05);

  color *= mix(0.6, 1.0, smoothstep(0.0, 0.6, uv.y));

  float grain = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5;
  color = max(color + grain * 0.02, 0.0);
  fragColor = vec4(color, max(color.r, max(color.g, color.b)));
}`;

function readColor(element: HTMLElement) {
  const ctx = document.createElement("canvas").getContext("2d")!;
  ctx.fillStyle = getComputedStyle(element).getPropertyValue("--color-primary").trim();
  ctx.fillRect(0, 0, 1, 1);
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
  return [r / 255, g / 255, b / 255];
}

function compile(gl: WebGL2RenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

export function AnimatedGradient({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current!;
    const gl = canvas.getContext("webgl2", { premultipliedAlpha: true, antialias: false });
    if (!gl) return;

    const program = gl.createProgram();
    gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, vertex));
    gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, fragment));
    gl.linkProgram(program);
    gl.useProgram(program);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "uTime");
    const uResolution = gl.getUniformLocation(program, "uResolution");
    gl.uniform3fv(gl.getUniformLocation(program, "uColor"), readColor(canvas));

    const draw = (time: number) => {
      gl.uniform1f(uTime, time * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const resize = () => {
      const scale = Math.min(window.devicePixelRatio, 1.5);
      canvas.width = canvas.clientWidth * scale;
      canvas.height = canvas.clientHeight * scale;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      draw(performance.now());
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    let frame = 0;
    const loop = (time: number) => {
      draw(time);
      frame = requestAnimationFrame(loop);
    };
    if (!reduceMotion) frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [reduceMotion]);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
