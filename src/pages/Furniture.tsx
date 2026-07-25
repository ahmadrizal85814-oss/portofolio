import { useState } from 'react'

const categories = ['Semua', 'Meja & Rak', 'Lemari & Cabinet', 'Display & Buffet', 'Custom']

const products = [
  {
    title: 'Custom Meja SS Rosegold',
    category: 'Meja & Rak',
    desc: 'Meja kerja stainless steel dengan finishing rosegold yang elegan.',
    image: '/katalog-produk-furniture/Custom.meja.ss.rosegold.png',
  },
  {
    title: 'Custom Kaki Meja Stainless Restorant',
    category: 'Custom',
    desc: 'Kaki meja stainless custom untuk kebutuhan restoran.',
    image: '/katalog-produk-furniture/custom-kaki-meja-stainless-restorant.png',
  },
  {
    title: 'Custom Kaki Meja Stainless Buat Restorant',
    category: 'Custom',
    desc: 'Pembuatan kaki meja berbahan stainless steel untuk restoran.',
    image: '/katalog-produk-furniture/custom.kaki.meja.stainless.buat.restorant.png',
  },
  {
    title: 'Custom Stainless Buat Restorant',
    category: 'Custom',
    desc: 'Fabrikasi peralatan stainless steel custom khusus restoran.',
    image: '/katalog-produk-furniture/custom.stainless.buat.restorant.png',
  },
]

export default function Furniture() {
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
            Katalog Furniture
          </p>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] max-w-2xl">
            Furniture
            <br />
            <span className="text-warm-gray">stainless steel custom.</span>
          </h1>
          <p className="text-warm-gray text-lg leading-relaxed max-w-md mt-6">
            Furniture stainless steel berkualitas tinggi, dibuat custom sesuai
            kebutuhan Anda — untuk dapur, komersial, hingga industri.
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

      {/* CTA */}
      <section className="border-t border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Butuh furniture custom?
          </h2>
          <p className="text-warm-gray mb-8 max-w-md mx-auto">
            Kami menerima pesanan furniture stainless steel sesuai desain dan
            ukuran yang Anda inginkan.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-charcoal text-cream text-sm tracking-wide hover:bg-charcoal-light transition-colors"
          >
            Konsultasi sekarang
          </a>
        </div>
      </section>
    </>
  )
}
