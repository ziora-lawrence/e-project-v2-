// UsedCars.jsx - Same layout as NewCars but filters used cars and shows mileage
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import carsData from '../data/cars.json'
import CarCard from '../components/CarCard'
import CarModal from '../components/CarModal'

const CATEGORIES = ['All', 'Sedan', 'SUV', 'Hatchback', 'Convertible', 'Pickup Truck']
const BRANDS = ['All Brands', 'Toyota','Honda','Ford','BMW','Mercedes-Benz','Volkswagen','Audi','Hyundai','Kia','Chevrolet','Nissan','Subaru']

export default function UsedCars() {
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All')
  const [selectedBrand, setSelectedBrand] = useState('All Brands')
  const [selectedCar, setSelectedCar] = useState(null)

  const allCars = carsData.cars || carsData
  const usedCars = allCars.filter(c => c.type === 'used')

  const filtered = usedCars.filter(car => {
    const catMatch   = selectedCategory === 'All' || car.category === selectedCategory
    const brandMatch = selectedBrand === 'All Brands' || car.brand === selectedBrand
    return catMatch && brandMatch
  })

  return (
    <div className="page-wrapper" style={{ background: '#0d0d0d', minHeight: '100vh' }}>
      <div className="container py-5">

        <div className="mb-4 fade-in">
          <h2 className="section-title">Used <span>Cars</span></h2>
          <div className="section-divider"></div>
          <p style={{ color: '#aaa' }}>Quality pre-owned vehicles at competitive prices</p>
        </div>

        {/* Filters */}
        <div
          style={{
            background: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '8px',
            padding: '1rem 1.25rem',
            marginBottom: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
          }}
        >
          <div>
            <label style={{ color: '#aaa', fontSize: '0.8rem', display: 'block', marginBottom: '4px' }}>Body Type</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    background: selectedCategory === cat ? '#CC0000' : 'transparent',
                    color: selectedCategory === cat ? '#fff' : '#aaa',
                    border: `1px solid ${selectedCategory === cat ? '#CC0000' : '#444'}`,
                    borderRadius: '4px',
                    padding: '4px 12px',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontFamily: 'Rajdhani, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label style={{ color: '#aaa', fontSize: '0.8rem', display: 'block', marginBottom: '4px' }}>Brand</label>
            <select
              value={selectedBrand}
              onChange={e => setSelectedBrand(e.target.value)}
              style={{
                background: '#0a0a0a', color: '#fff',
                border: '1px solid #444', borderRadius: '4px',
                padding: '5px 10px', fontSize: '0.85rem', cursor: 'pointer',
              }}
            >
              {BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          <div style={{ marginLeft: 'auto' }}>
            <span style={{ color: '#aaa', fontSize: '0.85rem' }}>
              Showing <strong style={{ color: '#CC0000' }}>{filtered.length}</strong> cars
            </span>
          </div>
        </div>

        {/* Car grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: '#aaa' }}>
            <i className="bi bi-search" style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}></i>
            No cars match your filters. Try a different combination.
          </div>
        ) : (
          <div className="row g-3">
            {filtered.map(car => (
              <div key={car.id} className="col-12 col-sm-6 col-xl-3">
                <CarCard car={car} onViewDetails={setSelectedCar} />
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedCar && <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />}
    </div>
  )
}
