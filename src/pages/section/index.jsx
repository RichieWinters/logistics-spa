import mercedesLarge from "@/assets/images/mercedesLarge.jpg";
import { SectionItem } from "./components/sectionItem";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SECTION_TYPES } from "@/types/section";
import { assistItems, excursionItems, serviceItems } from "./constants";
import { useMemo } from "react";
import { useSEO } from "@/hooks/useSEO";
import { PAGE_SEO_CONFIG } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import ScrollToContactButton from "@/components/ScrollToContactButton";
import { HeaderButtons } from "@/layouts/components/header/components/HeaderButtons";

export default function Section({ type }) {
  // Apply SEO based on section type
  const seoKey =
    type === SECTION_TYPES.services.value
      ? "services"
      : type === SECTION_TYPES.excursions.value
      ? "excursions"
      : "roadsideAssistance";
  useSEO(PAGE_SEO_CONFIG[seoKey]);
  const items = useMemo(() => {
    switch (type) {
      case SECTION_TYPES.services.value:
        return serviceItems;
      case SECTION_TYPES.excursions.value:
        return excursionItems;
      case SECTION_TYPES.roadsideAssistance.value:
        return assistItems;
      default:
        return [];
    }
  }, [type]);

  return (
    <>
      {/* Dark Overlay */}
      <div
        className="inset-0 bg-black/30 min-h-[80vh] bg-cover bg-center bg-no-repeat flex items-center h-full"
        style={{ backgroundImage: `url(${mercedesLarge})` }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start justify-center text-start">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-2xl shadow-black/50">
              {SECTION_TYPES?.[type].label}
            </h1>
            <Breadcrumbs className="text-xl" />
          </div>
          <HeaderButtons />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <SectionItem key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
