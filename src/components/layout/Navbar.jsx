import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div>
        <Link className="text-xl font-bold" to={"/"}>AuthCart</Link>
      </div>

      <div className="space-x-4">
        <Link className="link" to={"/"}>Home</Link>
        <Link className="link" to={"/cart"}>Cart ({totalItems})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
