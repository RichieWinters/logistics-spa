import { ChevronDown } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const MobileNavItem = ({ item, isActive, toggleDropdown, activeDropdown, setActiveDropdown, setIsMenuOpen }) => {
  return (
    <div key={item.dropdown} className="transition-all duration-200 ease-in-out">
      <button
        onClick={() => toggleDropdown(item.dropdown)}
        className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out ${
          isActive(item.path) || item.items.some((subItem) => isActive(subItem.path))
            ? "bg-white/20 text-white"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
      >
        <span>{item.title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-all duration-300 ease-in-out ${
            activeDropdown === item.dropdown ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          activeDropdown === item.dropdown ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-2 ml-4 space-y-1">
          {item.items.map((subItem) => (
            <Link
              key={subItem.path}
              to={subItem.path}
              onClick={() => {
                setActiveDropdown(null);
                setIsMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-md text-sm transition-all duration-300 ease-in-out hover:transform hover:translate-x-2 ${
                isActive(subItem.path)
                  ? "bg-green-400/20 text-green-400"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavItem;
