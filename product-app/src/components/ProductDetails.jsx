import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Change to singular and null

  async function fetchData() {
    try {
      let res = await fetch(`https://fakestoreapi.com/products/${id}`);
      let data = await res.json();
      setProduct(data); // Save single object
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]); // Add id as dependency just in case

  if (!product) return <h2>Loading...</h2>; // Handle loading

  return (
    <div>
      <img src={product.image} alt={product.title} width="200" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <strong>${product.price}</strong>
    </div>
  );
}
