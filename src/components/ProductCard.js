import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
      <div className="card">
        <img src={product.image} alt={product.title} />
        <h4>{product.title}</h4>
        <p>₹{product.price}</p>
        <p>⭐ {product.rating.rate}</p>
      </div>
    </Link>
  );
}
