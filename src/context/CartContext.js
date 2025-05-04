import React, { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = state.find(p => p.id === action.payload.id);
      if (item) {
        return state.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case "INCREMENT":
      return state.map(p =>
        p.id === action.payload ? { ...p, quantity: p.quantity + 1 } : p
      );
    case "DECREMENT":
      return state.map(p =>
        p.id === action.payload && p.quantity > 1
          ? { ...p, quantity: p.quantity - 1 }
          : p
      );
    case "REMOVE":
      return state.filter(p => p.id !== action.payload);
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
