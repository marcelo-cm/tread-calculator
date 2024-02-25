import React from "react";

const CalculatorButton = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) => {
  return <div>{children}</div>;
};

export default CalculatorButton;
