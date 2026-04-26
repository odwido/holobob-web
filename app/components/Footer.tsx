export default function Footer() {
  return (
    <footer className="hb-footer">
      <div className="hb-footer-row">
        <div className="hb-footer-brand">
          <span className="hb-holo small">HOLO</span>
          <span className="hb-bob small">BOB</span>
          <span className="hb-footer-sub">Scan. Price. Track. Collect.</span>
        </div>
        <div className="hb-footer-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/support">Support</a>
          <a href="/#waitlist">Waitlist</a>
        </div>
      </div>
      <div className="hb-footer-fine">
        © 2026 HoloBob. Bob is watching the market. Agentic Bob — powered by Claude — coming soon.
      </div>
    </footer>
  );
}
