import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <span className="text-lg font-medium tracking-tight">BS Engineering</span>
            <p className="text-cream/50 text-sm mt-3 leading-relaxed max-w-xs">
              Solusi stainless steel & konstruksi baja berkualitas tinggi — kitchen equipment, furniture custom, dan proyek baja.
            </p>
          </div>

          {/* Katalog */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 mb-4">
              Katalog
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Kitchen Equipment', path: '/products' },
                { label: 'Furniture Stainless', path: '/furniture' },
                { label: 'Proyek Baja', path: '/steel-projects' },
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

          {/* Navigasi */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 mb-4">
              Navigasi
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Beranda', path: '/' },
                { label: 'Tentang', path: '/about' },
                { label: 'Layanan', path: '/services' },
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
              <li>JVV3+J43, Jl. Akses UI, Tugu, Cimanggis, Depok, Jawa Barat 16451</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} BS Engineering. Hak cipta dilindungi.
          </p>
          <div className="flex gap-6">
            {[
              { name: 'Instagram', url: 'https://www.instagram.com/bs_engineering1/' },
              { name: 'TikTok', url: 'https://www.tiktok.com/@bsedepok' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cream/40 hover:text-cream transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
