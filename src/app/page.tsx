"use client";
import React, { useState } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  Search,
  User,
  Heart,
  Star,
  TrendingUp,
  Truck,
  Shield,
  HeadphonesIcon,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function EcommerceHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const latestProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 12999,
      image: "🎧",
      rating: 4.8,
      reviews: 234,
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 8999,
      image: "⌚",
      rating: 4.6,
      reviews: 189,
    },
    {
      id: 3,
      name: "Designer Sunglasses",
      price: 3499,
      image: "🕶️",
      rating: 4.9,
      reviews: 312,
    },
    {
      id: 4,
      name: "Leather Wallet",
      price: 1999,
      image: "👛",
      rating: 4.7,
      reviews: 156,
    },
  ];

  const featuredProducts = [
    {
      id: 5,
      name: "Gaming Laptop Ultra",
      price: 89999,
      image: "💻",
      badge: "Hot",
      discount: 15,
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 4999,
      image: "🔊",
      badge: "New",
      discount: 20,
    },
    {
      id: 7,
      name: "Fitness Tracker",
      price: 2999,
      image: "⌚",
      badge: "Sale",
      discount: 25,
    },
    {
      id: 8,
      name: "Camera Drone 4K",
      price: 45999,
      image: "📷",
      badge: "Hot",
      discount: 10,
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Ahmed Khan",
      rating: 5,
      text: "Amazing products! Fast delivery aur quality bilkul perfect hai.",
      avatar: "👨",
    },
    {
      id: 2,
      name: "Fatima Ali",
      rating: 5,
      text: "Best shopping experience! Highly recommended for everyone.",
      avatar: "👩",
    },
    {
      id: 3,
      name: "Hassan Raza",
      rating: 4,
      text: "Great collection aur prices bhi reasonable hain. Will order again!",
      avatar: "👨‍💼",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
    

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                🔥 Winter Sale - Up to 50% OFF
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Discover Amazing Products
              </h1>
              <p className="text-xl text-white/90">
                Shop the latest trends with unbeatable prices and fast delivery
                across Pakistan
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-slate-100 transition shadow-lg">
                  Shop Now <ArrowRight className="inline w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white rounded-lg font-semibold hover:bg-white/20 transition">
                  View Deals
                </button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Truck className="w-6 h-6" />
                  <span>Free Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6" />
                  <span>Secure Payment</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <div className="relative w-80 h-80 animate-pulse">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-full"></div>
                <div className="absolute inset-8 bg-white/30 backdrop-blur-lg rounded-full"></div>
                <div className="absolute inset-16 bg-white/40 backdrop-blur-lg rounded-full flex items-center justify-center">
                  <span className="text-8xl">🛍️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-slate-50 transition">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Free Delivery</h3>
                <p className="text-sm text-slate-600">Orders over Rs. 2000</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-slate-50 transition">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Secure Payment</h3>
                <p className="text-sm text-slate-600">100% Protected</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-slate-50 transition">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <HeadphonesIcon className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">24/7 Support</h3>
                <p className="text-sm text-slate-600">Always here for you</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-purple-600" />
              Latest Products
            </h2>
            <p className="text-slate-600 mt-2">Check out our newest arrivals</p>
          </div>
          <button className="px-6 py-2 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200"
            >
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 h-48 flex items-center justify-center">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </span>
                <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-600 hover:text-white transition">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-purple-600 transition">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">
                    Rs. {product.price.toLocaleString()}
                  </span>
                  <button
                    onClick={() => setCartCount(cartCount + 1)}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offer Banner */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 px-8 py-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
                  🎉 LIMITED TIME OFFER
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Mega Sale Alert!
                </h2>
                <p className="text-xl text-white/90">
                  Get up to 70% OFF on selected items. Hurry! Sale ends soon.
                </p>
                <button className="px-8 py-4 bg-white text-red-600 rounded-lg font-bold hover:bg-slate-100 transition shadow-lg">
                  Grab Deals Now <ArrowRight className="inline w-5 h-5 ml-2" />
                </button>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="text-9xl animate-bounce">🎁</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-3">
            Featured Products
          </h2>
          <p className="text-slate-600">Handpicked items just for you</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200"
            >
              <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-full">
                {product.badge}
              </div>
              <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-green-600 text-white text-sm font-bold rounded-full">
                -{product.discount}%
              </div>
              <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 h-48 flex items-center justify-center">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-800 mb-3 group-hover:text-purple-600 transition">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-slate-500 line-through block">
                      Rs.{" "}
                      {Math.round(
                        product.price / (1 - product.discount / 100)
                      ).toLocaleString()}
                    </span>
                    <span className="text-2xl font-bold text-purple-600">
                      Rs. {product.price.toLocaleString()}
                    </span>
                  </div>
                  <button
                    onClick={() => setCartCount(cartCount + 1)}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Subscribe & Save 20%</h2>
          <p className="text-xl mb-8 text-purple-200">
            Join our newsletter and get exclusive deals delivered to your inbox!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-slate-800 focus:outline-none focus:ring-4 focus:ring-purple-400"
            />
            <button className="px-8 py-4 bg-white text-purple-900 rounded-lg font-bold hover:bg-slate-100 transition shadow-lg">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">
              What Our Customers Say
            </h2>
            <p className="text-slate-600">Real reviews from real customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border border-slate-200"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-3xl">
                    {review.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {review.name}
                    </h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition">
                  <Twitter className="w-5 h-5" />
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
    </div>
  );
}
