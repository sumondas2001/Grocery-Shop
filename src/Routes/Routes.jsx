import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import ProductDetails from "../components/Products/ProductDetails";
import Login from "../components/Login/Login";
import SingUp from "../components/SingUp/SingUp";

const router = createBrowserRouter([
     {
          path: '/',
          element: <Root></Root>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/shop',
                    element: <Shop></Shop>
               },
               {
                    path: '/aboutUs',
                    element: <AboutUs></AboutUs>
               },
               {
                    path: '/blog',
                    element: <Blog></Blog>
               },
               {
                    path: '/products/:id',
                    element: <ProductDetails></ProductDetails>
               },
               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/singUp',
                    element: <SingUp></SingUp>
               }
          ]
     }
])

export default router;