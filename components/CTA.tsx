import React from "react";
import Button from "./Button";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="relative w-full h-[60vh] flex flex-col justify-center items-center gap-2.5">
      <div className="w-full h-3.25 absolute top-116.75 mx-auto left-0 right-0 bottom-0 bg-radial from-primary to-70% to-[rgba(21,16,115,0)] overflow-x-visible z-1" />
      <div className="w-full h-full flex flex-col justify-center items-center rounded-3xl">
        <div className="w-fit h-fit flex justify-start items-start">
          <div className="w-full h-fit flex flex-col justify-start items-center gap-10">
            <div className="w-full h-fit flex flex-col justify-start items-center">
              <h2 className="w-fit h-fit font-sora font-semibold text-[40px] text-text-primary">
                Ready to Build With Us?
              </h2>
              <p className="w-fit h-fit font-inter text-[18px] text-text-secondary text-center">
                We’re always looking for curious minds who want to learn,
                create, and lead.
              </p>
            </div>
            <div className="w-full h-fit flex justify-evenly items-center">
              <Link href="https://chat.whatsapp.com/HRSV9dESR03KfIJfEwQXf3">
                <Button text="Join Our Community" variant="primary" />
              </Link>
              <Link href="/events">
                <Button text="Explore Events" variant="secondary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
