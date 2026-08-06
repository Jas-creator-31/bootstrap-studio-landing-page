import React from 'react'
import { cn } from '../utils/cn'
import Image from "next/image"
import bgMainImg from "@/assets/bg-masthead.jpg"

export default function Header() {
  return (
        <header className={cn(
            'relative min-h-100 max-h-150 w-full',
            'flex flex-col justify-center items-center',
            'p-2')}>
            <Image
              src={bgMainImg}
              fill
              alt="bg image"
              className={cn('w-screen max-h-170 z-0', 'object-cover')}
            />
            <div className={cn(
            'relative h-full w-full z-10',
              'flex flex-col justify-center items-center',
              '',
            'text-white text-3xl font-semibold')}>
                <h1 className={cn('text-center')}>Build a landing page for your business or project and generate more leads!</h1>
            </div>

            <div className={cn('')}>
                i
            </div>
    </header>
    )
}
