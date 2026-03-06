import React, { useEffect, useState } from "react";
fetchProducts;
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../productService";
import Spinner from "../../../components/ui/Spinner";
import ErrorMessage from "../../../components/ui/ErrorMessage";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) return <Spinner />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h2>Products</h2>
      <input
        type="text"
        placeholder="Search Product.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className='product-card'>
        {filterProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
