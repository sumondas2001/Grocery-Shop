import HeroSection from "../../components/HeroSection/HeroSection";
import Products from "../../components/Products/Products";
import Testimonial from "../../components/Testimonial/Testimonial";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
     return (
          <div>
               <HeroSection></HeroSection>
               <Products></Products>
               <AboutUs></AboutUs>
               <Testimonial></Testimonial>
          </div>
     );
};

export default Home;