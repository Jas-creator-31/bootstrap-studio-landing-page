import MainSection from '@/app/components/MainSection'
import bgShowcase1 from '@/assets/bg-showcase-1.jpg'
import bgShowcase2 from '@/assets/bg-showcase-2.jpg'
import bgShowcase3 from '@/assets/bg-showcase-3.jpg'

export default function Main() {

  const section1 = {
    image: bgShowcase1,
    heading: 'Fully Reponsive Design',
    paragraph: "you use a theme created with Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
  }

  const section2 = {
    image: bgShowcase2,
    heading: 'Updated For Bootstrap 5',
    paragraph: 'Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes are now using Bootstrap 5!',
  }

  const section3 = {
    image: bgShowcase3,
    heading: 'Easy to Use & Customize',
    paragraph: 'Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!',
  }

  return (
    <main>
      <MainSection image={section1.image} heading={section1.heading} paragraph={section1.paragraph} rowReverse={true} />
      <MainSection image={section2.image} heading={section2.heading} paragraph={section2.paragraph} />
      <MainSection image={section3.image} heading={section3.heading} paragraph={section3.paragraph} rowReverse={true} />
    </main>
  )
}
