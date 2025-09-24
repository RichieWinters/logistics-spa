import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/home";
import NotFound from "@/pages/NotFound";
import { PAGES } from "./pageNames";
import Section from "@/pages/section";
import { SECTION_TYPES } from "@/types/section";
import { AirportTransferPage } from "@/pages/offers/airport-transfer";
import { CarWithDriverPage } from "@/pages/offers/car-with-driver";
import { EventTransportPage } from "@/pages/offers/event-transport";
import { PersonalTransferPage } from "@/pages/offers/personal-transfer";
import { SoberDriverPage } from "@/pages/offers/sober-driver";

// Excursion pages
import { BelarusCastlesTourPage } from "@/pages/excursions/belarus-castles-tour";
import { KhatynCityTourPage } from "@/pages/excursions/khatyn-city-tour";
import { BelazTourPage } from "@/pages/excursions/belaz-tour";
import { DudutkaMuseumTourPage } from "@/pages/excursions/dudutka-museum-tour";

// Roadside assistance pages
import { EmergencyTowingPage } from "@/pages/roadside-assistance/emergency-towing";
import { TireChangePage } from "@/pages/roadside-assistance/tire-change";
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
        element: <Section type={SECTION_TYPES.excursions.value} />,
      },
      {
        path: PAGES.roadsideAssistance.main.path,
        element: <Section type={SECTION_TYPES.roadsideAssistance.value} />,
      },
      // Services pages
      { path: PAGES.services.airportTransfer.path, element: <AirportTransferPage /> },
      { path: PAGES.services.carWithDriver.path, element: <CarWithDriverPage /> },
      // { path: PAGES.services.eventTransport.path, element: <EventTransportPage /> },
      { path: PAGES.services.personalTransfer.path, element: <PersonalTransferPage /> },
      { path: PAGES.services.soberDriver.path, element: <SoberDriverPage /> },

      // Excursion pages
      /*       { path: PAGES.excursions.belarusCastlesTour.path, element: <BelarusCastlesTourPage /> },
      { path: PAGES.excursions.khatynCityTour.path, element: <KhatynCityTourPage /> },
      { path: PAGES.excursions.belAZTour.path, element: <BelazTourPage /> },
      { path: PAGES.excursions.dudutkaMuseumTour.path, element: <DudutkaMuseumTourPage /> },
 */
      // Roadside assistance pages
      { path: PAGES.roadsideAssistance.lockoutAssistance.path, element: <LockoutAssistancePage /> },
      // { path: PAGES.roadsideAssistance.tireChange.path, element: <TireChangePage /> },
      { path: PAGES.roadsideAssistance.fuelDelivery.path, element: <FuelDeliveryPage /> },
      { path: PAGES.roadsideAssistance.wheelSwapping.path, element: <WheelSwapping /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
