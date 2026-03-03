import React, { Children, useReducer, createContext, useEffect } from "react";
import { cartReducer } from "../features/cart/CartReducer";

export const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{cart, dispatch}}>
      {children}
    </CartContext.Provider>
  );
};
