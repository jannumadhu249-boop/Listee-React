import { Link } from 'react-router-dom'

const Home8 = () => {
    return (
        <>
            <section className="hero-section hero-section-eight">
                <div className="container">
                    <div className="home-banner">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h1>Find Your Dream <span>Job</span></h1>
                                <p>Thousands of jobs from top companies</p>
                                <div className="search-box">
                                    <form className="d-flex">
                                        <div className="search-input">
                                            <input type="text" className="form-control" placeholder="Job title or keyword" />
                                        </div>
                                        <div className="search-input">
                                            <input type="text" className="form-control" placeholder="Location" />
                                        </div>
                                        <div className="search-btn">
                                            <button className="btn btn-primary" type="submit">Search Jobs</button>
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
                        <h2>Job Categories</h2>
                    </div>
                    <div className="row">
                        {['Technology', 'Healthcare', 'Finance', 'Marketing', 'Design', 'Sales'].map((cat, index) => (
                            <div className="col-lg-2 col-md-4 col-sm-6" key={index}>
                                <Link to="/listing-grid" className="category-card text-center">
                                    <h5>{cat}</h5>
                                    <span>500+ Jobs</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="featured-section">
                <div className="container">
                    <div className="section-heading text-center">
                        <h2>Featured Jobs</h2>
                    </div>
                    <div className="row">
                        {[1, 2, 3, 4].map((item) => (
                            <div className="col-lg-6 col-md-6" key={item}>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <img src={`/assets/img/profiles/avatar-0${item}.jpg`} alt="company" className="rounded" width="60" />
                                            <div className="ms-3">
                                                <h6><Link to="/service-details">Software Engineer {item}</Link></h6>
                                                <p className="mb-0">Company Name</p>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <span className="badge bg-light text-dark me-2">Full-time</span>
                                            <span className="badge bg-light text-dark me-2">Remote</span>
                                            <span className="badge bg-light text-dark">$80k - $120k</span>
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

export default Home8
