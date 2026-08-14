import React from "react"
import { cn } from "@/app/utils/cn"

interface Props {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  heading: string,
  peragraph: string
}

export default function Preview({Icon, heading, peragraph}: Props) {
  return (
    <div>
      <div className="w-full max-h-full">
        <Icon/>
      </div>
      <h2>{heading}</h2>
      <p>{peragraph}</p>
    </div>
  )
}
