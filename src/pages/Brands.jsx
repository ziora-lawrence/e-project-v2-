// Brands.jsx - Shows all brands as cards and filters cars by brand
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import carsData from '../data/cars.json'
import CarCard from '../components/CarCard'
import CarModal from '../components/CarModal'

const BRANDS = ['Toyota','Honda','Ford','BMW','Mercedes-Benz','Volkswagen','Audi','Hyundai','Kia','Chevrolet','Nissan','Subaru']

export default function Brands() {
  const [searchParams] = useSearchParams()
  // Pre-select brand if navigated from Home page with ?brand=Toyota etc
  const [activeBrand, setActiveBrand] = useState(searchParams.get('brand') || null)
  const [selectedCar, setSelectedCar] = useState(null)

  const allCars = carsData.cars || carsData

  // Cars filtered by active brand
  const filteredCars = activeBrand
    ? allCars.filter(c => c.brand === activeBrand)
    : []

  return (
    <div className="page-wrapper" style={{ background: '#0d0d0d', minHeight: '100vh' }}>
      <div className="container py-5">

        <div className="mb-4 fade-in">
          <h2 className="section-title">Shop by <span>Brand</span></h2>
          <div className="section-divider"></div>
          <p style={{ color: '#aaa' }}>Select a brand to explore its full inventory</p>
        </div>

        {/* Brand cards row */}
        <div className="row g-3 mb-5">
          {BRANDS.map(brand => {
            const count = allCars.filter(c => c.brand === brand).length
            const isActive = activeBrand === brand
            return (
              <div key={brand} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div
                  onClick={() => setActiveBrand(isActive ? null : brand)}
                  style={{
                    background: isActive ? 'rgba(204,0,0,0.15)' : '#1a1a1a',
                    border: `2px solid ${isActive ? '#CC0000' : '#2a2a2a'}`,
                    borderRadius: '8px',
                    padding: '1.2rem 0.5rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.borderColor = '#CC0000' }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.borderColor = '#2a2a2a' }}
                >
                  <i
                    className="bi bi-car-front-fill"
                    style={{ color: isActive ? '#CC0000' : '#aaa', fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}
                  ></i>
                  <p style={{ color: '#fff', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, marginBottom: '2px', fontSize: '0.95rem' }}>{brand}</p>
                  <p style={{ color: '#aaa', fontSize: '0.75rem', marginBottom: 0 }}>{count} cars</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Cars for selected brand */}
        {activeBrand && (
          <div className="fade-in">
            <div className="mb-4">
              <h3 className="section-title" style={{ fontSize: '1.5rem' }}>
                {activeBrand} <span>Inventory</span>
              </h3>
              <div className="section-divider" style={{ marginBottom: '1.5rem' }}></div>
            </div>
            <div className="row g-3">
              {filteredCars.map(car => (
                <div key={car.id} className="col-12 col-sm-6 col-xl-3">
                  <CarCard car={car} onViewDetails={setSelectedCar} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Prompt to select a brand if none selected */}
        {!activeBrand && (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: '#aaa' }}>
            <i className="bi bi-hand-index-thumb" style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem', color: '#CC0000' }}></i>
            Click on a brand above to browse its vehicles
          </div>
        )}
      </div>

      {selectedCar && <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />}
    </div>
  )
}
