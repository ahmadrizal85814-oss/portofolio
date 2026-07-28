import { useState } from 'react'
import { getAssetUrl } from '../utils/asset'

const categories = ['Semua', 'Kitchen Custom', 'Kitchen Sesuai Request', 'Kitchen Sesuai Ruangan']

const projects = [
  {
    title: 'Pemasangan Kitchen Custom',
    category: 'Kitchen Custom',
    desc: 'Pemasangan kitchen custom sesuai dengan kebutuhan ruang dan spesifikasi.',
    image: getAssetUrl('/Display/pemasangan-kitchen-custom.png'),
  },
  {
    title: 'Pemasangan Kitchen Sesuai Request',
    category: 'Kitchen Sesuai Request',
    desc: 'Pemasangan kitchen stainless steel sesuai dengan request khusus klien.',
    image: getAssetUrl('/Display/pemasangan-kitchen-sesuai-request.jpeg'),
  },
  {
    title: 'Pemasangan Kitchen Sesuai Ruangan',
    category: 'Kitchen Sesuai Ruangan',
    desc: 'Pemasangan kitchen set yang disesuaikan dengan dimensi ruangan yang ada.',
    image: getAssetUrl('/Display/pemasangan-kitchen-sesuai-ruangan.png'),
  },
]

export default function Display() {
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
            Display Proyek
          </p>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] max-w-2xl">
            Tampilan Display
            <br />
            <span className="text-warm-gray">produk yang sudah jadi.</span>
          </h1>
          <p className="text-warm-gray text-lg leading-relaxed max-w-md mt-6">
            Galeri tampilan display dari proyek-proyek kitchen stainless steel kami yang telah selesai dikerjakan.
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
    </>
  )
}
