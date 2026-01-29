import { Link } from "react-router-dom";
  
const Profile = () => (

  <>
    <section className="breadcrumb-bar">
      <div className="container">
        <h2 className="breadcrumb-title text-center">Profile</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <span className="text-white">/</span>
            <li className="breadcrumb-item active">Profile</li>
          </ol>
        </nav>
      </div>
    </section>

    <div className="dashboard-content listing-section">
      <div className="container">
        {/* ===== DASHBOARD MENU ===== */}
        <ul className="dashborad-menus">
          <li>
            <a href="/dashboard">
              <i className="feather-grid"></i> <span>Dashboard</span>
            </a>
          </li>
          <li className="active">
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
              <i className="fas fa-heart"></i> <span>Bookmarks</span>
            </a>
          </li>
          <li>
            <a href="/messages">
              <i className="fa-solid fa-comment-dots"></i> <span>Messages</span>
            </a>
          </li>
          <li>
            <a href="/reviews">
              <i className="fas fa-star"></i> <span>Reviews</span>
            </a>
          </li>
          <li>
            <a href="/login">
              <i className="fas fa-circle-arrow-left"></i> <span>Logout</span>
            </a>
          </li>
        </ul>

        {/* ===== PROFILE CONTENT ===== */}
        <div className="profile-content">
          <div className="row dashboard-info">
            {/* LEFT PROFILE FORM */}
            <div className="col-lg-9">
              <div className="card dash-cards">
                <div className="card-header">
                  <h4>Profile Details</h4>
                </div>

                <div className="card-body">
                  {/* PROFILE IMAGE */}
                  <div className="profile-photo">
                    <div className="profile-img">
                      <div className="settings-upload-img">
                        <img src="/assets/img/profile-img.jpg" alt="profile" />
                      </div>

                      <div className="settings-upload-btn">
                        <input
                          type="file"
                          accept="image/*"
                          id="file"
                          className="hide-input image-upload"
                        />
                        <label htmlFor="file" className="file-upload">
                          Upload New photo
                        </label>
                      </div>
                      <span>Max file size: 10 MB</span>
                    </div>

                    <a href="#!" className="profile-img-del">
                      <i className="feather-trash-2"></i>
                    </a>
                  </div>

                  {/* PROFILE FORM */}
                  <form className="profile-form">
                    <div className="form-set">
                      <label className="col-form-label">Your Full Name</label>
                      <div className="pass-group group-img">
                        <span className="lock-icon">
                          <i className="feather-user"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="John Doe"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-set">
                          <label className="col-form-label">Phone Number</label>
                          <div className="pass-group group-img">
                            <span className="lock-icon">
                              <i className="feather-phone-call"></i>
                            </span>
                            <input
                              type="tel"
                              className="form-control"
                              defaultValue="+44 215346 1223"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-set">
                          <label className="col-form-label">
                            Email Address
                          </label>
                          <div className="group-img">
                            <i className="feather-mail"></i>
                            <input
                              type="email"
                              className="form-control"
                              defaultValue="johndoe@email.com"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-set">
                      <label className="col-form-label">Notes</label>
                      <textarea
                        rows="4"
                        className="form-control"
                        defaultValue="Mauris vestibulum lorem a condimentum vulputate. Integer vitae turpis turpis. Cras at tincidunt urna. Aenean leo justo, congue et felis a, elementum rutrum felis. Fusce rutrum ipsum eu pretium faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean leo justo, congue et felis a.  Aenean leo justo, congue et felis a."
                      />
                    </div>

                    {/* SOCIAL LINKS */}
                    <div className="row socialmedia-info">
                      <div className="col-lg-6">
                        <div className="form-set">
                          <label className="col-form-label">Facebook</label>
                          <div className="pass-group group-img">
                            <span className="lock-icon">
                              <i className="fab fa-facebook-f"></i>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="https://www.facebook.com/"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-set">
                          <label className="col-form-label">Twitter</label>
                          <div className="pass-group group-img">
                            <span className="lock-icon">
                              <i className="fab fa-twitter"></i>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="https://twitter.com/"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row socialmedia-info">
                      <div className="col-lg-6">
                        <div className="form-set">
                          <label className="col-form-label">Google+</label>
                          <div className="pass-group group-img">
                            <span className="lock-icon">
                              <i className="fa-brands fa-google-plus-g"></i>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="https://www.google.com/"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-set">
                          <label className="col-form-label">Instagram</label>
                          <div className="pass-group group-img">
                            <span className="lock-icon">
                              <i className="fab fa-instagram"></i>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="https://www.instagram.com/"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* RIGHT PASSWORD CARD */}
            <div className="col-lg-3">
              <div className="profile-sidebar">
                <div className="card">
                  <div className="card-header">
                    <h4>Change Password</h4>
                  </div>

                  <div className="card-body">
                    <form>
                      <div className="form-set">
                        <label className="col-form-label">
                          Current Password
                        </label>
                        <input type="password" className="form-control" placeholder="Current Password" />
                      </div>

                      <div className="form-set">
                        <label className="col-form-label">New Password</label>
                        <input type="password" className="form-control" placeholder="New Password" />
                      </div>

                      <div className="form-set">
                        <label className="col-form-label">
                          Confirm New Password
                        </label>
                        <input type="password" className="form-control" placeholder="Confirm New Password" />
                      </div>

                      <button className="btn btn-primary w-100" type="submit">
                        
                        Change Password
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default Profile;
