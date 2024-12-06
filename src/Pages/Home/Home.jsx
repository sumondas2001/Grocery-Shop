import HeroSection from "../../components/HeroSection/HeroSection";
import Products from "../../components/Products/Products";
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
     return (
          <div>
               <HeroSection></HeroSection>
               <Products></Products>
               <AboutUs></AboutUs>
               <SpecialOffer></SpecialOffer>
          </div>
     );
};

export default Home;