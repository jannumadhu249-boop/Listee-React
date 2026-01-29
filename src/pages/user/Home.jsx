import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  // Featured Ads data
  const featuredAds = [
    {
      id: 1,
      img: "feature-9.jpg",
      avatar: "avatar-02.jpg",
      category: "Education",
      title: "2017 Gulfsteam Ameri-lite",
      price: "$350",
      oldPrice: "$450",
      rating: "4.7",
    },
    {
      id: 2,
      img: "feature-2.jpg",
      avatar: "avatar-05.jpg",
      category: "Electronics",
      title: "Fashion luxury Men date",
      price: "$250",
      oldPrice: "$350",
      rating: "4.6",
    },
    {
      id: 3,
      img: "feature-3.jpg",
      avatar: "avatar-04.jpg",
      category: "Electronics",
      title: "Apple Iphone 6 16GB 4G LTE",
      price: "$550",
      oldPrice: "$400",
      rating: "4.7",
    },
    {
      id: 4,
      img: "feature-4.jpg",
      avatar: "avatar-05.jpg",
      category: "Gadgets",
      title: "Customized Apple Imac",
      price: "$450",
      oldPrice: "$300",
      rating: "4.5",
    },
  ];

  // Latest Ads data
  const latestAds = [
    {
      id: 1,
      img: "feature-9.jpg",
      avatar: "avatar-02.jpg",
      category: "Education",
      title: "2017 Gulfsteam Ameri-lite",
      price: "$350",
      oldPrice: "$450",
      rating: "4.7",
      date: "06 Oct, 2022",
    },
    {
      id: 2,
      img: "feature-2.jpg",
      avatar: "avatar-03.jpg",
      category: "Electronics",
      title: "Fashion luxury Men date",
      price: "$250",
      oldPrice: "$350",
      rating: "4.6",
      date: "08 Oct, 2022",
    },
    {
      id: 3,
      img: "feature-3.jpg",
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
      img: "feature-4.jpg",
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
      img: "feature-5.jpg",
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
      img: "feature-6.jpg",
      avatar: "avatar-03.jpg",
      category: "Jobs",
      title: "CDL A OTR Compnay Driver Job-N",
      price: "$550",
      oldPrice: "$450",
      rating: "4.7",
      date: "12 Oct, 2022",
    },
    {
      id: 7,
      img: "feature-7.jpg",
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
      img: "feature-8.jpg",
      avatar: "avatar-07.jpg",
      category: "Vehicle",
      title: "2012 AudiR8 GT Spider Convrtibile",
      price: "$450",
      oldPrice: "$350",
      rating: "4.7",
      date: "02 Oct, 2022",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      img: "testimonial-1.jpg",
      name: "Dev",
      role: "Lead Intranet Technician",
      text: "Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas",
    },
    {
      id: 2,
      img: "testimonial-2.jpg",
      name: "Esther Hills",
      role: "Lead Intranet Technician",
      text: "Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas",
    },
    {
      id: 3,
      img: "testimonial-1.jpg",
      name: "Jade Williams",
      role: "Lead Intranet Technician",
      text: "Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas",
    },
    {
      id: 4,
      img: "testimonial-2.jpg",
      name: "Norway Hills",
      role: "Lead Intranet Technician",
      text: "Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas",
    },
    {
      id: 5,
      img: "testimonial-1.jpg",
      name: "John Doe",
      role: "Marketing Director",
      text: "Excellent service! The platform is very user-friendly and helped us find exactly what we were looking for. Highly recommended!",
    },
    {
      id: 6,
      img: "testimonial-2.jpg",
      name: "Will Smith",
      role: "Business Owner",
      text: "As a small business owner, this platform has been invaluable for finding quality products at reasonable prices.",
    },
  ];

  // Pricing plans data
  const pricingPlans = [
    {
      id: 1,
      name: "Intro",
      price: "$10",
      features: [
        "Basic listing submission",
        "One Listing",
        "30 days Availabilty",
      ],
      inactiveFeatures: ["Limited Support", "Edit your listing"],
    },
    {
      id: 2,
      name: "Basic",
      price: "$25",
      features: [
        "Basic listing submission",
        "One Listing",
        "30 days Availabilty",
      ],
      inactiveFeatures: ["Limited Support", "Edit your listing"],
    },
    {
      id: 3,
      name: "Popular",
      price: "$50",
      features: [
        "Basic listing submission",
        "One Listing",
        "30 days Availabilty",
      ],
      inactiveFeatures: ["Limited Support", "Edit your listing"],
    },
    {
      id: 4,
      name: "Enterprise",
      price: "$100",
      features: [
        "Basic listing submission",
        "One Listing",
        "30 days Availabilty",
      ],
      inactiveFeatures: ["Limited Support", "Edit your listing"],
    },
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      img: "blog-1.jpg",
      avatar: "avatar-14.jpg",
      author: "Amara",
      date: "October 4, 2023",
      categories: ["Health", "Care"],
      title: "The Best Spa Saloons for your relaxations?",
    },
    {
      id: 2,
      img: "blog-2.jpg",
      avatar: "avatar-12.jpg",
      author: "Darryl",
      date: "October 6, 2023",
      categories: ["Health", "Care"],
      title: "Three Powerful Tricks For Online Advertising",
    },
    {
      id: 3,
      img: "blog-3.jpg",
      avatar: "avatar-13.jpg",
      author: "Mary",
      date: "October 10, 2023",
      categories: ["Health", "Care"],
      title: "Competitive Analysis for Enterprerneurs in 2022",
    },
  ];

  // State for testimonial carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = 2; // Number of testimonials to show at once

  // Calculate total slides
  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  // Handle next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Handle dot navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Get current testimonials to display
  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * slidesPerView;
    return testimonials.slice(startIndex, startIndex + slidesPerView);
  };

  return (
    <>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-circle">
          <img
            src="/assets/img/bannerbg.png"
            className="img-fluid"
            alt="bannercircle"
          />
        </div>
        <div className="container">
          <div className="home-banner">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="section-search aos" data-aos="fade-up">
                  <p className="explore-text">
                    <span>Explore top-rated attractions</span>
                  </p>
                  <img
                    src="/assets/img/arrow-banner.png"
                    className="arrow-img"
                    alt="arrow"
                  />
                  <h1>
                    Let us help you <br />
                    <span>Find, Buy</span> &amp; Own Dreams
                  </h1>
                  <p>
                    Countrys most loved and trusted classified ad listing
                    website classified ad.randomised words which don't look even
                    slightly Browse thousand of items near you.
                  </p>
                  <div className="search-box">
                    <form action="/listing-grid-sidebar" className="d-flex">
                      <div className="search-input line">
                        <div className="form-set">
                          <select className="form-control select category-select">
                            <option value="">Choose Category</option>
                            <option>Computer</option>
                            <option>Automobile</option>
                            <option>Car Wash</option>
                            <option>Cleaning</option>
                            <option>Electrical</option>
                            <option>Construction</option>
                          </select>
                        </div>
                      </div>
                      <div className="search-input">
                        <div className="form-set">
                          <div className="group-img">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Choose Location"
                            />
                            <i className="feather-map-pin"></i>
                          </div>
                        </div>
                      </div>
                      <div className="search-btn">
                        <button className="btn btn-primary" type="submit">
                          <i className="fa fa-search" aria-hidden="true"></i>{" "}
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="banner-imgs">
                  <img
                    src="/assets/img/Right-img.png"
                    className="img-fluid"
                    alt="bannerimage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/img/bannerellipse.png"
          className="img-fluid banner-elipse"
          alt="arrow"
        />
        <img
          src="/assets/img/banner-arrow.png"
          className="img-fluid bannerleftarrow"
          alt="arrow"
        />
      </section>

      {/* Category Section */}
      <section className="category-section">
        <div className="container">
          <div className="section-heading">
            <div className="row align-items-center">
              <div
                className="col-md-6 aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <h2>
                  Our <span className="title-left">Cat</span>egory
                </h2>
                <p>Buy and Sell Everything from Used Our Top Category</p>
              </div>
              <div
                className="col-md-6 text-md-end aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <Link to="/categories" className="btn btn-view">
                  View All
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              { name: "Automotive", icon: "category-1.svg" },
              { name: "Electronics", icon: "category-2.svg" },
              { name: "Fashion Style", icon: "category-3.svg" },
              { name: "Health Care", icon: "category-4.svg" },
              { name: "Job Board", icon: "category-5.svg" },
              { name: "Education", icon: "category-6.svg" },
              { name: "Real Estate", icon: "category-7.svg" },
              { name: "Travel", icon: "category-8.svg" },
              { name: "Sports & Game", icon: "category-9.svg" },
              { name: "Magazines", icon: "category-10.svg" },
              { name: "Pet & Animal", icon: "category-11.svg" },
              { name: "House Hold", icon: "category-12.svg" },
            ].map((cat, index) => (
              <div className="col-lg-2 col-md-3 col-sm-6" key={index}>
                <Link to="/categories" className="category-links">
                  <h5>{cat.name}</h5>
                  <span>09 Ads</span>
                  <img src={`/assets/img/icons/${cat.icon}`} alt="icons" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured ADS Section */}
<section className="latestad-section grid-view featured-slider">
        <div className="container">
          <div className="section-heading">
            <div className="row align-items-center">
              <div
                className="col-md-6 aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <h2>
                  Featu<span className="title-right">red</span> Ads
                </h2>
                <p>checkout these latest cool ads from our members</p>
              </div>
              <div
                className="col-md-6 text-md-end aos aos-init aos-animate"
                data-aos="fade-up"
              >

              </div>
            </div>
          </div>
          <div className="lateestads-content">
            <div className="row">
              {featuredAds.map((ad) => (
                <div className="col-lg-3 col-md-4 col-sm-6 d-flex" key={ad.id}>
                  <div className="card aos flex-fill" data-aos="fade-up">
                    <div className="blog-widget">
                      <div className="blog-img">
                        <Link to="/service-details">
                          <img
                            src={`/assets/img/featured/${ad.img}`}
                            className="img-fluid"
                            alt="blog-img"
                          />
                        </Link>
                        <div className="fav-item">
                          <span className="featured-text">Featured</span>
                          <a href="javascript:void(0)" className="fav-icon">
                            <i className="feather-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div className="bloglist-content">
                        <div className="card-body">
                          <div className="blogfeaturelink">
                            <div className="grid-author">
                              <img
                                src={`/assets/img/profiles/${ad.avatar}`}
                                alt="author"
                              />
                            </div>
                            <div className="blog-features">
                              <a href="javascript:void(0)">
                                <span>
                                  <i className="fa-regular fa-circle-stop"></i>{" "}
                                  {ad.category}
                                </span>
                              </a>
                            </div>
                            <div className="blog-author text-end">
                              <span>
                                <i className="feather-eye"></i> 4000
                              </span>
                            </div>
                          </div>
                          <h6>
                            <Link to="/service-details">{ad.title}</Link>
                          </h6>
                          <div className="blog-location-details">
                            <div className="location-info">
                              <i className="feather-map-pin"></i> Los Angeles
                            </div>
                            <div className="location-info">
                              <i className="fa-solid fa-calendar-days"></i>{" "}
                              {ad.date}
                            </div>
                          </div>
                          <div className="amount-details">
                            <div className="amount">
                              <span className="validrate">{ad.price}</span>
                              <span>{ad.oldPrice}</span>
                            </div>
                            <div className="ratings">
                              <span>{ad.rating}</span> (50)
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
      </section>

      {/* Popular Locations Section */}
      <section className="popular-locations">
        <div className="popular-circleimg">
          <img
            className="img-fluid"
            src="/assets/img/popular-img.png"
            alt="Popular-sections"
          />
        </div>
        <div className="container">
          <div className="section-heading">
            <h2>
              Popular <span>Loc</span>ations
            </h2>
            <p>
              Start by selecting your favourite location and explore the goods
            </p>
          </div>
          <div className="location-details d-flex">
            <div className="row">
              {[
                { name: "USA", img: "usa.jpg" },
                { name: "Canada", img: "canada.jpg" },
                { name: "China", img: "china.jpg" },
                { name: "United Kingdom", img: "uk.jpg" },
                { name: "Australia", img: "australia.jpg" },
                { name: "France", img: "france.jpg" },
              ].map((loc, index) => (
                <div className="location-info col-lg-4 col-md-6" key={index}>
                  <div className="location-info-details d-flex align-items-center">
                    <div className="location-img">
                      <Link to="/listing-grid-sidebar">
                        <img
                          className="img-fluid"
                          src={`/assets/img/locations/${loc.img}`}
                          alt="locations"
                        />
                      </Link>
                    </div>
                    <div className="location-content">
                      <Link to="/listing-grid-sidebar">{loc.name}</Link>
                      <p>20+ Ads Posted</p>
                      <Link
                        to="/listing-grid-sidebar"
                        className="view-detailsbtn"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="align-items-center">
            <Link to="/listing-grid-sidebar" className="browse-btn">
              Browse Ads
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Ads Section */}
      <section className="latestad-section grid-view featured-slider">
        <div className="container">
          <div className="section-heading">
            <div className="row align-items-center">
              <div
                className="col-md-6 aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <h2>
                  Lat<span className="title-right">est</span> Ads
                </h2>
                <p>checkout these latest cool ads from our members</p>
              </div>
              <div
                className="col-md-6 text-md-end aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <Link to="/service-details" className="btn btn-view">
                  View All
                </Link>
              </div>
            </div>
          </div>
          <div className="lateestads-content">
            <div className="row">
              {latestAds.map((ad) => (
                <div className="col-lg-3 col-md-4 col-sm-6 d-flex" key={ad.id}>
                  <div className="card aos flex-fill" data-aos="fade-up">
                    <div className="blog-widget">
                      <div className="blog-img">
                        <Link to="/service-details">
                          <img
                            src={`/assets/img/featured/${ad.img}`}
                            className="img-fluid"
                            alt="blog-img"
                          />
                        </Link>
                        <div className="fav-item">
                          <span className="featured-text">Featured</span>
                          <a href="javascript:void(0)" className="fav-icon">
                            <i className="feather-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div className="bloglist-content">
                        <div className="card-body">
                          <div className="blogfeaturelink">
                            <div className="grid-author">
                              <img
                                src={`/assets/img/profiles/${ad.avatar}`}
                                alt="author"
                              />
                            </div>
                            <div className="blog-features">
                              <a href="javascript:void(0)">
                                <span>
                                  <i className="fa-regular fa-circle-stop"></i>{" "}
                                  {ad.category}
                                </span>
                              </a>
                            </div>
                            <div className="blog-author text-end">
                              <span>
                                <i className="feather-eye"></i> 4000
                              </span>
                            </div>
                          </div>
                          <h6>
                            <Link to="/service-details">{ad.title}</Link>
                          </h6>
                          <div className="blog-location-details">
                            <div className="location-info">
                              <i className="feather-map-pin"></i> Los Angeles
                            </div>
                            <div className="location-info">
                              <i className="fa-solid fa-calendar-days"></i>{" "}
                              {ad.date}
                            </div>
                          </div>
                          <div className="amount-details">
                            <div className="amount">
                              <span className="validrate">{ad.price}</span>
                              <span>{ad.oldPrice}</span>
                            </div>
                            <div className="ratings">
                              <span>{ad.rating}</span> (50)
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
      </section>

      {/* CTA Section - Earn Cash by Selling */}
      <section className="cta-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="cta-content">
                <h3>
                  Earn Cash by <span>Selling</span> <br />
                  or Find Anything you desire
                </h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humo or randomised words which don't look
                  even slightlys
                </p>
                <div className="cta-btn">
                  <Link to="/add-listing" className="btn-primary postad-btn">
                    Post Your Ads
                  </Link>
                  <Link to="/listing-grid-sidebar" className="browse-btn">
                    Browse Ads
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="cta-img">
                <img
                  src="/assets/img/cta-img.png"
                  className="img-fluid"
                  alt="CTA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="testimonials-section">
        <div className="row">
          <div className="col-lg-5">
            <div className="testimonial-heading d-flex gap-5 align-items-center justify-content-center position-relative">
              <h4 className="text-start mb-5">
                {" "}
                Client <br /> Testimonials
              </h4>
              <img src="/assets/img/quotes.png" alt="quotes" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="rightimg"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="testimonials-slidersection">
              <div className="owl-nav mynav1 d-flex justify-content-center gap-3 mt-3 mb-4">
                <button
                  type="button"
                  onClick={prevSlide}
                  role="presentation"
                  className="btn btn-light rounded"
                >
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  role="presentation"
                  className="btn btn-light rounded"
                >
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>

              {/* Dot indicators */}
              <div className="d-flex justify-content-center gap-2 mb-4">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToSlide(index)}
                    className={`btn btn-sm ${currentSlide === index ? "btn-primary" : "btn-light"}`}
                    style={{
                      width: "10px",
                      height: "10px",
                      padding: 0,
                      borderRadius: "50%",
                      border: "none",
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Testimonials Carousel */}
              <div className="testimonial-carousel">
                <div
                  className="row"
                  style={{ transition: "transform 0.3s ease" }}
                >
                  {getCurrentTestimonials().map((testimonial) => (
                    <div className="col-md-6" key={testimonial.id}>
                      <div className="testimonial-info">
                        <div className="testimonialslider-heading d-flex">
                          <div className="testi-img">
                            <img
                              src={`/assets/img/${testimonial.img}`}
                              className="img-fluid"
                              alt="testi-img"
                            />
                          </div>
                          <div className="testi-author">
                            <h6>{testimonial.name}</h6>
                            <p>{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="testimonialslider-content mt-2">
                          <p>{testimonial.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners/Sponsors Section */}
      <div className="partners-section">
        <div className="container">
          <p className="partners-heading">
            Over 5,26,000+ Sponsers being contact with us
          </p>
          <div className="pattners-wrapper">
            <ul className="partnerslist d-flex align-items-center gap-4">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <li key={num} className="partner-item">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src={`/assets/img/partners/partners-${num}.svg`}
                      alt="partners"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Pricing Plan Section */}
      <section className="pricingplan-section">
        <div className="section-heading">
          <div className="container">
            <div className="row text-center">
              <h2>
                Our Pricing <span>Pla</span>n
              </h2>
              <p>checkout these latest cool ads from our members</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {pricingPlans.map((plan) => (
              <div className="col-lg-3 d-flex col-md-6" key={plan.id}>
                <div className="price-card flex-fill">
                  <div className="price-head">
                    <div className="price-level">
                      <h6>{plan.name}</h6>
                    </div>
                    <h4>
                      {plan.price} <span>/ month</span>
                    </h4>
                  </div>
                  <div className="price-body">
                    <p>For most business that want to optimize web queries</p>
                    <ul>
                      {plan.features.map((feature, idx) => (
                        <li className="active" key={idx}>
                          {feature}
                        </li>
                      ))}
                      {plan.inactiveFeatures.map((feature, idx) => (
                        <li className="inactive" key={idx}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div>
                      <Link to="/login" className="btn viewdetails-btn">
                        View details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="section-heading">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-md-6 aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <h2>
                  Lat<span className="title-right">est</span> Blog
                </h2>
                <p>people are giving these goods for free so check them out</p>
              </div>
              <div
                className="col-md-6 text-md-end aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <Link to="/blog-grid" className="btn btn-view">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {blogPosts.map((post) => (
              <div className="col-lg-4 col-md-4 d-flex" key={post.id}>
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={`/assets/img/blog/${post.img}`}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <p className="blog-category">
                      {post.categories.map((cat, idx) => (
                        <a href="javascript:void(0);" key={idx}>
                          <span>{cat}</span>
                        </a>
                      ))}
                    </p>
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <div className="post-author-img">
                            <img
                              src={`/assets/img/profiles/${post.avatar}`}
                              alt="Post Author"
                            />
                          </div>
                          <a href="javascript:void(0);" className="mb-0">
                            <span> {post.author} </span>
                          </a>
                        </div>
                      </li>
                      <li className="date-icon">
                        <i className="fa-solid fa-calendar-days"></i>{" "}
                        {post.date}
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="/blog-details">{post.title}</Link>
                    </h3>
                    <p className="blog-description">
                      Lorem ipsum dolor sit amet, consectetur em adipiscing
                      elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet,
                      consectetur em adipiscing elit,
                    </p>
                    <p className="viewlink">
                      <Link to="/blog-details">
                        View Details <i className="feather-arrow-right"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
