import SEO from "../components/seo/SEO";
import Hero from "../sections/services/Hero";
import ServicePanels from "../sections/services/ServicePanels";
import CTASection from "../sections/services/CTA";

export default function Services() {
  return (
    <div className="relative pt-40 pb-24">
      <div className="noise-overlay fixed inset-0 z-[100]" />
      <SEO
        title="Services"
        description="High-performance digital architecture — website development, GMB optimization, automation systems, branding, and scalable cloud infrastructure."
        ogUrl="https://studio.buildhelix.org/services"
      />
      <Hero />
      <ServicePanels />
      <CTASection />
    </div>
  );
}
