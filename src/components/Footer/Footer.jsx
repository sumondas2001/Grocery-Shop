import { Link } from "react-router";
const logo = "../../../src/assets/icon/Logo.svg";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";


const Footer = () => {
     return (
          <div className="lg:max-w-[1200px] md:max-w-[750px]  max-w-[400px] mx-auto mt-10 mb-10">
               <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
                    <div>
                         <Link className="flex items-center gap-4" to={"/"}>
                              <img className="size-8 md:size-10" src={logo} alt="" />
                              <h1 className=" md:text-xl text-sm font-bold text-green-900">Fresh Harvests</h1>
                         </Link>
                    </div>
                    <div>
                         <ul>
                              <li className="font-bold mb-3">Quick links 1</li>
                              <Link to={'/'}><li className="font-medium mt-1">Home</li></Link>
                              <Link to={'/blog'}><li className="font-medium mt-1">Blog</li></Link>
                              <Link to={'/shop'}><li className="font-medium mt-1">Shop</li></Link>
                              <Link to={'/aboutUs'}><li className="font-medium mt-1">About US</li></Link>

                         </ul>
                    </div>
                    <div>
                         <ul >
                              <li className="font-bold mb-3">Quick links 2</li>

                              <Link><li className="font-medium mt-1">Favorites</li></Link>
                              <Link><li className="font-medium mt-1">Cart</li></Link>
                              <Link><li className="font-medium mt-1">Sign in</li></Link>
                              <Link><li className="font-medium mt-1">Register</li></Link>


                         </ul>
                    </div>
                    <div>
                         <h1 className="font-bold mb-3">Contact us</h1>

                         <div className="space-y-2">
                              <h1 className="flex items-center gap-2 font-medium"><FaPhoneAlt /> 01800000000</h1>
                              <h2 className="flex items-center gap-2 font-medium"> <FaEnvelope />Freshharvests@gmail.com</h2>
                              <h2 className="flex items-center gap-2 font-medium"> <FaLocationDot />Tanjung Sari Street, Pontianak, Indonesia</h2>
                         </div>
                    </div>
                    <h1 className="text-sm w-96 mt-10">© Copyright 2024, All Rights Reserved by Banana Studio</h1>
               </div>
          </div>
     );
};

export default Footer;