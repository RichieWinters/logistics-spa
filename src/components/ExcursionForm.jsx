import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Phone, User, Send, Calendar, Clock, MessageSquare, Users } from "lucide-react";
import { toast } from "sonner";
import { PhoneInput } from "@/components/ui/phone-input";
import { useLocation } from "react-router-dom";
import { PAGES } from "@/routes/pageNames";
import { pageNamesMap } from "@/constants";

const ExcursionForm = ({
  title = "Заказать экскурсию",
  description = "Оставьте свои контакты и мы свяжемся с вами",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
    date: "",
    time: "",
    comment: "",
    peopleCount: "",
  });
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const excursionTitle = location.pathname.split("/").pop();
    // Подготовка данных для бэкенда (аналогично FeedbackForm)
    const data = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      message: formData.comment.trim() || "Заявка с контактной формы",
      excursionTitle: pageNamesMap.get(excursionTitle) || excursionTitle || "Экскурсия не определена",
      tripDateTime: formData.date && formData.time ? `${formData.date} ${formData.time}` : null,
      peopleCount: formData.peopleCount ? parseInt(formData.peopleCount) : null,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer || "Прямой переход",
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
        description: excursionTitle
          ? `Заявка на "${excursionTitle}" получена. Мы свяжемся с вами в ближайшее время`
          : "Мы свяжемся с вами в ближайшее время",
      });

      setFormData({ name: "", phone: "", category: "", date: "", time: "", comment: "", peopleCount: "" });
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

          <div className="space-y-2">
            <Label htmlFor="contact-date" className="text-gray-700 font-medium flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-green-500" />
              Дата экскурсии
            </Label>
            <Input
              id="contact-date"
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange("date", e.target.value)}
              className="border-gray-300 focus:border-green-400 focus:ring-green-400"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-time" className="text-gray-700 font-medium flex items-center">
              <Clock className="w-4 h-4 mr-2 text-green-500" />
              Время экскурсии
            </Label>
            <Input
              id="contact-time"
              type="time"
              value={formData.time}
              onChange={(e) => handleInputChange("time", e.target.value)}
              className="border-gray-300 focus:border-green-400 focus:ring-green-400"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-people" className="text-gray-700 font-medium flex items-center">
              <Users className="w-4 h-4 mr-2 text-green-500" />
              Количество человек
            </Label>
            <Input
              id="contact-people"
              type="number"
              min="1"
              max="50"
              value={formData.peopleCount}
              onChange={(e) => handleInputChange("peopleCount", e.target.value)}
              className="border-gray-300 focus:border-green-400 focus:ring-green-400"
              placeholder="Введите количество человек"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-comment" className="text-gray-700 font-medium flex items-center">
              <MessageSquare className="w-4 h-4 mr-2 text-green-500" />
              Комментарий (необязательно)
            </Label>
            <Textarea
              id="contact-comment"
              value={formData.comment}
              onChange={(e) => handleInputChange("comment", e.target.value)}
              className="border-gray-300 focus:border-green-400 focus:ring-green-400 min-h-[100px]"
              placeholder="Дополнительные пожелания или вопросы..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer w-full bg-green-400 hover:bg-green-500 text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105"
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

export default ExcursionForm;
