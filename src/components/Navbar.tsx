import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Smartphone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Navumi
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</a>
            <a href="#work" className="text-gray-700 hover:text-indigo-600 transition-colors">Our Work</a>
            <a href="#process" className="text-gray-700 hover:text-indigo-600 transition-colors">Process</a>
            <a href="#contact" className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
              Contact Us
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 h-64' : 'opacity-0 h-0'
      } overflow-hidden bg-white`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Services</a>
          <a href="#work" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Our Work</a>
          <a href="#process" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Process</a>
          <a href="#contact" className="block px-3 py-2 text-indigo-600 font-medium">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}