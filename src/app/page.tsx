import { cn } from "./utils/cn";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PreviewMain from "./components/PreviewMain";
import Main from "./components/Main";
import Testimonies from "./components/Testimonies";

export default function Home() {
  const mainText =
    "Build a landing page\n for your business or\n project and generate more leads!";
  const maintextForBottomOne = "Ready to get started? Sign up now!"
  const mainHeaderMaxImageHeigth = "max-h-150"
  const mainHeaderMaxImageHeigthForTheBottomOne = "max-h-88"

  return (
    <div className={cn(
      'flex flex-col flex-1',
      'bg-zinc-50 dark:bg-black',
      'font-sans'
      )}>
      <Navbar />
      <Header text={mainText} maxImageHieght={ mainHeaderMaxImageHeigth } />
      <PreviewMain />
      <Main />
      <Testimonies />
      <Header text={maintextForBottomOne} maxImageHieght={ mainHeaderMaxImageHeigthForTheBottomOne } />
    </div>
  );
}
