import { Link } from "react-router-dom";

const MyListing = () => (
  <>
    <section className="breadcrumb-bar">
      <div className="container">
        <h2 className="breadcrumb-title text-center">My Listings</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <span className="text-white">/</span>
            <li className="breadcrumb-item active">My Listings</li>
          </ol>
        </nav>
      </div>
    </section>

     <section className="dashboard-content listing-section">
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
            <li className="active">
              <a href="/my-listing">
                <i className="feather-list"></i> <span>My Listing</span>
              </a>
            </li>
            <li>
              <a href="/bookmarks">
                <i className="fas fa-solid fa-heart"></i>{" "}
                <span>Bookmarks</span>
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
                <i className="fas fa-solid fa-star"></i>{" "}
                <span>Reviews</span>
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

        <div className="dash-listingcontent dashboard-info">
          <div className="dash-cards card">
            <div className="card-header">
              <h4>My Listings</h4>
              <a className="nav-link add-listing" href="add-listing.html">
                <span>
                  <i className="fa-solid fa-plus"></i>
                </span>
                Add Listing
              </a>
            </div>

            <div className="card-body">
              {/* Search & Sort */}
              <div className="listing-search">
                <div className="filter-content form-set">
                  <div className="group-img">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <i className="feather-search"></i>
                  </div>
                </div>

                <div className="sorting-div">
                  <div className="sortbyset">
                    <span className="sortbytitle">Sort by</span>
                    <div className="sorting-select">
                      <select className="form-control select">
                        <option>Newest</option>
                        <option>Newest</option>
                        <option>Oldest</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="table-responsive">
                <table
                  className="listing-table datatable"
                  id="listdata-table"
                >
                  <thead>
                    <tr>
                      <th className="no-sort">Image</th>
                      <th className="no-sort">Details</th>
                      <th>Status</th>
                      <th className="no-sort">Views</th>
                      <th className="no-sort">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      "tablelist-1",
                      "tablelist-2",
                      "tablelist-3",
                      "tablelist-4",
                      "tablelist-5",
                      "tablelist-6",
                      "tablelist-7",
                      "tablelist-8",
                    ].map((img, index) => (
                      <tr key={index}>
                        <td>
                          <div className="listingtable-img">
                            <a href="service-details.html">
                              <img
                                src={`assets/img/list/${img}.jpg`}
                                className="img-fluid avatar-img"
                                alt=""
                              />
                            </a>
                          </div>
                        </td>

                        <td>
                          <h6>
                            <a href="service-details.html">
                              Sample Listing Title
                            </a>
                          </h6>
                          <div className="listingtable-rate">
                            <a href="#" className="cat-icon">
                              <i className="fa-regular fa-circle-stop"></i>{" "}
                              Electronics
                            </a>
                            <span className="discount-amt">$350000.00</span>
                            <span className="fixed-amt">$40000</span>
                          </div>
                          <p>
                            Mauris vestibulum lorem a condimentum vulputate.
                          </p>
                        </td>

                        <td>
                          <span
                            className={`status-text ${
                              img === "tablelist-8" ? "unpublish" : ""
                            }`}
                          >
                            {img === "tablelist-8"
                              ? "Un Published"
                              : "Published"}
                          </span>
                        </td>

                        <td>
                          <span className="views-count">1523</span>
                        </td>

                        <td>
                          <div className="action">
                            <a
                              href="#"
                              className="action-btn btn-view"
                            >
                              <i className="feather-eye"></i>
                            </a>
                            <a
                              href="#"
                              className="action-btn btn-edit"
                            >
                              <i className="feather-edit-3"></i>
                            </a>
                            <a
                              href="#"
                              className="action-btn btn-trash"
                            >
                              <i className="feather-trash-2"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="blog-pagination">
                <nav>
                  <ul className="pagination">
                    <li className="page-item previtem">
                      <a className="page-link" href="#">
                        <i className="fas fa-regular fa-arrow-left"></i> Prev
                      </a>
                    </li>

                    <li className="justify-content-center pagination-center">
                      <div className="pagelink">
                        <ul>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="page-item nextlink">
                      <a className="page-link" href="#">
                        Next{" "}
                        <i className="fas fa-regular fa-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default MyListing;
