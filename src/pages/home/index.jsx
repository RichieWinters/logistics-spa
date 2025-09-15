import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import FeedbackForm from "./components/FeedbackForm";
import AboutUs from "./components/AboutUs";
import PopularServices from "./components/PopularServices";
import mercedesLarge from "@/assets/images/mercedesLarge.jpg";
import { useSEO } from "@/hooks/useSEO";
import { PAGE_SEO_CONFIG } from "@/utils/seo";

export default function Home() {
  // Apply SEO for home page
  useSEO(PAGE_SEO_CONFIG.home);

  return (
    <>
      <div
        className="max-h-[77svh] bg-cover bg-center bg-no-repeat inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${mercedesLarge})`,
        }}
      >
        <Hero />
      </div>

      <Benefits />
      <FeedbackForm />
      <AboutUs />
      <PopularServices />
    </>
  );
}
