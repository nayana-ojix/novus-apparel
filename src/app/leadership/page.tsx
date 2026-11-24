import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { LEADERSHIP_PROFILES } from "@/data/company";

export const metadata = {
  title: "Executive Leadership | Founders & Managing Directors",
  description:
    "Meet Chandrasekhar Vallabhaneni and Mohmad Noorulla, co-founders of Novus Apparel Limited, bringing decades of technical textile mastery and global manufacturing governance.",
};

export default function LeadershipPage() {
  return (
    <div className="pt-28 pb-24 bg-novus-black">
      {/* Header */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto border-b border-novus-charcoal">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
            Executive Stewardship
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-novus-ivory font-light leading-tight">
            Leadership Rooted in Textile Engineering & Global Vision
          </h1>
          <p className="text-base sm:text-lg text-novus-beige/80 font-light leading-relaxed">
            Guided by seasoned textile technologists whose careers bridge raw polymer and yarn science with international export logistics, marketing strategy, and manufacturing leadership.
          </p>
        </div>
      </section>

      {/* In-depth Leadership Showcase */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto space-y-24">
        {LEADERSHIP_PROFILES.map((leader, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Portrait Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[480px] w-full border border-novus-charcoal overflow-hidden group">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-novus-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[11px] uppercase font-mono tracking-widest text-novus-gold">
                    {leader.qualification}
                  </p>
                  <p className="text-2xl font-serif text-novus-ivory font-medium mt-1">
                    {leader.name}
                  </p>
                  <p className="text-xs font-mono text-novus-beige-accent">{leader.role}</p>
                </div>
              </div>
            </div>

            {/* Biography & Credentials Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-novus-charcoal text-[11px] font-mono text-novus-gold uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{leader.qualification}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
                {leader.name}
              </h2>

              <p className="text-xs uppercase font-mono tracking-widest text-novus-beige-accent">
                {leader.role} • Novus Apparel Limited
              </p>

              <div className="w-16 h-[1.5px] bg-novus-gold"></div>

              <div className="space-y-4 text-sm text-novus-beige/80 font-light leading-relaxed">
                {leader.bio.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-novus-charcoal space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-novus-ivory">
                  Core Industry Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-light text-novus-beige-dark">
                  {leader.specialties.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-novus-gold"></span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-widest text-novus-gold hover:text-novus-ivory transition-colors"
                >
                  <span>Connect with Executive Office</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Leadership Philosophy Callout */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto border-t border-novus-charcoal">
        <div className="bg-novus-richblack border border-novus-charcoal p-10 lg:p-14 text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-novus-gold">
            Founders&apos; Collective Creed
          </span>
          <blockquote className="font-serif text-2xl sm:text-3xl text-novus-ivory font-light italic leading-relaxed">
            &ldquo;Apparel manufacturing reaches its highest form when rigorous scientific fundamentals and respectful human partnerships converge.&rdquo;
          </blockquote>
          <p className="text-xs font-mono text-novus-muted">
            Chandrasekhar Vallabhaneni & Mohmad Noorulla — Novus Apparel Limited
          </p>
        </div>
      </section>
    </div>
  );
}
