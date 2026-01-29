import { Link } from 'react-router-dom'

const Home5 = () => {
    return (
        <>
            <section className="hero-section hero-section-five">
                <div className="container">
                    <div className="home-banner text-center">
                        <h1>Grow Your <span>Business</span></h1>
                        <p>Find business services and professionals for your company</p>
                        <div className="search-box mx-auto" style={{ maxWidth: '600px' }}>
                            <form className="d-flex">
                                <div className="search-input flex-grow-1">
                                    <input type="text" className="form-control" placeholder="What service do you need?" />
                                </div>
                                <div className="search-btn">
                                    <button className="btn btn-primary" type="submit">Find</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="category-section">
                <div className="container">
                    <div className="section-heading text-center">
                        <h2>Business Services</h2>
                    </div>
                    <div className="row">
                        {['Legal', 'Accounting', 'Marketing', 'IT Services', 'HR', 'Consulting'].map((service, index) => (
                            <div className="col-lg-2 col-md-4 col-sm-6" key={index}>
                                <Link to="/listing-grid" className="category-card text-center">
                                    <h5>{service}</h5>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home5
