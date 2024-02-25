import React from "react";

const CalculatorButton = ({
  handleItemClick,
  children,
  value,
}: {
  handleItemClick: (value: string | null) => void;
  children: React.ReactNode;
  value?: string;
}) => {
  return (
    <button onClick={() => handleItemClick(value || null)}>{children}</button>
  );
};

export default CalculatorButton;
