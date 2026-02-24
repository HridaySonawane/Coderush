import React from "react";
import { PowerSync } from "./Logo";

const Navbar = () => {
  return (
    <div className="flex w-full h-fit bg-background justify-start items-center gap-5">
      <div className="flex w-fit h-fit justify-center items-center p-2.5 pr-0">
        <PowerSync className="w-6 h-6" />
      </div>
      <div className="flex justify-center items-center gap-5 w-fit h-fit">
        <p className="text-text-primary font-inter font-medium text-sm">About</p>
        <p className="text-text-primary font-inter font-medium text-sm">Team</p>
        <p className="text-text-primary font-inter font-medium text-sm">Community</p>
      </div>
    </div>
  );
};

export default Navbar;
