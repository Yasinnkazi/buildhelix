export interface LandingPageContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  heroDescription: string;
  ogUrl: string;
  targetIndustry: string;
  projectLinkId: string;
  projectCta: string;
  stats: { value: string; label: string }[];
  offerings: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  processSteps: { step: string; title: string; description: string }[];
  ctaText: string;
}

export const LANDING_PAGES: LandingPageContent[] = [
  {
    slug: "gym-websites-mumbai",
    title: "Gym Websites Mumbai",
    metaTitle: "Gym Website Designer Mumbai — Fitness Brand Websites",
    metaDescription:
      "Professional gym website design in Mumbai. Custom fitness brand platforms with class scheduling, trainer profiles, and membership management. Built for gyms in Mumbai, Navi Mumbai, and Thane.",
    h1: "GYM WEBSITES",
    subtitle: "MUMBAI",
    heroDescription:
      "A website is your gym's most important piece of equipment. We build fitness brand platforms that attract new members, showcase your training philosophy, and make class booking effortless.",
    ogUrl: "https://buildhelix.org/gym-websites-mumbai",
    targetIndustry: "Fitness & Gym",
    projectLinkId: "apex",
    projectCta: "See how APEX transformed their fitness brand online.",
    stats: [
      { value: "100", label: "Mobile-First Design" },
      { value: "3X", label: "More Member Inquiries" },
      { value: "24/7", label: "Booking Availability" },
    ],
    offerings: [
      {
        title: "Class & Schedule Management",
        description:
          "Display your weekly schedule with real-time availability. Members can see class timings, trainer assignments, and book directly from their phone.",
      },
      {
        title: "Trainer Showcase",
        description:
          "Highlight your coaching team with dedicated profiles. Share certifications, specialities, and training styles to build trust before the first visit.",
      },
      {
        title: "Membership & Pricing Pages",
        description:
          "Present your membership tiers clearly. No hidden fees, no confusing tables — just transparent pricing that converts visitors into leads.",
      },
      {
        title: "Location & Local SEO",
        description:
          "Optimised for gym searches in Mumbai, Navi Mumbai, and Thane. Your gym appears when potential members search for fitness options nearby.",
      },
    ],
    benefits: [
      {
        title: "Attract Local Members",
        description:
          "Rank for 'gym near me' and 'best gym in Mumbai' searches. Your website becomes your best walk-in generator.",
      },
      {
        title: "Reduce Admin Time",
        description:
          "Online booking and inquiry forms cut down phone calls and walk-ins during training hours. Let your website handle the admin.",
      },
      {
        title: "Build Premium Branding",
        description:
          "A modern gym website signals quality before a prospect steps through your doors. First impressions happen on Google, not your reception desk.",
      },
    ],
    processSteps: [
      { step: "01", title: "Brand Discovery", description: "We understand your training philosophy, target audience, and competitive landscape in Mumbai's fitness market." },
      { step: "02", title: "Design & Build", description: "Your gym's digital presence takes shape with mobile-first design, class management, and SEO structure." },
      { step: "03", title: "Launch & Grow", description: "We deploy your site, connect analytics, and optimise for local search so new members find you." },
    ],
    ctaText: "Build Your Gym Website",
  },
  {
    slug: "restaurant-website-design",
    title: "Restaurant Website Design",
    metaTitle: "Restaurant Website Designer Mumbai — Menu & Reservation Sites",
    metaDescription:
      "Restaurant website design in Mumbai. Menu-first websites with online reservations, gallery showcases, and local SEO. Built for restaurants, cafes, and hospitality brands in Mumbai.",
    h1: "RESTAURANT WEBSITES",
    subtitle: "THAT DRIVE RESERVATIONS",
    heroDescription:
      "Your menu is your best marketing asset. We build restaurant websites that put your food first — with stunning galleries, seamless reservation flows, and the kind of mouth-watering presentation that turns browsers into diners.",
    ogUrl: "https://buildhelix.org/restaurant-website-design",
    targetIndustry: "Restaurant & Hospitality",
    projectLinkId: "aura",
    projectCta: "See how Aura brought their restaurant brand to life online.",
    stats: [
      { value: "60%", label: "More Reservation Inquiries" },
      { value: "4X", label: "Menu View Engagement" },
      { value: "24/7", label: "Online Booking Available" },
    ],
    offerings: [
      {
        title: "Menu-First Design",
        description:
          "Your menu is the hero. We design beautiful, mobile-optimised menu pages with category filtering, pricing, dietary tags, and high-res food photography.",
      },
      {
        title: "Reservation Integration",
        description:
          "Seamless booking flow that connects directly to your phone or reservation system. Guests can book a table anytime, from any device.",
      },
      {
        title: "Gallery & Ambiance Showcase",
        description:
          "Full-screen photo and video galleries that capture your restaurant's atmosphere, interior design, and signature dishes before guests arrive.",
      },
      {
        title: "Location & Local Visibility",
        description:
          "Optimised for 'restaurants near me' and 'best dining in Mumbai' searches. Your website works as your 24-hour host, bringing in new customers.",
      },
    ],
    benefits: [
      {
        title: "Hungry Customers Find You",
        description:
          "Rank for local searches like 'best restaurant in Navi Mumbai' or 'cafe near me'. Your website turns search intent into table bookings.",
      },
      {
        title: "Showcase Before They Visit",
        description:
          "A stunning food-first website builds anticipation and trust. Guests arrive already excited about what they've seen online.",
      },
      {
        title: "Reduce Phone Calls",
        description:
          "Menu browsing, reservation requests, and contact info available 24/7. Your staff focuses on service, not answering the same questions.",
      },
    ],
    processSteps: [
      { step: "01", title: "Menu & Brand Review", description: "We study your menu, interior photography, and brand identity to design a digital experience that matches your restaurant's quality." },
      { step: "02", title: "Design & Reserve Flow", description: "We build a mobile-first site with menu browsing, reservation CTAs, and gallery showcases optimised for hungry searchers." },
      { step: "03", title: "Go Live & Get Found", description: "Your site goes live with local SEO targeting Mumbai diners. We track reservations and menu engagement to keep improving." },
    ],
    ctaText: "Build Your Restaurant Website",
  },
  {
    slug: "apparel-brand-websites",
    title: "Apparel Brand Websites",
    metaTitle: "Apparel Website Designer Mumbai — Fashion Brand Platforms",
    metaDescription:
      "Fashion and apparel website design in Mumbai. Product-first brand platforms with catalogue browsing, bulk inquiry workflows, and brand storytelling. Built for clothing brands in Mumbai.",
    h1: "APPAREL BRAND",
    subtitle: "WEBSITES",
    heroDescription:
      "Your products deserve a digital experience that matches their quality. We build apparel brand platforms that showcase collections, simplify bulk inquiries, and tell your brand story with every scroll.",
    ogUrl: "https://buildhelix.org/apparel-brand-websites",
    targetIndustry: "Apparel & Printing",
    projectLinkId: "threadforge",
    projectCta: "See how ThreadForge built their apparel brand online.",
    stats: [
      { value: "5X", label: "Catalogue Engagement" },
      { value: "100%", label: "Mobile Shopping Ready" },
      { value: "24/7", label: "Bulk Inquiry Available" },
    ],
    offerings: [
      {
        title: "Collection & Catalogue Showcase",
        description:
          "Organise products by collection, season, or category. High-res image galleries with zoom, colour variants, and quick-view that make browsing effortless.",
      },
      {
        title: "Bulk Inquiry System",
        description:
          "Streamlined B2B inquiry workflow for wholesale, bulk orders, and custom printing requests. No complicated checkout — just a simple ask-and-quote flow.",
      },
      {
        title: "Brand Storytelling",
        description:
          "Your brand identity, craft, and process deserve space to breathe. We build about pages and brand narratives that connect with customers on a deeper level.",
      },
      {
        title: "Retail & Local Discovery",
        description:
          "Optimised for fashion searches in Mumbai. Whether you're a D2C brand or a retail store, your website helps local customers discover your products.",
      },
    ],
    benefits: [
      {
        title: "Sell Without a Storefront",
        description:
          "Your catalogue works 24/7. Customers browse collections, check pricing, and send inquiries — even when your physical store is closed.",
      },
      {
        title: "B2B Inquiry Without Friction",
        description:
          "Bulk buyers, event planners, and corporate clients can send detailed inquiries directly. No phone tag, no back-and-forth emails.",
      },
      {
        title: "Brand Authority in Mumbai's Fashion Scene",
        description:
          "A premium website signals you're a serious player. Stand out from Instagram-only brands with a professional digital presence.",
      },
    ],
    processSteps: [
      { step: "01", title: "Collection Audit", description: "We review your product catalogue, brand guidelines, and target customers to design a showcase that sells." },
      { step: "02", title: "Design & Product Flow", description: "We build a visual-first platform with catalogue browsing, inquiry workflows, and mobile-optimised product pages." },
      { step: "03", title: "Launch & Connect", description: "Your brand goes live with SEO targeting Mumbai fashion buyers. We track engagement and refine the product discovery flow." },
    ],
    ctaText: "Build Your Apparel Website",
  },
  {
    slug: "startup-websites-mumbai",
    title: "Startup Websites Mumbai",
    metaTitle: "Startup Website Designer Mumbai — Launch-Ready Brand Sites",
    metaDescription:
      "Startup website design in Mumbai. Launch-ready brand platforms with investor-grade design, product storytelling, and scalability. Built for startups in Mumbai, Navi Mumbai, and Thane.",
    h1: "STARTUP WEBSITES",
    subtitle: "FOR MUMBAI'S NEXT BIG IDEA",
    heroDescription:
      "Your startup needs a website that works as hard as your team. We build launch-ready brand platforms that communicate your vision, attract talent, and convert early customers — from day one.",
    ogUrl: "https://buildhelix.org/startup-websites-mumbai",
    targetIndustry: "Creative Agency",
    projectLinkId: "helix-digital",
    projectCta: "See how HELIX Digital showcases what a modern studio can do.",
    stats: [
      { value: "7", label: "Day Launch Available" },
      { value: "100%", label: "Investor-Ready Design" },
      { value: "1", label: "Design System Included" },
    ],
    offerings: [
      {
        title: "Investor-Grade Design",
        description:
          "Your website is often the first thing investors see. We build polished, professional platforms that communicate credibility and product-market fit from the first visit.",
      },
      {
        title: "Product & Feature Storytelling",
        description:
          "Showcase your product with clarity. Feature sections, benefit-driven copy, and interactive walkthroughs that help customers understand your value proposition instantly.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Built on React with component-based design systems that grow with you. Adding pages, features, or a blog later doesn't require rebuilding from scratch.",
      },
      {
        title: "Founder & Team Profiles",
        description:
          "Introduce your founding team with personality. Build trust with investors and early customers through authentic team storytelling and mission-driven copy.",
      },
    ],
    benefits: [
      {
        title: "Launch Fast, Iterate Faster",
        description:
          "Get a polished, professional website in days, not months. Our modular approach means updates and additions are simple as your startup evolves.",
      },
      {
        title: "Impress Investors & Early Adopters",
        description:
          "A premium website signals traction and professionalism. Make a strong first impression that sets the tone for customer and investor conversations.",
      },
      {
        title: "Built for Mumbai's Startup Ecosystem",
        description:
          "We understand Mumbai's startup landscape. From BKC to Powai, your website positions you within the city's growing entrepreneurial community.",
      },
    ],
    processSteps: [
      { step: "01", title: "Vision & Positioning", description: "We align on your product story, target audience, and key metrics. Your website strategy is built around your startup's goals." },
      { step: "02", title: "Design & Build Sprint", description: "We work in short, focused sprints to design, build, and iterate your website. You see progress every few days." },
      { step: "03", title: "Launch & Iterate", description: "Your site goes live with analytics tracking. We help you measure engagement and refine messaging as your startup grows." },
    ],
    ctaText: "Build Your Startup Website",
  },
  {
    slug: "printing-business-websites",
    title: "Printing Business Websites",
    metaTitle: "Printing Business Website Designer Mumbai — DTF & Custom Print",
    metaDescription:
      "Printing business website design in Mumbai. Custom platforms for DTF printing, screen printing, and apparel decoration businesses. Built for print shops in Mumbai, Navi Mumbai, and Thane.",
    h1: "PRINTING BUSINESS",
    subtitle: "WEBSITES",
    heroDescription:
      "The printing industry runs on inquiries. We build websites for print businesses that showcase your capabilities, simplify quote requests, and turn visitors into bulk order customers.",
    ogUrl: "https://buildhelix.org/printing-business-websites",
    targetIndustry: "Apparel & Printing",
    projectLinkId: "threadforge",
    projectCta: "See how ThreadForge handles bulk printing inquiries online.",
    stats: [
      { value: "3X", label: "Quote Request Volume" },
      { value: "100%", label: "B2B Inquiry Ready" },
      { value: "24/7", label: "Order Intake Open" },
    ],
    offerings: [
      {
        title: "Service & Capability Showcase",
        description:
          "Clearly present your printing services — DTF, screen printing, sublimation, embroidery. Help customers understand what you do before they reach out.",
      },
      {
        title: "Bulk Quote Request System",
        description:
          "Simple forms that collect quantities, sizes, colours, and deadlines. No complicated checkout — just a streamlined inquiry that lands in your inbox ready to quote.",
      },
      {
        title: "Portfolio & Sample Gallery",
        description:
          "Display your best work. Client samples, fabric swatches, and before-after comparisons build trust and help prospects self-qualify before contacting you.",
      },
      {
        title: "Local SEO for Print Buyers",
        description:
          "Rank for 'printing press near me', 'DTF printing Mumbai', and 'custom t-shirt printing Navi Mumbai'. Local businesses find you when they need printing done.",
      },
    ],
    benefits: [
      {
        title: "Stop Answering the Same Questions",
        description:
          "Minimum order quantities, turnaround times, pricing — put everything online. Your website pre-qualifies leads so every inquiry is ready to close.",
      },
      {
        title: "Look Bigger Than You Are",
        description:
          "A professional website makes a small print shop look like a major operation. Win larger clients with a digital presence that matches your capabilities.",
      },
      {
        title: "Dominate Local Print Searches",
        description:
          "Mumbai has thousands of businesses that need printing daily. Your website captures them at the moment of search and converts them into customers.",
      },
    ],
    processSteps: [
      { step: "01", title: "Service & Capacity Review", description: "We map your printing services, target clients, and common inquiry types to design a site that answers questions before they're asked." },
      { step: "02", title: "Design & Inquiry Flow", description: "We build a B2B-focused platform with service pages, portfolio galleries, and streamlined quote request forms." },
      { step: "03", title: "Launch & Capture Demand", description: "Your site goes live with local SEO targeting print buyers in Mumbai. We optimise the inquiry flow to maximise conversions." },
    ],
    ctaText: "Build Your Printing Website",
  },
];
