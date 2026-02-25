import React from "react";

const TimelineStep = ({
  title,
  description,
  button,
}: {
  title: string;
  description: string;
  button: boolean;
}) => {
  return (
    <div className="w-full h-fit flex justify-center items-center gap-2.5">
      {/* Heading */}
      <div className="flex flex-col w-full h-fit justify-center items-center gap-2.5">
        <h2 className="w-fit h-fit font-sora font-semibold text-[40px] text-text-primary rounded-md p-2 text-center">
          {title}
        </h2>
        {button == true ? <button>Join Us</button> : <button>Click me</button>}
      </div>

      {/* Progress Bar */}
      <div className="w-35.5 h-96.75 flex flex-col justify-start items-center gap-3 ">
        <div className="w-11 h-11 bg-primary/40 rounded-full border-[3px] border-primary" />
        <div className="w-1.5 h-full relative">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary/30" />
          <div className="absolute top-0 left-0 w-1.5 h-full bg-white" />
        </div>
      </div>

      {/* description */}
      <div className="w-full h-full flex flex-col justify-center items-center gap-2.5">
        <p className="w-full h-fit font-inter text-lg text-text-secondary text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelineStep;
