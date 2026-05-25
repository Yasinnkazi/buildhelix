import ServiceLanding from "../../templates/ServiceLanding";
import { LANDING_PAGES } from "../../data/landingPages";

export default function GymWebsites() {
  const content = LANDING_PAGES.find((p) => p.slug === "gym-websites-mumbai")!;
  return <ServiceLanding content={content} />;
}
