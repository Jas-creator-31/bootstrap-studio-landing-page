import { cn } from '@/app/utils/cn'
import Image, { StaticImageData } from 'next/image'

interface MainSectionProps {
  image: StaticImageData,
  heading: string,
  paragraph: string,
  rowReverse?: boolean,
}

export default function MainSection({image, heading, paragraph, rowReverse}: MainSectionProps) {
  return (
    <section className={cn(
      "w-full lg:h-120",
      'grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1',
      'place-items-stretch',
    )}>
      <div className={cn(
        rowReverse && 'lg:order-2',
      )}>
        <Image
          src={image}
          alt="section image"
          loading='eager'
          className={cn("w-full h-full block", "object-cover object-top")}

        />
      </div>
      <div className={cn(
        'flex flex-col justify-center items-center gap-2',
        'p-7',
      )}>
        <h1 className={cn(
          'text-2xl lg:text-3xl font-bold',
        )}>{heading}</h1>
        <p className={cn(
          'lg:w-3/5',
          'lg:text-lg text-center lg:text-start font-extralight text-neutral-700 text-wrap',
        )}>{paragraph}</p>
      </div>
    </section>
  )
}
