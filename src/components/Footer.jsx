// Footer.jsx - Site-wide footer with links, categories, and contact info
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0d0d0d',
        borderTop: '1px solid #333',
        paddingBottom: '40px', // space for ticker
      }}
      className="pt-5"
    >
      <div className="container">
        <div className="row g-4">

          {/* Column 1: About */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 style={{ color: '#CC0000', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1rem' }}>
              About CarBreezy
            </h5>
            <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: 1.7 }}>
              A leading automotive digital marketplace making car buying easy, transparent, and efficient. From discovery to delivery, we've got you covered.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 style={{ color: '#CC0000', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1rem' }}>
              Quick Links
            </h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { to: '/',        label: 'Home' },
                { to: '/new',     label: 'New Cars' },
                { to: '/used',    label: 'Used Cars' },
                { to: '/brands',  label: 'Brands' },
                { to: '/offers',  label: 'Offers' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/about',   label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.to} style={{ marginBottom: '0.4rem' }}>
                  <Link
                    to={link.to}
                    style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#CC0000'}
                    onMouseLeave={e => e.target.style.color = '#aaa'}
                  >
                    <i className="bi bi-chevron-right me-1" style={{ fontSize: '0.75rem' }}></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Car Categories */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 style={{ color: '#CC0000', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1rem' }}>
              Car Categories
            </h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Sedan', 'SUV', 'Hatchback', 'Convertible', 'Pickup Truck'].map(cat => (
                <li key={cat} style={{ marginBottom: '0.4rem' }}>
                  <Link
                    to={`/new?category=${cat}`}
                    style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#CC0000'}
                    onMouseLeave={e => e.target.style.color = '#aaa'}
                  >
                    <i className="bi bi-car-front me-1" style={{ fontSize: '0.75rem' }}></i>
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 style={{ color: '#CC0000', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1rem' }}>
              Contact Us
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, color: '#aaa', fontSize: '0.9rem' }}>
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2" style={{ color: '#CC0000' }}></i>
                123 AutoDrive Blvd, Detroit, MI
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2" style={{ color: '#CC0000' }}></i>
                +1 (800) 555-CAR1
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2" style={{ color: '#CC0000' }}></i>
                info@carbreezy.com
              </li>
              <li className="mb-2">
                <i className="bi bi-clock me-2" style={{ color: '#CC0000' }}></i>
                Mon–Sat: 9AM – 7PM
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div
          className="mt-4 pt-3"
          style={{ borderTop: '1px solid #333', textAlign: 'center', color: '#555', fontSize: '0.85rem' }}
        >
          © {new Date().getFullYear()} CarBreezy. All rights reserved. &nbsp;|&nbsp; Built with ❤️ by Team CarBreezy
        </div>
      </div>
    </footer>
  )
}
