import { PAGES } from "./routes/pageNames";

export const RUB_RATE = 27.48;
export const USD_RATE = 0.32;

export const pageNamesMap = new Map([
  ...PAGES.concreteExcursions.map((excursion) => [excursion.path.split("/").pop(), excursion.title]),
  ...PAGES.concreteServices.map((service) => [service.path.split("/").pop(), service.title]),
  ...PAGES.concreteAssistances.map((assistance) => [assistance.path.split("/").pop(), assistance.title]),
]);
