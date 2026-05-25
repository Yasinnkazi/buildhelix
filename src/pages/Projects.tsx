import SEO from "../components/seo/SEO";
import Hero from "../sections/projects/Hero";
import ProjectShowcase from "../sections/projects/ProjectShowcase";
import CaseStudies from "../sections/projects/CaseStudies";
import CTASection from "../sections/projects/CTASection";

export default function Projects() {
  return (
    <div className="relative mesh-gradient">
      <SEO
        title="Portfolio — Live Projects"
        description="View our portfolio of live deployed websites for restaurants, gyms, apparel brands, architecture studios, and digital agencies. Built with React and modern frameworks."
        ogUrl="https://buildhelix.org/projects"
      />
      <Hero />
      <ProjectShowcase />
      <CaseStudies />
      <CTASection />
    </div>
  );
}
