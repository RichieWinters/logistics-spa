import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import FeedbackForm from "./components/FeedbackForm";
import AboutUs from './components/AboutUs'
import PopularServices from './components/PopularServices'
import mercedesLarge from "@/assets/images/mercedesLarge.jpg";

export default function Home() {
  return (
    <>
      <div
        className="max-h-[77vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mercedesLarge})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 max-h-[77vh]" />

        <Hero />
      </div>

      <Benefits />
      <FeedbackForm />
      <AboutUs />
      <PopularServices />
    </>
  );
}
