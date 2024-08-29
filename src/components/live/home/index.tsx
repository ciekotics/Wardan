
// CUSTOM IMPORTS
import HeroSection from "./hero"
import HowItWorksSection from "./how-it-works"
import ProductsSection from "./products"
import AboutUsSection from "./about-us"
import ContactSection from "./contact"

const HomePage = () => {
  return (
    <article id="home" style={{
      overflow: "hidden"
    }}>
      
      <HeroSection />
      <HowItWorksSection />
      <ProductsSection />
      <AboutUsSection />
      <ContactSection />
    </article>
  )
}

export default HomePage