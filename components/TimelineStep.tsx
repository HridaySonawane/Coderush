"use client";

import React from "react";
import Button from "./Button";
import { motion, MotionValue, useTransform } from "framer-motion";
import Link from "next/link";

const TimelineStep = ({
  title,
  description,
  button,
  step,
  progress,
  start,
  end,
}: {
  title: string;
  description: string;
  button: boolean;
  step: number;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) => {
  const height = useTransform(progress, [start, end], ["0%", "100%"]);

  const localProgress = useTransform(progress, [start, end], [0, 1], {
    clamp: true,
  });

  const opacity = useTransform(localProgress, [0, 0.3], [0, 1]);
  const y = useTransform(localProgress, [0, 1], [40, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="relative w-full h-fit flex flex-col md:flex-row justify-center items-center gap-4 md:gap-2.5 py-4 md:py-0"
    >
      {/* Background Step Number */}
      <p className="absolute inset-0 m-auto w-fit h-fit font-sora font-bold text-[100px] sm:text-[160px] md:text-[220px] bg-clip-text text-transparent bg-linear-to-t from-secondary from-42% to-primary blur-[2px] md:blur-[3px] opacity-20 select-none pointer-events-none text-center leading-none">
        0{step}
      </p>

      {/* Title + Button — Left column on desktop, top on mobile */}
      <div className="relative flex flex-col w-full md:w-1/3 h-fit justify-center items-center gap-3 z-10">
        <h2 className="w-fit h-fit font-sora font-semibold text-2xl sm:text-3xl md:text-[40px] text-text-primary text-center leading-tight px-4 md:px-0">
          {title}
        </h2>
        {button === true && (
          <Link href="https://chat.whatsapp.com/HRSV9dESR03KfIJfEwQXf3" className="z-1">
            <Button text="Lets Join" variant="primary" />
          </Link>
        )}
      </div>

      {/* Progress Bar — center column, hidden on mobile */}
      <div className="hidden md:flex w-35.5 h-96.75 flex-col justify-start items-center gap-3 z-10">
        <div className="w-11 h-11 bg-primary/40 rounded-full border-[3px] border-primary" />
        <div className="w-1.5 h-full relative">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary/30" />
          <motion.div
            style={{ height }}
            className="absolute top-0 left-0 w-1.5 bg-white"
          />
        </div>
      </div>

      {/* Description — Right column on desktop, below title on mobile */}
      <div className="relative w-full md:w-1/3 h-fit flex flex-col justify-center items-center gap-2.5 z-10">
        <p className="w-full h-fit font-inter text-base md:text-lg text-text-secondary text-center px-6 md:px-0">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default TimelineStep;
