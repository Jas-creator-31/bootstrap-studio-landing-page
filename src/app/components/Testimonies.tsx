import {cn} from "@/app/utils/cn";
import TestimoniesSection from "@/app/components/TestimoniesSection";

import testimonyImage1 from "@/assets/testimonials-1.jpg"
import testimonyImage2 from "@/assets/testimonials-2.jpg"
import testimonyImage3 from "@/assets/testimonials-3.jpg"


export default function Testimonies() {

  const testimony1 = {
    image: testimonyImage1,
    name: "Margaret E.",
    text: `"This is fantastic! Thanks so much guys!"`,
  }

  const testimony2 = {
    image: testimonyImage2,
    name: "Fred S.",
    text: `"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."`,
  }

  const testimony3 = {
    image: testimonyImage3,
    name: "Sarah W.",
    text: `"Thanks so much for making these free resources available to us!"`,
  }

  return (
    <section className={cn(
        "w-full",
        "flex flex-row items-center justify-center",
    )}>
      <TestimoniesSection {...testimony1} />
      <TestimoniesSection {...testimony2} />
      <TestimoniesSection {...testimony3} />
    </section>
  )
}
