import { Link } from 'react-router-dom'
import { getAssetUrl } from '../../utils/asset'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <img src={getAssetUrl('/Logo/brands-logo.png')} alt="Bina Sekawan Engineering" className="h-8 w-auto object-contain brightness-0 invert" />
              <span className="text-lg font-medium tracking-tight">Bina Sekawan Engineering</span>
            </div>
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
              <li>BS.engineeringdpk.com</li>
              <li>Telepon / WA: 082260802076</li>
              <li>JVV3+J43, Jl. Akses UI, Tugu, Cimanggis, Depok, Jawa Barat 16451</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Bina Sekawan Engineering. Hak cipta dilindungi.
          </p>
          <div className="flex flex-wrap gap-5 items-center">
            {[
              { name: 'WhatsApp', url: 'https://wa.me/6282260802076', icon: getAssetUrl('/cikon.sosmed/icon-web/whatsap.png') },
              { name: 'Instagram', url: 'https://www.instagram.com/bs_engineering1?igsh=MXlreWZvNDhpcmJv', icon: getAssetUrl('/cikon.sosmed/icon-web/instagram.png') },
              { name: 'TikTok', url: 'https://www.tiktok.com/@bsedepok?_r=1&_t=ZS-97p8XPPMkHo', icon: getAssetUrl('/cikon.sosmed/icon-web/tiktok.png') },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cream/70 hover:text-cream transition-all group"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-5 h-5 object-contain group-hover:scale-110 transition-transform"
                />
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
