import ServiceLanding from "../../templates/ServiceLanding";
import { LANDING_PAGES } from "../../data/landingPages";

export default function PrintingWebsites() {
  const content = LANDING_PAGES.find((p) => p.slug === "printing-business-websites")!;
  return <ServiceLanding content={content} />;
}
