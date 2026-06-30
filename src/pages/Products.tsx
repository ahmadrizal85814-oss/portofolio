import { useState } from 'react'

const categories = ['Semua', 'Peralatan Masak', 'Meja & Prep', 'Pendingin', 'Rak & Storage', 'Exhaust & Ventilasi']

const products = [
  {
    title: 'Kompor Gas Industrial 6 Burner',
    category: 'Peralatan Masak',
    desc: 'Kompor gas 6 tungku dengan body stainless steel 304, api besar untuk wok.',
    image: 'https://placehold.co/600x400/F7F6F3/1C1C1E?text=Kompor+Gas+6+Burner',
  },
  {
    title: 'Meja Kerja Stainless 180x70',
    category: 'Meja & Prep',
    desc: 'Meja kerja custom ukuran 180x70x80cm, 2 rak bawah, material food grade.',
    image: 'https://placehold.co/600x400/1C1C1E/F7F6F3?text=Meja+Kerja+Stainless',
  },
  {
    title: 'Hood Exhaust Custom',
    category: 'Exhaust & Ventilasi',
    desc: 'Canopy hood custom sesuai ukuran kompor, dilengkapi filter grease.',
    image: 'https://placehold.co/600x400/F7F6F3/1C1C1E?text=Hood+Exhaust+Custom',
  },
  {
    title: 'Deep Fryer Gas 2 Tank',
    category: 'Peralatan Masak',
    desc: 'Deep fryer gas 2 tank dengan thermostat, kapasitas besar untuk frying.',
    image: 'https://placehold.co/600x400/1C1C1E/F7F6F3?text=Deep+Fryer+Gas',
  },
  {
    title: 'Rak Display 4 Tingkat',
    category: 'Rak & Storage',
    desc: 'Rak stainless steel 4 tingkat untuk display atau penyimpanan bahan.',
    image: 'https://placehold.co/600x400/F7F6F3/1C1C1E?text=Rak+Display+4+Tingkat',
  },
  {
    title: 'Prep Table dengan Under Shelf',
    category: 'Meja & Prep',
    desc: 'Meja prep dengan under shelf dan backsplash, ideal untuk area plating.',
    image: 'https://placehold.co/600x400/1C1C1E/F7F6F3?text=Prep+Table+Under+Shelf',
  },
  {
    title: 'Cold Storage Walk-in Chiller',
    category: 'Pendingin',
    desc: 'Walk-in chiller custom ukuran sesuai ruangan, suhu 2-8°C.',
    image: 'https://placehold.co/600x400/1C1C1E/F7F6F3?text=Walk-in+Chiller',
  },
  {
    title: 'Grease Trap 3 Compartment',
    category: 'Exhaust & Ventilasi',
    desc: 'Grease trap 3 kompartemen stainless steel, mencegah lemak masuk saluran.',
    image: 'https://placehold.co/600x400/F7F6F3/1C1C1E?text=Grease+Trap+3+Comp',
  },
]

export default function Products() {
  const [active, setActive] = useState('Semua')

  const filtered =
    active === 'Semua'
      ? products
      : products.filter((p) => p.category === active)

  return (
    <>
      {/* Header */}
      <section className="border-b border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-widest text-warm-gray mb-4">
            Katalog Produk
          </p>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] max-w-2xl">
            Produk
            <br />
            <span className="text-warm-gray">stainless steel kami.</span>
          </h1>
          <p className="text-warm-gray text-lg leading-relaxed max-w-md mt-6">
            Semua produk dapat di-custom sesuai ukuran dan kebutuhan dapur Anda.
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

      {/* Products grid */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((product) => (
              <div
                key={product.title}
                className="group bg-cream-dark rounded-sm overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-6">
                  <span className="text-xs uppercase tracking-widest text-warm-gray">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-medium mt-1 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    {product.desc}
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
