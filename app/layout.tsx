import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const press = Press_Start_2P({
  variable: "--font-press",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "HoloBob — Your AI agent for collecting cards.",
  description:
    "Scan any trading card. Know what it's worth. Bob watches your portfolio, reads the market, and pings you the moment something moves.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${press.variable} antialiased`}>
      <body className="hb-app">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
