import React from "react";

const Badge = ({ text }: { text: string }) => {
  return (
    <div className="w-fit h-fit flex justify-center items-center gap-2.5 px-4 py-2 rounded-full border-2 border-primary inset-shadow-badge bg-linear-to-b from-[#0A0A14] to-primary to-150%">
      <span className="w-fit h-fit font-inter text-sm text-text-secondary">
        {text}
      </span>
    </div>
  );
};

export default Badge;
