export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://buildhelix.org/#organization",
        name: "HELIX",
        url: "https://buildhelix.org",
        logo: "https://buildhelix.org/favicon.svg",
        description:
          "We build modern websites and brand experiences for businesses, restaurants, gyms, apparel brands, and studios.",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9004556455",
          contactType: "sales",
          email: "buildhelix@gmail.com",
          availableLanguage: ["English", "Hindi"],
        },
        sameAs: [
          "https://www.instagram.com/buildhelix",
          "https://x.com/buildhelixhq",
          "https://github.com/buildhelix",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://buildhelix.org/#localbusiness",
        parentOrganization: { "@id": "https://buildhelix.org/#organization" },
        name: "HELIX Digital Studio",
        url: "https://buildhelix.org",
        description:
          "Website design and development studio serving Mumbai, Navi Mumbai, and Thane. Specializing in modern, responsive business websites.",
        image: "https://buildhelix.org/og.png",
        telephone: "+91-9004556455",
        email: "buildhelix@gmail.com",
        priceRange: "₹10,000–₹50,000",
        areaServed: [
          { "@type": "City", "name": "Mumbai", "sameAs": "https://en.wikipedia.org/wiki/Mumbai" },
          { "@type": "City", "name": "Navi Mumbai", "sameAs": "https://en.wikipedia.org/wiki/Navi_Mumbai" },
          { "@type": "City", "name": "Thane", "sameAs": "https://en.wikipedia.org/wiki/Thane" },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        serviceType: [
          "Website Design",
          "E-commerce Development",
          "Brand Identity",
          "Web Application Development",
          "UI/UX Design",
          "SEO Setup",
          "Gym Website Design",
          "Restaurant Website Design",
          "Apparel Brand Website Design",
          "Startup Website Development",
          "Printing Business Website Design",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          "name": "Website Design Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gym Website Design Mumbai" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Restaurant Website Design Mumbai" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Apparel Brand Website Design" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Startup Website Development Mumbai" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Printing Business Website Design Mumbai" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://buildhelix.org/#website",
        url: "https://buildhelix.org",
        name: "HELIX — Modern Websites & Brand Experiences",
        description:
          "Websites, automation, branding, and scalable systems for modern businesses.",
        publisher: { "@id": "https://buildhelix.org/#organization" },
        inLanguage: "en-IN",
      },
      {
        "@type": "ItemList",
        "@id": "https://buildhelix.org/#services",
        name: "HELIX Services",
        description:
          "Professional website design and development services for businesses in Mumbai, Navi Mumbai, and Thane.",
        itemListElement: [
          {
            "@type": "Service",
            name: "Modern Business Websites",
            description:
              "Premium responsive websites for restaurants, gyms, apparel brands, and startups. Built with React, optimized for performance.",
            provider: { "@id": "https://buildhelix.org/#organization" },
            areaServed: ["Mumbai", "Navi Mumbai", "Thane"],
            offers: {
              "@type": "Offer",
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "10000",
                priceCurrency: "INR",
              },
            },
          },
          {
            "@type": "Service",
            name: "E-commerce Development",
            description:
              "Custom online stores with secure checkout, inventory management, and mobile-optimized shopping experiences.",
            provider: { "@id": "https://buildhelix.org/#organization" },
          },
          {
            "@type": "Service",
            name: "Brand Identity",
            description:
              "Complete branding packages including logo design, color systems, typography, and brand guidelines.",
            provider: { "@id": "https://buildhelix.org/#organization" },
          },
          {
            "@type": "Service",
            name: "Web Application Development",
            description:
              "Scalable web applications using React, Node.js, and modern frameworks for startups and growing businesses.",
            provider: { "@id": "https://buildhelix.org/#organization" },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
