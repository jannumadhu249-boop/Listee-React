import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
        <section className="stay-tuned-section">
                <div className="container">
                    <div className="stay-tuned">
                        <h3>Stay Tuned With Us</h3>
                        <p>Subcribe to our newletter and never miss our latest news and promotions. Our newsletter is sent once a week, every thursday.</p>
                        <form>
                            <div className="form-set">
                                <div className="group-img">
                                    <i className="feather-mail"></i>
                                    <input type="text" className="form-control" placeholder="Enter Email Address" />
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link to="/">
                    <img src="/assets/img/footerlogo.svg" alt="logo" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="social-icon">
                  <ul>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">About Us</h2>
                <ul>
                  <li>
                    <Link to="/about">Our Product</Link>
                  </li>
                  <li>
                    <Link to="/blog-list">Documentation</Link>
                  </li>
                  <li>
                    <Link to="/categories">Our Services</Link>
                  </li>
                  <li>
                    <Link to="/contact">Get Started Us</Link>
                  </li>
                  <li>
                    <Link to="/faq">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Quick Links</h2>
                <ul>
                  <li>
                    <Link to="/listing-grid">Market Place</Link>
                  </li>
                  <li>
                    <Link to="/howitworks">Documentation</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Customers</Link>
                  </li>
                  <li>
                    <Link to="/service-details">Carriers</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Our Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Top Cities</h2>
                <ul>
                  <li>
                    <Link to="/listing-grid-sidebar">Manhatten</Link>
                  </li>
                  <li>
                    <Link to="/listing-grid-sidebar">Los Angeles</Link>
                  </li>
                  <li>
                    <Link to="/listing-grid-sidebar">Houston</Link>
                  </li>
                  <li>
                    <Link to="/listing-grid-sidebar">Chicago</Link>
                  </li>
                  <li>
                    <Link to="/listing-grid-sidebar">Alabama</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2 className="footer-title">Communication</h2>

                <div className="footer-contact">
                  <div className="contact-item d-flex align-items-center gap-3">
                    <img src="/assets/img/call-calling.svg" alt="" />

                    <p className="text-white mb-2 mt-2">
                      <span className="text-muted">Call Us</span>
                      <br />
                      +017 123 456 78
                    </p>
                  </div>

                  <div className="contact-item d-flex align-items-center gap-3">
                    <img src="/assets/img/sms-tracking.svg" alt="" />

                    <p className="text-white mb-2 mt-2">
                      <span className="text-muted">Send Message</span>
                      <br />
                      listee@example.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="footer-stats py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-3">
              <span>Our Unique Visitor</span>
              <p className="fs-6 fw-medium text-white">25,329,532</p>
            </div>

            <div className="col-lg-3 col-md-3">
              <span>Our Unique Visitor</span>
              <p className="fs-6 fw-medium text-white">25,329,53264546</p>
            </div>

            <div className="col-lg-3 col-md-3">
              <span>Our Unique Visitor</span>
              <p className="fs-6 fw-medium text-white">25,329,53264546</p>
            </div>

            <div className="col-lg-3 col-md-3">
              <span>We Accept</span>
              <div className="payment-image">
                <img src="/assets/img/amex-pay.svg" alt="" />
                <img src="/assets/img/apple-pay.svg" alt="" />
                <img src="/assets/img/gpay.svg" alt="" />
                <img src="/assets/img/master.svg" alt="" />
                <img src="/assets/img/phone.svg" alt="" />
                <img src="/assets/img/visa.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="copyright-text">
                  <p className="mb-0">
                    All Copyrights Reserved © 2023 - Listee.
                  </p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="copyright-menu">
                  <ul className="policy-menu">
                    <li>
                      <Link to="/legal-policy">Privacy</Link>
                    </li>
                    <li>
                      <Link to="/faq">Faq</Link>
                    </li>
                    <li>
                      <Link to="/terms-condition">Terms</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
