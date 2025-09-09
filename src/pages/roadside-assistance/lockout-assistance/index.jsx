import { Breadcrumbs } from "@/components/breadcrumbs";
import { MapPin, Clock, Phone, CheckCircle, Battery, Shield, Zap, Car } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import mercedesLarge from "@/assets/images/mercedesLarge.jpg";

export const LockoutAssistancePage = () => {
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
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">Прикурить авто</h1>
                <p className="text-xl text-white/90 leading-relaxed drop-shadow-lg">
                  Быстрая помощь при разряженном аккумуляторе - запустим ваш автомобиль с помощью проводов
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Профессиональное прикуривание автомобиля</h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Разрядился аккумулятор и автомобиль не заводится? Наши специалисты оперативно приедут к вам с
                пуско-зарядным устройством или проводами для прикуривания. Безопасно запустим двигатель без риска
                повреждения электроники автомобиля.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Случаи обращения:</h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Battery className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Полностью разрядился аккумулятор</span>
                    <p className="text-gray-600 text-sm">Стартер не крутит, не работает электроника</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Слабый заряд батареи</span>
                    <p className="text-gray-600 text-sm">Стартер крутит медленно, двигатель не запускается</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Car className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Долгий простой автомобиля</span>
                    <p className="text-gray-600 text-sm">Машина стояла без движения длительное время</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Забыли выключить свет</span>
                    <p className="text-gray-600 text-sm">Фары или габариты разрядили аккумулятор</p>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Наши гарантии:</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Безопасное подключение проводов</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Защита электроники автомобиля</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Профессиональное оборудование</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Опытные автоэлектрики</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Работаем с любыми типами аккумуляторов</span>
                </li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-400" />
                  Безопасность прикуривания
                </h4>
                <p className="text-gray-600">
                  Строго соблюдаем последовательность подключения проводов и технику безопасности. Используем
                  качественные провода с защитой от перегрузки. Проверяем полярность и напряжение перед подключением к
                  вашему автомобилю.
                </p>
              </div>
            </div>

            {/* Right Column - Image and Features */}
            <div>
              <img
                src={mercedesLarge}
                alt="Прикуривание автомобиля"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Время работы</h4>
                  <p className="text-sm text-gray-600">10-15 минут</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Battery className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Оборудование</h4>
                  <p className="text-sm text-gray-600">Пуско-зарядное</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">География</h4>
                  <p className="text-sm text-gray-600">Весь город</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Приезд</h4>
                  <p className="text-sm text-gray-600">15-30 минут</p>
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
                    <span className="text-gray-600">Микроавтобус:</span>
                    <span className="font-semibold">30 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Грузовой транспорт:</span>
                    <span className="font-semibold">35 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ночное время:</span>
                    <span className="font-semibold">+50%</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">* За город - дополнительно 1 BYN за км</div>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg mt-4">
                <h5 className="font-semibold text-gray-800 mb-2">⚡ Что нужно знать</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Глушим двигатель автомобиля-донора</li>
                  <li>• Подключение только при выключенном зажигании</li>
                  <li>• Сначала "плюс", потом "минус"</li>
                  <li>• После запуска даём поработать 5-10 минут</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Разрядился аккумулятор?</h3>
              <p className="text-gray-600">Вызовите нашего специалиста и мы быстро запустим ваш автомобиль</p>
            </div>
            <ContactForm
              title="Заказать прикуривание авто"
              description="Укажите марку автомобиля и ваше местоположение"
            />
          </div>
        </div>
      </div>
    </>
  );
};
