import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import axios from "axios";
import Product from "./Product";
import { Link } from "react-router";

const Products = () => {

     const [products, setProducts] = useState([]);


     console.log(products.length)

     useEffect(() => {
          axios.get('https://api-fresh-harvest.code-commando.com/api/v1/products')
               .then(res => {
                    setProducts(res.data.data)
               })
               .catch(error => {
                    toast.error(error)
               })
     }, [])
     return (
          <div>
               <div className="text-center space-y-4 mt-14">
                    <h1 className="text-[#749B3F] text-xl font-medium">Our Products</h1>
                    <h1 className="text-2xl font-medium">Our Fresh Products</h1>
                    <p>We pride ourselves on offering a wide variety of fresh and flavorful <br />fruits, vegetables, and salad ingredients.</p>
               </div>

               <div className="grid lg:grid-cols-4 gap-6  md:grid-cols-3 grid-cols-2">
                    <>
                         {
                              products.slice(0, 8).map(product => <Product key={product.id} product={product}></Product>)
                         }

                    </>
               </div>
               <div className="flex justify-center">
                    <Link to={'/shop'}>
                         <button className="border-2 border-orange-400 rounded-xl text-lg font-semibold px-8  mt-12 py-4">See All Products</button>
                    </Link>
               </div>
          </div>
     );
};

export default Products;