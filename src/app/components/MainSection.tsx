import { cn } from '@/app/utils/cn'
import Image, { StaticImageData } from 'next/image'

interface MainSectionProps {
  image: StaticImageData,
  heading: string,
  paragraph: string,
  rowReverse?: boolean,
}

export default function MainSection({ image, heading, paragraph, rowReverse }: MainSectionProps) {
  return (
    <section className={cn(
      "w-full h-auto sm:max-h-200 lg:max-h-120",
      "grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1",
      "items-center justify-between"
    )}>
      <div className={cn(
        "w-full h-full",
        rowReverse && "lg:order-1"
      )}>
        <Image src={image} alt={heading}
          className="w-full h-full object-cover"
        />
      </div>
      <div className={cn(
        "w-full",
        "flex flex-col justify-center items-center gap-4",
        "p-10"
      )}>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
      </div>
    </section>
  )
}
