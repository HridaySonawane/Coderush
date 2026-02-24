import React from "react";
import Link from "next/link";
import { PowerSync } from "./Logo";

const Navbar = () => {
  return (
    <div className="flex w-full h-20 bg-background justify-start items-center gap-10 px-8 shadow-md">
      <div className="flex w-fit h-fit justify-center items-center p-4 pr-0">
        <Link href="/">
          <PowerSync className="w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity" />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-10 w-fit h-fit">
        <Link href="/about">
          <p className="text-text-primary font-inter font-semibold text-lg hover:text-blue-500 transition-colors cursor-pointer">About</p>
        </Link>
        <Link href="/team">
          <p className="text-text-primary font-inter font-semibold text-lg hover:text-blue-500 transition-colors cursor-pointer">Team</p>
        </Link>
        <p className="text-text-primary font-inter font-semibold text-lg hover:text-blue-500 transition-colors cursor-pointer">Community</p>
      </div>
    </div>
  );
};

export default Navbar;
