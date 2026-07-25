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
                Stainless Steel & Konstruksi Baja
              </p>
              <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-8">
                Solusi
                <br />
                stainless steel
                <br />
                <span className="text-warm-gray">& konstruksi baja.</span>
              </h1>
              <p className="text-warm-gray text-lg leading-relaxed max-w-md mb-10">
                Kami merancang dan memproduksi peralatan dapur, furniture stainless steel,
                serta menangani proyek struktur baja — gudang, kanopi, railing, dan lainnya.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center px-6 py-3 bg-charcoal text-cream text-sm tracking-wide hover:bg-charcoal-light transition-colors"
                >
                  Lihat katalog
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
                src="/Display/pemasangan-kitchen-custom.png"
                alt="Bina Sekawan Engineering Kitchen Equipment"
                className="w-full aspect-[6/7] object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="border-t border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-widest text-warm-gray mb-2">
            Layanan kami
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16">
            Apa yang kami kerjakan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Display Produk',
                desc: 'Tampilan display dari proyek-proyek kitchen stainless steel kami yang telah selesai dikerjakan.',
                to: '/display',
                image: '/Display/pemasangan-kitchen-custom.png',
              },
              {
                title: 'Kitchen Equipment',
                desc: 'Peralatan dapur stainless steel komersial — kompor, hood exhaust, meja kerja, rak, stockpot, dan lainnya.',
                to: '/products',
                image: '/katalog-produk-kitchenset/Stove.4Burner.png',
              },
              {
                title: 'Furniture Stainless',
                desc: 'Furniture stainless steel custom — meja, rak, lemari, buffet counter, display showcase, dan troli.',
                to: '/furniture',
                image: '/katalog-produk-furniture/Custom.meja.ss.rosegold.png',
              },
              {
                title: 'Proyek Baja',
                desc: 'Gudang baja, kanopi, mezzanine, railing tangga, dan berbagai proyek konstruksi struktur baja.',
                to: '/steel-projects',
                image: '/prooyek-bajaa/Pembuatan.kanopi.kaca.png',
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group bg-cream-dark rounded-sm overflow-hidden hover:opacity-90 transition-opacity"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-warm-gray leading-relaxed mb-3">
                    {item.desc}
                  </p>
                  <span className="text-sm text-charcoal group-hover:underline">
                    Lihat katalog &rarr;
                  </span>
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
                desc: 'Setiap produk dan proyek dibuat sesuai kebutuhan dan spesifikasi Anda.',
              },
              {
                title: 'Material Premium',
                desc: 'Stainless steel food-grade dan material baja berkualitas tinggi yang tahan lama.',
              },
              {
                title: 'Garansi & Servis',
                desc: 'Garansi konstruksi dan layanan purna jual terpercaya untuk setiap proyek.',
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
