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
            Ahli di bidang
            <br />
            <span className="text-warm-gray">stainless steel.</span>
          </h1>
        </div>
      </section>

      {/* Workshop image */}
      <section className="border-b border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <img
            src="https://placehold.co/1200x500/1C1C1E/F7F6F3?text=Workshop+BS+Engineering"
            alt="Workshop BS Engineering"
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
                Cerita kami
              </h2>
              <p className="text-warm-gray leading-relaxed mb-4">
                BS Engineering didirikan dengan satu fokus: menyediakan
                peralatan dapur stainless steel yang kokoh, higienis, dan
                dirancang khusus untuk kebutuhan industri kuliner Indonesia.
              </p>
              <p className="text-warm-gray leading-relaxed">
                Dengan pengalaman di bidang engineering dan fabrikasi logam,
                kami memahami bahwa setiap dapur komersial membutuhkan solusi
                yang berbeda. Itulah mengapa setiap produk kami dibuat custom
                sesuai spesifikasi klien.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium tracking-tight mb-6">
                Keahlian kami
              </h2>
              <p className="text-warm-gray leading-relaxed mb-4">
                Tim kami terdiri dari engineer dan teknisi berpengalaman yang
                menguasai proses cutting, bending, welding, dan finishing
                stainless steel dengan presisi tinggi.
              </p>
              <p className="text-warm-gray leading-relaxed">
                Kami menggunakan material food-grade stainless steel 304 yang
                memenuhi standar kebersihan industri makanan, memastikan setiap
                produk aman dan tahan lama untuk penggunaan komersial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-2xl font-medium tracking-tight mb-12">
            Nilai yang kami pegang
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Kualitas',
                desc: 'Material terbaik, konstruksi presisi.',
              },
              {
                title: 'Custom',
                desc: 'Setiap produk sesuai kebutuhan Anda.',
              },
              {
                title: 'Kecepatan',
                desc: 'Tepat waktu, tanpa mengorbankan mutu.',
              },
              {
                title: 'Kepercayaan',
                desc: 'Garansi jelas, servis setelah pemasangan.',
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
