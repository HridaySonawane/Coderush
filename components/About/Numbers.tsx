import React from "react";

const Numbers = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-12 p-4">
      <h2 className="w-fit h-fit text-text-primary font-sora font-semibold text-[40px]">
        By the numbers
      </h2>
      <div className="w-full h-full grid grid-cols-6 grid-rows-3 gap-6">
        <div className="flex flex-col w-full h-full justify-center items-start gap-2.5 p-9 rounded-3xl col-span-3 row-span-2 bg-[#08080F]">
          <h2 className="w-fit h-fit text-text-primary font-sora font-semibold text-[40px]">
            500+
          </h2>
          <h3 className="w-fit h-fit text-text-primary font-sora font-medium text-[24px]">
            Active Members
          </h3>
        </div>
        <div className="flex flex-col w-full h-full justify-center items-start gap-2.5 p-9 rounded-3xl col-span-3 row-span-1 bg-[#08080F]">
          <h2 className="w-fit h-fit text-text-primary font-sora font-semibold text-[40px]">
            40+
          </h2>
          <h3 className="w-fit h-fit text-text-primary font-sora font-medium text-[24px]">
            Events
          </h3>
        </div>
        <div className="flex flex-col w-full h-full justify-center items-start gap-2.5 p-9 rounded-3xl col-span-3 row-span-1 bg-[#08080F]">
          <h2 className="w-fit h-fit text-text-primary font-sora font-semibold text-[40px]">
            20+
          </h2>
          <h3 className="w-fit h-fit text-text-primary font-sora font-medium text-[24px]">
            Projects Built
          </h3>
        </div>
        <div className="flex flex-col w-full h-full justify-center items-start gap-2.5 p-9 rounded-3xl col-span-2 row-span-1 bg-[#08080F]">
          <h2 className="w-fit h-fit text-text-primary font-sora font-semibold text-[40px]">
            10+
          </h2>
          <h3 className="w-fit h-fit text-text-primary font-sora font-medium text-[24px]">
            Workshops Conducted
          </h3>
        </div>
        <div className="flex flex-col w-full h-full justify-center items-start gap-2.5 p-9 rounded-3xl col-span-2 row-span-1 bg-[#08080F]">
          <h2 className="w-fit h-fit text-text-primary font-sora font-semibold text-[40px]">
            5+
          </h2>
          <h3 className="w-fit h-fit text-text-primary font-sora font-medium text-[24px]">
            Tech Domain
          </h3>
        </div>
        <div className="flex flex-col w-full h-full justify-center items-start gap-2.5 p-9 rounded-3xl col-span-2 row-span-1 bg-[#08080F]">
          <h2 className="w-fit h-fit text-text-primary font-sora font-semibold text-[40px]">
            3
          </h2>
          <h3 className="w-fit h-fit text-text-primary font-sora font-medium text-[24px]">
            Core Team
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
