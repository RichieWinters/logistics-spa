import React, { useState } from "react";
import supportIcon from "@/assets/icons/support.png";
import ViberIcon from "@/assets/icons/viber.svg?react";
import TelegramIcon from "@/assets/icons/telegram.svg?react";
import WhatsappIcon from "@/assets/icons/whatsapp.svg?react";
import { Phone } from "lucide-react";

const socials = [
  {
    name: "Viber",
    icon: <ViberIcon className="w-8 h-8 rounded-2xl" />,
    href: "#",
  },
  {
    name: "Telegram",
    icon: <TelegramIcon className="w-8 h-8 rounded-2xl" />,
    href: "#",
  },
  {
    name: "Whatsapp",
    icon: <WhatsappIcon className="w-8 h-8 rounded-2xl" />,
    href: "#",
  },
  {
    name: "Телефон",
    icon: <Phone />,
    href: "tel:+375257118000",
  },
];

const Support = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end z-50">
      <div
        className="relative flex items-center justify-center cursor-pointer"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen(!open)}
      >
        <span className="relative flex items-center justify-center">
          <span className="absolute inset-0 rounded-full animate-pulse-support-ring"></span>
          <img
            src={supportIcon}
            className="w-20 h-20 relative rounded-full p-2 shadow-2xl bg-green-50/95"
            alt="Support"
          />
        </span>
        {/* Popup absolutely positioned above the button */}
        <div
          className={`absolute bottom-full right-0 mb-4 flex flex-col items-end gap-3 transition-all duration-300 z-10 ${
            open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/95 backdrop-blur-sm border border-gray-200/60 hover:bg-green-50 px-3 py-2 rounded-2xl shadow-2xl transition-colors justify-between"
              style={{ minWidth: "180px", width: "200px" }}
            >
              <span className="flex items-center gap-2">
                {item.icon}
                <span className="text-sm font-medium text-gray-800">{item.name}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
