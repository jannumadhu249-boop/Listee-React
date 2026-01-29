import { Link } from 'react-router-dom'

const Home7 = () => {
    return (
        <>
            <section className="hero-section hero-section-seven">
                <div className="container">
                    <div className="home-banner text-center">
                        <h1>Discover Great <span>Restaurants</span></h1>
                        <p>Find the best places to eat near you</p>
                        <div className="search-box mx-auto" style={{ maxWidth: '600px' }}>
                            <form className="d-flex">
                                <div className="search-input flex-grow-1">
                                    <input type="text" className="form-control" placeholder="Search restaurants..." />
                                </div>
                                <div className="search-btn">
                                    <button className="btn btn-primary" type="submit">Find Food</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="category-section">
                <div className="container">
                    <div className="section-heading text-center">
                        <h2>Cuisines</h2>
                    </div>
                    <div className="row">
                        {['Italian', 'Chinese', 'Indian', 'Mexican', 'Japanese', 'Thai'].map((cuisine, index) => (
                            <div className="col-lg-2 col-md-4 col-sm-6" key={index}>
                                <Link to="/listing-grid" className="category-card text-center">
                                    <h5>{cuisine}</h5>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="featured-section">
                <div className="container">
                    <div className="section-heading text-center">
                        <h2>Popular Restaurants</h2>
                    </div>
                    <div className="row">
                        {[1, 2, 3, 4].map((item) => (
                            <div className="col-lg-3 col-md-6" key={item}>
                                <div className="card">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img src={`/assets/img/featured/feature-${item}.jpg`} className="img-fluid" alt="restaurant" />
                                            </Link>
                                        </div>
                                        <div className="bloglist-content">
                                            <div className="card-body">
                                                <h6><Link to="/service-details">Restaurant {item}</Link></h6>
                                                <p>Italian Cuisine</p>
                                                <div className="ratings">
                                                    <span>4.8</span> (200 reviews)
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

export default Home7
