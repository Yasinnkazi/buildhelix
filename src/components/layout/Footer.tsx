import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SOCIAL_LINKS, CONTACT_INFO } from "../../constants/social";
import { NAV_ITEMS } from "../../constants/navigation";
import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="w-full rounded-t-xl border-t border-outline-variant/20 bg-surface-container-lowest/80">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-20 md:py-24 flex flex-col md:flex-row justify-between gap-12 md:gap-16">
        <div className="flex flex-col gap-6 max-w-sm">
          <Link to="/" className="font-display-2xl text-display-2xl tracking-tighter hover:text-primary transition-colors duration-500">
            HELIX
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant/60 leading-relaxed">
            We build modern websites and brand experiences for businesses, restaurants, gyms, apparel brands, and studios.
          </p>
          <a
            href="https://studio.buildhelix.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-label-sm text-primary/60 hover:text-primary transition-all duration-300 w-fit"
          >
            <span className="material-symbols-outlined text-lg">open_in_new</span>
            studio.buildhelix.org
          </a>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2.5 text-label-sm text-on-surface-variant/40 hover:text-primary transition-all duration-300 w-fit group"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <motion.span
              className="material-symbols-outlined text-lg"
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </motion.span>
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
          <div className="flex flex-col gap-3">
            <h4 className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Navigation</h4>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-label-sm text-label-sm text-on-surface-variant/60 hover:text-primary transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Social</h4>
            {SOCIAL_LINKS.active.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-sm text-label-sm text-on-surface-variant/60 hover:text-primary transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            {SOCIAL_LINKS.placeholder.map((link) => (
              <span
                key={link.name}
                className="font-label-sm text-label-sm text-on-surface-variant/30 cursor-not-allowed line-through"
                title="Coming soon"
              >
                {link.name}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Contact</h4>
            <Link
              to="/contact"
              className="font-label-sm text-label-sm text-on-surface-variant/60 hover:text-primary transition-all duration-300"
            >
              {CONTACT_INFO.email}
            </Link>
            {CONTACT_INFO.phones.map((phone) => (
              <span
                key={phone}
                className="font-label-sm text-label-sm text-on-surface-variant/60"
              >
                {phone}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-6 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-label-sm text-label-sm text-outline/40">© 2024 HELIX. All rights reserved.</span>
        <div className="flex gap-5">
          {SOCIAL_LINKS.active.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-outline/40 hover:text-primary transition-all duration-300"
              aria-label={link.name}
            >
              <span className="material-symbols-outlined text-lg">
                {link.icon === "Instagram" ? "camera_alt" : link.icon === "X" ? "alternate_email" : "code"}
              </span>
            </a>
          ))}
          {SOCIAL_LINKS.placeholder.map((link) => (
            <span
              key={link.name}
              className="text-outline/20 cursor-not-allowed"
              aria-label={`${link.name} (coming soon)`}
            >
              <span className="material-symbols-outlined text-lg">
                {link.icon === "Linkedin" ? "groups" : "forum"}
              </span>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
