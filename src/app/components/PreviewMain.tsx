import Preview from "@/app/components/Preview"
import screenIcon from "@/assets/screen.svg"


export default function PreviewMain() {

  const screenIconHeading = "Fully Responsive"
  const screenIconParagraph = "This theme will look great on any device, no matter the size!"

  return (
    <div>
      <Preview icon={screenIcon} heading={screenIconHeading} peragraph={screenIconParagraph} />
    </div>
  )
}
