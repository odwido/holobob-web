"use client";

import { useRef, type MouseEvent } from "react";

export default function HoloMascot() {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", x.toString());
    el.style.setProperty("--my", y.toString());
    el.style.setProperty("--tilt-y", `${(x - 0.5) * 16}deg`);
    el.style.setProperty("--tilt-x", `${(0.5 - y) * 12}deg`);
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.removeProperty("--mx");
    el.style.removeProperty("--my");
    el.style.removeProperty("--tilt-x");
    el.style.removeProperty("--tilt-y");
  }

  return (
    <div
      ref={ref}
      className="hb-mascot-bare"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <span className="hb-mascot-floor" aria-hidden />
      <img src="/holobob-companion.png" alt="HoloBob" />
      <span className="hb-mascot-spec" aria-hidden />
      <span className="hb-mascot-shine" aria-hidden />
    </div>
  );
}
