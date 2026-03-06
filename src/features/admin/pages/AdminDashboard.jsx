import React, { useEffect, useState } from 'react'
import {fetchProducts} from "../../products/productService"

const AdminDashboard = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts()
      setProducts(data)
    }

    loadProducts()
  }, [])
  

  return (
    <div>
        <h2>Admin Dashboard</h2>

        <h3>All Products</h3>

        {products.map((product)=> (
          <div key={product.id} style={{border: "1px solid gray", margin: "1rem", padding: "1rem"}}>
            <h4>{product.title}</h4>
            <p>₹{product.price}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}

        
    </div>
  )
}

export default AdminDashboard