import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg header-nav">
                    <div className="navbar-header">
                        <a id="mobile_btn" href="javascript:void(0);">
                            <span className="bar-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </a>
                        <Link to="/" className="navbar-brand logo">
                            <img src="/assets/img/logo.png" className="img-fluid" alt="Logo" />
                        </Link>
                    </div>
                    <div className="main-menu-wrapper">
                        <div className="menu-header">
                            <Link to="/" className="menu-logo">
                                <img src="/assets/img/logo.png" className="img-fluid" alt="Logo" />
                            </Link>
                            <a id="menu_close" className="menu-close" href="javascript:void(0);">
                                <i className="fas fa-times"></i>
                            </a>
                        </div>
                        <ul className="main-nav">
                            <li className="has-submenu active">
                                <a href="#">Home <i className="fas fa-chevron-down"></i></a>
                                <ul className="submenu mega-submenu">
                                    <li>
                                        <div className="megamenu-wrapper">
                                            <div className="row">
                                                <div className="col-lg-2">
                                                    <div className="single-demo active">
                                                        <div className="demo-img">
                                                            <Link to="/"><img src="/assets/img/home-01.jpg" className="img-fluid" alt="img" /></Link>
                                                        </div>
                                                        <div className="demo-info">
                                                            <Link to="/">Classified Home</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single-demo">
                                                        <div className="demo-img">
                                                            <Link to="/index-2"><img src="/assets/img/home-02.jpg" className="img-fluid" alt="img" /></Link>
                                                        </div>
                                                        <div className="demo-info">
                                                            <Link to="/index-2">Wedding Home</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single-demo">
                                                        <div className="demo-img">
                                                            <Link to="/index-3"><img src="/assets/img/home-03.jpg" className="img-fluid" alt="img" /></Link>
                                                        </div>
                                                        <div className="demo-info">
                                                            <Link to="/index-3">Tour Home</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single-demo">
                                                        <div className="demo-img">
                                                            <Link to="/index-4"><img src="/assets/img/home-04.jpg" className="img-fluid" alt="img" /></Link>
                                                        </div>
                                                        <div className="demo-info">
                                                            <Link to="/index-4">Workspace Home</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single-demo">
                                                        <div className="demo-img">
                                                            <Link to="/index-5"><img src="/assets/img/home-05.jpg" className="img-fluid" alt="img" /></Link>
                                                        </div>
                                                        <div className="demo-info">
                                                            <Link to="/index-5">Business Home</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single-demo">
                                                        <div className="demo-img">
                                                            <Link to="/index-6"><img src="/assets/img/home-06.jpg" className="img-fluid" alt="img" /></Link>
                                                        </div>
                                                        <div className="demo-info">
                                                            <Link to="/index-6">Car Rentals Home</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single-demo">
                                                        <div className="demo-img">
                                                            <Link to="/index-7"><img src="/assets/img/home-07.jpg" className="img-fluid" alt="img" /></Link>
                                                        </div>
                                                        <div className="demo-info">
                                                            <Link to="/index-7">Restaurant Home</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single-demo">
                                                        <div className="demo-img">
                                                            <Link to="/index-8"><img src="/assets/img/home-08.jpg" className="img-fluid" alt="img" /></Link>
                                                        </div>
                                                        <div className="demo-info">
                                                            <Link to="/index-8">Job Listing Home</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single-demo">
                                                        <div className="demo-img">
                                                            <Link to="/index-9"><img src="/assets/img/home-09.jpg" className="img-fluid" alt="img" /></Link>
                                                        </div>
                                                        <div className="demo-info">
                                                            <Link to="/index-9">Realestate Home</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-submenu">
                                <a href="#">Listings <i className="fas fa-chevron-down"></i></a>
                                <ul className="submenu">
                                    <li><Link to="/listing-grid">Listing Grid</Link></li>
                                    <li><Link to="/listing-grid-sidebar">Listing Grid Sidebar</Link></li>
                                    <li><Link to="/listing-list-sidebar">Listing List Sidebar</Link></li>
                                    <li><Link to="/listingmap-list">Listing List Map</Link></li>
                                    <li><Link to="/listingmap-grid">Listing Grid Map</Link></li>
                                </ul>
                            </li>
                            <li className="has-submenu">
                                <a href="#">Pages <i className="fas fa-chevron-down"></i></a>
                                <ul className="submenu">
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/service-details">Service Details</Link></li>
                                    <li><Link to="/pricing">Pricing</Link></li>
                                    <li><Link to="/faq">FAQ</Link></li>
                                    <li><Link to="/gallery">Gallery</Link></li>
                                    <li><Link to="/categories">Category</Link></li>
                                    <li><Link to="/howitworks">How it Works</Link></li>
                                    <li><Link to="/terms-condition">Terms &amp; Conditions</Link></li>
                                    <li><Link to="/legal-policy">Privacy Policy</Link></li>
                                    <li><Link to="/error-404">404 Error</Link></li>
                                    <li><Link to="/error-500">500 Error</Link></li>
                                </ul>
                            </li>
                            <li className="has-submenu">
                                <a href="#">User Pages <i className="fas fa-chevron-down"></i></a>
                                <ul className="submenu">
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li><Link to="/profile">Profile</Link></li>
                                    <li><Link to="/my-listing">My Listing</Link></li>
                                    <li><Link to="/bookmarks">Bookmarks</Link></li>
                                    <li><Link to="/messages">Messages</Link></li>
                                    <li><Link to="/reviews">Reviews</Link></li>
                                    <li><Link to="/add-listing">Add Listing</Link></li>
                                </ul>
                            </li>
                            <li className="has-submenu">
                                <a href="#">Blog <i className="fas fa-chevron-down"></i></a>
                                <ul className="submenu">
                                    <li><Link to="/blog-list">Blog List</Link></li>
                                    <li><Link to="/blog-grid">Blog Grid</Link></li>
                                    <li><Link to="/blog-details">Blog Details</Link></li>
                                    <li><Link to="/blog-list-sidebar">Blog List Sidebar</Link></li>
                                    <li><Link to="/blog-grid-sidebar">Blog Grid Sidebar</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/admin" target="_blank">Admin</Link></li>
                            <li className="login-link">
                                <Link to="/signup">Sign Up</Link>
                            </li>
                            <li className="login-link">
                                <Link to="/login">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="nav header-navbar-rht">
                        <li className="nav-item">
                            <Link className="nav-link header-reg" to="/signup">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link header-login" to="/login">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link add-listing" to="/add-listing">
                                <i className="fa-solid fa-plus"></i>Add Listing
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
