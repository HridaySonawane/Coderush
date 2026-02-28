import React from "react";

const CTA = () => {
  return (
    <div className="relative w-full h-fit flex flex-col justify-center items-center gap-6 px-12">
      <p className="absolute top-0 bottom-14.25 right-21.75 left-21.75 w-fit h-fit font-sora font-extrabold text-[328px]">
        2026
      </p>
      <h2 className="w-fit h-fit font-sora font-semibold text-[40px] text-text-primary">
        We’re Just Getting Started
      </h2>
      <div className="w-full h-fit flex flex-col items-center justify-center gap-6">
        <h1 className="w-fit h-fit font-sora font-extrabold text-[84px] text-text-primary uppercase">
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
