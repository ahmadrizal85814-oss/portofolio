import { useState } from 'react'
import { getAssetUrl } from '../utils/asset'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project_type: 'Dapur Restoran & Komersial',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo Bina Sekawan Engineering, perkenalkan saya ${formData.name || 'Klien'}.\nSaya ingin konsultasi mengenai:\n- Kategori: ${formData.project_type}\n- Kontak: ${formData.phone || formData.email || '-'}\n- Detail Kebutuhan: ${formData.message || 'Mohon info produk dan jadwal survei lokasi.'}`
    )
    window.open(`https://wa.me/6282260802076?text=${text}`, '_blank')
  }

  return (
    <>
      {/* Header */}
      <section className="border-b border-charcoal/5 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal/5 rounded-full text-[11px] sm:text-xs uppercase tracking-widest text-warm-gray mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Layanan Konsultasi & Penawaran
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.12] max-w-2xl text-charcoal">
            Konsultasikan
            <br />
            <span className="text-warm-gray">proyek Anda sekarang.</span>
          </h1>
          <p className="text-warm-gray text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mt-3 sm:mt-5">
            Hubungi tim teknis kami untuk konsultasi gratis, permintaan gambar desain, estimasi biaya, atau jadwal survei lokasi dapur dan konstruksi baja Anda.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Grid */}
      <section className="bg-cream py-10 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-cream-dark/60 p-5 sm:p-8 md:p-10 rounded-xl border border-charcoal/10 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-1 text-charcoal">
                Kirim Pesan atau Request Penawaran
              </h2>
              <p className="text-xs text-warm-gray mb-6 sm:mb-8">
                Isi form di bawah ini dan kami akan segera merespons Anda.
              </p>

              {submitted ? (
                <div className="py-10 text-center bg-cream rounded-xl p-6 sm:p-8 border border-charcoal/10">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xl mx-auto mb-3">
                    ✓
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight mb-2 text-charcoal">
                    Pesan Berhasil Terkirim!
                  </h3>
                  <p className="text-warm-gray text-xs sm:text-sm max-w-md mx-auto mb-6">
                    Terima kasih telah menghubungi Bina Sekawan Engineering. Tim kami akan segera meninjau pesan Anda dan menghubungi nomor atau email yang tertera.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-charcoal text-cream text-xs font-semibold rounded-md hover:bg-charcoal-light"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                        Nama Lengkap *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Budi Santoso"
                        className="w-full bg-cream border border-charcoal/20 rounded-md px-3.5 py-2.5 text-base sm:text-sm text-charcoal focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                        Nomor WhatsApp / HP *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Contoh: 08123456789"
                        className="w-full bg-cream border border-charcoal/20 rounded-md px-3.5 py-2.5 text-base sm:text-sm text-charcoal focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@email.com"
                      className="w-full bg-cream border border-charcoal/20 rounded-md px-3.5 py-2.5 text-base sm:text-sm text-charcoal focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-project-type" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                      Kategori Kebutuhan *
                    </label>
                    <select
                      id="contact-project-type"
                      name="project_type"
                      value={formData.project_type}
                      onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                      className="w-full bg-cream border border-charcoal/20 rounded-md px-3.5 py-2.5 text-base sm:text-sm text-charcoal focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all"
                    >
                      <option value="Dapur Restoran & Komersial">Dapur Restoran & Komersial (Heavy Duty / Resto)</option>
                      <option value="Dapur Konvensional / Residensial">Dapur Konvensional & Residensial (Kitchen Set Rumah Bebas Rayap)</option>
                      <option value="Furniture Stainless Steel Custom">Furniture Stainless Steel Custom</option>
                      <option value="Proyek Konstruksi & Rangka Baja">Proyek Konstruksi Baja & Gudang / Kanopi</option>
                      <option value="Sistem Exhaust & Ducting Blower">Sistem Exhaust Canopy & Ducting</option>
                      <option value="Lainnya">Lainnya / Perbaikan Peralatan</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                      Deskripsi Kebutuhan / Ukuran Ruangan *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ceritakan detail proyek, ukuran ruangan, atau peralatan apa saja yang Anda butuhkan..."
                      className="w-full bg-cream border border-charcoal/20 rounded-md px-3.5 py-2.5 text-base sm:text-sm text-charcoal focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex-1 px-6 py-3.5 bg-charcoal text-cream text-xs font-semibold tracking-wide hover:bg-charcoal-light active:scale-98 transition-all rounded-md text-center min-h-[44px]"
                    >
                      Kirim Formulir
                    </button>
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto flex-1 px-6 py-3.5 bg-emerald-700 text-cream text-xs font-semibold tracking-wide hover:bg-emerald-800 active:scale-98 transition-all rounded-md flex items-center justify-center gap-2 min-h-[44px]"
                    >
                      <span>💬 Chat Langsung via WA</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="bg-cream-dark/50 p-5 sm:p-6 rounded-xl border border-charcoal/10">
                  <h3 className="text-xs uppercase tracking-widest text-warm-gray mb-1.5 font-semibold">
                    Workshop & Kantor Resmi
                  </h3>
                  <p className="text-sm font-semibold text-charcoal mb-1">
                    Bina Sekawan Engineering
                  </p>
                  <p className="text-xs text-warm-gray leading-relaxed mb-3">
                    JVV3+J43, Jl. Akses UI, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451
                  </p>
                  <a
                    href="https://maps.google.com/?q=Bina+Sekawan+Engineering+Depok"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-charcoal font-semibold hover:underline"
                  >
                    <span>Buka Petunjuk Arah Google Maps</span>
                    <span>&rarr;</span>
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-cream-dark/50 p-4 sm:p-5 rounded-xl border border-charcoal/10">
                    <h3 className="text-[11px] uppercase tracking-widest text-warm-gray mb-1 font-semibold">
                      WhatsApp / Telepon
                    </h3>
                    <p className="text-sm font-semibold text-charcoal">0822-6080-2076</p>
                    <p className="text-[10px] text-warm-gray mt-0.5">Respons Cepat 24 Jam</p>
                  </div>
                  <div className="bg-cream-dark/50 p-4 sm:p-5 rounded-xl border border-charcoal/10">
                    <h3 className="text-[11px] uppercase tracking-widest text-warm-gray mb-1 font-semibold">
                      Website
                    </h3>
                    <p className="text-sm font-semibold text-charcoal">BS.engineeringdpk.com</p>
                    <p className="text-[10px] text-warm-gray mt-0.5">Official Website</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest text-warm-gray mb-3 font-semibold">
                    Saluran Komunikasi & Media Sosial
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    {[
                      { name: 'WhatsApp Official', desc: '0822-6080-2076 (Konsultasi & Survei)', url: 'https://wa.me/6282260802076', icon: getAssetUrl('/cikon.sosmed/icon-web/whatsap.png') },
                      { name: 'Instagram', desc: '@bs_engineering1 (Portofolio Proyek Terkini)', url: 'https://www.instagram.com/bs_engineering1?igsh=MXlreWZvNDhpcmJv', icon: getAssetUrl('/cikon.sosmed/icon-web/instagram.png') },
                      { name: 'TikTok', desc: '@bsedepok (Video Fabrikasi & Uji Coba)', url: 'https://www.tiktok.com/@bsedepok?_r=1&_t=ZS-97p8XPPMkHo', icon: getAssetUrl('/cikon.sosmed/icon-web/tiktok.png') },
                    ].map((s) => (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 sm:p-3.5 bg-cream-dark/50 border border-charcoal/10 rounded-xl hover:border-charcoal/30 active:bg-cream-dark transition-all group"
                      >
                        <img
                          src={s.icon}
                          alt={s.name}
                          className="w-5 h-5 sm:w-6 sm:h-6 object-contain group-hover:scale-110 transition-transform flex-shrink-0"
                        />
                        <div>
                          <p className="text-xs font-semibold text-charcoal group-hover:text-charcoal-light">
                            {s.name}
                          </p>
                          <p className="text-[11px] text-warm-gray">{s.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 sm:p-5 bg-cream-dark/70 rounded-xl border border-charcoal/5">
                <p className="text-xs text-warm-gray leading-relaxed">
                  💡 <strong>Tips Survei:</strong> Jika Anda memiliki denah arsitektur atau denah kasaran, lampirkan saat menghubungi kami via WhatsApp agar estimasi kebutuhan dapat dibuat lebih cepat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
