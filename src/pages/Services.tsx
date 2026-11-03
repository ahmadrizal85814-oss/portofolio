import { Link } from 'react-router-dom'
import { trackWaClick } from '../utils/tracker'

const services = [
  {
    title: 'Dapur Restoran & Komersial',
    tag: 'Commercial Heavy-Duty',
    desc: 'Fabrikasi komplit peralatan dapur restoran, cafe, hotel, dan catering. Dari Kwali Range api kencang, kompor 4 burner, stockpot kuah, noodle cooker, canopy exhaust hood, hingga meja persiapan potong bahan.',
    items: ['Kwali Range Chinese / Asian Food', 'Canopy Exhaust & Ducting Blower', 'Noodle Cooker & Stockpot Otomatis', 'Double Sink Heavy Duty Pots & Pans', 'Gastronorm & Bain Marie Buffet'],
  },
  {
    title: 'Dapur Konvensional & Residensial',
    tag: 'Residential & Luxury',
    desc: 'Solusi kitchen set stainless steel custom bebas rayap seumur hidup untuk rumah tinggal, villa, dan pantry kantor modern. Menggantikan material kayu/multiplek dengan plat SUS 304 food-grade yang higienis dan elegan.',
    items: ['Kitchen Set Stainless Anti Rayap & Lembap', 'Single Sink Big Bowl Minimalis', 'Kitchen Island Stainless Multifungsi', 'Slimline Cooker Hood Low Noise', 'Top Table Seamless Hairline Finish'],
  },
  {
    title: 'Furniture Stainless Steel Custom',
    tag: 'Interior & Architectural',
    desc: 'Furniture custom berstandar tinggi untuk kebutuhan display, restoran, perhotelan, dan rumah sakit. Tersedia pilihan finishing Hairline Satin, Mirror Polish, hingga PVD Rosegold mewah.',
    items: ['Meja Makan & Display SS Rosegold', 'Kaki Meja Restoran Heavy Duty', 'Rak Dinding & Lemari Penyimpanan', 'Trolley Makanan & Servis Medis', 'Partisi Stainless Dekoratif'],
  },
  {
    title: 'Konstruksi & Struktur Baja',
    tag: 'Structural Engineering',
    desc: 'Pembangunan struktur baja WF dan H-Beam untuk gudang logistik, pabrik, mezzanine tambahan ruangan, serta kanopi tempered glass anti karat dan tahan cuaca ekstrem.',
    items: ['Gudang Baja WF & H-Beam Standar SNI', 'Kanopi Kaca Tempered & Carport Mewah', 'Lantai Mezzanine Pabrik & Kantor', 'Railing Tangga & Balkon Stainless', 'Portal Gerbang Industri'],
  },
  {
    title: 'Desain 2D/3D & Konsultasi Layout',
    tag: 'Engineering Design',
    desc: 'Bantuan perencanaan alur kerja dapur (kitchen workflow) agar efisien, tidak saling bertubrukan, dan memenuhi regulasi sanitasi keamanan pangan sebelum masuk proses fabrikasi.',
    items: ['Survei Pengukuran On-Site', 'Layout Workflow Planning', 'Visualisasi 3D Kitchen Equipment', 'RAB (Rencana Anggaran Biaya) Transparan'],
  },
]

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-charcoal/5 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal/5 rounded-full text-[11px] sm:text-xs uppercase tracking-widest text-warm-gray mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Layanan End-to-End Fabrikasi
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.12] max-w-2xl text-charcoal">
            Solusi lengkap
            <br />
            <span className="text-warm-gray">stainless steel & konstruksi baja.</span>
          </h1>
          <p className="text-warm-gray text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mt-3 sm:mt-5">
            Dari dapur resto komersial, kitchen set residensial anti rayap, furniture interior, hingga konstruksi struktur baja — kami tangani mulai dari desain, fabrikasi workshop, hingga instalasi di lokasi.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="border-b border-charcoal/5 bg-cream">
        {services.map((service, i) => (
          <div
            key={service.title}
            className={`border-b border-charcoal/8 ${
              i === services.length - 1 ? 'border-b-0' : ''
            }`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">
                <div className="lg:col-span-4">
                  <span className="inline-block px-2.5 py-0.5 bg-charcoal/5 text-charcoal text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold rounded mb-2">
                    {service.tag}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-charcoal">
                    {service.title}
                  </h2>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-warm-gray leading-relaxed text-xs sm:text-sm md:text-base">
                    {service.desc}
                  </p>
                </div>
                <div className="lg:col-span-3 bg-cream-dark/60 p-4 sm:p-5 rounded-xl border border-charcoal/5">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-charcoal mb-2.5">
                    Cakupan Produk:
                  </p>
                  <ul className="flex flex-col gap-1.5 sm:gap-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-charcoal/80 flex items-start gap-2"
                      >
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process Section (Tablet 2x2, Mobile 1-col) */}
      <section className="border-b border-charcoal/5 bg-cream-dark/50 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-warm-gray mb-1.5 block">
              Standar Operasional
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-charcoal">
              Alur kerja terpadu kami
            </h2>
            <p className="text-warm-gray text-xs sm:text-sm mt-2">
              Memastikan setiap proyek selesai tepat waktu dan sesuai spesifikasi teknis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                step: '01',
                title: 'Konsultasi & Survei',
                desc: 'Kami mendiskusikan kebutuhan Anda, melakukan survei pengukuran ruangan langsung di lokasi, serta menghitung estimasi alur kerja (workflow).',
              },
              {
                step: '02',
                title: 'Desain 2D/3D & RAB',
                desc: 'Tim engineer membuat gambar kerja presisi dengan spesifikasi ketebalan material dan penawaran biaya yang transparan tanpa biaya tersembunyi.',
              },
              {
                step: '03',
                title: 'Fabrikasi Workshop',
                desc: 'Proses pemotongan, bending CNC, pengelasan TIG/MIG, dan finishing satin/hairline dilakukan oleh teknisi berpengalaman di workshop kami.',
              },
              {
                step: '04',
                title: 'Instalasi & Uji Coba',
                desc: 'Pengiriman unit ke lokasi, pemasangan sambungan ducting gas/air, uji nyala kompor dan sistem blower, serta serah terima bergaransi.',
              },
            ].map((phase) => (
              <div key={phase.step} className="bg-cream p-5 sm:p-6 rounded-xl border border-charcoal/10 shadow-xs">
                <span className="text-[11px] font-mono font-bold text-warm-gray px-2 py-0.5 bg-charcoal/5 rounded">
                  LANGKAH {phase.step}
                </span>
                <h3 className="text-base font-semibold mt-3 mb-1.5 text-charcoal">
                  {phase.title}
                </h3>
                <p className="text-xs text-warm-gray leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Catalog Cards */}
      <section className="border-b border-charcoal/5 bg-cream py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-12 gap-3">
            <div>
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-warm-gray mb-1">Katalog Produk</p>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-charcoal">
                Jelajahi portofolio kami
              </h2>
            </div>
            <Link to="/products" className="text-xs font-semibold text-charcoal hover:underline">
              Buka Semua Katalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: 'Kitchen Equipment',
                badge: 'Resto & Konvensional',
                desc: 'Peralatan dapur stainless steel komersial dan kitchen set residensial bebas rayap.',
                to: '/products',
              },
              {
                title: 'Furniture Stainless',
                badge: 'Custom Finishing',
                desc: 'Furniture custom seperti meja rosegold, kaki meja cafe, dan rak komersial.',
                to: '/furniture',
              },
              {
                title: 'Proyek Baja',
                badge: 'WF & Kanopi',
                desc: 'Gudang rangka baja WF, kanopi kaca tempered, dan instalasi exhaust ducting pabrik.',
                to: '/steel-projects',
              },
            ].map((cat) => (
              <Link
                key={cat.to}
                to={cat.to}
                className="group bg-cream-dark/60 rounded-xl p-5 sm:p-6 border border-charcoal/10 hover:border-charcoal/30 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 bg-charcoal/10 text-charcoal rounded">
                    {cat.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-medium mt-2.5 mb-1.5 text-charcoal">{cat.title}</h3>
                  <p className="text-xs text-warm-gray leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                </div>
                <span className="text-xs font-semibold text-charcoal group-hover:underline flex items-center gap-1">
                  Lihat katalog &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-3 text-charcoal">
            Butuh estimasi harga atau layout dapur custom?
          </h2>
          <p className="text-warm-gray mb-6 sm:mb-8 max-w-md mx-auto text-xs sm:text-sm md:text-base">
            Konsultasikan ukuran ruangan dan jenis usaha kuliner atau hunian Anda secara gratis bersama tim teknis kami.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-charcoal text-cream text-xs sm:text-sm font-medium tracking-wide hover:bg-charcoal-light active:scale-98 transition-all rounded-md"
            >
              Mulai Konsultasi Gratis
            </Link>
            <a
              href="https://wa.me/6282260802076?text=Halo%20Bina%20Sekawan%20Engineering,%20saya%20ingin%20konsultasi%20layanan%20kitchen/baja."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWaClick({
                  sourcePage: '/services',
                  productName: 'Konsultasi Layanan Kitchen & Baja (CTA)',
                  category: 'Layanan Pabrikasi'
                })
              }
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-charcoal/20 text-charcoal text-xs sm:text-sm font-medium tracking-wide active:bg-cream-dark transition-all rounded-md"
            >
              <span>WhatsApp Cepat</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
