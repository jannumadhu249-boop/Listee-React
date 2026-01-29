import { Link } from 'react-router-dom'
const Listings = () => (
    <><div className="page-header"><div className="row align-items-center"><div className="col"><h3 className="page-title">Listings</h3></div><div className="col-auto"><Link to="/admin/add-listing" className="btn btn-primary">Add New Listing</Link></div></div></div>
        <div className="card"><div className="card-body">
            <div className="table-responsive"><table className="table table-hover">
                <thead><tr><th>#</th><th>Image</th><th>Title</th><th>Category</th><th>Price</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <tr key={i}><td>{i}</td><td><img src={`/assets/img/featured/feature-${(i % 9) + 1}.jpg`} width="50" className="rounded" alt="" /></td><td>Listing Title {i}</td><td>Electronics</td><td>${i * 50}</td><td><span className={`badge bg-${i % 2 === 0 ? 'success' : 'warning'}`}>{i % 2 === 0 ? 'Active' : 'Pending'}</span></td><td><Link to="#" className="btn btn-sm btn-outline-primary me-1">Edit</Link><button className="btn btn-sm btn-outline-danger">Delete</button></td></tr>
                    ))}
                </tbody>
            </table></div>
        </div></div></>
)
export default Listings
