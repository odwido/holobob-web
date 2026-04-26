"use client";

import type { Persona } from "../lib/persona";

export default function PersonaToggle({
  persona,
  setPersona,
}: {
  persona: Persona;
  setPersona: (p: Persona) => void;
}) {
  return (
    <div className="hb-persona" role="tablist" aria-label="Persona">
      <button
        role="tab"
        aria-selected={persona === "collector"}
        className={`hb-persona-opt ${persona === "collector" ? "on" : ""}`}
        onClick={() => setPersona("collector")}
      >
        Collecting
      </button>
      <button
        role="tab"
        aria-selected={persona === "vendor"}
        className={`hb-persona-opt vendor ${persona === "vendor" ? "on" : ""}`}
        onClick={() => setPersona("vendor")}
      >
        Trading
      </button>
    </div>
  );
}
