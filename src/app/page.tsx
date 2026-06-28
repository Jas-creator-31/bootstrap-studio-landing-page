import Image from "next/image"
import Navbar from "./components/Navbar";
import bgMainImg from "@/assets/bg-masthead.jpg"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <header>
        <Image src={bgMainImg} alt="bg image" className="w-screen max-h-170"/>
      </header>
    </div>
  );
}
