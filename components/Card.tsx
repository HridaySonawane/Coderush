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
    <div className="w-fit h-full bg-[#05050A] rounded-2xl flex flex-col justify-start items-start gap-8 p-6 pb-8">
      <div className="flex justify-center items-center p-3 gap-2.5 w-14 h-14">
        {Icon != undefined ? (
          <Icon size={20} color="#FFFFFF" />
        ) : (
          <Wallet size={20} color="#FFFFFF" />
        )}
      </div>
      <div className="flex flex-col justify-start items-start gap-2 w-full h-fit">
        <h3 className="w-full h-fit font-sora font-medium text-xl text-text-primary">
          {title}
        </h3>
        <p className="w-full h-fit font-inter text-sm text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
