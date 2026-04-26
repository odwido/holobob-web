import type { Metadata } from "next";
import Footer from "../components/Footer";
import LegalLayout from "../components/LegalLayout";
import HeaderShell from "../components/HeaderShell";

export const metadata: Metadata = {
  title: "Privacy — HoloBob",
};

export default function PrivacyPage() {
  return (
    <>
      <HeaderShell />
      <LegalLayout title="Privacy" lastUpdated="April 25, 2026">
        <div className="hb-placeholder">
          <div className="hb-placeholder-tag">PLACEHOLDER</div>
          <p className="hb-placeholder-msg">Full privacy policy coming soon.</p>
          <p>
            This page is reserved. The complete privacy agreement will be drafted once the
            foundation is in place.
          </p>
          <p>
            Until then: HoloBob doesn&rsquo;t sell user data, doesn&rsquo;t share collection
            contents without your action, and doesn&rsquo;t train third-party models on your scans.
          </p>
          <p>
            Questions in the meantime? <strong>privacy@holobob.app</strong>
          </p>
        </div>
      </LegalLayout>
      <Footer />
    </>
  );
}
