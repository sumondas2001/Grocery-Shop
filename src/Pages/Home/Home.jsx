import HeroSection from "../../components/HeroSection/HeroSection";
import Products from "../../components/Products/Products";
import Testimonial from "../../components/Testimonial/Testimonial";
import AboutUs from "../AboutUs/AboutUs";
import Blog from "../Blog/Blog";

const Home = () => {
     return (
          <div>
               <HeroSection></HeroSection>
               <Products></Products>
               <AboutUs></AboutUs>
               <Testimonial></Testimonial>
               <Blog></Blog>
          </div>
     );
};

export default Home;