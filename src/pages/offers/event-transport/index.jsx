import { Breadcrumbs } from "@/components/breadcrumbs";
import { Calendar, Users, Music, Gift, CheckCircle, Star, Heart } from "lucide-react";
import ScrollToContactButton from "@/components/ScrollToContactButton";
import mercedesLarge from "@/assets/images/mercedesLarge.jpg";
import { HeaderButtons } from "@/layouts/components/header/components/HeaderButtons";

export const EventTransportPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${mercedesLarge})` }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                  Автомобили для мероприятий
                </h1>
                <p className="text-xl text-white/90 leading-relaxed drop-shadow-lg">
                  Сделайте ваше торжество незабываемым с премиум-транспортом
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Транспорт для особых событий</h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Каждое важное событие в жизни заслуживает особого подхода. Мы предоставляем премиум-автомобили для
                свадеб, юбилеев, корпоративных мероприятий и других торжественных случаев.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Типы мероприятий:</h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Свадьбы</span>
                    <p className="text-gray-600 text-sm">Украшение автомобиля, сопровождение кортежа</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Gift className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Дни рождения и юбилеи</span>
                    <p className="text-gray-600 text-sm">Праздничная подача, особый сервис</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Корпоративные события</span>
                    <p className="text-gray-600 text-sm">Деловые встречи, конференции, презентации</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Music className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Выпускные вечера</span>
                    <p className="text-gray-600 text-sm">Стильная доставка на торжество</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">VIP-события</span>
                    <p className="text-gray-600 text-sm">Премиум-сервис для особых случаев</p>
                  </div>
                </li>
              </ul>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">🎉 Включено в стоимость</h4>
                <p className="text-gray-600">
                  Декоративное украшение автомобиля, красная дорожка, шампанское и персональный сервис водителя.
                </p>
              </div>
            </div>

            {/* Right Column - Image and Features */}
            <div>
              <img
                src={mercedesLarge}
                alt="Премиум автомобиль для мероприятий"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Что входит в сервис:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-600">Украшение автомобиля</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-600">Профессиональный водитель в костюме</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-600">Красная дорожка</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-600">Шампанское и бокалы</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-600">Фотосессия с автомобилем</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-600">Сопровождение по маршруту</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <Heart className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Свадьбы</h4>
                  <p className="text-sm text-gray-600">Особый день</p>
                </div>

                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Корпоратив</h4>
                  <p className="text-sm text-gray-600">Деловые встречи</p>
                </div>
              </div>
            </div>
          </div>

          {/* Packages Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Праздничные пакеты</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">Базовый</h4>
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  <li>• Украшение автомобиля</li>
                  <li>• Водитель в костюме</li>
                  <li>• 2 часа обслуживания</li>
                </ul>
                <p className="text-green-600 font-bold text-xl">от 120 BYN</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-green-400">
                <div className="text-center mb-2">
                  <span className="bg-green-400 text-white px-2 py-1 rounded text-xs">ПОПУЛЯРНЫЙ</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Премиум</h4>
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  <li>• Все из базового</li>
                  <li>• Красная дорожка</li>
                  <li>• Шампанское</li>
                  <li>• 4 часа обслуживания</li>
                </ul>
                <p className="text-green-600 font-bold text-xl">от 200 BYN</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">VIP</h4>
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  <li>• Все из премиум</li>
                  <li>• Живые цветы</li>
                  <li>• Фотограф (1 час)</li>
                  <li>• Весь день</li>
                </ul>
                <p className="text-green-600 font-bold text-xl">от 350 BYN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
