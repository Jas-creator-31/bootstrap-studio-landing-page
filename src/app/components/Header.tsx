import React from 'react'
import Image from "next/image"
import bgMainImg from "@/assets/bg-masthead.jpg"

export default function Header() {
  return (
        <header className='relative min-h-100 max-h-150 w-full flex flex-col justify-center items-center p-2'>
            <Image
              src={bgMainImg} 
              fill 
              alt="bg image"
              className="w-screen max-h-170 z-0 object-cover"
            />
            <div className="relative flex flex-col h-full w-full z-10 text-white text-5xl justify-center items-center">
                <h1 className='text-center'>Build a landing page for your business or project and generate more leads!</h1>
            </div>
        </header>
    )
}
