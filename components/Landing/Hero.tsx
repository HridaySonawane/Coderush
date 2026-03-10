"use client";

import { motion } from "framer-motion";
import React from "react";
import Button from "../Button";
import Link from "next/link";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const Hero = () => {
  return (
    <div className="flex flex-col w-full h-fit justify-center items-center gap-8 max-w-section mx-auto pt-6 md:pt-12">
      <div className="flex flex-col w-full h-fit justify-center items-center gap-4">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0, ease: EASE }}
          className="text-4xl md:text-5xl lg:text-[64px] text-text-primary font-sora font-bold text-center leading-[1.15]"
        >
          Building the Next Generation <br className="hidden md:block" /> of Innovators.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="w-full sm:w-[80%] lg:w-[60%] h-fit text-base md:text-lg leading-[1.6em] tracking-[-0.02em] text-text-secondary font-inter text-center"
        >
          A student-led tech community where ideas turn into projects, skills
          turn into impact, and beginners turn into builders.
        </motion.p>
      </div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
        className="flex flex-col sm:flex-row w-full h-fit justify-center items-center gap-3 sm:gap-4"
      >
        <Link href="https://chat.whatsapp.com/HRSV9dESR03KfIJfEwQXf3">
          <Button text="Join the club" variant="primary" />
        </Link>
        <Button text="Learn more" variant="secondary" />
      </motion.div>
    </div>
  );
};

export default Hero;
