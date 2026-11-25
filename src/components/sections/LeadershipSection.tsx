"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, GraduationCap, Award, Compass, ArrowUpRight, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FOUNDERS = [
  {
    name: "Chandrasekhar Vallabhaneni",
    role: "Co-Founder & Managing Director",
    degree: "B.Tech in Textile Technology",
    image: "/img/Chaand.jpg",
    fallbackUrl: "https://novusapparels.com/img/Chaand.jpg",
    email: "chaand@novusapparels.com",
    quote: "Global manufacturing is not about moving goods—it is about orchestrating precision, trust, and technological agility across borders.",
    bio: [
      "Chandrasekhar brings more than two decades of senior executive experience spanning vertical apparel manufacturing, international exports, global sales strategy, marketing communications, and corporate profit-center governance.",
      "Under his leadership, Novus Apparel expanded its operational footprint across continents, pioneering high-efficiency manufacturing pipelines and strategic cross-border partnerships connecting South Asia, East Asia, and the Americas.",
    ],
    expertise: [
      "Global Supply Chain Orchestration",
      "Textile Manufacturing Operations",
      "International Trade & Export Logistics",
      "Strategic Profit-Center Governance",
    ],
  },
  {
    name: "Mohmad Noorulla",
    role: "Co-Founder & Technical Director",
    degree: "M.Tech in Textile Technology",
    image: "/img/Noor.jpg",
    fallbackUrl: "https://novusapparels.com/img/Noor.jpg",
    email: "chaand@novusapparels.com",
    quote: "True innovation begins at the polymer and spindle. When you master fiber physics, everyday comfort becomes effortless.",
    bio: [
      "Mohmad Noorulla is a distinguished textile engineering authority with deep mastery across yarn development, fabric merchandising, and technical product R&D. He previously served as Vice President of Technical & Product Development.",
      "Recognizing the critical importance of localized raw material sourcing and polymer-fiber innovations in East Asia, he established Newwell Textiles in Pudong, Shanghai, catalyzing Novus's specialized fabric sourcing, greige development, and technical material leadership.",
    ],
    expertise: [
      "Textile Engineering & Polymer Science",
      "Advanced Greige & Fabric Development",
      "China & East Asia Sourcing Architecture",
      "Performance Finish Formulations",
    ],
  },
];

export default function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedFounder, setSelectedFounder] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".leader-reveal", {
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
      id="leadership"
      className="py-24 lg:py-36 bg-cream border-b border-sand/70 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-sand/70 leader-reveal">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-olive" />
              <span className="text-[11px] font-mono uppercase tracking-ultra text-olive font-bold">
                SECTION 07 // FOUNDING LEADERSHIP
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-charcoal leading-[0.98]">
              LED BY TEXTILE TECHNOLOGISTS.
            </h2>
            <p className="font-body text-base sm:text-lg text-charcoal/70 font-light leading-relaxed">
              NOVUS APPAREL is steered by qualified textile engineering authorities combining decades of senior manufacturing leadership, polymer research, and global commercial strategy.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal/40 block">
              CO-FOUNDING DIRECTORS
            </span>
            <span className="font-display text-xs uppercase tracking-wider text-charcoal font-semibold">
              B.TECH & M.TECH TEXTILE SCIENTISTS
            </span>
          </div>
        </div>

        {/* Co-Founders Grid: 2 Side-by-Side Monumental Editorial Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 leader-reveal">
          {FOUNDERS.map((founder, idx) => (
            <div
              key={founder.name}
              className="rounded-3xl bg-sand/35 border border-sand/90 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-8 shadow-sm hover:border-olive/50 transition-all duration-300"
            >
              {/* Top Profile Header: Unaltered Authentic Photography & Credentials */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* UNCHANGED ORIGINAL PORTRAIT */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-sand shrink-0 border-2 border-sand shadow-sm">
                  <Image
                    src={founder.image}
                    alt={`Photograph of ${founder.name}, ${founder.role}`}
                    fill
                    sizes="144px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="space-y-1.5 flex-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/70 text-[10px] font-mono uppercase tracking-wider text-charcoal font-semibold border border-sand">
                    <GraduationCap className="w-3.5 h-3.5 text-olive" />
                    <span>{founder.degree}</span>
                  </span>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal tracking-tight">
                    {founder.name}
                  </h3>

                  <p className="text-xs font-mono uppercase tracking-widest text-burnt font-semibold">
                    {founder.role}
                  </p>
                </div>
              </div>

              {/* Founder Quote */}
              <div className="p-4 rounded-xl bg-cream border border-sand/80">
                <p className="font-display text-xs sm:text-sm text-charcoal italic font-medium leading-relaxed">
                  &ldquo;{founder.quote}&rdquo;
                </p>
              </div>

              {/* Official Verified Biography */}
              <div className="space-y-3 font-body text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed">
                {founder.bio.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {/* Verified Expertise Tags */}
              <div className="space-y-2 pt-2 border-t border-sand">
                <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/50 block">
                  CORE SPECIALIZATION
                </span>
                <div className="flex flex-wrap gap-2">
                  {founder.expertise.map((exp, eIdx) => (
                    <span
                      key={eIdx}
                      className="px-2.5 py-1 rounded-md bg-cream border border-sand/70 text-[10px] font-mono uppercase tracking-wider text-charcoal/80"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Route */}
              <div className="pt-4 border-t border-sand flex items-center justify-between text-xs font-mono">
                <a
                  href={`mailto:${founder.email}`}
                  className="inline-flex items-center gap-2 text-olive hover:text-burnt font-semibold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{founder.email}</span>
                </a>

                <span className="text-charcoal/40 uppercase tracking-widest text-[10px]">
                  Verified Profile
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
