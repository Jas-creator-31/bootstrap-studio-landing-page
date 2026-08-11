import React from "react";
import { cn } from "../utils/cn";
import Image from "next/image";
import bgMainImg from "@/assets/bg-masthead.jpg";

export default function Header() {
  const mainTest =
    "Build a landing page\n for your business or\n project and generate more leads!";
  return (
    <header // main header element that holds all the other elements for the components
      className={cn(
        "relative max-h-150 w-full",
        "flex flex-col justify-center items-center",
        "pl-2 pr-2 pt-40 pb-40",
      )}
    >
      <Image // background image component that will be the main background for the header section
        src={bgMainImg}
        fill
        alt="bg image"
        className={cn("w-screen z-0", "object-cover")}
      />
      <div // the content container for the header section
        className={cn(
          "relative z-10",
          "flex flex-col justify-center items-center gap-4",
          "text-white text-3xl font-semibold",
        )}
      >

        <h1 // the heading text for the header section
          className={cn("text-center whitespace-pre-line sm:whitespace-normal p-2")}
        >{mainTest}
        </h1>

        <div className={cn( // the secondary container for containers of email input field and sign up button
          "w-screen z-10",
          "flex flex-col md:flex-row items-center justify-center gap-2 md:gap-10",
          "p-1",
        )}>
          <input type="email" className={cn( // email input field
            "w-3/4 sm:w-md md:w-lg",
            "p-2 rounded bg-white",
            "text-gray-900 placeholder:text-neutral-900/60",
            "caret-transparent focus:caret-black",
            "text-lg font-normal"
          )}
          placeholder="Enter your email..."
          />
          <button className={cn( // sign up button
            "align-middle",
            "p-2 rounded-md bg-blue-400",
            "text-white text-lg font-normal",
          )}>
            Sign up!
          </button>
        </div>
      </div>
    </header>
  );
}
