import React from "react";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <div>
      <h2>Categories</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <CategoryCard name="Beauty" />

        <CategoryCard name="Fragrances" />

        <CategoryCard name="Furniture" />

        <CategoryCard name="Groceries" />

        <CategoryCard name="Home Decoration" />

        <CategoryCard name="Kitchen Accessories" />

        <CategoryCard name="Laptops" />

        <CategoryCard name="Mens Shirts" />

        <CategoryCard name="Mens Shoes" />

        <CategoryCard name="Mens Watches" />

        <CategoryCard name="Mobile Accessories" />

        <CategoryCard name="Motorcycle" />

        <CategoryCard name="Skin Care" />

        <CategoryCard name="Smartphones" />

        <CategoryCard name="Sports Accessories" />

        <CategoryCard name="Sunglasses " />

        <CategoryCard name="Tablets" />

        <CategoryCard name="Tops" />

        <CategoryCard name="Vehicles" />

        <CategoryCard name="Women Bags" />

        <CategoryCard name="Women Dresses" />

        <CategoryCard name="Women Shoes" />

        <CategoryCard name="Women Jewellery" />

        <CategoryCard name="Women Watches" />

        











      </div>
    </div>
  );
}