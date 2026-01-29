import { Link } from "react-router-dom";

const Reviews = () => (
  <>
    <section className="breadcrumb-bar">
      <div className="container">
        <h2 className="breadcrumb-title text-center">Reviews</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <span className="text-white">/</span>
            <li className="breadcrumb-item active">Reviews</li>
          </ol>
        </nav>
      </div>
    </section>

    <div className="dashboard-content">
      <div className="container">
        <div>
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
            <li>
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
            <li className="active">
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
        </div>

        <div className="row dashboard-info reviewpage-content">
          {/* Visitor Review */}
          <div className="col-lg-6 d-flex">
            <div className="card dash-cards">
              <div className="card-header">
                <h4>Visitor Review</h4>
                <div className="card-dropdown">
                  <ul>
                    <li className="nav-item dropdown has-arrow logged-item">
                      <a
                        href="#"
                        className="dropdown-toggle pageviews-link"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span>All Listing</span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Next Week
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="#">
                          Next Month
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card-body">
                <ul className="review-list">
                  <li className="review-box">
                    <div className="review-profile">
                      <div className="review-img">
                        <img
                          src="assets/img/profiles/avatar-11.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>

                    <div className="review-details">
                      <h6>Joseph</h6>
                      <div className="rating">
                        <div className="rating-star">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                        </div>
                        <div>
                          <i className="fa-sharp fa-solid fa-calendar-days"></i>{" "}
                          4 months ago
                        </div>
                        <div>by: Joseph</div>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>

                      <ul className="review-gallery">
                        <li>
                          <img
                            src="assets/img/gallery/review-1.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/img/gallery/review-2.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/img/gallery/review-3.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/img/gallery/review-4.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <ul className="review-list">
                  <li className="review-box">
                    <div className="review-profile">
                      <div className="review-img">
                        <img
                          src="assets/img/profiles/avatar-02.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>

                    <div className="review-details">
                      <h6>John Doe</h6>
                      <div className="rating">
                        <div className="rating-star">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                        </div>
                        <div>
                          <i className="fa-sharp fa-solid fa-calendar-days"></i>{" "}
                          6 months ago
                        </div>
                        <div>by: Joseph</div>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </li>
                </ul>
                <ul className="review-list">
                  <li className="review-box">
                    <div className="review-profile">
                      <div className="review-img">
                        <img
                          src="assets/img/profiles/avatar-01.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>

                    <div className="review-details">
                      <h6>John Doe</h6>
                      <div className="rating">
                        <div className="rating-star">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                        </div>
                        <div>
                          <i className="fa-sharp fa-solid fa-calendar-days"></i>{" "}
                          8 months ago
                        </div>
                        <div>by: Joseph</div>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <ul className="review-gallery">
                        <li>
                          <img
                            src="assets/img/gallery/review-1.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/img/gallery/review-2.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/img/gallery/review-3.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/img/gallery/review-4.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Your Review */}
          <div className="col-lg-6 d-flex">
            <div className="card dash-cards">
              <div className="card-header">
                <h4>Your Review</h4>
                <div className="card-dropdown">
                  <ul>
                    <li className="nav-item dropdown has-arrow logged-item">
                      <a
                        href="#"
                        className="dropdown-toggle pageviews-link"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span>All Listing</span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Next Week
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="#">
                          Next Month
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card-body">
                <ul className="review-list">
                  <li className="review-box">
                    <div className="review-profile">
                      <div className="review-img">
                        <img
                          src="assets/img/profile-img.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>

                    <div className="review-details">
                      <h6>John Doe</h6>
                      <div className="rating">
                        <div className="rating-star">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                        </div>
                        <div>
                          <i className="fa-sharp fa-solid fa-calendar-days"></i>{" "}
                          4 months ago
                        </div>
                        <div>by: John Doe</div>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <ul className="review-gallery">
                        <li>
                          <img
                            src="assets/img/gallery/review-1.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/img/gallery/review-2.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/img/gallery/review-3.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/img/gallery/review-4.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>

                <ul className="review-list">
                  <li className="review-box">
                    <div className="review-profile">
                      <div className="review-img">
                        <img
                          src="assets/img/profile-img.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>

                    <div className="review-details">
                      <h6>John Doe</h6>
                      <div className="rating">
                        <div className="rating-star">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                        </div>
                        <div>
                          <i className="fa-sharp fa-solid fa-calendar-days"></i>{" "}
                          6 months ago
                        </div>
                        <div>by: John Doe</div>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </li>
                </ul>
                <ul className="review-list">
                  <li className="review-box">
                    <div className="review-profile">
                      <div className="review-img">
                        <img
                          src="assets/img/profile-img.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>

                    <div className="review-details">
                      <h6>John Doe</h6>
                      <div className="rating">
                        <div className="rating-star">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                        </div>
                        <div>
                          <i className="fa-sharp fa-solid fa-calendar-days"></i>{" "}
                          11 months ago
                        </div>
                        <div>by: John Doe</div>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <ul className="review-gallery">
                        <li>
                          <img
                            src="assets/img/gallery/review-1.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/img/gallery/review-2.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/img/gallery/review-3.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/img/gallery/review-4.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default Reviews;
