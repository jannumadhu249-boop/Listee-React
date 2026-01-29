import { Link } from "react-router-dom";
import { useState } from "react";

const ListingListSidebar = () => {
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("");

  const listings = [
    {
      id: 1,
      img: "/assets/img/list/listgrid-1.jpg",
      avatar: "avatar-02.jpg",
      category: "vechicle",
      title: "2017 Gulfsteam Ameri-lite",
      price: "$350",
      oldPrice: "$450",
      rating: "4.7",
      date: "06 Oct, 2022",
    },
    {
      id: 2,
      img: "/assets/img/list/listgrid-2.jpg",
      avatar: "avatar-03.jpg",
      category: "Construction",
      title: "Fashion luxury Men date",
      price: "$250",
      oldPrice: "$350",
      rating: "4.6",
      date: "08 Oct, 2022",
    },
    {
      id: 3,
      img: "/assets/img/list/listgrid-3.jpg",
      avatar: "avatar-04.jpg",
      category: "Electronics",
      title: "Apple Iphone 6 16GB 4G LTE",
      price: "$550",
      oldPrice: "$400",
      rating: "4.7",
      date: "09 Oct, 2022",
    },
    {
      id: 4,
      img: "/assets/img/list/listgrid-4.jpg",
      avatar: "avatar-05.jpg",
      category: "Gadgets",
      title: "Customized Apple Imac",
      price: "$450",
      oldPrice: "$300",
      rating: "4.5",
      date: "10 Oct, 2022",
    },
    {
      id: 5,
      img: "/assets/img/list/listgrid-5.jpg",
      avatar: "avatar-06.jpg",
      category: "Construction",
      title: "Villa 457 sq.m. In Benidorm Fully",
      price: "$650",
      oldPrice: "$600",
      rating: "4.5",
      date: "11 Oct, 2022",
    },
    {
      id: 6,
      img: "/assets/img/list/listgrid-6.jpg",
      avatar: "avatar-03.jpg",
      category: "vechicle",
      title: "CDL A OTR Compnay Driver Job-N",
      price: "$550",
      oldPrice: "$450",
      rating: "4.7",
      date: "12 Oct, 2022",
    },
    {
      id: 7,
      img: "/assets/img/list/listgrid-7.jpg",
      avatar: "avatar-06.jpg",
      category: "Electronics",
      title: "HP Gaming 15.6 Touchscren 12G",
      price: "$450",
      oldPrice: "$350",
      rating: "4.7",
      date: "02 Oct, 2022",
    },
    {
      id: 8,
      img: "/assets/img/list/listgrid-8.jpg",
      avatar: "avatar-07.jpg",
      category: "Electronic",
      title: "2012 AudiR8 GT Spider Convrtibile",
      price: "$450",
      oldPrice: "$350",
      rating: "4.7",
      date: "02 Oct, 2022",
    },
  ];

    const sortedListings = [...listings].sort((a, b) => {
    if (sort === "price-asc") return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
    if (sort === "price-desc") return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
    if (sort === "date-desc") return new Date(b.date) - new Date(a.date);
    return 0;
  });

  return (
    <>
      <section className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="breadcrumb-title text-center">
                Listing-List-Sidebar
              </h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <span className="text-white">/</span>
                  <li className="breadcrumb-item active">
                    Listing List Sidebar
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="listing-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="card shadow-sm border-0 rounded-4 p-4 position-sticky"
                style={{ top: "20px" }}
              >
                <div className="d-flex align-items-center mb-4">
                  <img src="/assets/img/details-icon.svg" alt="icon" />
                  <h5 className="mb-0">Filters</h5>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold"></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What are you looking for ?"
                  />
                </div>

                <div className="mb-3 dropdown position-static">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Category"
                      readOnly
                    />

                    <button
                      className="btn btn-outline-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-bs-popper="static"
                      aria-expanded="false"
                    ></button>

                    <ul className="dropdown-menu dropdown-menu-start w-100">
                      <li>
                        <button className="dropdown-item" type="button">
                          Computer
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          Electronics
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          Car Wash
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa-solid fa-location-dot text-danger"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Where to look?"
                    />
                  </div>
                </div>

                <div className="mb-3 dropdown">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Region"
                      readOnly
                    />

                    <button
                      className="btn btn-outline-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></button>

                    <ul className="dropdown-menu w-100">
                      <li>
                        <button className="dropdown-item" type="button">
                          Canada
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          USA
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          India
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Amenities</label>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">
                      Wireless Internet
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">
                      Accepts Credit Cards
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Coupouns</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Parking Street</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Bike Parking</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Smoking Allowed</label>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <label className="form-label fw-semibold mb-0">
                      Radius
                    </label>
                    <span id="radiusValue"></span>
                  </div>

                  <input
                    type="range"
                    className="form-range"
                    min="1"
                    max="100"
                    style={{
                      accentColor: "#c10037",
                    }}
                    onChange={(e) => {
                      const span = document.getElementById("radiusValue");
                      if (span) span.innerText = e.target.value;
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Price Range</label>
                  <div className="row g-2">
                    <div className="col-6">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Min"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-danger w-100"
                    style={{
                      backgroundColor: "#c10037",
                      borderColor: "#c10037",
                    }}
                  >
                    Search
                  </button>
                  <button className="btn btn-outline-secondary w-100">
                    Reset
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="text-muted">
                  Showing 1-{listings.length} of 10 Results
                </div>

                <div className="d-flex align-items-center gap-2">
                  <select
                    className="form-select form-select-sm"
                    style={{ width: "160px" }}
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="">Sort By</option>
                    <option value="price-asc">Price Low to High</option>
                    <option value="price-desc">Price High to Low</option>
                    <option value="date-desc">Newest First</option>
                  </select>

                  <button
                    className={`btn btn-outline-secondary btn-sm ${view === "list" ? "active" : ""}`}
                    onClick={() => setView("list")}
                  >
                    <i className="fa-solid fa-list"></i>
                  </button>
                  <button
                    className={`btn btn-outline-secondary btn-sm ${view === "grid" ? "active" : ""}`}
                    onClick={() => setView("grid")}
                  >
                    <i className="fa-solid fa-th"></i>
                  </button>
                </div>
              </div>

              {/* Listings: Grid or List */}
              <div className={view === "grid" ? "row" : ""}>
                {sortedListings.map((ad) => (
                  <div
                    key={ad.id}
                    className={
                      view === "grid" ? "col-lg-4 col-md-6 mb-4" : "col-12 mb-4"
                    }
                  >
                    <div className="card h-100">
                      <div className={`blog-widget d-flex ${view === "list" ? "flex-column flex-md-row" : "flex-column"}`}>
                        <div
                          className="blog-img overflow-hidden rounded-top-2"
                          style={{
                            flex: view === "list" ? "0 0 200px" : "auto",
                            maxWidth: view === "list" ? "200px" : "100%",
                          }}
                        >
                          <Link to="/service-details">
                            <img
                              src={ad.img}
                              className="img-fluid w-100"
                              style={{ height: "200px", objectFit: "cover" }}
                              alt="listing"
                            />
                          </Link>
                          <div className="fav-item">
                            <span className="featured-text bg-primary text-white px-2 py-1 rounded">Featured</span>
                            <a href="#" className="fav-icon d-flex justify-content-center align-items-center" >
                              <i className="feather-heart"></i>
                            </a>
                          </div>
                        </div>

                        <div className="bloglist-content flex-grow-1">
                          <div className="card-body">
                            <div className="blogfeaturelink d-flex align-items-center mb-3">
                              <div className="grid-author me-3">
                                <img
                                  src={`/assets/img/profiles/${ad.avatar}`}
                                  alt="author"
                                  className="rounded-circle"
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div className="blog-features flex-grow-1">
                                <a href="#" className="text-decoration-none">
                                  <span>
                                    <i className="fa-regular fa-circle-stop me-1"></i>
                                    {ad.category}
                                  </span>
                                </a>
                              </div>
                              <div className="blog-author">
                                <span>
                                  <i className="feather-eye me-1"></i> 4000
                                </span>
                              </div>
                            </div>
                            <h6 className="mb-3">
                              <Link
                                to="/service-details"
                                className="text-decoration-none"
                              >
                                {ad.title}
                              </Link>
                            </h6>
                            <div className="blog-location-details d-flex justify-content-between mb-3">
                              <div className="location-info">
                                <i className="feather-map-pin me-1"></i> Los
                                Angeles
                              </div>
                              <div className="location-info">
                                <i className="fa-solid fa-calendar-days me-1"></i>
                                {ad.date}
                              </div>
                            </div>
                            <div className="amount-details d-flex justify-content-between align-items-center">
                              <div className="amount">
                                <span
                                  className="validrate me-2"
                                  style={{
                                    color: "#e91e63",
                                    fontSize: "1.1rem",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {ad.price}
                                </span>
                                <span
                                  style={{
                                    textDecoration: "line-through",
                                    color: "#999",
                                    fontSize: "0.9rem",
                                  }}
                                >
                                  {ad.oldPrice}
                                </span>
                              </div>
                              <div className="ratings">
                                <span className="badge bg-warning text-dark">
                                  <i className="fas fa-star me-1"></i>
                                  {ad.rating}
                                </span>
                                <span className="ms-1">(50)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center gap-3">
                  <li className="page-item disabled">
                    <a className="page-link" href="#">
                      Prev
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingListSidebar;
