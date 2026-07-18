import React from "react";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaMoon,
} from "react-icons/fa";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm">
      <div className="container-fluid">

        {/* Logo */}
        <a className="navbar-brand logo" href="/">
          Shopify
        </a>

        {/* Hamburger */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {/* Search */}
          <form className="d-flex mx-auto search-box">
            <input
              className="form-control search-input"
              type="search"
              placeholder="apple.."
            />

            <button className="btn search-btn">
              <FaSearch />
            </button>
          </form>

          {/* Navigation */}
          
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/categories">
                Categories
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                <FaUser className="nav-icon" />
              </NavLink>
            </li>

            <li className="nav-item position-relative">
              <NavLink className="nav-link" to="/cart">
                <FaShoppingCart className="nav-icon" />

                <span className="cart-badge">
                  0
                </span>
              </NavLink>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                <FaMoon className="nav-icon" />
              </a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}