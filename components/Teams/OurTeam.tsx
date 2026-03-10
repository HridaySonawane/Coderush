import React from "react";
import Card from "../Card";
import TeammateCard from "../TeammateCard";
import { div } from "framer-motion/client";
import Button from "../Button";

const cards: any[] = [
  {
    name: "Snighdha",
    description:
      "Turn ideas into real-world applications through collaborative and hands-on development.",
    role: "President",
  },
  {
    name: "Snighdha",
    description:
      "Turn ideas into real-world applications through collaborative and hands-on development.",
    role: "President",
  },
  {
    name: "Snighdha",
    description:
      "Turn ideas into real-world applications through collaborative and hands-on development.",
    role: "President",
  },
  {
    name: "Snighdha",
    description:
      "Turn ideas into real-world applications through collaborative and hands-on development.",
    role: "President",
  },
  {
    name: "Snighdha",
    description:
      "Turn ideas into real-world applications through collaborative and hands-on development.",
    role: "President",
  },
  {
    name: "Snighdha",
    description:
      "Turn ideas into real-world applications through collaborative and hands-on development.",
    role: "President",
  },
];

const OurTeam = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full h-fit max-w-280">
      <div className="flex flex-col justify-center items-center gap-4.5 w-full h-fit">
        <h2 className="font-sora font-semibold text-[40px] text-text-primary">
          Our Team
        </h2>
        <p className="font-inter text-base text-text-secondary w-full h-fit text-center">
          Meet the talented student who lead our club and organize our
          activities
        </p>
      </div>
      {cards.length == 0 ? (
        <div className="flex flex-col justify-center items-center w-full h-full gap-6">
          <p className="font-sora text-[28px] font-semibold text-text-primary w-full h-full text-center">
            Looks like our team is currently in stealth mode 🕵️‍♂️✨ <br /> Either
            they’re planning something epic… or we forgot to add them 😅 <br />
            You can join our community to get more updates 🤗
          </p>
          <Button text="Join the community" variant="primary"/>
        </div>
      ) : (
        <div className="grid grid-cols-3 grid-rows-2 w-full h-fit gap-6 p-3">
          {cards.map((card, index) => (
            <TeammateCard
              key={index}
              name={card.name}
              role={card.role}
              description={card.description}
              icon={undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default OurTeam;
