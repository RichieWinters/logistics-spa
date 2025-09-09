import { PAGES } from "@/routes/pageNames";
import Service2 from "@/assets/images/Service2.jpg";
import Service1 from "@/assets/images/Service1.jpg";
import Service1Large from "@/assets/images/Service1Large.jpg";
import mercedes from "@/assets/images/mercedes.jpg";
import mercedesLarge from "@/assets/images/mercedesLarge.jpg";

// Массив изображений для разнообразия
const serviceImages = [Service2, Service1Large, mercedes, mercedesLarge, Service1];
const excursionImages = [Service1, Service1Large, mercedesLarge, Service2];
const assistImages = [mercedes, Service2, mercedesLarge, Service1];

export const serviceItems = PAGES.concreteServices.map(({ path, title }, index) => ({
  path,
  title,
  image: serviceImages[index % serviceImages.length],
  imageAlt: title,
}));

export const excursionItems = PAGES.concreteExcursions.map(({ path, title }, index) => ({
  path,
  title,
  image: excursionImages[index % excursionImages.length],
  imageAlt: title,
}));

export const assistItems = PAGES.concreteAssistances.map(({ path, title }, index) => ({
  path,
  title,
  image: assistImages[index % assistImages.length],
  imageAlt: title,
}));
