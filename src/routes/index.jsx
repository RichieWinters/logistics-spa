import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/home";
import NotFound from "@/pages/NotFound";
import { PAGES } from "./pageNames";
import Section from "@/pages/section";
import { SECTION_TYPES } from "@/types/section";

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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
