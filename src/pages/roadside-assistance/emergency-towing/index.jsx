import { Breadcrumbs } from "@/components/breadcrumbs";
import { MapPin, Clock, Wrench, Phone, CheckCircle, Truck, AlertTriangle, Shield } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import mercedes from "@/assets/images/mercedes.jpg";

export const EmergencyTowingPage = () => {
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
                  Буксировка автомобилей
                </h1>
                <p className="text-xl text-white/90 leading-relaxed drop-shadow-lg">
                  Профессиональная буксировка легковых и грузовых автомобилей в Минске и области
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Профессиональная буксировка автомобилей</h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Автомобиль сломался в дороге и не может двигаться самостоятельно? Наша служба буксировки работает
                круглосуточно и готова доставить ваш автомобиль в безопасное место или автосервис. Используем надёжные
                буксировочные тросы и профессиональное оборудование.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Случаи буксировки:</h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Wrench className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Поломка двигателя</span>
                    <p className="text-gray-600 text-sm">Когда автомобиль не заводится или глохнет в дороге</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Проблемы с трансмиссией</span>
                    <p className="text-gray-600 text-sm">Не включаются передачи, пробуксовка сцепления</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Truck className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Повреждение подвески</span>
                    <p className="text-gray-600 text-sm">Поломка колёс, рулевого управления, тормозной системы</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-800 font-semibold">Застрял в грязи или снегу</span>
                    <p className="text-gray-600 text-sm">Вытащим автомобиль из сложной ситуации</p>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Наши преимущества:</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Быстрое реагирование и выезд</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Качественные буксировочные тросы</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Опытные водители-буксировщики</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Буксировка любых типов авто</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-600">Соблюдение ПДД при буксировке</span>
                </li>
              </ul>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <Truck className="w-5 h-5 mr-2 text-red-400" />
                  Правила безопасной буксировки
                </h4>
                <p className="text-gray-600">
                  Соблюдаем дистанцию 4-6 метров, используем световую сигнализацию, движемся со скоростью не более 50
                  км/ч. Буксируемый автомобиль обязательно с включенной аварийной сигнализацией.
                </p>
              </div>
            </div>

            {/* Right Column - Image and Features */}
            <div>
              <img
                src={mercedes}
                alt="Буксировка автомобилей"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Время прибытия</h4>
                  <p className="text-sm text-gray-600">20-40 минут</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Truck className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Способ буксировки</h4>
                  <p className="text-sm text-gray-600">На тросе</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Дальность</h4>
                  <p className="text-sm text-gray-600">До 50 км</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Скорость</h4>
                  <p className="text-sm text-gray-600">До 50 км/ч</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Стоимость буксировки:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Подача + первые 5 км:</span>
                    <span className="font-semibold">35 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Каждый доп. км:</span>
                    <span className="font-semibold">1.5 BYN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ночное время:</span>
                    <span className="font-semibold">+50%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Микроавтобус:</span>
                    <span className="font-semibold">+10 BYN</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">* Минимальная стоимость заказа - 35 BYN</div>
                </div>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg mt-4">
                <h5 className="font-semibold text-gray-800 mb-2">🚗 Как заказать буксировку</h5>
                <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                  <li>Обратитесь к нам по телефону или через форму</li>
                  <li>Назовите точный адрес и куда буксировать</li>
                  <li>Укажите марку и состояние автомобиля</li>
                  <li>Дождитесь приезда буксировочного авто</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Нужна буксировка автомобиля?</h3>
              <p className="text-gray-600">Заполните форму, и мы быстро организуем буксировку вашего авто</p>
            </div>
            <ContactForm title="Заказать буксировку" description="Укажите откуда и куда нужно буксировать автомобиль" />
          </div>
        </div>
      </div>
    </>
  );
};
