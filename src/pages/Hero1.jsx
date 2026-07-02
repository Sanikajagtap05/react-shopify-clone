import React from "react";
import img from "../assets/do1.jpg"; // Your banner image

export default function Hero1() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "470px",
        display: "flex",
        backgroundColor: "#d8e0ea",
      }}
    >
      {/* Left Side Image */}
      <div
        style={{
          width: "50%",
          height: "470px",
        }}
      >
        <img
          src={img}
          alt="Offer"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Right Side Content */}
      <div
        style={{
          width: "50%",
          height: "470px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "58px",
            fontWeight: "700",
            color: "#000",
            marginBottom: "10px",
            fontFamily: "Georgia, serif",
          }}
        >
          Don't miss the offer!
        </h1>

        <h2
          style={{
            fontSize: "42px",
            fontWeight: "600",
            color: "#000",
            marginBottom: "40px",
            fontFamily: "Georgia, serif",
          }}
        >
          Grab it now
        </h2>

        <button
          style={{
            padding: "18px 45px",
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "10px",
            fontSize: "24px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            transition: "0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#000";
            e.target.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#fff";
            e.target.style.color = "#000";
          }}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}