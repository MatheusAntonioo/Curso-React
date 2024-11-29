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
    </div>
  );
}

export default App;
