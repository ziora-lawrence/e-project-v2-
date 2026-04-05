// App.jsx - Main app file that sets up all the routes
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Ticker from './components/Ticker'

// Import all pages
import Home from './pages/Home'
import NewCars from './pages/NewCars'
import UsedCars from './pages/UsedCars'
import Brands from './pages/Brands'
import Offers from './pages/Offers'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      {/* Navbar shows on every page */}
      <Navbar />

      {/* All the page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewCars />} />
        <Route path="/used" element={<UsedCars />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer shows on every page */}
      <Footer />

      {/* Ticker fixed at bottom */}
      <Ticker />
    </BrowserRouter>
  )
}

export default App
