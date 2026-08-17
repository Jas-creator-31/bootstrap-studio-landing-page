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
      'flex flex-col lg:flex-row',
      rowReverse && 'flex-row-reverse'
    )}>
      <div>
        <Image
          src={image}
          fill
          alt="section image"
          loading='eager'
        />
      </div>
      <div>
        <h1>{heading}</h1>
        <p>{paragraph}</p>
      </div>
    </section>
  )
}
