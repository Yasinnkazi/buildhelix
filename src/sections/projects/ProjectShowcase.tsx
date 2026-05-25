import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PROJECTS } from "../../data/projects";
import MockupUI from "../../components/ui/MockupUI";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

function BrowserFrame({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <div className="browser-frame w-full">
      <div className="browser-bar">
        <span className="browser-dot" style={{ background: "#FF5F56" }} />
        <span className="browser-dot" style={{ background: "#FFBD2E" }} />
        <span className="browser-dot" style={{ background: "#27C93F" }} />
        <span className="browser-url">{project.liveUrl.replace("https://", "")}</span>
      </div>
      <div className="relative aspect-video overflow-hidden">
        <MockupUI variant={project.id as any} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>
    </div>
  );
}

export default function ProjectShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-48 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="mb-16 md:mb-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-4"
        >
          Deployed Projects
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display-lg text-display-lg md:font-display-2xl md:text-display-2xl tracking-tighter max-w-4xl"
        >
          Real Projects,<br />
          <span className="text-primary-fixed-dim">Built for Real Brands.</span>
        </motion.h2>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col gap-12 md:gap-20"
      >
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className={`group flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6 md:gap-12 items-stretch`}
          >
            <div className="flex-1 min-w-0">
              <div
                className="rounded-2xl overflow-hidden h-full transition-all duration-500"
                style={{
                  backdropFilter: "blur(24px)",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
                while-hover="hover"
              >
                <BrowserFrame project={project} />
                <div className="p-5 md:p-8 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[10px] font-label-sm bg-white/[0.04] border border-white/[0.06] text-outline"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary text-on-primary-container px-5 py-3 rounded-full font-label-md text-label-md hover:scale-[1.02] active:scale-95 transition-all duration-300"
                    >
                      <span>Live Demo</span>
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </a>
                    <button
                      onClick={() => {
                        const el = document.getElementById(`case-study-${project.id}`);
                        el?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 border border-white/10 px-5 py-3 rounded-full font-label-md text-label-md hover:bg-white/5 active:bg-white/10 transition-all duration-300"
                    >
                      <span>Case Study</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center py-4 md:py-8">
              <span
                className="inline-block w-fit px-3 py-1 rounded-full text-[10px] font-label-sm uppercase tracking-widest mb-4"
                style={{
                  backdropFilter: "blur(8px)",
                  background: `${project.color}15`,
                  border: `1px solid ${project.color}30`,
                  color: project.color,
                }}
              >
                {project.industry}
              </span>
              <h3 className="font-display-lg text-display-lg mb-2 tracking-tight">
                {project.title}
              </h3>
              <p className="font-label-md text-label-md text-primary-fixed-dim mb-3">
                {project.tagline}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant/80 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-label-sm text-label-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
