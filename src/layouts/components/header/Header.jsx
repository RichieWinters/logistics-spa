import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "@/layouts/components/header/components/Logo";
import { navigationItems } from "@/layouts/components/header/constants";
import NavList from "@/layouts/components/header/components/NavList";
import MobileNavList from "@/layouts/components/header/components/MobileNavList";
import CallbackDialog from "@/components/CallbackDialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-black/60 backdrop-blur-sm transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Logo />
          <div className="hidden lg:flex items-center space-x-8">
            <NavList items={navigationItems} isActive={isActive} />
            <CallbackDialog
              variant="outline"
              className="cursor-pointer bg-green-400/20 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <CallbackDialog
              size="sm"
              variant="outline"
              className="cursor-pointer bg-green-400/20 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
              showIcon={false}
            />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:bg-white/10 rounded-md transform hover:scale-110"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>

        <div
          className={`lg:hidden border-t border-white/20 transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-120 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2">
            <div className="px-3 pb-2">
              <CallbackDialog className="cursor-pointer w-full bg-green-400 text-black hover:bg-green-300 transition-all duration-300" />
            </div>

            <MobileNavList
              items={navigationItems}
              isActive={isActive}
              toggleDropdown={toggleDropdown}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
