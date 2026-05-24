import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../ui/ScrollToTop";
import FloatingWhatsApp from "../ui/FloatingWhatsApp";

export default function Layout() {
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
