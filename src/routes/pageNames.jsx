export const PAGES = {
  main: { path: "/", title: "Главная" },
  services: {
    main: {
      path: "/services",
      title: "Услуги",
    },

    airportTransfer: {
      path: "/offers/airport-transfer",
      title: "Трансфер до и от аэропорта",
    },
    personalTransfer: {
      path: "/offers/personal-transfer",
      title: "Персональный трансфер",
    },
    // eventTransport: {
    //   path: "/offers/event-transport",
    //   title: "Транспорт на мероприятие",
    // },
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
      title: "Экскурсии",
    },
    mirNesvizh: {
      path: "/excursions/mir-nesvizh",
      title: "Мир - Несвиж",
      subtitle: (
        <>
          <div>370 BYN</div>
        </>
      ),
      highlight: true,
    },
    mirNesvizhSula: {
      path: "/excursions/mir-nesvizh-sula",
      title: "Мир - Несвиж - Сула",
      subtitle: (
        <>
          <div>435 BYN</div>
        </>
      ),
    },
    sula: {
      path: "/excursions/sula",
      title: "Сула",
      subtitle: (
        <>
          <div>300 BYN</div>
        </>
      ),
      highlight: true,
    },
    brestFortressAndBelovezhskayaPushcha: {
      path: "/excursions/brest-fortress-and-belovezhskaya-pushcha",
      title: "Брест - Брестская крепость + Беловежская пуща",
      subtitle: (
        <>
          <div>600 BYN без гида</div>
          <div>750 BYN + гид</div>
        </>
      ),
    },
    grodnoLidskiyCastle: {
      path: "/excursions/grodno-lidskiy-castle",
      title: "Гродно + Лидский замок",
      subtitle: (
        <>
          <div>530 BYN без гида</div>
          <div>650 BYN + гид</div>
        </>
      ),
      highlight: true,
    },
    vitebskExcursion: {
      path: "/excursions/vitebsk",
      title: "Витебск | экскурсия по достопримечательностям города",
      subtitle: (
        <>
          <div>600 BYN</div>
        </>
      ),
    },
    khatynCityTour: {
      path: "/excursions/khatyn-city-tour",
      title: "Хатынь",
      subtitle: (
        <>
          <div>170 BYN</div>
        </>
      ),
    },
    dudutkaMuseumTour: {
      path: "/excursions/dudutka-museum-tour",
      title: "Дудутки",
      subtitle: (
        <>
          <div>150 BYN</div>
        </>
      ),
    },
    belAZTour: {
      path: "/excursions/belaz-tour",
      title: "БелАЗ",
      subtitle: (
        <>
          <div>180 BYN</div>
        </>
      ),
      highlight: true,
    },

    minskExcursion: {
      path: "/excursions/minsk",
      title: "Обзорная по Минску + гид",
      subtitle: (
        <>
          <div>300 BYN</div>
        </>
      ),
      highlight: true,
    },
    baranovichiZoo: {
      path: "/excursions/baranovichi-zoo",
      title: "Барановичи зоопарк + знаменитые лодочки",
      subtitle: (
        <>
          <div>350 BYN</div>
        </>
      ),
    },
    gomel: {
      path: "/excursions/gomel",
      title: "Гомель. Палац Румянцевых и Паскевичей",
      subtitle: (
        <>
          <div>690 BYN</div>
        </>
      ),
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
    // tireChange: {
    //   path: "/roadside-assistance/tire-change",
    //   title: "Замена колеса",
    // },
    fuelDelivery: {
      path: "/roadside-assistance/fuel-delivery",
      title: "Подвоз топлива",
    },
    // emergencyTowing: {
    //   path: "/roadside-assistance/emergency-towing",
    //   title: "Буксировка",
    // },
    wheelSwapping: {
      path: "/roadside-assistance/wheel-swapping",
      title: "Подкачка колеса",
    },
  },
  privacy: {
    path: "/privacy-policy",
    title: "Политика обработки персональных данных",
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
