import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
        <img  className="h-40 mx-auto object-contain" src={product.image} alt={product.image} />


        <h4 className="font-semibold mt-3 text-gray-800">{product.title}</h4>
        <p className="text-blue-600 font-bold">₹{product.price}</p>
      <Link className="block mt-3 bg-blue-500 text-white  text-center px-4 py-2 rounded hover:bg-blue-600" to={`/product/${product.id}`}>View</Link>
    </div>
  );
};

export default React.memo(ProductCard);
