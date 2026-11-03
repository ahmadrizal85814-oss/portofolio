import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getWaLeads, getPageViews, exportLeadsToCsv, clearAnalyticsData, type WaLead, type PageView } from '../utils/tracker'
import { getAssetUrl } from '../utils/asset'

export default function AdminDashboard() {
  const [pinInput, setPinInput] = useState('')
  const [pinError, setPinError] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [leads, setLeads] = useState<WaLead[]>([])
  const [views, setViews] = useState<PageView[]>([])
  const [timeFilter, setTimeFilter] = useState<'all' | 'today' | '7days' | '30days'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState<'leads' | 'stats'>('leads')
  const [showPinModal, setShowPinModal] = useState(false)
  const [newPin, setNewPin] = useState('')
  const [pinChangeSuccess, setPinChangeSuccess] = useState(false)

  // Load auth state from session
  useEffect(() => {
    const isLogged = sessionStorage.getItem('bse_admin_logged') === 'true'
    if (isLogged) {
      setIsAuthenticated(true)
      loadData()
    }
  }, [])

  const loadData = () => {
    setLeads(getWaLeads())
    setViews(getPageViews())
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const storedPin = localStorage.getItem('bse_admin_pin') || '2076'
    if (pinInput === storedPin) {
      sessionStorage.setItem('bse_admin_logged', 'true')
      setIsAuthenticated(true)
      setPinError(false)
      loadData()
    } else {
      setPinError(true)
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('bse_admin_logged')
    setIsAuthenticated(false)
    setPinInput('')
  }

  const handleChangePin = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPin.length >= 4) {
      localStorage.setItem('bse_admin_pin', newPin)
      setPinChangeSuccess(true)
      setTimeout(() => {
        setShowPinModal(false)
        setPinChangeSuccess(false)
        setNewPin('')
      }, 1500)
    }
  }

  const handleClearData = () => {
    if (window.confirm('Yakin ingin mereset seluruh data pengunjung dan riwayat WhatsApp?')) {
      clearAnalyticsData()
      loadData()
    }
  }

  // Filter based on time
  const filteredLeads = useMemo(() => {
    const now = new Date().getTime()
    return leads.filter((lead) => {
      const leadTime = new Date(lead.timestamp).getTime()
      if (timeFilter === 'today') {
        const todayStart = new Date().setHours(0, 0, 0, 0)
        if (leadTime < todayStart) return false
      } else if (timeFilter === '7days') {
        if (now - leadTime > 7 * 24 * 60 * 60 * 1000) return false
      } else if (timeFilter === '30days') {
        if (now - leadTime > 30 * 24 * 60 * 60 * 1000) return false
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const matchesTitle = lead.productTitle.toLowerCase().includes(q)
        const matchesCategory = lead.category.toLowerCase().includes(q)
        const matchesClient = (lead.clientName || '').toLowerCase().includes(q)
        const matchesPhone = (lead.clientPhone || '').toLowerCase().includes(q)
        return matchesTitle || matchesCategory || matchesClient || matchesPhone
      }

      return true
    })
  }, [leads, timeFilter, searchQuery])

  const filteredViews = useMemo(() => {
    const now = new Date().getTime()
    return views.filter((view) => {
      const viewTime = new Date(view.timestamp).getTime()
      if (timeFilter === 'today') {
        const todayStart = new Date().setHours(0, 0, 0, 0)
        return viewTime >= todayStart
      } else if (timeFilter === '7days') {
        return now - viewTime <= 7 * 24 * 60 * 60 * 1000
      } else if (timeFilter === '30days') {
        return now - viewTime <= 30 * 24 * 60 * 60 * 1000
      }
      return true
    })
  }, [views, timeFilter])

  // Top products requested
  const topProducts = useMemo(() => {
    const counts: Record<string, number> = {}
    filteredLeads.forEach((l) => {
      counts[l.productTitle] = (counts[l.productTitle] || 0) + 1
    })
    return Object.entries(counts)
      .map(([title, count]) => ({ title, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5)
  }, [filteredLeads])

  // Page views ranking
  const topPages = useMemo(() => {
    const counts: Record<string, number> = {}
    filteredViews.forEach((v) => {
      const pageName =
        v.path === '/'
          ? 'Beranda (Home)'
          : v.path === '/products'
          ? 'Katalog Kitchen'
          : v.path === '/display'
          ? 'Display Proyek'
          : v.path === '/furniture'
          ? 'Furniture SS'
          : v.path === '/steel-projects'
          ? 'Proyek Baja'
          : v.path === '/contact'
          ? 'Kontak Kami'
          : v.path
      counts[pageName] = (counts[pageName] || 0) + 1
    })
    return Object.entries(counts)
      .map(([path, count]) => ({ path, count }))
      .sort((a, b) => b.count - a.count)
  }, [filteredViews])

  // Device stats
  const deviceCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    filteredLeads.forEach((l) => {
      counts[l.device] = (counts[l.device] || 0) + 1
    })
    return counts
  }, [filteredLeads])

  // =========================================================================
  // LOGIN SCREEN
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center p-4">
        <div className="bg-cream rounded-2xl max-w-md w-full p-8 shadow-2xl border border-charcoal/20">
          <div className="flex flex-col items-center text-center mb-8">
            <img
              src={getAssetUrl('/Logo/brands-logo.png')}
              alt="Bina Sekawan Engineering"
              className="h-16 w-auto object-contain mb-4"
            />
            <h1 className="text-2xl font-bold text-charcoal">Portal Admin BSE</h1>
            <p className="text-xs text-warm-gray mt-1">
              Dashboard Pengunjung & Leads Konsultasi WhatsApp
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div>
              <label htmlFor="admin-pin" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                Masukkan PIN Admin
              </label>
              <input
                id="admin-pin"
                type="password"
                maxLength={8}
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value)
                  setPinError(false)
                }}
                placeholder="PIN Default: 2076"
                className={`w-full text-center text-2xl tracking-widest bg-cream-dark/60 border rounded-xl py-3 px-4 text-charcoal font-mono focus:outline-none focus:ring-2 transition-all ${
                  pinError
                    ? 'border-red-500 focus:ring-red-400 bg-red-50 text-red-700'
                    : 'border-charcoal/20 focus:border-charcoal focus:ring-charcoal/20'
                }`}
                autoFocus
              />
              {pinError && (
                <p className="text-xs text-red-600 mt-2 text-center font-medium">
                  ⚠️ PIN salah. Silakan coba lagi (PIN bawaan: 2076).
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-charcoal text-cream text-sm font-semibold rounded-xl hover:bg-charcoal-light active:scale-98 transition-all shadow-md"
            >
              Masuk ke Dashboard &rarr;
            </button>

            <div className="text-center pt-2">
              <Link to="/" className="text-xs text-warm-gray hover:text-charcoal transition-colors">
                &larr; Kembali ke Website
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }

  // =========================================================================
  // AUTHENTICATED ADMIN DASHBOARD
  // =========================================================================
  const conversionRate =
    filteredViews.length > 0
      ? ((filteredLeads.length / filteredViews.length) * 100).toFixed(1)
      : '0.0'

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Admin Top Navigation */}
      <header className="bg-charcoal text-cream sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={getAssetUrl('/Logo/brands-logo.png')}
              alt="BSE"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <div>
              <h1 className="text-sm sm:text-base font-bold tracking-tight">
                Bina Sekawan Engineering
              </h1>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Admin Dashboard &bull; Live Tracker</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream/10 text-cream text-xs font-medium rounded-lg hover:bg-cream/20 transition-all"
            >
              <span>🌐 Lihat Web</span>
            </Link>
            <button
              type="button"
              onClick={() => setShowPinModal(true)}
              className="px-2.5 sm:px-3 py-1.5 bg-cream/10 text-cream text-xs font-medium rounded-lg hover:bg-cream/20 transition-all"
            >
              🔑 Ganti PIN
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="px-3 py-1.5 bg-red-600/80 text-cream text-xs font-medium rounded-lg hover:bg-red-700 active:scale-95 transition-all"
            >
              Keluar
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Controls: Filter Waktu & Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          {/* Time Filter Pills */}
          <div className="flex items-center gap-1.5 bg-cream-dark p-1 rounded-xl border border-charcoal/10 overflow-x-auto no-scrollbar">
            {[
              { id: 'all', label: 'Semua Waktu' },
              { id: 'today', label: 'Hari Ini' },
              { id: '7days', label: '7 Hari Terakhir' },
              { id: '30days', label: '30 Hari Terakhir' },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTimeFilter(t.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  timeFilter === t.id
                    ? 'bg-charcoal text-cream shadow-xs'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={loadData}
              className="px-3.5 py-2 bg-cream-dark border border-charcoal/15 text-charcoal text-xs font-semibold rounded-lg hover:bg-cream active:scale-95 transition-all flex items-center gap-1.5"
            >
              <span>🔄 Refresh</span>
            </button>
            <button
              type="button"
              onClick={exportLeadsToCsv}
              className="flex-1 sm:flex-none px-4 py-2 bg-emerald-700 text-cream text-xs font-semibold rounded-lg hover:bg-emerald-800 active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span>📥 Download Excel / CSV</span>
            </button>
          </div>
        </div>

        {/* 4 Summary Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8">
          {/* Card 1: Total Pengunjung */}
          <div className="bg-cream-dark/60 rounded-2xl p-4 sm:p-6 border border-charcoal/10 shadow-xs">
            <div className="flex items-center justify-between text-warm-gray mb-2">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                Total Kunjungan Web
              </span>
              <span className="text-xl sm:text-2xl">👥</span>
            </div>
            <p className="text-2xl sm:text-4xl font-bold text-charcoal">
              {filteredViews.length}
            </p>
            <p className="text-[10px] sm:text-xs text-warm-gray mt-1">
              Halaman web dibuka pengunjung
            </p>
          </div>

          {/* Card 2: Total Orang Konsultasi WA */}
          <div className="bg-emerald-50/80 rounded-2xl p-4 sm:p-6 border border-emerald-600/20 shadow-xs">
            <div className="flex items-center justify-between text-emerald-800 mb-2">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                Konsultasi WhatsApp
              </span>
              <span className="text-xl sm:text-2xl">💬</span>
            </div>
            <p className="text-2xl sm:text-4xl font-bold text-emerald-950">
              {filteredLeads.length}
            </p>
            <p className="text-[10px] sm:text-xs text-emerald-700 mt-1 font-medium">
              Calon klien klik chat WA
            </p>
          </div>

          {/* Card 3: Tingkat Konversi */}
          <div className="bg-cream-dark/60 rounded-2xl p-4 sm:p-6 border border-charcoal/10 shadow-xs">
            <div className="flex items-center justify-between text-warm-gray mb-2">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                Rasio Konversi WA
              </span>
              <span className="text-xl sm:text-2xl">📈</span>
            </div>
            <p className="text-2xl sm:text-4xl font-bold text-charcoal">
              {conversionRate}%
            </p>
            <p className="text-[10px] sm:text-xs text-warm-gray mt-1">
              Pengunjung yang lanjut chat WA
            </p>
          </div>

          {/* Card 4: Produk Paling Diminati */}
          <div className="bg-amber-50/80 rounded-2xl p-4 sm:p-6 border border-amber-900/15 shadow-xs">
            <div className="flex items-center justify-between text-amber-900 mb-2">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                Paling Laris Ditanyakan
              </span>
              <span className="text-xl sm:text-2xl">🏆</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-amber-950 line-clamp-2">
              {topProducts[0]?.title || 'Belum ada data'}
            </p>
            <p className="text-[10px] sm:text-xs text-amber-800 mt-1">
              {topProducts[0] ? `${topProducts[0].count} kali ditanyakan via WA` : '-'}
            </p>
          </div>
        </div>

        {/* Tab Switcher: Leads WA vs Statistik */}
        <div className="flex items-center gap-3 border-b border-charcoal/10 mb-6">
          <button
            type="button"
            onClick={() => setActiveTab('leads')}
            className={`pb-3 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'leads'
                ? 'border-charcoal text-charcoal'
                : 'border-transparent text-warm-gray hover:text-charcoal'
            }`}
          >
            <span>💬 Riwayat Chat WhatsApp</span>
            <span className="px-2 py-0.5 rounded-full bg-charcoal/10 text-[11px] font-mono">
              {filteredLeads.length}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('stats')}
            className={`pb-3 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'stats'
                ? 'border-charcoal text-charcoal'
                : 'border-transparent text-warm-gray hover:text-charcoal'
            }`}
          >
            <span>📊 Analisis Produk & Pengunjung</span>
          </button>
        </div>

        {/* =========================================================================
            TAB 1: TABEL LEADS WHATSAPP
           ========================================================================= */}
        {activeTab === 'leads' && (
          <div>
            {/* Search Bar */}
            <div className="mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="🔍 Cari nama produk, nama klien, atau nomor telepon..."
                className="w-full bg-cream-dark/50 border border-charcoal/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-charcoal focus:outline-none focus:border-charcoal focus:bg-cream transition-all"
              />
            </div>

            {/* Table Container */}
            <div className="bg-cream rounded-2xl border border-charcoal/10 shadow-xs overflow-hidden">
              {filteredLeads.length === 0 ? (
                <div className="p-12 text-center text-warm-gray">
                  <p className="text-3xl mb-2">📭</p>
                  <p className="font-semibold text-charcoal">Belum ada data konsultasi pada filter ini</p>
                  <p className="text-xs mt-1">Data akan otomatis bertambah setiap ada pengunjung yang menekan tombol WhatsApp di website.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-cream-dark border-b border-charcoal/10 text-[11px] uppercase tracking-wider text-warm-gray font-semibold">
                      <tr>
                        <th className="py-3 px-4">Waktu (WIB)</th>
                        <th className="py-3 px-4">Produk / Layanan Ditanyakan</th>
                        <th className="py-3 px-4">Kategori</th>
                        <th className="py-3 px-4">Nama & Kontak Klien</th>
                        <th className="py-3 px-4">Halaman Asal</th>
                        <th className="py-3 px-4">Perangkat</th>
                        <th className="py-3 px-4 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-charcoal/5">
                      {filteredLeads.map((lead) => {
                        const dateObj = new Date(lead.timestamp)
                        const dateStr = dateObj.toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })
                        const timeStr = dateObj.toLocaleTimeString('id-ID', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })

                        const isResto = lead.category.includes('Resto')
                        const isHome = lead.category.includes('Rumah') || lead.category.includes('Residensial')

                        return (
                          <tr key={lead.id} className="hover:bg-cream-dark/40 transition-colors">
                            {/* Waktu */}
                            <td className="py-3.5 px-4 whitespace-nowrap">
                              <span className="font-medium text-charcoal block">{dateStr}</span>
                              <span className="text-[11px] text-warm-gray font-mono">{timeStr} WIB</span>
                            </td>

                            {/* Produk */}
                            <td className="py-3.5 px-4 font-semibold text-charcoal max-w-xs">
                              {lead.productTitle}
                            </td>

                            {/* Kategori Badge */}
                            <td className="py-3.5 px-4 whitespace-nowrap">
                              {isResto && (
                                <span className="px-2.5 py-1 rounded-md bg-charcoal text-cream text-[10px] font-semibold uppercase">
                                  🍳 Dapur Resto
                                </span>
                              )}
                              {isHome && (
                                <span className="px-2.5 py-1 rounded-md bg-amber-900 text-cream text-[10px] font-semibold uppercase">
                                  🏡 Dapur Rumah
                                </span>
                              )}
                              {!isResto && !isHome && (
                                <span className="px-2.5 py-1 rounded-md bg-stone-200 text-charcoal text-[10px] font-semibold uppercase">
                                  {lead.category}
                                </span>
                              )}
                            </td>

                            {/* Klien */}
                            <td className="py-3.5 px-4">
                              {lead.clientName || lead.clientPhone ? (
                                <div>
                                  <p className="font-semibold text-charcoal">{lead.clientName || 'Klien'}</p>
                                  <p className="text-[11px] text-warm-gray font-mono">{lead.clientPhone || '-'}</p>
                                </div>
                              ) : (
                                <span className="text-warm-gray text-[11px]">Langsung via Web</span>
                              )}
                            </td>

                            {/* Halaman Asal */}
                            <td className="py-3.5 px-4 font-mono text-[11px] text-warm-gray">
                              {lead.sourcePage}
                            </td>

                            {/* Perangkat */}
                            <td className="py-3.5 px-4 text-xs text-charcoal/80 whitespace-nowrap">
                              {lead.device}
                            </td>

                            {/* Aksi Chat Balik */}
                            <td className="py-3.5 px-4 text-right whitespace-nowrap">
                              <a
                                href={`https://wa.me/${lead.clientPhone ? lead.clientPhone.replace(/^0/, '62') : '6282260802076'}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#25D366] text-white text-xs font-semibold rounded-lg hover:bg-[#1EBE5D] active:scale-95 transition-all shadow-xs"
                              >
                                <span>Hubungi WA</span>
                                <span>&rarr;</span>
                              </a>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: ANALISIS PRODUK & PENGUNJUNG
           ========================================================================= */}
        {activeTab === 'stats' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top Products */}
            <div className="bg-cream rounded-2xl p-6 border border-charcoal/10 shadow-xs">
              <h3 className="text-base font-bold text-charcoal mb-4 flex items-center gap-2">
                <span>🏆</span>
                <span>Produk Paling Sering Ditanyakan ke WhatsApp</span>
              </h3>
              {topProducts.length === 0 ? (
                <p className="text-xs text-warm-gray">Belum ada data pertanyaan produk.</p>
              ) : (
                <div className="flex flex-col gap-3">
                  {topProducts.map((p, idx) => {
                    const percentage = Math.round((p.count / filteredLeads.length) * 100) || 0
                    return (
                      <div key={p.title} className="bg-cream-dark/50 p-3.5 rounded-xl border border-charcoal/5">
                        <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                          <span className="truncate pr-2">
                            #{idx + 1} {p.title}
                          </span>
                          <span className="font-mono text-charcoal flex-shrink-0">
                            {p.count} chat ({percentage}%)
                          </span>
                        </div>
                        <div className="w-full bg-charcoal/10 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Top Visited Pages */}
            <div className="bg-cream rounded-2xl p-6 border border-charcoal/10 shadow-xs">
              <h3 className="text-base font-bold text-charcoal mb-4 flex items-center gap-2">
                <span>📄</span>
                <span>Halaman Paling Sering Dikunjungi Pengunjung</span>
              </h3>
              {topPages.length === 0 ? (
                <p className="text-xs text-warm-gray">Belum ada data kunjungan halaman.</p>
              ) : (
                <div className="flex flex-col gap-3">
                  {topPages.map((pg, idx) => {
                    const pct = Math.round((pg.count / filteredViews.length) * 100) || 0
                    return (
                      <div key={pg.path} className="bg-cream-dark/50 p-3.5 rounded-xl border border-charcoal/5">
                        <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                          <span className="truncate pr-2">
                            #{idx + 1} {pg.path}
                          </span>
                          <span className="font-mono text-charcoal flex-shrink-0">
                            {pg.count} klik ({pct}%)
                          </span>
                        </div>
                        <div className="w-full bg-charcoal/10 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-charcoal h-full rounded-full transition-all duration-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Perangkat Pengunjung */}
            <div className="bg-cream rounded-2xl p-6 border border-charcoal/10 shadow-xs md:col-span-2">
              <h3 className="text-base font-bold text-charcoal mb-4 flex items-center gap-2">
                <span>📱</span>
                <span>Distribusi Perangkat Calon Klien</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Object.entries(deviceCounts).map(([dev, count]) => (
                  <div key={dev} className="p-4 bg-cream-dark/60 rounded-xl text-center border border-charcoal/5">
                    <p className="text-xs text-warm-gray font-semibold mb-1">{dev}</p>
                    <p className="text-2xl font-bold text-charcoal">{count}</p>
                    <p className="text-[10px] text-warm-gray mt-0.5">calon klien</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer Admin Bar */}
        <div className="mt-12 pt-6 border-t border-charcoal/10 flex flex-col sm:flex-row items-center justify-between text-xs text-warm-gray gap-4">
          <p>
            Portal Admin Internal &bull; Bina Sekawan Engineering &copy; {new Date().getFullYear()}
          </p>
          <button
            type="button"
            onClick={handleClearData}
            className="text-red-600 hover:text-red-700 underline text-xs"
          >
            Hapus / Reset Riwayat Testing
          </button>
        </div>
      </main>

      {/* Ganti PIN Modal */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-xs">
          <div className="bg-cream rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-charcoal/20">
            <h3 className="text-lg font-bold text-charcoal mb-1">Ganti PIN Admin</h3>
            <p className="text-xs text-warm-gray mb-4">
              Masukkan PIN baru (minimal 4 angka) untuk mengamankan portal admin Anda.
            </p>

            <form onSubmit={handleChangePin} className="flex flex-col gap-4">
              <input
                type="password"
                maxLength={8}
                value={newPin}
                onChange={(e) => setNewPin(e.target.value)}
                placeholder="PIN Baru (contoh: 2076)"
                className="w-full text-center text-xl tracking-widest bg-cream-dark border border-charcoal/20 rounded-xl py-3 px-4 font-mono text-charcoal focus:outline-none focus:border-charcoal"
                autoFocus
              />

              {pinChangeSuccess && (
                <p className="text-xs text-emerald-600 font-semibold text-center">
                  ✓ PIN berhasil diperbarui!
                </p>
              )}

              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowPinModal(false)}
                  className="flex-1 py-2.5 bg-cream-dark border border-charcoal/20 rounded-xl text-xs font-semibold text-charcoal"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={newPin.length < 4}
                  className="flex-1 py-2.5 bg-charcoal text-cream rounded-xl text-xs font-semibold disabled:opacity-50"
                >
                  Simpan PIN
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
