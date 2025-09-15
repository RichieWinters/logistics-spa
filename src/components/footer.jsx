import { Instagram, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 pb-8 md:pb-24">
      {/* Desktop and tablet layout */}
      <div className="hidden sm:flex justify-between">
        <div className="hidden md:flex flex-col flex-1">
          <h4 className="text-lg font-bold text-yellow-400">Logistics Transfers</h4>
        </div>
        <div className="flex flex-col flex-1">
          <h4 className="text-lg font-bold text-white min-h-[56px]">Услуги</h4>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
              Трансфер аэропорт
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
              Индивидуальный трансфер
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
              Аренда авто с водителем
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
              Авто на мероприятие
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
              Трезвый водитель
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-1">
          <h4 className="text-lg font-bold text-white min-h-[56px]">Помощь на дороге</h4>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
              'Прикурить' авто
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
              Подкачка колёс
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
              Подвоз топлива
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
              Буксировка
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
              Трезвый водитель
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-1">
          <h4 className="text-lg font-bold text-white mb-4">Социальные сети</h4>
          <div className="flex flex-col gap-4 items-center md:flex-row space-x-4">
            <a href="#" className="text-gray-300 hover:text-pink-500 transition-colors duration-200">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-500 transition-colors duration-200 mr-4 md:mr-0">
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile layout (< 640px) */}
      <div className="flex flex-col space-y-6 sm:hidden">
        {/* Services and Roadside assistance in same row */}
        <div className="flex gap-4">
          {/* Services section */}
          <div className="flex flex-col flex-1">
            <h4 className="text-lg font-bold text-white mb-3">Услуги</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Трансфер аэропорт
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Индивидуальный трансфер
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Аренда авто с водителем
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Авто на мероприятие
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Трезвый водитель
              </li>
            </ul>
          </div>

          {/* Roadside assistance section */}
          <div className="flex flex-col flex-1">
            <h3 className="text-lg font-bold text-white mb-3">Помощь на дороге</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                'Прикурить' авто
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Подкачка колёс
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Подвоз топлива
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Буксировка
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Трезвый водитель
              </li>
            </ul>
          </div>
        </div>

        {/* Social media section - separate row */}
        <div className="flex flex-col">
          <h4 className="text-lg font-bold text-white mb-4">Социальные сети</h4>
          <div className="flex gap-4 justify-start">
            <a href="#" className="text-gray-300 hover:text-pink-500 transition-colors duration-200">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-500 transition-colors duration-200">
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
