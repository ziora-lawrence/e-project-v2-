// Navbar.jsx - Top navigation bar with logo, visitor counter, and nav links
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

// Nav links config - easy to add/remove links here
const NAV_LINKS = [
  { path: '/',       label: 'Home' },
  { path: '/new',    label: 'New Cars' },
  { path: '/used',   label: 'Used Cars' },
  { path: '/brands', label: 'Brands' },
  { path: '/offers', label: 'Offers' },
  { path: '/gallery',label: 'Gallery' },
  { path: '/about',  label: 'About' },
  { path: '/contact',label: 'Contact' },
]

export default function Navbar() {
  const location = useLocation()
  const [visitors, setVisitors] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  // Increment and persist visitor count using localStorage
  useEffect(() => {
    const stored = localStorage.getItem('cb_visitors')
    const count = stored ? parseInt(stored) + 1 : 1
    localStorage.setItem('cb_visitors', count)
    setVisitors(count)
  }, [])

  // Add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top carbon-bg fade-in"
      style={{
        borderBottom: '1px solid #333',
        boxShadow: scrolled ? '0 2px 20px rgba(204,0,0,0.15)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div className="container-fluid px-4">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="CarBreezy Logo" height="50" />
        </Link>

        {/* Visitor counter badge - visible on all screen sizes */}
        <span
          className="badge ms-2 d-none d-md-inline"
          style={{ background: '#CC0000', fontSize: '0.75rem', padding: '6px 10px' }}
        >
          <i className="bi bi-eye me-1"></i>
          Visitors: {visitors.toLocaleString()}
        </span>

        {/* Mobile hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          style={{ borderColor: '#CC0000' }}
        >
          <i className="bi bi-list" style={{ color: '#CC0000', fontSize: '1.5rem' }}></i>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <li className="nav-item" key={link.path}>
                  <Link
                    className="nav-link"
                    to={link.path}
                    style={{
                      color: isActive ? '#CC0000' : '#ffffff',
                      fontFamily: 'Rajdhani, sans-serif',
                      fontWeight: 600,
                      fontSize: '1rem',
                      letterSpacing: '0.5px',
                      borderBottom: isActive ? '2px solid #CC0000' : '2px solid transparent',
                      transition: 'color 0.2s ease, border-color 0.2s ease',
                      padding: '0.5rem 1rem',
                    }}
                    onMouseEnter={e => { if (!isActive) e.target.style.color = '#CC0000' }}
                    onMouseLeave={e => { if (!isActive) e.target.style.color = '#ffffff' }}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Visitor counter in mobile menu */}
          <span
            className="badge d-md-none mt-2 mb-1"
            style={{ background: '#CC0000', fontSize: '0.75rem', padding: '6px 10px' }}
          >
            <i className="bi bi-eye me-1"></i>
            Visitors: {visitors.toLocaleString()}
          </span>
        </div>
      </div>
    </nav>
  )
}
