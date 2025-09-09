import { Breadcrumbs } from "@/components/breadcrumbs";
import { MapPin, Clock, Wrench, Phone, CheckCircle, Settings, Zap, Shield } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Service1 from "@/assets/images/Service1.jpg";

export const TireChangePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Service1})` }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">Замена колеса</h1>
                <p className="text-xl text-white/90 leading-relaxed drop-shadow-lg">
                  Быстрая замена спущенного колеса в любой точке города и области
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Профессиональная замена колёс на дороге</h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Спустило колесо в дороге? Не умеете менять или нет инструментов? Наши специалисты приедут к вам и быстро
                заменят колесо. Работаем со всеми типами автомобилей - от легковых до небольших грузовых.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Когда нужна наша помощь:</h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Прокол или порез шины</span>
                    <p className="text-gray-600 text-sm">Быстрая установка запасного колеса</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Settings className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Отсутствие инструментов</span>
                    <p className="text-gray-600 text-sm">У нас есть все необходимое оборудование</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Wrench className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Сложная замена</span>
                    <p className="text-gray-600 text-sm">Заржавевшие болты, сложный доступ к колесу</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Неблагоприятные условия</span>
                    <p className="text-gray-600 text-sm">Плохая погода, опасное место на дороге</p>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Что мы предоставляем:</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Профессиональные инструменты</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Гидравлический домкрат</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Баллонный ключ с усилителем</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Проверка давления в шинах</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Консультация по дальнейшей эксплуатации</span>
                </li>
              </ul>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">🔧 Дополнительные услуги</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Доставка нового колеса (при необходимости)</li>
                  <li>• Ремонт прокола на месте (если возможно)</li>
                  <li>• Проверка состояния всех колёс</li>
                  <li>• Рекомендации по выбору шин</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Image and Features */}
            <div>
              <img
                src={Service1}
                alt="Замена колеса на дороге"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Время работы</h4>
                  <p className="text-sm text-gray-600">15-30 минут</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Wrench className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Инструменты</h4>
                  <p className="text-sm text-gray-600">Профессиональные</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">География</h4>
                  <p className="text-sm text-gray-600">Весь город</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Phone className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Время прибытия</h4>
                  <p className="text-sm text-gray-600">20-40 минут</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Стоимость услуги:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Легковой автомобиль:</span>
                    <span className="font-semibold">25 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Кроссовер/внедорожник:</span>
                    <span className="font-semibold">30 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Микроавтобус:</span>
                    <span className="font-semibold">35 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">За городом (+за км):</span>
                    <span className="font-semibold">1 BYN</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">* Ночное время (22:00-06:00) - наценка 50%</div>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg mt-4">
                <h5 className="font-semibold text-gray-800 mb-2">⚡ Важно знать</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Наличие запасного колеса обязательно</li>
                  <li>• Проверяем исправность запаски</li>
                  <li>• Работаем в любую погоду</li>
                  <li>• Гарантия качества выполненной работы</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Нужна замена колеса?</h3>
              <p className="text-gray-600">Оставьте заявку и мы быстро приедем на помощь</p>
            </div>
            <ContactForm title="Заказать замену колеса" description="Укажите марку авто и ваше местоположение" />
          </div>
        </div>
      </div>
    </>
  );
};
