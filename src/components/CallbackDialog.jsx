import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, X } from "lucide-react";

const CallbackDialog = ({ trigger, variant = "default", size = "default", className = "", showIcon = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare data for backend
    const data = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      message: formData.comment?.trim() || "Заказ обратного звонка",
      tripDateTime: null,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer || "Прямой переход",
      route: null,
    };

    try {
      const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL || "http://localhost:3000";
      const response = await fetch(`${BACKEND_API_URL}/telegram/notify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Ошибка отправки");

      setFormData({ name: "", phone: "", comment: "" });
      setIsOpen(false);
      toast.success("Заявка отправлена", {
        description: "Мы свяжемся с вами в ближайшее время",
      });
    } catch (error) {
      console.error("Callback form error:", error);
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

  const defaultTrigger = (
    <Button variant={variant} size={size} className={className}>
      {showIcon && <Phone className="w-4 h-4 mr-2" />}
      Обратный звонок
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger || defaultTrigger}</DialogTrigger>

      <DialogContent className="[&>button]:hidden sm:max-w-md bg-black/90 backdrop-blur-sm border-white/20 text-white">
        <DialogClose asChild>
          <div className="cursor-pointer absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X width={20} />
            <span className="sr-only">Close</span>
          </div>
        </DialogClose>
        <DialogHeader>
          <DialogTitle className="text-green-400">Заказать обратный звонок</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="callback-name" className="text-white/80">
              Имя
            </Label>
            <Input
              id="callback-name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-green-400 focus:ring-green-400/20"
              placeholder="Ваше имя"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="callback-phone" className="text-white/80">
              Телефон
            </Label>
            <Input
              id="callback-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-green-400 focus:ring-green-400/20"
              placeholder="+375 (XX) XXX-XX-XX"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="callback-comment" className="text-white/80">
              Комментарий (необязательно)
            </Label>
            <Textarea
              id="callback-comment"
              value={formData.comment}
              onChange={(e) => handleInputChange("comment", e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none focus:border-green-400 focus:ring-green-400/20"
              placeholder="Дополнительная информация"
              rows={3}
            />
          </div>
          <div className="flex space-x-3">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer flex-1 bg-green-400 text-black hover:bg-green-300 transition-all duration-300"
            >
              {isSubmitting ? "Отправка..." : "Отправить"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer border-white/20 text-white/80 hover:bg-white/10"
            >
              Отмена
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CallbackDialog;
