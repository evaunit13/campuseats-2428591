import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>404</h2>
      <p className="muted">No page here.</p>
      <Link to="/" className="btn" style={{ display: 'inline-block', width: 'auto', marginTop: '1rem', textDecoration: 'none' }}>
        Back to vendors
      </Link>
    </div>
  )
}

export default NotFoundPage
