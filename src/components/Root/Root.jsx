import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";

const Root = () => {
     return (
          <div>
               <Navbar></Navbar>
               <Outlet></Outlet>

               <Toaster
                    position="top-right"
               ></Toaster>
               <Footer></Footer>
          </div>
     );
};

export default Root;