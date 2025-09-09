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

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="hidden fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-xl font-bold text-yellow-400">
                Logistics Transfers
              </Link>
              <div className="flex space-x-6">
                {/* <Link 
                  to="/" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/') 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  Home
                </Link> */}
                <Link
                  to="/services"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/services") ? "bg-white/20 text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  Услуги
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-black">
        <Footer />
        <p className="text-center text-muted-foreground text-white">Copyright © 2025. All rights reserved.</p>
      </footer>
    </div>
  );
}
