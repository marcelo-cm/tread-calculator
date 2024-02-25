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
    </main>
  );
}
