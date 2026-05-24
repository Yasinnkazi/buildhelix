import SEO from "../components/seo/SEO";
import Hero from "../sections/projects/Hero";
import ProjectShowcase from "../sections/projects/ProjectShowcase";
import CaseStudies from "../sections/projects/CaseStudies";
import CTASection from "../sections/projects/CTASection";

export default function Projects() {
  return (
    <div className="relative mesh-gradient">
      <SEO
        title="Portfolio"
        description="Five deployed platforms spanning AI content engines, ambient computing, real-time analytics, and architectural design technology. Every project is live and operational."
        ogUrl="https://studio.buildhelix.org/projects"
      />
      <Hero />
      <ProjectShowcase />
      <CaseStudies />
      <CTASection />
    </div>
  );
}
