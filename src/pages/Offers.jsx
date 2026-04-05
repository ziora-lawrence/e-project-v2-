// Offers.jsx - Reads offers.xml using DOMParser (no external library needed)
import { useState, useEffect } from 'react'

export default function Offers() {
  const [offers, setOffers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch and parse the XML file using browser's built-in DOMParser
    fetch('/offers.xml')
      .then(res => res.text())
      .then(xmlText => {
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml')
        const offerNodes = xmlDoc.querySelectorAll('offer')

        // Convert XML nodes to plain JS objects
        const parsed = Array.from(offerNodes).map(node => ({
          id:          node.querySelector('id')?.textContent,
          title:       node.querySelector('title')?.textContent,
          description: node.querySelector('description')?.textContent,
          discount:    node.querySelector('discount')?.textContent,
          validUntil:  node.querySelector('validUntil')?.textContent,
          category:    node.querySelector('category')?.textContent,
        }))
        setOffers(parsed)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const categoryColors = {
    'SUV': '#007a33', 'Sedan': '#0066cc', 'Convertible': '#cc6600',
    'Pickup Truck': '#cc0033', 'Hatchback': '#8800cc', 'All': '#555', 'Used': '#444',
  }

  return (
    <div className="page-wrapper" style={{ background: '#0d0d0d', minHeight: '100vh' }}>
      <div className="container py-5">

        <div className="mb-5 fade-in">
          <h2 className="section-title">Current <span>Offers</span></h2>
          <div className="section-divider"></div>
          <p style={{ color: '#aaa' }}>Limited time deals — don't miss out</p>
        </div>

        {loading && (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#aaa' }}>
            <div className="spinner-border" style={{ color: '#CC0000' }} role="status"></div>
            <p className="mt-3">Loading offers...</p>
          </div>
        )}

        <div className="row g-4">
          {offers.map((offer) => (
            <div key={offer.id} className="col-12 col-md-6 col-lg-4">
              <div
                style={{
                  background: '#141414',
                  border: '1px solid #2a2a2a',
                  borderTop: '3px solid #CC0000',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  height: '100%',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(204,0,0,0.15)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Top row: category badge + discount badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '6px' }}>
                  <span
                    style={{
                      background: categoryColors[offer.category] || '#555',
                      color: '#fff',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {offer.category}
                  </span>
                  <span
                    style={{
                      background: '#CC0000',
                      color: '#fff',
                      fontSize: '1rem',
                      fontWeight: 700,
                      padding: '3px 14px',
                      borderRadius: '4px',
                      fontFamily: 'Rajdhani, sans-serif',
                    }}
                  >
                    {offer.discount} OFF
                  </span>
                </div>

                <h5 style={{ color: '#fff', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  {offer.title}
                </h5>
                <p style={{ color: '#aaa', fontSize: '0.88rem', lineHeight: 1.6, flex: 1 }}>
                  {offer.description}
                </p>

                {/* Valid until */}
                <div
                  style={{
                    marginTop: '1rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid #2a2a2a',
                    color: '#aaa',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <i className="bi bi-calendar3" style={{ color: '#CC0000' }}></i>
                  Valid until: <strong style={{ color: '#fff' }}>{offer.validUntil}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
