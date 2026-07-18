import { useState } from 'react'

const categories = ['Semua', 'Gudang Baja', 'Kanopi & Atap', 'Railing & Tangga', 'Struktur Baja', 'Custom']

const projects = [
  {
    title: 'Gudang Baja Ringan 8x12m',
    category: 'Gudang Baja',
    desc: 'Gudang struktur baja ringan dengan atap spandek, cocok untuk penyimpanan barang dan logistik.',
    image: '/prooyek-bajaa/image.png',
  },
  {
    title: 'Gudang Baja WF 10x20m',
    category: 'Gudang Baja',
    desc: 'Gudang baja WF bentang lebar, tinggi 6m, dilengkapi ventilasi dan pencahayaan alami.',
    image: '/prooyek-bajaa/image copy.png',
  },
  {
    title: 'Gudang Semi Permanen',
    category: 'Gudang Baja',
    desc: 'Gudang semi permanen dengan rangka baja, dinding panel sandwich, mudah dibongkar pasang.',
    image: '/prooyek-bajaa/image copy 2.png',
  },
  {
    title: 'Kanopi Baja Carport',
    category: 'Kanopi & Atap',
    desc: 'Kanopi carport rangka baja dengan atap polycarbonate atau spandek, desain minimalis.',
    image: '/prooyek-bajaa/image copy 3.png',
  },
  {
    title: 'Kanopi Galvalum Industrial',
    category: 'Kanopi & Atap',
    desc: 'Kanopi galvalum bentang lebar untuk area loading dock atau area parkir industri.',
    image: '/prooyek-bajaa/image copy 4.png',
  },
  {
    title: 'Railing Tangga Stainless',
    category: 'Railing & Tangga',
    desc: 'Railing tangga stainless steel kombinasi kaca tempered, untuk gedung dan ruko.',
    image: '/prooyek-bajaa/proyek.jpeg',
  },
  {
    title: 'Tangga Darurat Baja',
    category: 'Railing & Tangga',
    desc: 'Tangga darurat struktur baja galvanis anti karat, sesuai standar keselamatan bangunan.',
    image: '/prooyek-bajaa/image.png',
  },
  {
    title: 'Mezzanine Baja',
    category: 'Struktur Baja',
    desc: 'Lantai mezzanine struktur baja untuk menambah area penyimpanan tanpa membangun ulang.',
    image: '/prooyek-bajaa/image copy.png',
  },
  {
    title: 'Portal Gate Baja',
    category: 'Struktur Baja',
    desc: 'Portal gate rangka baja untuk entrance pabrik, gudang, dan area industri.',
    image: '/prooyek-bajaa/image copy 2.png',
  },
  {
    title: 'Custom Steel Structure',
    category: 'Custom',
    desc: 'Struktur baja custom sesuai kebutuhan — framing, supporting, dan platform industri.',
    image: '/prooyek-bajaa/image copy 3.png',
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
