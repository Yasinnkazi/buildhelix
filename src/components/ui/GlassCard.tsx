import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <div
      className={`rounded-lg overflow-hidden transition-all duration-500 ${
        hover ? "hover:bg-white/[0.07] hover:border-primary/30" : ""
      } ${className}`}
      style={{
        backdropFilter: "blur(24px)",
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {children}
    </div>
  );
}
