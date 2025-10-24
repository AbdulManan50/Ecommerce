import { Heart, Search, ShoppingCart, User } from "lucide-react";
import React, { useState } from "react";

const Header = () => {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                E
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ShopHub
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-slate-700 hover:text-purple-600 transition font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-purple-600 transition font-medium"
              >
                Products
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-purple-600 transition font-medium"
              >
                Categories
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-purple-600 transition font-medium"
              >
                Deals
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-purple-600 transition font-medium"
              >
                Contact
              </a>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button className="hidden sm:block p-2 hover:bg-slate-100 rounded-lg transition">
                <Search className="w-5 h-5 text-slate-600" />
              </button>
              <button className="p-2 hover:bg-slate-100 rounded-lg transition">
                <Heart className="w-5 h-5 text-slate-600" />
              </button>
              <button className="p-2 hover:bg-slate-100 rounded-lg transition">
                <User className="w-5 h-5 text-slate-600" />
              </button>
              <button className="relative p-2 hover:bg-slate-100 rounded-lg transition">
                <ShoppingCart className="w-5 h-5 text-slate-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <nav className="px-4 py-4 space-y-3">
              <a
                href="#"
                className="block text-slate-700 hover:text-purple-600 transition font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-slate-700 hover:text-purple-600 transition font-medium"
              >
                Products
              </a>
              <a
                href="#"
                className="block text-slate-700 hover:text-purple-600 transition font-medium"
              >
                Categories
              </a>
              <a
                href="#"
                className="block text-slate-700 hover:text-purple-600 transition font-medium"
              >
                Deals
              </a>
              <a
                href="#"
                className="block text-slate-700 hover:text-purple-600 transition font-medium"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
