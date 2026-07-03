import { Link } from "react-router-dom";

function CategoryCard({ name, slug }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <h5
        style={{
          fontSize: "17px",
          fontWeight: "400",
          color: "#000",
          margin: "0 0 12px 0",
        }}
      >
        {name}
      </h5>

      <Link
        to={`/category/${slug}`}
        style={{
          color: "#3f6fff",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: "500",
          textTransform: "uppercase",
          letterSpacing: "0.3px",
        }}
      >
        VIEW PRODUCTS
      </Link>
    </div>
  );
}

export default CategoryCard;