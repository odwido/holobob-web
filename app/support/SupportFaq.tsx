"use client";

import { useState } from "react";

const faqs = [
  {
    q: 'Why is my scan saying "match unsure"?',
    a: "Bob hasn’t confirmed the print. Re-scan in better light, or tap the suggestion that matches — Bob will learn from it.",
  },
  {
    q: "Where do prices come from?",
    a: "Weighted median of recent eBay sold listings, TCGplayer market, JustTCG and other public sources. Tap any price for the breakdown.",
  },
  {
    q: "How accurate are slab values?",
    a: "Cert-verified PSA/BGS/CGC/SGC pulls real comps. Legacy slabs without comps are flagged transparently.",
  },
  {
    q: "Can I export my collection?",
    a: "Yes — Settings → Data → Export. CSV, JSON, or share-link.",
  },
  {
    q: "Will HoloBob work offline?",
    a: "Browsing your collection works offline. Scans + price refresh need a connection.",
  },
];

export default function SupportFaq() {
  const [open, setOpen] = useState<number>(0);
  return (
    <div className="hb-faq">
      {faqs.map((f, i) => (
        <div className={`hb-faq-item ${open === i ? "open" : ""}`} key={i}>
          <button
            className="hb-faq-q"
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
          >
            <span>{f.q}</span>
            <span className="hb-faq-chev">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && <div className="hb-faq-a">{f.a}</div>}
        </div>
      ))}
    </div>
  );
}
