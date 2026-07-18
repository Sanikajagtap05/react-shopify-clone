import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  return (
    <section
      className="py-5 mt-5"
      style={{ background: "#f8f9fa", minHeight: "100vh" }}
    >
      <div className="container">

        {/* Heading */}
        <h1
          style={{
            fontSize: "55px",
            fontWeight: "700",
            marginBottom: "40px",
            fontFamily: "Georgia",
          }}
        >
          Shopping Cart
        </h1>

        <div className="row">

          {/* Left Side */}
          <div className="col-lg-8">

            {cartItems.length > 0 ? (
              cartItems.map((v) => (
                <div
                  key={v.id}
                  className="card border-0 shadow-sm mb-4"
                  style={{
                    borderRadius: "20px",
                    padding: "25px",
                  }}
                >
                  <div className="row align-items-center">

                    {/* Image */}
                    <div className="col-lg-2 text-center">
                      <img
                        src={v.thumbnail}
                        alt={v.title}
                        style={{
                          width: "90px",
                          height: "90px",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    {/* Details */}
                    <div className="col-lg-3 text-center">
                      <h4
                        style={{
                          color: "#004b73",
                          fontWeight: "600",
                        }}
                      >
                        {v.category}
                      </h4>

                      <p
                        style={{
                          color: "#666",
                          margin: 0,
                        }}
                      >
                        {v.title}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="col-lg-2 text-center">
                      <h5
                        style={{
                          color: "green",
                          fontWeight: "700",
                        }}
                      >
                        ₹{v.price}
                      </h5>
                    </div>

                    {/* Quantity */}
                    <div className="col-lg-3 text-center">

                      <button
                        className="btn me-2"
                        style={{
                          width: "45px",
                          height: "45px",
                          background: "#f1f1f1",
                          borderRadius: "12px",
                        }}
                      >
                        -
                      </button>

                      <span
                        style={{
                          fontWeight: "600",
                          fontSize: "20px",
                        }}
                      >
                        1
                      </span>

                      <button
                        className="btn ms-2"
                        style={{
                          width: "45px",
                          height: "45px",
                          background: "#f1f1f1",
                          borderRadius: "12px",
                        }}
                      >
                        +
                      </button>

                    </div>

                    {/* Remove */}
                    <div className="col-lg-2 text-center">

                      <button
                        className="btn btn-outline-danger"
                        style={{
                          borderRadius: "12px",
                          width: "100%",
                        }}
                      >
                        Remove
                      </button>

                    </div>

                  </div>
                </div>
              ))
            ) : (
              <div
                className="text-center bg-white shadow-sm p-5"
                style={{ borderRadius: "20px" }}
              >
                <h3>Your Cart is Empty 🛒</h3>
              </div>
            )}

            {cartItems.length > 0 && (
              <button
                className="btn"
                onClick={() => dispatch(clearCart())}
                style={{
                  background: "#ef7070",
                  color: "#fff",
                  padding: "12px 25px",
                  borderRadius: "12px",
                  boxShadow: "0 5px 12px rgba(0,0,0,0.15)",
                }}
              >
                Clear Cart
              </button>
            )}
          </div>

          {/* Right Side */}
          <div className="col-lg-4">

            <div
              className="card border-0 shadow-sm"
              style={{
                borderRadius: "20px",
                padding: "25px",
                position: "sticky",
                top: "100px",
              }}
            >
              <h4 className="mb-4">Order Summary</h4>

              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <strong>₹0</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <strong>Free</strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-4">
                <h5>Total</h5>
                <h5 className="text-success">₹0</h5>
              </div>

              <button className="btn btn-dark w-100">
                Proceed to Checkout
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}