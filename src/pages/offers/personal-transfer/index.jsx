import { Breadcrumbs } from "@/components/breadcrumbs";
import { MapPin, Clock, User, Phone, CheckCircle, Navigation, Shield } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import mercedes from "@/assets/images/mercedes.jpg";

export const PersonalTransferPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${mercedes})` }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                  Персональный трансфер
                </h1>
                <p className="text-xl text-white/90 leading-relaxed drop-shadow-lg">
                  Индивидуальные поездки по городу и за его пределы с максимальным комфортом
                </p>
              </div>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Комфортные поездки по вашему маршруту</h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Нужно добраться из точки А в точку Б с комфортом? Наш сервис персонального трансфера обеспечит вам
                удобную поездку в любое время суток по любому маршруту в пределах Беларуси.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Популярные направления:</h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Городские поездки</span>
                    <p className="text-gray-600 text-sm">Деловые встречи, медицинские центры, торговые центры</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Navigation className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Межгородские маршруты</span>
                    <p className="text-gray-600 text-sm">Брест, Гродно, Витебск, Гомель, Могилев</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <User className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Сопровождение по делам</span>
                    <p className="text-gray-600 text-sm">Ожидание, помощь с покупками, личный водитель на день</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Экстренные вызовы</span>
                    <p className="text-gray-600 text-sm">Срочная доставка в больницу, аптеку, на вокзал</p>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Что включено:</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-600">Подача автомобиля к указанному адресу</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-600">Помощь с багажом и покупками</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-600">Ожидание до 15 минут бесплатно</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-600">Климат-контроль и Wi-Fi</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-600">Детские кресла по запросу</span>
                </li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">📱 Удобное бронирование</h4>
                <p className="text-gray-600">
                  Заказывайте поездку за 30 минут до нужного времени или планируйте заранее. Отслеживайте местоположение
                  водителя в реальном времени.
                </p>
              </div>
            </div>

            {/* Right Column - Image and Features */}
            <div>
              <img
                src={mercedes}
                alt="Персональный трансфер"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Быстрая подача</h4>
                  <p className="text-sm text-gray-600">15-30 минут</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Безопасность</h4>
                  <p className="text-sm text-gray-600">Проверенные водители</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Любые маршруты</h4>
                  <p className="text-sm text-gray-600">По городу и стране</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <User className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Персональный</h4>
                  <p className="text-sm text-gray-600">Только для вас</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Тарифы:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Подача по городу:</span>
                    <span className="font-semibold">5 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">1 км по городу:</span>
                    <span className="font-semibold">1.5 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">1 км за городом:</span>
                    <span className="font-semibold">2 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ожидание (час):</span>
                    <span className="font-semibold">15 BYN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Routes Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Популярные маршруты и стоимость</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Центр → ТЦ</h4>
                <p className="text-gray-600 text-sm mb-2">Средняя поездка</p>
                <p className="text-yellow-600 font-bold">12-18 BYN</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Минск → Брест</h4>
                <p className="text-gray-600 text-sm mb-2">~350 км</p>
                <p className="text-yellow-600 font-bold">350 BYN</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Минск → Гродно</h4>
                <p className="text-gray-600 text-sm mb-2">~280 км</p>
                <p className="text-yellow-600 font-bold">280 BYN</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Деловая встреча</h4>
                <p className="text-gray-600 text-sm mb-2">2 часа с ожиданием</p>
                <p className="text-yellow-600 font-bold">45 BYN</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Нужен персональный трансфер?</h3>
              <p className="text-gray-600">Быстро доставим вас в любую точку города или области</p>
            </div>
            <ContactForm
              title="Заказать персональный трансфер"
              description="Расскажите о маршруте и мы рассчитаем стоимость"
            />
          </div>
        </div>
      </div>
    </>
  );
};
