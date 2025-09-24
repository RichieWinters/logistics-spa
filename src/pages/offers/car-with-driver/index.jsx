import { Breadcrumbs } from "@/components/breadcrumbs";
import { Calendar, Clock, Briefcase, Users, CheckCircle, Car, Shield, Star } from "lucide-react";
import ScrollToContactButton from "@/components/ScrollToContactButton";
import Service2 from "@/assets/images/Service2.jpg";
import { HeaderButtons } from "@/layouts/components/header/components/HeaderButtons";

export const CarWithDriverPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Service2})` }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                  Аренда авто с водителем
                </h1>
                <p className="text-xl text-white/90 leading-relaxed drop-shadow-lg">
                  Личный водитель и комфортный автомобиль в вашем распоряжении
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Персональный водитель для ваших потребностей</h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Получите в распоряжение комфортный автомобиль с профессиональным водителем на несколько часов или на
                целый день. Идеальное решение для деловых поездок, туристических маршрутов или особых случаев.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Когда это нужно:</h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Briefcase className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Деловые встречи</span>
                    <p className="text-gray-600 text-sm">Несколько встреч в день, переговоры, презентации</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Гости города</span>
                    <p className="text-gray-600 text-sm">Экскурсии, шоппинг, посещение достопримечательностей</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Особые события</span>
                    <p className="text-gray-600 text-sm">Свадьбы, юбилеи, корпоративные мероприятия</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Индивидуальный сервис</span>
                    <p className="text-gray-600 text-sm">Персональное обслуживание для вашего удобства</p>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Преимущества аренды с водителем:</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Не нужно искать парковку</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Можно заниматься делами в дороге</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Знание города и маршрутов</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Помощь с багажом и покупками</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Гибкий график и маршрут</span>
                </li>
              </ul>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">💼 Для бизнеса</h4>
                <p className="text-gray-600">
                  Произведите впечатление на партнеров, сосредоточьтесь на переговорах, а не на дороге. Возможна
                  почасовая аренда или на весь день.
                </p>
              </div>
            </div>

            {/* Right Column - Image and Features */}
            <div>
              <img
                src={Service2}
                alt="Аренда автомобиля с водителем"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Почасовая</h4>
                  <p className="text-sm text-gray-600">От 1 часа</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">На день</h4>
                  <p className="text-sm text-gray-600">12 часов</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Car className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Комфортный авто</h4>
                  <p className="text-sm text-gray-600">Современный автопарк</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Страховка</h4>
                  <p className="text-sm text-gray-600">Полное покрытие</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Что включено в стоимость:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-600">Топливо</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-600">Страховка</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-600">Услуги водителя</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-600">Мойка автомобиля</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-600">Техническое обслуживание</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Тарифы на аренду с водителем</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-4">Почасовая аренда</h4>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">3 часа:</span>
                    <span className="font-semibold">90 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Каждый доп. час:</span>
                    <span className="font-semibold">25 BYN</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Минимум 3 часа</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-green-400">
                <div className="text-center mb-2">
                  <span className="bg-green-400 text-white px-2 py-1 rounded text-xs">ПОПУЛЯРНЫЙ</span>
                </div>
                <h4 className="font-semibold text-lg mb-4">Аренда на день</h4>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">8 часов:</span>
                    <span className="font-semibold">180 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">12 часов:</span>
                    <span className="font-semibold">240 BYN</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Лучшая цена</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-4">Межгородские поездки</h4>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">За км:</span>
                    <span className="font-semibold">2.5 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ожидание/час:</span>
                    <span className="font-semibold">20 BYN</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">+ проживание водителя</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">🚗 В стоимость включено: топливо, страховка, услуги водителя</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
