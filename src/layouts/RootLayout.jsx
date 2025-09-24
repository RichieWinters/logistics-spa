import React, { useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Footer from "@/components/footer";
import Header from "@/layouts/components/header/Header";
import ContactFormSection from "@/components/ContactFormSection";
import Support from "@/layouts/components/Support";

export default function RootLayout() {
  const location = useLocation();

  // Автоскролл вверх при смене страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Footer */}
      <footer className="mt-auto bg-black pb-1">
        <Footer />
        <div className="flex gap-4 items-center justify-center container max-auto px-4">
          <p className="text-center text-muted-foreground text-gray-400 text-xs">Copyright © 2025. All rights reserved.</p>
          <Link to={"#"} className="text-gray-400 text-xs">
            Политика обработки персональных данных
          </Link>
        </div>
      </footer>
      {/* Support Button */}
      <Support />
    </div>
  );
}
