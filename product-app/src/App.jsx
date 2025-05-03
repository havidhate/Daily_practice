import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Product } from "./components/Product";
import { NavBar } from "./components/NavBar";
import { Unknown } from "./components/Unknown";
import { ProductDetails } from "./components/ProductDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<Unknown />} />
      </Routes>
    </>
  );
}

export default App;
