"use client";

import React from "react";
import Link from "next/link";
import Button from "../Button";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="relative w-full h-fit flex flex-col justify-center items-center gap-6 px-4 sm:px-8 md:px-12 py-16 md:py-20 overflow-hidden max-w-280 mx-auto">
      {/* Giant background "2026" text */}
      <motion.p
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/2 -translate-y-1/2 left-0 right-0 m-auto w-full h-fit font-sora font-extrabold text-[80px] sm:text-[150px] md:text-[240px] lg:text-[328px] text-center bg-clip-text text-transparent bg-linear-to-t from-secondary from-42% to-primary blur-xs mask-alpha mask-b-from-black mask-b-from-0% mask-b-to-transparent mask-b-to-75% select-none pointer-events-none leading-none"
      >
        2026
      </motion.p>

      {/* Content */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-fit h-fit font-sora font-semibold text-xl sm:text-2xl md:text-[40px] text-text-primary z-10 text-center"
      >
        We&apos;re Just Getting Started
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-fit flex flex-col items-center justify-center gap-4 md:gap-6 z-10"
      >
        <h1 className="w-fit h-fit font-sora font-extrabold text-3xl sm:text-5xl md:text-[84px] text-text-primary uppercase text-shadow-[0_0px_12px_rgba(247,249,250,0.5)] text-center leading-tight">
          the Beginning
        </h1>
        <p className="w-full sm:w-[85%] md:w-[70%] h-fit font-inter text-base sm:text-lg md:text-2xl text-text-secondary text-center">
          This is the start of something bigger. We&apos;re building a strong
          tech culture on campus — and you can be part of it.
        </p>
        <Link href="https://chat.whatsapp.com/HRSV9dESR03KfIJfEwQXf3">
          <Button text="Join Us" variant="primary" />
        </Link>
      </motion.div>
    </div>
  );
};

export default CTA;
