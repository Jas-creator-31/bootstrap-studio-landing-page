import { cn } from "./utils/cn";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PreviewMain from "./components/PreviewMain";
import Main from "./components/Main";
import Testimonies from "./components/Testimonies";

export default function Home() {
  return (
    <div className={cn(
      'flex flex-col flex-1',
      'bg-zinc-50 dark:bg-black',
      'font-sans'
      )}>
      <Navbar />
      <Header />
      <PreviewMain />
      <Main />
      <Testimonies />
      <Header/>
    </div>
  );
}
