"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-start justify-start h-screen mt-10 p-4">
      <h1 className="font-bold text-xl"> Latest Products</h1>
      <div className="flex flex-wrap items-center justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-center mt-4 h-auto w-1/4 p-4 rounded"
          >
            <img
              className="w-48 h-48"
              src={product.image}
              alt={product.title}
            />
            <h2 className="font-bold text-lg text-center">{product.title}</h2>
            <p className="font-bold text-xl">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
