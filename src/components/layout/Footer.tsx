import { Link } from "react-router-dom";
import { SOCIAL_LINKS, CONTACT_INFO } from "../../constants/social";
import { NAV_ITEMS } from "../../constants/navigation";
import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="w-full rounded-t-xl bg-surface-container-lowest dark:bg-surface-dim border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-24 flex flex-col md:flex-row justify-between gap-16">
        <div className="flex flex-col gap-8 max-w-sm">
          <Link to="/" className="font-display-2xl text-display-2xl tracking-tighter text-on-surface dark:text-on-surface hover:text-primary transition-colors duration-500">
            HELIX
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-60">
            Architecting the digital frontier. We build systems that drive modern enterprise.
          </p>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-label-sm text-on-surface-variant opacity-40 hover:opacity-100 hover:text-primary transition-all duration-300 w-fit"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-lg">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <h4 className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Navigation</h4>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-label-sm text-label-sm text-on-surface-variant dark:text-outline opacity-60 hover:opacity-100 hover:text-primary transition-all duration-500"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Social</h4>
            {SOCIAL_LINKS.active.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-sm text-label-sm text-on-surface-variant dark:text-outline opacity-60 hover:opacity-100 hover:text-primary transition-all duration-500"
              >
                {link.name}
              </a>
            ))}
            {SOCIAL_LINKS.placeholder.map((link) => (
              <span
                key={link.name}
                className="font-label-sm text-label-sm text-on-surface-variant dark:text-outline opacity-30 cursor-not-allowed line-through"
                title="Coming soon"
              >
                {link.name}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Contact</h4>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="font-label-sm text-label-sm text-on-surface-variant dark:text-outline opacity-60 hover:opacity-100 hover:text-primary transition-all duration-500"
            >
              {CONTACT_INFO.email}
            </a>
            {CONTACT_INFO.phones.map((phone) => (
              <span
                key={phone}
                className="font-label-sm text-label-sm text-on-surface-variant dark:text-outline opacity-60"
              >
                {phone}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-label-sm text-label-sm text-outline opacity-40">© 2024 HELIX SYSTEMS. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-6">
          {SOCIAL_LINKS.active.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-outline opacity-40 hover:opacity-100 hover:text-primary transition-all duration-300"
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
              className="text-outline opacity-20 cursor-not-allowed"
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
