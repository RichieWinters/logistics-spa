import { Breadcrumbs } from "@/components/breadcrumbs";
import { Shield, Clock, Car, Phone, CheckCircle, AlertTriangle, Heart, Star } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Service1 from "@/assets/images/Service1.jpg";

export const SoberDriverPage = () => {
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
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">Трезвый водитель</h1>
                <p className="text-xl text-white/90 leading-relaxed drop-shadow-lg">
                  Безопасная доставка домой на вашем автомобиле в любое время
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Ваша безопасность - наша ответственность</h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Провели вечер с друзьями, отметили праздник или деловое мероприятие? Не рискуйте - вызовите трезвого
                водителя. Мы доставим вас домой на вашем автомобиле быстро и безопасно.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                <div className="flex items-center">
                  <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
                  <div>
                    <h4 className="font-semibold text-red-800">Важно помнить</h4>
                    <p className="text-red-700 text-sm">
                      Даже небольшое количество алкоголя может повлиять на реакцию. Безопасность дороже любых расходов.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Когда вызывать трезвого водителя:</h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Семейные торжества</span>
                    <p className="text-gray-600 text-sm">Свадьбы, юбилеи, дни рождения</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Корпоративы</span>
                    <p className="text-gray-600 text-sm">Деловые ужины, праздничные мероприятия</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Встречи с друзьями</span>
                    <p className="text-gray-600 text-sm">Рестораны, бары, клубы</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Любая ситуация</span>
                    <p className="text-gray-600 text-sm">Когда чувствуете неуверенность за рулем</p>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Преимущества нашего сервиса:</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Быстрая подача - 15-30 минут</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Опытные водители с чистой репутацией</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Работаем на любых марках автомобилей</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Страховка ответственности</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Конфиденциальность и деликатность</span>
                </li>
              </ul>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">🚗 Как это работает</h4>
                <p className="text-gray-600">
                  Вызывайте водителя по телефону или через приложение. Водитель приедет на складном электросамокате,
                  оставит его в багажнике и доставит вас домой на вашем автомобиле.
                </p>
              </div>
            </div>

            {/* Right Column - Image and Features */}
            <div>
              <img
                src={Service1}
                alt="Услуга трезвого водителя"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">24/7</h4>
                  <p className="text-sm text-gray-600">Круглосуточно</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Безопасно</h4>
                  <p className="text-sm text-gray-600">Проверенные водители</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Car className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Ваш авто</h4>
                  <p className="text-sm text-gray-600">Любая марка</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Phone className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Быстро</h4>
                  <p className="text-sm text-gray-600">15-30 минут</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Тарифы:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Подача (по городу):</span>
                    <span className="font-semibold">10 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">1 км в городе:</span>
                    <span className="font-semibold">2 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">1 км за городом:</span>
                    <span className="font-semibold">2.5 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ночной тариф (00:00-06:00):</span>
                    <span className="font-semibold">+30%</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">💡 Полезные советы:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Заказывайте заранее в праздничные дни</li>
                  <li>• Подготовьте документы на автомобиль</li>
                  <li>• Убедитесь, что есть топливо для обратной дороги</li>
                  <li>• Сохраните наш номер в телефоне</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Почему важно вызывать трезвого водителя
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">-85%</div>
                <h4 className="font-semibold text-gray-800 mb-2">Снижение риска ДТП</h4>
                <p className="text-gray-600 text-sm">При использовании услуг трезвого водителя</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
                <h4 className="font-semibold text-gray-800 mb-2">Сохранность прав</h4>
                <p className="text-gray-600 text-sm">Никаких штрафов и лишения водительских прав</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">24/7</div>
                <h4 className="font-semibold text-gray-800 mb-2">Доступность</h4>
                <p className="text-gray-600 text-sm">Наш сервис работает круглосуточно без выходных</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600 italic">"Безопасность не имеет цены. Доверьте свою жизнь профессионалам."</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Вызвать трезвого водителя</h3>
              <p className="text-gray-600">Безопасная доставка домой - звоните в любое время</p>
            </div>
            <ContactForm title="Заказать трезвого водителя" description="Укажите контакты для экстренного вызова" />
          </div>
        </div>
      </div>
    </>
  );
};
