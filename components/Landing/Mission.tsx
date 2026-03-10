"use client";

import React from "react";
import Card from "../Card";
import { motion } from "framer-motion";
import { Bell, ChartLine, Newspaper, Trophy, UserCheck, Wallet } from "lucide-react";

const cards = [
  {
    title: "Build Projects",
    description:
      "Turn ideas into real-world applications through collaborative and hands-on development.",
    icon: Wallet
  },
  {
    title: "Learn Together",
    description:
      "Grow alongside peers through shared knowledge, discussions, and guided learning.",
    icon: ChartLine
  },
  {
    title: "Explore Domains",
    description:
      "Dive into diverse tech fields and discover what excites you the most.",
    icon: Bell
  },
  {
    title: "Workshops & Sessions",
    description:
      "Interactive sessions and tech talks designed to make complex topics simple.",
    icon: Newspaper
  },
  {
    title: "Hackathons & Challenges",
    description:
      "Compete, collaborate, and innovate through internal hackathons and coding competitions that sharpen your skills.",
    icon: Trophy
  },
  {
    title: "Innovation Culture",
    description:
      "Experiment freely, prototype boldly, and build solutions to real problems.",
    icon: UserCheck
  },
];

const Mission = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-6 w-full h-fit max-w-280 mx-auto z-0 py-10">
      {/* Radial Purple Glow Background */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#895BF5] opacity-20 md:opacity-[0.15] blur-[100px] md:blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="flex flex-col justify-center items-center gap-4.5 w-full h-fit">
        <h2 className="font-sora font-bold text-3xl md:text-[40px] text-[#F9FAFB] text-center px-4 md:px-0">
          Our Mission
        </h2>
        <p className="font-inter text-base md:text-lg text-[#9CA3AF] w-full px-6 md:px-0 h-fit text-center">
          A space where ideas turn into projects and students grow through
          technology.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-fit gap-6 px-4 lg:px-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Mission;
