import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CategoryProducts() {
  const { slug } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${slug}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [slug]);

  return (
    <div className="container mt-5">

      <h2 className="mb-4 text-capitalize">{slug}</h2>

      <div className="row">
        {products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <div className="card h-100">

              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
              />

              <div className="card-body">

                <h5>{product.title}</h5>

                <p>${product.price}</p>

                <button className="btn btn-primary">
                  View Details
                </button>

              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default CategoryProducts;