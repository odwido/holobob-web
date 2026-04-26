import type { Persona } from "../lib/persona";

export default function AgenticBand({ persona }: { persona: Persona }) {
  const isVendor = persona === "vendor";
  return (
    <section className="hb-agentic" id="agentic">
      <div className="hb-agentic-card">
        <div className="hb-agentic-glow" />
        <div className="hb-agentic-inner">
          <div className="hb-agentic-eyebrow">
            <span className="hb-agentic-pulse" aria-hidden />
            <span>Live now · Event-driven</span>
            <span className="hb-agentic-sep">|</span>
            <span className="hb-agentic-soon">Agentic, powered by Claude — coming soon</span>
          </div>
          <h2 className="hb-h2 hb-agentic-h">
            {isVendor ? (
              <>
                Today, Bob calls the play.{" "}
                <span className="hb-grad-text">Tomorrow, Bob runs the booth.</span>
              </>
            ) : (
              <>
                Today, Bob watches the market.{" "}
                <span className="hb-grad-text">Tomorrow, Bob makes the move.</span>
              </>
            )}
          </h2>
          <p className="hb-agentic-body">
            {isVendor
              ? "HoloBob is built on event-driven signals — every scan, comp, and threshold cross feeds Bob’s playbook in real time. Soon, Bob becomes an agent: an autonomous Claude-powered partner that lists slabs, drafts counter-offers, and works the floor with you."
              : "HoloBob is built on event-driven signals — every scan, alert, and price move tunes what Bob tells you next. Soon, Bob becomes an agent: an autonomous Claude-powered partner that watches your collection, your wants, and your wallet — and acts when it counts."}
          </p>
          <div className="hb-agentic-track">
            <div className="hb-agentic-step now">
              <div className="hb-agentic-step-tag">Now</div>
              <div className="hb-agentic-step-title">Event-driven Bob</div>
              <div className="hb-agentic-step-body">
                Scans, alerts, and threshold-cross signals — Bob reacts the moment your portfolio
                moves.
              </div>
            </div>
            <div className="hb-agentic-arrow" aria-hidden>
              →
            </div>
            <div className="hb-agentic-step soon">
              <div className="hb-agentic-step-tag">Coming soon</div>
              <div className="hb-agentic-step-title">Agentic Bob · Claude-powered</div>
              <div className="hb-agentic-step-body">
                Bob takes initiative — works the booth, lists, negotiates, and protects your
                spread end-to-end.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
