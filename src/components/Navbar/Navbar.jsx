import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
const logo = "../../../src/assets/icon/Logo.svg";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { cartContext } from "../context/Context";


const Navbar = () => {
     const { addToCard } = useContext(cartContext);
     const { addToFavorites } = useContext(cartContext);

     // mobile device and tablet  dropDown icon

     const [isDropdownOpen, setIsDropdownOpen] = useState(false);


     useEffect(() => {
          setIsDropdownOpen(false)
     }, [])

     const handelDropdownToggle = () => {
          setIsDropdownOpen(!isDropdownOpen);
     }




     const links = (
          <>
               <li className=" text-black">
                    <NavLink
                         to="/"
                         className={({ isActive }) =>
                              isActive
                                   ? "focus:bg-transparent  focus:text-[rgba(116,155,63,1)]  text-[rgba(116,155,63,1)] "
                                   : ""
                         }
                    >
                         Home
                    </NavLink>
               </li>
               <li className=" text-black">
                    <NavLink
                         to="/shop"
                         className={({ isActive }) =>
                              isActive
                                   ? " focus:bg-transparent  focus:text-[rgba(116,155,63,1)]  text-[rgba(116,155,63,1)]"
                                   : ""
                         }
                    >
                         Shop
                    </NavLink>
               </li>

               <li className=" text-black">
                    <NavLink
                         to="/aboutUS"
                         className={({ isActive }) =>
                              isActive
                                   ? " focus:bg-transparent  focus:text-[rgba(116,155,63,1)]  text-[rgba(116,155,63,1)]"
                                   : ""
                         }
                    >
                         About Us
                    </NavLink>
               </li>

               <li className=" text-black">
                    <NavLink
                         to="/blog"
                         className={({ isActive }) =>
                              isActive
                                   ? " focus:bg-transparent  focus:text-[rgba(116,155,63,1)]  text-[rgba(116,155,63,1)]"
                                   : ""
                         }
                    >
                         Blog
                    </NavLink>
               </li>

          </>
     );

     return (


          <div className="  text-white md:py-4 py-2 ">
               <div className="lg:max-w-[1200px] md:max-w-[750px]  max-w-[400px] py-1 navbar mx-auto">
                    <div className="navbar-start md:w-10 w-8">
                         <div className="dropdown">
                              {/* Toggle Dropdown */}
                              <div
                                   onClick={handelDropdownToggle}
                                   tabIndex={0}
                                   role="button"
                                   className="mr-4 lg:hidden"
                              >
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M4 6h16M4 12h8m-8 6h16"
                                        />
                                   </svg>
                              </div>
                              {/* // Conditionally render dropdown */}
                              {
                                   isDropdownOpen && (
                                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 lg:w-52  md:w-44 w-36 p-2 shadow text-base font-semibold px-1">
                                             {links}
                                        </ul>
                                   )
                              }

                         </div>
                    </div>

                    <div className="z-50 navbar-start">
                         <Link className="flex items-center gap-4" to={"/"}>
                              <img className="size-8 md:size-10" src={logo} alt="" />
                              <h1 className=" md:text-xl text-sm font-bold text-green-900">Fresh Harvests</h1>
                         </Link>

                    </div>

                    <div className="navbar-center  hidden lg:flex px-2 z-50">

                         <ul className="menu menu-horizontal brightness-150 text-base font-semibold px-2">
                              {links}
                         </ul>


                    </div>

                    <div className="navbar-end z-50">

                         <div className="dropdown dropdown-end text-black">
                              <div
                                   tabIndex={0}
                                   role="button"
                                   className="btn btn-ghost btn-circle avatar"
                              >



                              </div>
                              <ul
                                   tabIndex={0}
                                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 py-2 shadow"
                              >

                                   <li className="">
                                        <button
                                             className="text-sm font-medium text-black hover:bg-red-500 p-2 rounded-lg"
                                        >
                                             LogOut
                                        </button>
                                   </li>
                              </ul>
                         </div>

                         <div className="flex items-center gap-5">
                              <div className="flex relative items-center gap-2 text-[rgba(116,155,63,1)]">
                                   <FaHeart className="text-xl"></FaHeart>
                                   <h1 className="hidden  md:block">Favorites</h1>
                                   <p className="bg-red-500 text-xs rounded-full -left-0 -top-2 px-1 absolute text-white">{addToFavorites}</p>
                              </div>
                              <div className="flex items-center gap-2 relative  text-[rgba(116,155,63,1)]">
                                   <FaCartShopping className=""></FaCartShopping>
                                   <h1 className="hidden   md:block">Cart</h1>
                                   <p className="bg-red-500 text-xs rounded-full -left-0 -top-2 px-1 absolute text-white">{addToCard}</p>
                              </div>
                              <Link to={"/login"}>
                                   <button className="text-sm  font-semibold px-3 flex items-center border-2 border-black rounded-md text-black py-2">
                                        Login
                                   </button>
                              </Link>
                         </div>

                    </div>
               </div>

          </div>


     );
};

export default Navbar;









