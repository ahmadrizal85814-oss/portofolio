import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-1 pt-24 md:pt-28">
        <Outlet />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6282260802076"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium text-sm"
        aria-label="Chat WhatsApp"
      >
        <img
          src="/cikon.sosmed/icon web/whatsap.png"
          alt="WhatsApp"
          className="w-6 h-6 object-contain"
        />
        <span>Hubungi Kami</span>
      </a>
    </div>
  )
}
