import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ExcursionsCarousel({ excursions = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState();
  const [isHovered, setIsHovered] = useState(false);

  // Автоматическая прокрутка каждые 5 секунд (останавливается при наведении)
  useEffect(() => {
    if (!api || isHovered || !excursions?.length) return;

    const interval = setInterval(() => {
      const current = api.selectedScrollSnap();
      const next = (current + 1) % excursions.length;
      api.scrollTo(next);
    }, 5000);

    return () => clearInterval(interval);
  }, [api, isHovered, excursions?.length]);

  // Отслеживание текущего слайда
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Если нет экскурсий, не рендерим компонент
  if (!excursions || excursions.length === 0) {
    return null;
  }

  return (
    <div>
      {/* Shadcn Carousel */}
      <Carousel
        className="max-w-[90%] sm:max-w-[80%] md:max-w-[83%] mx-auto"
        setApi={setApi}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {excursions?.map((excursion, i) => (
            <CarouselItem key={i} className="pl-4 basis-full md:basis-full lg:basis-1/2 xl:basis-1/3">
              <div
                className="w-full mx-auto bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:brightness-70 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Real Image - Fixed height */}
                <div className="w-[100%] md:h-[60vh] h-[45vh] flex-shrink-0 overflow-hidden text-center">
                  <img
                    src={excursion}
                    alt={`Excursion ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
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
          {excursions?.map((_, index) => (
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
  );
}
