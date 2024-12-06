import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
     return (
          <div>
               <Navbar></Navbar>
               <Outlet></Outlet>

               <Toaster
                    position="top-right"
               ></Toaster>
          </div>
     );
};

export default Root;