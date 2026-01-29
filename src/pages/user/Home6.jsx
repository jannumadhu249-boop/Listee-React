import { Link } from 'react-router-dom'

const Home6 = () => {
    return (
        <>
            <section className="hero-section hero-section-six">
                <div className="container">
                    <div className="home-banner">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h1>Rent a <span>Car</span> for Your Trip</h1>
                                <p>Find the best car rental deals in your area</p>
                                <div className="search-box">
                                    <form className="d-flex">
                                        <div className="search-input">
                                            <input type="text" className="form-control" placeholder="Pick-up Location" />
                                        </div>
                                        <div className="search-input">
                                            <input type="date" className="form-control" placeholder="Date" />
                                        </div>
                                        <div className="search-btn">
                                            <button className="btn btn-primary" type="submit">Search Cars</button>
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
                        <h2>Car Categories</h2>
                    </div>
                    <div className="row">
                        {['Economy', 'Compact', 'SUV', 'Luxury', 'Van', 'Sports'].map((type, index) => (
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
                        <h2>Featured Cars</h2>
                    </div>
                    <div className="row">
                        {[1, 2, 3, 4].map((item) => (
                            <div className="col-lg-3 col-md-6" key={item}>
                                <div className="card">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img src={`/assets/img/featured/feature-${item}.jpg`} className="img-fluid" alt="car" />
                                            </Link>
                                        </div>
                                        <div className="bloglist-content">
                                            <div className="card-body">
                                                <h6><Link to="/service-details">Car Model {item}</Link></h6>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$50/day</span>
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

export default Home6
