import { motion } from "framer-motion";
import MockupUI from "../../components/ui/MockupUI";

const services = [
  {
    id: "01",
    label: "Development",
    title: "Website Development",
    description:
      "Modern, responsive websites built with React, Vite, and Tailwind CSS. We build websites for restaurants, gyms, apparel brands, and local businesses across Mumbai — with clean code, smooth animations, and performance that converts.",
    tags: ["React", "Vite", "Framer Motion", "Tailwind CSS", "Responsive"],
    reverse: false,
    mockup: "dev-tools" as const,
  },
  {
    id: "02",
    label: "SEO & Local",
    title: "Local SEO for Mumbai Businesses",
    description:
      "Help your business get found by customers in Mumbai, Navi Mumbai, and Thane. We optimize Google Business profiles, improve local search rankings, and make sure nearby customers can find you when it matters most.",
    tags: ["Google Business", "Local SEO", "Mumbai", "Search Presence"],
    reverse: true,
    mockup: "seo-local" as const,
  },
  {
    id: "03",
    label: "Design",
    title: "UI/UX & Brand Design",
    description:
      "We design interfaces that look good and feel right. From wireframes to high-fidelity mockups, every design decision is made with your brand identity and user experience in mind — helping Mumbai businesses stand out online.",
    tags: ["UI Design", "UX Strategy", "Brand Identity", "Prototyping"],
    reverse: false,
    mockup: "ui-design" as const,
  },
  {
    id: "04",
    label: "Identity",
    title: "Brand Systems",
    description:
      "We build cohesive brand identities — logos, color palettes, typography, and visual guidelines that create a consistent presence across your website, social media, and marketing materials. Perfect for startups and growing brands.",
    tags: ["Visual Identity", "Logo Design", "Brand Guidelines"],
    reverse: true,
    mockup: "brand-system" as const,
  },
  {
    id: "05",
    label: "Infrastructure",
    title: "Hosting & Maintenance",
    description:
      "Reliable hosting setup, domain management, and ongoing maintenance so your website stays fast, secure, and up-to-date. We handle the technical side so you can focus on running your business in Mumbai.",
    tags: ["Hosting", "Domain Setup", "Maintenance", "Performance"],
    reverse: false,
    mockup: "hosting" as const,
  },
];

export default function ServicePanels() {
  return (
    <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mb-24 md:mb-32 flex flex-col gap-12 md:gap-20">
      {services.map((service, i) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="group relative"
        >
          <div
            className="p-6 md:p-12 rounded-lg flex flex-col md:flex-row items-center gap-8 md:gap-12 overflow-hidden"
            style={{
              backdropFilter: "blur(24px)",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <span className="absolute top-3 right-3 md:top-8 md:right-8 text-outline-variant font-display-lg opacity-20 pointer-events-none select-none text-[clamp(2.5rem,6vw,5rem)] leading-none">
              {service.id}
            </span>

            <div className={`flex-1 w-full ${service.reverse ? "md:order-2" : ""}`}>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2 block">
                {service.label}
              </span>
              <h2 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl mb-3 md:mb-4">
                {service.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-5 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-label-sm text-label-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={`w-full md:flex-1 h-48 md:h-[350px] rounded-lg overflow-hidden border border-white/5 ${service.reverse ? "md:order-1" : ""}`}>
              <MockupUI variant={service.mockup} className="scale-110 group-hover:scale-100 transition-all duration-700" />
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
