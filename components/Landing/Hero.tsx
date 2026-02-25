"use client"

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-10 pt-28 pb-20 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#6D28D9]/15 blur-[180px] rounded-full pointer-events-none animate-radial-breathe" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#6D28D9]/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#6D28D9]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Big Background Text */}
      <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 flex justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[80px] md:text-[150px] lg:text-[200px] font-extrabold text-white/[0.015] tracking-[0.15em] font-sora whitespace-nowrap">
          CODERUSH
        </h1>
      </div>

      {/* Radial light behind heading */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] radial-glow pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6D28D9]/30 bg-[#6D28D9]/10 mb-8"
        >
          <Terminal className="w-3.5 h-3.5 text-[#6D28D9]" />
          <span className="font-inter text-xs text-[#6D28D9] font-medium tracking-wider uppercase">
            Developer Community
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-sora leading-[1.1] tracking-tight"
        >
          Building the Next{" "}
          <br className="hidden sm:block" />
          Generation of{" "}
          <span className="text-[#6D28D9] animate-text-glow inline-block">
            Innovators
          </span>
          <span className="text-[#6D28D9]">.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 md:mt-8 text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-inter leading-relaxed"
        >
          A student-led tech community where ideas turn into projects, skills
          turn into impact, and beginners turn into builders.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#6D28D9] text-white font-inter font-semibold text-sm hover:shadow-[0_0_40px_rgba(109,40,217,0.5)] transition-all duration-300"
          >
            Join the Club
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-3.5 rounded-2xl border border-[#6D28D9]/40 text-gray-300 font-inter font-semibold text-sm hover:bg-[#6D28D9]/10 hover:border-[#6D28D9]/60 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Neon Divider at bottom */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="neon-divider w-full max-w-2xl mt-20"
      />

      {/* Floating tech decorations */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-2 h-2 rounded-full bg-[#6D28D9]/40 blur-[1px]"
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-[15%] w-1.5 h-1.5 rounded-full bg-[#6D28D9]/30 blur-[1px]"
      />
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/3 left-[20%] w-1 h-1 rounded-full bg-[#6D28D9]/50"
      />
    </section>
  );
};

export default Hero;
