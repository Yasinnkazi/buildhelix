import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300
        ${scrolled
          ? "top-0 w-full rounded-none bg-surface-dim/30 backdrop-blur-xl"
          : "top-4 w-[90%] max-w-7xl rounded-full bg-surface/10 dark:bg-surface-dim/10 backdrop-blur-xl border border-white/10 dark:border-white/5 backdrop-saturate-150 shadow-2xl"
        }
        flex justify-between items-center px-8 py-3`}
    >
      <Link to="/" className="flex items-center gap-2 group">
        <span className="material-symbols-outlined text-primary transition-transform duration-300 group-hover:scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>
          blur_on
        </span>
        <span className="font-headline-lg text-headline-lg tracking-tighter text-on-surface dark:text-on-surface-variant">
          HELIX
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`font-label-md text-label-md transition-all duration-300 hover:scale-105 ${
                isActive
                  ? "text-primary dark:text-primary-fixed border-b border-primary/50"
                  : "text-on-surface-variant dark:text-outline-variant hover:text-on-surface dark:hover:text-on-surface"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2 z-50"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-px bg-on-surface transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
        <span className={`block w-6 h-px bg-on-surface transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-px bg-on-surface transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
      </button>

      <Link
        to="/contact"
        className="hidden md:inline-flex bg-primary text-on-primary-container px-6 py-2 rounded-full font-label-md text-label-md hover:scale-105 hover:bg-white/5 transition-all duration-300 active:scale-95"
      >
        Book a Call
      </Link>

      {mobileOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`font-display-lg text-display-lg transition-all duration-300 ${
                  isActive ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="mt-8 bg-primary text-on-primary-container px-10 py-4 rounded-full font-label-md text-label-md hover:scale-105 transition-all duration-300"
          >
            Book a Call
          </Link>
        </div>
      )}
    </header>
  );
}
