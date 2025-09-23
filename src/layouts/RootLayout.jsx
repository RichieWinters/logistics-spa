import React, { useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Footer from "@/components/footer";
import Header from "@/layouts/components/header/Header";

export default function RootLayout() {
  const location = useLocation();

  // Автоскролл вверх при смене страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-black pb-8">
        <Footer />
        <p className="text-center text-muted-foreground text-white">Copyright © 2025. All rights reserved.</p>
      </footer>
    </div>
  );
}
