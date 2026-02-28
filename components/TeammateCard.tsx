import { Linkedin, LucideIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const TeammateCard = ({
  name: Name,
  role: Role,
  description: Description,
  icon: Icon,
  image,
}: {
  name: string;
  role: string;
  description: string;
  icon?: LucideIcon | undefined;
  image?: string;
}) => {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-3xl overflow-hidden">
      <Image
        src={image ? image : "/assets/placeholder.png"}
        alt={`${Name}'s profile picture`}
        width={200}
        height={200}
        className="w-full h-full object-cover"
      />
      <div className="w-full h-full flex flex-col justify-center items-start gap-2.5 p-6 bg-[#05050A]">
        <h2 className="font-sora font-semibold text-text-primary text-[40px]">
          {Name}
        </h2>
        <h3 className="font-sora font-medium text-text-primary text-[24px]">
          {Role}
        </h3>
        <p className="font-inter text-text-secondary text-[18px]">
          {Description}
        </p>
        <div className="w-6 h-6">
          {Icon ? (
            <Icon size={24} color="#FFFFFF" />
          ) : (
            <Linkedin size={20} color="#FFFFFF" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TeammateCard;
