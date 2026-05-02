"use client";

import Link from "next/link";
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
      <Link href="/" className="hb-brand" aria-label="HoloBob — home">
        <span className="hb-brand-mascot">
          <img src="/holobob-companion.png" alt="" />
        </span>
        <div className="hb-wordmark">
          <span className="hb-holo">HOLO</span>
          <span className="hb-bob">BOB</span>
        </div>
      </Link>
      <nav className="hb-nav">
        <Link href="/#features">Features</Link>
        <Link href="/#waitlist">Waitlist</Link>
        <Link href="/support">Support</Link>
      </nav>
      <PersonaToggle persona={persona} setPersona={setPersona} />
    </header>
  );
}
