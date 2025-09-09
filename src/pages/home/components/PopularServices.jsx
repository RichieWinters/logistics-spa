import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { useState, useEffect } from 'react'
import Service1 from '@/assets/images/Service1.jpg'

export default function PopularServices() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [api, setApi] = useState()
  
  const services = [
    {
      id: 1,
      title: "Трансфер до аэропорта",
      description: "Быстрая и комфортная доставка в аэропорт с точным соблюдением времени вылета",
      image: Service1
    },
    {
      id: 2,
      title: "Индивидуальный трансфер",
      description: "Персональный маршрут с учетом ваших пожеланий и гибким графиком",
      image: Service1
    },
    {
      id: 3,
      title: "Авто на мероприятие",
      description: "Стильная доставка на важные события с профессиональным водителем",
      image: Service1
    },
    {
      id: 4,
      title: "Трезвый водитель",
      description: "Безопасная поездка домой с опытным водителем в любое время",
      image: Service1
    },
    {
      id: 5,
      title: "Аренда авто с водителем",
      description: "Полноценный транспорт с профессиональным водителем на любой срок",
      image: Service1
    }
  ]

  // Track slide changes
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap())
    }

    api.on('select', onSelect)
    onSelect() // Set initial slide

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-yellow-400 text-sm font-medium mb-4">Нас выбирают</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Популярные услуги
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Shadcn Carousel */}
          <Carousel 
            className="w-full sm:max-w-2xl md:max-w-6xl mx-auto"
            setApi={setApi}
          >
            <CarouselContent className="-ml-4">
              {services.map((service) => (
                <CarouselItem key={service.id} className="pl-4 basis-full  md:basis-full lg:basis-1/2 xl:basis-1/3">
                  <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-sm mx-auto h-[380px] bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex-shrink-0">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed flex-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Buttons - Hidden on small screens, visible from sm: */}
            <CarouselPrevious className="hidden sm:flex absolute left-2 sm:-left-0 md:left-8 lg:-left-4 xl:-left-16 2xl:-left-32 top-1/2 transform -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12" />
            <CarouselNext className="hidden sm:flex absolute right-2 sm:-right-0 md:right-8 lg:-right-4 xl:-right-16 2xl:-right-32 top-1/2 transform -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12" />
          </Carousel>
          
          {/* Dots Indicator - Only visible on small screens */}
          <div className="flex justify-center mt-6 sm:hidden">
            <div className="flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    api?.scrollTo(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? 'bg-yellow-400' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
