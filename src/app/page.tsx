"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import NovusStorySection from "@/components/sections/NovusStorySection";
import WhatNovusDoesSection from "@/components/sections/WhatNovusDoesSection";
import ThreadToApparelSection from "@/components/sections/ThreadToApparelSection";
import ManufacturingNetworkPreviewSection from "@/components/sections/ManufacturingNetworkPreviewSection";
import InnovationTechnologySection from "@/components/sections/InnovationTechnologySection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import GlobalPresenceSection from "@/components/sections/GlobalPresenceSection";
import ContactSection from "@/components/sections/ContactSection";

// Dynamic import for 3D component with SSR disabled
const FabricRibbon3D = dynamic(
  () => import("@/components/three/FabricRibbon3D"),
  { ssr: false }
);

export default function HomePage() {
  return (
    <>
      {/* 3D Fabric Ribbon - fixed, travels through the page */}
      <FabricRibbon3D />

      {/* Navigation */}
      <Navbar />

      <main id="main-content" className="relative z-10">
        {/* SECTION 01 — CINEMATIC HERO */}
        <HeroSection />

        {/* SECTION 02 — THE NOVUS STORY */}
        <NovusStorySection />

        {/* SECTION 03 — WHAT NOVUS DOES */}
        <WhatNovusDoesSection />

        {/* SECTION 04 — FROM THREAD TO APPAREL (THE NOVUS THREAD) */}
        <ThreadToApparelSection />

        {/* SECTION 05 — MANUFACTURING NETWORK */}
        <ManufacturingNetworkPreviewSection />

        {/* SECTION 06 — INNOVATION AND TECHNOLOGY */}
        <InnovationTechnologySection />

        {/* SECTION 07 — LEADERSHIP */}
        <LeadershipSection />

        {/* SECTION 08 — GLOBAL PRESENCE */}
        <GlobalPresenceSection />

        {/* SECTION 09 — CONTACT */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
