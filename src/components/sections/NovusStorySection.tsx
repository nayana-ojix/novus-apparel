"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, History, Compass, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function NovusStorySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".story-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="py-24 lg:py-36 bg-sand/30 border-b border-sand/60 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header Eyebrow */}
        <div className="story-reveal flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-olive" />
          <span className="text-[11px] font-mono uppercase tracking-ultra text-olive font-bold">
            SECTION 02 // THE NOVUS STORY
          </span>
        </div>

        {/* Top Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Title & Mission */}
          <div className="lg:col-span-7 space-y-6 story-reveal">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-charcoal leading-[1.02]">
              ROOTED IN FIVE DECADES OF TEXTILE STEWARDSHIP.
            </h2>
            <div className="w-20 h-1 bg-burnt rounded-full" />
            <p className="font-body text-lg sm:text-xl text-charcoal/80 font-light leading-relaxed">
              NOVUS APPAREL is an apparel solutions business associated with{" "}
              <strong className="font-semibold text-charcoal">Sri Dhanalakshmi Group</strong>,
              an esteemed industrial collective established in{" "}
              <strong className="font-semibold text-burnt">1971</strong>.
            </p>
            <p className="font-body text-base text-charcoal/70 leading-relaxed font-light">
              For over fifty years, the group has stood for uncompromising integrity, textile precision, and agricultural stewardship. Building upon this deep industrial heritage, NOVUS APPAREL was created to provide a modern, forward-thinking bridge between fiber science and global fashion brands.
            </p>
          </div>

          {/* Right Heritage Stat Box */}
          <div className="lg:col-span-5 story-reveal space-y-6">
            <div className="p-8 rounded-2xl sm:rounded-3xl bg-cream border border-sand/80 shadow-sm relative overflow-hidden">
              <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal/50 block mb-2">
                HERITAGE FOUNDATION
              </span>
              <div className="font-display text-5xl sm:text-6xl font-bold text-burnt tracking-tight mb-2">
                1971
              </div>
              <h3 className="font-display text-lg font-bold text-charcoal uppercase mb-3">
                Sri Dhanalakshmi Group Legacy
              </h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed font-light">
                Five decades of industrial continuity, vertical expertise, and sustainable infrastructure provide the solid bedrock for NOVUS&apos;s agile international apparel solutions.
              </p>

              <div className="mt-6 pt-6 border-t border-sand flex items-center justify-between text-xs font-mono uppercase tracking-wider text-olive font-semibold">
                <span>ESTABLISHED HERITAGE</span>
                <span>50+ YEARS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Authentic Photographic Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16 story-reveal">
          {/* Mill & Fiber Origins */}
          <div className="md:col-span-7 relative group rounded-2xl overflow-hidden bg-sand aspect-[16/10] border border-sand">
            <Image
              src="/images/editorial/heritage-mill.jpg"
              alt="Sri Dhanalakshmi Group spinning and textile heritage"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover object-center filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
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
          </div>

          {/* Precision Tailoring Evolution */}
          <div className="md:col-span-5 relative group rounded-2xl overflow-hidden bg-sand aspect-[16/10] md:aspect-auto border border-sand flex flex-col justify-end p-6 sm:p-8">
            <Image
              src="/images/editorial/heritage-archive.jpg"
              alt="Archival textile development and pattern precision"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover object-center filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 story-reveal">
          <div className="p-6 rounded-2xl bg-cream border border-sand/70">
            <span className="font-mono text-xs text-burnt font-bold block mb-2">01 // SCIENCE</span>
            <h4 className="font-display text-base font-bold text-charcoal uppercase mb-2">
              Polymer & Material Physics
            </h4>
            <p className="font-body text-xs text-charcoal/70 leading-relaxed font-light">
              Investigating the microscopic behavior of fibers—from high-count combed cotton to micro-denier polyesters and cellulosic blends.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-cream border border-sand/70">
            <span className="font-mono text-xs text-olive font-bold block mb-2">02 // TECHNOLOGY</span>
            <h4 className="font-display text-base font-bold text-charcoal uppercase mb-2">
              Digital Pattern & Fit
            </h4>
            <p className="font-body text-xs text-charcoal/70 leading-relaxed font-light">
              Utilizing rapid prototyping and precision pattern geometry to ensure zero seam-torque, ergonomic movement, and sizing fidelity.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-cream border border-sand/70">
            <span className="font-mono text-xs text-charcoal font-bold block mb-2">03 // ENGINEERING</span>
            <h4 className="font-display text-base font-bold text-charcoal uppercase mb-2">
              Coordinated Execution
            </h4>
            <p className="font-body text-xs text-charcoal/70 leading-relaxed font-light">
              Bridging design studios with vetted partner manufacturing lines across international supply corridors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
