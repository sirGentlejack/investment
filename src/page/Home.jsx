import Hero from "../components/Hero";
import Cards from "../components/Cards";
import AboutUs from "../components/About"
import Testimonials from "../components/Testimonials";
import TestimonialsData from "../data/Data"

function Home() {
  return (
    <div>
      <Hero />
      <Cards />
      <AboutUs />
      <Testimonials testimonials={TestimonialsData} />
    </div>
  );
}
export default Home;
