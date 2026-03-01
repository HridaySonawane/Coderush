import React from "react";
import Link from "next/link";
import { PowerSync } from "./Logo";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex w-full h-20 bg-background justify-start items-center gap-8 px-8 shadow-md">
      <div className="flex w-fit h-fit justify-center items-center p-4 pr-0">
        <Link href="/">
          <Image src="/logo-removebg-preview.png" width={40} height={40} alt="Coderush Logo" className="w-10 h-10 mr-2" />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-8 w-fit h-fit">
        <Link href="/about">
          <p className="text-text-primary font-inter font-semibold text-lg hover:text-secondary transition-colors cursor-pointer">About</p>
        </Link>
        <Link href="/team">
          <p className="text-text-primary font-inter font-semibold text-lg hover:text-secondary transition-colors cursor-pointer">Team</p>
        </Link>
        <Link href="/community">
          <p className="text-text-primary font-inter font-semibold text-lg hover:text-secondary transition-colors cursor-pointer">Community</p>
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
