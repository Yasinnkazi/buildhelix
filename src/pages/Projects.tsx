import SEO from "../components/seo/SEO";
import Hero from "../sections/projects/Hero";
import ProjectShowcase from "../sections/projects/ProjectShowcase";
import CaseStudies from "../sections/projects/CaseStudies";
import CTASection from "../sections/projects/CTASection";

export default function Projects() {
  return (
    <div className="relative mesh-gradient">
      <SEO
        title="Website Design Portfolio Mumbai — Live Projects"
        description="View our portfolio of live websites for restaurants, gyms, apparel brands, and architecture studios in Mumbai. Each project is deployed and operational."
        ogUrl="https://buildhelix.org/projects"
      />
      <Hero />
      <ProjectShowcase />
      <CaseStudies />
      <CTASection />
    </div>
  );
}
