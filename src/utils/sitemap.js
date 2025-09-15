// Sitemap generator для SEO
// Это создает XML sitemap, который поисковые системы могут использовать для обнаружения страниц

import { PAGES } from "../routes/pageNames";
import { COMPANY_INFO } from "./seo";

// Генерировать XML sitemap
export const generateSitemap = () => {
  const baseUrl = COMPANY_INFO.website;
  const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

  // Собирать все страницы с их приоритетами и частотой изменений
  const pages = [
    { url: "/", priority: "1.0", changefreq: "weekly" }, // Главная страница - высший приоритет

    // Главные разделы
    { url: PAGES.services.main.path, priority: "0.9", changefreq: "monthly" },
    { url: PAGES.excursions.main.path, priority: "0.9", changefreq: "monthly" },
    { url: PAGES.roadsideAssistance.main.path, priority: "0.9", changefreq: "monthly" },

    // Страницы услуг
    { url: PAGES.services.airportTransfer.path, priority: "0.8", changefreq: "monthly" },
    { url: PAGES.services.personalTransfer.path, priority: "0.8", changefreq: "monthly" },
    { url: PAGES.services.eventTransport.path, priority: "0.8", changefreq: "monthly" },
    { url: PAGES.services.soberDriver.path, priority: "0.8", changefreq: "monthly" },
    { url: PAGES.services.carWithDriver.path, priority: "0.8", changefreq: "monthly" },

    // Страницы экскурсий
    { url: PAGES.excursions.belarusCastlesTour.path, priority: "0.7", changefreq: "monthly" },
    { url: PAGES.excursions.khatynCityTour.path, priority: "0.7", changefreq: "monthly" },
    { url: PAGES.excursions.belAZTour.path, priority: "0.7", changefreq: "monthly" },
    { url: PAGES.excursions.dudutkaMuseumTour.path, priority: "0.7", changefreq: "monthly" },

    // Страницы помощи на дороге
    { url: PAGES.roadsideAssistance.emergencyTowing.path, priority: "0.7", changefreq: "monthly" },
    { url: PAGES.roadsideAssistance.tireChange.path, priority: "0.7", changefreq: "monthly" },
    { url: PAGES.roadsideAssistance.fuelDelivery.path, priority: "0.7", changefreq: "monthly" },
    { url: PAGES.roadsideAssistance.lockoutAssistance.path, priority: "0.7", changefreq: "monthly" },
  ];

  // Генерировать XML
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const urlsetClose = "</urlset>";

  const urlEntries = pages
    .map(
      (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
    )
    .join("\n");

  return xmlHeader + urlsetOpen + urlEntries + "\n" + urlsetClose;
};

// Функция для загрузки sitemap (для клиента)
export const downloadSitemap = () => {
  const sitemapContent = generateSitemap();
  const blob = new Blob([sitemapContent], { type: "application/xml" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "sitemap.xml";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Console log sitemap (для разработки)
export const logSitemap = () => {
  console.log("Generated sitemap.xml content:");
  console.log(generateSitemap());
  console.log("\nTo save this sitemap:");
  console.log("1. Copy the content above");
  console.log("2. Save as sitemap.xml in your public folder");
  console.log("3. Submit to Google Search Console: https://search.google.com/search-console");
};
