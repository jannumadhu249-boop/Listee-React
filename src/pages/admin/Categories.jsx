import { Link } from 'react-router-dom'
const Categories = () => (
    <><div className="page-header"><div className="row align-items-center"><div className="col"><h3 className="page-title">Categories</h3></div><div className="col-auto"><Link to="#" className="btn btn-primary">Add Category</Link></div></div></div>
        <div className="card"><div className="card-body">
            <table className="table"><thead><tr><th>#</th><th>Name</th><th>Description</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                    {['Electronics', 'Automotive', 'Real Estate', 'Fashion', 'Services', 'Jobs'].map((cat, i) => (
                        <tr key={i}><td>{i + 1}</td><td>{cat}</td><td>{cat} category description</td><td><span className="badge bg-success">Active</span></td><td><button className="btn btn-sm btn-outline-primary me-1">Edit</button><button className="btn btn-sm btn-outline-danger">Delete</button></td></tr>
                    ))}
                </tbody></table>
        </div></div></>
)
export default Categories
