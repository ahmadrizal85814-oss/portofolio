export default function About() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-widest text-warm-gray mb-4">
            Tentang kami
          </p>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] max-w-2xl">
            Lebih dari sekadar
            <br />
            <span className="text-warm-gray">stainless steel.</span>
          </h1>
        </div>
      </section>

      {/* Workshop image */}
      <section className="border-b border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <img
            src="/pemasangan-kitchen-sesuai-ruangan.png"
            alt="Workshop Bina Sekawan Engineering"
            className="w-full aspect-[12/5] object-cover rounded-sm"
          />
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-medium tracking-tight mb-6">
                Tentang BSE
              </h2>
              <p className="text-warm-gray leading-relaxed mb-4">
                Bina Sekawan Engineering (BSE) adalah perusahaan yang bergerak di bidang
                fabrikasi logam dan engineering, dengan kapabilitas yang melampaui
                industri stainless steel semata. Didirikan atas dasar keahlian
                teknik yang kuat dan komitmen terhadap kualitas, BSE melayani
                berbagai kebutuhan industri — mulai dari kitchen equipment komersial,
                furniture stainless steel custom, hingga konstruksi struktur baja
                berskala besar.
              </p>
              <p className="text-warm-gray leading-relaxed">
                Dengan pengalaman bertahun-tahun di bidang engineering dan fabrikasi,
                kami memahami bahwa setiap proyek memiliki tantangan unik. Oleh karena
                itu, setiap solusi yang kami hadirkan dirancang secara custom,
                disesuaikan dengan spesifikasi dan kebutuhan spesifik klien.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium tracking-tight mb-6">
                Kapabilitas engineering kami
              </h2>
              <p className="text-warm-gray leading-relaxed mb-4">
                BSE tidak hanya terbatas pada produk stainless steel. Tim engineer
                dan teknisi kami memiliki kompetensi luas di berbagai bidang
                fabrikasi logam dan konstruksi — meliputi proses cutting, bending,
                welding, assembly, dan finishing dengan standar presisi tinggi.
              </p>
              <p className="text-warm-gray leading-relaxed">
                Kami menangani proyek-proyek beragam: dari peralatan dapur komersial,
                furniture stainless untuk rumah sakit dan hotel, gudang baja ringan
                dan WF, kanopi, mezzanine, railing tangga, hingga struktur baja
                custom untuk kebutuhan industri. Kapabilitas ini memungkinkan kami
                menjadi mitra engineering yang andal untuk berbagai skala proyek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bidang Keahlian */}
      <section className="border-b border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-2xl font-medium tracking-tight mb-12">
            Bidang keahlian kami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Kitchen Equipment',
                desc: 'Peralatan dapur komersial stainless steel — kompor industrial, hood exhaust, meja kerja, rak, stockpot, noodle cooker, dan berbagai peralatan custom lainnya.',
              },
              {
                title: 'Furniture Stainless Steel',
                desc: 'Furniture stainless steel custom untuk dapur komersial, laboratorium, rumah sakit, hotel, dan kebutuhan industri lainnya.',
              },
              {
                title: 'Konstruksi Baja',
                desc: 'Gudang baja ringan dan WF, kanopi, mezzanine, railing tangga, portal gate, serta struktur baja custom untuk berbagai keperluan.',
              },
              {
                title: 'Fabrikasi Logam',
                desc: 'Layanan fabrikasi logam umum — cutting, bending, welding, dan finishing dengan presisi tinggi sesuai spesifikasi teknis.',
              },
              {
                title: 'Desain & Engineering',
                desc: 'Perencanaan layout, desain struktural, visualisasi 3D, dan analisis teknis sebelum produksi dimulai.',
              },
              {
                title: 'Instalasi & Maintenance',
                desc: 'Pemasangan profesional di lokasi, maintenance berkala, serta layanan perbaikan dan spare part.',
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-2xl font-medium tracking-tight mb-12">
            Komitmen kami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Kualitas Terjamin',
                desc: 'Material premium dan proses fabrikasi terkontrol di setiap tahap produksi.',
              },
              {
                title: 'Solusi Custom',
                desc: 'Setiap proyek dirancang khusus sesuai kebutuhan dan spesifikasi klien.',
              },
              {
                title: 'Tepat Waktu',
                desc: 'Komitmen penyelesaian proyek sesuai jadwal tanpa mengorbankan mutu.',
              },
              {
                title: 'Kepercayaan',
                desc: 'Garansi konstruksi, transparansi proses, dan layanan purna jual yang bertanggung jawab.',
              },
            ].map((value) => (
              <div key={value.title}>
                <h3 className="text-base font-medium mb-1">{value.title}</h3>
                <p className="text-sm text-warm-gray">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '200+', label: 'Proyek selesai' },
              { num: '10+', label: 'Tahun pengalaman' },
              { num: '150+', label: 'Klien aktif' },
              { num: '50+', label: 'Jenis produk' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-medium tracking-tight mb-1">
                  {stat.num}
                </p>
                <p className="text-sm text-warm-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
