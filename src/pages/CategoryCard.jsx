import { Link } from "react-router-dom";

function CategoryCard({ name, slug }) {
  return (
    <>
      <h4
        style={{
          fontSize: "18px",
          fontWeight: "500",
          marginBottom: "12px",
          color: "#000",
        }}
      >
        {name}
      </h4>

      <Link
        to={`/category/${slug}`}
        style={{
          color: "#3f6fff",
          textDecoration: "none",
          fontSize: "15px",
          textTransform: "uppercase",
          fontWeight: "500",
        }}
      >
        VIEW PRODUCTS
      </Link>
    </>
  );
}

export default CategoryCard;