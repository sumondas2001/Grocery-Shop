import { Link } from "react-router";

const Product = ({ product }) => {
     console.log(product)
     const { images, productName, price, id } = product;
     return (
          <div className="text-center flex flex-col items-center">
               <img className="w-[200px] h-[200px] mb-4" src={images} alt="" />
               <h1 className="text-lg font-medium mb-2">{productName}</h1>
               <p className="text-lg font-normal mb-3">
                    $ {price}/kg
               </p>
               <Link to={`/products/${id}`}>
                    <button className="lg:px-20 px-6 py-3 hover:bg-[rgba(255,106,26,1)] hover:text-white text-lg font-medium rounded-lg">
                         Add to Cart
                    </button>
               </Link>
          </div>

     );
};

export default Product;