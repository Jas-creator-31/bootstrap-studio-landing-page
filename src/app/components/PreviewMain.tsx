import Preview from "@/app/components/Preview"
import screenIcon from "@/assets/screen.svg"
import layersIcon from "@/assets/layers.svg"
import okIcon from "@/assets/ok.svg"


export default function PreviewMain() {

  const screenIconHeading = "Fully Responsive"
  const screenIconParagraph = "This theme will look great on any device, no matter the size!"

  const layersIconHeading = "Bootstrap 5 Ready"
  const layersIconParagraph = "Featuring the latest build of the new Bootstrap 5 framework!"

  const okIconHeading = "Easy to Use"
  const okIconParagraph = "Ready to use with your own content, or customize the source files!"

  return (
    <section>
      <Preview icon={screenIcon} heading={screenIconHeading} peragraph={screenIconParagraph} />
      <Preview icon={layersIcon} heading={layersIconHeading} peragraph={layersIconParagraph} />
      <Preview icon={okIcon} heading={okIconHeading} peragraph={okIconParagraph} />
    </section>
  )
}
