import React, { useContext, useMemo } from "react";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>Your cart is empty</h2>
        <p>Add some products to continue shopping.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="font-bold text-2xl mb-4">Your Cart</h2>

      {cart.map((item) => {
        const subtotal = item.price * item.quantity;

        return (
          <div
            key={item.id}
            className="border p-4 mb-4 flex justify-between items-center gap-4"
          >
            <div className="text-center">
              <img src={item.image} alt="item-img" className="h-40 mb-2" />
              <p className="px-2 py-2 rounded-xl text-white bg-gray-600 opacity-60">Qty: {item.quantity}</p>
            </div>

            <div className="text-right w-full">
              <div>
                <h4 className="font-bold">{item.title}</h4>
                <p clas sName="font-medium mb-4">Price: ₹{item.price}</p>
                <p className="font-semibold">Total: ₹{subtotal.toFixed(2)}</p>
              </div>

              <div className="flex text-right space-x-1.5">
                <button
                  onClick={() =>
                    dispatch({ type: "INCREMENT", payload: item.id })
                  }
                >
                  +
                </button>

                <button
                  onClick={() =>
                    dispatch({ type: "DECREMENT", payload: item.id })
                  }
                >
                  -
                </button>

                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: item.id })
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* CART TOTAL */}
      <div className="border-t pt-4">
        <h3 className="text-xl font-bold">Cart Total: ₹{total.toFixed(2)}</h3>

        <button
          className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch({ type: "CLEAR_CART" })}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
