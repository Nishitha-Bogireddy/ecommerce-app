import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./../Cart.css";

export default function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div>
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>
            <div>
              <button onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}>+</button>
              <button onClick={() => dispatch({ type: "REMOVE", payload: item.id })}>Remove</button>
            </div>
          </div>
        </div>
      ))}
      <h3>Total: ₹{total.toFixed(2)}</h3>
    </div>
  );
}

