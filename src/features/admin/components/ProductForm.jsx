import React from 'react'

const ProductForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        alert("Product added successfully")
    }

  return (
    <form onSubmit={handleSubmit}>
        <h3>Add Product</h3>

        <input type="text" placeholder='Title' />
        <input type="text" placeholder='Price' />
        <input type="text" placeholder='Image URL' />

        <button type="submit">Add Product</button>
    </form>
  )
}

export default ProductForm