import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import { getAssetUrl } from '../../utils/asset'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-20 md:pt-24">
        <Outlet />
      </main>
      <Footer />

      {/* Floating WhatsApp Quick Action (Mobile & Tablet Optimized) */}
      <a
        href="https://wa.me/6282260802076?text=Halo%20Bina%20Sekawan%20Engineering,%20saya%20ingin%20konsultasi%20mengenai%20proyek%20kitchen/baja."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 bg-[#25D366] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 font-medium text-xs sm:text-sm group"
        aria-label="Konsultasi via WhatsApp"
      >
        <img
          src={getAssetUrl('/cikon.sosmed/icon-web/whatsap.png')}
          alt="WhatsApp"
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
        />
        <span className="hidden sm:inline-block">Konsultasi WA</span>
      </a>
    </div>
  )
}
