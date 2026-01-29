import { Link } from 'react-router-dom'

const Home2 = () => {
    return (
        <>
            <section className="hero-section hero-section-two">
                <div className="container">
                    <div className="home-banner">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="section-search">
                                    <h1>Find Your Perfect <span>Wedding</span> Vendors</h1>
                                    <p>Find and book the best wedding vendors for your special day.</p>
                                    <div className="search-box">
                                        <form className="d-flex">
                                            <div className="search-input">
                                                <input type="text" className="form-control" placeholder="What are you looking for?" />
                                            </div>
                                            <div className="search-input">
                                                <input type="text" className="form-control" placeholder="Location" />
                                            </div>
                                            <div className="search-btn">
                                                <button className="btn btn-primary" type="submit">Search</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner-img">
                                    <img src="/assets/img/banner-img-02.png" className="img-fluid" alt="banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="category-section">
                <div className="container">
                    <div className="section-heading text-center">
                        <h2>Wedding Categories</h2>
                        <p>Find the perfect vendors for your wedding</p>
                    </div>
                    <div className="row">
                        {['Venues', 'Photography', 'Catering', 'Decoration', 'Music', 'Makeup'].map((cat, index) => (
                            <div className="col-lg-2 col-md-4 col-sm-6" key={index}>
                                <Link to="/listing-grid" className="category-card">
                                    <div className="category-icon">
                                        <img src={`/assets/img/icons/category-${index + 1}.svg`} alt={cat} />
                                    </div>
                                    <h5>{cat}</h5>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="featured-section">
                <div className="container">
                    <div className="section-heading text-center">
                        <h2>Featured Vendors</h2>
                        <p>Top-rated wedding vendors in your area</p>
                    </div>
                    <div className="row">
                        {[1, 2, 3, 4].map((item) => (
                            <div className="col-lg-3 col-md-6" key={item}>
                                <div className="card">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img src={`/assets/img/featured/feature-${item}.jpg`} className="img-fluid" alt="vendor" />
                                            </Link>
                                        </div>
                                        <div className="bloglist-content">
                                            <div className="card-body">
                                                <h6><Link to="/service-details">Wedding Vendor {item}</Link></h6>
                                                <div className="blog-location-details">
                                                    <div className="location-info">
                                                        <i className="feather-map-pin"></i> Location
                                                    </div>
                                                </div>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$500</span>
                                                    </div>
                                                    <div className="ratings">
                                                        <span>4.8</span> (45)
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
            </section>
        </>
    )
}

export default Home2
