import React from "react";

export default function CategoryCard(props) {
  return (
    <div
      style={{
        width: "250px",
        height: "100px",
        background: "#f3f3f3",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3>{props.name}</h3>

      <p style={{ color: "blue" }}>
        VIEW PRODUCTS
      </p>
    </div>
  );
}