import {Display, Bootstrap, CheckCircle} from "react-bootstrap-icons"

import Preview from "@/app/components/Preview"
import { cn } from "../utils/cn"


export default function PreviewMain() {

  const displayIconHeading = "Fully Responsive"
  const displayIconParagraph = "This theme will look great on any device, no matter the size!"

  const bootstrapIconHeading = "Bootstrap 5 Ready"
  const bootstrapIconParagraph = "Featuring the latest build of the new Bootstrap 5 framework!"

  const checkCircleHeading = "Easy to Use"
  const checkCircleParagraph = "Ready to use with your own content, or customize the source files!"

  return (
    <section className={cn(
      "w-full",
      "flex flex-col md:flex-row",
      "pt-30 pb-30",
    )}>
      <Preview Icon={Display} heading={displayIconHeading} peragraph={displayIconParagraph} />
      <Preview Icon={Bootstrap} heading={bootstrapIconHeading} peragraph={bootstrapIconParagraph} />
      <Preview Icon={CheckCircle} heading={checkCircleHeading} peragraph={checkCircleParagraph} />
    </section>
  )
}
