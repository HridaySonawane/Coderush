import { ArrowRight } from "lucide-react";
import React from "react";

const Button = ({
  text,
  variant,
}: {
  text: string;
  variant: "primary" | "secondary";
}) => {
  return variant === "primary" ? (
    <button className="w-fit h-fit flex justify-center items-center gap-1 px-3.5 py-6 bg-linear-to-b from-primary form-[-15%] to-[#151073] to-93% text-text-primary font-sora font-medium rounded-xl inset-shadow-button">
      {text}
      <ArrowRight size={16} />
    </button>
  ) : (
    <button className="w-fit h-fit flex justify-center items-center gap-1 px-3.5 py-6 text-text-primary font-sora font-medium rounded-xl inset-shadow-button-secondary border-3 border-primary">
      {text}
      <ArrowRight size={16} />
    </button>
  );
};

export default Button;
