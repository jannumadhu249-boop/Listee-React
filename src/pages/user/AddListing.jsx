import { Link } from "react-router-dom";
import { useState } from "react";

const AddListing = () => {
  const [priceRange, setPriceRange] = useState("");
  const [priceFrom, setPriceFrom] = useState("65");
  const [priceTo, setPriceTo] = useState("120");

  const [location, setLocation] = useState("$$$");
  const [address, setAddress] = useState("8697-8747 Stirling Rd, Florida");
  const [mapAddress, setMapAddress] = useState(
    "8697-8747 Stirling Rd, Florida",
  );
  const [latitude, setLatitude] = useState("26.045197767574102");
  const [longitude, setLongitude] = useState("-80.26095677163161");

  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const FEATURES = [
    "Accepts Credit Cards",
    "Bike Parking",
    "Parking Street",
    "Pets Friendly",
    "Wheelchair Accessible",
    "Wireless Internet",
  ];

  const handleChange = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature],
    );
  };

  return (
    <>
      <section className="breadcrumb-bar">
        <div className="container">
          <h2 className="breadcrumb-title text-center">Add Listing</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <span className="text-white">/</span>
              <li className="breadcrumb-item active">Add Listing</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="dashboard-content listing-section">
        <div className="container">
          <div className="row">
            {/* ================= Sidebar ================= */}
            <div className="col-lg-12">
              <ul className="dashborad-menus">
                <li>
                  <Link to="/dashboard">
                    <i className="feather-grid"></i>
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to="/profile">
                    <i className="fa-solid fa-user"></i>
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to="/my-listing">
                    <i className="feather-list"></i>
                    <span>My Listing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/bookmarks">
                    <i className="fas fa-heart"></i>
                    <span>Bookmarks</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-solid fa-comment-dots"></i>
                    <span>Messages</span>
                  </Link>
                </li>
                <li>
                  <Link to="/reviews">
                    <i className="fas fa-star"></i>
                    <span>Reviews</span>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <i className="fas fa-circle-arrow-left"></i>
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* ================= Main Content ================= */}
            <div className="col-lg-12">
              <div className="profile-content">
                <div className="messages-form">
                  {/* ===== Basic Info ===== */}
                  <div className="card">
                    <div className="card-header">
                      <h4>Basic information</h4>
                    </div>
                    <div className="card-body">
                      <div className="form-set">
                        <label className="col-form-label">
                          Listing Title <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control pass-input"
                        />
                      </div>

                      <div className="form-set">
                        <label className="col-form-label">
                          Listing Description <span>*</span>
                        </label>
                        <textarea
                          rows="6"
                          className="form-control listingdescription"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* ===== Category ===== */}
                  <div className="card">
                    <div className="card-header">
                      <h4>Category</h4>
                    </div>
                    <div className="card-body">
                      <div className="row category-listing">
                        {[
                          "Automotive",
                          "Electronics",
                          "Fashion Style",
                          "Health Care",
                          "Job Board",
                          "Education",
                          "Real Estate",
                          "Travel",
                          "Sports & Game",
                          "Magazines",
                          "Pet & Animal",
                          "Household",
                        ].map((item, i) => (
                          <div className="col-lg-4" key={i}>
                            <label className="custom_check">
                              <input type="checkbox" />
                              <span className="checkmark"></span> {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ===== Price ===== */}
                  <div className="card">
                    <div className="card-header">
                      <h4>Tagline</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12">
                          <textarea
                            rows="2"
                            className="form-control"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ===== Basic Information ===== */}

                  <div className="card">
                    <div className="card-header">
                      <h4 className="mb-0">Basic Information</h4>
                    </div>

                    <div className="card-body">
                      {/* Price Range */}
                      <div className="form-set mb-3">
                        <label className="col-form-label">Price Range</label>
                        <input
                          type="text"
                          className="form-control pass-input"
                          placeholder="$$$"
                          value={priceRange}
                          onChange={(e) => setPriceRange(e.target.value)}
                        />
                      </div>

                      <div className="row">
                        {/* Price From */}
                        <div className="col-lg-6 col-md-6">
                          <div className="form-set formlast-input mb-3">
                            <label className="col-form-label">Price From</label>
                            <select
                              className="form-control select"
                              value={priceFrom}
                              onChange={(e) => setPriceFrom(e.target.value)}
                            >
                              <option value="65">65</option>
                              <option value="75">75</option>
                              <option value="85">85</option>
                              <option value="95">95</option>
                              <option value="105">105</option>
                              <option value="110">110</option>
                              <option value="115">115</option>
                            </select>
                          </div>
                        </div>

                        {/* Price To */}
                        <div className="col-lg-6 col-md-6">
                          <div className="form-set formlast-input formlast-input-inner mb-3">
                            <label className="col-form-label">Price To</label>
                            <select
                              className="form-control select"
                              value={priceTo}
                              onChange={(e) => setPriceTo(e.target.value)}
                            >
                              <option value="120">120</option>
                              <option value="130">130</option>
                              <option value="140">140</option>
                              <option value="150">150</option>
                              <option value="160">160</option>
                              <option value="170">170</option>
                              <option value="190">190</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ===== Features ===== */}
                  <div className="card">
                    <div className="card-header">
                      <h4 className="mb-3">Features Information</h4>
                    </div>

                    <div className="card-body">
                      <ul className="featuresform-list list-unstyled mb-0">
                        {FEATURES.map((feature) => (
                          <li key={feature}>
                            <label className="custom_check">
                              <input
                                type="checkbox"
                                checked={selectedFeatures.includes(feature)}
                                onChange={() => handleChange(feature)}
                              />
                              <span className="checkmark"></span>
                              {feature}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* ===== Location ===== */}
                  <div className="card">
                    <div className="card-header">
                      <h4 className="mb-0">Location Information</h4>
                    </div>

                    <div className="card-body">
                      {/* Location */}
                      <div className="form-set mb-3">
                        <label className="col-form-label">Location</label>
                        <input
                          type="text"
                          className="form-control"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </div>

                      {/* Address */}
                      <div className="form-set mb-3">
                        <label className="col-form-label">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>

                      {/* Map Address */}
                      <div className="form-set mb-3">
                        <label className="col-form-label">Map Address</label>
                        <input
                          type="text"
                          className="form-control"
                          value={mapAddress}
                          onChange={(e) => setMapAddress(e.target.value)}
                        />
                      </div>

                      {/* Map */}
                      <div className="listing-map mb-4">
                        <iframe
                          title="location-map"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.6461688381!2d-80.26548188573862!3d26.045130803169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a862f9831459%3A0xafcb9384c02e8b75!2s8697%20Stirling%20Rd%2C%20Cooper%20City%2C%20FL%2033328%2C%20USA!5e0!3m2!1sen!2sin!4v1671519522101!5m2!1sen!2sin"
                          width="100%"
                          height="430"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>

                      {/* Latitude & Longitude */}
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-set formlast-input lat-input mb-3">
                            <label className="col-form-label">Latitude</label>
                            <input
                              type="text"
                              className="form-control"
                              value={latitude}
                              onChange={(e) => setLatitude(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-set formlast-input mb-3">
                            <label className="col-form-label">Longitude</label>
                            <input
                              type="text"
                              className="form-control"
                              value={longitude}
                              onChange={(e) => setLongitude(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ===== Contact ===== */}
                  <div className="card">
                    <div className="card-header">
                      <h4>Contact Information</h4>
                    </div>
                    <div className="card-body">
                      <label>Email</label>
                      <input type="text" className="form-control mb-3" />
                    </div>

                    <div className="card-body">
                      <label>Website</label>
                      <input type="text" className="form-control mb-3" />
                    </div>

                    <div className="card-body">
                      <label>Phone</label>
                      <input type="text" className="form-control mb-3" />
                    </div>
                  </div>

                  {/* ===== Social Information ===== */}
                  <div className="card">
                    <div className="card-header">
                      <h4>Social Information</h4>
                    </div>
                    <div className="card-body">
                      {[
                        "facebook",
                        "twitter",
                        "google-plus-g",
                        "instagram",
                      ].map((s, i) => (
                        <div className="form-set" key={i}>
                          <div className="pass-group group-img">
                            <span className="lock-icon">
                              <i className={`fab fa-${s}`}></i>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={`http://${s}.com`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ===== Media Information ===== */}
                  <div className="card media-section">
                    <div className="card-header">
                      <h4>Media Information</h4>
                    </div>

                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <label className="form-label fw-semibold">
                            Featured Image
                          </label>
                          <div className="mb-2">
                            <img
                              src="/assets/img/mediaimg-2.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <label className="btn btn-outline-primary">
                            <i className="fa-solid fa-upload me-2"></i>
                            Upload Image
                            <input type="file" accept="image/*" hidden />
                          </label>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label fw-semibold">Logo</label>
                          <div className="mb-2">
                            <img
                              src="/assets/img/mediaimg-1.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <label className="btn btn-outline-primary">
                            <i className="fa-solid fa-upload me-2"></i>
                            Upload Image
                            <input type="file" accept="image/*" hidden />
                          </label>
                        </div>
                      </div>

                      {/* ===== Gallery ===== */}
                      <div className="gallery-media mt-4">
                        <div className="card-header">
                          <h4>Gallery</h4>
                        </div>

                        <div className="galleryimg-upload d-flex flex-wrap gap-5">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div
                              key={i}
                              className="position-relative"
                              style={{ width: "200px", height: "200px" }}
                            >
                              <img
                                src={`/assets/img/gallery/gallerymedia-${i}.jpg`}
                                alt="Gallery"
                                className="img-fluid rounded w-100 h-100"
                                style={{ objectFit: "cover" }}
                              />

                              {/* Delete Icon */}
                              <button
                                type="button"
                                className="btn btn-sm position-absolute top-0 end-0 m-1 rounded-circle"
                              >
                                <i className="feather-trash-2"></i>
                              </button>
                            </div>
                          ))}
                        </div>

                        <label className="btn btn-outline-primary mt-3">
                          <i className="fa-solid fa-upload me-2"></i>
                          Upload Image
                          <input type="file" accept="image/*" hidden />
                        </label>
                      </div>
                    </div>
                  </div>

                  <button className="btn btn-primary mt-3">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AddListing;
