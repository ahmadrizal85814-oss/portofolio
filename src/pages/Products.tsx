import { useState } from 'react'

const categories = ['Semua', 'Kompor & Peralatan Masak', 'Sink & Washing', 'Meja & Prep', 'Rak & Storage', 'Exhaust & Ventilasi']

const products = [
  {
    title: 'Gas Flat Griled',
    category: 'Kompor & Peralatan Masak',
    desc: 'Kompor gas flat grilled dengan body stainless steel, cocok untuk grilling daging dan seafood.',
    image: '/katalog-produk-kitchenset/Gas.Flat.Griled.png',
  },
  {
    title: 'Stove 4 Burner',
    category: 'Kompor & Peralatan Masak',
    desc: 'Kompor gas 4 burner dengan api merata, material stainless steel food grade.',
    image: '/katalog-produk-kitchenset/Stove.4Burner.png',
  },
  {
    title: 'Custom Single Kwalirange Full SS',
    category: 'Kompor & Peralatan Masak',
    desc: 'Kwali range stainless steel dengan burner besar full SS, ideal untuk masakan chinese food.',
    image: '/katalog-produk-kitchenset/custom.single.Kwalirange.full.ss.png',
  },
  {
    title: 'Double Kwalieange',
    category: 'Kompor & Peralatan Masak',
    desc: 'Double kwali range 2 tungku besar, stainless steel heavy duty untuk kebutuhan komersial.',
    image: '/katalog-produk-kitchenset/Double.Kwalieange.png',
  },
  {
    title: 'Custom Single Kwalirange',
    category: 'Kompor & Peralatan Masak',
    desc: 'Single kwali range custom sesuai kebutuhan dapur, material stainless steel pilihan.',
    image: '/katalog-produk-kitchenset/custom.single.kwalirange.png',
  },
  {
    title: 'Noodle Coocker',
    category: 'Kompor & Peralatan Masak',
    desc: 'Noodle cooker gas dengan kapasitas besar, khusus untuk merebus mie dan pasta.',
    image: '/katalog-produk-kitchenset/Noodle.coocker.png',
  },
  {
    title: 'Stockpot Manual Custom',
    category: 'Kompor & Peralatan Masak',
    desc: 'Stockpot stainless steel custom untuk merebus kaldu dan sup dalam jumlah besar.',
    image: '/katalog-produk-kitchenset/stockpot.manual.custom.png',
  },
  {
    title: 'Stockpot Otomatis',
    category: 'Kompor & Peralatan Masak',
    desc: 'Stockpot otomatis dengan sistem pengadukan, memudahkan proses pemasakan kaldu.',
    image: '/katalog-produk-kitchenset/Stockpot.otomatis.png',
  },
  {
    title: 'Gasstronom',
    category: 'Kompor & Peralatan Masak',
    desc: 'Gastronom stainless steel untuk menyimpan dan menyajikan makanan di buffet line.',
    image: '/katalog-produk-kitchenset/Gasstronom.png',
  },
  {
    title: 'Single Sink Bigbowl',
    category: 'Sink & Washing',
    desc: 'Single sink big bowl stainless steel, ukuran besar untuk mencuci peralatan dapur.',
    image: '/katalog-produk-kitchenset/Single.sink.bigbowl.png',
  },
  {
    title: 'Double Sink',
    category: 'Sink & Washing',
    desc: 'Double sink stainless steel 2 kompartemen, untuk area pencucian dan pembilasan.',
    image: '/katalog-produk-kitchenset/double.sink.png',
  },
  {
    title: 'Work Table',
    category: 'Meja & Prep',
    desc: 'Meja kerja stainless steel custom ukuran sesuai kebutuhan dapur komersial.',
    image: '/katalog-produk-kitchenset/work.table.png',
  },
  {
    title: 'Work Table Solid',
    category: 'Meja & Prep',
    desc: 'Worktable stainless steel tipe solid, ideal untuk area prep dan tugas berat.',
    image: '/katalog-produk-kitchenset/work.table.solid.png',
  },
  {
    title: 'Punched Rack 4 Tiers',
    category: 'Rak & Storage',
    desc: 'Rak stainless steel 4 tingkat model punched, untuk penyimpanan peralatan dapur.',
    image: '/katalog-produk-kitchenset/Punched.rack.4tiers.png',
  },
  {
    title: 'Exhaust Wall Hood',
    category: 'Exhaust & Ventilasi',
    desc: 'Canopy hood wall exhaust custom sesuai ukuran kompor, dilengkapi filter grease dan blower.',
    image: '/katalog-produk-kitchenset/Exhaust.wall.Hood.png',
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
