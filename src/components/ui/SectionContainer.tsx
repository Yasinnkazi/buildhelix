import type { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionContainer({ children, className = "", id }: SectionContainerProps) {
  return (
    <section id={id} className={`max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop ${className}`}>
      {children}
    </section>
  );
}
