import { title } from "process";
import React from "react";
import Card from "../Card";

const cards = [
  {
    title: "Build Projects",
    description:
      "Turn ideas into real-world applications through collaborative and hands-on development.",
  },
  {
    title: "Learn Together",
    description:
      "Grow alongside peers through shared knowledge, discussions, and guided learning.",
  },
  {
    title: "Explore Domains",
    description:
      "Dive into diverse tech fields and discover what excites you the most.",
  },
  {
    title: "Workshops & Sessions",
    description:
      "Interactive sessions and tech talks designed to make complex topics simple.",
  },
  {
    title: "Workshops & Sessions",
    description:
      "Interactive sessions and tech talks designed to make complex topics simple.",
  },
  {
    title: "Innovation Culture",
    description:
      "Experiment freely, prototype boldly, and build solutions to real problems.",
  },
];

const Mission = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full h-fit max-w-section">
      <div className="flex flex-col justify-center items-center gap-4.5 w-full h-fit">
        <h2 className="font-sora font-semibold text-[40px] text-text-primary">
          Our Mission
        </h2>
        <p className="font-inter text-base text-text-secondary w-full h-fit text-center">
          A space where ideas turn into projects and students grow through
          technology.
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 w-full h-fit gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            icon={undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default Mission;
