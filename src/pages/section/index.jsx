import mercedesLarge from "@/assets/images/mercedesLarge.jpg";
import { SectionItem } from "./components/sectionItem";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SECTION_TYPES } from "@/types/section";
import { assistItems, excursionItems, serviceItems } from "./constants";
import { useMemo } from "react";

export default function Section({ type }) {
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
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="bg-background-light w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3vw] mx-auto">
          {items.map((item) => (
            <SectionItem {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
