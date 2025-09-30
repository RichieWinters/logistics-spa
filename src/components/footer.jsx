import InstagramIcon from "@/assets/icons/instagram.png";
import TelegramIcon from "@/assets/icons/telegram.svg?react";
import WhatsappIcon from "@/assets/icons/whatsapp.svg?react";
import ViberIcon from "@/assets/icons/viber.svg?react";
import { PAGES } from "@/routes/pageNames";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-10 pb-8">
      {/* Desktop and tablet layout */}
      <div className="hidden sm:flex justify-between">
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-bold text-white">Услуги</h4>
          <ul className="space-y-2">
            {PAGES.concreteServices.map((s) => (
              <Link
                key={s.path}
                className="flex items-center mr-3 text-gray-300 text-sm font-semibold hover:text-gray-50"
                to={s.path}
              >
                {s.title}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-bold text-white">Экскурсии</h4>
          <ul className="space-y-2">
            {PAGES.concreteExcursions.map((s) => (
              <Link
                key={s.path}
                className="flex items-center mr-3 text-gray-300 text-sm font-semibold hover:text-gray-50"
                to={s.path}
              >
                {s.title}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 mr-1">
          <h4 className="text-lg font-bold text-white">Помощь на дороге</h4>
          <ul className="space-y-2">
            {PAGES.concreteAssistances.map((s) => (
              <Link
                key={s.path}
                className="flex items-center mr-3 text-gray-300 text-sm font-semibold hover:text-gray-50"
                to={s.path}
              >
                {s.title}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-self-end w-fit">
          <h4 className="text-lg font-bold text-white mb-4">Социальные сети</h4>
          <div className="flex justify-start gap-4 items-center">
            <a href="#">
              <ViberIcon className="w-8 h-8 rounded-2xl" />
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
      <div className="flex flex-col space-y-6 sm:hidden w-9/10 mx-auto">
        {/* Services and Roadside assistance in same row */}
        <div className="flex justify-between gap-4">
          {/* Services section */}
          <div className="flex flex-col w-fit">
            <h4 className="text-lg font-bold text-white mb-3">Услуги</h4>
            <ul className="space-y-2 flex flex-col gap-2">
              {PAGES.concreteServices.map((s) => (
                <Link
                  key={s.path}
                  className="flex items-center mr-3 text-gray-300 text-sm font-semibold hover:text-gray-50"
                  to={s.path}
                >
                  {s.title}
                </Link>
              ))}
            </ul>
          </div>
          {/* Roadside assistance section */}
          <div className="flex flex-col w-fit">
            <h3 className="text-lg font-bold text-white mb-3">Помощь на дороге</h3>
            <ul className="space-y-2 flex flex-col gap-2">
              {PAGES.concreteAssistances.map((s) => (
                <Link
                  key={s.path}
                  className="flex items-center mr-3 text-gray-300 text-sm font-semibold hover:text-gray-50"
                  to={s.path}
                >
                  {s.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>

        {/* Social media section - separate row */}
        <div className="flex flex-col">
          <h4 className="text-lg font-bold text-white mb-4">Социальные сети</h4>
          <div className="flex gap-4 justify-start">
            <a href="#">
              <ViberIcon className="w-8 h-8 rounded-2xl" />
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
