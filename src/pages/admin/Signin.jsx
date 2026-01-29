import { Link } from 'react-router-dom'
const Signin = () => (
    <div className="main-wrapper login-body">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-7">
                    <div className="login-card mt-5">
                        <div className="text-center mb-4">
                            <Link to="/"><img src="/assets/img/logo.png" alt="Logo" className="mb-3" /></Link>
                            <h3>Admin Login</h3>
                            <p>Sign in to access the admin dashboard</p>
                        </div>
                        <form>
                            <div className="mb-3"><label className="form-label">Email Address</label><input type="email" className="form-control" placeholder="Enter your email" /></div>
                            <div className="mb-3"><label className="form-label">Password</label><input type="password" className="form-control" placeholder="Enter your password" /></div>
                            <div className="d-flex justify-content-between mb-3"><label><input type="checkbox" /> Remember me</label><Link to="#">Forgot Password?</Link></div>
                            <Link to="/admin" className="btn btn-primary w-100">Sign In</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default Signin
