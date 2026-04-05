// Gallery.jsx - Grid of all car images with a fullscreen lightbox
// Lightbox built with React state only - no external libraries needed
import { useState } from 'react'
import carsData from '../data/cars.json'

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null) // null = closed

  const allCars = carsData.cars || carsData

  // Collect all images: first image from each car for the grid
  const galleryImages = allCars.map(car => ({
    src:   car.image,
    alt:   car.name,
    label: `${car.brand} ${car.name}`,
    price: `$${car.price.toLocaleString()}`,
  }))

  const totalImages = galleryImages.length

  // Navigate lightbox
  const goNext = () => setLightboxIndex(i => (i + 1) % totalImages)
  const goPrev = () => setLightboxIndex(i => (i - 1 + totalImages) % totalImages)

  // Close lightbox on Escape key
  const handleKeyDown = (e) => {
    if (e.key === 'Escape')      setLightboxIndex(null)
    if (e.key === 'ArrowRight')  goNext()
    if (e.key === 'ArrowLeft')   goPrev()
  }

  return (
    <div
      className="page-wrapper"
      style={{ background: '#0d0d0d', minHeight: '100vh' }}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="container py-5">

        <div className="mb-4 fade-in">
          <h2 className="section-title">Car <span>Gallery</span></h2>
          <div className="section-divider"></div>
          <p style={{ color: '#aaa' }}>Click any image to view it fullscreen</p>
        </div>

        {/* Masonry-style CSS columns grid */}
        <div
          style={{
            columns: '4 200px',
            columnGap: '12px',
          }}
        >
          {galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setLightboxIndex(index)}
              style={{
                marginBottom: '12px',
                breakInside: 'avoid',
                cursor: 'pointer',
                position: 'relative',
                borderRadius: '6px',
                overflow: 'hidden',
                border: '1px solid #222',
              }}
              onMouseEnter={e => {
                e.currentTarget.querySelector('.gallery-overlay').style.opacity = '1'
              }}
              onMouseLeave={e => {
                e.currentTarget.querySelector('.gallery-overlay').style.opacity = '0'
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                onError={e => { e.target.style.display = 'none' }}
              />
              {/* Hover overlay with car name */}
              <div
                className="gallery-overlay"
                style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(0,0,0,0.65)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.25s ease',
                }}
              >
                <i className="bi bi-zoom-in" style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '0.5rem' }}></i>
                <p style={{ color: '#fff', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '0.9rem', textAlign: 'center', margin: 0, padding: '0 8px' }}>
                  {img.label}
                </p>
                <p style={{ color: '#CC0000', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '0.85rem', margin: 0 }}>
                  {img.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== LIGHTBOX ===== */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.95)',
            zIndex: 20000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            style={{
              position: 'fixed', top: '20px', right: '20px',
              background: '#CC0000', border: 'none', color: '#fff',
              width: '40px', height: '40px', borderRadius: '50%',
              fontSize: '1.2rem', cursor: 'pointer', zIndex: 10,
            }}
          >
            ✕
          </button>

          {/* Counter */}
          <p style={{ color: '#aaa', position: 'fixed', top: '24px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.85rem', margin: 0 }}>
            {lightboxIndex + 1} / {totalImages}
          </p>

          {/* Main image - stop click from closing */}
          <div
            onClick={e => e.stopPropagation()}
            style={{ position: 'relative', maxWidth: '90vw', maxHeight: '80vh' }}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              style={{
                maxWidth: '90vw',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '6px',
                display: 'block',
              }}
            />
          </div>

          {/* Car label */}
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <p style={{ color: '#fff', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>
              {galleryImages[lightboxIndex].label}
            </p>
            <p style={{ color: '#CC0000', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, margin: 0 }}>
              {galleryImages[lightboxIndex].price}
            </p>
          </div>

          {/* Left / Right arrows - stop click from closing lightbox */}
          <button
            onClick={e => { e.stopPropagation(); goPrev() }}
            style={{
              position: 'fixed', left: '20px', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(204,0,0,0.8)', border: 'none', color: '#fff',
              width: '48px', height: '48px', borderRadius: '50%',
              fontSize: '1.5rem', cursor: 'pointer',
            }}
          >‹</button>
          <button
            onClick={e => { e.stopPropagation(); goNext() }}
            style={{
              position: 'fixed', right: '20px', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(204,0,0,0.8)', border: 'none', color: '#fff',
              width: '48px', height: '48px', borderRadius: '50%',
              fontSize: '1.5rem', cursor: 'pointer',
            }}
          >›</button>
        </div>
      )}
    </div>
  )
}
