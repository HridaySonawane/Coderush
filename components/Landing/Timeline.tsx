"use client";

import React, { useRef } from "react";
import TimelineStep from "../TimelineStep";
import { title } from "process";
import { useScroll } from "framer-motion";

const steps = [
  {
    title: "Join the Community",
    description:
      "Meet like-minded tech enthusiasts and become part of the club.",
    button: true,
  },
  {
    title: "Learn & Explore",
    description: "Attend sessions, workshops, and collaborative study groups.",
    button: false,
  },
  {
    title: "Build Together",
    description: "Work on projects, hackathons, and real-world challenges.",
    button: false,
  },
  {
    title: "Launch & Lead",
    description: "Showcase your work, mentor others, and take initiative.",
    button: false,
  },
];

const Timeline = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  
  return (
    <div ref={ref} className="w-full h-fit max-w-section flex flex-col justify-start items-center gap-6 max-w-280">
      <div className="w-full h-fit">
        <h2 className="text-text-primary font-sora font-semibold text-[40px] text-center w-full h-fit">
          How We Grow
        </h2>
      </div>
      {steps.map((step, index) => {
        const start = index / steps.length;
        const end = (index + 1) / steps.length;

        return (
          <TimelineStep
            key={index}
            step={index + 1}
            title={step.title}
            description={step.description}
            button={step.button}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
      {/* <div className="w-full h-fit flex justify-center items-center gap-2.5">
      </div> */}
    </div>
  );
};

export default Timeline;
