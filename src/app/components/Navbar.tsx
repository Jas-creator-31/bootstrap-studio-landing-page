import React from 'react'

export default function Navbar() {
  return (
    <div className='w-screen min-h-12 max-h-16 flex flex-row items-center justify-between pr-4 pl-4 pt-2 pb-2'>
        <div className='text-xl align-middle'>Brand</div>
        <div className='h-full w-full flex flex-row justify-end-safe'>
            <button className="h-max w-max p-2 rounded-md text-white bg-blue-400 to-blue-400">Sign In</button>
        </div>
    </div>
  )
}
