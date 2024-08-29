
// CUSTOM IMPORTS
import HeroSection from "./hero"
import HowItWorksSection from "./how-it-works"

const HomePage = () => {
  return (
    <article id="home" style={{
      overflow: "hidden"
    }}>
      
      <HeroSection />
      <HowItWorksSection />
    </article>
  )
}

export default HomePage