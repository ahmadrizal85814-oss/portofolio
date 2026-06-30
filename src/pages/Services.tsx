import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Fabrikasi Custom',
    desc: 'Kami memproduksi peralatan dapur stainless steel sesuai ukuran dan spesifikasi Anda. Dari meja kerja, rak, hingga hood exhaust — semua dibuat presisi di workshop kami.',
    items: ['Meja Kerja Custom', 'Rak Display', 'Hood Exhaust', 'Grease Trap'],
  },
  {
    title: 'Peralatan Masak',
    desc: 'Menyediakan berbagai peralatan masak komersial stainless steel berkualitas tinggi. Kompor industrial, oven, fryer, dan peralatan masak berat lainnya.',
    items: ['Kompor Industrial', 'Oven & Bake', 'Deep Fryer', 'Stock Pot'],
  },
  {
    title: 'Desain Layout Dapur',
    desc: 'Tim kami membantu merancang layout dapur komersial yang efisien, memenuhi standar higiene, dan mengoptimalkan alur kerja dapur Anda.',
    items: ['Layout Planning', '3D Visualization', 'Workflow Analysis', 'HACCP Compliance'],
  },
  {
    title: 'Instalasi & Servis',
    desc: 'Layanan pemasangan profesional dan maintenance berkala. Kami juga menyediakan perbaikan dan penggantian komponen untuk peralatan yang sudah ada.',
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
            <span className="text-warm-gray">dapur komersial.</span>
          </h1>
          <p className="text-warm-gray text-lg leading-relaxed max-w-md mt-6">
            Dari desain hingga pemasangan, kami menangani seluruh kebutuhan
            dapur stainless steel Anda.
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
              { step: '01', title: 'Konsultasi', desc: 'Kami datang ke lokasi, mengukur, dan memahami kebutuhan dapur Anda.' },
              { step: '02', title: 'Desain', desc: 'Tim kami membuat desain dan gambar teknis sesuai spesifikasi.' },
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

      {/* CTA */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Butuh peralatan dapur custom?
          </h2>
          <p className="text-warm-gray mb-8">
            Konsultasikan kebutuhan Anda dengan tim kami secara gratis.
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
