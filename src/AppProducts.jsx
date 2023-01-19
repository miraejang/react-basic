import React, { useState } from "react";
import Products from "./components/Products";

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);

  return (
    <>
      {showProducts && <Products />}
      <button
        onClick={() => {
          setShowProducts((show) => !show);
        }}
      >
        Toggle
      </button>
    </>
  );
}
