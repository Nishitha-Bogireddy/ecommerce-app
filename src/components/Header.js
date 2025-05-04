import React, { useContext } from "react";
import { Link } from "react-router-dom";
//import "./../styles.css";

import { CartContext } from "../context/CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{ padding: "1rem", background: "#333", color: "white" }}>
      <Link to="/" style={{ color: "white", marginRight: "1rem" }}>Home</Link>
      <Link to="/cart" style={{ color: "white" }}>
        Cart ({totalItems})
      </Link>
    </nav>
  );
}
