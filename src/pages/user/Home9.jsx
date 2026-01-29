import { Link } from 'react-router-dom'

const Home9 = () => {
    return (
        <>
            <section className="hero-section hero-section-nine">
                <div className="container">
                    <div className="home-banner">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h1>Find Your Perfect <span>Home</span></h1>
                                <p>Buy, sell or rent properties with ease</p>
                                <div className="search-box">
                                    <form className="d-flex flex-wrap">
                                        <div className="search-input">
                                            <select className="form-control">
                                                <option>Buy</option>
                                                <option>Rent</option>
                                                <option>Sell</option>
                                            </select>
                                        </div>
                                        <div className="search-input">
                                            <input type="text" className="form-control" placeholder="Location" />
                                        </div>
                                        <div className="search-input">
                                            <select className="form-control">
                                                <option>Property Type</option>
                                                <option>Apartment</option>
                                                <option>House</option>
                                                <option>Villa</option>
                                            </select>
                                        </div>
                                        <div className="search-btn">
                                            <button className="btn btn-primary" type="submit">Search</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="category-section">
                <div className="container">
                    <div className="section-heading text-center">
                        <h2>Property Types</h2>
                    </div>
                    <div className="row">
                        {['Apartment', 'House', 'Villa', 'Condo', 'Townhouse', 'Land'].map((type, index) => (
                            <div className="col-lg-2 col-md-4 col-sm-6" key={index}>
                                <Link to="/listing-grid" className="category-card text-center">
                                    <h5>{type}</h5>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="featured-section">
                <div className="container">
                    <div className="section-heading text-center">
                        <h2>Featured Properties</h2>
                    </div>
                    <div className="row">
                        {[1, 2, 3, 4].map((item) => (
                            <div className="col-lg-3 col-md-6" key={item}>
                                <div className="card">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img src={`/assets/img/featured/feature-${item}.jpg`} className="img-fluid" alt="property" />
                                            </Link>
                                            <span className="property-badge">For Sale</span>
                                        </div>
                                        <div className="bloglist-content">
                                            <div className="card-body">
                                                <h6><Link to="/service-details">Property {item}</Link></h6>
                                                <p><i className="feather-map-pin"></i> Location</p>
                                                <div className="property-features">
                                                    <span>3 Beds</span>
                                                    <span>2 Baths</span>
                                                    <span>1200 sqft</span>
                                                </div>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$450,000</span>
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

export default Home9
