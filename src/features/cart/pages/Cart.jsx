import React, { useContext, useMemo } from 'react'
import { CartContext } from '../../../context/CartContext'

const Cart = () => {

    const {cart, dispatch} = useContext(CartContext)
    
    const total = useMemo(() => {return cart.reduce((sum, item)=> sum + item.price * item.quantity, 0)}, [cart])

    if(cart.length === 0) {
        return (<div style={{textAlign: "center", marginTop: "2rem"}}>
            <h2>Your cart is empty</h2>
            <p>Add some products to continue shopping.</p>
        </div>)
    } 

  return (
    <div>
        <h2>Your Cart</h2>

        {cart.map((item)=> (
            <div>
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>
                <p>Qty: {item.quantity}</p>

                <button onClick={()=>  dispatch({type: "INCREMENT", payload: item.id})}>+</button>
                <button onClick={()=>  dispatch({type: "DECREMENT", payload: item.id})}>-</button>
                <button onClick={()=>  dispatch({type: "REMOVE_ITEM", payload: item.id})}>Remove</button>

                <h3>Total: ₹{total.toFixed(2)}</h3>

                <button onClick={()=> dispatch({type: "CLEAR_CART"})}>Clear cart</button>
            </div>
        ))}


    </div>
  )
}

export default Cart