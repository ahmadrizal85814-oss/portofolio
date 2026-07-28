import { useState } from 'react'
import { getAssetUrl } from '../utils/asset'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <section className="border-b border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-widest text-warm-gray mb-4">
            Kontak
          </p>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] max-w-2xl">
            Konsultasikan
            <br />
            <span className="text-warm-gray">proyek Anda.</span>
          </h1>
          <p className="text-warm-gray text-lg leading-relaxed max-w-md mt-6">
            Hubungi kami untuk konsultasi gratis, permintaan penawaran, atau
            pertanyaan seputar kitchen equipment, furniture stainless, maupun
            proyek konstruksi baja kami.
          </p>
        </div>
      </section>

      {/* Contact form + info */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <h2 className="text-2xl font-medium tracking-tight mb-2">
                      Terima kasih!
                    </h2>
                    <p className="text-warm-gray">
                      Kami akan segera menghubungi Anda.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-warm-gray mb-2">
                      Nama
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-charcoal/20 py-2 text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-warm-gray mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-charcoal/20 py-2 text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-warm-gray mb-2">
                      Jenis proyek
                    </label>
                    <select
                      className="w-full bg-transparent border-b border-charcoal/20 py-2 text-charcoal focus:outline-none focus:border-charcoal transition-colors appearance-none"
                    >
                      <option value="">Pilih salah satu...</option>
                      <option value="kitchen">Kitchen Equipment</option>
                      <option value="furniture">Furniture Stainless Steel</option>
                      <option value="baja">Proyek Baja & Gudang</option>
                      <option value="fabrikasi">Fabrikasi Logam Custom</option>
                      <option value="desain">Desain & Engineering</option>
                      <option value="instalasi">Instalasi & Maintenance</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-warm-gray mb-2">
                      Pesan
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="w-full bg-transparent border-b border-charcoal/20 py-2 text-charcoal focus:outline-none focus:border-charcoal transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="self-start px-6 py-3 bg-charcoal text-cream text-sm tracking-wide hover:bg-charcoal-light transition-colors mt-2"
                  >
                    Kirim pesan
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-warm-gray mb-2">
                    Website / Email
                  </h3>
                  <p className="text-charcoal">BS.engineeringdpk.com</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-warm-gray mb-2">
                    Telepon / WhatsApp
                  </h3>
                  <p className="text-charcoal">082260802076</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-warm-gray mb-2">
                    Lokasi
                  </h3>
                  <p className="text-charcoal">JVV3+J43 Bina Sekawan Engineering, Jl. Akses UI, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-warm-gray mb-2">
                    Sosial & Chat
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { name: 'WhatsApp', url: 'https://wa.me/6282260802076', icon: getAssetUrl('/cikon.sosmed/icon-web/whatsap.png') },
                      { name: 'Instagram', url: 'https://www.instagram.com/bs_engineering1?igsh=MXlreWZvNDhpcmJv', icon: getAssetUrl('/cikon.sosmed/icon-web/instagram.png') },
                      { name: 'TikTok', url: 'https://www.tiktok.com/@bsedepok?_r=1&_t=ZS-97p8XPPMkHo', icon: getAssetUrl('/cikon.sosmed/icon-web/tiktok.png') },
                    ].map((s) => (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-cream-dark border border-charcoal/10 rounded-sm text-sm text-charcoal hover:border-charcoal/30 transition-all group"
                      >
                        <img
                          src={s.icon}
                          alt={s.name}
                          className="w-5 h-5 object-contain group-hover:scale-110 transition-transform"
                        />
                        <span>{s.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-cream-dark rounded-sm">
                <p className="text-sm text-warm-gray leading-relaxed">
                  Kami biasanya merespons dalam 24 jam. Untuk permintaan mendesak,
                  silakan hubungi kami langsung melalui WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
