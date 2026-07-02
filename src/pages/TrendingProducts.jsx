import React from "react";
import { FaStar, FaRegStar, FaShoppingCart } from "react-icons/fa";

// Import Images
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";
import img7 from "../assets/img7.webp";
import img8 from "../assets/img8.webp";

export default function TrendingProducts() {
  const products = [
    {
      id: 1,
      image: img1,
      category: "Beauty",
      name: "Essence Mascara Lash Princess",
      rating: 2.56,
      stars: 3,
      price: "$8.94",
      oldPrice: "$9.99",
      discount: "-10.48%",
    },
    {
      id: 2,
      image: img2,
      category: "Beauty",
      name: "Eyeshadow Palette with Mirror",
      rating: 2.86,
      stars: 3,
      price: "$16.35",
      oldPrice: "$19.99",
      discount: "-18.19%",
    },
    {
      id: 3,
      image: img3,
      category: "Beauty",
      name: "Powder Canister",
      rating: 4.64,
      stars: 5,
      price: "$13.51",
      oldPrice: "$14.99",
      discount: "-9.84%",
    },
    {
      id: 4,
      image: img4,
      category: "Beauty",
      name: "Red Lipstick",
      rating: 4.36,
      stars: 4,
      price: "$11.41",
      oldPrice: "$12.99",
      discount: "-12.16%",
    },
    {
      id: 5,
      image: img5,
      category: "Beauty",
      name: "Nail Polish",
      rating: 4.22,
      stars: 4,
      price: "$7.99",
      oldPrice: "$9.99",
      discount: "-20%",
    },
    {
      id: 6,
      image: img6,
      category: "Fragrance",
      name: "CK Perfume",
      rating: 4.7,
      stars: 5,
      price: "$49.99",
      oldPrice: "$59.99",
      discount: "-16%",
    },
    {
      id: 7,
      image: img7,
      category: "Fragrance",
      name: "Coco Noir",
      rating: 4.9,
      stars: 5,
      price: "$89.99",
      oldPrice: "$99.99",
      discount: "-10%",
    },
    {
      id: 8,
      image: img8,
      category: "Fragrance",
      name: "Luxury Perfume",
      rating: 4.85,
      stars: 5,
      price: "$75.99",
      oldPrice: "$89.99",
      discount: "-15%",
    },
  ];

  return (
    <section className="container py-5">
      {/* Heading */}
      <div className="text-left mb-5">
        <h2
          className="fw-bold"
          style={{
            fontSize: "38px",
            letterSpacing: "1px",
          }}
        >
          Trending Products
        </h2>

        <p className="text-muted">
          Discover our best-selling beauty and fragrance collection.
        </p>
      </div>

      <div className="row g-4">
        {products.map((item) => (
          <div
            className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
            key={item.id}
          >
            <div
              className="card border-0 shadow-sm h-100"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                transition: "all .3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 30px rgba(0,0,0,.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              {/* Product Image */}
              <div className="text-center bg-light">
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid"
                  style={{
                    height: "190px",
                    objectFit: "contain",
                    padding: "20px",
                  }}
                />
              </div>

              {/* Card Body */}
              <div className="card-body p-3">
                {/* Category */}
                <small
                  className="text-uppercase text-secondary"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "1px",
                  }}
                >
                  {item.category}
                </small>

                {/* Product Name */}
                <h5
                  className="fw-bold mt-2"
                  style={{
                    fontSize: "18px",
                    minHeight: "48px",
                    lineHeight: "1.4",
                  }}
                >
                  {item.name}
                </h5>

                {/* Rating */}
                <div className="d-flex align-items-center mb-3">
                  {[1, 2, 3, 4, 5].map((star) =>
                    star <= item.stars ? (
                      <FaStar
                        key={star}
                        size={14}
                        color="#f4b400"
                      />
                    ) : (
                      <FaRegStar
                        key={star}
                        size={14}
                        color="#f4b400"
                      />
                    )
                  )}

                  <span
                    className="ms-2 fw-semibold text-secondary"
                    style={{ fontSize: "15px" }}
                  >
                    {item.rating}
                  </span>
                </div>

                {/* Price */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <h4
                      className="fw-bold text-primary mb-1"
                      style={{ fontSize: "24px" }}
                    >
                      {item.price}
                    </h4>

                    <div>
                      <span
                        className="text-decoration-line-through text-muted me-2"
                        style={{ fontSize: "14px" }}
                      >
                        {item.oldPrice}
                      </span>

                      <span
                        className="fw-bold text-success"
                        style={{ fontSize: "14px" }}
                      >
                        {item.discount}
                      </span>
                    </div>
                  </div>

                  {/* Cart Button */}
                  <button
                    className="btn rounded-circle"
                    style={{
                      width: "45px",
                      height: "45px",
                      backgroundColor: "#ff4d94",
                      color: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}