 "use client";
import React, { useState } from 'react';
import { ChevronDown, Menu, X, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/service" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Pages", href: "#" },
  { name: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/Logo.svg" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link 
                href={item.href} 
                className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200 py-2"
              >
                {item.name}
                {item.name === "Pages" && <ChevronDown className="w-4 h-4 mt-[2px]" />}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Info - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <MessageCircle className="w-6 h-6 text-blue-600" />
          <div>
            <p className="text-sm text-gray-600">Need Help</p>
            <h6 className="font-semibold text-lg leading-tight">(307) 555-0133</h6>
          </div>
        </div>

        {/* Mobile Contact Info - Tablet */}
        <div className="hidden sm:flex md:hidden items-center">
          <Phone className="w-6 h-6 text-blue-600" />
          <span className="ml-2 font-semibold">(307) 555-0133</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
          <ul className="py-4">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-gray-100 last:border-b-0">
                <Link 
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.name === "Pages" && <ChevronDown className="w-4 h-4" />}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Mobile Contact Section */}
          <div className="px-4 py-4 bg-gray-50 border-t">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Need Help</p>
                <a 
                  href="tel:3075550133" 
                  className="font-semibold text-lg leading-tight text-blue-600"
                >
                  (307) 555-0133
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;