import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Kitchen Equipment',
    desc: 'Fabrikasi dan penyediaan peralatan dapur stainless steel custom. Dari meja kerja, rak, hood exhaust, hingga kompor industrial — semua dibuat presisi di workshop kami.',
    items: ['Meja Kerja Custom', 'Kompor Industrial', 'Hood Exhaust', 'Rak Display', 'Stockpot & Noodle Cooker'],
  },
  {
    title: 'Furniture Stainless Steel',
    desc: 'Furniture stainless steel custom untuk berbagai kebutuhan — dapur komersial, laboratorium, rumah sakit, hotel, dan industri. Dibuat sesuai ukuran dan desain Anda.',
    items: ['Meja & Rak Stainless', 'Lemari & Cabinet', 'Buffet Counter', 'Display Showcase', 'Troli Service'],
  },
  {
    title: 'Proyek Baja & Gudang',
    desc: 'Pembangunan struktur baja termasuk gudang baja ringan, gudang WF, kanopi, mezzanine, railing tangga, dan berbagai proyek konstruksi steel lainnya.',
    items: ['Gudang Baja Ringan', 'Gudang Baja WF', 'Kanopi & Atap Baja', 'Mezzanine', 'Railing & Tangga'],
  },
  {
    title: 'Desain & Engineering',
    desc: 'Tim kami membantu merancang layout dapur komersial yang efisien, desain struktur baja, dan visualisasi 3D sebelum produksi dimulai.',
    items: ['Layout Planning', '3D Visualization', 'Structural Design', 'Workflow Analysis'],
  },
  {
    title: 'Instalasi & Servis',
    desc: 'Layanan pemasangan profesional di lokasi dan maintenance berkala. Kami juga menyediakan perbaikan dan penggantian komponen untuk peralatan yang sudah ada.',
    items: ['Instalasi On-site', 'Maintenance Berkala', 'Perbaikan', 'Spare Part'],
  },
]

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-widest text-warm-gray mb-4">
            Layanan
          </p>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] max-w-2xl">
            Solusi lengkap
            <br />
            <span className="text-warm-gray">stainless steel & baja.</span>
          </h1>
          <p className="text-warm-gray text-lg leading-relaxed max-w-md mt-6">
            Dari kitchen equipment, furniture stainless, hingga proyek
            struktur baja — kami menangani semuanya dari desain hingga pemasangan.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="border-b border-charcoal/5">
        {services.map((service, i) => (
          <div
            key={service.title}
            className={`border-b border-charcoal/5 ${
              i === services.length - 1 ? 'border-b-0' : ''
            }`}
          >
            <div className="max-w-6xl mx-auto px-6 py-16">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h2 className="text-2xl font-medium tracking-tight">
                    {service.title}
                  </h2>
                </div>
                <div className="md:col-span-5">
                  <p className="text-warm-gray leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <ul className="flex flex-col gap-1.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-charcoal/70"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="border-b border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-2xl font-medium tracking-tight mb-12">
            Alur kerja kami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Konsultasi', desc: 'Kami datang ke lokasi, mengukur, dan memahami kebutuhan Anda — baik dapur maupun proyek baja.' },
              { step: '02', title: 'Desain', desc: 'Tim engineer kami membuat desain dan gambar teknis sesuai spesifikasi.' },
              { step: '03', title: 'Fabrikasi', desc: 'Produksi di workshop dengan kontrol kualitas ketat di setiap tahap.' },
              { step: '04', title: 'Instalasi', desc: 'Pemasangan di lokasi, testing, dan serah terima unit.' },
            ].map((phase) => (
              <div key={phase.step}>
                <span className="text-xs text-warm-gray tracking-widest">
                  {phase.step}
                </span>
                <h3 className="text-base font-medium mt-2 mb-1">
                  {phase.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Links */}
      <section className="border-b border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-2xl font-medium tracking-tight mb-12">
            Jelajahi katalog kami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Kitchen Equipment', desc: 'Peralatan dapur stainless steel komersial.', to: '/products' },
              { title: 'Furniture Stainless', desc: 'Furniture stainless steel custom untuk berbagai kebutuhan.', to: '/furniture' },
              { title: 'Proyek Baja', desc: 'Gudang baja, kanopi, railing, dan struktur steel.', to: '/steel-projects' },
            ].map((cat) => (
              <Link
                key={cat.to}
                to={cat.to}
                className="group bg-cream-dark rounded-sm p-8 hover:opacity-90 transition-opacity"
              >
                <h3 className="text-lg font-medium mb-2">{cat.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <span className="text-sm text-charcoal group-hover:underline">
                  Lihat katalog &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Butuh solusi custom?
          </h2>
          <p className="text-warm-gray mb-8">
            Konsultasikan kebutuhan kitchen, furniture stainless, atau proyek baja Anda dengan tim kami secara gratis.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-charcoal text-cream text-sm tracking-wide hover:bg-charcoal-light transition-colors"
          >
            Hubungi kami sekarang
          </Link>
        </div>
      </section>
    </>
  )
}
