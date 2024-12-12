"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 py-4">

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 ml-3">
          <Link href="/" className="text-[#007580] text-[14px] font-medium">
            Home
          </Link>
          <Link href="/product" className="text-[14px] font-medium hover:text-[#007580] ">
            Shop
          </Link>
          <Link href="/product" className="text-[14px] font-medium hover:text-[#007580]">
            Product
          </Link>
          <Link href="/product" className="text-[14px] font-medium hover:text-[#007580]">
            Pages
          </Link>
          <Link href="/about" className="text-[14px] font-medium hover:text-[#007580]">
            About
          </Link>
        </div>

        {/* Contact Information (Desktop only) */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <span className="font-normal text-[#636270] text-[14px]">Contact:</span>
          <span className="font-medium text-[#272343] text-[14px]">
            (808) 555-0111
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-gray-700"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col gap-4 p-4">
            <Link href="/" className="text-[#007580] text-[14px] font-medium">
              Home
            </Link>
            <Link href="#" className="text-[14px] font-medium">
              Shop
            </Link>
            <Link href="/product" className="text-[14px] font-medium">
              Product
            </Link>
            <Link href="#" className="text-[14px] font-medium">
              Pages
            </Link>
            <Link href="/about" className="text-[14px] font-medium">
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
