import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col w-full h-fit justify-center items-center gap-6 max-w-section">
      <div className="flex flex-col w-full h-fit justify-center items-center gap-2.5">
        <h1 className="text-[64px] text-text-primary font-sora font-bold text-center">
          Building the Next Generation of Innovators.
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
