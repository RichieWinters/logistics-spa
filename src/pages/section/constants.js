import { PAGES } from "@/routes/pageNames";
import Service2 from "@/assets/images/Service2.jpg";
import Service1 from "@/assets/images/Service1.jpg";

export const serviceItems = PAGES.concreteServices.map(({ path, title }) => ({
  path,
  title,
  image: Service2,
  imageAlt: title,
}));

export const excursionItems = PAGES.concreteExcursions.map(({ path, title }) => ({
  path,
  title,
  image: Service1,
  imageAlt: title,
}));

export const assistItems = PAGES.concreteAssistances.map(({ path, title }) => ({
  path,
  title,
  image: Service1,
  imageAlt: title,
}));
