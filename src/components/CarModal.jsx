// CarModal.jsx - Popup modal showing full car details with 4 spec tabs
// Opens ONLY when "View Details" is clicked on a CarCard
import { useState, useEffect } from 'react'

export default function CarModal({ car, onClose }) {
  const [activeTab, setActiveTab] = useState('internal')
  const [activeImage, setActiveImage] = useState(0)

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    // Prevent body scroll while modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  if (!car) return null

  const tabs = ['internal', 'external', 'engine', 'dimensions']
  const tabLabels = {
    internal:   'Internal Specification',
    external:   'External',
    engine:     'Engine',
    dimensions: 'Dimensions',
  }

  // Renders a simple key-value table from a spec object
  const renderSpecTable = (specObj) => (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        {Object.entries(specObj).map(([key, val]) => (
          <tr key={key} style={{ borderBottom: '1px solid #2a2a2a' }}>
            <td style={{ color: '#aaa', padding: '8px 4px', fontSize: '0.88rem', textTransform: 'capitalize', width: '45%' }}>
              {/* Convert camelCase to readable: "airConditioning" -> "Air Conditioning" */}
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}
            </td>
            <td style={{ color: '#fff', padding: '8px 4px', fontSize: '0.88rem', fontWeight: 500 }}>
              {typeof val === 'boolean' ? (val ? '✅ Yes' : '❌ No') : val}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )

  return (
    // Dark overlay - clicking it closes the modal
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.85)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      {/* Modal box - stop click from closing when clicking inside */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#141414',
          border: '1px solid #333',
          borderRadius: '10px',
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '12px', right: '12px',
            background: '#CC0000', border: 'none', color: '#fff',
            width: '32px', height: '32px', borderRadius: '50%',
            fontSize: '1rem', cursor: 'pointer', zIndex: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          ✕
        </button>

        {/* Image gallery at top */}
        <div style={{ position: 'relative', height: '280px', background: '#0a0a0a', borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
          <img
            src={car.images ? car.images[activeImage] : car.image}
            alt={car.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={e => { e.target.src = '' }}
          />
          {/* Image nav arrows - only for navigation, NOT opening another modal */}
          {car.images && car.images.length > 1 && (
            <>
              <button
                onClick={() => setActiveImage(i => (i === 0 ? car.images.length - 1 : i - 1))}
                style={{
                  position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.6)', border: 'none', color: '#fff',
                  width: '36px', height: '36px', borderRadius: '50%', fontSize: '1.1rem', cursor: 'pointer',
                }}
              >‹</button>
              <button
                onClick={() => setActiveImage(i => (i === car.images.length - 1 ? 0 : i + 1))}
                style={{
                  position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.6)', border: 'none', color: '#fff',
                  width: '36px', height: '36px', borderRadius: '50%', fontSize: '1.1rem', cursor: 'pointer',
                }}
              >›</button>
              {/* Dot indicators */}
              <div style={{ position: 'absolute', bottom: '10px', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '6px' }}>
                {car.images.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveImage(i)}
                    style={{
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: i === activeImage ? '#CC0000' : 'rgba(255,255,255,0.4)',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Car title and price */}
        <div style={{ padding: '1.25rem 1.5rem 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <p style={{ color: '#aaa', fontSize: '0.85rem', marginBottom: '2px' }}>{car.brand} · {car.year}</p>
              <h4 style={{ color: '#fff', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '1.6rem', marginBottom: 0 }}>{car.name}</h4>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: '#CC0000', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '1.8rem', marginBottom: 0 }}>
                ${car.price.toLocaleString()}
              </p>
              <span style={{ background: car.type === 'new' ? '#CC0000' : '#444', color: '#fff', fontSize: '0.72rem', padding: '2px 8px', borderRadius: '3px', fontWeight: 700 }}>
                {car.type.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Spec Tabs */}
          <div style={{ display: 'flex', gap: '4px', marginTop: '1.25rem', borderBottom: '1px solid #333', flexWrap: 'wrap' }}>
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: activeTab === tab ? '#CC0000' : 'transparent',
                  color: activeTab === tab ? '#fff' : '#aaa',
                  border: 'none',
                  padding: '8px 14px',
                  fontSize: '0.82rem',
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: 600,
                  cursor: 'pointer',
                  borderRadius: '4px 4px 0 0',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {tabLabels[tab]}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div style={{ padding: '1rem 0 1.5rem' }}>
            {car.specs && car.specs[activeTab]
              ? renderSpecTable(car.specs[activeTab])
              : <p style={{ color: '#aaa' }}>No data available</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
