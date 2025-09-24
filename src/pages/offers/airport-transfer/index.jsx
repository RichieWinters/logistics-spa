import { Breadcrumbs } from "@/components/breadcrumbs";
import { Clock, Shield, Car, Users, CheckCircle, Star } from "lucide-react";
import ScrollToContactButton from "@/components/ScrollToContactButton";
import Service1Large from "@/assets/images/Service1Large.jpg";
import { useSEO } from "@/hooks/useSEO";
import { PAGE_SEO_CONFIG } from "@/utils/seo";
import { HeaderButtons } from "@/layouts/components/header/components/HeaderButtons";

export const AirportTransferPage = () => {
  // Apply SEO for airport transfer page
  useSEO(PAGE_SEO_CONFIG.airportTransfer);

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Service1Large})` }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                  Трансфер до и от аэропорта
                </h1>
                <p className="text-xl text-white/90 leading-relaxed drop-shadow-lg">
                  Комфортная доставка в аэропорт Минска с гарантией своевременного прибытия
                </p>
              </div>
              <HeaderButtons />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Надежный трансфер до и от аэропорта Минска</h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Забудьте о переживаниях по поводу опоздания на рейс. Наш сервис трансфера в аэропорт гарантирует
                своевременную доставку с учетом дорожной ситуации и времени регистрации на рейс. Сервис трансфера от
                аэропорта доставит вас после тяжелого перелета домой быстро и комфортно.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Преимущества нашего сервиса:</h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Отслеживание рейсов в режиме реального времени</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Встреча с табличкой в зале прилета</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Помощь с багажом</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Фиксированная стоимость без доплат</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Бесплатное ожидание до 1 часа</span>
                </li>
              </ul>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">💡 Рекомендация</h4>
                <p className="text-gray-600">
                  Бронируйте трансфер за 1-2 часа до вылета для гарантированного места и лучшей цены.
                </p>
              </div>
            </div>

            {/* Right Column - Image and Features */}
            <div>
              <img
                src={Service1Large}
                alt="Автомобиль для трансфера в аэропорт"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">24/7</h4>
                  <p className="text-sm text-gray-600">Работаем круглосуточно</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Безопасность</h4>
                  <p className="text-sm text-gray-600">Опытные водители</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Car className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Комфорт</h4>
                  <p className="text-sm text-gray-600">Комфортные автомобили</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">1-8 мест</h4>
                  <p className="text-sm text-gray-600">Любые группы</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Популярные направления</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">Центр Минска → Аэропорт</h4>
                <p className="text-gray-600 mb-2">Время в пути: ~45 минут</p>
                <p className="text-green-600 font-bold text-xl">от 70 BYN</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">Аэропорт → Центр Минска</h4>
                <p className="text-gray-600 mb-2">Время в пути: ~45 минут</p>
                <p className="text-green-600 font-bold text-xl">от 70 BYN</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">Аэропорт → Области</h4>
                <p className="text-gray-600 mb-2">По договоренности</p>
                <p className="text-green-600 font-bold text-xl">договор</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
