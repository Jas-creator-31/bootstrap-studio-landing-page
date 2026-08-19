import { cn } from "@/app/utils/cn"
import Image, { StaticImageData } from "next/image"

interface Props {
  image: StaticImageData,
  name: string,
  text: string,
}

export default function TestimoniesSection({ image, name, text }: Props) {
  return (
    <section className={cn(
        "w-full",
        "flex flex-col items-center justify-center",
    )}>
      <div className={cn()}>
        <Image src={image} alt={`image`}
          className={cn("w-80 h-80")}
        />

      </div>
      <h1>{name}</h1>
      <p>{text}</p>
    </section>
  )
}
