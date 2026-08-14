import React from "react"
import { cn } from "@/app/utils/cn"

interface Props {
  icon: React.ReactNode,
  heading: string,
  peragraph: string
}

export default function Preview({icon, heading, peragraph}: Props) {
  return (
    <div>
      <div className="w-full max-h-full">
        {icon}
      </div>
      <h2>{heading}</h2>
      <p>{peragraph}</p>
    </div>
  )
}
