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
      "w-full max-h-28",
      "flex flex-col md:flex-row"
    )}>
      <Preview icon={Display} heading={displayIconHeading} peragraph={displayIconParagraph} />
      <Preview icon={Bootstrap} heading={bootstrapIconHeading} peragraph={bootstrapIconParagraph} />
      <Preview icon={CheckCircle} heading={checkCircleHeading} peragraph={checkCircleParagraph} />
    </section>
  )
}
