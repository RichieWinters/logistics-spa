// Import car icons
import sedanIcon from "@/assets/icons/sedan.png";
import universalIcon from "@/assets/icons/universal.png";
import minivanIcon from "@/assets/icons/minivan.png";
import businessIcon from "@/assets/icons/busines.png";
import busIcon from "@/assets/icons/bus.png";

// Car types configuration
export const carTypes = [
  {
    id: "sedan",
    name: "Седан",
    icon: sedanIcon,
    description: "2 средних чемодана, 3 человека + ручная кладь",
    people: 3,
    luggage: {
      big: 0,
      medium: 2,
      hand: 1,
    },
    pricePerKm: 1.15,
    active: true,
  },
  {
    id: "universal",
    name: "Универсал",
    icon: universalIcon,
    description: "2/3 больших чемодана, 2/3 маленьких чемодана + ручная кладь",
    people: 3,
    luggage: {
      big: 2,
      medium: 3,
      hand: 1,
    },
    pricePerKm: 1.40,
    active: true,
  },
  {
    id: "minivan",
    name: "Минивэн",
    icon: minivanIcon,
    description: "5 человек + 2 больших чемодана + ручная кладь",
    people: 5,
    luggage: {
      big: 3,
      medium: 0,
      hand: 1,
    },
    pricePerKm: 1.8,
    active: true,
  },
  {
    id: "business",
    name: "Бизнес",
    icon: businessIcon,
    description: "Премиум класс (скоро доступно)",
    people: 4,
    luggage: {
      big: 1,
      medium: 2,
      hand: 1,
    },
    pricePerKm: 2.5,
    active: false,
  },
  {
    id: "bus",
    name: "Бус",
    icon: busIcon,
    description: "Групповые поездки (скоро доступно)",
    people: 8,
    luggage: {
      big: 8,
      medium: 0,
      hand: 2,
    },
    pricePerKm: 3.0,
    active: false,
  },
];
