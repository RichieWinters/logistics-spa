import { useEffect } from "react";
import { updatePageSEO, addBusinessStructuredData, COMPANY_INFO } from "../utils/seo";

// Custom hook для управления SEO
export const useSEO = (seoConfig) => {
  useEffect(() => {
    if (seoConfig) {
      // обновить мета теги страницы
      updatePageSEO({
        title: seoConfig.title,
        description: seoConfig.description,
        keywords: seoConfig.keywords,
        canonical: COMPANY_INFO.website + window.location.pathname,
      });

      // добавить бизнес структурные данные (только один раз)
      addBusinessStructuredData();
    }

    // Cleanup function
    return () => {
      // Reset to default title when component unmounts
      document.title = COMPANY_INFO.name;
    };
  }, [seoConfig]);
};

export default useSEO;
