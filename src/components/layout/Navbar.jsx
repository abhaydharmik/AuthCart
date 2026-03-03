import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Navbar = () => {
    
    const {cart} =  useContext(CartContext)

    const  totalItems = cart.reduce((total, item)=> total + item.quantity, 0)
  
    return (
    <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>Cart ({totalItems})</Link>
    </nav>
  )
}

export default Navbar