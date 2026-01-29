import { Link } from "react-router-dom";
const Contact = () => (
  <>
    <section
      className="breadcrumb-bar position-relative overflow-hidden"
      style={{ height: "320px" }}
    >
      <img
        src="/assets/img/banner/contactbanner.jpg"
        alt="contact"
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      />

      <div
        className="position-absolute top-0 start-0 w-100 h-100 z-1"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      <div className="container position-absolute top-50 start-50 translate-middle text-center text-white z-2">
        <h2 className="breadcrumb-title mb-2">Contact Us</h2>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center mb-0 bg-transparent">
            <li className="breadcrumb-item">
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </li>
            <span className="mx-2 text-white">/</span>
            <li className="active text-white">Contact us</li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="contact-section py-5">
      <div className="container">
        {/* IMAGE + MAP WITH OVERLAY INFO */}
        <div className="row position-relative">
          {/* LEFT IMAGE */}
          <div className="col-lg-6 p-0">
            <img
              src="/assets/img/contactleftimg.jpg"
              alt="Contact"
              className="img-fluid w-100 h-100 object-fit-cover"
              style={{ minHeight: "420px" }}
            />
          </div>

          {/* RIGHT MAP */}
          <div className="col-lg-6 p-0">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=New%20York&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px" }}
              loading="lazy"
            ></iframe>
          </div>

          {/* CONTACT INFO OVERLAY */}
          <div className="position-absolute top-0 start-50 translate-middle-x py-5 px-3">
            <div className="row justify-content-center">
              <div className="col-3">
                <div className="card text-center shadow bg-danger text-white">
                  <div className="card-body">
                    <div className="contact-info">
                      <h6 className="fw-bold text-white">Hours</h6>
                      <p className="mb-0 small">
                        Tuesday – Saturday : 9am – 5pm
                      </p>
                      <p className="mb-0 small">Monday : 10:30am – 3pm</p>
                      <p className="mb-0 small">Closed on Sunday</p>

                      <h6 className="fw-bold text-white mt-3">Contact Info</h6>
                      <p className="mb-0 small">
                        132, My Street, Kingston, New York 12401
                      </p>
                      <p className="mb-0 small">Tel : +088 01562 1452</p>
                      <p className="mb-0 small">Email : support@listee.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-5 bg-light">
      <div className="container-fluid">
        <div className="row align-items-center g-4">
          <div className="col-lg-4">
            <div className="h-100 rounded overflow-hidden">
              <img
                src="/assets/img/contactform-img.svg"
                alt="Contact"
                className="img-fluid w-100 h-100 object-fit-cover rounded"
                style={{ minHeight: "420px" }}
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-8">
            <div className="contact-form card shadow-sm border-0">
              <div className="card-body p-4 p-lg-5">
                <h4 className="mb-2">
                  <span className="text-danger">Contact </span>Us
                </h4>
                <p className="text-muted mb-4">We are here to help you</p>

                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Write a Message"
                      required
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary px-4">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Contact;
