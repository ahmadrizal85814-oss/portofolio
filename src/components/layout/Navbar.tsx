import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/about', label: 'Tentang' },
  { to: '/services', label: 'Layanan' },
  { to: '/products', label: 'Kitchen' },
  { to: '/furniture', label: 'Furniture' },
  { to: '/steel-projects', label: 'Proyek Baja' },
  { to: '/contact', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-charcoal/5">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-charcoal font-medium text-lg tracking-tight hover:opacity-60 transition-opacity"
        >
          BS Engineering
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-sm tracking-wide transition-colors ${
                  pathname === link.to
                    ? 'text-charcoal font-medium'
                    : 'text-warm-gray hover:text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-charcoal transition-transform ${
              open ? 'rotate-45 translate-y-[4px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-charcoal transition-transform ${
              open ? '-rotate-45 -translate-y-[2px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-charcoal/5 px-6 py-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-base tracking-wide ${
                    pathname === link.to
                      ? 'text-charcoal font-medium'
                      : 'text-warm-gray'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
