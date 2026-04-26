import type { Metadata } from "next";
import Footer from "../components/Footer";
import LegalLayout from "../components/LegalLayout";
import HeaderShell from "../components/HeaderShell";
import BobBubble from "../components/BobBubble";
import SupportFaq from "./SupportFaq";

export const metadata: Metadata = {
  title: "Support — HoloBob",
};

export default function SupportPage() {
  return (
    <>
      <HeaderShell />
      <LegalLayout title="Support" lastUpdated="April 25, 2026">
        <BobBubble mood="happy">
          Stuck on something? I&rsquo;ll help — but read the FAQ first, that&rsquo;s where most
          stuff lives.
        </BobBubble>
        <h2 style={{ marginTop: 40 }}>FAQ</h2>
        <SupportFaq />
        <h2>Contact us</h2>
        <p>
          Email <strong>support@holobob.com</strong>. Include your account email + a screenshot
          if you can. We answer within 1 business day.
        </p>
        <h2>Status</h2>
        <p>
          System status:{" "}
          <strong style={{ color: "var(--green)" }}>● All systems operational</strong>
        </p>
      </LegalLayout>
      <Footer />
    </>
  );
}
