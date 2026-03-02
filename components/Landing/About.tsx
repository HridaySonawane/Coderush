import Image from "next/image";
import React from "react";
import Badge from "../Badge";

const About = () => {
  return (
    <div className="w-full h-fit flex justify-center items-center gap-6 overflow-visible max-w-280">
      <div className="relative overflow-visible flex flex-col w-1/2 justify-center items-center gap-6">
        <div className="absolute w-full h-full opacity-18 bg-primary blur-2xl rounded-full overflow-visible" />
        <h2 className="text-text-primary font-sora text-[64px] z-1">
          Who we are
        </h2>
        <div className="flex w-full h-fit justify-center items-center gap-6 z-1">
          {["Explore", "Collaborate", "Build"].map((item, index) => (
            <Badge key={index} text={item} />
          ))}
        </div>
        <p className="text-text-secondary font-inter text-lg w-full h-fit text-center z-1">
          We’re a student-led tech community driven by curiosity.
          <br /> A space to explore ideas, build projects, and grow together.
        </p>
        <div className="flex w-full h-fit justify-center items-center p-3 border-2 border-secondary/40 rounded-xl inset-shadow-aboutbox bg-[#1C1C34]/60 z-1">
          <p className="font-sora text-xl w-full bg-linear-to-t from-secondary/90 to-text-secondary text-transparent bg-clip-text text-center">
            From beginners to experienced developers — if you love creating, you
            belong here.
          </p>
        </div>
      </div>
      <Image
        src="/about-image.png"
        alt="About Image"
        width={400}
        height={300}
        className="w-1/2 h-117.5 object-cover rounded-lg"
      />
    </div>
  );
};

export default About;
