import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const SectionItem = ({ title, path, image, imageAlt }) => {
  return (
    <Link
      to={path}
      className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-400 transition-colors duration-300 mb-2">
          {title}
        </h3>
        <div className="flex items-center text-yellow-400 group-hover:text-yellow-500 transition-colors duration-300">
          <span className="text-sm font-medium">Подробнее</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};
