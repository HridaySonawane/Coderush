import { LucideIcon, Wallet } from "lucide-react";
import React from "react";

const Card = ({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon | undefined;
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full h-full bg-[#161623]/40 backdrop-blur-md rounded-[12px] flex flex-col justify-start items-start gap-6 md:gap-8 p-6 md:pb-8 shadow-[inset_0_0_24px_rgba(249,250,251,0.03)] border border-white/[0.05] transition-all duration-300 hover:bg-[#161623]/60 hover:shadow-[inset_0_0_24px_rgba(249,250,251,0.08)]">
      <div className="flex justify-center items-center w-14 h-14 bg-[#0F0F1A] rounded-[12px] shadow-[inset_0_0_16px_rgba(137,91,245,0.3)] border border-[#895BF5]/20">
        {Icon != undefined ? (
          <Icon size={24} color="#895BF5" className="drop-shadow-[0_0_12px_rgba(137,91,245,0.8)]" />
        ) : (
          <Wallet size={24} color="#895BF5" className="drop-shadow-[0_0_12px_rgba(137,91,245,0.8)]" />
        )}
      </div>
      <div className="flex flex-col justify-start items-start gap-2 w-full h-fit">
        <h3 className="w-full h-fit font-sora font-semibold text-lg md:text-xl text-[#F9FAFB]">
          {title}
        </h3>
        <p className="w-full h-fit font-inter text-sm md:text-base text-[#9CA3AF] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
