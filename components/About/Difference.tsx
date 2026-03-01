import React from "react";

const Difference = () => {
  return (
    <div className="w-full h-fit flex justify-center items-center gap-6 p-4">
      <div className="w-1/2 h-fit flex flex-col justify-center items-center gap-2.5 rounded-lg">
        <h2 className=" w-fit h-fit text-text-primary font-sora font-semibold text-[40px]">
          What Makes Us Different
        </h2>
        <p className="w-full h-fit text-text-secondary font-inter text-center">
          We’re not built like traditional student clubs.Our structure is driven
          by action, ownership, and real-world execution.
        </p>
      </div>
      <div className="w-1/2 h-93.75 grid grid-cols-5 grid-rows-3 gap-x-4 gap-y-6 p-4 rounded-lg">
        <div className="flex col-span-1 row-span-1 w-full h-full justify-center items-center gap-2.5 inset-shadow-difference rounded-3xl">
          <h2 className=" w-fit h-fit text-text-primary font-sora font-semibold text-[40px]">
            01
          </h2>
        </div>
        <div className="flex flex-col col-span-4 row-span-1 w-full h-full justify-center items-start gap-2.5">
          <h3 className="w-fit h-fit text-text-primary font-sora font-medium text-[24px]">
            Peer-Led Learning
          </h3>
          <p className="w-full h-fit text-text-secondary font-inter text-[16px]">
            Students teach students. Knowledge flows horizontally, not top-down.
          </p>
        </div>
        <div className="flex col-span-1 row-span-1 w-full h-full justify-center items-center gap-2.5 inset-shadow-difference rounded-3xl">
          <h2 className=" w-fit h-fit text-text-primary font-sora font-semibold text-[40px]">
            02
          </h2>
        </div>
        <div className="flex flex-col col-span-4 row-span-1 w-full h-full justify-center items-start gap-2.5">
          <h3 className="w-fit h-fit text-text-primary font-sora font-medium text-[24px]">
            Project-First Approach
          </h3>
          <p className="w-full h-fit text-text-secondary font-inter text-[16px]">
            We prioritize building real-world projects over passive sessions.
          </p>
        </div>
        <div className="flex col-span-1 row-span-1 w-full h-full justify-center items-center gap-2.5 inset-shadow-difference rounded-3xl">
          <h2 className=" w-fit h-fit text-text-primary font-sora font-semibold text-[40px]">
            03
          </h2>
        </div>
        <div className="flex flex-col col-span-4 row-span-1 w-full h-full justify-center items-start gap-2.5">
          <h3 className="w-fit h-fit text-text-primary font-sora font-medium text-[24px]">
            Open Collaboration
          </h3>
          <p className="w-full h-fit text-text-secondary font-inter text-[16px]">
            Anyone can contribute ideas, start initiatives, and take ownership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Difference;
