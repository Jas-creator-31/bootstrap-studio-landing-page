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
          className={cn(
            "w-50 h-50",
            "rounded-full shadow-neutral-800 shadow-[0_5px_10px_-5px]"
          )}
        />

      </div>
      <h1>{name}</h1>
      <p>{text}</p>
    </section>
  )
}
