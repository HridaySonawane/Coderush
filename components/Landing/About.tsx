import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full h-fit flex justify-center items-center gap-6">
      <div className="flex flex-col">
        <h2 className="text-text-primary font-sora text-[64px]">Who we are</h2>
        
      </div>
      <Image
        src="/about-image.png"
        alt="About Image"
        width={400}
        height={300}
      />
    </div>
  );
};

export default About;
