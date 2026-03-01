"use client";

import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <div className="relative flex flex-col w-full h-fit justify-center items-center gap-9 py-6 max-w-section">
      <motion.h1 initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 0.75, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }} className="w-fit h-fit absolute -top-9 -bottom-9 mx-auto bg-clip-text bg-linear-to-t from-secondary form-42% to-primary blur-xs opacity-75 text-transparent p-0 leading-[1.2em] text-[262px] font-extrabold uppercase mask-alpha mask-b-from-black mask-b-from-0% mask-b-to-transparent mask-b-to-90%">
        Connect
      </motion.h1>
      <p className="w-fit h-fit text-[#F7F9FA]/50 text-sm font-inter z-1">
        Home / Community
      </p>
      <h1 className="text-[64px] text-text-primary font-sora font-bold text-center z-1">
        Where Builders Connect
      </h1>
      <p className="w-[60%] h-fit text-lg leading-[1.6em] tracking-[-0.02em] text-text-secondary font-inter text-center z-1">
        More than projects. More than code. <br />
        This is where ideas meet people.
      </p>
    </div>
  );
};

export default Hero;
