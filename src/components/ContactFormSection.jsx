import React from "react";
import ContactForm from "./ContactForm";

const ContactFormSection = ({
  title = "Заказать услугу",
  description = "Оставьте свои контакты и мы свяжемся с вами",
}) => {
  return (
    <section id="contact-form-section" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Готовы заказать услугу?</h2>
          <p className="text-gray-600">Заполните форму ниже, и наши специалисты свяжутся с вами в течение 15 минут</p>
        </div>
        <ContactForm title={title} description={description} />
      </div>
    </section>
  );
};

export default ContactFormSection;
