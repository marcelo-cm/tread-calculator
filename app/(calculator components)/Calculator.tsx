"use client";

import React, { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import {
  Cross1Icon,
  DashIcon,
  PauseIcon,
  PlusIcon,
} from "@radix-ui/react-icons";

const Calculator = ({ dark }: { dark: boolean }) => {
  const [currentEquation, setCurrentEquation] = useState<string>("test");

  function addElement(value: string | null) {
    setCurrentEquation((prev) => prev + value);
  }

  function deleteLast() {
    setCurrentEquation((prev) => prev.slice(0, -1));
  }

  function solveEquation() {
    try {
      setCurrentEquation(eval(currentEquation));
    } catch (e) {}
  }

  return (
    <div className="w-full border p-4">
      <div className="border p-4 text-white">{currentEquation}</div>
      <div className="border flex flex-row gap-8">
        <CalculatorButton handleItemClick={addElement} value={"0"}>
          0
        </CalculatorButton>
        <CalculatorButton handleItemClick={addElement} value={"1"}>
          1
        </CalculatorButton>
        <CalculatorButton handleItemClick={addElement} value={"2"}>
          2
        </CalculatorButton>
        <CalculatorButton handleItemClick={addElement} value={"3"}>
          3
        </CalculatorButton>
        <CalculatorButton handleItemClick={addElement} value={"4"}>
          4
        </CalculatorButton>
        <CalculatorButton handleItemClick={addElement} value={"5"}>
          5
        </CalculatorButton>
        <CalculatorButton handleItemClick={addElement} value={"6"}>
          6
        </CalculatorButton>
        <CalculatorButton handleItemClick={addElement} value={"7"}>
          7
        </CalculatorButton>
        <CalculatorButton handleItemClick={addElement} value={"8"}>
          8
        </CalculatorButton>
        <CalculatorButton handleItemClick={addElement} value={"9"}>
          9
        </CalculatorButton>
        <CalculatorButton handleItemClick={addElement} value={"0"}>
          0
        </CalculatorButton>
        <CalculatorButton handleItemClick={addElement} value={"*"}>
          <Cross1Icon />
        </CalculatorButton>
        <CalculatorButton handleItemClick={addElement} value={"+"}>
          <PlusIcon />
        </CalculatorButton>
        <CalculatorButton handleItemClick={addElement} value={"-"}>
          <DashIcon />
        </CalculatorButton>
        <CalculatorButton handleItemClick={addElement} value={"/"}>
          <div className="w-[15px] h-[15px] flex justify-center items-center">
            ÷
          </div>
        </CalculatorButton>
        <CalculatorButton handleItemClick={addElement} value={"("}>
          <div className="w-[15px] h-[15px] flex justify-center items-center">
            (
          </div>
        </CalculatorButton>
        <CalculatorButton handleItemClick={addElement} value={")"}>
          <div className="w-[15px] h-[15px] flex justify-center items-center">
            )
          </div>
        </CalculatorButton>
        <CalculatorButton handleItemClick={deleteLast}>
          <div className="w-[15px] h-[15px] flex justify-center items-center">
            DEL
          </div>
        </CalculatorButton>
        <CalculatorButton handleItemClick={() => setCurrentEquation("")}>
          <div className="w-[15px] h-[15px] flex justify-center items-center">
            C
          </div>
        </CalculatorButton>
        <CalculatorButton handleItemClick={solveEquation}>
          <PauseIcon className="rotate-90" />
        </CalculatorButton>
      </div>
    </div>
  );
};

export default Calculator;
