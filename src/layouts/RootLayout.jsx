import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

export default function RootLayout() {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-xl font-bold text-white">
                Logistics SPA
              </Link>
              <div className="flex space-x-6">
                <Link 
                  to="/" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/') 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/dashboard" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/dashboard') 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-auto">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-muted-foreground">
            © 2025.
          </p>
        </div>
      </footer>
    </div>
  )
}
