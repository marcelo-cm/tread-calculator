"use client";

import Image from "next/image";
import Calculator from "./(calculator components)/Calculator";
import { useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Tread Calculator
      <Calculator dark={isDarkMode} />
    </main>
  );
}
