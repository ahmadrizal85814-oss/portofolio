export interface WaLead {
  id: string
  timestamp: string
  productTitle: string
  category: string
  sourcePage: string
  clientName?: string
  clientPhone?: string
  device: string
}

export interface PageView {
  id: string
  timestamp: string
  path: string
  device: string
}

const STORAGE_KEY_LEADS = 'bse_wa_leads'
const STORAGE_KEY_VIEWS = 'bse_page_views'

function getDeviceType(): string {
  if (typeof window === 'undefined') return 'Desktop'
  const ua = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(ua)) return 'iPhone / iPad'
  if (/android/.test(ua)) return 'Android Mobile'
  if (/mobile/.test(ua)) return 'Mobile Browser'
  if (/macintosh|mac os x/.test(ua)) return 'Mac OS'
  if (/windows/.test(ua)) return 'Windows PC'
  return 'Desktop'
}

export function trackPageView(path: string) {
  if (typeof window === 'undefined') return
  try {
    const raw = localStorage.getItem(STORAGE_KEY_VIEWS)
    const views: PageView[] = raw ? JSON.parse(raw) : []
    const newView: PageView = {
      id: `view_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      timestamp: new Date().toISOString(),
      path,
      device: getDeviceType(),
    }
    views.unshift(newView)
    // keep max 2000 views
    if (views.length > 2000) views.length = 2000
    localStorage.setItem(STORAGE_KEY_VIEWS, JSON.stringify(views))
  } catch (err) {
    console.error('Failed to track pageview:', err)
  }
}

export function trackWaClick(data: {
  productTitle?: string
  productName?: string
  category?: string
  sourcePage?: string
  clientName?: string
  clientPhone?: string
  notes?: string
}) {
  if (typeof window === 'undefined') return
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LEADS)
    const leads: WaLead[] = raw ? JSON.parse(raw) : []
    const newLead: WaLead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      timestamp: new Date().toISOString(),
      productTitle: data.productTitle || data.productName || 'Konsultasi Umum WhatsApp',
      category: data.category || 'Umum',
      sourcePage: data.sourcePage || (window.location.pathname || '/'),
      clientName: data.clientName || '',
      clientPhone: data.clientPhone || '',
      device: getDeviceType(),
    }
    leads.unshift(newLead)
    if (leads.length > 1000) leads.length = 1000
    localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify(leads))
  } catch (err) {
    console.error('Failed to track wa click:', err)
  }
}

export function getWaLeads(): WaLead[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LEADS)
    if (!raw) {
      // Seed starter sample leads so admin can preview the dashboard immediately
      const sampleLeads: WaLead[] = [
        {
          id: 'lead_sample_1',
          timestamp: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
          productTitle: 'Kitchen Set Stainless Top Marmer Mewah',
          category: 'Dapur Rumah / Residensial',
          sourcePage: '/products',
          clientName: 'Bapak Hendra',
          clientPhone: '081298765432',
          device: 'iPhone / iPad',
        },
        {
          id: 'lead_sample_2',
          timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
          productTitle: 'Custom Single Kwalirange Full SS',
          category: 'Dapur Restoran & Komersial',
          sourcePage: '/products',
          clientName: 'Restoran Sedap Rasa',
          clientPhone: '081388992211',
          device: 'Android Mobile',
        },
        {
          id: 'lead_sample_3',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
          productTitle: 'Rak Piring Tarik 2-Tier Stainless Steel',
          category: 'Dapur Rumah / Residensial',
          sourcePage: '/products',
          clientName: 'Ibu Ratna',
          clientPhone: '085711223344',
          device: 'Android Mobile',
        },
        {
          id: 'lead_sample_4',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
          productTitle: 'Pembuatan Kanopi Kaca Tempered',
          category: 'Proyek Baja & Kanopi',
          sourcePage: '/steel-projects',
          clientName: 'Pak Dimas',
          clientPhone: '081288776655',
          device: 'Windows PC',
        },
        {
          id: 'lead_sample_5',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 32).toISOString(),
          productTitle: 'Konsultasi Cepat Floating WA',
          category: 'Konsultasi Langsung',
          sourcePage: '/',
          clientName: 'Pengunjung Web',
          clientPhone: '',
          device: 'iPhone / iPad',
        },
      ]
      localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify(sampleLeads))
      return sampleLeads
    }
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export function getPageViews(): PageView[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY_VIEWS)
    if (!raw) {
      // Seed sample visits
      const sampleViews: PageView[] = [
        { id: 'v1', timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), path: '/products', device: 'iPhone / iPad' },
        { id: 'v2', timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(), path: '/', device: 'Android Mobile' },
        { id: 'v3', timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(), path: '/products', device: 'Windows PC' },
        { id: 'v4', timestamp: new Date(Date.now() - 1000 * 60 * 75).toISOString(), path: '/display', device: 'Android Mobile' },
        { id: 'v5', timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(), path: '/contact', device: 'Mac OS' },
        { id: 'v6', timestamp: new Date(Date.now() - 1000 * 60 * 200).toISOString(), path: '/products', device: 'iPhone / iPad' },
      ]
      localStorage.setItem(STORAGE_KEY_VIEWS, JSON.stringify(sampleViews))
      return sampleViews
    }
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export function exportLeadsToCsv() {
  const leads = getWaLeads()
  if (!leads.length) return

  const headers = ['ID', 'Waktu (WIB)', 'Produk / Kebutuhan', 'Kategori', 'Halaman Asal', 'Nama Klien', 'No Telepon / WA', 'Perangkat']
  const rows = leads.map((l) => [
    l.id,
    new Date(l.timestamp).toLocaleString('id-ID'),
    `"${l.productTitle.replace(/"/g, '""')}"`,
    `"${l.category.replace(/"/g, '""')}"`,
    l.sourcePage,
    `"${(l.clientName || '-').replace(/"/g, '""')}"`,
    l.clientPhone || '-',
    l.device,
  ])

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n')
  const encodedUri = encodeURI(csvContent)
  const link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', `laporan_leads_wa_bse_${new Date().toISOString().slice(0, 10)}.csv`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function clearAnalyticsData() {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY_LEADS)
  localStorage.removeItem(STORAGE_KEY_VIEWS)
}
