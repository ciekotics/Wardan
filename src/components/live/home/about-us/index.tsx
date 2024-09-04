import AboutUsDetails from './about-details'
import Image from 'next/image'

const AboutUsSection = () => {
  return (
    <section id='about' aria-labelledby='about-label'>
      <AboutUsDetails />
      {/* <div className="pattern1">
        <Image src={"/images/pattern-1.png"} alt="" width={60} height={60} />
      </div> */}
    </section>
  )
}

export default AboutUsSection