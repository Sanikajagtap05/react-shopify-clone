import React from "react";
import img from "../assets/do.webp"; // Your laptop image

export default function Hero() {
  return (
    <section className="hero">
      {/* Left Content */}
      <div className="hero-content">
        <p className="hero-price">Starting At 999dt</p>

        <h1>
          The best notebook <br />
          collection 2025
        </h1>

        <h3>
          Exclusive offer <span>-50%</span> off this week
        </h3>

        <button className="hero-btn">
          Grab the opportunity Now
        </button>
      </div>

      {/* Right Image */}
      <div className="hero-image">
        <img src={img} alt="Laptop" />
      </div>
    </section>
  );
}