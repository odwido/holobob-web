import type { Metadata } from "next";
import Footer from "../components/Footer";
import LegalLayout from "../components/LegalLayout";
import HeaderShell from "../components/HeaderShell";

export const metadata: Metadata = {
  title: "Terms — HoloBob",
};

export default function TermsPage() {
  return (
    <>
      <HeaderShell />
      <LegalLayout title="Terms" lastUpdated="April 25, 2026">
        <div className="hb-placeholder">
          <div className="hb-placeholder-tag">PLACEHOLDER</div>
          <p className="hb-placeholder-msg">Full terms of service coming soon.</p>
          <p>
            This page is reserved. Final terms will be drafted alongside the privacy policy once
            the foundation is in place.
          </p>
          <p>
            The short version: HoloBob&rsquo;s prices are{" "}
            <strong>references, not appraisals</strong>. Don&rsquo;t scrape, don&rsquo;t resell,
            and don&rsquo;t use the data to make trades you can&rsquo;t afford.
          </p>
          <p>
            Questions in the meantime? <strong>legal@holobob.app</strong>
          </p>
        </div>
      </LegalLayout>
      <Footer />
    </>
  );
}
