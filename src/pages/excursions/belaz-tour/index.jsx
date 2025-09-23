import { Breadcrumbs } from "@/components/breadcrumbs";
import { MapPin, Clock, Users, Camera, CheckCircle, Truck, Cog, Factory } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import mercedesLarge from "@/assets/images/mercedesLarge.jpg";

export const BelazTourPage = () => {
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
                  Экскурсия на завод БелАЗ
                </h1>
                <p className="text-xl text-white/90 leading-relaxed drop-shadow-lg">
                  Гиганты индустрии: знакомство с производством самых больших грузовиков в мире
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Завод БелАЗ - Гордость белорусской промышленности
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Посетите крупнейший в мире завод по производству карьерных самосвалов и познакомьтесь с уникальными
                технологиями создания машин-гигантов. БелАЗ - это мировой лидер в производстве сверхтяжёлых грузовиков
                грузоподъёмностью до 450 тонн.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Программа экскурсии:</h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Factory className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Музей истории БелАЗ</span>
                    <p className="text-gray-600 text-sm">История развития завода с 1948 года</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Cog className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Производственные цеха</span>
                    <p className="text-gray-600 text-sm">Процесс сборки карьерных самосвалов</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Truck className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Готовая продукция</span>
                    <p className="text-gray-600 text-sm">Осмотр самосвалов БелАЗ-75710 (450 тонн)</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Camera className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Фотосессия</span>
                    <p className="text-gray-600 text-sm">Фото на фоне самого большого грузовика в мире</p>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Что включено в экскурсию:</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Трансфер до завода и обратно</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Профессиональный гид-экскурсовод</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Пропуск на предприятие</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Посещение музея завода</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Сувениры БелАЗ в подарок</span>
                </li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">🚛 Интересные факты</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• БелАЗ-75710 - самый большой грузовик в мире (450 тонн)</li>
                  <li>• Высота самосвала - 8,16 метра (как трёхэтажный дом)</li>
                  <li>• Продукция БелАЗ работает в 90 странах мира</li>
                  <li>• Двигатель мощностью 4600 л.с.</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Image and Features */}
            <div>
              <img
                src={mercedesLarge}
                alt="Экскурсия на завод БелАЗ"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Длительность</h4>
                  <p className="text-sm text-gray-600">6-7 часов</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Группа</h4>
                  <p className="text-sm text-gray-600">1-7 человек</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Локация</h4>
                  <p className="text-sm text-gray-600">г. Жодино</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Truck className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Техника</h4>
                  <p className="text-sm text-gray-600">Гиганты БелАЗ</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Стоимость экскурсии:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">1-2 человека:</span>
                    <span className="font-semibold">180 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">3-4 человека:</span>
                    <span className="font-semibold">220 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">5-7 человек:</span>
                    <span className="font-semibold">300 BYN</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    * В стоимость включены: транспорт, гид, пропуск, сувениры
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg mt-4">
                <h5 className="font-semibold text-gray-800 mb-2">📋 Требования</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Паспорт обязателен для всех участников</li>
                  <li>• Запись на экскурсию за 3 дня</li>
                  <li>• Соблюдение правил техники безопасности</li>
                  <li>• Запрет на фото- и видеосъёмку в цехах</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Увидеть гигантов промышленности</h3>
              <p className="text-gray-600">
                Забронируйте экскурсию на завод БелАЗ и познакомьтесь с мировыми рекордсменами
              </p>
            </div>
            <ContactForm
              title="Заказать экскурсию на БелАЗ"
              description="Откройте для себя мир промышленных гигантов"
            />
          </div>
        </div>
      </div>
    </>
  );
};
