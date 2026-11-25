"use client";

import "./globals.css";
import { useEffect } from "react";
import CustomCursor from "@/components/motion/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Dynamic import Lenis for smooth scrolling
    let lenis: any;
    import("@studio-freight/lenis").then((Lenis) => {
      lenis = new Lenis.default({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    });

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>NOVUS APPAREL | From Thread to Possibility</title>
        <meta
          name="description"
          content="Novus Apparel Limited — Associated with Sri Dhanalakshmi Group (est. 1971). Global apparel solutions combining science, technology, and engineering across shirts, bottoms, and activewear with a vetted partner manufacturing network. Offices in India, USA, and China."
        />
        <meta
          name="keywords"
          content="Novus Apparel, Sri Dhanalakshmi Group, Apparel Solutions, Fabric Innovation, Textile Engineering, Partner Manufacturing Network, Shirts, Bottoms, Activewear, Cotton, Renaissance"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="NOVUS APPAREL — From Thread to Possibility" />
        <meta
          property="og:description"
          content="Global apparel solutions combining science, technology, and engineering. Associated with Sri Dhanalakshmi Group (est. 1971)."
        />
        <meta property="og:url" content="https://novusapparels.com" />
        <meta property="og:site_name" content="Novus Apparel Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
      </head>
      <body className="bg-cream text-charcoal font-body antialiased min-h-screen overflow-x-hidden selection:bg-olive selection:text-cream">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
