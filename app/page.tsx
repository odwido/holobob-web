"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AgenticBand from "./components/AgenticBand";
import FeatureGrid from "./components/FeatureGrid";
import WaitlistForm from "./components/WaitlistForm";
import Footer from "./components/Footer";
import type { Persona } from "./lib/persona";

export default function Home() {
  const [persona, setPersona] = useState<Persona>("collector");
  return (
    <>
      <Header persona={persona} setPersona={setPersona} />
      <Hero persona={persona} />
      <AgenticBand persona={persona} />
      <FeatureGrid persona={persona} />
      <WaitlistForm />
      <Footer />
    </>
  );
}
