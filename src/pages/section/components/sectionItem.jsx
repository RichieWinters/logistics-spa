import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const SectionItem = ({ title, path, image, imageAlt, subtitle, highlight }) => {
  return (
    <Link
      to={path}
      className={`group block bg-white rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 ${
        highlight
          ? "ring-4 ring-green-400/40 shadow-[0_10px_30px_rgba(34,197,94,0.25)] hover:scale-[1.01]"
          : "shadow-lg hover:shadow-xl"
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        {highlight && (
          <span className="absolute top-3 left-3 bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-lg shadow-[0_6px_18px_rgba(34,197,94,0.28)] ring-1 ring-green-300/60">
            В ТОПЕ
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-400 transition-colors duration-300 mb-2">
          {title}
        </h3>
        {subtitle && <div className="text-sm text-gray-600 mb-3">{subtitle}</div>}
        <div className="flex items-center text-green-400 group-hover:text-green-500 transition-colors duration-300">
          <span className="text-sm font-medium">Подробнее</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};
