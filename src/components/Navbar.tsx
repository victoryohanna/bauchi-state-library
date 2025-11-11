"use client";

import { useState } from "react";
import { Menu, X, BookOpen, Search } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-gray-800">
              Bauchi State Library
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Collections
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Events
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Contact
            </a>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search books..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
              Member Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Collections
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Events
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Contact
              </a>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search books..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Member Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
