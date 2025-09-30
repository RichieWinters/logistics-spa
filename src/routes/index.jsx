import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/home";
import NotFound from "@/pages/NotFound";
import { PAGES } from "./pageNames";
import Section from "@/pages/section";
import { SECTION_TYPES } from "@/types/section";
import { AirportTransferPage } from "@/pages/offers/airport-transfer";
import { CarWithDriverPage } from "@/pages/offers/car-with-driver";
import { PersonalTransferPage } from "@/pages/offers/personal-transfer";
import { SoberDriverPage } from "@/pages/offers/sober-driver";

// Excursion pages
import { KhatynCityTourPage } from "@/pages/excursions/Khatyn";
import { MirNesvizhPage } from "@/pages/excursions/MirNesvizh";
import { MirNesvizhSulaPage } from "@/pages/excursions/MirNesvizhSula";
import { SulaPage } from "@/pages/excursions/Sula";
import { BrestAndBelovezhskayaPushchaPage } from "@/pages/excursions/BrestAndBelovezhskayaPushcha";
import { GrodnoLidskyCastlePage } from "@/pages/excursions/GrodnoLidskyCastle";
import { VitebskPage } from "@/pages/excursions/Vitebsk";
import { DudutkiPage } from "@/pages/excursions/Dudutki";
import { BelazPage } from "@/pages/excursions/Belaz";
import { MinskPage } from "@/pages/excursions/Minsk";
import { BaranovichiPage } from "@/pages/excursions/Baranovichi";
import { GomelPage } from "@/pages/excursions/Gomel";
import ExcursionHeroImg from "/excursion/hero.jpg";
import roadsideAssistanceImg from "@/assets/images/roadHelp.jpg";

// Roadside assistance pages
import { FuelDeliveryPage } from "@/pages/roadside-assistance/fuel-delivery";
import { LockoutAssistancePage } from "@/pages/roadside-assistance/lockout-assistance";
import { WheelSwapping } from "@/pages/roadside-assistance/wheel-swapping";

export const router = createBrowserRouter([
  {
    path: PAGES.main.path,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: PAGES.services.main.path,
        element: <Section type={SECTION_TYPES.services.value} />,
      },
      {
        path: PAGES.excursions.main.path,
        element: <Section type={SECTION_TYPES.excursions.value} heroImg={ExcursionHeroImg} />,
      },
      {
        path: PAGES.roadsideAssistance.main.path,
        element: <Section type={SECTION_TYPES.roadsideAssistance.value} heroImg={roadsideAssistanceImg} />,
      },
      // Services pages
      { path: PAGES.services.airportTransfer.path, element: <AirportTransferPage /> },
      { path: PAGES.services.carWithDriver.path, element: <CarWithDriverPage /> },
      // { path: PAGES.services.eventTransport.path, element: <EventTransportPage /> },
      { path: PAGES.services.personalTransfer.path, element: <PersonalTransferPage /> },
      { path: PAGES.services.soberDriver.path, element: <SoberDriverPage /> },

      // Excursion pages
      { path: PAGES.excursions.khatynCityTour.path, element: <KhatynCityTourPage /> },

      { path: PAGES.excursions.sula.path, element: <SulaPage /> },
      { path: PAGES.excursions.mirNesvizhSula.path, element: <MirNesvizhSulaPage /> },
      { path: PAGES.excursions.mirNesvizh.path, element: <MirNesvizhPage /> },
      {
        path: PAGES.excursions.brestFortressAndBelovezhskayaPushcha.path,
        element: <BrestAndBelovezhskayaPushchaPage />,
      },
      { path: PAGES.excursions.grodnoLidskiyCastle.path, element: <GrodnoLidskyCastlePage /> },
      { path: PAGES.excursions.vitebskExcursion.path, element: <VitebskPage /> },
      { path: PAGES.excursions.dudutkaMuseumTour.path, element: <DudutkiPage /> },
      { path: PAGES.excursions.belAZTour.path, element: <BelazPage /> },
      { path: PAGES.excursions.minskExcursion.path, element: <MinskPage /> },
      { path: PAGES.excursions.baranovichiZoo.path, element: <BaranovichiPage /> },
      { path: PAGES.excursions.gomel.path, element: <GomelPage /> },

      // Roadside assistance pages
      { path: PAGES.roadsideAssistance.lockoutAssistance.path, element: <LockoutAssistancePage /> },
      { path: PAGES.roadsideAssistance.fuelDelivery.path, element: <FuelDeliveryPage /> },
      { path: PAGES.roadsideAssistance.wheelSwapping.path, element: <WheelSwapping /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
