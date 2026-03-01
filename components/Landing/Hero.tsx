"use client";

import { motion } from "framer-motion";
import { UserCircleIcon } from "lucide-react";
import React, { use } from "react";

const lines = ["Building the Next Generation", "of Innovators."];

const Hero = () => {
  return (
    <div className="flex flex-col w-full h-fit justify-center items-center gap-6 max-w-section">
      <div className="flex flex-col w-full h-fit justify-center items-center gap-2.5">
        {/* <h1 className="text-[64px] text-text-primary font-sora font-bold text-center">
          Building the Next Generation of Innovators.
        </h1> */}
        <h1 className="text-[64px] text-text-primary font-sora font-bold text-center">
          {lines.map((line, index) => (
            <div key={index} className="overflow-hidden">
              <motion.div
                initial={{
                  y: 40,
                  opacity: 0,
                  filter: "blur(10px)",
                  scale: 0.98,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.div>
            </div>
          ))}
        </h1>

        <p className="w-[60%] h-fit text-lg leading-[1.6em] tracking-[-0.02em] text-text-secondary font-inter text-center">
          A student-led tech community where ideas turn into projects, skills
          turn into impact, and beginners turn into builders.
        </p>
      </div>
      <div className="flex w-full h-fit justify-center items-center gap-4">
        <button>Join the club</button>
        <button>Learn more</button>
      </div>
    </div>
  );
};

export default Hero;
