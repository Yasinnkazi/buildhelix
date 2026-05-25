import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  ogUrl?: string;
}

const BASE_URL = "https://buildhelix.org";

export default function SEO({ title, description, ogImage, ogUrl }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | HELIX — Modern Websites & Brand Experiences`;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        if (name.startsWith("og:")) {
          el.setAttribute("property", name);
        } else {
          el.setAttribute("name", name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", description);
    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:url", ogUrl || window.location.href);
    setMeta("og:image", ogImage || `${BASE_URL}/og.png`);
    setMeta("og:type", "website");
    setMeta("og:site_name", "HELIX");
    setMeta("og:locale", "en_IN");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
  }, [title, description, ogImage, ogUrl]);

  useEffect(() => {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", ogUrl || window.location.href);
  }, [ogUrl]);

  return null;
}
