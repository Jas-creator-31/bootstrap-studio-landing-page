import cn from '@/app/utils/cn'
import MainSection from '@/app/components/MainSection'
import bgShowcase1 from '@/assets/bg-showcase-1.jpg'

export default function Main() {

  const section1 = {
    image: bgShowcase1,
    heading: 'Fully 5555555 Design',
    paragraph: "you use a theme created with Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
  }

  return (
    <main>
      <MainSection image={section1.image} heading={section1.heading} paragraph={section1.paragraph} rowReverse={true}/>
    </main>
  )
}
