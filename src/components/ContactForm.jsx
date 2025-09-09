import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, User, Send } from "lucide-react";
import { toast } from "sonner";

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

    try {
      // Здесь будет отправка данных на сервер
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Имитация API запроса

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
    <Card className="w-full max-w-md mx-auto shadow-lg border-yellow-200">
      <CardHeader className="text-center bg-gradient-to-r from-yellow-50 to-amber-50">
        <CardTitle className="text-2xl font-bold text-gray-800 mb-2">{title}</CardTitle>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="contact-name" className="text-gray-700 font-medium flex items-center">
              <User className="w-4 h-4 mr-2 text-yellow-500" />
              Ваше имя
            </Label>
            <Input
              id="contact-name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
              placeholder="Введите ваше имя"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-phone" className="text-gray-700 font-medium flex items-center">
              <Phone className="w-4 h-4 mr-2 text-yellow-500" />
              Номер телефона
            </Label>
            <Input
              id="contact-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
              placeholder="+375 (XX) XXX-XX-XX"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105"
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
