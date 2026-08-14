import React from "react"
import { cn } from "@/app/utils/cn"

interface Props {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  heading: string,
  peragraph: string
}

export default function Preview({Icon, heading, peragraph}: Props) {
  return (
    <div className={cn( // Main container of Preview component
      "flex flex-col justify-center items-center",
    )}>
      <div className={cn(
        "w-full max-h-full",
        "flex flex-col justify-center items-center"
      )}>
        <Icon
          className={cn(
            "w-18 h-18",
            "text-blue-500"
          )}
        />
      </div>
      <h2>{heading}</h2>
      <p>{peragraph}</p>
    </div>
  )
}
