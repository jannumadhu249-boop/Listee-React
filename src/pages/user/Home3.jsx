import { Link } from 'react-router-dom'

const Home3 = () => {
    return (
        <>
            <section className="hero-section hero-section-three">
                <div className="container">
                    <div className="home-banner text-center">
                        <h1>Discover Amazing <span>Tours</span> &amp; Travel</h1>
                        <p>Find your next adventure with our curated tour packages</p>
                        <div className="search-box mx-auto" style={{ maxWidth: '800px' }}>
                            <form className="d-flex">
                                <div className="search-input flex-grow-1">
                                    <input type="text" className="form-control" placeholder="Where do you want to go?" />
                                </div>
                                <div className="search-btn">
                                    <button className="btn btn-primary" type="submit">Search Tours</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="category-section">
                <div className="container">
                    <div className="section-heading text-center">
                        <h2>Popular Destinations</h2>
                        <p>Explore top travel destinations</p>
                    </div>
                    <div className="row">
                        {['Paris', 'Tokyo', 'New York', 'London', 'Dubai', 'Sydney'].map((dest, index) => (
                            <div className="col-lg-2 col-md-4 col-sm-6" key={index}>
                                <Link to="/listing-grid" className="destination-card">
                                    <img src={`/assets/img/locations/${dest.toLowerCase()}.jpg`} alt={dest} className="img-fluid"
                                        onError={(e) => e.target.src = '/assets/img/locations/usa.jpg'} />
                                    <h5>{dest}</h5>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="featured-section">
                <div className="container">
                    <div className="section-heading text-center">
                        <h2>Featured Tours</h2>
                        <p>Handpicked travel experiences</p>
                    </div>
                    <div className="row">
                        {[1, 2, 3, 4].map((item) => (
                            <div className="col-lg-3 col-md-6" key={item}>
                                <div className="card">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img src={`/assets/img/featured/feature-${item}.jpg`} className="img-fluid" alt="tour" />
                                            </Link>
                                        </div>
                                        <div className="bloglist-content">
                                            <div className="card-body">
                                                <h6><Link to="/service-details">Tour Package {item}</Link></h6>
                                                <p>5 Days / 4 Nights</p>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$999</span>
                                                    </div>
                                                    <div className="ratings">
                                                        <span>4.9</span> (120)
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

export default Home3
