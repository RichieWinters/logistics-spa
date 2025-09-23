import InstagramIcon from "@/assets/icons/instagram.png";
import TelegramIcon from "@/assets/icons/telegram.svg?react";
import WhatsappIcon from "@/assets/icons/whatsapp.svg?react";

export default function Footer() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 pb-8 md:pb-24">
      {/* Desktop and tablet layout */}
      <div className="hidden sm:flex justify-between">
        <div className="hidden md:flex flex-col flex-1">
          <h4 className="text-lg font-bold text-green-400">Logistics Transfers</h4>
        </div>
        <div className="flex flex-col flex-1">
          <h4 className="text-lg font-bold text-white min-h-[56px]">Услуги</h4>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Трансфер аэропорт
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Индивидуальный трансфер
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Аренда авто с водителем
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Авто на мероприятие
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Трезвый водитель
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-1">
          <h4 className="text-lg font-bold text-white min-h-[56px]">Помощь на дороге</h4>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              'Прикурить' авто
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Подкачка колёс
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Подвоз топлива
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Буксировка
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Трезвый водитель
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-1">
          <h4 className="text-lg font-bold text-white mb-4">Социальные сети</h4>
          <div className="flex justify-start gap-4 items-center">
            <a href="#">
              <img src={InstagramIcon} alt="Instagram" className="w-8 h-8 rounded-2xl" />
            </a>
            <a href="#">
              <TelegramIcon className="w-8 h-8 rounded-2xl" />
            </a>
            <a href="#">
              <WhatsappIcon className="w-8 h-8 rounded-2xl" />
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
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Трансфер аэропорт
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Индивидуальный трансфер
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Аренда авто с водителем
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Авто на мероприятие
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Трезвый водитель
              </li>
            </ul>
          </div>
          {/* Roadside assistance section */}
          <div className="flex flex-col flex-1">
            <h3 className="text-lg font-bold text-white mb-3">Помощь на дороге</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                'Прикурить' авто
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Подкачка колёс
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Подвоз топлива
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Буксировка
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Трезвый водитель
              </li>
            </ul>
          </div>
        </div>

        {/* Social media section - separate row */}
        <div className="flex flex-col">
          <h4 className="text-lg font-bold text-white mb-4">Социальные сети</h4>
          <div className="flex gap-4 justify-start">
            <a href="#">
              <img src={InstagramIcon} alt="Instagram" className="w-8 h-8 rounded-2xl" />
            </a>
            <a href="#">
              <TelegramIcon className="w-8 h-8 rounded-2xl" />
            </a>
            <a href="#">
              <WhatsappIcon className="w-8 h-8 rounded-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
