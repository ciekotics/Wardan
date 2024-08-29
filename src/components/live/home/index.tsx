
// CUSTOM IMPORTS
import HeroSection from "./hero"
import HowItWorksSection from "./how-it-works"
import ProductsSection from "./products"

const HomePage = () => {
  return (
    <article id="home" style={{
      overflow: "hidden"
    }}>
      
      <HeroSection />
      <HowItWorksSection />
      <ProductsSection />
    </article>
  )
}

export default HomePage