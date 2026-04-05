// CarCard.jsx - Displays a single car in a grid. 
// Click "View Details" to open the modal — NOT the image itself (good UX!)
import carPlaceholder from '../assets/car-placeholder.svg'

export default function CarCard({ car, onViewDetails }) {
  // Category badge color
  const categoryColors = {
    'Sedan':        '#0066cc',
    'SUV':          '#007a33',
    'Hatchback':    '#8800cc',
    'Convertible':  '#cc6600',
    'Pickup Truck': '#cc0033',
  }
  const badgeColor = categoryColors[car.category] || '#555'

  return (
    <div
      style={{
        background: '#141414',
        border: '1px solid #2a2a2a',
        borderLeft: '3px solid #CC0000',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(204,0,0,0.2)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Car image - NOT clickable to open modal, just decorative */}
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden', background: '#1a1a1a' }}>
        <img
          src={car.image}
          alt={car.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={e => { e.target.src = carPlaceholder }}
        />
        {/* Category badge on the image */}
        <span
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: badgeColor,
            color: '#fff',
            fontSize: '0.7rem',
            fontWeight: 600,
            padding: '3px 8px',
            borderRadius: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {car.category}
        </span>
        {/* New/Used badge */}
        <span
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            background: car.type === 'new' ? '#CC0000' : '#444',
            color: '#fff',
            fontSize: '0.7rem',
            fontWeight: 700,
            padding: '3px 8px',
            borderRadius: '4px',
            textTransform: 'uppercase',
          }}
        >
          {car.type}
        </span>
      </div>

      {/* Card body */}
      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p style={{ color: '#aaa', fontSize: '0.8rem', marginBottom: '2px', fontFamily: 'Rajdhani, sans-serif' }}>
          {car.brand} · {car.year}
        </p>
        <h6
          style={{
            color: '#fff',
            fontFamily: 'Rajdhani, sans-serif',
            fontWeight: 700,
            fontSize: '1.1rem',
            marginBottom: '0.5rem',
          }}
        >
          {car.name}
        </h6>

        {/* Mileage for used cars */}
        {car.mileage && (
          <p style={{ color: '#aaa', fontSize: '0.82rem', marginBottom: '0.4rem' }}>
            <i className="bi bi-speedometer2 me-1" style={{ color: '#CC0000' }}></i>
            {car.mileage}
          </p>
        )}

        {/* Price */}
        <p
          style={{
            color: '#CC0000',
            fontFamily: 'Rajdhani, sans-serif',
            fontWeight: 700,
            fontSize: '1.3rem',
            marginBottom: '1rem',
            marginTop: 'auto',
          }}
        >
          ${car.price.toLocaleString()}
        </p>

        {/* View Details button - THIS is what opens the modal */}
        <button
          onClick={() => onViewDetails(car)}
          className="btn-carbreezy w-100"
          style={{
            background: '#CC0000',
            color: '#fff',
            border: 'none',
            padding: '0.5rem',
            fontFamily: 'Rajdhani, sans-serif',
            fontWeight: 700,
            fontSize: '0.95rem',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.target.style.background = '#ff0000'}
          onMouseLeave={e => e.target.style.background = '#CC0000'}
        >
          <i className="bi bi-eye me-2"></i>
          View Details
        </button>
      </div>
    </div>
  )
}
