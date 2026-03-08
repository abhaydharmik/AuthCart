import React, { useEffect, useState } from "react";
fetchProducts;
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../productService";
import Spinner from "../../../components/ui/Spinner";
import ErrorMessage from "../../../components/ui/ErrorMessage";
import Navbar from "../../../components/layout/Navbar";

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
      <Navbar />
      <div className="p-4 bg-gray-300">
        <div className="flex justify-between mb-4">
          <h2 className="font-bold text-xl">Products</h2>
          <input
            type="text"
            placeholder="Search Product.."
            value={search}
            className="border px-2 py-1 rounded-lg"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filterProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
