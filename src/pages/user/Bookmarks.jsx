import { Link } from "react-router-dom";
import React, { useState } from "react";

const bookmarksData = [
  {
    img: "listgrid-1.jpg",
    avatar: "avatar-02.jpg",
    category: "Vehicles",
    title: "2017 Gulfsteam Ameri-lite",
    date: "06 Oct, 2022",
    price: "$350",
    oldPrice: "$450",
    rating: "4.7",
  },
  {
    img: "listgrid-4.jpg",
    avatar: "avatar-03.jpg",
    category: "Electronics",
    title: "Fashion luxury Men date",
    date: "08 Oct, 2022",
    price: "$250",
    oldPrice: "$350",
    rating: "4.6",
  },
  {
    img: "listgrid-8.jpg",
    avatar: "avatar-04.jpg",
    category: "Electronics",
    title: "Apple Iphone 6 16GB 4G LTE",
    date: "09 Oct, 2022",
    price: "$550",
    oldPrice: "$400",
    rating: "4.7",
  },
  {
    img: "listgrid-3.jpg",
    avatar: "avatar-05.jpg",
    category: "Electronics",
    title: "Customized Apple Imac",
    date: "10 Oct, 2022",
    price: "$450",
    oldPrice: "$300",
    rating: "4.5",
  },
  {
    img: "listgrid-2.jpg",
    avatar: "avatar-06.jpg",
    category: "Construction",
    title: "Villa 457 sq.m. In Benidorm Fully",
    date: "11 Oct, 2022",
    price: "$650",
    oldPrice: "$600",
    rating: "4.5",
  },
  {
    img: "listgrid-5.jpg",
    avatar: "avatar-03.jpg",
    category: "Jobs",
    title: "CDL A OTR Company Driver Job-N",
    date: "12 Oct, 2022",
    price: "$550",
    oldPrice: "$450",
    rating: "4.7",
  },
  {
    img: "listgrid-6.jpg",
    avatar: "avatar-04.jpg",
    category: "Electronics",
    title: "2012 Audi R8 GT Spyder Convertible",
    date: "02 Oct, 2022",
    price: "$450",
    oldPrice: "$350",
    rating: "4.7",
  },
  {
    img: "listgrid-7.jpg",
    avatar: "avatar-07.jpg",
    category: "Vehicles",
    title: "HP Gaming 15.6 TouchScreen 12G",
    date: "02 Oct, 2022",
    price: "$450",
    oldPrice: "$350",
    rating: "4.7",
  },
  {
    img: "listgrid-1.jpg",
    avatar: "avatar-02.jpg",
    category: "Vehicles",
    title: "2017 Gulfsteam Ameri-lite",
    date: "06 Oct, 2022",
    price: "$350",
    oldPrice: "$450",
    rating: "4.7",
  },
];

const Bookmarks = () => {
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(bookmarksData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = bookmarksData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );
    const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <>
      <section className="breadcrumb-bar">
        <div className="container">
          <h2 className="breadcrumb-title text-center">Bookmarks</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <span className="text-white">/</span>
              <li className="breadcrumb-item active">Bookmarks</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="dashboard-content">
        <div className="container">
          {/* Sidebar */}
          <ul className="dashborad-menus">
            <li>
              <a href="/dashboard">
                <i className="feather-grid"></i> <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/profile">
                <i className="fa-solid fa-user"></i> <span>Profile</span>
              </a>
            </li>
            <li>
              <a href="/my-listing">
                <i className="feather-list"></i> <span>My Listing</span>
              </a>
            </li>
            <li className="active">
              <a href="/bookmarks">
                <i className="fas fa-solid fa-heart"></i> <span>Bookmarks</span>
              </a>
            </li>
            <li>
              <a href="/messages">
                <i className="fa-solid fa-comment-dots"></i>{" "}
                <span>Messages</span>
              </a>
            </li>
            <li>
              <a href="/reviews">
                <i className="fas fa-solid fa-star"></i> <span>Reviews</span>
              </a>
            </li>
            <li>
              <a href="/login">
                <i className="fas fa-light fa-circle-arrow-left"></i>{" "}
                <span>Logout</span>
              </a>
            </li>
          </ul>

          {/* Bookmarks Grid */}
          <div className="bookmarks-content grid-view featured-slider">
            <div className="row">
              {bookmarksData.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-4 col-sm-6">
                  <div
                    className="card aos aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <div className="blog-widget">
                      <div className="blog-img">
                        <a href="service-details.html">
                          <img
                            src={`assets/img/list/${item.img}`}
                            className="img-fluid"
                            alt="blog"
                          />
                        </a>
                        <div className="fav-item">
                          <span className="featured-text">Featured</span>
                          <a href="#" className="fav-icon">
                            <i className="feather-heart"></i>
                          </a>
                        </div>
                      </div>

                      <div className="bloglist-content">
                        <div className="card-body">
                          <div className="blogfeaturelink">
                            <div className="grid-author">
                              <img
                                src={`assets/img/profiles/${item.avatar}`}
                                alt="author"
                              />
                            </div>
                            <div className="blog-features">
                              <a href="#">
                                <span>
                                  <i className="fa-regular fa-circle-stop"></i>{" "}
                                  {item.category}
                                </span>
                              </a>
                            </div>
                            <div className="blog-author text-end">
                              <span>
                                <img src="assets/img/eye.svg" alt="views" />
                                4000
                              </span>
                            </div>
                          </div>

                          <h6>
                            <a href="service-details.html">{item.title}</a>
                          </h6>

                          <div className="blog-location-details">
                            <div className="location-info">
                              <i className="feather-map-pin"></i> Los Angeles
                            </div>
                            <div className="location-info">
                              <i className="fa-solid fa-calendar-days"></i>{" "}
                              {item.date}
                            </div>
                          </div>

                          <div className="amount-details">
                            <div className="amount">
                              <span className="validrate">{item.price}</span>
                              <span>{item.oldPrice}</span>
                            </div>
                            <div className="ratings">
                              <span>{item.rating}</span> (50)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="blog-pagination">
              <nav>
                <ul className="pagination">
                  {/* Prev */}
                  <li
                    className={`page-item previtem ${currentPage === 1 ? "disabled" : ""}`}
                  >
                    <button className="page-link" onClick={handlePrev}>
                      <i className="fas fa-arrow-left"></i> Prev
                    </button>
                  </li>

                  {/* Center */}
                  <li className="justify-content-center pagination-center">
                    <div className="pagelink">
                      <ul>
                        {[...Array(totalPages)].map((_, i) => {
                          const page = i + 1;

                          if (page > 3 && page < totalPages) {
                            return page === 4 ? (
                              <li key="dots" className="page-item disabled">
                                <span className="page-link">...</span>
                              </li>
                            ) : null;
                          }

                          return (
                            <li
                              key={page}
                              className={`page-item ${currentPage === page ? "active" : ""}`}
                            >
                              <button
                                className="page-link"
                                onClick={() => setCurrentPage(page)}
                              >
                                {page}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>

                  {/* Next */}
                  <li
                    className={`page-item nextlink ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <button className="page-link" onClick={handleNext}>
                      Next <i className="fas fa-arrow-right"></i>
                    </button>
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
export default Bookmarks;
