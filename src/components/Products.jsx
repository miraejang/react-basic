import React, { useEffect, useState } from "react";

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((show) => !show);
  };

  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));

    // componentWillUnmount
    return () => {
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
  }, [checked]);

  return (
    <>
      <input
        onChange={handleChange}
        value={checked}
        type="checkbox"
        name="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox">Show Only Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.naem}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
