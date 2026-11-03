import { Link } from 'react-router-dom'
import { getAssetUrl } from '../utils/asset'

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-charcoal/5 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal/5 rounded-full text-[11px] sm:text-xs uppercase tracking-widest text-warm-gray mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Profil Perusahaan
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.12] max-w-2xl text-charcoal">
            Lebih dari sekadar
            <br />
            <span className="text-warm-gray">fabrikasi stainless steel.</span>
          </h1>
          <p className="text-warm-gray text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mt-3 sm:mt-5">
            Bina Sekawan Engineering adalah mitra engineering terpercaya yang mengkhususkan diri pada peralatan dapur komersial, kitchen set residensial anti rayap, furniture logam, dan konstruksi struktur baja.
          </p>
        </div>
      </section>

      {/* Workshop Image Banner */}
      <section className="border-b border-charcoal/5 bg-cream-dark/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
          <div className="relative rounded-xl overflow-hidden border border-charcoal/10 shadow-lg">
            <img
              src={getAssetUrl('/Display/pemasangan-kitchen-custom.png')}
              alt="Workshop Bina Sekawan Engineering"
              className="w-full aspect-[16/10] sm:aspect-[16/8] md:aspect-[21/9] object-cover"
              onError={(e) => {
                e.currentTarget.src = getAssetUrl('/Display/pemasangan-kitchen-sesuai-request.jpeg')
              }}
            />
            <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-charcoal/85 backdrop-blur-md text-cream px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-[11px] sm:text-xs md:text-sm">
              📍 Workshop & Kantor: Jl. Akses UI, Tugu, Cimanggis, Kota Depok
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-charcoal/5 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
            <div>
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-warm-gray mb-1.5">Sejarah & Visi</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 text-charcoal">
                Tentang Bina Sekawan Engineering
              </h2>
              <p className="text-warm-gray leading-relaxed mb-3 text-xs sm:text-sm md:text-base">
                Bina Sekawan Engineering (BSE) didirikan dengan komitmen memberikan solusi engineering dan fabrikasi logam yang presisi, tahan lama, dan berestetika tinggi. Kami melayani beragam segmen pasar: dari pebisnis kuliner (restoran, cafe, bakery, cloud kitchen), pemilik hunian pribadi yang menginginkan dapur stainless higienis bebas rayap, hingga pengembang properti dan sektor industri.
              </p>
              <p className="text-warm-gray leading-relaxed text-xs sm:text-sm md:text-base">
                Dengan pengalaman teknis bertahun-tahun, kami memegang teguh standar bahwa setiap proyek memiliki tantangan unik. Oleh karena itu, kami tidak menjual produk massal murahan — setiap unit kami buat custom sesuai kebutuhan ukuran ruangan dan karakter operasional Anda.
              </p>
            </div>
            <div>
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-warm-gray mb-1.5">Keunggulan Workshop</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 text-charcoal">
                Kapabilitas Fabrikasi Terpadu
              </h2>
              <p className="text-warm-gray leading-relaxed mb-3 text-xs sm:text-sm md:text-base">
                Workshop kami dilengkapi dengan peralatan pemotongan presisi, bending plate, pengelasan TIG/Argon stainless steel, serta teknisi ahli finishing hairline dan mirror. Kami menjamin sambungan las mulus dan bebas celah kotoran, sesuai dengan standar higienitas food-safety.
              </p>
              <p className="text-warm-gray leading-relaxed text-xs sm:text-sm md:text-base">
                Selain kitchen equipment, kami juga memiliki tim konstruksi bersertifikasi untuk proyek struktur baja WF, pembangunan gudang penyimpanan, kanopi kaca tempered, dan mezzanine industri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bidang Keahlian (Tablet 2x2 or 3x, Mobile 1-col) */}
      <section className="border-b border-charcoal/5 bg-cream-dark/40 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8 sm:mb-12">
            <p className="text-[11px] sm:text-xs uppercase tracking-widest text-warm-gray mb-1">Kompetensi Inti</p>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-charcoal">
              Bidang keahlian kami
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: 'Dapur Restoran & Komersial',
                desc: 'Kompor Kwali Range high-pressure, noodle cooker, stockpot kuah otomatis, hood exhaust grease filter, dan sink cuci pot tebal.',
              },
              {
                title: 'Dapur Konvensional Residensial',
                desc: 'Kitchen set hunian full stainless SUS 304 tahan air dan 100% anti rayap, single sink jumbo, serta kitchen island keluarga yang mewah.',
              },
              {
                title: 'Furniture Stainless Steel',
                desc: 'Meja display, finishing Rosegold/Mirror, kaki meja cafe heavy duty, rak bumbu, dan lemari stainless laboratorium/klinik.',
              },
              {
                title: 'Konstruksi & Struktur Baja',
                desc: 'Rangka gudang WF dan H-Beam, kanopi tempered glass, railing tangga minimalis, serta mezzanine multifungsi.',
              },
              {
                title: 'Desain Layout & Gambar 3D',
                desc: 'Perencanaan tata letak dapur yang ergonomis untuk menghemat waktu gerak koki dan mencegah kemacetan kerja di jam sibuk.',
              },
              {
                title: 'Instalasi & Garansi Resmi',
                desc: 'Pemasangan langsung oleh teknisi kami, uji fungsi pembakaran burner, serta jaminan purna jual terpercaya.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-cream p-5 sm:p-6 rounded-xl border border-charcoal/10 shadow-xs">
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-charcoal">{item.title}</h3>
                <p className="text-xs sm:text-sm text-warm-gray leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers & Stats (2x2 on Mobile & Tablet) */}
      <section className="bg-cream py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {[
              { num: '200+', label: 'Proyek Selesai Dikerjakan' },
              { num: '10+', label: 'Tahun Pengalaman Engineering' },
              { num: '150+', label: 'Klien Resto & Hunian Aktif' },
              { num: '100%', label: 'Material Food Grade Asli' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 sm:p-6 bg-cream-dark/60 rounded-xl border border-charcoal/10 text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-1 text-charcoal">
                  {stat.num}
                </p>
                <p className="text-[10px] sm:text-xs text-warm-gray uppercase tracking-wider font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-charcoal text-cream text-xs sm:text-sm font-semibold tracking-wide hover:bg-charcoal-light active:scale-98 transition-all rounded-md"
            >
              Mulai Konsultasi Dengan Tim Kami &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
