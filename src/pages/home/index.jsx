import React from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import mercedesLarge from "@/assets/images/mercedesLarge.jpg";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${mercedesLarge})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <Hero />
      <Benefits />
    </div>
  );
}
