import { defineSound } from "@web-kits/audio";

export const sounds = {
  tap: defineSound({
    source: { type: "noise" },
    filter: { type: "bandpass", frequency: 3200, resonance: 1.5 },
    envelope: { decay: 0.012 },
    gain: 0.06,
  }),
  nav: defineSound({
    source: { type: "triangle", frequency: { start: 700, end: 500 } },
    envelope: { decay: 0.025 },
    gain: 0.05,
  }),
  home: defineSound({
    layers: [
      { source: { type: "sine", frequency: 180 }, envelope: { decay: 0.05 }, gain: 0.08 },
      {
        source: { type: "noise", color: "pink" },
        filter: { type: "lowpass", frequency: 900 },
        envelope: { decay: 0.02 },
        gain: 0.05,
      },
    ],
  }),
  footer: defineSound({
    source: { type: "sine", frequency: 2600 },
    envelope: { decay: 0.02 },
    gain: 0.025,
  }),
  card: defineSound({
    source: { type: "sine", frequency: { start: 260, end: 620 } },
    envelope: { decay: 0.05 },
    gain: 0.07,
  }),
  tab: defineSound({
    source: { type: "sine", frequency: 900, fm: { ratio: 1.5, depth: 1 } },
    envelope: { decay: 0.03 },
    gain: 0.05,
  }),
  toggle: defineSound({
    source: { type: "noise" },
    filter: { type: "bandpass", frequency: 4500, resonance: 2 },
    envelope: { decay: 0.01 },
    gain: 0.05,
  }),
  check: defineSound({
    layers: [
      { source: { type: "triangle", frequency: 1046 }, envelope: { decay: 0.12 }, gain: 0.05 },
      { source: { type: "sine", frequency: 2093 }, envelope: { decay: 0.08 }, gain: 0.02 },
    ],
  }),
  fold: defineSound({
    source: { type: "noise", color: "pink" },
    filter: { type: "lowpass", frequency: 1200 },
    envelope: { attack: 0.01, decay: 0.06 },
    gain: 0.06,
  }),
  open: defineSound({
    source: { type: "triangle", frequency: { start: 420, end: 880 } },
    envelope: { attack: 0.005, decay: 0.06 },
    gain: 0.06,
  }),
  close: defineSound({
    source: { type: "triangle", frequency: { start: 880, end: 420 } },
    envelope: { attack: 0.005, decay: 0.05 },
    gain: 0.05,
  }),
  pageOpen: defineSound({
    layers: [
      {
        source: { type: "noise", color: "pink" },
        filter: { type: "bandpass", frequency: 600, resonance: 1.2, envelope: { attack: 0.1, peak: 3000, decay: 0.1 } },
        envelope: { attack: 0.06, decay: 0.16 },
        gain: 0.06,
      },
      {
        source: { type: "sine", frequency: { start: 440, end: 990 } },
        envelope: { attack: 0.01, decay: 0.14 },
        gain: 0.05,
        delay: 0.03,
      },
    ],
  }),
  pageClose: defineSound({
    layers: [
      {
        source: { type: "noise", color: "pink" },
        filter: { type: "bandpass", frequency: 3000, resonance: 1.2, envelope: { attack: 0.08, peak: 500, decay: 0.08 } },
        envelope: { attack: 0.03, decay: 0.14 },
        gain: 0.05,
      },
      {
        source: { type: "sine", frequency: { start: 880, end: 390 } },
        envelope: { attack: 0.01, decay: 0.12 },
        gain: 0.05,
      },
    ],
  }),
  tick: defineSound({
    source: { type: "sine", frequency: 1800 },
    envelope: { decay: 0.015 },
    gain: 0.03,
  }),
  cardHover: defineSound({
    source: { type: "sine", frequency: 600 },
    envelope: { decay: 0.03 },
    gain: 0.03,
  }),
  copy: defineSound({
    layers: [
      { source: { type: "sine", frequency: 880 }, envelope: { decay: 0.12 }, gain: 0.12 },
      { source: { type: "sine", frequency: 1320 }, envelope: { decay: 0.2 }, gain: 0.1, delay: 0.07 },
    ],
  }),
  flutter: defineSound({
    source: { type: "noise", color: "pink" },
    filter: { type: "bandpass", frequency: 1400, resonance: 2 },
    envelope: { attack: 0.01, decay: 0.25 },
    lfo: { type: "square", frequency: 22, depth: 0.15, target: "gain" },
    gain: 0.15,
  }),
};

export type SoundName = keyof typeof sounds;
