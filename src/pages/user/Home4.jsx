import { Link } from 'react-router-dom'

const Home4 = () => {
    return (
        <>
            <section className="hero-section hero-section-four">
                <div className="container">
                    <div className="home-banner">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h1>Find Your Perfect <span>Workspace</span></h1>
                                <p>Discover coworking spaces, offices, and meeting rooms near you</p>
                                <div className="search-box">
                                    <form className="d-flex">
                                        <div className="search-input">
                                            <input type="text" className="form-control" placeholder="Search workspace..." />
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
                        <h2>Workspace Types</h2>
                    </div>
                    <div className="row">
                        {['Hot Desk', 'Private Office', 'Meeting Room', 'Virtual Office'].map((type, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
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
                        <h2>Featured Workspaces</h2>
                    </div>
                    <div className="row">
                        {[1, 2, 3, 4].map((item) => (
                            <div className="col-lg-3 col-md-6" key={item}>
                                <div className="card">
                                    <div className="blog-widget">
                                        <div className="blog-img">
                                            <Link to="/service-details">
                                                <img src={`/assets/img/featured/feature-${item}.jpg`} className="img-fluid" alt="workspace" />
                                            </Link>
                                        </div>
                                        <div className="bloglist-content">
                                            <div className="card-body">
                                                <h6><Link to="/service-details">Workspace {item}</Link></h6>
                                                <div className="amount-details">
                                                    <div className="amount">
                                                        <span className="validrate">$25/day</span>
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

export default Home4
