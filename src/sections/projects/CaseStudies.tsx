import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../data/projects";

interface CaseStudyContent {
  challenge: string;
  process: string[];
  businessGoal: string;
  technologyStack: string[];
  brandingReasoning: string;
  responsiveUx: string;
  result: string;
}

const caseStudyContent: Record<string, CaseStudyContent> = {
  threadforge: {
    challenge: "An apparel and printing brand needed a digital presence that could showcase their product catalog, communicate their design quality, and handle bulk inquiry workflows from corporate clients. Their existing setup relied entirely on social media, which made it difficult to present products professionally or manage B2B requests at scale.",
    process: [
      "Audited their product catalog, printing capabilities, and existing inquiry workflow to identify the biggest friction points in their customer journey.",
      "Designed a visual-first platform with dedicated collection pages, a high-res product gallery, and a streamlined bulk inquiry form that collects quantities, sizes, and deadlines upfront.",
      "Built with React and Framer Motion for smooth page transitions and a premium browsing feel. The inquiry system feeds directly into their workflow without requiring a full e-commerce backend.",
    ],
    businessGoal: "Replace social-media-only presence with a professional digital storefront that handles B2B inquiries at scale while maintaining a premium brand feel.",
    technologyStack: ["React", "Vite", "Framer Motion", "TailwindCSS"],
    brandingReasoning: "Chose a bold purple (#7C3AED) to convey creativity and premium quality in the apparel space. Dark theme with glass elements keeps the focus on product photography while signaling a modern, design-forward brand.",
    responsiveUx: "The catalog grid adapts from 4 columns on desktop to a single-column vertical scroll on mobile. The inquiry form uses large touch targets and smart defaults (size, quantity presets) so bulk orders can be submitted from a phone in under a minute.",
    result: "A brand-aligned digital showcase that presents products with the quality they deserve, paired with a practical bulk inquiry flow that captures every lead with the details needed to provide an accurate quote.",
  },
  aura: {
    challenge: "A restaurant brand wanted a website that captured their ambiance and quality before guests even walked through the door — menu presentation and reservation visibility were key. The existing approach relied on static PDF menus and third-party delivery platforms, offering no control over the brand experience.",
    process: [
      "Studied their menu architecture, interior photography, and customer journey from discovery to reservation to identify opportunities for digital-first hospitality.",
      "Created an immersive, visual-first experience with full-screen hero imagery, a category-filtered menu layout, and prominent reservation CTAs positioned at every decision point.",
      "Applied subtle motion design — parallax scrolling, fade-in menu sections, and hover effects on signature dishes — to add a tactile, premium feel that mirrors the dining experience.",
    ],
    businessGoal: "Create a digital storefront that conveys the restaurant's atmosphere, makes menu exploration enjoyable, and drives reservation inquiries directly rather than through third-party platforms.",
    technologyStack: ["React", "Vite", "Framer Motion", "TailwindCSS"],
    brandingReasoning: "Selected cyan (#06B6D4) to evoke freshness, cleanliness, and coastal hospitality. The light-and-airy aesthetic with generous whitespace mirrors the restaurant's open, welcoming interior design.",
    responsiveUx: "Menu categories collapse into a sticky horizontal scroll on mobile, letting diners browse courses without endless vertical scrolling. Reservation CTAs remain fixed at the bottom of the viewport on phones, accessible at every point in the browsing flow.",
    result: "A digital storefront that conveys the restaurant's atmosphere, makes menus easy to browse on any device, and drives reservation inquiries through well-placed CTAs throughout the experience.",
  },
  apex: {
    challenge: "A fitness and coaching business needed a platform that projected performance, attracted new clients, and established brand authority in a competitive local market. Their previous site felt generic and failed to communicate the energy and results their training programs deliver.",
    process: [
      "Analyzed their training programs, client demographics, and competitor landscape in Mumbai's fitness market to define a positioning strategy.",
      "Developed a high-energy brand presence with bold typography, dynamic motion sequences, and clear service tiers that make it easy for potential clients to understand what's offered and choose the right program.",
      "Emphasized social proof through result-focused imagery, trainer credibility markers, and a streamlined inquiry flow that captures lead details without friction.",
    ],
    businessGoal: "Position the gym as a premium coaching destination with a clear path from visitor discovery to client inquiry, outperforming local competitors in digital presence.",
    technologyStack: ["React", "Vite", "Framer Motion", "TailwindCSS"],
    brandingReasoning: "Amber (#F59E0B) was chosen to convey energy, warmth, and high performance — colors commonly associated with fitness and athletic excellence. The bold typography and dark background create a premium, intense atmosphere.",
    responsiveUx: "Service tiers transform from side-by-side cards on desktop to a vertical accordion on mobile, ensuring pricing and program details remain scannable on small screens. The inquiry CTA is pinned to the bottom on mobile for instant access.",
    result: "A brand platform that positions the gym as a premium coaching destination with a clear path from visitor to client inquiry, designed to convert mobile-first fitness searchers.",
  },
  "helix-digital": {
    challenge: "HELIX needed its own studio website — a portfolio that demonstrated our frontend capabilities, design philosophy, and project work in a way that speaks to potential clients while serving as a working example of our craft.",
    process: [
      "Defined the design system first: typography scale, color tokens, spacing units, glass morphism components, and motion language — establishing a reusable foundation.",
      "Built the application architecture around React lazy loading, route-based code splitting, and a component library that ensures consistency across all pages.",
      "Applied dark futuristic aesthetics with glassmorphism, glow effects, and Framer Motion-driven transitions — every interaction pattern intentional and smooth.",
    ],
    businessGoal: "Create a portfolio that practices what it preaches — demonstrating HELIX's frontend expertise, design philosophy, and project capabilities through its own construction.",
    technologyStack: ["React", "Vite", "Framer Motion", "Three.js", "TailwindCSS"],
    brandingReasoning: "A custom purple (#D0BCFF) primary coupled with a dark, immersive surface system communicates creativity, technology sophistication, and premium quality. The glass aesthetic signals modern, forward-thinking design.",
    responsiveUx: "The mobile experience uses a floating glass navigation drawer instead of a fullscreen takeover, preserving the cinematic feel. Hero typography scales fluidly using clamp() to prevent overflow on narrow screens while maintaining visual impact.",
    result: "A working portfolio that practices what it preaches — every animation, layout decision, and interaction pattern reflects how we build for clients, and the site itself serves as a case study in modern React development.",
  },
  formspace: {
    challenge: "An architecture studio required a digital portfolio that presented their spatial design work with the same care and precision they bring to their physical projects. They needed a site that felt editorially refined, not like a template.",
    process: [
      "Reviewed their project archive, brand guidelines, and target client profile to design a presentation framework that lets each project tell its own story.",
      "Developed a minimal, typography-driven showcase with generous whitespace, full-bleed project imagery, and a clean studio identity system. The focus is on letting the architectural work speak without visual clutter.",
      "Structured the portfolio navigation to prioritize project discovery — making it easy for potential clients to browse completed work, understand the studio's design philosophy, and initiate contact.",
    ],
    businessGoal: "Establish the studio's digital presence as an extension of their design philosophy — minimal, precise, and focused on the work — to attract high-value architectural clients.",
    technologyStack: ["React", "Vite", "Framer Motion", "TailwindCSS"],
    brandingReasoning: "Emerald green (#10B981) was selected to evoke growth, balance, and natural harmony — values central to architectural design. The clean, restrained aesthetic with ample whitespace mirrors the studio's minimalist approach.",
    responsiveUx: "Project images use a masonry-inspired grid on desktop that collapses to a single-column vertical stream on mobile, ensuring architectural photography remains the hero regardless of screen size.",
    result: "A refined portfolio platform that presents architectural work with editorial quality, making it easy for potential clients to review past projects and make contact — all without distracting from the work itself.",
  },
};

export default function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-48 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-4">
          Project Details
        </span>
        <h2 className="font-display-lg text-display-lg md:font-display-2xl md:text-display-2xl tracking-tighter">
          Context & Process.
        </h2>
      </motion.div>

      <div className="space-y-20 md:space-y-32">
        {PROJECTS.map((project, i) => {
          const study = caseStudyContent[project.id];
          if (!study) return null;
          return (
            <CaseStudyCard
              key={project.id}
              project={project}
              study={study}
              index={i}
            />
          );
        })}
      </div>
    </section>
  );
}

function CaseStudyCard({
  project,
  study,
  index,
}: {
  project: (typeof PROJECTS)[number];
  study: CaseStudyContent;
  index: number;
}) {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <motion.div
      id={`case-study-${project.id}`}
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
      className="scroll-mt-24"
    >
      <div
        className="p-6 md:p-16 rounded-2xl relative overflow-hidden"
        style={{
          backdropFilter: "blur(24px)",
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-1/2 h-1/2 opacity-[0.03] pointer-events-none"
          style={{
            background: `radial-gradient(circle at top right, ${project.color}, transparent)`,
          }}
        />

        <div className="relative space-y-8">
          <div className="flex items-center gap-4">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: project.color }}
            />
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">
              {String(index + 1).padStart(2, "0")} / {project.title}
            </span>
          </div>

          <h3 className="font-display-lg text-display-lg md:text-[44px] tracking-tight leading-tight">
            {project.title}
          </h3>

          {/* Challenge */}
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-3">
              The Challenge
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant/80 leading-relaxed">
              {study.challenge}
            </p>
          </div>

          {/* Business Goal */}
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-3">
              Business Goal
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant/80 leading-relaxed">
              {study.businessGoal}
            </p>
          </div>

          {/* Process */}
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-3">
              Our Process
            </span>
            <ol className="space-y-4">
              {study.process.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-label-sm text-label-sm"
                    style={{
                      backgroundColor: `${project.color}20`,
                      border: `1px solid ${project.color}40`,
                      color: project.color,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant/70 leading-relaxed">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Branding Reasoning */}
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-3">
              Branding Reasoning
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant/80 leading-relaxed">
              {study.brandingReasoning}
            </p>
          </div>

          {/* Technology Stack */}
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-3">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {study.technologyStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-[10px] font-label-sm bg-white/[0.04] border border-white/[0.06] text-outline"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Responsive UX */}
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-3">
              Responsive UX Approach
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant/80 leading-relaxed">
              {study.responsiveUx}
            </p>
          </div>

          {/* Result */}
          <div>
            <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-widest block mb-3">
              The Result
            </span>
            <p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">
              {study.result}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-on-primary-container px-5 py-3 rounded-full font-label-md text-label-md hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              <span>Live Demo</span>
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 border border-white/10 px-5 py-3 rounded-full font-label-md text-label-md hover:bg-white/5 active:bg-white/10 transition-all duration-300"
            >
              <span>Build Something Similar</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
