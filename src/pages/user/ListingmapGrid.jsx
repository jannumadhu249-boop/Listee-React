import { Link } from 'react-router-dom'
const ListingmapGrid = () => (
    <>
        <div className="breadcrumb-bar"><div className="container"><h2 className="breadcrumb-title">Listing Map Grid</h2></div></div>
        <section className="listing-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 map-section">
                        <div className="map-placeholder" style={{ height: '600px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <p>Map will be displayed here</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            {[1, 2, 3, 4, 5, 6].map(item => (
                                <div className="col-md-6" key={item}>
                                    <div className="card mb-3">
                                        <div className="blog-widget">
                                            <div className="blog-img">
                                                <Link to="/service-details"><img src={`/assets/img/featured/feature-${item}.jpg`} className="img-fluid" alt="listing" /></Link>
                                            </div>
                                            <div className="bloglist-content"><div className="card-body">
                                                <h6><Link to="/service-details">Listing {item}</Link></h6>
                                                <div className="amount"><span className="validrate">$350</span></div>
                                            </div></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
)
export default ListingmapGrid
