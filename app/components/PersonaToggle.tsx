"use client";

import type { Persona } from "../lib/persona";

export default function PersonaToggle({
  persona,
  setPersona,
}: {
  persona: Persona;
  setPersona: (p: Persona) => void;
}) {
  function pick(p: Persona) {
    setPersona(p);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="hb-persona" role="tablist" aria-label="Persona">
      <button
        role="tab"
        aria-selected={persona === "collector"}
        className={`hb-persona-opt ${persona === "collector" ? "on" : ""}`}
        onClick={() => pick("collector")}
      >
        Collecting
      </button>
      <button
        role="tab"
        aria-selected={persona === "vendor"}
        className={`hb-persona-opt vendor ${persona === "vendor" ? "on" : ""}`}
        onClick={() => pick("vendor")}
      >
        Trading
      </button>
    </div>
  );
}
