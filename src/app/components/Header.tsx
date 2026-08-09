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
          "relative z-10",
          "flex flex-col justify-center items-center gap-4",
          "",
          "text-white text-3xl font-semibold",
        )}
      >
        <h1 className={cn("text-center whitespace-pre-line sm:whitespace-normal")}>{mainTest}</h1>
        <div className={cn(
          "z-10",
          "flex flex-col md:flex-row items-center gap-2 md:gap-10",
          "p-1",
        )}>
          <div className={cn(
            "flex flex-row items-center justify-center md:justify-end"
          )}>
            <input type="email" className={cn(
              "w-full",
              "p-3 rounded bg-white",
              "text-gray-900 placeholder:text-neutral-900/60",
              "caret-transparent focus:caret-black",
              "text-lg font-normal"
            )}
            placeholder="Enter your email..."
            />
          </div>

          <div className={cn(
            "flex flex-row items-center justify-center md:justify-start"
          )}>
            <button className={cn(
              "align-middle",
              "p-2 rounded-md bg-blue-400",
              "text-white text-lg font-normal",
            )}>
              Sign up!
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
