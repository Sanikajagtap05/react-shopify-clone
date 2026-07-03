import categories from "../data/categories";
import CategoryCard from "../pages/CategoryCard";

function Categories() {
  return (
    <div className="container mt-4">
      <h2
        style={{
          marginBottom: "20px",
          fontWeight: "500",
          fontSize: "32px",
        }}
      >
        Categories
      </h2>

      <div className="row g-4">
        {categories.map((category) => (
          <div
            key={category.slug}
            className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
          >
            <div
              style={{
                backgroundColor: "#f5f5f5",
                padding: "22px",
                height: "110px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: "2px",
                transition: "0.3s",
                cursor: "pointer",
              }}
            >
              <CategoryCard
                name={category.name}
                slug={category.slug}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;