import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAssetUrl } from '../utils/asset'

interface ProjectItem {
  title: string
  category: string
  type: string
  desc: string
  specs: string[]
  image: string
}

const categories = ['Semua', 'Dapur Restoran & Komersial', 'Dapur Residensial & Konvensional', 'Custom Layout']

const projects: ProjectItem[] = [
  {
    title: 'Pemasangan Kitchen Commercial Full Line',
    category: 'Dapur Restoran & Komersial',
    type: 'Dapur Resto',
    desc: 'Instalasi lengkap dapur restoran komersial meliputi Kwali Range heavy duty, meja kerja prep, canopy exhaust hood, serta sistem ducting pembuangan asap dan minyak.',
    specs: ['SUS 304 1.2mm Food Grade', 'Integrated Grease Ducting & Blower', 'Kwali Range High Pressure', 'Sesuai Standar HACCP'],
    image: getAssetUrl('/Display/pemasangan-kitchen-custom.png'),
  },
  {
    title: 'Pemasangan Kitchen Sesuai Request Khusus',
    category: 'Custom Layout',
    type: 'Custom Design',
    desc: 'Fabrikasi dan pemasangan perlengkapan dapur stainless steel custom mengikuti denah sudut ruangan sempit untuk efisiensi alur kerja (workflow) koki.',
    specs: ['Custom Radius & Sudut Presisi', 'Under-counter Shelving', 'Backsplash Anti Cipratan', 'Kaki Bullet Feet Adjustable'],
    image: getAssetUrl('/Display/pemasangan-kitchen-sesuai-request.jpeg'),
  },
  {
    title: 'Pemasangan Kitchen Set Residensial & Villa',
    category: 'Dapur Residensial & Konvensional',
    type: 'Dapur Konvensional',
    desc: 'Kitchen set stainless steel modern untuk hunian pribadi. Menggantikan multiplek dengan material full SUS 304 anti rayap seumur hidup, anti karat, dan mudah dibersihkan.',
    specs: ['Full SUS 304 Stainless Cabinet', 'Mangkuk Sink Jumbo Seamless', 'Lapisan Peredam Suara', 'Desain Modern & Higienis'],
    image: getAssetUrl('/Display/pemasangan-kitchen-sesuai-ruangan.png'),
  },
]

export default function Display() {
  const [active, setActive] = useState('Semua')
  const [previewImage, setPreviewImage] = useState<ProjectItem | null>(null)

  const filtered =
    active === 'Semua'
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <>
      {/* Header */}
      <section className="border-b border-charcoal/5 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal/5 rounded-full text-[11px] sm:text-xs uppercase tracking-widest text-warm-gray mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Galeri Dokumentasi Proyek
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.12] max-w-2xl text-charcoal">
            Tampilan display{' '}
            <span className="text-warm-gray">proyek yang telah terpasang.</span>
          </h1>
          <p className="text-warm-gray text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mt-3 sm:mt-5">
            Bukti nyata pengerjaan rapi dan presisi di berbagai lokasi klien — mulai dari dapur restoran komersial hingga kitchen set rumah mewah bebas rayap.
          </p>
        </div>
      </section>

      {/* Filter Tabs (Touch Swipable on Phones & Tablets) */}
      <section className="border-b border-charcoal/5 bg-cream-dark/50 sticky top-20 md:top-24 z-20 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3.5">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`text-xs whitespace-nowrap px-3 py-1.5 rounded-full font-medium transition-all flex-shrink-0 border ${
                  active === cat
                    ? 'bg-charcoal text-cream border-charcoal shadow-xs'
                    : 'bg-cream text-charcoal/70 border-charcoal/10 hover:text-charcoal active:bg-cream-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid (1-Col Phone, 2-Col Tablet, 3-Col Desktop) */}
      <section className="bg-cream py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="group bg-cream-dark/60 rounded-xl overflow-hidden border border-charcoal/10 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div
                    className="relative aspect-[4/3] bg-charcoal/5 overflow-hidden cursor-pointer"
                    onClick={() => setPreviewImage(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 bg-charcoal/80 text-cream text-[10px] font-semibold tracking-wider uppercase rounded-xs backdrop-blur-xs">
                        {project.type}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-cream text-xs font-medium">
                      🔍 Ketuk untuk Perbesar
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 md:p-6">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-warm-gray">
                      {project.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-medium mt-1 mb-2 text-charcoal">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-warm-gray leading-relaxed mb-4">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-charcoal/5">
                      {project.specs.map((spec) => (
                        <span
                          key={spec}
                          className="text-[10px] sm:text-[11px] bg-cream px-2 py-0.5 rounded text-charcoal/80 border border-charcoal/5"
                        >
                          ✓ {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 md:p-6 pt-0">
                  <a
                    href={`https://wa.me/6282260802076?text=${encodeURIComponent(
                      `Halo Bina Sekawan Engineering, saya melihat proyek display "${project.title}" dan tertarik membuat yang serupa untuk tempat saya.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 bg-charcoal text-cream text-xs font-semibold rounded-md hover:bg-charcoal-light active:scale-98 transition-all min-h-[42px]"
                  >
                    <span>Konsultasi Proyek Ini</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal (Mobile Safe Scroll) */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal/80 backdrop-blur-xs"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="bg-cream rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/11] bg-charcoal flex items-center justify-center">
              <img
                src={previewImage.image}
                alt={previewImage.title}
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-charcoal/80 text-cream flex items-center justify-center hover:bg-charcoal active:scale-90"
                aria-label="Tutup"
              >
                ✕
              </button>
            </div>
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-charcoal">{previewImage.title}</h3>
                <p className="text-xs text-warm-gray mt-0.5">{previewImage.desc}</p>
              </div>
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="w-full sm:w-auto px-4 py-2 bg-charcoal text-cream text-xs font-medium rounded-md hover:bg-charcoal-light"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="border-t border-charcoal/5 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-3 text-charcoal">
            Tertarik dengan hasil kerja kami?
          </h2>
          <p className="text-warm-gray mb-6 sm:mb-8 max-w-md mx-auto text-xs sm:text-sm md:text-base">
            Konsultasikan ukuran ruangan dan budget Anda bersama tim engineer kami secara gratis.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-charcoal text-cream text-xs sm:text-sm font-medium tracking-wide hover:bg-charcoal-light active:scale-98 transition-all rounded-md"
            >
              Lihat Katalog Produk
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-charcoal/20 text-charcoal text-xs sm:text-sm font-medium tracking-wide active:bg-cream-dark transition-all rounded-md"
            >
              Hubungi Tim Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
