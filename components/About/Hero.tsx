import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col w-full h-fit justify-center items-center gap-9 py-6 max-w-section">
      <p className="w-fit h-fit text-[#F7F9FA]/50 text-sm font-inter">Home / About</p>
      <h1 className="text-[64px] text-text-primary font-sora font-bold text-center">
        About Coderush
      </h1>
      <p className="w-[60%] h-fit text-lg leading-[1.6em] tracking-[-0.02em] text-text-secondary font-inter text-center">
        We’re a student-led tech community focused on building, learning, and
        growing together.
      </p>
    </div>
  );
};

export default Hero;
