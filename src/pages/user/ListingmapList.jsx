import { Link } from 'react-router-dom'
const ListingmapList = () => (
    <>
        <div className="breadcrumb-bar"><div className="container"><h2 className="breadcrumb-title">Listing Map List</h2></div></div>
        <section className="listing-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 map-section">
                        <div className="map-placeholder" style={{ height: '600px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <p>Map will be displayed here</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {[1, 2, 3, 4, 5].map(item => (
                            <div className="card mb-3" key={item}>
                                <div className="row g-0">
                                    <div className="col-4"><Link to="/service-details"><img src={`/assets/img/featured/feature-${item}.jpg`} className="img-fluid" alt="" /></Link></div>
                                    <div className="col-8"><div className="card-body">
                                        <h6><Link to="/service-details">Listing {item}</Link></h6>
                                        <p>$350 - Los Angeles</p>
                                    </div></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>
)
export default ListingmapList
