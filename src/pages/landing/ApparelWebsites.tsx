import ServiceLanding from "../../templates/ServiceLanding";
import { LANDING_PAGES } from "../../data/landingPages";

export default function ApparelWebsites() {
  const content = LANDING_PAGES.find((p) => p.slug === "apparel-brand-websites")!;
  return <ServiceLanding content={content} />;
}
