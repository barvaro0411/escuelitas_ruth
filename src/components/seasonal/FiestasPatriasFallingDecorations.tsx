import type { CSSProperties } from "react";

type DecorationKind = "copihue" | "handkerchief" | "kite";

type FallingDecoration = {
  kind: DecorationKind;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotation: number;
  opacity: number;
  desktopOnly?: boolean;
};

const decorations: FallingDecoration[] = [
  {
    kind: "copihue",
    left: 4,
    size: 18,
    duration: 12.8,
    delay: 0.2,
    drift: 24,
    rotation: 75,
    opacity: 0.58,
  },
  {
    kind: "copihue",
    left: 16,
    size: 14,
    duration: 11.4,
    delay: 1.6,
    drift: -16,
    rotation: -55,
    opacity: 0.45,
    desktopOnly: true,
  },
  {
    kind: "copihue",
    left: 27,
    size: 20,
    duration: 13.8,
    delay: 0.8,
    drift: 20,
    rotation: 90,
    opacity: 0.52,
  },
  {
    kind: "copihue",
    left: 39,
    size: 16,
    duration: 11.8,
    delay: 2.3,
    drift: -18,
    rotation: 65,
    opacity: 0.44,
    desktopOnly: true,
  },
  {
    kind: "copihue",
    left: 51,
    size: 19,
    duration: 14.2,
    delay: 0.1,
    drift: 22,
    rotation: -75,
    opacity: 0.55,
  },
  {
    kind: "copihue",
    left: 62,
    size: 15,
    duration: 12.6,
    delay: 1.2,
    drift: -20,
    rotation: 70,
    opacity: 0.42,
    desktopOnly: true,
  },
  {
    kind: "copihue",
    left: 74,
    size: 21,
    duration: 13.5,
    delay: 2.6,
    drift: 17,
    rotation: 80,
    opacity: 0.5,
  },
  {
    kind: "copihue",
    left: 86,
    size: 16,
    duration: 11.9,
    delay: 0.5,
    drift: -15,
    rotation: -65,
    opacity: 0.46,
    desktopOnly: true,
  },
  {
    kind: "copihue",
    left: 95,
    size: 19,
    duration: 14,
    delay: 1.9,
    drift: -22,
    rotation: 85,
    opacity: 0.54,
  },
  {
    kind: "copihue",
    left: 33,
    size: 13,
    duration: 12,
    delay: 3.2,
    drift: 12,
    rotation: -60,
    opacity: 0.38,
    desktopOnly: true,
  },
  {
    kind: "handkerchief",
    left: 66,
    size: 22,
    duration: 14.5,
    delay: 1.4,
    drift: -28,
    rotation: 45,
    opacity: 0.5,
  },
  {
    kind: "handkerchief",
    left: 10,
    size: 19,
    duration: 13.2,
    delay: 2.8,
    drift: 24,
    rotation: -40,
    opacity: 0.42,
    desktopOnly: true,
  },
  {
    kind: "kite",
    left: 90,
    size: 21,
    duration: 15,
    delay: 3.1,
    drift: -34,
    rotation: 35,
    opacity: 0.43,
    desktopOnly: true,
  },
];

function Copihue() {
  return (
    <svg viewBox="0 0 32 38" fill="none" focusable="false">
      <path
        d="M16 1.5c.2 5.7-2.7 8.2-6.2 11"
        stroke="#4f7d54"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9.2 10.2c5.3-1.9 12.3-.8 15.2 3.9 2.9 4.8-.2 9.7-3.2 13.7-1.7 2.3-2.9 5.2-3.3 8.1-3.8-2.2-8.7-4.6-11.2-8.1C2.6 22 3 14.1 9.2 10.2Z"
        fill="#c92f46"
        stroke="#9f1f35"
        strokeWidth="1.2"
      />
      <path
        d="M10.2 11.3c1.2 8.2 3.7 16 7.7 24.6M16.1 10.3c.2 8.1 1.1 16.1 1.8 25.6M21.3 12c-1.1 7.8-2.1 15.8-3.4 23.9"
        stroke="#ef6b78"
        strokeWidth="1"
        strokeLinecap="round"
        opacity=".8"
      />
    </svg>
  );
}

function Handkerchief() {
  return (
    <svg viewBox="0 0 40 32" fill="none" focusable="false">
      <path
        d="M3 23.5C10.2 4.2 23.7 12 36.5 4c-2.8 11.7-10.8 20.7-29 25.2Z"
        fill="#fff"
        stroke="#9db0ce"
        strokeWidth="1.3"
      />
      <path
        d="M7 25.7c10.4-3.2 18-9.1 25-17.4"
        stroke="#c5d2e5"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

function Kite() {
  return (
    <svg viewBox="0 0 38 48" fill="none" focusable="false">
      <path
        d="M19 2 35 18 19 34 3 18 19 2Z"
        fill="#fff8ed"
        stroke="#e5a91b"
        strokeWidth="1.2"
      />
      <path d="M19 2v32L3 18 19 2Z" fill="#2450a4" />
      <path d="m19 2 16 16-16 16V2Z" fill="#d52b1e" />
      <path
        d="M19 34c5 3-3 5 2 8 3 2 1 3 3 5"
        stroke="#6d7c92"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FiestasPatriasFallingDecorations() {
  return (
    <div className="fiestas-falling-decorations" aria-hidden="true">
      {decorations.map((decoration, index) => {
        const style = {
          left: `${decoration.left}%`,
          width: `${decoration.size}px`,
          height: `${decoration.size * 1.2}px`,
          "--fall-duration": `${decoration.duration}s`,
          "--fall-delay": `${decoration.delay}s`,
          "--fall-drift": `${decoration.drift}px`,
          "--fall-mid-drift": `${decoration.drift * 0.45}px`,
          "--fall-rotation": `${decoration.rotation}deg`,
          "--fall-mid-rotation": `${decoration.rotation * 0.55}deg`,
          "--fall-opacity": decoration.opacity,
        } as CSSProperties;

        return (
          <span
            className={`fiestas-falling-item${decoration.desktopOnly ? " fiestas-falling-desktop" : ""}`}
            style={style}
            key={`${decoration.kind}-${index}`}
          >
            {decoration.kind === "copihue" && <Copihue />}
            {decoration.kind === "handkerchief" && <Handkerchief />}
            {decoration.kind === "kite" && <Kite />}
          </span>
        );
      })}
    </div>
  );
}
