import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../data/projects";

export default function FeaturedProjects() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <section className="py-24 md:py-48 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
      >
        <div>
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-3">
            Featured Work
          </span>
          <h2 className="font-display-lg text-display-lg md:font-display-2xl md:text-display-2xl tracking-tighter">
            Recent<br className="md:hidden" />
            <span className="text-primary-fixed-dim"> Projects.</span>
          </h2>
        </div>
        <Link
          to="/projects"
          className="group flex items-center gap-2 text-primary font-label-md text-label-md hover:gap-3 transition-all duration-300"
        >
          View All Projects
          <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-0.5">arrow_forward</span>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
            style={{
              backdropFilter: "blur(24px)",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
          >
            {/* Hover border glow */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 0 1px var(--color-primary, #d0bcff)",
              }}
            />

            <div className="relative h-44 sm:h-48 md:h-56 overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                style={{ filter: "grayscale(30%)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-5">
                <span
                  className="inline-block px-2.5 py-1 rounded-full text-[9px] font-label-sm uppercase tracking-widest mb-2"
                  style={{
                    backdropFilter: "blur(8px)",
                    background: `${project.color}20`,
                    border: `1px solid ${project.color}30`,
                    color: project.color,
                  }}
                >
                  {project.industry}
                </span>
                <h3 className="font-display-lg text-display-lg text-white">
                  {project.title}
                </h3>
              </div>
            </div>
            <div className="p-5 space-y-3">
              <p className="font-body-md text-body-md text-on-surface-variant/70 line-clamp-2">
                {project.tagline}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[9px] font-label-sm bg-white/[0.04] border border-white/[0.06] text-outline"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-primary font-label-md text-label-md hover:gap-2.5 transition-all duration-300 pt-1"
              >
                Live Demo
                <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-0.5">open_in_new</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
