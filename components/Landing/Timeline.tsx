import React from "react";
import TimelineStep from "../TimelineStep";
import { title } from "process";

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
  return (
    <div className="w-full h-fit max-w-section flex flex-col justify-start items-center gap-6 max-w-280">
      <div className="w-full h-fit">
        <h2 className="text-text-primary font-sora font-semibold text-[40px] text-center w-full h-fit">
          How We Grow
        </h2>
      </div>
      {steps.map((step, index) => (
        <TimelineStep
          key={index}
          title={step.title}
          description={step.description}
          button={step.button}
        />
      ))}
      {/* <div className="w-full h-fit flex justify-center items-center gap-2.5">
      </div> */}
    </div>
  );
};

export default Timeline;
