
"use client"
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
        <hr/>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">Ra Bunthoeun</a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <a href="/about" className="px-4 hover:underline">About</a>
            <a href="/projects" className="px-4 hover:underline">Projects</a>
            <a href="/contact" className="px-4 hover:underline">Contact</a>
          </nav>
          {/* Hamburger Icon */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2 space-y-2 text-center">
            <hr/>
            <a href="/about" className="block px-4 py-2 hover:underline">About</a>
            <a href="/projects" className="block px-4 py-2 hover:underline">Projects</a>
            <a href="/contact" className=" block px-4 py-2 hover:underline">Contact</a>
          </nav>
        )}
      </header>
      <hr/>
    </div>
  );
};

export default Header;
