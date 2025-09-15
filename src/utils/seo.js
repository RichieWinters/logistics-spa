// SEO утилиты для динамических мета тегов и структурных данных
// можно легко настроить информацию о компании здесь

export const COMPANY_INFO = {
  name: "Logistics SPA",
  description: "Услуги трансфера, экскурсий и помощи на дороге в Минске и Беларуси",
  phone: "+375 XX XXX-XX-XX",
  email: "info@logistics-spa.by",
  address: "г. Минск, Беларусь",
  website: "https://logistics-spa.by",
  logo: "/logo.png",
  socialMedia: {
    facebook: "",
    instagram: "",
    telegram: "",
  },
};

export const SEO_KEYWORDS = {
  base: "трансфер минск, такси минск, логистика беларусь, транспортные услуги",
  airport: "трансфер аэропорт минск, такси аэропорт, доставка аэропорт минска",
  excursions: "экскурсии беларусь, туры по беларуси, экскурсии минск, гид беларусь",
  assistance: "помощь на дороге, эвакуатор минск, техпомощь минск, буксировка",
  transfer: "персональный трансфер, аренда авто с водителем, трезвый водитель",
};

// обновить заголовок и мета теги
export const updatePageSEO = ({
  title,
  description,
  keywords = SEO_KEYWORDS.base,
  ogImage = COMPANY_INFO.logo,
  canonical = null,
}) => {
  // обновить заголовок
  document.title = `${title} | ${COMPANY_INFO.name}`;

  // обновить или создать мета теги
  updateMetaTag("description", description);
  updateMetaTag("keywords", keywords);

  // Open Graph теги для социальных сетей
  updateMetaTag("og:title", title, "property");
  updateMetaTag("og:description", description, "property");
  updateMetaTag("og:image", COMPANY_INFO.website + ogImage, "property");
  updateMetaTag("og:url", window.location.href, "property");
  updateMetaTag("og:type", "website", "property");
  updateMetaTag("og:site_name", COMPANY_INFO.name, "property");
  updateMetaTag("og:locale", "ru_RU", "property");

  // Twitter Card теги
  updateMetaTag("twitter:card", "summary_large_image", "name");
  updateMetaTag("twitter:title", title, "name");
  updateMetaTag("twitter:description", description, "name");
  updateMetaTag("twitter:image", COMPANY_INFO.website + ogImage, "name");

  // Canonical URL
  if (canonical) {
    updateCanonicalLink(canonical);
  }
};

// Helper функция для обновления мета тегов
const updateMetaTag = (name, content, attribute = "name") => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);

  if (element) {
    element.setAttribute("content", content);
  } else {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    element.setAttribute("content", content);
    document.getElementsByTagName("head")[0].appendChild(element);
  }
};

// Helper функция для обновления канонического ссылки
const updateCanonicalLink = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (canonical) {
    canonical.setAttribute("href", url);
  } else {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", url);
    document.getElementsByTagName("head")[0].appendChild(canonical);
  }
};

// Добавить JSON-LD структурные данные для местного бизнеса
export const addBusinessStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": COMPANY_INFO.website,
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    url: COMPANY_INFO.website,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Минск",
      addressCountry: "BY",
      streetAddress: COMPANY_INFO.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "53.9045", // Minsk coordinates - можно настроить
      longitude: "27.5615",
    },
    openingHours: "Mo-Su 00:00-23:59", // 24/7 сервис
    priceRange: "$$",
    serviceArea: {
      "@type": "State",
      name: "Беларусь",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Транспортные услуги",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Трансфер в аэропорт",
            description: "Комфортная доставка в аэропорт Минска",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Экскурсионные услуги",
            description: "Экскурсии по Беларуси",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Помощь на дороге",
            description: "Техническая помощь и эвакуация автомобилей",
          },
        },
      ],
    },
  };

  // удалить существующие структурные данные
  const existing = document.querySelector('script[type="application/ld+json"]');
  if (existing) {
    existing.remove();
  }

  // добавить новые структурные данные
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(structuredData);
  document.getElementsByTagName("head")[0].appendChild(script);
};

// Страничные SEO конфигурации
export const PAGE_SEO_CONFIG = {
  home: {
    title: "Трансфер, экскурсии и помощь на дороге в Минске",
    description:
      "Профессиональные транспортные услуги в Минске: трансфер в аэропорт, экскурсии по Беларуси, помощь на дороге 24/7. Опытные водители, комфортные автомобили.",
    keywords: `${SEO_KEYWORDS.base}, ${SEO_KEYWORDS.airport}, ${SEO_KEYWORDS.excursions}`,
  },

  services: {
    title: "Транспортные услуги в Минске",
    description:
      "Полный спектр транспортных услуг: трансфер, аренда авто с водителем, персональные поездки. Надежно, комфортно, доступно.",
    keywords: SEO_KEYWORDS.transfer,
  },

  airportTransfer: {
    title: "Трансфер в аэропорт Минска - заказать такси",
    description:
      "Надежный трансфер в аэропорт Минска от 35 BYN. Встреча с табличкой, отслеживание рейсов, фиксированная стоимость. Заказать онлайн.",
    keywords: SEO_KEYWORDS.airport,
  },

  personalTransfer: {
    title: "Персональный трансфер в Минске - комфортные поездки",
    description:
      "Персональный трансфер по Минску и Беларуси. Опытные водители, премиум автомобили, индивидуальный подход к каждому клиенту.",
    keywords: SEO_KEYWORDS.transfer,
  },

  eventTransport: {
    title: "Транспорт на мероприятие в Минске - групповые поездки",
    description:
      "Организация транспорта для мероприятий: свадьбы, корпоративы, конференции. Автомобили любой вместимости, пунктуальность гарантирована.",
    keywords: `${SEO_KEYWORDS.transfer}, транспорт на свадьбу, корпоративный транспорт`,
  },

  soberDriver: {
    title: "Трезвый водитель в Минске - услуга водителя",
    description:
      "Услуга трезвого водителя в Минске 24/7. Довезем домой на вашем автомобиле безопасно и комфортно. Опытные водители.",
    keywords: `трезвый водитель минск, услуга водителя, ${SEO_KEYWORDS.transfer}`,
  },

  carWithDriver: {
    title: "Аренда авто с водителем в Минске - почасовая аренда",
    description:
      "Аренда автомобиля с водителем в Минске: почасовая аренда, деловые поездки, туристические маршруты. Гибкие тарифы.",
    keywords: `аренда авто с водителем минск, ${SEO_KEYWORDS.transfer}`,
  },

  excursions: {
    title: "Экскурсии по Беларуси - туры с гидом",
    description:
      "Увлекательные экскурсии по Беларуси: замки, музеи, исторические места. Опытные гиды, комфортные автомобили, индивидуальные маршруты.",
    keywords: SEO_KEYWORDS.excursions,
  },

  belarusCastlesTour: {
    title: "Экскурсия по замкам Беларуси - тур на целый день",
    description:
      "Экскурсия по знаменитым замкам Беларуси: Мир, Несвиж, Лида. Опытный гид, трансфер, увлекательные истории. Групповые и индивидуальные туры.",
    keywords: `экскурсия замки беларуси, мирский замок, несвижский замок, ${SEO_KEYWORDS.excursions}`,
  },

  khatynCityTour: {
    title: "Экскурсия в Хатынь - мемориальный комплекс",
    description:
      "Памятная экскурсия в мемориальный комплекс Хатынь. Профессиональный гид расскажет историю подвига белорусского народа.",
    keywords: `экскурсия хатынь, мемориал хатынь, ${SEO_KEYWORDS.excursions}`,
  },

  belazTour: {
    title: "Экскурсия на БелАЗ - завод самосвалов",
    description:
      "Уникальная экскурсия на завод БелАЗ в Жодино. Посещение производства, музей, фотосессия с гигантскими самосвалами.",
    keywords: `экскурсия белаз, завод белаз жодино, ${SEO_KEYWORDS.excursions}`,
  },

  dudutkaMuseumTour: {
    title: "Экскурсия в музей Дудутки - белорусские традиции",
    description:
      "Этнографическая экскурсия в музей народных ремесел Дудутки. Белорусские традиции, мастер-классы, дегустация национальных блюд.",
    keywords: `музей дудутки, этнографический музей, ${SEO_KEYWORDS.excursions}`,
  },

  roadsideAssistance: {
    title: "Помощь на дороге в Минске - техпомощь 24/7",
    description:
      "Круглосуточная помощь на дороге в Минске: эвакуация, прикуривание, замена колеса, подвоз топлива. Быстрое реагирование, справедливые цены.",
    keywords: SEO_KEYWORDS.assistance,
  },

  emergencyTowing: {
    title: "Эвакуация автомобилей в Минске - буксировка 24/7",
    description:
      "Круглосуточная эвакуация автомобилей в Минске. Профессиональное оборудование, бережная погрузка, доступные цены. Вызов эвакуатора 24/7.",
    keywords: `эвакуатор минск, буксировка авто, ${SEO_KEYWORDS.assistance}`,
  },

  tireChange: {
    title: "Замена колеса на дороге в Минске - шиномонтаж",
    description:
      "Экстренная замена колеса на дороге в Минске. Быстро, качественно, в любую погоду. Вызов мастера на место поломки 24/7.",
    keywords: `замена колеса минск, шиномонтаж на дороге, ${SEO_KEYWORDS.assistance}`,
  },

  fuelDelivery: {
    title: "Подвоз топлива в Минске - доставка бензина на дорогу",
    description:
      "Доставка топлива к месту поломки в Минске и области. Качественный бензин, дизель. Быстрая доставка в любое время суток.",
    keywords: `подвоз топлива минск, доставка бензина, ${SEO_KEYWORDS.assistance}`,
  },

  lockoutAssistance: {
    title: "Прикурить автомобиль в Минске - помощь при разрядке АКБ",
    description:
      "Экстренная помощь при разрядке аккумулятора в Минске. Прикуривание авто, диагностика АКБ, замена аккумулятора на месте.",
    keywords: `прикурить авто минск, разрядился аккумулятор, ${SEO_KEYWORDS.assistance}`,
  },
};
