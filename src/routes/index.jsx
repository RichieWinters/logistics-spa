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
      { path: PAGES.services.airportTransfer.path, element: <AirportTransferPage /> },
      { path: PAGES.services.carWithDriver.path, element: <CarWithDriverPage /> },
      { path: PAGES.services.carsForTheEvent.path, element: <EventTransportPage /> },
      { path: PAGES.services.privateTransfer.path, element: <PersonalTransferPage /> },
      { path: PAGES.services.soberDriver.path, element: <SoberDriverPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
