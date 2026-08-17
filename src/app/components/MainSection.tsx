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
      'grid grid-cols-2 grid-rows-1',
      'place-items-stretch',
    )}>
      <div className={cn(
        // 'lg:w-1/2',
        rowReverse && 'order-2',
      )}>
        <Image
          src={image}
          alt="section image"
          loading='eager'
          className={cn("w-full lg:w-1/1", "object-cover")}

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
          'lg:text-lg text-start font-extralight text-neutral-700',
        )}>{paragraph}</p>
      </div>
    </section>
  )
}
