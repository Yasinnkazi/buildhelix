import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300
        ${scrolled
          ? "top-0 w-full rounded-none bg-background/75 backdrop-blur-xl"
          : "top-4 w-[92%] sm:w-[90%] max-w-7xl rounded-full bg-background/15 backdrop-blur-xl border border-white/10 backdrop-saturate-150 shadow-2xl"
        }
        flex justify-between items-center px-5 md:px-8 py-3`}
    >
      <Link to="/" className="flex items-center gap-2 group z-50">
        <span className="material-symbols-outlined text-primary transition-transform duration-300 group-hover:scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>
          blur_on
        </span>
        <span className="font-headline-lg text-headline-lg tracking-tighter">
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
              className={`relative font-label-md text-label-md transition-all duration-300 py-1 ${
                isActive
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {item.label}
              {isActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden relative z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all duration-300"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        <div className="flex flex-col items-center justify-center gap-[5px]">
          <span className={`block w-[18px] h-[1.5px] bg-on-surface rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-[18px] h-[1.5px] bg-on-surface rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-[18px] h-[1.5px] bg-on-surface rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </div>
      </button>

      <Link
        to="/contact"
        className="hidden md:inline-flex bg-primary text-on-primary-container px-6 py-2.5 rounded-full font-label-md text-label-md hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20"
      >
        Book a Call
      </Link>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, x: "80%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "80%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm z-[60] md:hidden overflow-y-auto"
              style={{ background: "var(--color-background, #121414)" }}
            >
              <div className="absolute inset-0 backdrop-blur-3xl" style={{ background: "var(--color-background, #121414)", opacity: 0.98 }} />

              <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-10 py-24">
                {/* Close button */}
                <div
                  className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/10 active:scale-90 z-20"
                  style={{
                    backdropFilter: "blur(16px)",
                    background: "var(--glass-bg, rgba(255,255,255,0.03))",
                    border: "1px solid var(--glass-border, rgba(255,255,255,0.1))",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="material-symbols-outlined text-on-surface text-xl">
                    close
                  </span>
                </div>

                <nav className="flex flex-col items-center gap-10">
                  {NAV_ITEMS.map((item, i) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * i, duration: 0.3 }}
                      >
                        <Link
                          to={item.path}
                          className={`font-display-lg text-display-lg transition-all duration-300 ${
                            isActive
                              ? "text-primary"
                              : "text-on-surface-variant/50 hover:text-on-surface"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="mt-12"
                >
                  <Link
                    to="/contact"
                    className="inline-flex bg-primary text-on-primary-container px-12 py-4 rounded-full font-label-md text-label-md hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20"
                    onClick={() => setMobileOpen(false)}
                  >
                    Book a Call
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
