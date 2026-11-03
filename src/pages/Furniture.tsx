import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAssetUrl } from '../utils/asset'

interface FurnitureItem {
  title: string
  category: string
  desc: string
  specs: string[]
  image: string
}

const categories = ['Semua', 'Meja & Rak', 'Kaki Meja & Frame', 'Custom Restoran & Cafe']

const products: FurnitureItem[] = [
  {
    title: 'Custom Meja SS Rosegold Luxury',
    category: 'Meja & Rak',
    desc: 'Meja kerja dan display berbahan stainless steel dengan finishing PVD coating Rosegold elegan. Memberikan kesan mewah untuk ruang interior cafe, butik, atau hunian.',
    specs: ['PVD Titanium Rosegold Coating', 'SUS 304 Anti Korosi', 'Rangka Kokoh Las Rapi', 'Custom Dimensi'],
    image: getAssetUrl('/katalog-produk-furniture/Custom.meja.ss.rosegold.png'),
  },
  {
    title: 'Custom Kaki Meja Stainless Restoran',
    category: 'Kaki Meja & Frame',
    desc: 'Kaki meja stainless steel model hairpin dan spider frame heavy-duty. Sangat stabil menopang marmer, kayu solid, maupun kaca untuk meja makan restoran.',
    specs: ['Heavy Gauge SS Pipe / Hollow', 'Finishing Hairline Satin / Mirror', 'Base Plate Tebal Anti Goyang', 'Bisa Custom Model'],
    image: getAssetUrl('/katalog-produk-furniture/custom-kaki-meja-stainless-restorant.png'),
  },
  {
    title: 'Kaki Meja Stainless Pedestal Cafe',
    category: 'Kaki Meja & Frame',
    desc: 'Kaki meja model pilar bulat/kotak berbahan stainless steel dengan pemberat cast-iron di bagian bawah. Cocok untuk meja cafe 2-4 kursi dengan mobilitas tinggi.',
    specs: ['Diameter Tiang Presisi', 'Piringan Bawah Stabilizer', 'Tahan Benturan & Pembersih Lantai', 'Food Grade & Higienis'],
    image: getAssetUrl('/katalog-produk-furniture/custom.kaki.meja.stainless.buat.restorant.png'),
  },
  {
    title: 'Fabrikasi Stainless Custom Khusus Resto',
    category: 'Custom Restoran & Cafe',
    desc: 'Perlengkapan furniture penunjang operasional restoran — seperti trolley saji, partisi dekoratif, rak buffet, dan lemari stainless tahan banting.',
    specs: ['Desain Fungsional Komersial', 'Roda Heavy Duty dengan Rem (untuk Trolley)', 'Sambungan Las Halus & Kuat', 'Garansi Pabrikasi'],
    image: getAssetUrl('/katalog-produk-furniture/custom.stainless.buat.restorant.png'),
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
      <section className="border-b border-charcoal/5 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal/5 rounded-full text-[11px] sm:text-xs uppercase tracking-widest text-warm-gray mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Fabrikasi Furniture Logam
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.12] max-w-2xl text-charcoal">
            Furniture
            <br />
            <span className="text-warm-gray">stainless steel custom.</span>
          </h1>
          <p className="text-warm-gray text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mt-3 sm:mt-5">
            Dari meja makan mewah rosegold, kaki meja restoran, hingga rak display komersial. Kami mewujudkan rancangan arsitek dan interior desainer dengan presisi tinggi.
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

      {/* Products Grid (1 Col Phone, 2 Col Tablet, 3 Col Desktop) */}
      <section className="bg-cream py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {filtered.map((product) => (
              <div
                key={product.title}
                className="group bg-cream-dark/60 rounded-xl overflow-hidden border border-charcoal/10 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[4/3] bg-charcoal/5 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 bg-charcoal/80 text-cream text-[10px] font-semibold tracking-wider uppercase rounded-xs backdrop-blur-xs">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-lg sm:text-xl font-medium mb-1.5 text-charcoal">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-warm-gray leading-relaxed mb-4">
                      {product.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-charcoal/5">
                      {product.specs.map((spec) => (
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
                      `Halo Bina Sekawan Engineering, saya ingin tanya harga dan spesifikasi untuk furniture "${product.title}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 bg-charcoal text-cream text-xs font-semibold rounded-md hover:bg-charcoal-light active:scale-98 transition-all min-h-[42px]"
                  >
                    <span>Pesan / Tanya via WA</span>
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
            Punya sketsa atau desain furniture sendiri?
          </h2>
          <p className="text-warm-gray mb-6 sm:mb-8 max-w-md mx-auto text-xs sm:text-sm md:text-base">
            Kirimkan gambar 2D/3D atau referensi foto Anda. Kami bantu buatkan mock-up dan estimasi biaya fabrikasi.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-charcoal text-cream text-xs sm:text-sm font-medium tracking-wide hover:bg-charcoal-light active:scale-98 transition-all rounded-md"
            >
              Kirim Desain Anda
            </Link>
            <a
              href="https://wa.me/6282260802076?text=Halo%20Bina%20Sekawan%20Engineering,%20saya%20punya%20desain%20furniture%20custom%20yang%20ingin%20dibuatkan."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-charcoal/20 text-charcoal text-xs sm:text-sm font-medium tracking-wide active:bg-cream-dark transition-all rounded-md"
            >
              <span>Diskusi via WhatsApp</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
