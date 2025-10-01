import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { PAGES } from "@/routes/pageNames";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Service1Large from "@/assets/images/Service1Large.jpg";
import MirNesvizh from "/mir-nesvizh/2.jpg";
import Sula from "/sula/3.jpg";
import Grodno from "/grodno/1.jpg";
import Minsk from "/minsk/8.jpg";
import Belaz from "/belaz/8.jpeg";

export default function PopularServices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState();

  const services = [
    {
      id: 1,
      title: PAGES.services.airportTransfer.title,
      description: "Быстрая и комфортная доставка в аэропорт",
      image: Service1Large,
      path: PAGES.services.airportTransfer.path,
    },
    {
      id: 2,
      title: PAGES.excursions.mirNesvizh.title,
      description: "Посещение исторических дворцово-парковых ансамблей, прогулки по территории и фотоместа.",
      image: MirNesvizh,
      path: PAGES.excursions.mirNesvizh.path,
    },
    {
      id: 3,
      title: PAGES.excursions.sula.title,
      description: "Маршруты вдоль живописных берегов, природные тропы и комфортные остановки для отдыха.",
      image: Sula,
      path: PAGES.excursions.sula.path,
    },
    {
      id: 4,
      title: PAGES.excursions.grodnoLidskiyCastle.title,
      description: "Прогулка по историческому центру с посещением ключевых памятников и комфортным трансфером.",
      image: Grodno,
      path: PAGES.excursions.grodnoLidskiyCastle.path,
    },
    {
      id: 5,
      title: PAGES.excursions.minskExcursion.title,
      description: "Обзор главных достопримечательностей города с удобным маршрутом и остановками для фото.",
      image: Minsk,
      path: PAGES.excursions.minskExcursion.path,
    },
    {
      id: 6,
      title: PAGES.excursions.belAZTour.title,
      description: "Экскурсия на производство с демонстрацией техники и безопасными зонами просмотра.",
      image: Belaz,
      path: PAGES.excursions.belAZTour.path,
    },
  ];

  // Track slide changes
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect(); // Set initial slide

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-green-400 text-sm font-medium mb-4">Нас выбирают</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Популярные услуги</h2>
        </div>

        {/* Carousel Container */}
        <div>
          {/* Shadcn Carousel */}
          <Carousel className="sm:max-w-2xl md:max-w-[85%] mx-auto" setApi={setApi}>
            <CarouselContent className="-ml-4">
              {services.map((service) => (
                <CarouselItem key={service.id} className="pl-4 basis-full md:basis-full lg:basis-1/2 xl:basis-1/3">
                  <Link to={service.path}>
                    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-sm mx-auto h-[500px] bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col hover:brightness-70 cursor-pointer">
                      {/* Real Image - Fixed height */}
                      <div className="w-full h-48 flex-shrink-0 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content - Flexible height with consistent spacing */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex-shrink-0">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed flex-1">{service.description}</p>
                        <div className="absolute bottom-3 flex items-center text-green-400 group-hover:text-green-500 transition-colors duration-300">
                          <span className="text-sm font-medium">Подробнее</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons - Hidden on small screens, visible from sm: */}
            <CarouselPrevious className="hidden sm:flex h-10 w-10 sm:h-12 sm:w-12 -left-15 cursor-pointer" />
            <CarouselNext className="hidden sm:flex h-10 w-10 sm:h-12 sm:w-12 -right-15 cursor-pointer" />
          </Carousel>

          {/* Dots Indicator - Only visible on small screens */}
          <div className="flex justify-center mt-6 sm:hidden">
            <div className="flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    api?.scrollTo(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? "bg-green-400" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
