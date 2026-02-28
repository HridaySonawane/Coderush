import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col w-full h-fit justify-center items-center gap-9 py-6 max-w-section">
      <p className="w-fit h-fit text-[#F7F9FA]/50 text-sm font-inter">
        Home / About
      </p>
      <h1 className="text-[64px] text-text-primary font-sora font-bold text-center">
        Meet the Team behind <br />{" "}
        <span className="text-secondary text-8xl font-extrabold italic">
          Coderush - X
        </span>
      </h1>
      <p className="w-[60%] h-fit text-lg leading-[1.6em] tracking-[-0.02em] text-text-secondary font-inter text-center">
        Builders, Organizers, Designers, Engineers, <br />
        Every project starts with people.
      </p>
    </div>
  );
};

export default Hero;
