"use client"

import React from "react";
import { PowerSync } from "./Landing/Logo";
import { Facebook, Instagram, Linkedin, X, Youtube, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: X, href: "#", label: "X" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#050816] pt-20 pb-8 overflow-hidden">
      {/* Top Blue Shadow Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.8),0_0_40px_rgba(37,99,235,0.4)]" />

      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6D28D9]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <PowerSync className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-sora font-bold text-xl text-white tracking-tight">
                CodeRush<span className="text-[#6D28D9]">-X</span>
              </span>
            </Link>
            <p className="font-inter text-gray-500 text-sm leading-relaxed max-w-xs">
              A student-driven tech community building the next generation of
              innovators through real-world projects and collaboration.
            </p>
            <div className="flex gap-3 mt-2">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-9 h-9 rounded-lg bg-[#0c1226]/80 border border-[#6D28D9]/20 flex items-center justify-center text-gray-500 hover:text-[#6D28D9] hover:border-[#6D28D9]/50 hover:shadow-[0_0_15px_rgba(109,40,217,0.3)] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <h4 className="font-sora font-semibold text-sm text-white uppercase tracking-wider">
              Navigation
            </h4>
            {["Home", "About", "Team", "Community"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="font-inter text-sm text-gray-500 hover:text-[#6D28D9] transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Resources */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="font-sora font-semibold text-sm text-white uppercase tracking-wider">
              Resources
            </h4>
            {["Learning Resources", "Blog", "Workshops", "FAQ"].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-inter text-sm text-gray-500 hover:text-[#6D28D9] transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="font-sora font-semibold text-sm text-white uppercase tracking-wider">
              Contact Us
            </h4>
            <p className="font-inter text-sm text-gray-500">
              You can reach us at
            </p>
            <a
              href="mailto:contact@coderush.com"
              className="font-inter text-sm text-[#6D28D9] hover:text-[#8B5CF6] transition-colors duration-300"
            >
              contact@coderush.com
            </a>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="neon-divider w-full mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-gray-600">
            © {new Date().getFullYear()} CodeRush-X. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-inter text-xs text-gray-600 hover:text-gray-400 transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
