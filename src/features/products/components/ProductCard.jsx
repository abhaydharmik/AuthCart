import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product">
      <div className="img-container">
        <img src={product.image} alt={product.image} />
      </div>

      <h4>{product.title}</h4>
      <p>₹{product.price}</p>
      <Link to={`/product/${product.id}`}>View</Link>
    </div>
  );
};

export default React.memo(ProductCard);
