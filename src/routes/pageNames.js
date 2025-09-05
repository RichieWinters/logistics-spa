export const PAGES = {
  main: { path: "/", title: "Главная" },
  services: {
    main: {
      path: "/services",
      title: "Услуги",
    },

    airportTransfer: {
      path: "/services/airport-transfer",
      title: "Авто на мероприятие",
    },
    privateTransfer: {
      path: "/services/private-transfer",
      title: "Трансфер аэропорт",
    },
    carsForTheEvent: {
      path: "/services/cars-for-the-event",
      title: "Индивидуальный трансфер",
    },
    soberDriver: {
      path: "/services/sober-driver",
      title: "Аренда авто с водителем",
    },
    carWithDriver: {
      path: "/services/car-with-driver",
      title: "Трезвый водитель",
    },
  },
  excursions: {
    main: {
      path: "/excursions",
      title: "Экскурсии",
    },

    belarusCastlesTour: {
      path: "/excursion/belarus-castles-tour",
      title: "Экскурсия по замкам Беларуси",
    },
    khatynCityTour: {
      path: "/excursion/khatyn-city-tour",
      title: "Экскурсия в Хатынь",
    },
    belAZTour: {
      path: "/excursion/belAZ-tour",
      title: "Экскурсия в БелАЗ",
    },
    dudutkaMuseumTour: {
      path: "/excursion/dudutka-museum-tour",
      title: "Экскурсия в музей Дудутки",
    },
  },
  roadsideAssistance: {
    main: {
      path: "/roadside-assistance",
      title: "Помощь на дороге",
    },

    lightUpCar: {
      path: "/roadside-assistance/light-up-car",
      title: "Прикурить авто",
    },
    wheelPumping: {
      path: "/roadside-assistance/wheel-pumping",
      title: "Подкачка колес",
    },
    fuelDelivery: {
      path: "/roadside-assistance/fuel-delivery",
      title: "Подвоз топлива",
    },
    towing: {
      path: "/roadside-assistance/towing",
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
