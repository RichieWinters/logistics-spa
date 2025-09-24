import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import Service1 from "@/assets/images/Service1.jpg";
import { PAGES } from "@/routes/pageNames";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PopularServices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState();

  const services = [
    {
      id: 1,
      title: PAGES.services.airportTransfer.title,
      description: "Быстрая и комфортная доставка в аэропорт",
      image: Service1,
      path: PAGES.services.airportTransfer.path,
    },
    {
      id: 2,
      title: PAGES.services.personalTransfer.title,
      description: "Персональный маршрут с учетом ваших пожеланий и гибким графиком",
      image: Service1,
      path: PAGES.services.personalTransfer.path,
    },
    {
      id: 3,
      title: PAGES.services.soberDriver.title,
      description: "Безопасная поездка домой с опытным водителем",
      image: Service1,
      path: PAGES.services.soberDriver.path,
    },
    {
      id: 4,
      title: PAGES.services.carWithDriver.title,
      description: "Полноценный транспорт с профессиональным водителем на любой срок",
      image: Service1,
      path: PAGES.services.carWithDriver.path,
    },
    {
      id: 5,
      title: PAGES.roadsideAssistance.lockoutAssistance.title,
      description: "Быстрая помощь при разряженном аккумуляторе - запустим ваш автомобиль с помощью проводов",
      image: Service1,
      path: PAGES.roadsideAssistance.lockoutAssistance.path,
    },
    {
      id: 6,
      title: PAGES.roadsideAssistance.fuelDelivery.title,
      description: "Подвезем топливо прямо к вашему автомобтлю в любое время",
      image: Service1,
      path: PAGES.roadsideAssistance.fuelDelivery.path,
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
