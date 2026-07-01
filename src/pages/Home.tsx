import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <p className="text-warm-gray text-sm tracking-widest uppercase mb-6">
                Peralatan Dapur Stainless Steel
              </p>
              <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-8">
                Solusi dapur
                <br />
                komersial
                <br />
                <span className="text-warm-gray">berkualitas tinggi.</span>
              </h1>
              <p className="text-warm-gray text-lg leading-relaxed max-w-md mb-10">
                Kami merancang dan memproduksi peralatan dapur stainless steel
                custom untuk restoran, hotel, catering, dan industri kuliner.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center px-6 py-3 bg-charcoal text-cream text-sm tracking-wide hover:bg-charcoal-light transition-colors"
                >
                  Lihat produk
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-charcoal/20 text-charcoal text-sm tracking-wide hover:border-charcoal/50 transition-colors"
                >
                  Konsultasi gratis
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/pemasangan-kitchen-custom.png"
                alt="BS Engineering Kitchen Equipment"
                className="w-full aspect-[6/7] object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="border-t border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-warm-gray mb-2">
                Produk unggulan
              </p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                Produk populer
              </h2>
            </div>
            <Link
              to="/products"
              className="text-sm text-warm-gray hover:text-charcoal transition-colors hidden sm:block"
            >
              Lihat semua &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Komersial Combi Oven',
                category: 'Peralatan Masak',
                image: '/pemasangan-kitchen-sesuai-request.jpeg',
              },
              {
                title: 'Prep Table Custom',
                category: 'Meja Kerja',
                image: '/pemasangan-kitchen-sesuai-ruangan.png',
              },
            ].map((project) => (
              <Link
                key={project.title}
                to="/products"
                className="group block bg-cream-dark rounded-sm overflow-hidden hover:opacity-90 transition-opacity"
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
                  <h3 className="text-2xl font-medium mt-1">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-widest text-warm-gray mb-2">
            Keunggulan kami
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16">
            Mengapa memilih kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Fabrication',
                desc: 'Setiap produk dibuat sesuai kebutuhan dapur Anda.',
              },
              {
                title: 'Material Premium',
                desc: 'Stainless steel food-grade 304 yang tahan karat dan higienis.',
              },
              {
                title: 'Garansi & Servis',
                desc: 'Garansi konstruksi dan layanan purna jual terpercaya.',
              },
            ].map((item) => (
              <div key={item.title} className="group">
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="inline-block mt-10 text-sm text-warm-gray hover:text-charcoal transition-colors"
          >
            Pelajari lebih lanjut tentang kami &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
