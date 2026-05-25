import ServiceLanding from "../../templates/ServiceLanding";
import { LANDING_PAGES } from "../../data/landingPages";

export default function RestaurantWebsites() {
  const content = LANDING_PAGES.find((p) => p.slug === "restaurant-website-design")!;
  return <ServiceLanding content={content} />;
}
