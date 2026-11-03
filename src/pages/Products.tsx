import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getAssetUrl } from '../utils/asset'
import { trackWaClick } from '../utils/tracker'

export type KitchenType = 'all' | 'resto' | 'konvensional'

interface ProductItem {
  title: string
  kitchenType: 'resto' | 'konvensional'
  category: string
  desc: string
  specs: string[]
  suitableFor: string
  image: string
}

const products: ProductItem[] = [
  // =========================================================================
  // 1. DAPUR RESTO & KOMERSIAL (RESTO ONLY - TIDAK TERCAMPUR RUMAH)
  // =========================================================================
  {
    title: 'Custom Single Kwalirange Full SS',
    kitchenType: 'resto',
    category: 'Kompor & Kwali Range',
    desc: 'Kwali range heavy-duty dengan burner bertekanan tinggi (high-pressure) full stainless steel. Dirancang khusus untuk kecepatan dan volume memasak masakan Chinese food, oriental, dan asian wok di restoran komersial.',
    specs: ['SUS 304 Food Grade 1.2mm', 'High Pressure Wok Burner', 'Integrated Faucet & Soup Ring', 'Heavy Duty Frame Tahan Beban'],
    suitableFor: 'Restoran Chinese Food, Hotel, Catering, Food Court',
    image: getAssetUrl('/katalog-produk-kitchenset/custom.single.Kwalirange.full.ss.png'),
  },
  {
    title: 'Double Kwalirange Heavy Duty Restoran',
    kitchenType: 'resto',
    category: 'Kompor & Kwali Range',
    desc: 'Double kwali range 2 tungku kuali utama dengan sistem pendingin air pendingin meja kerja (water channel). Efisiensi tinggi untuk alur masak dapur restoran berkapasitas besar nonstop.',
    specs: ['SUS 304 Hairline Finish', '2 High Pressure Burners', 'Water Channel System Anti Panas', 'Blower Fan Assisted'],
    suitableFor: 'Restoran Ramai, Hotel Kitchen, Catering Besar',
    image: getAssetUrl('/katalog-produk-kitchenset/Double.Kwalieange.png'),
  },
  {
    title: 'Custom Single Kwalirange Compact Cafe',
    kitchenType: 'resto',
    category: 'Kompor & Kwali Range',
    desc: 'Single kwali range custom berdimensi ringkas untuk cafe, kedai makan, bistro, atau cloud kitchen dengan ruangan terbatas namun membutuhkan semburan api besar bertekanan tinggi.',
    specs: ['SUS 304 / SUS 201 Pilihan', 'High Pressure Torch', 'Kaki Adjustable Bullet Feet', 'Custom Dimensi Sesuai Layout'],
    suitableFor: 'Cafe, Cloud Kitchen, Bistro, Kedai Makan',
    image: getAssetUrl('/katalog-produk-kitchenset/custom.single.kwalirange.png'),
  },
  {
    title: 'Stove 4 Burner Heavy Duty Restoran',
    kitchenType: 'resto',
    category: 'Kompor & Kwali Range',
    desc: 'Kompor gas komersial 4 tungku open top dengan tatakan cast-iron tebal. Sangat serbaguna untuk menumis, membuat saus, dan memasak berbagai menu resto secara bersamaan.',
    specs: ['4 Heavy-duty Commercial Burners', 'Cast Iron Pan Supports Tahan Panci Berat', 'Removable Drip Crumb Tray', 'Konstruksi Pipa Gas Heavy Gauge'],
    suitableFor: 'Restoran, Cafe, Hotel Line Kitchen, Katering',
    image: getAssetUrl('/katalog-produk-kitchenset/Stove.4Burner.png'),
  },
  {
    title: 'Gas Flat Griddle Heavy Plate Restoran',
    kitchenType: 'resto',
    category: 'Kompor & Kwali Range',
    desc: 'Plat wajan datar baja tebal khusus restoran untuk memanggang steak, patty burger, roti bakar, dan teppanyaki. Panas merata di seluruh permukaan dengan saluran pembuangan minyak praktis.',
    specs: ['Plat Baja Tebal 10mm Anti Lengkung', 'Dual Gas Controller Presisi', 'Kotak Penampung Lemak Removable', 'Splash Guard Penahan Cipratan Minyak'],
    suitableFor: 'Restoran Steak, Burger Bar, Cafe, Hotel Buffet',
    image: getAssetUrl('/katalog-produk-kitchenset/Gas.Flat.Griled.png'),
  },
  {
    title: 'Noodle Cooker Gas 6 Lubang Resto',
    kitchenType: 'resto',
    category: 'Kompor & Kwali Range',
    desc: 'Mesin rebusan mie stainless steel gas dengan 6 keranjang saringan terpisah. Suhu air mendidih cepat dan stabil untuk melayani pesanan mie atau ramen bertubi-tubi.',
    specs: ['SUS 304 Food Grade Tank Anti Korosi', '6 Keranjang Saringan Individual', 'Drain Valve Pembuangan Air Praktis', 'Pengatur Api Hemat Gas'],
    suitableFor: 'Resto Mie, Kedai Bakso, Ramen Bar, Resto Cepat Saji',
    image: getAssetUrl('/katalog-produk-kitchenset/Noodle.coocker.png'),
  },
  {
    title: 'Stockpot Otomatis Mixer Komersial',
    kitchenType: 'resto',
    category: 'Kompor & Kwali Range',
    desc: 'Panci rebusan kaldu kapasitas puluhan hingga ratusan liter dilengkapi motor pengaduk mekanis otomatis. Mencegah endapan kuah gosong dan mengekstrak sari kaldu secara maksimal.',
    specs: ['Kapasitas 80 Liter – 200 Liter', 'Motorized Agitator Pengaduk Otomatis', 'Double Jacket Insulation Panas', 'Kran Pembuangan Bawah Khusus Kuah'],
    suitableFor: 'Pabrik Kaldu, Restoran Soto / Rawon, Katering Skala Besar',
    image: getAssetUrl('/katalog-produk-kitchenset/Stockpot.otomatis.png'),
  },
  {
    title: 'Stockpot Manual Custom Dudukan Rendah',
    kitchenType: 'resto',
    category: 'Kompor & Kwali Range',
    desc: 'Tungku kompor stockpot dudukan rendah (low boy burner) untuk memudahkan koki mengangkat panci kaldu berkapasitas besar tanpa risiko cedera atau tumpah.',
    specs: ['Cast Iron Heavy Burner Api Besar', 'Konstruksi Mampu Menahan Beban 150kg+', 'Drip Pan Stainless Mudah Dicuci', 'Desain Ergonomis Dapur Komersial'],
    suitableFor: 'Katering, Dapur Hotel, Restoran Kuah & Soup',
    image: getAssetUrl('/katalog-produk-kitchenset/stockpot.manual.custom.png'),
  },
  {
    title: 'Exhaust Wall Hood Commercial & Baffle Filter',
    kitchenType: 'resto',
    category: 'Exhaust & Ventilasi',
    desc: 'Sistem canopy hood dinding komersial lengkap dengan saringan minyak (baffle filter) stainless steel, saluran drain minyak, dan koneksi ducting blower daya hisap tinggi.',
    specs: ['SUS 304/201 Tebal 1.2mm', 'Stainless Baffle Grease Filter Washable', 'Integrated Oil Drain Tray & Cup', 'Lampu LED Vapour Proof Anti Uap Panas'],
    suitableFor: 'Dapur Restoran, Hotel, Food Court, Cloud Kitchen',
    image: getAssetUrl('/katalog-produk-kitchenset/Exhaust.wall.Hood.png'),
  },
  {
    title: 'Double Sink Heavy Duty Pot Wash Restoran',
    kitchenType: 'resto',
    category: 'Sink & Washing',
    desc: 'Bak cuci piring komersial 2 kompartemen mangkuk ekstra dalam untuk mencuci wajan kwali besar, panci stockpot, dan baskom dapur kotor secara efisien.',
    specs: ['SUS 304 Tebal 1.2mm Tahan Asam & Garam', 'Mangkuk Dalam 35cm (Deep Bowl Pot Wash)', 'Backsplash 15cm Mencegah Cipratan Dinding', 'Kaki Pipa SS dengan Bullet Feet Adjustable'],
    suitableFor: 'Area Pencucian Restoran, Hotel Dishwashing, Katering',
    image: getAssetUrl('/katalog-produk-kitchenset/double.sink.png'),
  },
  {
    title: 'Work Table Solid Stainless Steel Restoran',
    kitchenType: 'resto',
    category: 'Meja Kerja & Prep',
    desc: 'Meja kerja persiapan bahan makanan komersial tipe solid dengan plat stainless steel tebal dan lapisan peredam suara. Sangat kuat untuk memotong daging dan tugas berat.',
    specs: ['SUS 304 Plat Tebal Food Grade', 'Sound Deadening Underlayer Anti Berisik', 'Under-shelf Rak Bawah Penyimpanan', 'Daya Beban Meja Hingga 250kg'],
    suitableFor: 'Dapur Resto, Toko Roti (Bakery), Butchery Daging',
    image: getAssetUrl('/katalog-produk-kitchenset/work.table.solid.png'),
  },
  {
    title: 'Work Table Prep With Undershelf Restoran',
    kitchenType: 'resto',
    category: 'Meja Kerja & Prep',
    desc: 'Meja preparasi multifungsi dengan rak bawah untuk meletakkan baskom, nampan, dan peralatan masak. Ukuran panjang, lebar, dan tinggi dapat disesuaikan denah dapur.',
    specs: ['Custom Dimensi Panjang & Lebar', 'Finishing Hairline Satin Tahan Gores', 'Adjustable Stainless Feet Stabilizer', 'Koneksi Las TIG Halus & Kuat'],
    suitableFor: 'Dapur Komersial Resto, Cafe, Hotel, Rumah Sakit',
    image: getAssetUrl('/katalog-produk-kitchenset/work.table.png'),
  },
  {
    title: 'Punched Rack 4 Tiers Storage Komersial',
    kitchenType: 'resto',
    category: 'Rak & Storage',
    desc: 'Rak penyimpanan 4 tingkat dengan ambalan plat berlubang (punched). Menjaga sirkulasi udara lancar untuk menyimpan perlengkapan dapur kering maupun di dalam cold room.',
    specs: ['SUS 304 Anti Karat Seumur Hidup', 'Sirkulasi Udara Anti Jamur & Lembap', 'Kapasitas Tiap Ambalan 80kg', 'Pilihan Model Las Paten / Knockdown'],
    suitableFor: 'Gudang Dapur Kering, Walk-in Chiller / Cold Room Restoran',
    image: getAssetUrl('/katalog-produk-kitchenset/Punched.rack.4tiers.png'),
  },
  {
    title: 'Gastronorm Pan & Buffet Counter Komersial',
    kitchenType: 'resto',
    category: 'Kompor & Kwali Range',
    desc: 'Wadah standar GN (Gastronorm) stainless steel food-grade untuk penyimpanan bahan di chiller line, pemanasan bain marie, maupun penyajian prasmanan hotel.',
    specs: ['Standar GN Internasional GN 1/1, 1/2, 1/3', 'Deep Draw Seamless Tanpa Sambungan', 'Bisa Digunakan Suhu Dingin & Panas', 'Higienis Sesuai Regulasi BPOM/HACCP'],
    suitableFor: 'Hotel Buffet, Katering, Restoran All-You-Can-Eat, Salad Bar',
    image: getAssetUrl('/katalog-produk-kitchenset/Gasstronom.png'),
  },

  {
    title: 'Single Sink Big Bowl Commercial Restoran',
    kitchenType: 'resto',
    category: 'Sink & Washing',
    desc: 'Bak cuci piring stainless steel satu mangkuk ekstra besar dan dalam dengan kaki pipa kokoh, dirancang untuk mencuci peralatan masak restoran komersial.',
    specs: ['SUS 304 Food Grade 1.2mm', 'Mangkuk Dalam 35cm Jumbo', 'Kaki Pipa Stainless Adjustable Feet', 'Kapasitas Cuci Komersial'],
    suitableFor: 'Restoran, Cafe, Katering, Hotel Dishwashing',
    image: getAssetUrl('/katalog-produk-kitchenset/Single.sink.bigbowl.png'),
  },
  {
    title: 'Instalasi Full Line Kitchen Restoran Custom',
    kitchenType: 'resto',
    category: 'Kompor & Kwali Range',
    desc: 'Instalasi lengkap lini dapur komersial terpadu mengikuti ukuran ruangan: kwali range, meja kerja prep, canopy exhaust hood, serta sistem ducting pembuangan asap.',
    specs: ['SUS 304 Heavy Duty Full Line', 'Terintegrasi Exhaust & Blower', 'Desain Sesuai Luas Dapur Resto', 'Standar Food Safety HACCP'],
    suitableFor: 'Restoran Komersial, Dapur Hotel, Cloud Kitchen, Food Court',
    image: getAssetUrl('/Display/pemasangan-kitchen-sesuai-ruangan.png'),
  },
  {
    title: 'Central Island Work Table & Prep Restoran',
    kitchenType: 'resto',
    category: 'Meja Kerja & Prep',
    desc: 'Meja persiapan stainless steel tipe island tengah untuk jalur persiapan dan plating hidangan di dapur restoran berskala besar.',
    specs: ['SUS 304 Hairline Satin Tebal', 'Under-shelf & Rak Bawah Luas', 'Sudut Meja Presisi & Rapi', 'Tahan Beban Kerja Resto Nonstop'],
    suitableFor: 'Dapur Tengah Restoran, Hotel Kitchen, Catering Besar',
    image: getAssetUrl('/Display/pemasangan-kitchen-custom.png'),
  },

  // =========================================================================
  // 2. DAPUR KONVENSIONAL / RUMAH (RUMAH & HUNIAN ONLY - TIDAK TERCAMPUR RESTO)
  // =========================================================================
  {
    title: 'Kitchen Set Stainless Top Marmer Mewah',
    kitchenType: 'konvensional',
    category: 'Kitchen Set & Kabinet',
    desc: 'Kitchen set hunian pribadi dengan kombinasi top table marmer onyx putih berurat mewah dan kabinet bawah full stainless steel SUS 304 hairline finish. 100% tahan air, anti rayap, bebas lapuk seumur hidup, dan higienis.',
    specs: ['SUS 304 Hairline Satin Mewah', 'Top Table Marmer Onyx Alami', '100% Bebas Rayap, Tikus & Jamur', 'Engsel Soft-Close Hydraulic Halus'],
    suitableFor: 'Rumah Mewah, Villa Eksklusif, Dapur Bersih Residensial',
    image: getAssetUrl('/katalog-produk-kitchenset/kitchen-set-stainless-marmer-mewah.jpg'),
  },
  {
    title: 'Rak Piring Tarik 2-Tier Stainless Steel',
    kitchenType: 'konvensional',
    category: 'Rak & Storage',
    desc: 'Sistem rak pengering piring, mangkuk, dan gelas tarik 2 tingkat berbahan stainless steel food grade. Terpasang tersembunyi di dalam kabinet bawah dapur rumah dengan rel hidrolik geser halus.',
    specs: ['SUS 304 Kawat Tebal Kokoh', '2-Tier Kompartemen Piring & Gelas', 'Soft-Close Heavy Duty Runner', 'Nampan Bawah Penampung Tetesan Air'],
    suitableFor: 'Dapur Rumah Tangga, Pantry Apartemen, Dapur Hunian',
    image: getAssetUrl('/katalog-produk-kitchenset/rak-piring-tarik-stainless.jpg'),
  },
  {
    title: 'Laci Sendok Organizer Full Stainless Steel',
    kitchenType: 'konvensional',
    category: 'Kitchen Set & Kabinet',
    desc: 'Laci penyimpanan peralatan makan keluarga berbahan full stainless steel dengan sekat sendok, garpu, dan pisau higienis. Struktur laci kokoh anti melengkung dengan rel bantalan bola hidrolik soft-close.',
    specs: ['Box Laci Full Stainless SUS 304', 'Custom Cutlery Divider Compartment', 'Hydraulic Soft-Close Slider', 'Kapasitas Beban Laci 35kg'],
    suitableFor: 'Dapur Rumah Tangga Modern, Kitchen Set Rumah Mewah',
    image: getAssetUrl('/katalog-produk-kitchenset/laci-sendok-stainless-organizer.jpg'),
  },
  {
    title: 'Kabinet Bawah Sudut Stainless Steel Custom',
    kitchenType: 'konvensional',
    category: 'Kitchen Set & Kabinet',
    desc: 'Kabinet bawah sudut (L-shape) full stainless steel dengan ambalan 2 tingkat. Memaksimalkan sudut mati dapur hunian untuk penyimpanan panci dan peralatan masak agar rapi, mudah dijangkau, dan bebas lembap.',
    specs: ['SUS 304 Tebal 1.2mm Food Grade', 'Ambalan Rak 2 Tingkat Kokoh', 'Pintu Sudut Bukaan Lebar Ergonomis', 'Anti Tikus, Rayap, & Bebas Bau Apek'],
    suitableFor: 'Dapur L-Shape Hunian, Dapur Rumah Tinggal & Villa',
    image: getAssetUrl('/katalog-produk-kitchenset/kabinet-sudut-stainless-storage.jpg'),
  },
]

export default function Products() {
  const [kitchenType, setKitchenType] = useState<KitchenType>('all')
  const [activeCategory, setActiveCategory] = useState<string>('Semua')
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null)

  // Hitung jumlah masing-masing tipe dapur
  const restoCount = useMemo(() => products.filter((p) => p.kitchenType === 'resto').length, [])
  const konvenCount = useMemo(() => products.filter((p) => p.kitchenType === 'konvensional').length, [])

  // Dynamic category list based on currently active kitchenType so options are 100% relevant
  const availableCategories = useMemo(() => {
    const currentProducts =
      kitchenType === 'all'
        ? products
        : products.filter((p) => p.kitchenType === kitchenType)

    const uniqueCats = Array.from(new Set(currentProducts.map((p) => p.category)))
    return ['Semua', ...uniqueCats]
  }, [kitchenType])

  // STRICT FILTER: Resto HANYA menampilkan resto, Konvensional HANYA menampilkan konvensional (TIDAK NYAMPUR)
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // 1. Tipe Dapur Filter (Strict separation)
      if (kitchenType === 'resto' && item.kitchenType !== 'resto') {
        return false
      }
      if (kitchenType === 'konvensional' && item.kitchenType !== 'konvensional') {
        return false
      }

      // 2. Sub-Category Filter
      if (activeCategory !== 'Semua' && item.category !== activeCategory) {
        return false
      }

      return true
    })
  }, [kitchenType, activeCategory])

  const handleSelectKitchenType = (type: KitchenType) => {
    setKitchenType(type)
    setActiveCategory('Semua') // Reset sub-kategori agar tidak nyangkut saat ganti tipe dapur
  }

  const getWaLink = (productTitle: string, typeDesc: string) => {
    const text = encodeURIComponent(
      `Halo Bina Sekawan Engineering, saya tertarik dan ingin konsultasi mengenai produk "${productTitle}" untuk kebutuhan ${typeDesc}. Mohon info spesifikasi dan penawarannya.`
    )
    return `https://wa.me/6282260802076?text=${text}`
  }

  return (
    <>
      {/* Hero Header */}
      <section className="border-b border-charcoal/5 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal/5 rounded-full text-[11px] sm:text-xs uppercase tracking-widest text-warm-gray mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Fabrikasi Kitchen Stainless Custom
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.12] max-w-3xl text-charcoal">
            Katalog terpisah untuk{' '}
            <span className="text-warm-gray">dapur resto & dapur rumah.</span>
          </h1>
          <p className="text-warm-gray text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mt-4 sm:mt-6">
            Peralatan dibuat kustom presisi di workshop kami dengan standar food-grade SUS 304.
            Pilih katalog khusus <strong>Dapur Resto (Komersial)</strong> untuk kapasitas besar atau <strong>Dapur Konvensional (Rumah / Residensial)</strong> untuk hunian bebas rayap seumur hidup.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-charcoal/8">
            <div className="bg-cream-dark/40 p-3 sm:p-4 rounded-lg">
              <p className="text-lg sm:text-xl font-semibold text-charcoal">Dapur Resto</p>
              <p className="text-[11px] text-warm-gray mt-0.5">{restoCount} Produk Heavy Duty</p>
            </div>
            <div className="bg-cream-dark/40 p-3 sm:p-4 rounded-lg">
              <p className="text-lg sm:text-xl font-semibold text-charcoal">Dapur Rumah</p>
              <p className="text-[11px] text-warm-gray mt-0.5">{konvenCount} Produk Anti Rayap</p>
            </div>
            <div className="bg-cream-dark/40 p-3 sm:p-4 rounded-lg">
              <p className="text-lg sm:text-xl font-semibold text-charcoal">SUS 304 Asli</p>
              <p className="text-[11px] text-warm-gray mt-0.5">Higienis & Food Grade</p>
            </div>
            <div className="bg-cream-dark/40 p-3 sm:p-4 rounded-lg">
              <p className="text-lg sm:text-xl font-semibold text-charcoal">Free Survei</p>
              <p className="text-[11px] text-warm-gray mt-0.5">Desain 2D/3D & Estimasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Kitchen Type Selector (Strict Tab Navigation) */}
      <section className="bg-cream/95 border-b border-charcoal/8 sticky top-20 md:top-24 z-30 backdrop-blur-md transition-all shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Primary Segmented Control */}
            <div className="flex items-center gap-2">
              <div className="grid grid-cols-3 gap-1.5 w-full sm:w-auto bg-cream-dark/70 p-1 rounded-lg border border-charcoal/10 shadow-xs">
                <button
                  type="button"
                  onClick={() => handleSelectKitchenType('all')}
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
                  onClick={() => handleSelectKitchenType('resto')}
                  className={`px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all text-center flex items-center justify-center gap-1 ${
                    kitchenType === 'resto'
                      ? 'bg-charcoal text-cream shadow-xs'
                      : 'text-charcoal/80 hover:text-charcoal active:bg-cream'
                  }`}
                >
                  <span>🍳</span>
                  <span className="truncate">Dapur Resto ({restoCount})</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectKitchenType('konvensional')}
                  className={`px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all text-center flex items-center justify-center gap-1 ${
                    kitchenType === 'konvensional'
                      ? 'bg-amber-900 text-cream shadow-xs'
                      : 'text-charcoal/80 hover:text-charcoal active:bg-cream'
                  }`}
                >
                  <span>🏡</span>
                  <span className="truncate">Dapur Rumah ({konvenCount})</span>
                </button>
              </div>
            </div>

            {/* Filter Count & Current View Description */}
            <div className="text-[11px] sm:text-xs text-warm-gray flex items-center justify-between sm:justify-end gap-2">
              <span className="truncate font-medium text-charcoal">
                {kitchenType === 'all' && 'Koleksi Seluruh Produk'}
                {kitchenType === 'resto' && '🔥 Khusus Dapur Resto & Komersial'}
                {kitchenType === 'konvensional' && '🏡 Khusus Dapur Rumah & Residensial'}
              </span>
              <span className="px-2 py-0.5 bg-charcoal/10 text-charcoal rounded-full font-mono text-[10px] font-semibold flex-shrink-0">
                {filteredProducts.length} item
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Category Filter Tabs (Dynamically matching currently selected kitchen type) */}
      <section className="border-b border-charcoal/5 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3.5">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
            {availableCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex-shrink-0 border ${
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

      {/* Informative Banner For Active Kitchen Type */}
      <section className="bg-cream border-b border-charcoal/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          {kitchenType === 'resto' && (
            <div className="p-4 sm:p-5 bg-cream-dark rounded-xl border border-charcoal/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🍳</span>
                  <h3 className="font-semibold text-charcoal text-sm sm:text-base">Katalog Khusus Dapur Restoran & Komersial</h3>
                </div>
                <p className="text-xs sm:text-sm text-warm-gray mt-1 leading-relaxed max-w-3xl">
                  Hanya menampilkan peralatan berstandar heavy-duty untuk restoran, hotel, cafe, dan catering: Kwali Range api kencang, kompor 4 tungku, noodle cooker, stockpot otomatis, canopy exhaust hood, meja prep komersial, dan bak cuci pot wash tebal.
                </p>
              </div>
              <a
                href="https://wa.me/6282260802076?text=Halo%20Bina%20Sekawan%20Engineering,%20saya%20ingin%20konsultasi%20pembuatan%20Dapur%20Resto%20Komersial."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWaClick({
                    sourcePage: '/products',
                    productName: 'Banner Banner Dapur Resto',
                    category: 'Dapur Restoran (Komersial)'
                  })
                }
                className="w-full sm:w-auto text-center whitespace-nowrap px-4 py-2.5 bg-charcoal text-cream text-xs font-semibold rounded hover:bg-charcoal-light transition-colors"
              >
                Konsultasi Layout Resto &rarr;
              </a>
            </div>
          )}

          {kitchenType === 'konvensional' && (
            <div className="p-4 sm:p-5 bg-amber-950/5 rounded-xl border border-amber-900/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🏡</span>
                  <h3 className="font-semibold text-charcoal text-sm sm:text-base">Katalog Khusus Dapur Konvensional & Rumah Tinggal</h3>
                </div>
                <p className="text-xs sm:text-sm text-warm-gray mt-1 leading-relaxed max-w-3xl">
                  Hanya menampilkan produk untuk hunian pribadi, villa, dan apartemen: Kitchen set stainless top marmer onyx, rak piring tarik 2-tier dalam kabinet, laci sendok organizer, kabinet sudut L-shape, sink jumbo single bowl, dan exhaust canopy hening anti bising. 100% anti rayap dan bebas lapuk!
                </p>
              </div>
              <a
                href="https://wa.me/6282260802076?text=Halo%20Bina%20Sekawan%20Engineering,%20saya%20ingin%20konsultasi%20kitchen%20set%20stainless%20dapur%20rumah/residensial."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWaClick({
                    sourcePage: '/products',
                    productName: 'Banner Dapur Rumah',
                    category: 'Dapur Konvensional (Rumah)'
                  })
                }
                className="w-full sm:w-auto text-center whitespace-nowrap px-4 py-2.5 bg-amber-900 text-cream text-xs font-semibold rounded hover:bg-amber-950 transition-colors"
              >
                Konsultasi Kitchen Rumah &rarr;
              </a>
            </div>
          )}

          {kitchenType === 'all' && (
            <div className="p-3 sm:p-4 bg-cream-dark/50 rounded-lg border border-charcoal/5 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-warm-gray gap-2">
              <p>
                💡 Tekan tab <strong>🍳 Dapur Resto</strong> untuk melihat khusus peralatan komersial atau <strong>🏡 Dapur Rumah</strong> untuk melihat khusus kitchen set hunian bebas rayap.
              </p>
              <span className="text-[11px] text-charcoal/70">Tiap produk dipisahkan rapi sesuai fungsi</span>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid (Strictly separated per tab) */}
      <section className="bg-cream py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 sm:py-24 bg-cream-dark rounded-xl border border-dashed border-charcoal/10 px-4">
              <p className="text-charcoal font-medium text-base sm:text-lg mb-2">Tidak ada produk dalam sub-kategori ini</p>
              <p className="text-warm-gray text-xs sm:text-sm mb-6">Silakan pilih sub-kategori lain atau tampilkan Semua.</p>
              <button
                type="button"
                onClick={() => setActiveCategory('Semua')}
                className="px-5 py-2.5 bg-charcoal text-cream text-xs font-medium rounded hover:bg-charcoal-light active:scale-95 transition-transform"
              >
                Tampilkan Semua Item
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {filteredProducts.map((product) => {
                const isResto = product.kitchenType === 'resto'
                const isKonven = product.kitchenType === 'konvensional'

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
                              🍳 Dapur Resto
                            </span>
                          )}
                          {isKonven && (
                            <span className="px-2 py-0.5 bg-amber-900/95 text-cream text-[10px] font-semibold tracking-wider uppercase rounded-xs backdrop-blur-xs">
                              🏡 Dapur Rumah
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
                          isResto ? 'Dapur Restoran/Komersial' : 'Dapur Rumah/Residensial'
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackWaClick({
                            sourcePage: '/products',
                            productName: product.title,
                            category: isResto ? 'Dapur Restoran' : 'Dapur Konvensional'
                          })
                        }
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
              Perbedaan Dapur Resto vs Dapur Rumah (Konvensional)
            </h2>
            <p className="text-warm-gray text-xs sm:text-sm md:text-base mt-3 leading-relaxed">
              Keduanya dibuat menggunakan material stainless steel food-grade SUS 304, namun dirancang dengan spesifikasi dan fungsi yang berbeda.
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
                  handleSelectKitchenType('resto')
                  window.scrollTo({ top: 350, behavior: 'smooth' })
                }}
                className="w-full py-3 bg-charcoal text-cream text-xs font-semibold rounded-md hover:bg-charcoal-light active:scale-98 transition-all text-center min-h-[44px]"
              >
                Lihat Khusus Katalog Dapur Resto &rarr;
              </button>
            </div>

            {/* Dapur Konvensional Card */}
            <div className="bg-cream rounded-xl p-5 sm:p-7 md:p-8 border border-charcoal/10 shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🏡</span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-charcoal">Dapur Rumah (Konvensional)</h3>
                      <p className="text-[11px] text-warm-gray">Rumah Tinggal, Villa, Apartemen, Pantry Hunian</p>
                    </div>
                  </div>
                  <span className="hidden xs:inline-block bg-amber-900 text-cream text-[10px] px-2.5 py-1 font-medium rounded">
                    Bebas Rayap
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm text-charcoal/80 mb-6 sm:mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Desain & Estetika:</strong> Finishing hairline satin halus, sudut rapi, menyatu dengan marmer atau granit hunian.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Bebas Rayap & Jamur:</strong> 100% full stainless steel menggantikan multiplek kayu yang mudah lapuk dan berbau.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Peredam Suara:</strong> Lapisan rubber deadener agar tidak berisik saat menaruh panci atau piring.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Aksesoris Terpadu:</strong> Rak piring tarik 2-tier, laci sendok organizer, dan kabinet sudut luas.</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => {
                  handleSelectKitchenType('konvensional')
                  window.scrollTo({ top: 350, behavior: 'smooth' })
                }}
                className="w-full py-3 bg-amber-900 text-cream text-xs font-semibold rounded-md hover:bg-amber-950 active:scale-98 transition-all text-center min-h-[44px]"
              >
                Lihat Khusus Katalog Dapur Rumah &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
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
                  ? 'Dapur Restoran & Komersial'
                  : 'Dapur Rumah & Residensial'}
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
                    selectedProduct.kitchenType === 'resto' ? 'Dapur Resto/Komersial' : 'Dapur Rumah/Hunian'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWaClick({
                      sourcePage: '/products',
                      productName: selectedProduct.title,
                      category: selectedProduct.kitchenType === 'resto' ? 'Dapur Restoran' : 'Dapur Konvensional'
                    })
                  }
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
            Kami melayani survei langsung ke lokasi, pembuatan gambar kerja 2D/3D, dan penyesuaian spesifikasi sesuai budget Anda.
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
              onClick={() =>
                trackWaClick({
                  sourcePage: '/products',
                  productName: 'Jadwalkan Survei Lokasi Dapur (Bottom CTA)',
                  category: 'Survei Lokasi'
                })
              }
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
