export const PAGES = {
  main: { path: "/", title: "Главная" },
  services: {
    main: {
      path: "/services",
      title: "Услуги",
    },

    airportTransfer: {
      path: "/offers/airport-transfer",
      title: "Трансфер аэропорт",
    },
    personalTransfer: {
      path: "/offers/personal-transfer",
      title: "Персональный трансфер",
    },
    eventTransport: {
      path: "/offers/event-transport",
      title: "Транспорт на мероприятие",
    },
    soberDriver: {
      path: "/offers/sober-driver",
      title: "Трезвый водитель",
    },
    carWithDriver: {
      path: "/offers/car-with-driver",
      title: "Аренда авто с водителем",
    },
  },
  excursions: {
    main: {
      path: "/excursions",
      title: "Экскурсия",
    },

    belarusCastlesTour: {
      path: "/excursions/belarus-castles-tour",
      title: "Экскурсия по замкам Беларуси",
    },
    khatynCityTour: {
      path: "/excursions/khatyn-city-tour",
      title: "Экскурсия в Хатынь",
    },
    belAZTour: {
      path: "/excursions/belaz-tour",
      title: "Экскурсия в БелАЗ",
    },
    dudutkaMuseumTour: {
      path: "/excursions/dudutka-museum-tour",
      title: "Экскурсия в музей Дудутки",
    },
  },
  roadsideAssistance: {
    main: {
      path: "/roadside-assistance",
      title: "Помощь на дороге",
    },

    lockoutAssistance: {
      path: "/roadside-assistance/lockout-assistance",
      title: "Прикурить авто",
    },
    tireChange: {
      path: "/roadside-assistance/tire-change",
      title: "Замена колеса",
    },
    fuelDelivery: {
      path: "/roadside-assistance/fuel-delivery",
      title: "Подвоз топлива",
    },
    emergencyTowing: {
      path: "/roadside-assistance/emergency-towing",
      title: "Буксировка",
    },
  },
};

Object.defineProperty(PAGES, "concreteServices", {
  get() {
    return Object.entries(this.services)
      .filter(([key]) => key !== "main")
      .map(([, value]) => value);
  },
  enumerable: false,
});

Object.defineProperty(PAGES, "concreteExcursions", {
  get() {
    return Object.entries(this.excursions)
      .filter(([key]) => key !== "main")
      .map(([, value]) => value);
  },
  enumerable: false,
});

Object.defineProperty(PAGES, "concreteAssistances", {
  get() {
    return Object.entries(this.roadsideAssistance)
      .filter(([key]) => key !== "main")
      .map(([, value]) => value);
  },
  enumerable: false,
});
