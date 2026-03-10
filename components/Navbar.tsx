"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PowerSync } from "./Logo";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full h-20 bg-background justify-between items-center px-4 md:px-8 shadow-md relative z-50">
      <div className="flex w-fit h-fit justify-center items-center py-4">
        <Link href="/">
          <Image src="/logo-removebg-preview.png" width={40} height={40} alt="Coderush Logo" className="w-10 h-10 mr-2" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center items-center gap-8 w-fit h-fit">
        <Link href="/about">
          <p className="text-text-primary font-inter font-semibold text-lg hover:text-secondary transition-colors cursor-pointer">About</p>
        </Link>
        <Link href="/team">
          <p className="text-text-primary font-inter font-semibold text-lg hover:text-secondary transition-colors cursor-pointer">Team</p>
        </Link>
        <Link href="/community">
          <p className="text-text-primary font-inter font-semibold text-lg hover:text-secondary transition-colors cursor-pointer">Community</p>
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-text-primary focus:outline-none cursor-pointer">
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-background border-t border-secondary/20 flex flex-col items-center gap-6 py-8 shadow-xl md:hidden">
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <p className="text-text-primary font-inter font-semibold text-xl hover:text-secondary transition-colors cursor-pointer">About</p>
          </Link>
          <Link href="/team" onClick={() => setIsOpen(false)}>
            <p className="text-text-primary font-inter font-semibold text-xl hover:text-secondary transition-colors cursor-pointer">Team</p>
          </Link>
          <Link href="/community" onClick={() => setIsOpen(false)}>
            <p className="text-text-primary font-inter font-semibold text-xl hover:text-secondary transition-colors cursor-pointer">Community</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
