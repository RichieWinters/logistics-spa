import { Breadcrumbs } from "@/components/breadcrumbs";
import { MapPin, Clock, Phone, CheckCircle, Fuel, Zap, AlertTriangle, Gauge } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Service2 from "@/assets/images/Service2.jpg";

export const FuelDeliveryPage = () => {
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
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">Доставка топлива</h1>
                <p className="text-xl text-white/90 leading-relaxed drop-shadow-lg">
                  Экстренная доставка топлива прямо к вашему автомобилю в любое время
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Экстренная доставка топлива на дорогу</h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Остались без топлива в неподходящий момент? Наша служба доставки топлива работает круглосуточно и
                привезёт качественное топливо прямо к месту, где остановился ваш автомобиль. Быстро, надёжно и по
                честной цене.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Типы топлива:</h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Fuel className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Бензин АИ-92, АИ-95</span>
                    <p className="text-gray-600 text-sm">Качественный бензин с проверенных АЗС</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Fuel className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Дизельное топливо</span>
                    <p className="text-gray-600 text-sm">Зимнее и летнее ДТ высокого качества</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Gauge className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Минимальная заправка</span>
                    <p className="text-gray-600 text-sm">От 5 литров - достаточно до ближайшей АЗС</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Экстренные ситуации</span>
                    <p className="text-gray-600 text-sm">Особые случаи - свадьбы, деловые встречи, больница</p>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Как мы работаем:</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Принимаем заявку по телефону или через форму</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Уточняем тип топлива и количество литров</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Выезжаем к вам с мобильной АЗС</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Заправляем ваш автомобиль на месте</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Оплата наличными или по карте</span>
                </li>
              </ul>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-green-400" />
                  Безопасность превыше всего
                </h4>
                <p className="text-gray-600">
                  Наши специалисты имеют сертификаты для работы с топливом. Используем только сертифицированные ёмкости
                  и соблюдаем все требования безопасности при заправке.
                </p>
              </div>
            </div>

            {/* Right Column - Image and Features */}
            <div>
              <img
                src={Service2}
                alt="Доставка топлива на дорогу"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Время прибытия</h4>
                  <p className="text-sm text-gray-600">30-60 минут</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Fuel className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Минимум</h4>
                  <p className="text-sm text-gray-600">5 литров</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Радиус</h4>
                  <p className="text-sm text-gray-600">30 км от города</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Phone className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Связь</h4>
                  <p className="text-sm text-gray-600">24/7</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Стоимость услуги:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Бензин АИ-92:</span>
                    <span className="font-semibold">2.50 BYN/л</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Бензин АИ-95:</span>
                    <span className="font-semibold">2.65 BYN/л</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Дизельное топливо:</span>
                    <span className="font-semibold">2.40 BYN/л</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Стоимость доставки:</span>
                    <span className="font-semibold">20 BYN</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">* За город - дополнительно 1 BYN за км</div>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg mt-4">
                <h5 className="font-semibold text-gray-800 mb-2">💡 Полезные советы</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Всегда следите за уровнем топлива</li>
                  <li>• В баке должно быть топливо для работы насоса</li>
                  <li>• При заказе укажите точное местоположение</li>
                  <li>• Подготовьте документы на автомобиль</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Закончилось топливо?</h3>
              <p className="text-gray-600">Закажите доставку топлива и мы быстро решим вашу проблему</p>
            </div>
            <ContactForm title="Заказать доставку топлива" description="Укажите тип топлива и ваше местоположение" />
          </div>
        </div>
      </div>
    </>
  );
};
