import React from "react";

const CalculatorButton = ({
  handleItemClick,
  className,
  children,
  value,
}: {
  handleItemClick: (value: string | null) => void;
  className?: string;
  children: React.ReactNode;
  value?: string;
}) => {
  return (
    <button
      onClick={() => handleItemClick(value || null)}
      className={`${className} bg-[#292929] h-12 w-12 flex justify-center items-center text-white rounded-full border border-[#2e2e2e]`}
    >
      {children}
    </button>
  );
};

export default CalculatorButton;
