import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const ScrollToContactButton = ({ text = "Обратный звонок", className = "", variant = "default" }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form-section");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Button
      onClick={scrollToContact}
      className={`transition-all duration-300 transform hover:scale-105 ${className}`}
      variant={variant}
    >
      <Phone className="w-4 h-4 mr-2" />
      {text}
    </Button>
  );
};

export default ScrollToContactButton;
