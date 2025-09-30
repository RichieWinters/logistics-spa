import { PAGES } from "@/routes/pageNames";
import Service2 from "@/assets/images/Service2.jpg";
import Service1 from "@/assets/images/Service1.jpg";
import Service1Large from "@/assets/images/Service1Large.jpg";
import mercedes from "@/assets/images/mercedes.jpg";
import mercedesLarge from "@/assets/images/mercedesLarge.jpg";
import roadside1 from "@/../public/roadside-assistance/lockout-assistance/image.jpg";
import roadside2 from "@/../public/roadside-assistance/lockout-assistance/2.jpg";

// Массив изображений для разнообразия
const serviceImages = [Service2, Service1Large, mercedes, mercedesLarge, Service1];
const excursionImages = [Service1, Service1Large, mercedesLarge, Service2];
const assistImages = [roadside1, roadside2, mercedesLarge];

export const serviceItems = PAGES.concreteServices.map(({ path, title }, index) => ({
  path,
  title,
  image: serviceImages[index % serviceImages.length],
  imageAlt: title,
}));

export const excursionItems = PAGES.concreteExcursions.map(({ path, title, subtitle, highlight }, index) => {
  return {
    path,
    title,
    image: excursionImages[index % excursionImages.length],
    imageAlt: title,
    subtitle,
    highlight,
  };
});

export const assistItems = PAGES.concreteAssistances.map(({ path, title }, index) => ({
  path,
  title,
  image: assistImages[index % assistImages.length],
  imageAlt: title,
}));
