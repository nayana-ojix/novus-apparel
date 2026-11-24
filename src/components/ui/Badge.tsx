import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "teal" | "coral" | "navy" | "emerald";
  className?: string;
  dot?: boolean;
}

export default function Badge({
  children,
  variant = "gold",
  className = "",
  dot = true,
}: BadgeProps) {
  const styles = {
    gold: {
      container: "border-novus-gold/40 bg-novus-navy-dark/90 text-novus-champagne",
      dot: "bg-novus-gold",
    },
    teal: {
      container: "border-novus-teal-vibrant/40 bg-novus-teal-deep/80 text-novus-teal-light",
      dot: "bg-novus-teal-vibrant",
    },
    emerald: {
      container: "border-novus-emerald-light/40 bg-novus-emerald-deep/80 text-emerald-300",
      dot: "bg-novus-emerald-light",
    },
    coral: {
      container: "border-novus-coral/40 bg-novus-navy-dark/90 text-novus-coral",
      dot: "bg-novus-coral-vibrant",
    },
    navy: {
      container: "border-novus-navy-border bg-novus-navy-surface text-novus-ivory-warm",
      dot: "bg-novus-ivory",
    },
  };

  const current = styles[variant];

  return (
    <span
      className={`inline-flex items-center space-x-2 px-3.5 py-1.5 border text-[11px] font-mono uppercase tracking-[0.22em] backdrop-blur-md rounded-none ${current.container} ${className}`}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${current.dot}`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${current.dot}`}
          />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}
