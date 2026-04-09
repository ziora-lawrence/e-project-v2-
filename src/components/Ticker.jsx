//The ticker at the bottom
import { useState, useEffect } from 'react'

export default function Ticker() {
  const [time, setTime] = useState(new Date())
  const [location, setLocation] = useState('Detecting location...')

  // This updates the clock every second
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  // Get user's city 
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation('Location unavailable')
      return
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords
          // Use free reverse geocoding API (no key needed)
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          )
          const data = await res.json()
          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.county ||
            'Unknown Location'
          setLocation(city)
        } catch {
          setLocation('Location unavailable')
        }
      },
      () => setLocation('Location unavailable')
    )
  }, [])
// Format date 
  const dateStr = time.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  })

  // Format time
  const timeStr = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  const tickerText = `📅 ${dateStr}   ⏰ ${timeStr}   📍 ${location}   |   🚗 Welcome to CarBreezy — Your Car Buying Destiny Starts Here!   |   `

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#CC0000',
        color: '#fff',
        height: '36px',
        overflow: 'hidden',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          animation: 'ticker-scroll 30s linear infinite',
          fontSize: '13px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          letterSpacing: '0.3px',
        }}
      >
        {tickerText}{tickerText}{tickerText}
      </div>
    </div>
  )
}
