import { Link } from 'react-router-dom'
const Error500 = () => (
    <div className="main-wrapper">
        <div className="error-wrapper text-center py-5">
            <div className="container">
                <h1 style={{ fontSize: '120px', fontWeight: 'bold', color: '#ccc' }}>500</h1>
                <h2>Internal Server Error</h2>
                <p className="text-muted">Something went wrong. Please try again later.</p>
                <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
            </div>
        </div>
    </div>
)
export default Error500
