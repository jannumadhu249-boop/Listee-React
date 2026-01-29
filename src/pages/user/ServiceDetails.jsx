import { Link } from "react-router-dom";

const StarRating = ({ filled = 4 }) => (
  <div className="rating-star">
    {[1, 2, 3, 4, 5].map((i) => (
      <i
        key={i}
        className={`fa-star ${
          i <= filled ? "fas filled" : "fa-regular rating-overall"
        }`}
      ></i>
    ))}
  </div>
);

const ReviewImages = ({ images }) => (
  <div className="row">
    {images.map((img, i) => (
      <div key={i} className="col-lg-3 col-md-3 col-sm-3">
        <div className="review-gallery">
          <a href={img.full} data-fancybox="gallery">
            <img src={img.thumb} className="img-fluid" alt="review" />
          </a>
        </div>
      </div>
    ))}
  </div>
);

const ServiceDetails = () => {
  const galleryImages = [
    "/assets/img/gallery/gallery1/gallery-1.jpg",
    "/assets/img/gallery/gallery1/gallery-2.jpg",
    "/assets/img/gallery/gallery1/gallery-3.jpg",
    "/assets/img/gallery/gallery1/gallery-4.jpg",
  ];

  return (
    <>
      <section className="bannergallery-section">
        <div className="gallery-slider d-flex">
          {galleryImages.map((img, index) => (
            <div className="gallery-widget" key={index}>
              <a href={img} data-fancybox="gallery1">
                <img
                  className="img-fluid"
                  src={img}
                  alt={`Gallery ${index + 1}`}
                />
              </a>
            </div>
          ))}

          {/* Show Photos link */}
          <div className="showphotos">
            <a href={galleryImages[2]} data-fancybox="gallery1">
              ... Show Photos
            </a>
          </div>
        </div>
      </section>

      <section className="details-description">
        <div className="container">
          {/* About Details */}
          <div className="about-details">
            <div className="about-headings d-flex align-items-center">
              <div className="author-img me-3">
                <img src="/assets/img/profiles/avatar-10.jpg" alt="authorimg" />
              </div>
              <div className="authordetails">
                <h5>Sleep In a Room in Apartment</h5>
                <p>Luxury hotel in the heart of Blommsbury</p>
                <div className="rating d-flex align-items-center gap-1">
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fa-regular fa-star rating-color"></i>
                  <span className="d-inline-block average-rating">4.5</span>
                </div>
              </div>
            </div>

            <div className="rate-details mt-3">
              <h2>$350</h2>
              <p>Fixed</p>
            </div>
          </div>

          {/* Description Links */}

          <div className="descriptionlinks mt-4">
            <div className="row">
              <div className="col-lg-9 overflow-auto h-100">
                <ul className="d-flex flex-wrap gap-3 list-unstyled">
                  <li>
                    <a href="#">
                      <i className="feather-map"></i> Get Directions
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/img/website.svg"
                        alt="website"
                        className="me-1"
                      />
                      Website
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="feather-share-2"></i> Share
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-regular fa-comment-dots"></i> Write a
                      review
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="feather-flag"></i> Report
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="feather-heart"></i> Save
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 d-flex align-items-center">
                <div className="callnow">
                  <a href="contact.html">
                    <i className="feather-phone-call"></i> Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="details-main-wrapper listing-section">
        <div className="container">
          <div className="row">
            {/* LEFT CONTENT */}
            <div className="col-lg-9 overflow-auto">
              {/* Description */}
              <div className="card">
                <div className="card-header">
                  <span className="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <h4>Description</h4>
                </div>
                <div className="card-body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>

                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>

              {/* Listing Features */}

              <section className="card">
                <div className="card-header">
                  <i className="feather-list"></i>
                  <h4>Listing Features</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    {[
                      { img: "Feature-1.svg", text: "Room amenities" },
                      { img: "Feature-2.svg", text: "Bathroom amenities" },
                      {
                        img: "Feature-3.svg",
                        text: "Media & Technology amenities",
                      },
                      {
                        img: "Feature-4.svg",
                        text: "Food & Security amenities",
                      },
                      {
                        img: "Feature-5.svg",
                        text: "Services & Extra amenities",
                      },
                      {
                        img: "Feature-6.svg",
                        text: "Outdoor & View amenities",
                      },
                      { img: "Feature-7.svg", text: "Accessibility amenities" },
                      {
                        img: "Feature-8.svg",
                        text: "Safety & Security amenities",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="featureslist d-flex align-items-center col-lg-4 col-md-4"
                      >
                        <div className="feature-img">
                          <img
                            src={`/assets/img/featured/${item.img}`}
                            alt={item.text}
                          />
                        </div>
                        <div className="featues-info">
                          <h6>{item.text.replace(" ", " \n")}</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Gallery */}

              <section className="card gallery-section">
                <div className="card-header">
                  <img src="/assets/img/galleryicon.svg" alt="gallery" />
                  <h4>Gallery</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    {[1, 2, 3, 11, 9, 10, 11, 2].map((img, i) => (
                      <div key={i} className="col-lg-3 col-md-3 col-sm-3">
                        <div className="gallery-widget">
                          <a
                            href={`/assets/img/gallery/gallery1/gallery-${img}.jpg`}
                            data-fancybox="gallery1"
                          >
                            <img
                              className="img-fluid"
                              src={`/assets/img/gallery/galleryimg-${img}.jpg`}
                              alt="Gallery"
                            />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Ratings */}

              <section className="card">
                {/* Card Header */}
                <div className="card-header d-flex align-items-center gap-2">
                  <i className="feather-star"></i>
                  <h4 className="mb-0">Ratings</h4>
                </div>

                {/* Card Body */}
                <div className="card-body">
                  <div className="ratings-content">
                    <div className="row">
                      {/* LEFT SIDE – OVERALL RATING */}
                      <div className="col-lg-3">
                        <div className="ratings-info text-center">
                          <p className="ratings-score">
                            <span>4</span>/5
                          </p>
                          <p>OVERALL</p>

                          <p>
                            {[1, 2, 3, 4].map((i) => (
                              <i key={i} className="fas fa-star filled"></i>
                            ))}
                            <i className="fa-regular fa-star"></i>
                          </p>

                          <p>Based on Listing</p>
                        </div>
                      </div>

                      {/* RIGHT SIDE – RATING DISTRIBUTION */}

                      <div className="col-lg-9">
                        <div className="ratings-table table-responsive">
                          <table className="table mb-0">
                            <tbody>
                              {/* 5 STAR */}
                              <tr>
                                <td className="star-ratings">
                                  {[1, 2, 3, 4, 5].map((i) => (
                                    <i
                                      key={i}
                                      className="fas fa-star filled"
                                    ></i>
                                  ))}
                                </td>
                                <td className="scrore-width">
                                  <span></span>
                                </td>
                                <td>0</td>
                              </tr>

                              {/* 4 STAR */}
                              <tr>
                                <td className="star-ratings">
                                  {[1, 2, 3, 4].map((i) => (
                                    <i
                                      key={i}
                                      className="fas fa-star filled"
                                    ></i>
                                  ))}
                                  <i className="fa-regular fa-star rating-color"></i>
                                </td>
                                <td className="scrore-width selected">
                                  <span></span>
                                </td>
                                <td>1</td>
                              </tr>

                              {/* 3 STAR */}
                              <tr>
                                <td className="star-ratings">
                                  {[1, 2, 3].map((i) => (
                                    <i
                                      key={i}
                                      className="fas fa-star filled"
                                    ></i>
                                  ))}
                                  {[1, 2].map((i) => (
                                    <i
                                      key={`empty3-${i}`}
                                      className="fa-regular fa-star rating-color"
                                    ></i>
                                  ))}
                                </td>
                                <td className="scrore-width">
                                  <span></span>
                                </td>
                                <td>0</td>
                              </tr>

                              {/* 2 STAR */}
                              <tr>
                                <td className="star-ratings">
                                  {[1, 2].map((i) => (
                                    <i
                                      key={i}
                                      className="fas fa-star filled"
                                    ></i>
                                  ))}
                                  {[1, 2, 3].map((i) => (
                                    <i
                                      key={`empty2-${i}`}
                                      className="fa-regular fa-star rating-color"
                                    ></i>
                                  ))}
                                </td>
                                <td className="scrore-width">
                                  <span></span>
                                </td>
                                <td>0</td>
                              </tr>

                              {/* 1 STAR */}
                              <tr>
                                <td className="star-ratings">
                                  <i className="fas fa-star filled"></i>
                                  {[1, 2, 3, 4].map((i) => (
                                    <i
                                      key={`empty1-${i}`}
                                      className="fa-regular fa-star rating-color"
                                    ></i>
                                  ))}
                                </td>
                                <td className="scrore-width">
                                  <span></span>
                                </td>
                                <td>0</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Reviews */}

              <section className="card review-sec mb-0">
                {/* Header */}
                <div className="card-header d-flex align-items-center gap-2">
                  <i className="fa-regular fa-comment-dots"></i>
                  <h4 className="mb-0">Write a Review</h4>
                </div>

                {/* Body */}
                <div className="card-body">
                  <div className="review-list">
                    <ul>
                      {/* Review 1 */}
                      <li className="review-box">
                        <div className="review-profile">
                          <div className="review-img">
                            <img
                              src="assets/img/profiles/avatar-11.jpg"
                              className="img-fluid"
                              alt="profile"
                            />
                          </div>
                        </div>

                        <div className="review-details">
                          <h6>Joseph</h6>

                          <div className="rating">
                            <StarRating filled={4} />
                            <div>
                              <i className="fa-solid fa-calendar-days"></i> 4
                              months ago
                            </div>
                            <div>by: Demo Test</div>
                          </div>

                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>

                          <ReviewImages
                            images={[
                              {
                                full: "assets/img/gallery/gallery1/gallery-6.jpg",
                                thumb: "assets/img/gallery/galleryimg-1.jpg",
                              },
                              {
                                full: "assets/img/gallery/gallery1/gallery-5.jpg",
                                thumb: "assets/img/gallery/galleryimg-2.jpg",
                              },
                              {
                                full: "assets/img/gallery/gallery1/gallery-8.jpg",
                                thumb: "assets/img/gallery/galleryimg-3.jpg",
                              },
                              {
                                full: "assets/img/gallery/gallery1/gallery-9.jpg",
                                thumb: "assets/img/gallery/galleryimg-9.jpg",
                              },
                            ]}
                          />

                          <div className="reply-box">
                            <p>
                              Was This Review...?
                              <button
                                className="thumbsup btn btn-link p-0 ms-2"
                                style={{ textDecoration: "none" }}
                              >
                                <i className="feather-thumbs-up"></i> Like
                              </button>
                              <button
                                className="thumbsdown btn btn-link p-0 ms-2"
                                style={{ textDecoration: "none" }}
                              >
                                <i className="feather-thumbs-down"></i> Dislike
                              </button>
                            </p>

                            <button
                              className="replylink btn btn-link p-0"
                              style={{ textDecoration: "none" }}
                            >
                              <i className="feather-corner-up-left"></i> Reply
                            </button>
                          </div>
                        </div>
                      </li>

                      {/* Review 2 */}
                      <li className="review-box">
                        <div className="review-profile">
                          <div className="review-img">
                            <img
                              src="assets/img/profiles/avatar-02.jpg"
                              className="img-fluid"
                              alt="profile"
                            />
                          </div>
                        </div>

                        <div className="review-details">
                          <h6>Dev</h6>

                          <div className="rating">
                            <StarRating filled={4} />
                            <div>
                              <i className="fa-solid fa-calendar-days"></i> 4
                              months ago
                            </div>
                            <div>by: Demo Test</div>
                          </div>

                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </li>

                      {/* Review 3 */}
                      <li className="review-box">
                        <div className="review-profile">
                          <div className="review-img">
                            <img
                              src="assets/img/profiles/avatar-01.jpg"
                              className="img-fluid"
                              alt="profile"
                            />
                          </div>
                        </div>

                        <div className="review-details">
                          <h6>Johnson</h6>

                          <div className="rating">
                            <StarRating filled={4} />
                            <div>
                              <i className="fa-solid fa-calendar-days"></i> 4
                              months ago
                            </div>
                            <div>by: Demo Test</div>
                          </div>

                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>

                          <div className="reply-box">
                            <p>
                              Was This Review...?
                              <button
                                className="thumbsup btn btn-link p-0 ms-2"
                                style={{ textDecoration: "none" }}
                              >
                                <i className="feather-thumbs-up"></i> Like
                              </button>
                              <button
                                className="thumbsdown btn btn-link p-0 ms-2"
                                style={{ textDecoration: "none" }}
                              >
                                <i className="feather-thumbs-down"></i> Dislike
                              </button>
                            </p>

                            <button
                              className="replylink btn btn-link p-0"
                              style={{ textDecoration: "none" }}
                            >
                              <i className="feather-corner-up-left"></i> Reply
                            </button>
                          </div>
                        </div>
                      </li>

                      {/* Feedback Form */}
                      <li className="review-box feedbackbox mb-0">
                        <div className="review-details">
                          <h6>Leave Feedback About This</h6>
                        </div>

                        <div className="card-body">
                          <form>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-set">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Title"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-6 col-12">
                                <div className="form-set">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name*"
                                    required
                                  />
                                </div>
                              </div>

                              <div className="col-lg-6 col-12">
                                <div className="form-set me-0">
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email*"
                                    required
                                  />
                                </div>
                              </div>

                              <div className="col-lg-12">
                                <div className="form-set">
                                  <textarea
                                    rows="4"
                                    className="form-control"
                                    placeholder="Write a Review*"
                                    required
                                  ></textarea>
                                </div>
                              </div>
                            </div>

                            <div className="reviewbox-rating mb-3">
                              <span className="me-2">Rating</span>
                              {[1, 2, 3, 4, 5].map((i) => (
                                <i
                                  key={i}
                                  className="fas fa-star filled"
                                  style={{ color: "#ffc107" }}
                                ></i>
                              ))}
                            </div>

                            <div className="submit-section">
                              <button
                                className="btn btn-primary submit-btn"
                                type="submit"
                              >
                                Submit Review
                              </button>
                            </div>
                          </form>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT SIDEBAR */}

            <section className="col-lg-3 h-100">
              <div className="rightsidebar">
                {/* Details Card */}
                <div className="card">
                  <h4>
                    <img
                      src="/assets/img/details-icon.svg"
                      alt="details-icon"
                    />{" "}
                    Details
                  </h4>
                  <ul>
                    <li>
                      Contract <span>For Rent</span>
                    </li>
                    <li>
                      Location <span>New York, USA</span>
                    </li>
                    <li>
                      Year Built <span>1988</span>
                    </li>
                    <li>
                      Rooms <span>3</span>
                    </li>
                    <li>
                      Beds <span>4</span>
                    </li>
                    <li>
                      Baths <span>8</span>
                    </li>
                    <li>
                      Gadgets <span>6</span>
                    </li>
                    <li>
                      Home Area <span>30sqft</span>
                    </li>
                    <li>
                      Lot Dimensions <span>30*30*20 ft</span>
                    </li>
                    <li className="p-0">
                      Lot Area <span>50 ft</span>
                    </li>
                  </ul>
                </div>

                {/* Business Info */}
                <div className="card">
                  <h4>
                    <img src="/assets/img/breifcase.svg" alt="business" />{" "}
                    Business Info
                  </h4>

                  <div className="map-details">
                    <div className="map-frame">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2238528387797!2d-122.41637708468208!3d37.78479337975754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858090475dcdc3%3A0x417fdbbd16e076ed!2s484%20Ellis%20St%2C%20San%20Francisco%2C%20CA%2094102%2C%20USA!5e0!3m2!1sen!2sin!4v1669879954211!5m2!1sen!2sin"
                        width="200"
                        height="160"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="map"
                      />
                    </div>

                    <ul className="info-list">
                      <li>
                        <i className="feather-map-pin"></i>
                        484, Ellis st, San Fransisco,
                        <br />
                        CS 94102, United States
                      </li>
                      <li>
                        <i className="feather-phone-call"></i> +62 8245 9875
                      </li>
                      <li>
                        <i className="feather-mail"></i>
                        <a href="mailto:info@listee.com"> info@listee.com</a>
                      </li>
                      <li>
                        <img src="/assets/img/website.svg" alt="website" />{" "}
                        www.listee.com
                      </li>
                      <li className="socialicons pb-0">
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Statistics */}
                <div className="card">
                  <h4>
                    <img src="/assets/img/statistic-icon.svg" alt="statistic" />{" "}
                    Statistic
                  </h4>
                  <ul className="statistics-list">
                    <li>
                      <div className="statistic-details">
                        <span className="icons">
                          <i className="fa-regular fa-eye"></i>
                        </span>
                        Views
                      </div>
                      <span className="text-end">453563</span>
                    </li>
                    <li>
                      <div className="statistic-details">
                        <span className="icons">
                          <i className="feather-star"></i>
                        </span>
                        Ratings
                      </div>
                      <span className="text-end">153</span>
                    </li>
                    <li>
                      <div className="statistic-details">
                        <span className="icons">
                          <i className="feather-heart"></i>
                        </span>
                        Favourites
                      </div>
                      <span className="text-end">123</span>
                    </li>
                    <li className="mb-0">
                      <div className="statistic-details">
                        <span className="icons">
                          <i className="feather-share-2"></i>
                        </span>
                        Shares
                      </div>
                      <span className="text-end">50</span>
                    </li>
                  </ul>
                </div>

                {/* Author */}
                <div className="card">
                  <h4>
                    <i className="feather-user"></i> Author
                  </h4>
                  <div className="sidebarauthor-details d-flex align-items-center">
                    <div className="sideauthor-img">
                      <img
                        src="/assets/img/profiles/avatar-12.jpg"
                        alt="author"
                      />
                    </div>
                    <div className="sideauthor-info">
                      <p className="authorname">Johnson</p>
                      <p>Member since Nov 24, 2017</p>
                    </div>
                  </div>
                </div>

                {/* Contact Business */}
                <div className="card mb-0">
                  <h4>
                    <i className="feather-phone-call"></i> Contact Business
                  </h4>
                  <form className="contactbusinessform">
                    <div className="form-set">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-set">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-set">
                      <textarea
                        rows="6"
                        className="form-control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="submit-section">
                      <button
                        className="btn btn-primary submit-btn"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
