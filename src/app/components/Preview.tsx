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
      "pt-5 pb-8 pr-10 pl-10 gap-2"
    )}>
      <div className={cn( // container for icon
        "w-full max-h-full",
        "flex flex-col justify-center items-center"
      )}>
        <Icon
          className={cn( // icon
            "w-18 h-18",
            "text-blue-500"
          )}
        />
      </div>
      <h1 // Main Heading
        className="text-lg font-bold"
      >{heading}</h1>
      <p // text
        className="text-center text-wrap font-light"
      >{peragraph}</p>
    </div>
  )
}
