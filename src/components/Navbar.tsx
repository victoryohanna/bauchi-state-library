"use client";

import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import Link from "next/link"

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
            <Link
              href="/"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary font-medium"
            >
              About
            </Link>
            <Link
              href="/books"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Collections
            </Link>
            <Link
              href="services-page"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Services
            </Link>

            {/* <Link
              href="#"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Contact
            </Link> */}

            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-400 transition duration-200">
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
              <Link
                href="/"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary font-medium"
              >
                About
              </Link>
              <Link
                href="/collections"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Collections
              </Link>
              <Link
                href="services-page"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Services
              </Link>

              {/* <Link
                href="#"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Contact
              </Link> */}

              <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-400 transition duration-200">
                Member Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
