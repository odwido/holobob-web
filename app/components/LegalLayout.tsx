import Link from "next/link";
import type { ReactNode } from "react";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <main className="hb-legal">
      <div className="hb-legal-head">
        <Link href="/" className="hb-back">
          ‹ Home
        </Link>
        <h1 className="hb-h1" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
          {title}
        </h1>
        <div className="hb-legal-meta">Last updated {lastUpdated}</div>
      </div>
      <div className="hb-legal-body">{children}</div>
    </main>
  );
}
