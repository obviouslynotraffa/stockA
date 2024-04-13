import Hero from "../sections/Home/Hero"
import BestBrands from "../sections/Home/BestBrands"
import TravisScottSection from "../sections/Home/TravisScottSection"
import Subscribe from "../sections/Home/Subscribe"
import Services from "../sections/Home/Services"
import CustomerReviews from "../sections/Home/CustomerReviews"

const Home = () => {
  return (
    <section className="max-container">
      <Hero />
      <BestBrands />
      <TravisScottSection/>
      <Subscribe/>
      <Services/>
      <CustomerReviews/>
    </section>
  )
}

export default Home