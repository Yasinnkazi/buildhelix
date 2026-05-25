import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const GymWebsites = lazy(() => import("./pages/landing/GymWebsites"));
const RestaurantWebsites = lazy(() => import("./pages/landing/RestaurantWebsites"));
const ApparelWebsites = lazy(() => import("./pages/landing/ApparelWebsites"));
const StartupWebsites = lazy(() => import("./pages/landing/StartupWebsites"));
const PrintingWebsites = lazy(() => import("./pages/landing/PrintingWebsites"));
const Insights = lazy(() => import("./pages/insights/Insights"));
const InsightArticle = lazy(() => import("./pages/insights/InsightArticle"));

function PageLoading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gym-websites-mumbai" element={<GymWebsites />} />
              <Route path="/restaurant-website-design" element={<RestaurantWebsites />} />
              <Route path="/apparel-brand-websites" element={<ApparelWebsites />} />
              <Route path="/startup-websites-mumbai" element={<StartupWebsites />} />
              <Route path="/printing-business-websites" element={<PrintingWebsites />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightArticle />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
