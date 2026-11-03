import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getAssetUrl } from '../../utils/asset'

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/about', label: 'Tentang' },
  { to: '/services', label: 'Layanan' },
  { to: '/products', label: 'Kitchen' },
  { to: '/display', label: 'Display' },
  { to: '/furniture', label: 'Furniture' },
  { to: '/steel-projects', label: 'Proyek Baja' },
  { to: '/contact', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const headerRef = useRef<HTMLElement>(null)

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (open && headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-charcoal/8 transition-all">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-20 md:h-24 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-2.5 sm:gap-3 text-charcoal font-medium hover:opacity-85 transition-opacity"
        >
          <img
            src={getAssetUrl('/Logo/brands-logo.png')}
            alt="Bina Sekawan Engineering"
            className="h-10 sm:h-12 md:h-16 w-auto object-contain flex-shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base md:text-lg leading-tight tracking-tight">
              Bina Sekawan Engineering
            </span>
            <span className="text-[10px] text-warm-gray tracking-wider uppercase sm:hidden">
              Kitchen & Konstruksi Baja
            </span>
          </div>
        </Link>

        {/* Desktop Links (lg and above) */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-4 xl:gap-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.to
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`text-xs uppercase tracking-wider transition-all py-1.5 px-1 relative ${
                      isActive
                        ? 'text-charcoal font-semibold'
                        : 'text-warm-gray hover:text-charcoal'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-charcoal rounded-full" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          <a
            href="https://wa.me/6282260802076?text=Halo%20Bina%20Sekawan%20Engineering,%20saya%20ingin%20konsultasi%20mengenai%20proyek%20custom."
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-2 bg-charcoal text-cream text-xs font-medium rounded-sm hover:bg-charcoal-light transition-all shadow-xs"
          >
            <span>Konsultasi WA</span>
            <span>&rarr;</span>
          </a>
        </div>

        {/* Mobile & Tablet Toggle Controls (below lg) */}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <a
            href="https://wa.me/6282260802076"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 sm:px-3 py-1.5 bg-charcoal text-cream text-[11px] sm:text-xs font-medium rounded-sm flex items-center gap-1"
          >
            <span>WA</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 border border-charcoal/15 rounded-md bg-cream-dark/60 active:bg-cream-dark transition-colors"
            aria-label="Buka Menu Navigasi"
            aria-expanded={open}
          >
            <span
              className={`block w-5 h-[1.5px] bg-charcoal transition-all duration-300 ${
                open ? 'rotate-45 translate-y-[4.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-charcoal transition-all duration-300 ${
                open ? '-rotate-45 -translate-y-[1.5px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Dropdown Drawer */}
      <div
        className={`lg:hidden bg-cream border-t border-charcoal/8 px-4 sm:px-6 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[36rem] py-6 shadow-2xl' : 'max-h-0 py-0'
        }`}
      >
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`p-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between border ${
                  isActive
                    ? 'bg-charcoal text-cream border-charcoal'
                    : 'bg-cream-dark/50 text-charcoal border-charcoal/5 active:bg-cream-dark'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="text-xs">&bull;</span>}
              </Link>
            )
          })}
        </div>

        <div className="pt-4 border-t border-charcoal/10 flex flex-col gap-2.5">
          <p className="text-[11px] uppercase tracking-wider text-warm-gray font-medium">
            Konsultasi Langsung:
          </p>
          <a
            href="https://wa.me/6282260802076"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-charcoal text-cream text-xs font-medium rounded-md shadow-sm active:scale-98 transition-transform"
          >
            <span>💬 Hubungi Tim Kami (0822-6080-2076)</span>
          </a>
        </div>
      </div>
    </header>
  )
}
