import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <span className="text-lg font-medium tracking-tight">BS Engineering</span>
            <p className="text-cream/50 text-sm mt-3 leading-relaxed max-w-xs">
              Solusi peralatan dapur stainless steel berkualitas tinggi untuk industri kuliner.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 mb-4">
              Navigasi
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Beranda', path: '/' },
                { label: 'Tentang', path: '/about' },
                { label: 'Layanan', path: '/services' },
                { label: 'Produk', path: '/products' },
                { label: 'Kontak', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 mb-4">
              Hubungi kami
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-cream/70">
              <li>info@bsengineering.id</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} BS Engineering. Hak cipta dilindungi.
          </p>
          <div className="flex gap-6">
            {['Instagram', 'WhatsApp', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-cream/40 hover:text-cream transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
