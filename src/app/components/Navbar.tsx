// app/components/Navbar.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">+</span>
            <span className="text-xl font-bold">LUMA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              Resources
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              About
            </Link>
            <Link
              href="#"
              className="inline-flex items-center px-6 py-2 rounded-full transition-transform duration-300 hover:scale-105"
              style={{
                color: "#FFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "135%",
                letterSpacing: "-0.54px",
                borderRadius: "12px",
                border: "1px solid #EF741E",
                background:
                  "linear-gradient(90deg, #EF741E 25.9%, rgba(239, 116, 30, 0.00) 100%)",
                boxShadow: "1px 1px 2px 0 rgba(255, 255, 255, 0.60) inset",
              }}
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              href="#"
              className="block text-gray-400 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#"
              className="block text-gray-400 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#"
              className="block text-gray-400 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="block text-gray-400 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="#"
              className="block text-gray-400 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#"
              className="block bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition text-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
