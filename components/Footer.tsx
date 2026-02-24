import React from "react";
import { PowerSync } from "./Landing/Logo";
import { Facebook, Instagram, Linkedin, X, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-fit flex justify-between items-start px-10 pb-24">
      <div className="flex flex-col w-full h-fit justify-start items-start gap-14">
        <div className="flex flex-col w-full h-fit justify-center items-center gap-12">
          <div className="flex flex-col w-full h-fit  justify-start items-start gap-4">
            <div className="flex w-fit h-fit justify-start items-center gap-2">
              <PowerSync className="w-5 h-5" />
              <p className="w-fit h-fit font-sora text-text-primary text-[24px]">
                CodeRush - X
              </p>
            </div>
            <p className="w-fit h-fit font-inter text-text-secondary text-[16px]">
              Small Description
            </p>
          </div>
          <div className="flex w-full h-fit  justify-start items-start gap-2.5">
            <div className="w-fit h-fit flex justify-center items-center gap-2.5 bg-linear-to-b from-primary from-[-42%] to-secondary to-127% rounded-md p-2">
              <Linkedin className="w-4 h-4 text-text-primary" />
            </div>
            <div className="w-fit h-fit flex justify-center items-center gap-2.5 bg-linear-to-b from-primary from-[-42%] to-secondary to-127% rounded-md p-2">
              <X className="w-4 h-4 text-text-primary" />
            </div>
            <div className="w-fit h-fit flex justify-center items-center gap-2.5 bg-linear-to-b from-primary from-[-42%] to-secondary to-127% rounded-md p-2">
              <Instagram className="w-4 h-4 text-text-primary" />
            </div>
            <div className="w-fit h-fit flex justify-center items-center gap-2.5 bg-linear-to-b from-primary from-[-42%] to-secondary to-127% rounded-md p-2">
              <Facebook className="w-4 h-4 text-text-primary" />
            </div>
            <div className="w-fit h-fit flex justify-center items-center gap-2.5 bg-linear-to-b from-primary from-[-42%] to-secondary to-127% rounded-md p-2">
              <Youtube className="w-4 h-4 text-text-primary" />
            </div>
          </div>
        </div>

        <p className="w-fit h-fit text-center font-inter text-text-secondary text-[14px]">
          © Copyright 2025 CodeRush - All rights reserved.
        </p>
      </div>

      <div className="flex w-full h-fit justify-start items-start gap-12">
        <div className="flex flex-col justify-center items-start w-full h-fit gap-5">
          <p className="w-fit h-fit font-sora text-xl text-text-secondary">
            Navigation
          </p>
          <Link href="/" className="text-secondary font-inter text-sm">
            Home
          </Link>
          <Link href="/about" className="text-secondary font-inter text-sm">
            About
          </Link>
          <Link href="/team" className="text-secondary font-inter text-sm">
            Team
          </Link>
          <Link href="/" className="text-secondary font-inter text-sm">
            Community
          </Link>
        </div>
        <div className="flex flex-col justify-center items-start w-full h-fit gap-5">
          <p className="w-fit h-fit font-sora text-xl text-text-secondary">
            Resources
          </p>
          <Link href="/" className="text-secondary font-inter text-sm">
            Learning Resources
          </Link>
          <Link href="/" className="text-secondary font-inter text-sm">
            Blog
          </Link>
          <Link href="/" className="text-secondary font-inter text-sm">
            Workshop
          </Link>
          <Link href="/" className="text-secondary font-inter text-sm">
            FAQ
          </Link>
        </div>
        <div className="flex flex-col justify-center items-start w-full h-fit gap-5">
          <p className="w-fit h-fit font-sora text-xl text-text-secondary">
            Contact Us
          </p>
          <Link href="/" className="text-secondary font-inter text-sm">
            You can reach us at
          </Link>
          <Link href="mailto:contact@coderush.com" className="text-secondary font-inter text-sm">
            contact@coderush.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
