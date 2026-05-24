import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    label: "Development",
    title: "Website Development",
    description:
      "Modern, responsive websites built with React, Vite, and Tailwind CSS. We focus on clean code, smooth animations, and performance — creating digital presences that represent your brand well across every device.",
    tags: ["React", "Vite", "Framer Motion", "Tailwind CSS", "Responsive"],
    reverse: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWocGdjcBKVZ-6-f_hqHA49PPm-TDtNaqOartnmKBlal10fPrOsm6OC2ET-a2ONMJL2Tfmp3c3tz0LeKMgy7Q5xjNyER3hiDPeb27JJcVx5GMGp53bLa3kucDSh_joP309DXSnKFgA4QCfiswcvhVF46okAV3oaWgHfLufVIW9efIG1Hr8Bn12ng41zf-no5XMyMtiUeaV3DN6bbG9Rzq2JZYqGEHKSlgLRI5_56LzBLLMFtvPi-o-RzcoOYDjWuFaqHqTgMaYlHqu",
  },
  {
    id: "02",
    label: "SEO & Local",
    title: "Local Search Optimization",
    description:
      "Help your business get found locally. We optimize Google Business profiles, improve local search visibility, and make sure potential customers can find you when it matters most.",
    tags: ["Google Business", "Local SEO", "Search Presence"],
    reverse: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLk9hFbLPW6f5CVNE5y77j3L2yCXdm5bvHrTitCJqHYwTSRg102BH1c3gqkfYsTERBF35MLPBuxU6MRttVDG0zR7GesV1sg_RaAFFG6ki4wc9U9NPYq697ZqxSBhJiQa7zMyWDJNf25kKx2d5AIm7WQbo0ZFaORBDXIKtk490daqVHlEs_-aQlMoMF1NkfMmMvBfrgWN62is0Qn8v_3VKHsKdXKd2Xe4TESLpHwyQNbC04DiTLfsowKNZr-apVWrl0lK8CcUV63EzF",
  },
  {
    id: "03",
    label: "Design",
    title: "UI/UX & Brand Design",
    description:
      "We design interfaces that look good and feel right. From wireframes to high-fidelity mockups, every design decision is made with your brand identity and user experience in mind.",
    tags: ["UI Design", "UX Strategy", "Brand Identity", "Prototyping"],
    reverse: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3HyuCoWmVhFy3080Qi1rhYHF2xqEhn7vEM02XbJ_U9e50Mh0esM1sF60ePeGMuXgrYK3guAfs-lC79NCAG6PEZtJFOOpZ9Wg8Ti28YcKBiFvvmsDmJWRy6NyzxnQukdzkp3GWbvgc9KlCnfQSzzd1ZLYTBNMzIqM9Pllup7buH1KCF4dgfSRqqCe1202PXzNJWvd9blpw6c4OrzaziYqzWWI7RORuqwR2d91ps6vA4Hn09nd7plAmZ6y7YQZMwTiKp8S0CsfrUDvC",
  },
  {
    id: "04",
    label: "Identity",
    title: "Brand Systems",
    description:
      "We build cohesive brand identities — logos, color palettes, typography, and visual guidelines that create a consistent presence across your website, social media, and marketing materials.",
    tags: ["Visual Identity", "Logo Design", "Brand Guidelines"],
    reverse: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCElylEyULpdkgp6-E9j3i6xHuuGg3pfcXznEH22fjK8iy8NFhZ35l6poRdpFjEfRrMRo4EBm6bPwwtgtROGgbequ2w5MKf4us9yFkEI2TtjKf1u95ZfL2COjm5CNEoCjsZX8M5zHY2kNrUajGfMz1GqXPtAe12IQgbVAo8HnHn_dmzsYJo7MoCIAc--2uqT2TjBZqwsrkPF7Vk6K7XXiVR1POwyaxUuPniAEfrAhgCtvfUtF8MBJiFm4W6cxMR0PJ8BiGRTCWy0xXh",
  },
  {
    id: "05",
    label: "Infrastructure",
    title: "Hosting & Maintenance",
    description:
      "Reliable hosting setup, domain management, and ongoing maintenance so your site stays fast, secure, and up-to-date. We handle the technical side so you can focus on running your business.",
    tags: ["Hosting", "Domain Setup", "Maintenance", "Performance"],
    reverse: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQzwO7VtsdmAgFrnis40gxZpdIE2On0DD8BOOFlgq8m9H1m68JF0OQFIonmZtJXdpxtYdix9M_7URmy1BV2Ub6IBVjTlCJfG0fM5plE714mvMk_U4wrIflNdWrb1P9aW17Fs53_Pc58hJFxyH5n7cWQrmshSCfJokJZnufANuNp3BZOOKAG3G5j_nUZBEcDcU6raSHcz35WIC8rJAGNsrhx-3ZLsir-0QGXFfU6TpK3-cLOeeOPkcTje2trFyulz9b3NyZKQlFsAKY",
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
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
