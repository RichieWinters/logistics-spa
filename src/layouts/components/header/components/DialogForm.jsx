import { Button } from "@/components/ui/button";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const DialogForm = ({ handleFormSubmit, formData, handleInputChange, isSubmitting, setIsCallbackOpen }) => {
  return (
    <DialogContent className="max-w-[90vw] w-full  sm:max-w-md bg-black/90 backdrop-blur-sm border-white/20 text-white max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-green-400 text-lg sm:text-xl">Заказать обратный звонок</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name-mobile-menu" className="text-white/80 text-sm">
            Имя
          </Label>
          <Input
            id="name-mobile-menu"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-11 text-base"
            placeholder="Ваше имя"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone-mobile-menu" className="text-white/80 text-sm">
            Телефон
          </Label>
          <Input
            id="phone-mobile-menu"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-11 text-base"
            placeholder="+375 (XX) XXX-XX-XX"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="comment-mobile-menu" className="text-white/80 text-sm">
            Комментарий (необязательно)
          </Label>
          <Textarea
            id="comment-mobile-menu"
            value={formData.comment}
            onChange={(e) => handleInputChange("comment", e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none min-h-[80px] text-base"
            placeholder="Дополнительная информация"
            rows={3}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-green-400 text-black hover:bg-green-300 transition-all duration-300 h-12 text-base"
          >
            {isSubmitting ? "Отправка..." : "Отправить"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsCallbackOpen(false)}
            className="border-white/20 text-white/80 hover:bg-white/10 h-12 text-base"
          >
            Отмена
          </Button>
        </div>
      </form>
    </DialogContent>
  );
};

export default DialogForm;
