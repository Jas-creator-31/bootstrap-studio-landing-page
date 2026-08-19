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
            "object-cover",
            "rounded-full shadow-neutral-800 shadow-[0_5px_10px_-5px]"
          )}
        />

      </div>
      <h1 className={cn("text-xl font-bold text-neutral-800 dark:text-neutral-200")}>{name}</h1>
      <p className={cn("font-normal text-center text-neutral-700 dark:text-neutral-300")}>{text}</p>
    </section>
  )
}
