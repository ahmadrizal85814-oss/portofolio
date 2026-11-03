import { Link } from 'react-router-dom'
import { getAssetUrl } from '../utils/asset'

export default function Home() {
  return (
    <>
      {/* Hero Section (Optimized for Mobile & Tablet) */}
      <section className="bg-cream relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal/5 rounded-full text-[11px] sm:text-xs uppercase tracking-widest text-warm-gray mb-4 sm:mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Workshop Fabrikasi Logam & Engineering Depok
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-4 sm:mb-6 text-charcoal">
                Fabrikasi kitchen
                <br />
                stainless steel &
                <br />
                <span className="text-warm-gray">konstruksi baja.</span>
              </h1>

              <p className="text-warm-gray text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-6 sm:mb-8">
                Solusi kustom presisi untuk <strong>Dapur Restoran & Komersial</strong>, <strong>Kitchen Set Dapur Konvensional Residensial</strong>, furniture stainless, hingga proyek struktur baja berstandar engineering tinggi.
              </p>

              {/* Action Buttons (Full width on small phones) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8 sm:mb-10">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-charcoal text-cream text-xs sm:text-sm font-semibold tracking-wide hover:bg-charcoal-light active:scale-98 transition-all rounded-md shadow-xs text-center"
                >
                  Jelajahi Katalog Kitchen
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-charcoal/25 text-charcoal text-xs sm:text-sm font-semibold tracking-wide active:bg-cream-dark transition-all rounded-md text-center"
                >
                  Konsultasi Gratis &rarr;
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 sm:pt-6 border-t border-charcoal/10 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 sm:gap-6 text-xs text-warm-gray">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>SUS 304 Food Grade</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Custom Ukuran</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>100% Anti Rayap</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Garansi Resmi</span>
                </div>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative rounded-xl overflow-hidden border border-charcoal/10 shadow-lg bg-cream-dark group">
                <img
                  src={getAssetUrl('/Display/pemasangan-kitchen-custom.png')}
                  alt="Kitchen Equipment Stainless Steel BSE"
                  className="w-full aspect-[16/11] sm:aspect-[4/3] lg:aspect-[4/5] object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-6 text-cream">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-cream/70 mb-1">
                    Proyek Pemasangan Selesai
                  </span>
                  <h3 className="text-base sm:text-lg font-medium">Commercial Kitchen & Exhaust System</h3>
                  <p className="text-[11px] sm:text-xs text-cream/80 mt-1">Dikerjakan presisi dengan material SUS 304 anti karat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Kitchen Showcase: Dapur Resto vs Dapur Konvensional */}
      <section className="border-t border-charcoal/5 bg-cream-dark/60 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-3">
            <div>
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-warm-gray mb-1">
                Pilihan Spesialisasi Kami
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-charcoal">
                Dapur Resto & Dapur Konvensional
              </h2>
            </div>
            <Link
              to="/products"
              className="text-xs sm:text-sm font-semibold text-charcoal hover:underline flex items-center gap-1"
            >
              <span>Lihat semua kitchen equipment</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            {/* Dapur Resto Banner */}
            <div className="bg-cream rounded-xl p-5 sm:p-7 md:p-8 border border-charcoal/10 shadow-xs flex flex-col justify-between hover:border-charcoal/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 bg-charcoal text-cream text-[10px] font-semibold tracking-wider uppercase rounded-xs">
                    Komersial & Restoran
                  </span>
                  <span className="text-2xl">🍳</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-charcoal tracking-tight mb-2">
                  Dapur Resto & Komersial
                </h3>
                <p className="text-xs sm:text-sm text-warm-gray leading-relaxed mb-5">
                  Dirancang khusus untuk ritme kerja cepat dengan kapasitas besar. Menggunakan burner bertekanan tinggi (kwali range, noodle cooker, 4-burner), sistem saringan exhaust canopy terpadu, dan konstruksi kokoh standar kuliner profesional.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-charcoal/85 mb-6 bg-cream-dark/60 p-3.5 rounded-lg">
                  <div>• Kwali Range High Pressure</div>
                  <div>• Canopy Exhaust & Ducting</div>
                  <div>• Stockpot Otomatis Mixer</div>
                  <div>• Double Sink Pot Wash</div>
                </div>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-charcoal text-cream text-xs font-semibold rounded-md hover:bg-charcoal-light active:scale-98 transition-all min-h-[44px]"
              >
                <span>Buka Katalog Dapur Resto</span>
                <span>&rarr;</span>
              </Link>
            </div>

            {/* Dapur Konvensional Banner */}
            <div className="bg-cream rounded-xl p-5 sm:p-7 md:p-8 border border-charcoal/10 shadow-xs flex flex-col justify-between hover:border-charcoal/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 bg-amber-900 text-cream text-[10px] font-semibold tracking-wider uppercase rounded-xs">
                    Residensial & Mewah
                  </span>
                  <span className="text-2xl">🏡</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-charcoal tracking-tight mb-2">
                  Dapur Konvensional & Residensial
                </h3>
                <p className="text-xs sm:text-sm text-warm-gray leading-relaxed mb-5">
                  Solusi kitchen set stainless steel modern untuk rumah tinggal, villa, dan pantry kantor. Bebas dari masalah rayap, jamur, atau kayu lapuk. Finishing estetik mewah dengan peredam suara ramah hunian keluarga.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-charcoal/85 mb-6 bg-cream-dark/60 p-3.5 rounded-lg">
                  <div>• Kitchen Set Anti Rayap</div>
                  <div>• Single Sink Jumbo Bowl</div>
                  <div>• Kitchen Island Stainless</div>
                  <div>• Slim Canopy Low Noise</div>
                </div>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-amber-900 text-cream text-xs font-semibold rounded-md hover:bg-amber-950 active:scale-98 transition-all min-h-[44px]"
              >
                <span>Buka Katalog Dapur Konvensional</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Tablet 2x2, Mobile 1-col) */}
      <section className="border-t border-charcoal/5 bg-cream py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-[11px] sm:text-xs uppercase tracking-widest text-warm-gray mb-1">
            Layanan Utama
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-8 sm:mb-12 text-charcoal">
            Solusi yang kami kerjakan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: 'Display Proyek',
                desc: 'Galeri dokumentasi instalasi kitchen equipment dan kitchen set yang telah rampung kami kerjakan.',
                to: '/display',
                image: getAssetUrl('/Display/pemasangan-kitchen-custom.png'),
                tag: 'Galeri Lapangan',
              },
              {
                title: 'Kitchen Equipment',
                desc: 'Peralatan dapur stainless steel — kompor resto, meja prep, sink, hood exhaust, dan stockpot.',
                to: '/products',
                image: getAssetUrl('/katalog-produk-kitchenset/Stove.4Burner.png'),
                tag: 'Resto & Konvensional',
              },
              {
                title: 'Furniture Stainless',
                desc: 'Furniture custom seperti meja makan, rak display, lemari steril, dan partisi dekoratif.',
                to: '/furniture',
                image: getAssetUrl('/katalog-produk-furniture/Custom.meja.ss.rosegold.png'),
                tag: 'Custom Finishing',
              },
              {
                title: 'Proyek Baja',
                desc: 'Konstruksi gudang WF, kanopi kaca tempered, mezzanine, railing tangga, dan instalasi industri.',
                to: '/steel-projects',
                image: getAssetUrl('/prooyek-bajaa/Pembuatan.kanopi.kaca.png'),
                tag: 'Struktur & Kanopi',
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group bg-cream-dark/60 rounded-xl overflow-hidden border border-charcoal/10 hover:border-charcoal/30 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-cream">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-charcoal/80 text-cream text-[10px] uppercase font-semibold rounded-xs">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-semibold mb-1.5 text-charcoal">{item.title}</h3>
                    <p className="text-xs text-warm-gray leading-relaxed mb-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                  <span className="text-xs font-semibold text-charcoal group-hover:underline flex items-center gap-1">
                    Lihat katalog &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="border-t border-charcoal/5 bg-cream-dark/40 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-[11px] sm:text-xs uppercase tracking-widest text-warm-gray mb-1">
            Nilai & Dedikasi
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-8 sm:mb-12 text-charcoal">
            Mengapa memilih Bina Sekawan Engineering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                step: '01',
                title: 'Fabrikasi Presisi & In-House',
                desc: 'Semua proses pemotongan, penekukan (bending), pengelasan (TIG/MIG welding), hingga finishing diproduksi di workshop kami sendiri dengan quality control ketat.',
              },
              {
                step: '02',
                title: 'Material Food-Grade Asli (SUS 304)',
                desc: 'Kami menggunakan material stainless steel bersertifikasi food-grade yang tahan korosi garam dan asam masakan, menjamin keamanan higienitas pangan Anda.',
              },
              {
                step: '03',
                title: 'Garansi & Layanan Purna Jual',
                desc: 'Dukungan teknisi langsung, perawatan berkala, serta ketersediaan suku cadang burner dan blower tanpa perantara yang berbelit-belit.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-cream p-5 sm:p-7 rounded-xl border border-charcoal/10 shadow-xs">
                <span className="text-xs font-mono font-semibold text-warm-gray">{item.step}</span>
                <h3 className="text-base sm:text-lg font-semibold my-2 text-charcoal">{item.title}</h3>
                <p className="text-xs sm:text-sm text-warm-gray leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-charcoal hover:underline"
            >
              <span>Pelajari profil lengkap dan workshop kami</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
