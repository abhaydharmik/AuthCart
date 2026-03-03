import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../features/products/pages/Home'
import ProductDetails from '../features/products/pages/ProductDetails'
import Cart from '../features/cart/pages/Cart'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
        <Route path='/cart' element={<Cart />}/>
    </Routes>
  )
}

export default AppRoutes  