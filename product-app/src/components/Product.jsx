import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Product() {
  const [products, setProducts] = useState([]);

  async function fetchData() {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    setProducts(data);
  }
  useEffect(() => {
    console.log("hi");
    fetchData();
  }, []);
  return (
    <>
      <h1>Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "30px",
        }}
      >
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} width="150px" alt="" />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <Link to={`/product/${product.id}`}>View Product</Link>
          </div>
        ))}
      </div>
    </>
  );
}
