import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getAssetUrl } from '../utils/asset'

export type KitchenType = 'all' | 'resto' | 'konvensional'

interface ProductItem {
  title: string
  kitchenType: 'resto' | 'konvensional' | 'both'
  category: string
  desc: string
  specs: string[]
  suitableFor: string
  image: string
}

const categories = [
  'Semua',
  'Kompor & Peralatan Masak',
  'Sink & Washing',
  'Meja & Prep',
  'Rak & Storage',
  'Exhaust & Ventilasi',
]

const products: ProductItem[] = [
  // --- DAPUR RESTO (KOMERSIAL) ---
  {
    title: 'Custom Single Kwalirange Full SS',
    kitchenType: 'resto',
    category: 'Kompor & Peralatan Masak',
    desc: 'Kwali range heavy-duty dengan burner bertekanan tinggi (high-pressure) full stainless steel. Dirancang khusus untuk kecepatan dan volume memasak masakan Chinese food, oriental, dan asian wok.',
    specs: ['SUS 304 Food Grade', 'High Pressure Wok Burner', 'Integrated Water Faucet & Soup Pot Ring', 'Heavy Duty Frame'],
    suitableFor: 'Restoran, Hotel, Catering, Chinese Food',
    image: getAssetUrl('/katalog-produk-kitchenset/custom.single.Kwalirange.full.ss.png'),
  },
  {
    title: 'Double Kwalirange Heavy Duty',
    kitchenType: 'resto',
    category: 'Kompor & Peralatan Masak',
    desc: 'Double kwali range 2 tungku kuali utama dengan sistem pendingin air meja kerja. Efisiensi tinggi untuk dapur restoran berkapasitas besar.',
    specs: ['SUS 304 Hairline Finish', '2 High Pressure Burners', 'Air Curtain & Water Channel System', 'Blower Fan Assisted'],
    suitableFor: 'Restoran Ramai, Food Court, Hotel Kitchen',
    image: getAssetUrl('/katalog-produk-kitchenset/Double.Kwalieange.png'),
  },
  {
    title: 'Custom Single Kwalirange Compact',
    kitchenType: 'resto',
    category: 'Kompor & Peralatan Masak',
    desc: 'Single kwali range custom dengan dimensi yang disesuaikan untuk cafe, kedai makan, atau cloud kitchen dengan ruangan terbatas namun butuh api kencang.',
    specs: ['SUS 304 / SUS 201', 'High Pressure Torch', 'Kaki Adjustable Bullet Feet', 'Custom Dimensi'],
    suitableFor: 'Cafe, Cloud Kitchen, Bistro, Food Stall',
    image: getAssetUrl('/katalog-produk-kitchenset/custom.single.kwalirange.png'),
  },
  {
    title: 'Noodle Cooker Gas 6 Lubang',
    kitchenType: 'resto',
    category: 'Kompor & Peralatan Masak',
    desc: 'Panci rebusan mie stainless steel dengan saringan individual dan kompor gas terpadu. Air mendidih stabil dan cepat untuk pesanan nonstop.',
    specs: ['SUS 304 Food Grade Tank', 'Multi-compartment Basket', 'Drain Valve Heavy Duty', 'Pengatur Suhu Presisi'],
    suitableFor: 'Resto Mie, Bakso, Ramen Bar, Resto Cepat Saji',
    image: getAssetUrl('/katalog-produk-kitchenset/Noodle.coocker.png'),
  },
  {
    title: 'Stockpot Otomatis Mixer',
    kitchenType: 'resto',
    category: 'Kompor & Peralatan Masak',
    desc: 'Panci rebus kaldu besar dengan sistem motor pengaduk otomatis. Mencegah bahan gosong dan menjaga sari kaldu terserap sempurna tanpa pengadukan manual konstan.',
    specs: ['Kapasitas 80L - 200L', 'Motorized Agitator Mixer', 'Double Jacket Insulation', 'Easy Tilt / Bottom Drain'],
    suitableFor: 'Pabrik Kaldu, Restoran Soto/Rawon, Katering Skala Besar',
    image: getAssetUrl('/katalog-produk-kitchenset/Stockpot.otomatis.png'),
  },
  {
    title: 'Stockpot Manual Custom Komersial',
    kitchenType: 'resto',
    category: 'Kompor & Peralatan Masak',
    desc: 'Kompor stockpot heavy-duty dudukan rendah (low-boy) untuk menampung panci kuah kaldu berkapasitas puluhan liter dengan aman dan ergonomis.',
    specs: ['Cast Iron Heavy Burner', 'Tungku Baja Tahan Beban 150kg+', 'Drip Pan Stainless', 'Desain Ergonomis'],
    suitableFor: 'Katering, Dapur Hotel, Restoran Kuah & Soup',
    image: getAssetUrl('/katalog-produk-kitchenset/stockpot.manual.custom.png'),
  },
  {
    title: 'Exhaust Wall Hood Commercial',
    kitchenType: 'resto',
    category: 'Exhaust & Ventilasi',
    desc: 'Sistem hood canopy dinding komersial lengkap dengan saringan minyak (baffle filter) stainless steel, saluran drain minyak, dan koneksi blower daya hisap tinggi.',
    specs: ['SUS 304/201 1.2mm', 'Stainless Baffle Grease Filter', 'Integrated Oil Drain Tray', 'Vapour Proof LED Lighting'],
    suitableFor: 'Dapur Komersial, Restoran, Hotel, Food Court',
    image: getAssetUrl('/katalog-produk-kitchenset/Exhaust.wall.Hood.png'),
  },
  {
    title: 'Gastronorm Pan & Buffet Line Counter',
    kitchenType: 'resto',
    category: 'Kompor & Peralatan Masak',
    desc: 'Wadah standar GN (Gastronorm) stainless steel food grade untuk penyimpanan, pemanasan, dan penyajian prasmanan pada salad bar atau bain marie.',
    specs: ['Standar Internasional GN 1/1, 1/2, 1/3', 'Deep Draw Seamless', 'Bisa Hot & Cold Bain Marie', 'Higienis & Mudah Dicuci'],
    suitableFor: 'Hotel Buffet, Katering, Resto All-You-Can-Eat',
    image: getAssetUrl('/katalog-produk-kitchenset/Gasstronom.png'),
  },

  // --- PRODUK DUAL USE (RESTO & KONVENSIONAL) ---
  {
    title: 'Gas Flat Griddle Heavy Plate',
    kitchenType: 'both',
    category: 'Kompor & Peralatan Masak',
    desc: 'Plat wajan datar stainless steel tebal untuk memanggang burger, steak, teppanyaki, roti bakar, dan telur. Suhu panas merata dan mudah dibersihkan.',
    specs: ['Plat Baja Stainless 10mm', 'Thermostat Gas Controller', 'Fat Drainage Box Removable', 'Splash Guard 3 Sisi'],
    suitableFor: 'Restoran Steak, Burger Bar, Cafe & Dapur Residensial Mewah',
    image: getAssetUrl('/katalog-produk-kitchenset/Gas.Flat.Griled.png'),
  },
  {
    title: 'Stove 4 Burner Open Top',
    kitchenType: 'both',
    category: 'Kompor & Peralatan Masak',
    desc: 'Kompor gas 4 tungku dengan konstruksi kokoh full stainless steel. Sangat serbaguna untuk memasak saus, tumisan, hingga penggorengan harian.',
    specs: ['4 Heavy-duty Burners', 'Cast Iron Pan Supports', 'Removable Crumb Tray', 'Bisa Model Meja / Kabinet'],
    suitableFor: 'Restoran, Cafe, Villa, & Rumah Tinggal Mewah',
    image: getAssetUrl('/katalog-produk-kitchenset/Stove.4Burner.png'),
  },
  {
    title: 'Double Sink Heavy Duty With Drainer',
    kitchenType: 'both',
    category: 'Sink & Washing',
    desc: 'Bak cuci ganda dengan area penirisan (drainboard). Memisahkan proses pencucian dan sanitasi bilas secara higienis sesuai regulasi HACCP.',
    specs: ['SUS 304 Tebal 1.2mm', 'Dua Mangkuk Dalam (Deep Bowl)', 'Backsplash Mencegah Cipratan', 'Kaki Pipa Adjustable'],
    suitableFor: 'Restoran, Cafe, Rumah Tinggal & Villa',
    image: getAssetUrl('/katalog-produk-kitchenset/double.sink.png'),
  },
  {
    title: 'Work Table Solid Stainless Steel',
    kitchenType: 'both',
    category: 'Meja & Prep',
    desc: 'Meja kerja persiapan makanan tipe solid dengan plat stainless steel tebal dan lapisan peredam suara. Sangat kuat, anti getar, dan anti noda.',
    specs: ['SUS 304 Food Grade', 'Sound Deadening Underlayer', 'Under-shelf Tambahan', 'Kapasitas Beban 200kg+'],
    suitableFor: 'Dapur Resto, Toko Roti (Bakery), Kitchen Island Rumah',
    image: getAssetUrl('/katalog-produk-kitchenset/work.table.solid.png'),
  },
  {
    title: 'Work Table Prep With Undershelf',
    kitchenType: 'both',
    category: 'Meja & Prep',
    desc: 'Meja preparasi multifungsi dengan rak bawah untuk menyimpan panci, baskom, dan bahan kering. Ukuran panjang, lebar, dan tinggi dapat di-custom.',
    specs: ['Custom Dimensi Panjang & Lebar', 'Finishing Hairline Satin', 'Adjustable Stainless Feet', 'Sistem Rak Fleksibel'],
    suitableFor: 'Dapur Komersial, Dapur Konvensional, Rumah Sakit',
    image: getAssetUrl('/katalog-produk-kitchenset/work.table.png'),
  },
  {
    title: 'Punched Rack 4 Tiers Storage',
    kitchenType: 'both',
    category: 'Rak & Storage',
    desc: 'Rak penyimpanan 4 tingkat dengan ambalan berlubang (punched). Sirkulasi udara lancar untuk menyimpan perlengkapan dapur kering maupun ruang pendingin (chiller).',
    specs: ['SUS 304 Anti Karat', 'Sirkulasi Udara Anti Jamur', 'Kapasitas Tiap Ambalan 80kg', 'Knock-down / Las Paten'],
    suitableFor: 'Gudang Dapur Kering, Cold Room, Dapur Rumah Bersih',
    image: getAssetUrl('/katalog-produk-kitchenset/Punched.rack.4tiers.png'),
  },

  // --- DAPUR KONVENSIONAL (RESIDENSIAL & SEMI-KOMERSIAL) ---
  {
    title: 'Kitchen Set Stainless Top Marmer Mewah',
    kitchenType: 'konvensional',
    category: 'Meja & Prep',
    desc: 'Kitchen set residensial kombinasi top table marmer onyx mewah dan kabinet bawah full stainless steel SUS 304 hairline finish. 100% tahan air, anti rayap, bebas lapuk, serta higienis untuk keluarga.',
    specs: ['SUS 304 Hairline Satin', 'Top Table Marmer Onyx Mewah', '100% Anti Rayap & Tahan Air', 'Engsel Soft-Close Hydraulic'],
    suitableFor: 'Rumah Mewah, Villa, Dapur Bersih Residensial',
    image: getAssetUrl('/katalog-produk-kitchenset/kitchen-set-stainless-marmer-mewah.jpg'),
  },
  {
    title: 'Rak Piring Tarik 2-Tier Stainless Steel',
    kitchenType: 'konvensional',
    category: 'Rak & Storage',
    desc: 'Sistem rak pengering piring, mangkuk, dan gelas tarik 2 tingkat berbahan stainless steel food grade. Dipasang tersembunyi di dalam kabinet bawah dengan rel geser halus (soft-closing drawer runner).',
    specs: ['SUS 304 Kawat Tebal Kokoh', '2-Tier Kompartemen Piring & Gelas', 'Soft-Close Heavy Duty Runner', 'Tray Penampung Tetesan Air'],
    suitableFor: 'Dapur Residensial, Pantry Hunian, Dapur Konvensional',
    image: getAssetUrl('/katalog-produk-kitchenset/rak-piring-tarik-stainless.jpg'),
  },
  {
    title: 'Laci Sendok Organizer Full Stainless Steel',
    kitchenType: 'konvensional',
    category: 'Meja & Prep',
    desc: 'Laci penyimpanan alat makan kustom berbahan full stainless steel dengan sekat sendok garpu higienis. Struktur laci kokoh anti melengkung dengan rel bantalan bola hidrolik halus.',
    specs: ['Box Laci Full Stainless SUS 304', 'Custom Cutlery Divider Compartment', 'Hydraulic Soft-Close Slider', 'Kapasitas Beban Laci 35kg'],
    suitableFor: 'Dapur Hunian Modern, Kitchen Set Rumah Mewah',
    image: getAssetUrl('/katalog-produk-kitchenset/laci-sendok-stainless-organizer.jpg'),
  },
  {
    title: 'Kabinet Bawah Sudut Stainless Steel Custom',
    kitchenType: 'konvensional',
    category: 'Meja & Prep',
    desc: 'Kabinet bawah dapur sudut (L-shape) full stainless steel dengan ambalan 2 tingkat. Memaksimalkan sudut mati dapur hunian untuk penyimpanan panci dan peralatan masak agar rapi dan bebas lembap.',
    specs: ['SUS 304 Tebal 1.2mm Food Grade', 'Ambalan Rak 2 Tingkat Kokoh', 'Pintu Sudut Bukaan Lebar', 'Anti Tikus, Rayap & Jamur'],
    suitableFor: 'Dapur L-Shape Hunian, Dapur Rumah Tinggal & Villa',
    image: getAssetUrl('/katalog-produk-kitchenset/kabinet-sudut-stainless-storage.jpg'),
  },
  {
    title: 'Single Sink Big Bowl Minimalist',
    kitchenType: 'konvensional',
    category: 'Sink & Washing',
    desc: 'Sink cuci piring stainless steel satu mangkuk ekstra besar dan dalam. Sangat cocok untuk dapur rumah tinggal modern, pantry kantor, maupun villa eksklusif karena mampu menampung wajan besar tanpa cipratan air.',
    specs: ['SUS 304 Food Grade 1.2mm', 'Mangkuk Dalam 25cm (Jumbo)', 'Sound Absorption Coating Anti Bising', 'Desain Minimalis Elegan'],
    suitableFor: 'Dapur Bersih Rumah Tinggal, Apartemen, Villa, Pantry Kantor',
    image: getAssetUrl('/katalog-produk-kitchenset/Single.sink.bigbowl.png'),
  },
  {
    title: 'Custom Kitchen Set Stainless Residensial',
    kitchenType: 'konvensional',
    category: 'Meja & Prep',
    desc: 'Kabinet kitchen set atas dan bawah full stainless steel untuk dapur hunian. Anti rayap, anti lembap, tahan air seumur hidup, dan higienis tanpa takut lapuk seperti bahan kayu/multiplek.',
    specs: ['Full SUS 304 Body & Door', 'Engsel Soft-Close Hydraulic', 'Top Table Seamless Stainless', 'Pilihan Aksen Finishing Modern'],
    suitableFor: 'Rumah Tinggal Modern, Villa, Dapur Residensial Bebas Rayap',
    image: getAssetUrl('/Display/pemasangan-kitchen-sesuai-ruangan.png'),
  },
  {
    title: 'Kitchen Island Prep Table Stainless Steel',
    kitchenType: 'konvensional',
    category: 'Meja & Prep',
    desc: 'Meja tengah (kitchen island) stainless steel custom dengan laci penyimpanan, colokan listrik terintegrasi, dan top table higienis untuk area sarapan atau persiapan santai keluarga.',
    specs: ['SUS 304 Hairline Mewah', 'Custom Laci & Rak Bawah', 'Desain Ergonomis Hunian', 'Tepi Meja Halus Anti Tajam'],
    suitableFor: 'Dapur Rumah Konvensional, Studio Masak, Pantry Komersial',
    image: getAssetUrl('/Display/pemasangan-kitchen-custom.png'),
  },
  {
    title: 'Slimline Cooker Hood Stainless Residensial',
    kitchenType: 'konvensional',
    category: 'Exhaust & Ventilasi',
    desc: 'Penghisap asap dapur custom model canopy minimalis untuk dapur rumah. Efektif menghisap asap dan bau masakan dengan tingkat kebisingan motor yang sangat rendah.',
    specs: ['SUS 304 Hairline Estetik', 'Filter Alumunium/SS Washable', 'Low Noise Inline Blower', 'Desain Ramping Menyatu dengan Kabinet'],
    suitableFor: 'Dapur Rumah Tangga, Villa, Apartemen, Dapur Semi-Komersial',
    image: getAssetUrl('/katalog-produk-kitchenset/Exhaust.wall.Hood.png'),
  },
]

export default function Products() {
  const [kitchenType, setKitchenType] = useState<KitchenType>('all')
  const [activeCategory, setActiveCategory] = useState<string>('Semua')
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null)

  // Filter products by Kitchen Type (all, resto, konvensional) and Sub-category
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesType =
        kitchenType === 'all'
          ? true
          : kitchenType === 'resto'
          ? item.kitchenType === 'resto' || item.kitchenType === 'both'
          : item.kitchenType === 'konvensional' || item.kitchenType === 'both'

      const matchesCategory =
        activeCategory === 'Semua' ? true : item.category === activeCategory

      return matchesType && matchesCategory
    })
  }, [kitchenType, activeCategory])

  const getWaLink = (productTitle: string, typeDesc: string) => {
    const text = encodeURIComponent(
      `Halo Bina Sekawan Engineering, saya tertarik dan ingin konsultasi mengenai produk "${productTitle}" untuk kebutuhan ${typeDesc}. Mohon info spesifikasi dan penawarannya.`
    )
    return `https://wa.me/6282260802076?text=${text}`
  }

  return (
    <>
      {/* Hero Header (Mobile & Tablet Optimized) */}
      <section className="border-b border-charcoal/5 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal/5 rounded-full text-[11px] sm:text-xs uppercase tracking-widest text-warm-gray mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Fabrikasi Kitchen Stainless Custom
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.12] max-w-3xl text-charcoal">
            Peralatan dapur presisi untuk{' '}
            <span className="text-warm-gray">dapur resto & dapur konvensional.</span>
          </h1>
          <p className="text-warm-gray text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mt-4 sm:mt-6">
            Dibuat langsung di workshop kami menggunakan material stainless steel food-grade (SUS 304 / SUS 201).
            Tersedia spesifikasi khusus <strong>Dapur Resto (Heavy Duty)</strong> maupun <strong>Dapur Konvensional (Residensial Anti Rayap)</strong>.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-charcoal/8">
            <div className="bg-cream-dark/40 p-3 sm:p-4 rounded-lg">
              <p className="text-lg sm:text-xl font-semibold text-charcoal">SUS 304 & 201</p>
              <p className="text-[11px] text-warm-gray mt-0.5">Food-Grade Higienis</p>
            </div>
            <div className="bg-cream-dark/40 p-3 sm:p-4 rounded-lg">
              <p className="text-lg sm:text-xl font-semibold text-charcoal">100% Custom</p>
              <p className="text-[11px] text-warm-gray mt-0.5">Ukuran Presisi Ruang</p>
            </div>
            <div className="bg-cream-dark/40 p-3 sm:p-4 rounded-lg">
              <p className="text-lg sm:text-xl font-semibold text-charcoal">Anti Rayap</p>
              <p className="text-[11px] text-warm-gray mt-0.5">Tahan Seumur Hidup</p>
            </div>
            <div className="bg-cream-dark/40 p-3 sm:p-4 rounded-lg">
              <p className="text-lg sm:text-xl font-semibold text-charcoal">Free Survei</p>
              <p className="text-[11px] text-warm-gray mt-0.5">Estimasi & Desain 3D</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Kitchen Type Selector (Mobile & Tablet Sticky Header) */}
      <section className="bg-cream/95 border-b border-charcoal/8 sticky top-20 md:top-24 z-30 backdrop-blur-md transition-all shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Primary Segmented Control */}
            <div className="flex items-center gap-2">
              <div className="grid grid-cols-3 gap-1.5 w-full sm:w-auto bg-cream-dark/70 p-1 rounded-lg border border-charcoal/10 shadow-xs">
                <button
                  type="button"
                  onClick={() => setKitchenType('all')}
                  className={`px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all text-center ${
                    kitchenType === 'all'
                      ? 'bg-charcoal text-cream shadow-xs'
                      : 'text-charcoal/80 hover:text-charcoal active:bg-cream'
                  }`}
                >
                  Semua ({products.length})
                </button>
                <button
                  type="button"
                  onClick={() => setKitchenType('resto')}
                  className={`px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all text-center flex items-center justify-center gap-1 ${
                    kitchenType === 'resto'
                      ? 'bg-charcoal text-cream shadow-xs'
                      : 'text-charcoal/80 hover:text-charcoal active:bg-cream'
                  }`}
                >
                  <span>🍳</span>
                  <span className="truncate">Resto</span>
                </button>
                <button
                  type="button"
                  onClick={() => setKitchenType('konvensional')}
                  className={`px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all text-center flex items-center justify-center gap-1 ${
                    kitchenType === 'konvensional'
                      ? 'bg-charcoal text-cream shadow-xs'
                      : 'text-charcoal/80 hover:text-charcoal active:bg-cream'
                  }`}
                >
                  <span>🏡</span>
                  <span className="truncate">Konvensional</span>
                </button>
              </div>
            </div>

            {/* Filter Count & Current View */}
            <div className="text-[11px] sm:text-xs text-warm-gray flex items-center justify-between sm:justify-end gap-2">
              <span className="truncate">
                {kitchenType === 'all' && 'Semua Peralatan'}
                {kitchenType === 'resto' && 'Khusus Resto & Komersial'}
                {kitchenType === 'konvensional' && 'Khusus Konvensional & Hunian'}
              </span>
              <span className="px-2 py-0.5 bg-charcoal/10 text-charcoal rounded-full font-mono text-[10px] font-semibold flex-shrink-0">
                {filteredProducts.length} produk
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Category Filter Tabs (Touch Swipable on Phones & Tablets) */}
      <section className="border-b border-charcoal/5 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3.5">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-all flex-shrink-0 border ${
                  activeCategory === cat
                    ? 'bg-charcoal text-cream border-charcoal shadow-xs'
                    : 'bg-cream-dark/50 text-charcoal/70 border-charcoal/5 hover:text-charcoal active:bg-cream-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Type Info Banner */}
      <section className="bg-cream border-b border-charcoal/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          {kitchenType === 'resto' && (
            <div className="p-4 sm:p-5 bg-cream-dark rounded-xl border border-charcoal/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🔥</span>
                  <h3 className="font-semibold text-charcoal text-sm sm:text-base">Standar Dapur Restoran & Komersial</h3>
                </div>
                <p className="text-xs sm:text-sm text-warm-gray mt-1 leading-relaxed max-w-3xl">
                  Dirancang untuk durabilitas tinggi (heavy duty), api kencang bertekanan tinggi (high pressure), dan pembersihan cepat sesuai standar higienitas HACCP/BPOM untuk cafe, resto, hotel, dan catering.
                </p>
              </div>
              <a
                href="https://wa.me/6282260802076?text=Halo%20Bina%20Sekawan%20Engineering,%20saya%20ingin%20konsultasi%20pembuatan%20Dapur%20Resto%20Komersial."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center whitespace-nowrap px-4 py-2.5 bg-charcoal text-cream text-xs font-medium rounded hover:bg-charcoal-light transition-colors"
              >
                Konsultasi Layout Resto &rarr;
              </a>
            </div>
          )}

          {kitchenType === 'konvensional' && (
            <div className="p-4 sm:p-5 bg-cream-dark rounded-xl border border-charcoal/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">✨</span>
                  <h3 className="font-semibold text-charcoal text-sm sm:text-base">Standar Dapur Konvensional & Residensial</h3>
                </div>
                <p className="text-xs sm:text-sm text-warm-gray mt-1 leading-relaxed max-w-3xl">
                  Solusi kitchen set bebas lapuk, tahan air, dan 100% anti rayap untuk rumah tinggal, villa, dan kantor. Menggabungkan estetika modern, peredam suara, dan higienitas keluarga.
                </p>
              </div>
              <a
                href="https://wa.me/6282260802076?text=Halo%20Bina%20Sekawan%20Engineering,%20saya%20ingin%20konsultasi%20kitchen%20set%20stainless%20untuk%20dapur%20rumah/residensial."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center whitespace-nowrap px-4 py-2.5 bg-charcoal text-cream text-xs font-medium rounded hover:bg-charcoal-light transition-colors"
              >
                Konsultasi Kitchen Rumah &rarr;
              </a>
            </div>
          )}

          {kitchenType === 'all' && (
            <div className="p-3 sm:p-4 bg-cream-dark/50 rounded-lg border border-charcoal/5 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-warm-gray gap-2">
              <p>
                💡 Ketuk tab <strong>Resto</strong> atau <strong>Konvensional</strong> di atas untuk memfilter produk sesuai kebutuhan ruangan Anda.
              </p>
              <span className="text-[11px] text-charcoal/70">Custom dimensi & tebal plat</span>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid (1 Col Phone, 2 Col Tablet, 3 Col Desktop) */}
      <section className="bg-cream py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 sm:py-24 bg-cream-dark rounded-xl border border-dashed border-charcoal/10 px-4">
              <p className="text-charcoal font-medium text-base sm:text-lg mb-2">Tidak ada produk dalam kategori ini</p>
              <p className="text-warm-gray text-xs sm:text-sm mb-6">Silakan pilih kategori lain atau reset filter tipe dapur.</p>
              <button
                type="button"
                onClick={() => {
                  setKitchenType('all')
                  setActiveCategory('Semua')
                }}
                className="px-5 py-2.5 bg-charcoal text-cream text-xs font-medium rounded hover:bg-charcoal-light active:scale-95 transition-transform"
              >
                Reset Semua Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {filteredProducts.map((product) => {
                const isResto = product.kitchenType === 'resto'
                const isKonven = product.kitchenType === 'konvensional'
                const isBoth = product.kitchenType === 'both'

                return (
                  <div
                    key={product.title}
                    className="group bg-cream-dark/60 rounded-xl border border-charcoal/10 overflow-hidden flex flex-col justify-between hover:border-charcoal/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div>
                      {/* Product Image */}
                      <div className="relative aspect-[4/3] bg-cream overflow-hidden border-b border-charcoal/5">
                        <img
                          src={product.image}
                          alt={product.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Kitchen Type Badge */}
                        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
                          {isResto && (
                            <span className="px-2 py-0.5 bg-charcoal/90 text-cream text-[10px] font-semibold tracking-wider uppercase rounded-xs backdrop-blur-xs">
                              Dapur Resto
                            </span>
                          )}
                          {isKonven && (
                            <span className="px-2 py-0.5 bg-amber-900/90 text-cream text-[10px] font-semibold tracking-wider uppercase rounded-xs backdrop-blur-xs">
                              Dapur Konvensional
                            </span>
                          )}
                          {isBoth && (
                            <span className="px-2 py-0.5 bg-stone-800 text-cream text-[10px] font-semibold tracking-wider uppercase rounded-xs backdrop-blur-xs">
                              Resto & Residensial
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-5 md:p-6">
                        <div className="flex items-center justify-between text-[11px] text-warm-gray mb-1.5">
                          <span className="uppercase tracking-widest truncate max-w-[180px]">{product.category}</span>
                          <span className="font-mono bg-charcoal/5 px-2 py-0.5 rounded text-[10px]">Custom</span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-medium text-charcoal tracking-tight mb-2 group-hover:text-charcoal-light">
                          {product.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-warm-gray leading-relaxed mb-4 line-clamp-3">
                          {product.desc}
                        </p>

                        {/* Specs Pill List */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {product.specs.slice(0, 3).map((spec) => (
                            <span
                              key={spec}
                              className="text-[10px] sm:text-[11px] bg-cream px-2 py-0.5 rounded text-charcoal/80 border border-charcoal/5"
                            >
                              ✓ {spec}
                            </span>
                          ))}
                        </div>

                        {/* Suitable For */}
                        <div className="text-[11px] text-warm-gray border-t border-charcoal/5 pt-2.5">
                          <span className="font-medium text-charcoal/90">Aplikasi: </span>
                          <span className="truncate">{product.suitableFor}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons (Touch Friendly) */}
                    <div className="p-4 sm:p-5 md:p-6 pt-0 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                        className="flex-1 py-2.5 bg-cream border border-charcoal/20 text-charcoal text-xs font-semibold rounded-md active:bg-cream-dark transition-colors text-center min-h-[42px] flex items-center justify-center"
                      >
                        Detail Spek
                      </button>
                      <a
                        href={getWaLink(
                          product.title,
                          isResto ? 'Dapur Resto/Komersial' : isKonven ? 'Dapur Konvensional/Residensial' : 'Dapur'
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 bg-charcoal text-cream text-xs font-semibold rounded-md hover:bg-charcoal-light active:scale-98 transition-all text-center flex items-center justify-center gap-1.5 min-h-[42px]"
                      >
                        <span>WA Tanya</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Comparison Guide: Dapur Resto vs Dapur Konvensional */}
      <section className="border-t border-charcoal/5 bg-cream-dark/60 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="text-[11px] sm:text-xs uppercase tracking-widest text-warm-gray mb-2">
              Panduan Pemilihan
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-charcoal">
              Perbedaan Dapur Resto vs Dapur Konvensional
            </h2>
            <p className="text-warm-gray text-xs sm:text-sm md:text-base mt-3 leading-relaxed">
              Tim Bina Sekawan Engineering siap menyesuaikan spesifikasi material, kekuatan burner, dan sirkulasi udara sesuai kebutuhan ruangan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            {/* Dapur Resto Card */}
            <div className="bg-cream rounded-xl p-5 sm:p-7 md:p-8 border border-charcoal/10 shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🍳</span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-charcoal">Dapur Restoran & Komersial</h3>
                      <p className="text-[11px] text-warm-gray">Resto, Cafe, Hotel, Catering, Cloud Kitchen</p>
                    </div>
                  </div>
                  <span className="hidden xs:inline-block bg-charcoal text-cream text-[10px] px-2.5 py-1 font-medium rounded">
                    High Capacity
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm text-charcoal/80 mb-6 sm:mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Tekanan Api:</strong> High Pressure burner (Kwali Range/Wok) untuk kecepatan saji tinggi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Ketebalan Plat:</strong> SUS 304 tebal 1.2mm – 1.5mm tahan benturan peralatan berat nonstop.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Exhaust & Blower:</strong> Baffle Grease Filter & Blower hisap kuat untuk asap & minyak pekat.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Drainase & Sanitasi:</strong> Saluran pembuangan cepat dengan grease trap khusus anti mampet.</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => {
                  setKitchenType('resto')
                  window.scrollTo({ top: 350, behavior: 'smooth' })
                }}
                className="w-full py-3 bg-charcoal text-cream text-xs font-semibold rounded-md hover:bg-charcoal-light active:scale-98 transition-all text-center min-h-[44px]"
              >
                Lihat Produk Dapur Resto &rarr;
              </button>
            </div>

            {/* Dapur Konvensional Card */}
            <div className="bg-cream rounded-xl p-5 sm:p-7 md:p-8 border border-charcoal/10 shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🏡</span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-charcoal">Dapur Konvensional & Residensial</h3>
                      <p className="text-[11px] text-warm-gray">Rumah Tinggal, Villa, Apartemen, Pantry Kantor</p>
                    </div>
                  </div>
                  <span className="hidden xs:inline-block bg-amber-900 text-cream text-[10px] px-2.5 py-1 font-medium rounded">
                    Bebas Rayap
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm text-charcoal/80 mb-6 sm:mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Desain & Estetika:</strong> Finishing hairline satin halus, sudut rapi, menyatu dengan interior rumah.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Bebas Rayap & Jamur:</strong> 100% full stainless steel menggantikan multiplek kayu yang mudah lapuk.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Peredam Suara:</strong> Lapisan rubber deadener agar tidak berisik saat menaruh panci atau piring.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Perawatan Mudah:</strong> Cukup dilap basah, tidak menyerap noda kunyit/minyak masakan.</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => {
                  setKitchenType('konvensional')
                  window.scrollTo({ top: 350, behavior: 'smooth' })
                }}
                className="w-full py-3 bg-amber-900 text-cream text-xs font-semibold rounded-md hover:bg-amber-950 active:scale-98 transition-all text-center min-h-[44px]"
              >
                Lihat Produk Dapur Konvensional &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal (Mobile Safe Scroll & Touch Close) */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-charcoal/70 backdrop-blur-xs"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-cream rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-charcoal/15 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-cream-dark">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-charcoal/80 text-cream flex items-center justify-center hover:bg-charcoal active:scale-90 transition-all"
                aria-label="Tutup"
              >
                ✕
              </button>
            </div>
            <div className="p-5 sm:p-6">
              <span className="text-[11px] uppercase tracking-widest text-warm-gray">
                {selectedProduct.category} &bull;{' '}
                {selectedProduct.kitchenType === 'resto'
                  ? 'Dapur Resto'
                  : selectedProduct.kitchenType === 'konvensional'
                  ? 'Dapur Konvensional'
                  : 'Resto & Residensial'}
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-charcoal mt-1 mb-2">
                {selectedProduct.title}
              </h3>
              <p className="text-xs sm:text-sm text-warm-gray leading-relaxed mb-4">
                {selectedProduct.desc}
              </p>

              <div className="bg-cream-dark p-3.5 sm:p-4 rounded-lg mb-5">
                <h4 className="text-[11px] font-semibold text-charcoal uppercase tracking-wider mb-2">
                  Spesifikasi Teknis:
                </h4>
                <ul className="text-xs text-charcoal/80 space-y-1.5">
                  {selectedProduct.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 py-3 border border-charcoal/20 text-charcoal text-xs font-semibold rounded-md active:bg-cream-dark transition-colors"
                >
                  Tutup
                </button>
                <a
                  href={getWaLink(
                    selectedProduct.title,
                    selectedProduct.kitchenType === 'resto' ? 'Dapur Resto' : 'Dapur Konvensional'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-charcoal text-cream text-xs font-semibold rounded-md hover:bg-charcoal-light active:scale-98 transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>Hubungi WA</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="border-t border-charcoal/5 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <p className="text-[11px] sm:text-xs uppercase tracking-widest text-warm-gray mb-2">
            Kustomisasi Tanpa Batas
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-3 text-charcoal">
            Punya ukuran ruangan atau denah khusus?
          </h2>
          <p className="text-warm-gray mb-6 sm:mb-8 max-w-lg mx-auto text-xs sm:text-sm md:text-base">
            Kami menerima survei lokasi, pembuatan gambar kerja 2D/3D, dan penyesuaian spesifikasi sesuai budget Anda.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-charcoal text-cream text-xs sm:text-sm font-medium tracking-wide hover:bg-charcoal-light active:scale-98 transition-all rounded-md"
            >
              Konsultasi Proyek Gratis
            </Link>
            <a
              href="https://wa.me/6282260802076?text=Halo%20Bina%20Sekawan%20Engineering,%20saya%20ingin%20jadwalkan%20survei%20lokasi%20dapur."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-charcoal/20 text-charcoal text-xs sm:text-sm font-medium tracking-wide active:bg-cream-dark transition-all rounded-md"
            >
              <span>Jadwalkan Survei Lokasi</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
