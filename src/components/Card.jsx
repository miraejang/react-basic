import React from "react";

export default function Card({ children }) {
  return (
    <div
      style={{
        width: "20rem",
        minHeight: "20rem",
        padding: "2rem",
        backgroundColor: "#000",
        borderRadius: "2rem",
        color: "#fff",
      }}
    >
      {children}
    </div>
  );
}
