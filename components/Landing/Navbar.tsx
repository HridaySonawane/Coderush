"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PowerSync } from "./Logo";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "#", label: "Community" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050816]/80 backdrop-blur-xl border-b border-[#6D28D9]/20 shadow-[0_4px_30px_rgba(109,40,217,0.1)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 md:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <PowerSync className="w-9 h-9 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#6D28D9]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-sora font-bold text-xl text-white tracking-tight">
              CodeRush<span className="text-[#6D28D9]">-X</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <div className="relative px-5 py-2.5 rounded-xl transition-all duration-300 group">
                    <span
                      className={`font-inter font-medium text-sm transition-colors duration-300 ${
                        isActive
                          ? "text-[#6D28D9]"
                          : "text-gray-400 group-hover:text-white"
                      }`}
                    >
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#6D28D9] rounded-full shadow-[0_0_10px_rgba(109,40,217,0.6)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2.5 rounded-xl bg-[#6D28D9]/10 border border-[#6D28D9]/40 text-[#6D28D9] font-inter font-semibold text-sm hover:bg-[#6D28D9]/20 hover:border-[#6D28D9]/60 hover:shadow-[0_0_20px_rgba(109,40,217,0.3)] transition-all duration-300">
              Join Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-24 bg-[#050816]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-2xl font-sora font-semibold transition-colors ${
                      pathname === link.href ? "text-[#6D28D9]" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 px-8 py-3 rounded-xl bg-[#6D28D9] text-white font-inter font-semibold hover:shadow-[0_0_30px_rgba(109,40,217,0.4)] transition-all duration-300"
              >
                Join Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
