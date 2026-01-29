import { Link } from 'react-router-dom'
const NotFound = () => (
    <div className="main-wrapper">
        <div className="error-wrapper text-center py-5">
            <div className="container">
                <h1 style={{ fontSize: '120px', fontWeight: 'bold', color: '#ccc' }}>404</h1>
                <h2>Page Not Found</h2>
                <p className="text-muted">The page you are looking for doesn't exist or has been moved.</p>
                <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
            </div>
        </div>
    </div>
)
export default NotFound
