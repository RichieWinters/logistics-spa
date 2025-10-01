import { PAGES } from "@/routes/pageNames";
import Service2 from "@/assets/images/Service2.jpg";
import Service1 from "@/assets/images/Service1.jpg";
import Service1Large from "@/assets/images/Service1Large.jpg";
import mercedes from "@/assets/images/mercedes.jpg";
import roadside1 from "@/../public/roadside-assistance/lockout-assistance/image.jpg";
import roadside2 from "@/../public/roadside-assistance/lockout-assistance/2.jpg";
import MirNesvizh from "/mir-nesvizh/2.jpg";
import MirNesvizhSula from "/mir-nesvizh/3.jpeg";
import Sula from "/sula/3.jpg";
import Brest from "/brest-fortress-and-belovezhskaya-pushcha/8.jpg";
import Grodno from "/grodno/1.jpg";
import Vitebsk from "/vitebsk/7.jpg";
import Khatyn from "/khatyn/1.webp";
import Dudutki from "/dudutki/8.webp";
import Minsk from "/minsk/8.jpg";
import BaranovichiZoo from "/baranovichi-zoo/2.webp";
import RumyantsevsAndPaskeviches from "/rumyantsevs-and-paskeviches/8.jpg";
import Belaz from "/belaz/8.jpeg";
import roadside3 from "@/../public/roadside-assistance/lockout-assistance/3.jpg";

// Массив изображений для разнообразия
const serviceImages = [Service1Large, mercedes, Service1, Service2];
const excursionImages = [
  MirNesvizh,
  MirNesvizhSula,
  Sula,
  Brest,
  Grodno,
  Vitebsk,
  Khatyn,
  Dudutki,
  Belaz,
  Minsk,
  BaranovichiZoo,
  RumyantsevsAndPaskeviches,
];
const assistImages = [roadside1, roadside2, roadside3];

export const serviceItems = PAGES.concreteServices.map(({ path, title }, index) => ({
  path,
  title,
  image: serviceImages[index],
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
