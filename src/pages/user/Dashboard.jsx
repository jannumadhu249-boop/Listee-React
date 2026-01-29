import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import ApexCharts from "apexcharts";


const Dashboard = () => {

    useEffect(() => {
  const options = {
    chart: {
      type: "area",
      height: 300,
      toolbar: { show: false }
    },
    series: [
      {
        name: "Page Views",
        data: [120, 150, 180, 140, 200, 230, 210]
      }
    ],
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    colors: ["#ff4f81"],
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" }
  };

  const chart = new ApexCharts(
    document.querySelector("#review-chart"),
    options
  );

  chart.render();

  return () => {
    chart.destroy();
  };
}, []);

  return (

  <>
    <section className="breadcrumb-bar">
      <div className="container">
        <h2 className="breadcrumb-title text-center">Dashboard</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <span className="text-white">/</span>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="dashboard-content">
      <div className="container">
        {/* DASHBOARD TOP MENU */}
        <ul className="dashborad-menus">
          <li className="active">
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
              <i className="fa-solid fa-comment-dots"></i> <span>Messages</span>
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

        {/* DASHBOARD DETAILS */}
        <div className="dashboard-details">
          <div className="row">
            {/* CARD 1 */}
            <div className="col-lg-3 col-md-3">
              <div className="card dash-cards">
                <div className="card-body">
                  <div className="dash-top-content">
                    <div className="dashcard-img">
                      <img
                        src="assets/img/icons/verified.svg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="dash-widget-info">
                    <h6>Active Listing</h6>
                    <h3 className="counter">500</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-lg-3 col-md-3">
              <div className="card dash-cards">
                <div className="card-body">
                  <div className="dash-top-content">
                    <div className="dashcard-img">
                      <img
                        src="assets/img/icons/rating.svg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="dash-widget-info">
                    <h6>Total Reviews</h6>
                    <h3>15230</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-lg-3 col-md-3">
              <div className="card dash-cards">
                <div className="card-body">
                  <div className="dash-top-content">
                    <div className="dashcard-img">
                      <img
                        src="assets/img/icons/chat.svg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="dash-widget-info">
                    <h6>Messages</h6>
                    <h3>15</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="col-lg-3 col-md-3">
              <div className="card dash-cards">
                <div className="card-body">
                  <div className="dash-top-content">
                    <div className="dashcard-img">
                      <img
                        src="assets/img/icons/bookmark.svg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="dash-widget-info">
                    <h6>Bookmark</h6>
                    <h3>30</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PAGE VIEWS & REVIEWS */}
          <div className="row dashboard-info">
            {/* PAGE VIEWS */}
            <div className="col-lg-6 d-flex">
              <div className="card dash-cards w-100">
                <div className="card-header">
                  <h4>Page Views</h4>
                  <div className="card-dropdown">
                    <ul>
                      <li className="nav-item dropdown has-arrow logged-item">
                        <a
                          href="#"
                          className="dropdown-toggle pageviews-link"
                          data-bs-toggle="dropdown"
                        >
                          <span>This week</span>
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
                  <div id="review-chart"></div>
                </div>
              </div>
            </div>

            {/* VISITOR REVIEW */}
            <div className="col-lg-6 d-flex">
              <div className="card dash-cards w-100">
                <div className="card-header">
                  <h4>Visitor Review</h4>
                  <div className="card-dropdown">
                    <ul>
                      <li className="nav-item dropdown has-arrow logged-item">
                        <a
                          href="#"
                          className="dropdown-toggle pageviews-link"
                          data-bs-toggle="dropdown"
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
                            alt=""
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
                          <div>by: Demo Test</div>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </li>

                    <li className="review-box">
                      <div className="review-profile">
                        <div className="review-img">
                          <img
                            src="assets/img/profiles/avatar-01.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="review-details">
                        <h6>Dev</h6>
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
                          <div>by: Demo Test</div>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};
export default Dashboard;
