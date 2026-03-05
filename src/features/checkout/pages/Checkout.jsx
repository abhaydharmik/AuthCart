import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Checkout = () => {

  const {cart, dispatch} = useContext(CartContext)
   const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    address: "",
    payment: "cod",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!form.name || !form.address){
        alert("Please fill all fields")
        return
    }

    //simulate order
    alert("Order placed successfully")

    dispatch({type: "CLEAR_CART"})

    navigate("/")
  }

   if(cart.length === 0){
        return <h2>Your cart is empty</h2>
    }

  return (
    <div>
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            type="txt"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="payment">Payment Method</label>
          <select name="payment">
            <option value="cod">Cash on Delivery</option>
            <option value="card">Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        <button type="submit">Place Order</button>
      </form>

      <p>{form.name}</p>
      <p>{form.address}</p>
      <p>{form.payment}</p>
    </div>
  );
};

export default Checkout;
