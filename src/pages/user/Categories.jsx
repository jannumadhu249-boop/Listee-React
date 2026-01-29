import { Link } from "react-router-dom";
const Categories = () => {
  const categories = [
    "Automotive",
    "Electronics",
    "Fashion",
    "Health Care",
    "Job Board",
    "Education",
    "Real Estate",
    "Travel",
    "Sports",
    "Magazines",
    "Pets",
    "Household",
  ];
  return (
    <>
      <section className="breadcrumb-bar position-realtive overflow-hidden">
        <div className="container position-absolute top-50 start-50 translate-middle text-center text-white">
          <h2 className="breadcrumb-title mt-5 mb-2">Listings-Categories</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <span className="mx-2">/</span>
              <li className="breadcrumb-item active text-white">Categories</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="category-section py-5">
        <div className="container">
          <div className="row">
            {categories.map((cat, i) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={i}>
                <Link to="/listing-grid" className="category-links">
                  <img
                    src={`/assets/img/icons/category-${(i % 12) + 1}.svg`}
                    alt={cat}
                  />
                  <h5 className="mt-3">{cat}</h5>
                  <span>09 Ads</span>
                  <span>Lorem Ipsum Simply dummy text of the typewriting</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Categories;
