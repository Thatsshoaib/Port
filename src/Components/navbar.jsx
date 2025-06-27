"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from 'next/link';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black sticky top-0 z-50 text-white px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
       <Link href="/">
  <h1 className="text-2xl font-semibold tracking-wide cursor-pointer hover:text-blue-400 transition-colors duration-300">
    Shoaib's Portfolio
  </h1>
</Link>


        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="/about" label="Who am I" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/contact" label="Contact" />
          <NavLink href="/skills" label="View my skills" />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (no overlay) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-gray-900 via-black to-gray-900
 text-white shadow-xl transform transition-transform duration-400 ease-in-out z-50 ${
   isOpen ? "translate-x-0" : "translate-x-full"
 } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col space-y-6 px-6 mt-10">
          <NavLink href="/about" label="Who am I" onClick={toggleMenu} />
          <NavLink href="/projects" label="Projects" onClick={toggleMenu} />
          <NavLink href="/contact" label="Contact" onClick={toggleMenu} />
          <NavLink href="/skills" label="View my skills" onClick={toggleMenu}/>

        </div>
      </div>
    </nav>
  );
}

// NavLink component
const NavLink = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-lg font-semibold tracking-wide text-white relative group transition-all duration-500 ease-in-out hover:scale-105"
  >
    <span className="relative inline-block">
      <span className="group-hover:text-blue-400 transition-colors duration-500">
        {label}
      </span>
      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
    </span>
  </a>
);
