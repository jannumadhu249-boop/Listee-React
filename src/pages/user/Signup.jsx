import { Link } from "react-router-dom";
import React, { useState } from "react";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <Header />
      <section className="breadcrumb-bar">
        <div className="container">
          <h2 className="breadcrumb-title text-center">Create An Account</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <span className="text-white">/</span>
              <li className="breadcrumb-item active">Register</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="login-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 mx-auto">
              <div className="login-wrap">

                <div className="login-header text-center">
                  <h3>Create an Account</h3>
                  <p>Lets start with Listee</p>
                </div>

                {/* Login Form */}
                <form>
                  
                  <div className="form-set">
                    <div className="group-img">
                      <i className="feather-user"></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>

                  {/* Email */}

                  <div className="form-set">
                    <div className="group-img">
                      <i className="feather-mail"></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>

                  {/* Password */}

                  <div className="form-set">
                    <div className="pass-group group-img">
                      <i className="feather-lock"></i>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control pass-input"
                        placeholder="Password"
                      />
                      <span
                        className="toggle-password feather-eye"
                        onClick={() => setShowPassword(!showPassword)}
                        role="button"
                      ></span>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    className="btn btn-primary w-100 login-btn"
                    type="submit"
                  >
                    Create Account
                  </button>

                  {/* Register */}

                  <div className="register-link text-center">
                    <p>
                      Already have an account?{" "}
                      <Link className="forgot-link" to="/signup">
                        Sign in
                      </Link>
                    </p>
                  </div>

                  {/* OR */}

                  <div className="login-or">
                    <span className="or-line"></span>
                    <span className="span-or">
                      Sign in with Social Media Accounts
                    </span>
                  </div>

                  {/* Social Buttons */}

                  <div className="social-login">
                    <a href="#" className="btn btn-apple w-100">
                      <img
                        src="/assets/img/apple.svg"
                        className="me-1"
                        alt="Apple"
                      />
                      Sign in with Apple
                    </a>
                  </div>

                  <div className="social-login">
                    <a href="#" className="btn btn-google w-100">
                      <img
                        src="/assets/img/google.svg"
                        className="me-1"
                        alt="Google"
                      />
                      Sign in with Google
                    </a>
                  </div>

                  <div className="social-login">
                    <a href="#" className="btn btn-facebook w-100 mb-0">
                      <img
                        src="/assets/img/facebook.svg"
                        className="me-2"
                        alt="Facebook"
                      />
                      Continue with Facebook
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
