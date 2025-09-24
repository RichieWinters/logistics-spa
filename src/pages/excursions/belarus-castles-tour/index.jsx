import { Breadcrumbs } from "@/components/breadcrumbs";
import { MapPin, Clock, Users, Camera, CheckCircle, Star, Castle, History } from "lucide-react";
import ScrollToContactButton from "@/components/ScrollToContactButton";
import Service1Large from "@/assets/images/Service1Large.jpg";
import { HeaderButtons } from "@/layouts/components/header/components/HeaderButtons";

export const BelarusCastlesTourPage = () => {
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
                  Экскурсия по замкам Беларуси
                </h1>
                <p className="text-xl text-white/90 leading-relaxed drop-shadow-lg">
                  Путешествие сквозь века: от средневековых крепостей до дворцовых комплексов
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Величественные замки Беларуси</h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Откройте для себя богатую историю Беларуси через её архитектурные жемчужины. Наша экскурсия проведёт вас
                по самым красивым и значимым замкам страны, каждый из которых хранит свои секреты и легенды.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Маршрут экскурсии:</h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Castle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Мирский замок</span>
                    <p className="text-gray-600 text-sm">Памятник Всемирного наследия ЮНЕСКО XVI века</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Castle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Несвижский дворец</span>
                    <p className="text-gray-600 text-sm">Резиденция рода Радзивиллов с великолепным парком</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <History className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Лидский замок</span>
                    <p className="text-gray-600 text-sm">Средневековая крепость XIV века князя Гедимина</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Кревский замок</span>
                    <p className="text-gray-600 text-sm">Руины замка, где была подписана Кревская уния</p>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Что включено в экскурсию:</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Комфортная поездка на современном автомобиле</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Профессиональный гид-экскурсовод</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Входные билеты во все замки</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Обед в историческом ресторане</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Фотосессия у замков</span>
                </li>
              </ul>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">🏰 Интересный факт</h4>
                <p className="text-gray-600">
                  Мирский замок - единственный в Беларуси памятник готической архитектуры, включённый в список
                  Всемирного наследия ЮНЕСКО.
                </p>
              </div>
            </div>

            {/* Right Column - Image and Features */}
            <div>
              <img
                src={Service1Large}
                alt="Экскурсия по замкам Беларуси"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Длительность</h4>
                  <p className="text-sm text-gray-600">10-12 часов</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Группа</h4>
                  <p className="text-sm text-gray-600">1-7 человек</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Маршрут</h4>
                  <p className="text-sm text-gray-600">4 замка</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Camera className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Фото</h4>
                  <p className="text-sm text-gray-600">Много красивых мест</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Стоимость экскурсии:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">1-2 человека:</span>
                    <span className="font-semibold">280 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">3-4 человека:</span>
                    <span className="font-semibold">320 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">5-7 человек:</span>
                    <span className="font-semibold">420 BYN</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    * В стоимость включены: транспорт, гид, входные билеты, обед
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
