import type { Persona } from "../lib/persona";

type Feature = { img?: string; ico?: string; title: string; body: string };

const features: Record<Persona, Feature[]> = {
  collector: [
    {
      img: "/icons/scan.png",
      title: "Instant scans",
      body: "Camera-first. OCR + image search confirm in under a second. Holo, reverse holo, and 1st-edition markers handled.",
    },
    {
      ico: "📈",
      title: "Honest prices",
      body: "Multi-source weighted median — eBay sold, JustTCG, TCGplayer. We show you where every number came from.",
    },
    {
      img: "/icons/portfolio.png",
      title: "Master Set tracking",
      body: "Auto-detects when a scan completes a set. Trophy moment, share card, on to the next chase.",
    },
    {
      ico: "🛎️",
      title: "Bob alerts",
      body: "Bob pings you when anything in or near your collection moves — adjacent spikes, threshold crosses, slab freshness.",
    },
  ],
  vendor: [
    {
      img: "/icons/tradeshow.png",
      title: "Tradeshow mode",
      body: "Live session timer, running P&L, quick lookup, deal calc. Bob keeps the books while you work the floor.",
    },
    {
      ico: "🤝",
      title: "Negotiation engine",
      body: "Pulls comps, calculates fees, builds your strategy. Use the recommendation or override — Bob shows the math.",
    },
    {
      img: "/icons/search.png",
      title: "Slab cert lookup",
      body: "PSA, BGS, CGC, SGC — all first-class. Cert verified pulls real comps; legacy slabs flagged transparently.",
    },
    {
      img: "/icons/portfolio.png",
      title: "Sealed product",
      body: "Track product-level markets, not just singles. Bob tells you when a sealed SKU heats up.",
    },
  ],
};

export default function FeatureGrid({ persona }: { persona: Persona }) {
  return (
    <section className="hb-features" id="features">
      <div className="hb-section-eyebrow">What you get</div>
      <h2 className="hb-h2">
        Everything most apps charge extra for.
        <br />
        <span className="hb-grad-text">In one app.</span>
      </h2>
      <div className="hb-feature-grid">
        {features[persona].map((f) => (
          <div className="hb-feature-card" key={f.title}>
            <div className="hb-feature-ico">
              {f.img ? <img src={f.img} alt="" /> : f.ico}
            </div>
            <div className="hb-feature-title">{f.title}</div>
            <div className="hb-feature-body">{f.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
