 "use client";
import React from 'react';
import { ChevronDown } from 'lucide-react';
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
  return (
    <nav className="bg-white shadow-sm py-4 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <img src="/Logo.svg" alt="" />
        </div>

        <ul className="flex items-center gap-6">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link href={item.href} className="flex items-center gap-1 hover:text-blue-600 transition">
                {item.name}
                {item.name === "Pages" && <ChevronDown className="w-4 h-4 mt-[2px]" />}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <img src="/chat (1).svg" alt="Chat Icon" className="w-6 h-6" />
          <div>
            <p className="text-sm">Need Help</p>
            <h6 className="font-semibold text-lg leading-tight">(307) 555-0133</h6>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
