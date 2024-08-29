
// CUSTOM IMPORTS
import HeroSection from "./hero"
import HowItWorksSection from "./how-it-works"
import ProductsSection from "./products"
import AboutUsSection from "./about-us"

const HomePage = () => {
  return (
    <article id="home" style={{
      overflow: "hidden"
    }}>
      
      <HeroSection />
      <HowItWorksSection />
      <ProductsSection />
      <AboutUsSection />
    </article>
  )
}

export default HomePage