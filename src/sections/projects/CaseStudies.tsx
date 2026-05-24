import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../data/projects";

const caseStudyContent: Record<string, { challenge: string; solution: string; result: string }> = {
  threadforge: {
    challenge: "An apparel and printing brand needed a digital presence that could showcase their product catalog, communicate their design quality, and handle bulk inquiry workflows from corporate clients.",
    solution: "Designed a clean, visual-first platform with an emphasis on product photography, catalog browsing, and a streamlined inquiry system. Built with React and Framer Motion for smooth transitions.",
    result: "A brand-aligned digital showcase that presents products with the quality they deserve, paired with a practical bulk inquiry flow for B2B customers.",
  },
  aura: {
    challenge: "A restaurant brand wanted a website that captured their ambiance and quality before guests even walked through the door — menu presentation and reservation visibility were key.",
    solution: "Built an immersive, visual-first experience with full-screen hero imagery, an interactive menu layout, and clear reservation CTAs. Motion design adds a tactile, premium feel.",
    result: "A digital storefront that conveys the restaurant's atmosphere, makes menus easy to browse, and drives reservation inquiries through prominent, well-placed CTAs.",
  },
  apex: {
    challenge: "A fitness and coaching business needed a platform that projected performance, attracted new clients, and established brand authority in a competitive local market.",
    solution: "Created a high-energy brand presence with bold typography, dynamic motion, and clear service tiers. The design emphasizes results, community, and approachable professionalism.",
    result: "A brand platform that positions the gym as a premium coaching destination with a clear path from visitor to client inquiry.",
  },
  "helix-digital": {
    challenge: "HELIX needed its own studio website — a portfolio that demonstrated our frontend capabilities, design philosophy, and project work in a way that speaks to potential clients.",
    solution: "Built this very site: a Framer Motion-driven React application with a custom design system, dark futuristic aesthetics, glassmorphism, and a focus on project presentation and conversion.",
    result: "A working portfolio that practices what it preaches — every animation, layout decision, and interaction pattern reflects how we build for clients.",
  },
  formspace: {
    challenge: "An architecture studio required a digital portfolio that presented their spatial design work with the same care and precision they bring to their physical projects.",
    solution: "Developed a minimal, typography-driven showcase with generous whitespace, full-bleed project imagery, and a clean studio identity system. The focus is on letting the work speak.",
    result: "A refined portfolio platform that presents architectural work with editorial quality, making it easy for potential clients to review past projects and make contact.",
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
  study: { challenge: string; solution: string; result: string };
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

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-3">
                The Challenge
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant/80 leading-relaxed">
                {study.challenge}
              </p>
            </div>
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-3">
                Our Approach
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant/80 leading-relaxed">
                {study.solution}
              </p>
            </div>
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-3">
                The Result
              </span>
              <p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">
                {study.result}
              </p>
            </div>
          </div>

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
