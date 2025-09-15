import { Users, MapPin, Car } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="py-16 bg-black/90 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-yellow-400 text-sm font-medium mb-4">О нас</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Premium Transfer Services</h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lg text-gray-100 leading-relaxed mb-8">
              Мы специализируемся на предоставлении эксклюзивных трансферных услуг по всей территории Беларуси. Наша
              команда профессионалов создает индивидуальные решения для каждого клиента, гарантируя безупречный сервис и
              максимальный комфорт во время путешествий.
            </p>
            <p className="text-lg text-gray-100 leading-relaxed">
              Благодаря многолетнему опыту и постоянному обновлению автопарка, мы обеспечиваем высочайший уровень
              качества и надежности. Каждая поездка с нами - это гарантия безопасного, комфортного и своевременного
              прибытия к месту назначения.
            </p>
          </div>

          {/* Bullet Benefits */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Эксклюзивный автопарк</h3>
                <p className="text-gray-400">Автомобили премиум-класса с полным набором современных удобств</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Индивидуальный подход</h3>
                <p className="text-gray-400">Персональное планирование маршрута и гибкое расписание</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Профессиональная команда</h3>
                <p className="text-gray-400">Опытные водители с безупречной репутацией и знанием местности</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Круглосуточная поддержка</h3>
                <p className="text-gray-400">Доступность в любое время дня и ночи для вашего удобства</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
