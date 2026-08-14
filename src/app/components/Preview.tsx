import Image from "next/image"

interface Props {
  icon: string,
  heading: string,
  peragraph: string
}

export default function Preview({icon, heading, peragraph}: Props) {
  return (
    <div>
      <div>
        <Image src={icon} alt="icon"/>
      </div>
      <h2>{heading}</h2>
      <p>{peragraph}</p>
    </div>
  )
}
