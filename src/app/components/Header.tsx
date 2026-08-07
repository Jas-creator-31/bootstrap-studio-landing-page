import React from "react";
import { cn } from "../utils/cn";
import Image from "next/image";
import bgMainImg from "@/assets/bg-masthead.jpg";

export default function Header() {
  const mainTest =
    "Build a landing page\n for your business or\n project and generate more leads!";
  return (
    <header
      className={cn(
        "relative min-h-100 max-h-150 w-full",
        "flex flex-col justify-center items-center",
        "p-2",
      )}
    >
      <Image
        src={bgMainImg}
        fill
        alt="bg image"
        className={cn("w-screen max-h-170 z-0", "object-cover")}
      />
      <div
        className={cn(
          "relative h-full w-full z-10",
          "flex flex-col justify-center items-center gap-4",
          "",
          "text-white text-3xl font-semibold",
        )}
      >
        <h1 className={cn("text-center whitespace-pre-line sm:whitespace-normal")}>{mainTest}</h1>
        <div className={cn(
          "h-14 min-w-36 w-full max-w-96 sm:min-w-28 sm:w-full sm:max-w-96 z-10",
          "flex flex-row items-center",
          "p-1"
        )}>
          <input type="email" className={cn(
            "w-full h-full",
            "p-2 rounded bg-white text-gray-900 placeholder:text-neutral-900/60",
            "text-lg font-normal"
          )}
          placeholder="Enter your email..."
          />
          
        </div>
      </div>
    </header>
  );
}
