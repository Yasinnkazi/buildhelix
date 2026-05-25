import SEO from "../components/seo/SEO";
import Hero from "../sections/services/Hero";
import ServicePanels from "../sections/services/ServicePanels";
import CTASection from "../sections/services/CTA";

export default function Services() {
  return (
    <div className="relative pt-40 pb-24">
      <div className="noise-overlay fixed inset-0 z-[100]" />
      <SEO
        title="Website Design Services Mumbai — HELIX"
        description="Professional website design services in Mumbai. We build responsive websites for restaurants, gyms, apparel brands, and startups. Modern, fast, and conversion-focused."
        ogUrl="https://buildhelix.org/services"
      />
      <Hero />
      <ServicePanels />
      <CTASection />
    </div>
  );
}
