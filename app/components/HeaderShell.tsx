"use client";

import { useState } from "react";
import Header from "./Header";
import type { Persona } from "../lib/persona";

/**
 * Persona-state-bearing wrapper for Header on non-landing pages
 * (privacy/terms/support) where the toggle has no downstream effect
 * but the chrome should still render.
 */
export default function HeaderShell() {
  const [persona, setPersona] = useState<Persona>("collector");
  return <Header persona={persona} setPersona={setPersona} />;
}
