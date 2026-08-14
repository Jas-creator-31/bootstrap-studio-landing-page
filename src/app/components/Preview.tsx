import Image from "next/image"

interface Props {
  icon: string,
  heading: string,
  peragraph: string
}

export default function Preview({icon, heading, peragraph}: Props) {
  return (
    <div>
      <div className="w-full max-h-full">
        <Image
          src={icon}
          alt="icon"
          className="w-18 h-18"
        />
      </div>
      <h2>{heading}</h2>
      <p>{peragraph}</p>
    </div>
  )
}
