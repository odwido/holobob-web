import Link from "next/link";

export default function Footer() {
  return (
    <footer className="hb-footer">
      <div className="hb-footer-row">
        <Link href="/" className="hb-footer-brand" aria-label="HoloBob — home">
          <span className="hb-holo small">HOLO</span>
          <span className="hb-bob small">BOB</span>
          <span className="hb-footer-sub">Scan. Price. Track. Collect.</span>
        </Link>
        <div className="hb-footer-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/support">Support</Link>
          <Link href="/#waitlist">Waitlist</Link>
        </div>
      </div>
      <div className="hb-footer-fine">
        © 2026 HoloBob. Bob is watching the market. Agentic Bob — powered by Claude — coming soon.
      </div>
    </footer>
  );
}
