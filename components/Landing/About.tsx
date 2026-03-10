"use client";

import Image from "next/image";
import React from "react";
import Badge from "../Badge";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full h-fit flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 overflow-visible max-w-280 px-4 sm:px-0 mx-auto">
      {/* Text Column */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-visible flex flex-col w-full lg:w-1/2 justify-center items-center gap-6"
      >
        <div className="absolute w-full h-full opacity-18 bg-primary blur-2xl rounded-full overflow-visible" />
        <h2 className="text-text-primary font-sora text-4xl lg:text-[64px] z-1 text-center">
          Who we are
        </h2>
        <div className="flex flex-wrap w-full h-fit justify-center items-center gap-3 lg:gap-6 z-1">
          {["Explore", "Collaborate", "Build"].map((item, index) => (
            <Badge key={index} text={item} />
          ))}
        </div>
        <p className="text-text-secondary font-inter text-base lg:text-lg w-full h-fit text-center z-1 px-2 lg:px-0">
          We&apos;re a student-led tech community driven by curiosity.
          <br className="hidden sm:block" /> A space to explore ideas, build projects, and grow together.
        </p>
        <div className="flex w-full h-fit justify-center items-center p-4 lg:p-3 border-2 border-secondary/40 rounded-xl inset-shadow-aboutbox bg-[#1C1C34]/60 z-1 mx-2 lg:mx-0">
          <p className="font-sora text-lg lg:text-xl w-full bg-linear-to-t from-secondary/90 to-text-secondary text-transparent bg-clip-text text-center">
            From beginners to experienced developers — if you love creating, you
            belong here.
          </p>
        </div>
      </motion.div>

      {/* Image Column */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-1/2"
      >
        <Image
          src="/about-image.png"
          alt="About Image"
          width={400}
          height={300}
          className="w-full h-64 sm:h-80 lg:h-117.5 object-cover rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default About;
