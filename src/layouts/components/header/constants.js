export const navigationItems = [
  {
    title: "Услуги",
    path: "/services",
    dropdown: "services",
    items: [
      { title: "Авто на мероприятие", path: "/services/events" },
      { title: "Трансфер аэропорт", path: "/services/airport" },
      { title: "Индивидуальный трансфер", path: "/services/individual" },
      { title: "Аренда авто с водителем", path: "/services/rental" },
      { title: "Трезвый водитель", path: "/services/sober-driver" },
    ],
  },
  {
    title: "Экскурсии",
    path: "/excursions",
    dropdown: "excursions",
    items: [
      { title: "Экскурсия по замкам Беларуси", path: "/excursions/castles" },
      { title: "Экскурсия в Хатынь", path: "/excursions/khatyn" },
      { title: "Экскурсия в БелАЗ", path: "/excursions/belaz" },
      { title: "Экскурсия в музей Дудутки", path: "/excursions/dudutki" },
    ],
  },
  {
    title: "Помощь на дороге",
    path: "/roadside",
    dropdown: "roadside",
    items: [
      { title: "Прикурить авто", path: "/roadside/jump-start" },
      { title: "Подкачка колес", path: "/roadside/tire-inflation" },
      { title: "Подвоз топлива", path: "/roadside/fuel-delivery" },
      { title: "Буксировка", path: "/roadside/towing" },
    ],
  },
];
