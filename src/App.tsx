import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Friend from './pages/Friend'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar />
      </div>

      <main className="w-screen flex-1 flex items-center justify-center">
        {/* Here are the routes, home and about, please add them, thanks. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
