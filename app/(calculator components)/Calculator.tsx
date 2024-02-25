import React from "react";
import CalculatorButton from "./CalculatorButton";
import { Cross1Icon, DashIcon, PlusIcon } from "@radix-ui/react-icons";

const Calculator = ({ mode }: { mode: string }) => {
  return (
    <div>
      <CalculatorButton value={"0"}>0</CalculatorButton>
      <CalculatorButton value={"1"}>1</CalculatorButton>
      <CalculatorButton value={"2"}>2</CalculatorButton>
      <CalculatorButton value={"3"}>3</CalculatorButton>
      <CalculatorButton value={"4"}>4</CalculatorButton>
      <CalculatorButton value={"5"}>5</CalculatorButton>
      <CalculatorButton value={"6"}>6</CalculatorButton>
      <CalculatorButton value={"7"}>7</CalculatorButton>
      <CalculatorButton value={"8"}>8</CalculatorButton>
      <CalculatorButton value={"9"}>9</CalculatorButton>
      <CalculatorButton value={"0"}>0</CalculatorButton>
      <CalculatorButton value={"*"}>
        <Cross1Icon />
      </CalculatorButton>
      <CalculatorButton value={"+"}>
        <PlusIcon />
      </CalculatorButton>
      <CalculatorButton value={"-"}>
        <DashIcon />
      </CalculatorButton>
      <CalculatorButton value={"/"}>
        <div className="w-[15px] h-[15px] flex justify-center items-center">
          ÷
        </div>
      </CalculatorButton>
      <CalculatorButton value={"("}>
        <div className="w-[15px] h-[15px] flex justify-center items-center">
          (
        </div>
      </CalculatorButton>
      <CalculatorButton value={")"}>
        <div className="w-[15px] h-[15px] flex justify-center items-center">
          )
        </div>
      </CalculatorButton>
    </div>
  );
};

export default Calculator;
