import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | NOVUS APPAREL - Engineering Excellence. Creating Comfort.",
    default: "NOVUS APPAREL | Global Apparel Manufacturing & Textile Innovation",
  },
  description:
    "Novus Apparel Limited — A member of the Sri Dhanalakshmi Group (est. 1971, USD $160M Group Turnover). Providing vertical end-to-end solutions from technical fiber research and spinning to advanced apparel manufacturing with global presence across India, USA, and China.",
  keywords: [
    "Novus Apparel",
    "Apparel Manufacturing",
    "Textile Technology",
    "Sri Dhanalakshmi Group",
    "Renaissance Fabric",
    "Technical Fabrics",
    "Global Sourcing",
    "Garment Innovation",
    "Sustainable Textile Manufacturing",
    "Wind Powered Mills",
  ],
  authors: [{ name: "Novus Apparel Limited" }],
  openGraph: {
    title: "NOVUS APPAREL | Engineering Excellence. Creating Comfort.",
    description: "Vertical apparel manufacturing & textile innovation across India, USA, and China. Member of Sri Dhanalakshmi Group (est. 1971, USD $160M).",
    url: "https://novusapparels.com",
    siteName: "Novus Apparel Limited",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-novus-navy-deepest text-novus-ivory font-sans antialiased selection:bg-novus-gold selection:text-novus-navy-deepest min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
