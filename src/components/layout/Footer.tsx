import { Link } from 'react-router-dom'
import { getAssetUrl } from '../../utils/asset'
import { trackWaClick } from '../../utils/tracker'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream border-t border-charcoal-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <img
                src={getAssetUrl('/Logo/brands-logo.png')}
                alt="Bina Sekawan Engineering"
                className="h-9 sm:h-10 w-auto object-contain brightness-0 invert flex-shrink-0"
              />
              <span className="text-sm sm:text-base font-semibold tracking-tight">
                Bina Sekawan Engineering
              </span>
            </div>
            <p className="text-cream/60 text-xs mt-3 leading-relaxed max-w-sm">
              Spesialis fabrikasi stainless steel & konstruksi baja terpercaya di Depok. Melayani kebutuhan Dapur Resto (Komersial), Dapur Konvensional (Residensial), Furniture Stainless, dan Bangunan Baja.
            </p>
          </div>

          {/* Katalog */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 mb-3 sm:mb-4 font-semibold">
              Katalog Produk
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Kitchen Dapur Resto', path: '/products' },
                { label: 'Kitchen Dapur Konvensional', path: '/products' },
                { label: 'Display Hasil Jadi', path: '/display' },
                { label: 'Furniture Stainless Steel', path: '/furniture' },
                { label: 'Proyek Rangka Baja', path: '/steel-projects' },
              ].map((item, idx) => (
                <li key={`${item.label}-${idx}`}>
                  <Link
                    to={item.path}
                    className="text-xs text-cream/70 hover:text-cream transition-colors py-0.5 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 mb-3 sm:mb-4 font-semibold">
              Informasi Perusahaan
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Beranda', path: '/' },
                { label: 'Tentang Kami', path: '/about' },
                { label: 'Layanan & Alur Kerja', path: '/services' },
                { label: 'Kontak & Lokasi', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-xs text-cream/70 hover:text-cream transition-colors py-0.5 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak & Alamat */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 mb-3 sm:mb-4 font-semibold">
              Kontak Workshop
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-cream/70">
              <li>
                <strong className="text-cream block">Telepon / WhatsApp:</strong>
                <a
                  href="https://wa.me/6282260802076"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWaClick({
                      sourcePage: 'footer',
                      productName: 'Footer WhatsApp Phone Link',
                      category: 'Kontak Langsung'
                    })
                  }
                  className="hover:text-cream underline"
                >
                  0822-6080-2076
                </a>
              </li>
              <li>
                <strong className="text-cream block">Website:</strong>
                BS.engineeringdpk.com
              </li>
              <li>
                <strong className="text-cream block">Alamat:</strong>
                Jl. Akses UI, Tugu, Cimanggis, Depok, Jawa Barat 16451
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-cream/50">
            <p>&copy; {new Date().getFullYear()} Bina Sekawan Engineering. All rights reserved.</p>
            <span className="hidden sm:inline text-cream/20">&bull;</span>
            <Link
              to="/admin"
              className="text-[11px] text-cream/40 hover:text-cream/80 transition-colors underline-offset-2 hover:underline"
              title="Dashboard Pengunjung & Leads"
            >
              🔐 Portal Admin
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-5 items-center justify-center">
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
                onClick={() => {
                  if (social.name.includes('WhatsApp')) {
                    trackWaClick({
                      sourcePage: 'footer',
                      productName: 'Footer Social WhatsApp',
                      category: 'Kontak Langsung'
                    })
                  }
                }}
                className="flex items-center gap-2 text-xs text-cream/70 hover:text-cream transition-all group p-1"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
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
