import React from "react";
import Button from "./Button";

const TimelineStep = ({
  title,
  description,
  button,
  step
}: {
  title: string;
  description: string;
  button: boolean;
  step: number
}) => {
  return (
    <div className="w-full h-fit flex justify-center items-center gap-2.5">
      {/* Heading */}
      <div className="relative flex flex-col w-full h-fit justify-center items-center gap-2.5">
        <p className="absolute top-15.5 bottom-15.25 right-24.5 left-24.75 m-auto w-fit h-fit font-sora font-medium text-[220px] bg-clip-text text-transparent bg-linear-to-t from-secondary from-42% to-primary blur-[3px] opacity-30">0{step}</p>
        <h2 className="w-fit h-fit font-sora font-semibold text-[40px] text-text-primary rounded-md p-2 text-center z-1">
          {title}
        </h2>
        {button == true ? <Button text="Lets Join" variant="primary"/> : null}
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
