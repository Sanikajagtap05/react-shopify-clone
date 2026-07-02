import React from "react";
import {
  FaTruck,
  FaHeadset,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { BiBadgeCheck } from "react-icons/bi";

export default function Features() {
  return (
    <div className="container-fluid my-4">
      <div className="row g-3">

        {/* Card 1 */}
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
          <div
            className="d-flex align-items-center"
            style={{
              background: "#f5f5f5",
              padding: "18px 16px",
              minHeight: "95px",
            }}
          >
            <FaTruck size={34} className="me-3" />

            <div>
              <h5
                className="mb-1 fw-semibold"
                style={{ fontSize: "1.3rem" }}
              >
                Free Delivery
              </h5>

              <p
                className="mb-0 text-secondary"
                style={{ fontSize: "1rem" }}
              >
                Orders from all items
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
          <div
            className="d-flex align-items-center"
            style={{
              background: "#f5f5f5",
              padding: "18px 16px",
              minHeight: "95px",
            }}
          >
            <FaMoneyCheckAlt size={34} className="me-3" />

            <div>
              <h5
                className="mb-1 fw-semibold"
                style={{ fontSize: "1.3rem" }}
              >
                Return & Refund
              </h5>

              <p
                className="mb-0 text-secondary"
                style={{ fontSize: "1rem" }}
              >
                Money back guarantee
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
          <div
            className="d-flex align-items-center"
            style={{
              background: "#f5f5f5",
              padding: "18px 16px",
              minHeight: "95px",
            }}
          >
            <BiBadgeCheck size={34} className="me-3" />

            <div>
              <h5
                className="mb-1 fw-semibold"
                style={{ fontSize: "1.3rem" }}
              >
                Member Discount
              </h5>

              <p
                className="mb-0 text-secondary"
                style={{ fontSize: "1rem" }}
              >
                On order over $99
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
          <div
            className="d-flex align-items-center"
            style={{
              background: "#f5f5f5",
              padding: "18px 16px",
              minHeight: "95px",
            }}
          >
            <FaHeadset size={34} className="me-3" />

            <div>
              <h5
                className="mb-1 fw-semibold"
                style={{ fontSize: "1.3rem" }}
              >
                Support 24/7
              </h5>

              <p
                className="mb-0 text-secondary"
                style={{ fontSize: "1rem" }}
              >
                Contact us 24 hours a day
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}