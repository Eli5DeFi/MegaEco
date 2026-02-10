import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "MegaETH Ecosystem Dashboard",
  description:
    "Premium animated dashboard showcasing the entire MegaETH mainnet ecosystem — Protocol Flows, KPI Tracker, and Ecosystem Map.",
  openGraph: {
    title: "MegaETH Ecosystem Dashboard",
    description:
      "Explore the MegaETH ecosystem: animated protocol flows, Road to TGE KPIs, and a complete protocol directory.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ paddingTop: "var(--nav-height)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
