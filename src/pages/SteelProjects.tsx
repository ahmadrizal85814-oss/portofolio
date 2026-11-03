import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAssetUrl } from '../utils/asset'
import { trackWaClick } from '../utils/tracker'

interface SteelItem {
  title: string
  category: string
  desc: string
  specs: string[]
  image: string
}

const categories = ['Semua', 'Kanopi & Atap', 'Struktur Baja', 'Instalasi & Exhaust', 'Custom Fabrikasi']

const projects: SteelItem[] = [
  {
    title: 'Pembuatan Kanopi Kaca Tempered',
    category: 'Kanopi & Atap',
    desc: 'Pembuatan kanopi rangka pipa baja hollow galvanis tebal dengan atap kaca tempered laminasi. Tampilan mewah, teduh, tahan gempa, dan anti bocor.',
    specs: ['Baja Hollow Galvanis Heavy Gauge', 'Kaca Tempered 8mm / 10mm Laminated', 'Cat Epoxy Anti Karat + PU Finishing', 'Sealant Waterproofing Grade A'],
    image: getAssetUrl('/prooyek-bajaa/Pembuatan.kanopi.kaca.png'),
  },
  {
    title: 'Aplikator Struktur Baja H-Beam & WF',
    category: 'Struktur Baja',
    desc: 'Pemasangan konstruksi rangka baja berat (H-Beam / Wide Flange) untuk bangunan pabrik, gudang logistik, ruko bertingkat, dan mezzanine industri.',
    specs: ['Baja WF / H-Beam Standar SNI', 'Sambungan Baut HTB Grade 8.8 & Full Welded', 'Perhitungan Beban Struktur Bersertifikat', 'Pondasi Pedestal & Angkur Baja'],
    image: getAssetUrl('/prooyek-bajaa/aplikator.baja.Hbeam.jpeg'),
  },
  {
    title: 'Fabrikasi Struktur Baja Custom',
    category: 'Custom Fabrikasi',
    desc: 'Pengerjaan struktur arsitektural custom, jembatan penyeberangan mini, portal gerbang industri, dan rangka fasad gedung.',
    specs: ['Presisi Pemotongan Plasma / Oxy', 'Fabrikasi Workshop & Assembly On-site', 'Uji Kekuatan Sambungan Las', 'Finishing Tahan Cuaca Tropis'],
    image: getAssetUrl('/prooyek-bajaa/custom.desain.png'),
  },
  {
    title: 'Pemasangan Instalasi Exhaust & Ducting',
    category: 'Instalasi & Exhaust',
    desc: 'Instalasi cerobong dan saluran ducting exhaust stainless/bjls berskala besar, terintegrasi dengan struktur rangka baja atap dan blower industri.',
    specs: ['Ducting BJLS / Stainless Steel', 'Blower Centrifugal Daya Hisap Tinggi', 'Sistem Redam Getaran & Fleksibel Joint', 'Aman dari Kebocoran Asap & Minyak'],
    image: getAssetUrl('/prooyek-bajaa/pemasangan.instalasi.exhaust.png'),
  },
  {
    title: 'Pengerjaan Kanopi Carport Minimalis',
    category: 'Kanopi & Atap',
    desc: 'Pengerjaan kanopi baja minimalis untuk rumah tinggal, gedung kantor, maupun area parkir komersial dengan pilihan atap spandek, alderon, atau solarflat.',
    specs: ['Rangka Kokoh Bebas Lendutan', 'Talang Air Tersembunyi Rapi', 'Kemiringan Optimal Anti Genangan', 'Garansi Kebocoran Konstruksi'],
    image: getAssetUrl('/prooyek-bajaa/pengerjaan.kanopi.png'),
  },
]

export default function SteelProjects() {
  const [active, setActive] = useState('Semua')

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
            Konstruksi & Struktur Baja
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.12] max-w-2xl text-charcoal">
            Proyek baja
            <br />
            <span className="text-warm-gray">& konstruksi steel.</span>
          </h1>
          <p className="text-warm-gray text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mt-3 sm:mt-5">
            Menangani proyek struktur baja berat maupun arsitektural — kanopi kaca tempered, rangka gudang WF, mezzanine, hingga instalasi exhaust ducting pabrik.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
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

      {/* Projects Grid (1 Col Phone, 2 Col Tablet, 3 Col Desktop) */}
      <section className="bg-cream py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="group bg-cream-dark/60 rounded-xl overflow-hidden border border-charcoal/10 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[4/3] bg-charcoal/5 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 bg-charcoal/80 text-cream text-[10px] font-semibold tracking-wider uppercase rounded-xs backdrop-blur-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-lg sm:text-xl font-medium mb-1.5 text-charcoal">
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
                      `Halo Bina Sekawan Engineering, saya ingin konsultasi proyek baja untuk "${project.title}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackWaClick({
                        sourcePage: '/steel-projects',
                        productName: project.title,
                        category: `Proyek Baja (${project.category})`
                      })
                    }
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 bg-charcoal text-cream text-xs font-semibold rounded-md hover:bg-charcoal-light active:scale-98 transition-all min-h-[42px]"
                  >
                    <span>Konsultasi Proyek Baja</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-charcoal/5 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-3 text-charcoal">
            Butuh perencanaan struktur atau kanopi baja?
          </h2>
          <p className="text-warm-gray mb-6 sm:mb-8 max-w-md mx-auto text-xs sm:text-sm md:text-base">
            Tim kami siap melakukan pengukuran dan estimasi kekuatan rangka di lokasi proyek Anda.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-charcoal text-cream text-xs sm:text-sm font-medium tracking-wide hover:bg-charcoal-light active:scale-98 transition-all rounded-md"
            >
              Ajukan Survei Proyek
            </Link>
            <a
              href="https://wa.me/6282260802076?text=Halo%20Bina%20Sekawan%20Engineering,%20saya%20butuh%20survei%20lapangan%20untuk%20proyek%20baja."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWaClick({
                  sourcePage: '/steel-projects',
                  productName: 'Survei Lapangan Proyek Baja (CTA)',
                  category: 'Proyek Baja'
                })
              }
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-charcoal/20 text-charcoal text-xs sm:text-sm font-medium tracking-wide active:bg-cream-dark transition-all rounded-md"
            >
              <span>Hubungi via WhatsApp</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
