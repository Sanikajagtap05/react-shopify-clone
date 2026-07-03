import categories from "../data/categories";
import CategoryCard from "../pages/CategoryCard";

function Categories() {
  return (
    <div className="container-fluid mt-3">
      <h2
        style={{
          marginBottom: "15px",
          fontSize: "22px",
          fontWeight: "500",
        }}
      >
        Categories
      </h2>

      <div className="row g-3">
        {categories.map((category) => (
          <div
            key={category.slug}
            className="col-xl-2 col-lg-2 col-md-4 col-sm-6"
          >
            <div
              style={{
                background: "#f5f5f5",
                height: "105px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
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