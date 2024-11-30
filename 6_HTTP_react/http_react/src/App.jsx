/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const url = "http://localhost:3000/products";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }

    getData();
  }, []);

  // 2 - Envio de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // requisição
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const addedProduct = await res.json();
    setProducts((prevProducts) => [...prevProducts, addedProduct]);
  };

  return (
    <div>
      <h1>HTTP com react</h1>
      {/** 1 - Resgate de dados */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R${product.price}
          </li>
        ))}
      </ul>

      {/* 2 */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Preço</span>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default App;
