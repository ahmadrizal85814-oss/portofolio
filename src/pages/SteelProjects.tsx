import { useState } from 'react'

const categories = ['Semua', 'Gudang Baja', 'Kanopi & Atap', 'Railing & Tangga', 'Struktur Baja', 'Custom']

const projects = [
  {
    title: 'Pembuatan Kanopi Kaca',
    category: 'Kanopi & Atap',
    desc: 'Pembuatan kanopi rangka baja dengan atap kaca tempered untuk tampilan elegan.',
    image: '/prooyek-bajaa/Pembuatan.kanopi.kaca.png',
  },
  {
    title: 'Aplikator Baja Hbeam',
    category: 'Struktur Baja',
    desc: 'Pemasangan struktur baja H-beam untuk bangunan industri dan gudang.',
    image: '/prooyek-bajaa/aplikator.baja.Hbeam.jpeg',
  },
  {
    title: 'Custom Desain',
    category: 'Custom',
    desc: 'Pengerjaan struktur baja dan fabrikasi sesuai dengan custom desain klien.',
    image: '/prooyek-bajaa/custom.desain.png',
  },
  {
    title: 'Pemasangan Instalasi Exhaust',
    category: 'Custom',
    desc: 'Instalasi sistem exhaust komersial terintegrasi dengan struktur bangunan.',
    image: '/prooyek-bajaa/pemasangan.instalasi.exhaust.png',
  },
  {
    title: 'Pengerjaan Kanopi',
    category: 'Kanopi & Atap',
    desc: 'Pengerjaan kanopi baja ringan atau berat untuk carport maupun area parkir.',
    image: '/prooyek-bajaa/pengerjaan.kanopi.png',
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
      <section className="border-b border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-widest text-warm-gray mb-4">
            Katalog Proyek Baja
          </p>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] max-w-2xl">
            Proyek baja
            <br />
            <span className="text-warm-gray">& konstruksi steel.</span>
          </h1>
          <p className="text-warm-gray text-lg leading-relaxed max-w-md mt-6">
            Selain kitchen equipment, kami juga menangani proyek struktur baja
            seperti gudang, kanopi, railing, dan fabrikasi baja custom.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="border-b border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex gap-6 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm whitespace-nowrap pb-1 border-b transition-colors ${
                  active === cat
                    ? 'text-charcoal border-charcoal'
                    : 'text-warm-gray border-transparent hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="group bg-cream-dark rounded-sm overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-6">
                  <span className="text-xs uppercase tracking-widest text-warm-gray">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-medium mt-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Punya proyek baja?
          </h2>
          <p className="text-warm-gray mb-8 max-w-md mx-auto">
            Kami siap membantu dari perencanaan hingga pemasangan. Konsultasikan
            proyek baja Anda bersama tim engineering kami.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-charcoal text-cream text-sm tracking-wide hover:bg-charcoal-light transition-colors"
          >
            Diskusikan proyek Anda
          </a>
        </div>
      </section>
    </>
  )
}
