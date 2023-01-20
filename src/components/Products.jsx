import React, { useState } from "react";
import useProducts from "../hooks/use-products";

export default function Products() {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();
  // const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });
  const [count, setCount] = useState(0);
  const handleChange = () => {
    setChecked((show) => !show);
  };

  // useEffect(() => {
  //   setLoading(true);
  //   setError(undefined);
  //   fetch(`data/${checked ? "sale_" : ""}products.json`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
  //       setProducts(data);
  //     })
  //     .catch((error) => setError(`에러 : ${error}`))
  //     .finally(() => setLoading(false));

  //   // componentWillUnmount
  //   return () => {
  //     console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
  //   };
  // }, [checked]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <input
        onChange={handleChange}
        value={checked}
        type="checkbox"
        name="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox">Show Only 🔥Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
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
