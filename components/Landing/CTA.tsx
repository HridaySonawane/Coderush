import React from "react";

const CTA = () => {
  return (
    <div className="relative w-full h-fit flex flex-col justify-center items-center gap-6 px-12">
      <p className="absolute top-0 m-auto bottom-14.25 right-0 left-0 w-full h-fit font-sora font-extrabold text-[328px] text-center bg-clip-text text-transparent bg-linear-to-t from-secondary from-42% to-primary blur-xs mask-alpha mask-b-from-black mask-b-from-0% mask-b-to-transparent mask-b-to-75%">
        2026
      </p>
      <h2 className="w-fit h-fit font-sora font-semibold text-[40px] text-text-primary z-1">
        We’re Just Getting Started
      </h2>
      <div className="w-full h-fit flex flex-col items-center justify-center gap-6 z-1">
        <h1 className="w-fit h-fit font-sora font-extrabold text-[84px] text-text-primary uppercase text-shadow-[0_0px_12px_rgba(247,249,250,0.5)]">
          the Beginning
        </h1>
        <p className="w-fit h-fit font-inter text-2xl text-text-secondary text-center">
          This is the start of something bigger. We’re building a <br /> strong
          tech culture on campus — and you can be part of it.
        </p>
        <button>Join Us</button>
      </div>
    </div>
  );
};

export default CTA;
