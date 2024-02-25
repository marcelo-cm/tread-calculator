"use client";

import Image from "next/image";
import Calculator from "./(calculator components)/Calculator";
import { useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-24 bg-[url('/truck-1.png')] bg-cover ">
      <img src="/tread-white.png" className="h-12" />
      <Calculator dark={isDarkMode} />
      <div className="w-1/2 h-fit bg-white rounded-lg text-black p-4 flex flex-col gap-4">
        <p>
          The Tread Calculator uses the MathJS API to evaluate the user inputted
          equation. Only standard Next.js packages are used to build this
          calculator.
        </p>
        <div>
          <p className="font-semibold italic">Feature Set:</p>
          <ul className="list-disc ml-4">
            <li>
              Write equations using your keyboard (input numbers 1-9 and
              standard keys for math equations)
            </li>
            <li className="ml-4">Use Shift+Enter to evaluate equation</li>
            <li>
              Tab & shift-tab to navigate with the board, and select items with
              Enter
            </li>
            <li>
              View your previous equation that resulted in your current answer,
              and easily revert to it
            </li>
            <li>Equation recovery upon error</li>
            <li>
              Well documented code & organized with easy adaptability for future
              feature development
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
