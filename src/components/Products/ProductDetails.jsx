import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa6";
import Product from "./Product";
import { FaCartShopping, FaHeart } from "react-icons/fa6";


const ProductDetails = () => {
     const [count, setCount] = useState(0)

     const { id } = useParams();
     const [product, setProduct] = useState([]);
     const [products, setProducts] = useState([]);
     console.log(product)
     const { productName, images, description, price } = product;
     console.log(images)
     useEffect(() => {
          axios.get(`https://api-fresh-harvest.code-commando.com/api/v1/products/${id}`)
               .then(res => {
                    setProduct(res.data.data)
                    // console.log(res.data);
               })
               .catch(error => {
                    toast.error(error)
               })
     }, [id])
     useEffect(() => {
          axios.get(`https://api-fresh-harvest.code-commando.com/api/v1/products`)
               .then(res => {
                    setProducts(res.data.data)
                    // console.log(res.data);
               })
               .catch(error => {
                    toast.error(error)
               })
     }, [id])
     return (
          <div className="lg:max-w-[1200px]  md:max-w-[750px]  max-w-[400px] mx-auto mt-10 mb-10">
               <div className="flex lg:flex-row flex-col items-center justify-between ">
                    <div>
                         <img className="w-[400px] h-[400px] object-cover" src={images} alt="" />
                    </div>
                    <div>
                         <div className="space-y-4">
                              <h1 className="text-4xl font-bold">{productName}</h1>
                              <div className="flex gap-3 items-center text-[rgba(255,184,72,1)]">
                                   <FaStar />
                                   <FaStar />
                                   <FaStar />
                                   <FaStar />
                                   <FaStar />
                                   <h1 className="text-base font-medium">5.0 (1 review)</h1>
                              </div>
                              <h1 className="text-[#FF6A1A] text-3xl  font-bold">${price}</h1>

                              <p className="w-[400px] text-lg font-normal">{description}</p>
                         </div>

                         <div className="flex gap-4 items-center mt-14">
                              <h1 className="text-xl font-medium">Quantity</h1>
                              <div className="flex items-center  ">
                                   <button className="text-4xl text- font-medium  px-2 border-gray-300 border " onClick={() => setCount((count) => count - 1)}>-</button>
                                   <h1 className="text-3xl text- font-medium  py-2 px-2 ">{count}</h1>
                                   <button className="text-4xl text- font-medium border px-2 border-gray-300" onClick={() => setCount((count) => count + 1)}>+</button>
                                   <h1 className="text-2xl ml-2 text- font-medium  border-black">/kg</h1>
                              </div>

                         </div>
                         <div className="flex lg:flex-row flex-col lg:gap-10 gap-4 mt-6">
                              <button className="hover:bg-[#FF6A1A] lg:px-8 px-4 py-4 flex items-center  gap-2 text-lg font-medium hover:text-white justify-center" >
                                   <FaHeart></FaHeart>
                                   <p className="font-bold">Save as favorite</p>
                              </button>

                              <button className="bg-[#FF6A1A] justify-center lg:px-8 px-4 py-4 text-white flex items-center  gap-2 text-lg font-medium"><FaCartShopping /> Add to cart </button>
                         </div>

                    </div>
               </div>
               <div className="mt-10">
                    <h1 className="text-xl font-bold border bg-[#749B3F] text-white border-gray-400 inline-block px-4 py-2">Description</h1>
                    <p className="mt-10 lg:w-3/5 w-full text-sm font-medium">{description}</p>
               </div>
               <div className="text-center space-y-4 mt-14">
                    <h1 className="text-[#749B3F] text-xl font-medium">Our Products</h1>
                    <h1 className="text-2xl font-medium">Related products</h1>
                    <p>We pride ourselves on offering a wide variety of fresh and flavorful <br />fruits, vegetables, and salad ingredients.</p>


               </div>

               <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 mt-14">
                    {
                         products.slice(0, 4).map(product => <Product product={product} key={product.id}></Product>)
                    }
               </div>
          </div>
     );
};

export default ProductDetails;