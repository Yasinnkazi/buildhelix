import SEO from "../components/seo/SEO";
import Hero from "../sections/contact/Hero";
import ContactForm from "../sections/contact/ContactForm";

export default function Contact() {
  return (
    <div className="relative pt-40 pb-24 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
      <SEO
        title="Contact — Get a Website Quote"
        description="Ready to build your website? Contact HELIX — Mumbai-based website designer for businesses, restaurants, gyms, and startups. Free consultation within 24 hours."
        ogUrl="https://buildhelix.org/contact"
      />
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[120px]"
          style={{ animation: "pulse-glow 8s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-[10%] -right-[5%] w-[40%] h-[50%] rounded-full bg-secondary-container/10 blur-[100px]"
          style={{ animation: "pulse-glow 8s ease-in-out infinite", animationDelay: "-4s" }}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <Hero />
        <ContactForm />
      </div>
    </div>
  );
}
