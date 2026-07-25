import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App