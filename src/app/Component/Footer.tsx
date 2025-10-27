"use client";

import { FacebookIcon, Instagram, Mail, MapPin, Phone, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  E
                </div>
                <span className="text-2xl font-bold">ShopHub</span>
              </div>
              <p className="text-slate-400 mb-4">
                Your one-stop shop for amazing products at unbeatable prices.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition">
                  <FacebookIcon className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                  <TwitterIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Deals
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>123 Main Street, Karachi, Pakistan</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+92 300 1234567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>info@shophub.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 text-center text-slate-400">
            <p>
              &copy; 2025 ShopHub. All rights reserved. Made with ❤️ in Pakistan
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
