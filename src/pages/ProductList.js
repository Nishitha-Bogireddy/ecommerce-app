import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import "./../styles.css";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
