import React from 'react'
import { cn } from '../utils/cn'

export default function Navbar() {
  return (
    <div className={cn(
      'w-screen min-h-12 max-h-16',
      'flex flex-row items-center justify-between',
      'pr-4 pl-4 pt-2 pb-2'
      )}>
        <div className={cn('text-xl align-middle')}>Brand</div>
        <div className={cn('flex flex-row justify-end-safe')}>
            <button className={cn(
              'p-2 rounded-md',
              'text-white bg-blue-400 hover:bg-blue-500 active:scale-95 cursor-pointer')}>
                Sign In
            </button>
        </div>
    </div>
  )
}
