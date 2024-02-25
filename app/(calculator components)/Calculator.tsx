"use client";

import React, { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import {
  Cross1Icon,
  DashIcon,
  PauseIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { mathJSeval } from "../lib/calculator/mathJSeval";

const Calculator = ({ dark }: { dark: boolean }) => {
  const [currentEquation, setCurrentEquation] = useState<string>("");
  const [prevEquation, setPrevEquation] = useState<string>("");
  // You can encode the current equation in the URL so you can share to others

  function addElement(value: string | null) {
    setCurrentEquation((prev) => prev + value);
  }

  function deleteLast() {
    setCurrentEquation((prev) => prev.slice(0, -1));
  }

  function clearAll() {
    setCurrentEquation("");
    setPrevEquation("");
  }

  async function solveEquation() {
    try {
      const result = await mathJSeval(currentEquation);

      console.log(result);
      if (result.includes("error")) {
        setCurrentEquation("Error");
        return;
      }

      setPrevEquation(currentEquation);
      setCurrentEquation(result);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="w-full max-w-[650px] border p-4">
      {prevEquation ? <div>{prevEquation}</div> : null}
      <div className="border p-4 text-white">{currentEquation}</div>
      <div className="border flex flex-row gap-8">
        <div className="grid grid-cols-3 gap-4">
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
          <CalculatorButton handleItemClick={addElement} value={"."}>
            .
          </CalculatorButton>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-2">
            <CalculatorButton handleItemClick={deleteLast}>
              DEL
            </CalculatorButton>
          </div>
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
          <CalculatorButton handleItemClick={clearAll}>
            <div className="w-[15px] h-[15px] flex justify-center items-center">
              C
            </div>
          </CalculatorButton>
          <CalculatorButton handleItemClick={solveEquation}>
            <PauseIcon className="rotate-90" />
          </CalculatorButton>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
