import React from "react";
import Card from "../Card";
import { Bell, ChartLine, icons, Newspaper, Wallet } from "lucide-react";

const cards = [
  {
    title: "Build Projects",
    description:
      "Turn ideas into real-world applications through collaborative and hands-on development.",
    icon: Wallet,
  },
  {
    title: "Learn Together",
    description:
      "Grow alongside peers through shared knowledge, discussions, and guided learning.",
    icon: ChartLine,
  },
  {
    title: "Explore Domains",
    description:
      "Dive into diverse tech fields and discover what excites you the most.",
    icon: Bell,
  },
  {
    title: "Workshops & Sessions",
    description:
      "Interactive sessions and tech talks designed to make complex topics simple.",
    icon: Newspaper,
  },
];

const Inside = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full h-fit max-w-280">
      <div className="flex flex-col justify-center items-center gap-4.5 w-full h-fit">
        <h2 className="font-sora font-semibold text-[40px] text-text-primary">
          Our Mission
        </h2>
        <p className="font-inter text-base text-text-secondary w-full h-fit text-center">
          A space where ideas turn into projects and students grow through
          technology.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 w-full h-fit gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Inside;
