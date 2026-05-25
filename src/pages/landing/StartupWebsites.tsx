import ServiceLanding from "../../templates/ServiceLanding";
import { LANDING_PAGES } from "../../data/landingPages";

export default function StartupWebsites() {
  const content = LANDING_PAGES.find((p) => p.slug === "startup-websites-mumbai")!;
  return <ServiceLanding content={content} />;
}
