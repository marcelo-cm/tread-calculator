"use client";

import React, { use, useEffect, useState } from "react";
import CalculatorButton from "./CalculatorButton";
import {
  Cross1Icon,
  DashIcon,
  PauseIcon,
  PlusIcon,
  ResetIcon,
} from "@radix-ui/react-icons";
import { mathJSeval } from "../lib/calculator/mathJSeval";

const Calculator = ({ dark }: { dark: boolean }) => {
  const [currentEquation, setCurrentEquation] = useState<string>("");
  const [prevEquation, setPrevEquation] = useState<string>("");
  // You can encode the current equation in the URL so you can share to others

  /**
   * Keyboard shortcuts
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && event.shiftKey) {
        event.preventDefault();
        event.stopPropagation();
        solveEquation();
        return;
      }

      switch (event.key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
          addElement(event.key);
          break;
        case "*":
          addElement("*");
          break;
        case "+":
          addElement("+");
          break;
        case "-":
          addElement("-");
          break;
        case "/":
          addElement("/");
          break;
        case "(":
          addElement("(");
          break;
        case ")":
          addElement(")");
          break;
        case "Backspace":
          deleteLast();
          break;
        case "Escape":
          clearAll();
          break;
        case "c":
          clearAll();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentEquation]);

  /**
   * Error handling & special cases
   */
  useEffect(() => {
    if (currentEquation === "Error") {
      setTimeout(() => {
        setCurrentEquation(prevEquation);
      }, 2000);
    } else if (currentEquation.length == 0) {
      setPrevEquation("");
    }
  }, [currentEquation, prevEquation]);

  /**
   * This function adds an element to the equation according to the value passed/button pressed
   * @param value The element to be added to the equation
   */
  function addElement(value: string | null) {
    setCurrentEquation((prev) => prev + value);
  }

  /**
   * This function deletes the last element of the equation
   */
  function deleteLast() {
    setCurrentEquation((prev) => prev.slice(0, -1));
  }

  /**
   * This function clears the current and previous equations
   */
  function clearAll() {
    setCurrentEquation("");
    setPrevEquation("");
  }

  /**
   * This function solves the current equation using a server-side call to the mathJSeval function.
   * The mathJSeval function calls the math.js library to solve the equation.
   * @returns The result of the equation
   */
  async function solveEquation() {
    try {
      const result = await mathJSeval(currentEquation);

      if (result.includes("error")) {
        setCurrentEquation("Error");
        return;
      }

      setPrevEquation(currentEquation);
      setCurrentEquation(result);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * This function renders the equation in a more readable format according the icons used in the calculator
   * @param equation The equation to be rendered
   * @returns The equation in a more readable format
   */
  function renderEquation(equation: string) {
    const parts = equation.split(/(\*|\+|-|\/|\(|\))/g);

    return (
      <div className="flex flex-row w-full items-center">
        {parts.map((part, index) => {
          switch (part) {
            case "*":
              return <Cross1Icon className="scale-[60%]" key={index} />;
            case "+":
              return <PlusIcon className="scale-[75%]" key={index} />;
            case "-":
              return <DashIcon key={index} />;
            case "/":
              return <span key={index}>÷</span>;
            case "(":
              return <span key={index}>(</span>;
            case ")":
              return <span key={index}>)</span>;
            default:
              return <span key={index}>{part}</span>;
          }
        })}
      </div>
    );
  }

  return (
    <div
      className="max-w-[800px] h-fit md:w-fit
    flex flex-col items-center justify-center gap-4
    border rounded-md border-[#f6cc46] bg-[#1C1C1C]
    p-4
    select-none
    drop-shadow-2xl"
    >
      <p className="text-[#f6cc46] font-semibold italic text-xs">
        The Tread 9000TS – Marcelo Chaman Mallqui
      </p>
      <div className="bg-[#161616] flex flex-col p-4 border border-[#2e2e2e] rounded-md w-full h-fit min-h-20 justify-center">
        {prevEquation ? (
          <div className="mb-[2px] text-[#A0A0A0] font-normal text-xs flex flex-row justify-between">
            {renderEquation(prevEquation)}
            <button
              onClick={() => {
                setCurrentEquation(prevEquation);
                setPrevEquation("");
              }}
            >
              <ResetIcon />
            </button>
          </div>
        ) : null}
        <div>
          {currentEquation ? (
            renderEquation(currentEquation)
          ) : (
            <p className="italic text-[#2e2e2e]">Enter your equation...</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-row gap-8 ">
          <div className="grid grid-cols-3 gap-4 ">
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
            <div className="col-span-3 h-12" />
          </div>
          <div className="grid grid-cols-2 gap-4 ">
            <button
              onClick={() => deleteLast()}
              className="bg-[#292929] h-12 w-full flex justify-center items-center text-white rounded-full border border-[#2e2e2e] col-span-2"
            >
              DEL
            </button>
            <CalculatorButton handleItemClick={addElement} value={"*"}>
              <Cross1Icon />
            </CalculatorButton>
            <CalculatorButton handleItemClick={addElement} value={"/"}>
              <div className="w-[15px] h-[15px] flex justify-center items-center">
                ÷
              </div>
            </CalculatorButton>
            <CalculatorButton handleItemClick={addElement} value={"+"}>
              <PlusIcon />
            </CalculatorButton>
            <CalculatorButton handleItemClick={addElement} value={"-"}>
              <DashIcon />
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
            <CalculatorButton
              handleItemClick={clearAll}
              className="bg-[#f6cc46]"
            >
              <div className="w-[15px] h-[15px] flex justify-center items-center text-black">
                C
              </div>
            </CalculatorButton>
            <CalculatorButton
              handleItemClick={solveEquation}
              className="bg-[#f6cc46]"
            >
              <PauseIcon className="rotate-90 text-black" />
            </CalculatorButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
