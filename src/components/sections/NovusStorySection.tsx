"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CurvedTextBadge from "@/components/motion/CurvedTextBadge";
import TiltCard from "@/components/motion/TiltCard";
import KineticText from "@/components/motion/KineticText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function NovusStorySection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="py-20 lg:py-32 bg-sand/35 border-b border-sand/70 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header Eyebrow */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-olive animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-olive font-bold">
              02 / THE HERITAGE
            </span>
          </div>

          <span className="text-xs font-mono uppercase tracking-wider text-charcoal/50">
            EST. 1971 &bull; SRI DHANALAKSHMI GROUP
          </span>
        </div>

        {/* Short, Powerful Headline in Clash Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-12">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-charcoal leading-[0.96]">
              <KineticText type="words" delay={0.1} stagger={0.05}>
                ROOTED IN 1971.
              </KineticText>{" "}
              <br />
              <span className="text-burnt">
                <KineticText type="words" delay={0.3} stagger={0.05}>
                  FIVE DECADES OF EXCELLENCE.
                </KineticText>
              </span>
            </h2>

            {/* Very Concise Statement from Original Website */}
            <p className="font-body text-base sm:text-lg text-charcoal/80 font-normal leading-relaxed max-w-2xl pt-2">
              NOVUS APPAREL is part of Sri Dhanalakshmi Group, established in 1971. An extensive R&D and global marketing company combining science, technology and engineering to deliver one-stop vertical solutions from design to the finished product.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-end">
            <TiltCard tiltDegree={8}>
              <div className="p-8 rounded-3xl bg-cream border border-sand shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal/50 font-bold">
                    FOUNDED
                  </span>
                  <CurvedTextBadge
                    text="SRI DHANALAKSHMI GROUP • EST. 1971 • "
                    size={72}
                    className="text-burnt"
                  />
                </div>
                <div className="font-display text-6xl font-bold text-burnt tracking-tight">
                  1971
                </div>
                <p className="font-body text-xs text-charcoal/70 font-medium">
                  50+ years of industrial textile stewardship.
                </p>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Authentic Imagery Grid with Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8">
          <motion.div
            style={{ y: parallaxY }}
            className="md:col-span-7 relative rounded-3xl overflow-hidden bg-sand aspect-[16/10] border border-sand shadow-sm group"
          >
            <Image
              src="/images/editorial/heritage-mill.jpg"
              alt="Sri Dhanalakshmi Group textile heritage"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-cream">
              <span className="text-[10px] font-mono uppercase tracking-widest text-burnt-light font-bold block mb-1">
                TEXTILE HERITAGE
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight">
                Vertical Spinning & Craftsmanship
              </h4>
            </div>
          </motion.div>

          <div className="md:col-span-5 relative rounded-3xl overflow-hidden bg-sand aspect-[16/10] md:aspect-auto border border-sand shadow-sm flex flex-col justify-end p-6 sm:p-8 group">
            <Image
              src="/images/editorial/heritage-archive.jpg"
              alt="Archival garment engineering"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
            <div className="relative z-10 text-cream">
              <span className="text-[10px] font-mono uppercase tracking-widest text-olive-light font-bold block mb-1">
                MODERN EVOLUTION
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight">
                Complete Apparel Solutions
              </h4>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars: Science, Technology, Engineering */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 rounded-2xl bg-cream border border-sand/70 shadow-sm">
            <span className="font-mono text-xs text-burnt font-bold block mb-1">01 / SCIENCE</span>
            <h4 className="font-display text-base font-bold text-charcoal uppercase">
              Material Physics
            </h4>
            <p className="font-body text-xs text-charcoal/70 mt-1 font-normal">
              Polymer science, combed cottons, micro-filaments & cellulosic blends.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-cream border border-sand/70 shadow-sm">
            <span className="font-mono text-xs text-olive font-bold block mb-1">02 / TECHNOLOGY</span>
            <h4 className="font-display text-base font-bold text-charcoal uppercase">
              Digital Engineering
            </h4>
            <p className="font-body text-xs text-charcoal/70 mt-1 font-normal">
              Rapid digital sampling, ergonomic fit architecture & seam-torque mitigation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-cream border border-sand/70 shadow-sm">
            <span className="font-mono text-xs text-charcoal font-bold block mb-1">03 / EXECUTION</span>
            <h4 className="font-display text-base font-bold text-charcoal uppercase">
              Global Delivery
            </h4>
            <p className="font-body text-xs text-charcoal/70 mt-1 font-normal">
              Direct liaison across India (HQ), USA (Client Relations) & China (R&D).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
