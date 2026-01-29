import { Link } from "react-router-dom";
import { useState } from "react";

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

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = 2;

  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getCurrentTestimonials = () => {
    const start = currentSlide * slidesPerView;
    return testimonials.slice(start, start + slidesPerView);
  };

  return (
    <>
      <section
        className="breadcrumb-bar position-realtive overflow-hidden"
        style={{ height: "320px" }}
      >
        <img
          src="/assets/img/banner/aboutbanner.jpg"
          alt="about"
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.75) 100%)",
          }}
        />
        <div className="container position-absolute top-50 start-50 translate-middle text-center text-white">
          <h2 className="breadcrumb-title mb-2">About Us</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <span className="mx-2">/</span>
              <li className="breadcrumb-item active text-white">About Us</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-lg-6">
              <img
                src="/assets/img/about-img.jpg"
                className="img-fluid rounded-4"
                alt="About"
              />
            </div>

            <div className="col-lg-6 position-lg-absolute end-0">
              <div className="bg-white rounded-4 shadow-lg p-4 p-lg-5 ms-lg-n5">
                <h2 className="mb-3">
                  <span className="text-danger">About </span>
                  <span className="text-dark">Listee</span>
                </h2>

                <p className="text-muted">
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Nulla fermentum malesuada pulvinar.
                  Vestibulum laoreet rutrum semper. Vivamus malesuada, nisl in
                  consectetur semper, mauris nulla aliquam risus, nec ultricies
                  sapien elit sed ante. Aenean luctus felis in sem
                </p>

                <p className="text-muted mb-0">
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Nulla fermentum malesuada pulvinar.
                  Vestibulum laoreet rutrum semper. Vivamus malesuada,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h1 className="title text-center text-danger mb-4">How It Work</h1>

          <p className="desc text-center">
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nulla fermentum malesuada pulvinar.
            Vestibulum laoreet rutrum semper. Vivamus malesuada, nisl in
            consectetur semper, mauris nulla aliquam risus, nec ultricies sapien
            elit sed ante. Aenean luctus felis in sem consequat auctor. Nulla
            turpis enim, scelerisque sit amet consectetur vel, lacinia sed
            augue. Proin ultricies dui id ex fringilla porta.
          </p>

          <p className="desc text-center mb-5">
            Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus.
            Maecenas tincidunt, ligula sed congue tempus, magna augue cursus
            ipsum, in malesuada justo risus nec lorem. Nam augue augue, mollis
            nec condimentum euismod, lacinia ultricies leo.
          </p>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="border rounded-4 p-4 h-100">
                <div className="d-flex align-items-center mb-4">
                  <span className="fw-bold display-6 text-danger me-3">01</span>
                  <span className="flex-grow-1 border-top border-danger"></span>
                  <span
                    className="ms-3 border border-danger rounded-circle"
                    style={{ width: 14, height: 14 }}
                  ></span>
                </div>

                <h4>Create Account</h4>
                <p>
                  Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus.
                  Maecenas tincidunt, ligula sed congue tempus, magna augue
                  cursus ipsum, in malesuada justo risus nec lorem. Nam augue
                  augue, mollis nec condimentum euismod, lacinia ultricies leo.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="border rounded-4 p-4 h-100">
                <div className="d-flex align-items-center mb-4">
                  <span className="fw-bold display-6 text-danger me-3">02</span>
                  <span className="flex-grow-1 border-top border-danger"></span>
                  <span
                    className="ms-3 border border-danger rounded-circle"
                    style={{ width: 14, height: 14 }}
                  ></span>
                </div>

                <h4>Post An Ad</h4>
                <p>
                  Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus.
                  Maecenas tincidunt, ligula sed congue tempus, magna augue
                  cursus ipsum, in malesuada justo risus nec lorem. Nam augue
                  augue, mollis nec condimentum euismod, lacinia ultricies leo.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="border rounded-4 p-4 h-100">
                <div className="d-flex align-items-center mb-4">
                  <span className="fw-bold display-6 text-danger me-3">03</span>
                  <span className="flex-grow-1 border-top border-danger"></span>
                  <span
                    className="ms-3 border border-danger rounded-circle"
                    style={{ width: 14, height: 14 }}
                  ></span>
                </div>

                <h4>Find, Buy & Own Dreams</h4>
                <p>
                  Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus.
                  Maecenas tincidunt, ligula sed congue tempus, magna augue
                  cursus ipsum, in malesuada justo risus nec lorem. Nam augue
                  augue, mollis nec condimentum euismod, lacinia ultricies leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Locations Section */}

      <section className="popular-locations py-5 bg-white">
        <div className="container">
          <div className="location-details d-flex">
            <div className="row g-4 w-100">
              {[
                { name: "London", img: "london-1.jpg" },
                { name: "USA", img: "usa.jpg" },
                { name: "Canada", img: "canada.jpg" },
                { name: "China", img: "china.jpg" },
                { name: "United Kingdom", img: "uk.jpg" },
                { name: "Australia", img: "australia.jpg" },
                { name: "France", img: "france.jpg" },
              ].map((loc, index) => {
                // COLUMN CONTROL
                let colClass = "col-lg-3 col-md-6";

                // Australia (middle large in 2nd row)
                if (index === 5) {
                  colClass = "col-lg-6 col-md-12";
                }

                return (
                  <div className={`location-info ${colClass}`} key={index}>
                    <div
                      className="location-info-details position-relative overflow-hidden"
                      style={{ height: index === 5 ? "220px" : "220px" }}
                    >
                      <Link to="/listing-grid-sidebar">
                        <img
                          className="position-absolute top-0 start-0 w-100 h-100"
                          src={`/assets/img/locations/${loc.img}`}
                          alt="locations"
                          style={{ objectFit: "cover" }}
                        />
                      </Link>

                      <div
                        className="position-absolute bottom-0 start-0 w-100"
                        style={{
                          height: "80%",
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))",
                        }}
                      />

                      <div className="location-content position-absolute bottom-0 start-0 p-4 text-white">
                        <Link
                          to="/listing-grid-sidebar"
                          className="text-white fw-semibold fs-5 text-decoration-none d-block"
                        >
                          {loc.name}
                        </Link>
                        <p className="mb-0 small text-white">20+ Ads Posted</p>
                      </div>
                    </div>
                  </div>
                );
              })}
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
    </>
  );
};

export default About;
