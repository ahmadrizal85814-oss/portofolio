import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import Furniture from './pages/Furniture'
import SteelProjects from './pages/SteelProjects'
import Contact from './pages/Contact'
import Display from './pages/Display'

function App() {
  const baseUrl = import.meta.env.BASE_URL === './' || import.meta.env.BASE_URL === '.' ? '/' : import.meta.env.BASE_URL

  return (
    <BrowserRouter basename={baseUrl}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/display" element={<Display />} />
          <Route path="/products" element={<Products />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/steel-projects" element={<SteelProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}

export default App