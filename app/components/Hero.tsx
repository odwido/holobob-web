import BobBubble from "./BobBubble";
import type { Persona } from "../lib/persona";

const headlines = {
  collector: {
    eyebrow: "For collectors",
    titleLead: "Scan any card.",
    titleTail: "Know what it’s worth.",
    sub: "Bob watches your portfolio, reads the market, and pings you the moment something moves. Pokémon, MTG, One Piece, sports — all of it, one app.",
    bob: "I’ll watch comps and ping you when something in your collection moves. Try me — drop a card and I’ll give you a price reference.",
  },
  vendor: {
    eyebrow: "For traders & vendors",
    titleLead: "Walk the floor.",
    titleTail: "Out-deal everyone.",
    sub: "Tradeshow mode, live deal calc, slab cert lookup, negotiation strategy. Bob runs the math while you make the sale.",
    bob: "Looking solid! Pull a cert, scan a raw, and I’ll model the spread before you shake hands.",
  },
} as const;

export default function Hero({ persona }: { persona: Persona }) {
  const h = headlines[persona];
  return (
    <section className="hb-hero">
      <div className="hb-hero-glow" />
      <div className="hb-hero-grid">
        <div className="hb-hero-text">
          <div className="hb-eyebrow">{h.eyebrow}</div>
          <h1 className="hb-h1">
            <span className="hb-grad-text">{h.titleLead}</span>
            <br />
            {h.titleTail}
          </h1>
          <p className="hb-sub">{h.sub}</p>
          <a className="hb-cta-primary" href="#waitlist">
            Get on the waitlist <span aria-hidden>›</span>
          </a>
          <div className="hb-tag">SCAN. PRICE. TRACK. COLLECT.</div>
        </div>
        <div className="hb-hero-art">
          <div className="hb-hero-wordmark">
            <span className="holo">HOLO</span>
            <span className="bob">BOB</span>
          </div>
          <div className="hb-mascot-bare">
            <img src="/holobob-companion.png" alt="HoloBob" />
          </div>
          <BobBubble mood="happy">{h.bob}</BobBubble>
        </div>
      </div>
    </section>
  );
}
