import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../productService";
import { CartContext } from "../../../context/CartContext";
import Navbar from "../../../components/layout/Navbar";

const ProductDetails = () => {
  const { id } = useParams();
  const { dispatch } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchSingleProduct(id);
        setProduct(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const handleAddToCart = useCallback(() => {
    dispatch({ type: "ADD_ITEM", payload: product });
  }, [product, dispatch]);

  if (loading) return <h2>Loading..</h2>;

  if (error) return <h2>{error}</h2>;

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <>
      <Navbar />
      <div className="product-detail">
        <div className="product-detail-title">
          <h2>{product.title}</h2>
        </div>
        <div className="product-detail-info">
          <img src={product.image} alt={product.title} />
          <div className="product-detail-price">
            <p>{product.description}</p>
            <h3>₹{product.price}</h3>
          </div>
        </div>

        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </>
  );
};

export default ProductDetails;
