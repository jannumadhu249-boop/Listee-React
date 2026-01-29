import { Link } from 'react-router-dom'

const ForgotPassword = () => (
    <div className="main-wrapper">
        <div className="login-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-7">
                        <div className="login-card text-center">
                            <Link to="/"><img src="/assets/img/logo.png" alt="Logo" className="mb-3" /></Link>
                            <h3>Forgot Password?</h3>
                            <p>Enter your email to reset your password</p>
                            <form>
                                <div className="mb-3 text-start">
                                    <label className="form-label">Email Address</label>
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Reset Password</button>
                            </form>
                            <div className="mt-4">
                                <Link to="/login">Back to Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default ForgotPassword
