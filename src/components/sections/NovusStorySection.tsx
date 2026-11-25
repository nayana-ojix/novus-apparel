"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, History, Compass, Sparkles, Layers } from "lucide-react";
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

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="py-24 lg:py-36 bg-sand/35 border-b border-sand/70 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header Eyebrow */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-olive animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-ultra text-olive font-bold">
              SECTION 02 // THE NOVUS STORY
            </span>
          </div>

          <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-widest text-charcoal/50">
            HERITAGE • CRAFTSMANSHIP • EVOLUTION
          </span>
        </div>

        {/* Top Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Title & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-charcoal leading-[1.02]">
              <KineticText type="words" delay={0.1} stagger={0.05}>
                ROOTED IN FIVE DECADES OF TEXTILE STEWARDSHIP.
              </KineticText>
            </h2>

            <div className="w-20 h-1 bg-burnt rounded-full" />

            <p className="font-body text-lg sm:text-xl text-charcoal/85 font-light leading-relaxed">
              NOVUS APPAREL is an apparel solutions business associated with{" "}
              <strong className="font-semibold text-charcoal">Sri Dhanalakshmi Group</strong>,
              an esteemed industrial collective established in{" "}
              <strong className="font-semibold text-burnt">1971</strong>.
            </p>

            <p className="font-body text-base text-charcoal/70 leading-relaxed font-light">
              For over fifty years, the group has stood for uncompromising integrity, textile precision, and agricultural stewardship. Building upon this deep industrial heritage, NOVUS APPAREL was created to provide a modern, forward-thinking bridge between fiber science and global fashion brands.
            </p>

            {/* Micro Quote Banner */}
            <div className="p-5 rounded-2xl bg-cream border border-sand/80 shadow-sm flex items-start gap-4">
              <span className="text-2xl font-serif text-burnt font-bold leading-none">&ldquo;</span>
              <p className="font-display text-xs sm:text-sm text-charcoal font-medium leading-relaxed italic">
                From raw fiber physics to tailored international collections, we honor craftsmanship while engineering for the global market.
              </p>
            </div>
          </div>

          {/* Right Heritage Monument Box with Rotating Stamp */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard tiltDegree={8}>
              <div className="p-8 sm:p-10 rounded-3xl bg-cream border border-sand shadow-sm relative overflow-hidden space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal/50 font-bold block">
                    FOUNDATION YEAR
                  </span>
                  <CurvedTextBadge
                    text="SRI DHANALAKSHMI GROUP • EST. 1971 • "
                    size={80}
                    className="text-burnt"
                  />
                </div>

                <div className="font-display text-6xl sm:text-7xl font-bold text-burnt tracking-tight">
                  1971
                </div>

                <h3 className="font-display text-xl font-bold text-charcoal uppercase">
                  Sri Dhanalakshmi Group Legacy
                </h3>

                <p className="font-body text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                  Five decades of industrial continuity, vertical spinning expertise, and sustainable infrastructure provide the solid bedrock for NOVUS&apos;s agile international apparel solutions.
                </p>

                <div className="pt-4 border-t border-sand flex items-center justify-between text-xs font-mono uppercase tracking-wider text-olive font-bold">
                  <span>ESTABLISHED HERITAGE</span>
                  <span>50+ YEARS</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Dual Authentic Photographic Layout with Motion Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16">
          {/* Mill & Fiber Origins */}
          <motion.div
            style={{ y: parallaxY }}
            className="md:col-span-7 relative group rounded-3xl overflow-hidden bg-sand aspect-[16/10] border border-sand/80 shadow-sm"
          >
            <Image
              src="/images/editorial/heritage-mill.jpg"
              alt="Sri Dhanalakshmi Group spinning and textile heritage"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-cream">
              <span className="text-[10px] font-mono uppercase tracking-widest text-burnt-light font-bold block mb-1">
                INDUSTRIAL ORIGIN
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight">
                From Fiber & Spinning Craftsmanship
              </h4>
              <p className="text-xs text-cream/70 font-light mt-1 max-w-md">
                Our legacy was forged on the mill floor—understanding yarn twists, ring-spun compact cotton, and fiber integrity.
              </p>
            </div>
          </motion.div>

          {/* Precision Tailoring Evolution */}
          <div className="md:col-span-5 relative group rounded-3xl overflow-hidden bg-sand aspect-[16/10] md:aspect-auto border border-sand/80 shadow-sm flex flex-col justify-end p-6 sm:p-8">
            <Image
              src="/images/editorial/heritage-archive.jpg"
              alt="Archival textile development and pattern precision"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent" />
            <div className="relative z-10 text-cream">
              <span className="text-[10px] font-mono uppercase tracking-widest text-olive-light font-bold block mb-1">
                EVOLUTION
              </span>
              <h4 className="font-display text-xl font-bold uppercase tracking-tight">
                To Complete Apparel Solutions
              </h4>
              <p className="text-xs text-cream/70 font-light mt-1">
                Combining science, technology, and engineering to deliver finished garments across shirts, bottoms, and activewear for global brands.
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Principles Triptych */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
          <TiltCard tiltDegree={6}>
            <div className="p-6 rounded-2xl bg-cream border border-sand/80 shadow-sm h-full flex flex-col justify-between">
              <span className="font-mono text-xs text-burnt font-bold block mb-2">01 // SCIENCE</span>
              <h4 className="font-display text-base font-bold text-charcoal uppercase mb-2">
                Polymer & Material Physics
              </h4>
              <p className="font-body text-xs text-charcoal/70 leading-relaxed font-light">
                Investigating the microscopic behavior of fibers—from high-count combed cotton to micro-denier polyesters and cellulosic blends.
              </p>
            </div>
          </TiltCard>

          <TiltCard tiltDegree={6}>
            <div className="p-6 rounded-2xl bg-cream border border-sand/80 shadow-sm h-full flex flex-col justify-between">
              <span className="font-mono text-xs text-olive font-bold block mb-2">02 // TECHNOLOGY</span>
              <h4 className="font-display text-base font-bold text-charcoal uppercase mb-2">
                Digital Pattern & Fit
              </h4>
              <p className="font-body text-xs text-charcoal/70 leading-relaxed font-light">
                Utilizing rapid prototyping and precision pattern geometry to ensure zero seam-torque, ergonomic movement, and sizing fidelity.
              </p>
            </div>
          </TiltCard>

          <TiltCard tiltDegree={6}>
            <div className="p-6 rounded-2xl bg-cream border border-sand/80 shadow-sm h-full flex flex-col justify-between">
              <span className="font-mono text-xs text-charcoal font-bold block mb-2">03 // ENGINEERING</span>
              <h4 className="font-display text-base font-bold text-charcoal uppercase mb-2">
                Coordinated Execution
              </h4>
              <p className="font-body text-xs text-charcoal/70 leading-relaxed font-light">
                Bridging design studios with vetted partner manufacturing lines across international supply corridors.
              </p>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
