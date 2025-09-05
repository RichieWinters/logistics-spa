import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Logo from "@/layouts/components/header/components/Logo";
import { navigationItems } from "@/layouts/components/header/constants";
import NavList from "@/layouts/components/header/components/NavList";
import MobileNavList from "@/layouts/components/header/components/MobileNavList";
import DialogForm from "@/layouts/components/header/components/DialogForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Здесь обычно отправляются данные на бэкенд
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Имитация API запроса

      setFormData({ name: "", phone: "", comment: "" });
      setIsCallbackOpen(false);
      toast.success("Заявка отправлена", {
        description: "Мы свяжемся с вами в ближайшее время",
      });
    } catch {
      toast.error("Ошибка", {
        description: "Не удалось отправить заявку. Попробуйте позже.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-black/60 backdrop-blur-sm transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Logo />
          <div className="hidden lg:flex items-center space-x-8">
            <NavList items={navigationItems} isActive={isActive} />
            <Dialog open={isCallbackOpen} onOpenChange={setIsCallbackOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-yellow-400/20 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Обратный звонок
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-black/90 backdrop-blur-sm border-white/20 text-white">
                <DialogHeader>
                  <DialogTitle className="text-yellow-400">Заказать обратный звонок</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/80">
                      Имя
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white/80">
                      Телефон
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="+375 (XX) XXX-XX-XX"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="comment" className="text-white/80">
                      Комментарий (необязательно)
                    </Label>
                    <Textarea
                      id="comment"
                      value={formData.comment}
                      onChange={(e) => handleInputChange("comment", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                      placeholder="Дополнительная информация"
                      rows={3}
                    />
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-yellow-400 text-black hover:bg-yellow-300 transition-all duration-300"
                    >
                      {isSubmitting ? "Отправка..." : "Отправить"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsCallbackOpen(false)}
                      className="border-white/20 text-white/80 hover:bg-white/10"
                    >
                      Отмена
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Dialog open={isCallbackOpen} onOpenChange={setIsCallbackOpen}>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-yellow-400/20 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogForm
                formData={formData}
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                isSubmitting={isSubmitting}
                setIsCallbackOpen={setIsCallbackOpen}
              />
            </Dialog>

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
              <Dialog open={isCallbackOpen} onOpenChange={setIsCallbackOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-300 transition-all duration-300">
                    <Phone className="w-4 h-4 mr-2" />
                    Обратный звонок
                  </Button>
                </DialogTrigger>
                <DialogForm
                  formData={formData}
                  handleFormSubmit={handleFormSubmit}
                  handleInputChange={handleInputChange}
                  isSubmitting={isSubmitting}
                  setIsCallbackOpen={setIsCallbackOpen}
                />
              </Dialog>
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
