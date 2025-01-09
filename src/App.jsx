import './App.css'
import 'bulma/css/bulma.min.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'
import HeroFooter from './components/HeroFooter'
import Index from './pages/index'
import AdminDashboard from './pages/AdminDashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
