"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`bg-black sticky top-0 z-50 text-white px-4 sm:px-6 py-3 shadow-lg transition-all duration-300 ${scrolled ? "py-2 shadow-xl" : "py-3"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold tracking-tight cursor-pointer hover:text-blue-400 transition-colors duration-300">
            Shoaib's Portfolio
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/about" label="Who am I" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/contact" label="Contact" />
          <NavLink href="/skills" label="Skills" />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="focus:outline-none p-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={toggleMenu}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              onClick={toggleMenu}
              className="p-1 rounded-md hover:bg-gray-800 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-2 p-4">
            <MobileNavLink href="/about" label="Who am I" onClick={toggleMenu} />
            <MobileNavLink href="/projects" label="Projects" onClick={toggleMenu} />
            <MobileNavLink href="/contact" label="Contact" onClick={toggleMenu} />
            <MobileNavLink href="/skills" label="Skills" onClick={toggleMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
}

// Desktop NavLink component
const NavLink = ({ href, label, onClick }) => (
  <Link href={href} passHref>
    <div
      onClick={onClick}
      className="relative px-2 py-1 group transition-all duration-300"
    >
      <span className="text-base font-medium tracking-wide text-white group-hover:text-blue-400 transition-colors duration-300">
        {label}
      </span>
      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
    </div>
  </Link>
);

// Mobile NavLink component
const MobileNavLink = ({ href, label, onClick }) => (
  <Link href={href} passHref>
    <div
      onClick={onClick}
      className="px-4 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200"
    >
      <span className="text-base font-medium tracking-wide text-white hover:text-blue-400 transition-colors duration-300">
        {label}
      </span>
    </div>
  </Link>
);