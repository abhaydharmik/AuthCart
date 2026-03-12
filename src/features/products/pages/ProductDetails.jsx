import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../productService";
import { CartContext } from "../../../context/CartContext";
import Navbar from "../../../components/layout/Navbar";
// import { toast, ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import { showSuccess } from "../../../utils/toast";

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
    // toast.success("Product added!!");
    showSuccess("Product added to cart")
  }, [product, dispatch]);

  if (loading) return <h2>Loading..</h2>;

  if (error) return <h2>{error}</h2>;

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <>
      <Navbar />
      <div className="bg-gray-300 flex flex-col  p-4">
        <div className="mb-4">
          <h2 className="font-bold text-lg">{product.title}</h2>
        </div>
        <div className=" p-4 flex justify-around items-center">
          <img src={product.image} alt={product.title} className="h-100" />
          <div className="text-center flex flex-col mt-4 font-medium space-y-2">
            <p className="">{product.description}</p>
            <h3 className="text-xl font-bold text-blue-800">
              ₹{product.price}
            </h3>
            <div className="flex justify-center items-center">
              <button
                onClick={handleAddToCart}
                className="text-white rounded-lg  px-4 py-2 bg-blue-500 hover:bg-blue-800 cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <Toaster position="bottom-left" reverseOrder={true} />
      </div>
    </>
  );
};

export default ProductDetails;
