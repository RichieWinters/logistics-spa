import { PAGES } from "@/routes/pageNames";

export const navigationItems = [
  {
    title: PAGES.services.main.title,
    path: PAGES.services.main.path,
    dropdown: "services",
    items: PAGES.concreteServices,
  },
  {
    title: PAGES.excursions.main.title,
    path: PAGES.excursions.main.path,
    dropdown: "excursions",
    items: PAGES.concreteExcursions,
  },
  {
    title: PAGES.roadsideAssistance.main.title,
    path: PAGES.roadsideAssistance.main.path,
    dropdown: "roadside",
    items: PAGES.concreteAssistances,
  },
];
