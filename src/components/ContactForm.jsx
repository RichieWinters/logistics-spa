import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, User, Send } from "lucide-react";
import { toast } from "sonner";
import { PhoneInput } from "@/components/ui/phone-input";

const ContactForm = ({ title = "Заказать услугу", description = "Оставьте свои контакты и мы свяжемся с вами" }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Подготовка данных для бэкенда (аналогично FeedbackForm)
    const data = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      message: "Заявка с контактной формы",
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

      toast.success("Заявка отправлена", {
        description: "Мы свяжемся с вами в ближайшее время",
      });

      setFormData({ name: "", phone: "" });
    } catch {
      toast.error("Ошибка", {
        description: "Не удалось отправить заявку. Попробуйте позже.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card id="form" className="w-full max-w-md mx-auto shadow-lg border-green-200">
      <CardHeader className="text-center bg-gradient-to-r from-green-50 to-emerald-50">
        <CardTitle className="text-2xl font-bold text-gray-800 mb-2">{title}</CardTitle>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="contact-name" className="text-gray-700 font-medium flex items-center">
              <User className="w-4 h-4 mr-2 text-green-500" />
              Ваше имя
            </Label>
            <Input
              id="contact-name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="border-gray-300 focus:border-green-400 focus:ring-green-400"
              placeholder="Введите ваше имя"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-phone" className="text-gray-700 font-medium flex items-center">
              <Phone className="w-4 h-4 mr-2 text-green-500" />
              Номер телефона
            </Label>
            <PhoneInput
              id="contact-phone"
              type="tel"
              value={formData.phone}
              onChange={(value) => handleInputChange("phone", value)}
              className="border-gray-300 focus:border-green-400 focus:ring-green-400"
              placeholder="+375 (XX) XXX-XX-XX"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                Отправка...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Отправить заявку
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
