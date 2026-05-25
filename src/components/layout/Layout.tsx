import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../ui/ScrollToTop";
import FloatingWhatsApp from "../ui/FloatingWhatsApp";
import {
  initScrollTracking,
  initTimeTracking,
  trackPageView,
} from "../../utils/analytics";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    const cleanup: (() => void)[] = [];
    cleanup.push(initScrollTracking());
    cleanup.push(initTimeTracking());
    return () => cleanup.forEach((fn) => fn());
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
