// Home.jsx - Landing page with hero, featured cars, and brand previews
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import carsData from '../data/cars.json'
import CarCard from '../components/CarCard'
import CarModal from '../components/CarModal'

// All brands in the system
const BRANDS = ['Toyota','Honda','Ford','BMW','Mercedes-Benz','Volkswagen','Audi','Hyundai','Kia','Chevrolet','Nissan','Subaru']

export default function Home() {
  const [selectedCar, setSelectedCar] = useState(null)
  const navigate = useNavigate()

  const allCars = carsData.cars || carsData
  const newCars  = allCars.filter(c => c.type === 'new').slice(0, 6)
  const usedCars = allCars.filter(c => c.type === 'used').slice(0, 6)

  return (
    <div className="page-wrapper">

      {/* ===== HERO SECTION ===== */}
      <section
        className="carbon-bg"
        style={{
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid #222',
        }}
      >
        {/* Red accent line on left */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: '#CC0000' }} />

        <div className="container text-center py-5 fade-in">
          <span
            style={{
              background: 'rgba(204,0,0,0.15)',
              border: '1px solid #CC0000',
              color: '#CC0000',
              padding: '6px 18px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '1.5rem',
            }}
          >
            #1 Digital Auto Marketplace
          </span>

          <h1
            style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            Your Car Buying<br />
            <span style={{ color: '#CC0000' }}>Destiny</span> Starts Here
          </h1>

          <p
            style={{
              color: '#aaa',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}
          >
            From discovery to delivery — explore thousands of vehicles across every brand, category and budget. Fast, easy, transparent.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/new" className="btn-carbreezy" style={{ textDecoration: 'none', padding: '0.75rem 2rem', fontSize: '1.1rem' }}>
              Browse New Cars
            </Link>
            <Link to="/used" className="btn-carbreezy-outline" style={{ textDecoration: 'none', padding: '0.75rem 2rem', fontSize: '1.1rem' }}>
              Browse Used Cars
            </Link>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap' }}>
            {[['72+','Cars Listed'],['12','Top Brands'],['8','Categories'],['100%','Transparent Pricing']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <p style={{ color: '#CC0000', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '1.8rem', marginBottom: 0 }}>{num}</p>
                <p style={{ color: '#aaa', fontSize: '0.8rem', marginBottom: 0 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED NEW CARS ===== */}
      <section style={{ padding: '5rem 0', background: '#0d0d0d' }}>
        <div className="container">
          <div className="mb-4">
            <h2 className="section-title">Featured <span>New Cars</span></h2>
            <div className="section-divider"></div>
          </div>
          <div className="row g-3">
            {newCars.map(car => (
              <div key={car.id} className="col-12 col-sm-6 col-lg-4">
                <CarCard car={car} onViewDetails={setSelectedCar} />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/new" className="btn-carbreezy-outline" style={{ textDecoration: 'none', padding: '0.6rem 2rem' }}>
              View All New Cars <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURED USED CARS ===== */}
      <section style={{ padding: '5rem 0', background: '#111' }}>
        <div className="container">
          <div className="mb-4">
            <h2 className="section-title">Featured <span>Used Cars</span></h2>
            <div className="section-divider"></div>
          </div>
          <div className="row g-3">
            {usedCars.map(car => (
              <div key={car.id} className="col-12 col-sm-6 col-lg-4">
                <CarCard car={car} onViewDetails={setSelectedCar} />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/used" className="btn-carbreezy-outline" style={{ textDecoration: 'none', padding: '0.6rem 2rem' }}>
              View All Used Cars <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BRANDS SECTION ===== */}
      <section style={{ padding: '5rem 0', background: '#0d0d0d' }}>
        <div className="container">
          <div className="mb-4">
            <h2 className="section-title">Shop by <span>Brand</span></h2>
            <div className="section-divider"></div>
          </div>
          <div className="row g-3">
            {BRANDS.map(brand => (
              <div key={brand} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div
                  onClick={() => navigate(`/brands?brand=${encodeURIComponent(brand)}`)}
                  style={{
                    background: '#1a1a1a',
                    border: '1px solid #2a2a2a',
                    borderRadius: '8px',
                    padding: '1.2rem 0.5rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#CC0000'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#2a2a2a'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <i className="bi bi-car-front-fill" style={{ color: '#CC0000', fontSize: '1.8rem', display: 'block', marginBottom: '0.5rem' }}></i>
                  <p style={{ color: '#fff', fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, fontSize: '0.9rem', marginBottom: '2px' }}>{brand}</p>
                  <p style={{ color: '#aaa', fontSize: '0.75rem', marginBottom: 0 }}>
                    {allCars.filter(c => c.brand === brand).length} cars
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car modal */}
      {selectedCar && <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />}
    </div>
  )
}
