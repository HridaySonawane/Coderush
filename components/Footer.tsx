import React from "react";
import { PowerSync } from "./Logo";
import { Facebook, Instagram, Linkedin, MessageCircleCode, Twitter, X, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-fit flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0 px-6 md:px-10 pb-24">
      <div className="flex flex-col w-full h-fit justify-start items-start gap-10 md:gap-14">
        <div className="flex flex-col w-full h-fit justify-center items-center gap-12">
          <div className="flex flex-col w-full h-fit  justify-start items-start gap-4">
            <div className="flex w-fit h-fit justify-start items-center gap-2">
              <Image src="/logo-removebg-preview.png" width={40} height={40} alt="Coderush Logo" className="w-10 h-10 mr-2" />
              <p className="w-fit h-fit font-sora font-bold text-text-primary text-[24px]">
                CodeRush - X
              </p>
            </div>
            <p className="w-fit h-fit font-inter text-text-secondary text-[16px]">
              Building skills. Creating impact. Growing together.
            </p>
          </div>
          <div className="flex w-full h-fit  justify-start items-start gap-2.5">
            <div className="w-fit h-fit flex justify-center items-center gap-2.5 bg-linear-to-b from-primary from-[-42%] to-secondary to-127% rounded-md p-2">
              <Link href="https://www.linkedin.com/company/coderushx-community">
                <Linkedin className="w-6 h-6 text-text-primary" />
              </Link>
            </div>
            {/* <div className="w-fit h-fit flex justify-center items-center gap-2.5 bg-linear-to-b from-primary from-[-42%] to-secondary to-127% rounded-md p-2">
              <Twitter className="w-6 h-6 text-text-primary" />
            </div>
            <div className="w-fit h-fit flex justify-center items-center gap-2.5 bg-linear-to-b from-primary from-[-42%] to-secondary to-127% rounded-md p-2">
              <Instagram className="w-6 h-6 text-text-primary" />
            </div>
            <div className="w-fit h-fit flex justify-center items-center gap-2.5 bg-linear-to-b from-primary from-[-42%] to-secondary to-127% rounded-md p-2">
              <Facebook className="w-6 h-6 text-text-primary" />
            </div> */}
            <div className="w-fit h-fit flex justify-center items-center gap-2.5 bg-linear-to-b from-primary from-[-42%] to-secondary to-127% rounded-md p-2">
              <Link href="https://chat.whatsapp.com/HRSV9dESR03KfIJfEwQXf3">
                <MessageCircleCode className="w-6 h-6 text-text-primary" />
              </Link>
            </div>
          </div>
        </div>

        <p className="w-fit h-fit text-center font-inter text-text-secondary text-[14px]">
          © Copyright 2025 CodeRush - All rights reserved.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap w-full h-fit justify-start lg:justify-end items-start gap-8 md:gap-12">
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
          <Link href="/community" className="text-secondary font-inter text-sm">
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
          <p className="text-text-secondary font-inter text-sm">
            You can reach us at
          </p>
          <Link href="mailto:coderushx.official@gmail.com" className="text-secondary font-inter text-sm">
            coderushx.official@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
