import { ChevronDown } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ item, isActive }) => {
  return (
    <div key={item.dropdown} className="relative group">
      <Link
        to={item.path}
        className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
          isActive(item.path) || item.items.some((subItem) => isActive(subItem.path))
            ? "bg-white/20 text-white shadow-lg"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
      >
        <span>{item.title}</span>
        {item.items?.length > 0 && (
          <ChevronDown className="w-4 h-4 transition-all duration-300 ease-in-out group-hover:rotate-180" />
        )}
      </Link>
      {item.items?.length > 0 && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl overflow-hidden opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
          {item.items.map((subItem) => (
            <Link
              key={subItem.path}
              to={subItem.path}
              className={`block px-4 py-3 text-sm transition-all duration-200 ease-in-out hover:transform hover:translate-x-2 
                ${
                  isActive(subItem.path)
                    ? "bg-green-400/20 text-green-400 border-l-2 border-green-400"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
