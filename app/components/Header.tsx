"use client";

import PersonaToggle from "./PersonaToggle";
import type { Persona } from "../lib/persona";

export default function Header({
  persona,
  setPersona,
}: {
  persona: Persona;
  setPersona: (p: Persona) => void;
}) {
  return (
    <header className="hb-header">
      <div className="hb-brand">
        <img src="/holobob-companion.png" alt="" className="hb-brand-mascot" />
        <div className="hb-wordmark">
          <span className="hb-holo">HOLO</span>
          <span className="hb-bob">BOB</span>
        </div>
      </div>
      <nav className="hb-nav">
        <a href="#features">Features</a>
        <a href="#waitlist">Waitlist</a>
        <a href="/support">Support</a>
      </nav>
      <PersonaToggle persona={persona} setPersona={setPersona} />
    </header>
  );
}
