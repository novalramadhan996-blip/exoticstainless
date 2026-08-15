import kitchen from "@/assets/product-kitchen.jpg";
import hospital from "@/assets/product-hospital.jpg";
import lab from "@/assets/product-lab.jpg";
import storage from "@/assets/product-storage.jpg";
import handrails from "@/assets/product-handrails.jpg";
import food from "@/assets/product-food.jpg";

export const COMPANY = {
  name: "Exotic Stainless",
  short: "Exotic Stainless",
  phone: "+62 895-3303-36479",
  email: "info@exoticstainless",
  office: "6°12'07.6\"S 107°02'30.3\"E, Kabupaten Bekasi, Jawa Barat",
  hours: "Senin – Sabtu · 08.00 – 18.00 WIB",
  whatsapp: "62895330336479",
  mapLat: -6.202111,
  mapLng: 107.041750,
  mapsUrl: "https://www.google.com/maps?q=-6.202111,107.041750",
};

export type Product = {
  slug: string;
  title: string;
  description: string;
  image: string;
  intro: string;
  body: string[];
  features: string[];
  specs: { label: string; value: string }[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "peralatan-dapur",
    title: "Peralatan Dapur",
    description: "Meja kerja, bak cuci, dan hood kelas komersial yang dirancang untuk dapur bervolume tinggi.",
    image: kitchen,
    intro: "Lini peralatan dapur komersial kami dibuat untuk ritme kerja dapur hotel, restoran, dan katering berskala besar.",
    body: [
      "Setiap unit difabrikasi dari stainless steel grade 304 dengan ketebalan yang disesuaikan beban kerja. Permukaan dipoles halus agar mudah dibersihkan dan tidak menyimpan residu makanan.",
      "Rangka diperkuat dengan bracing internal sehingga meja tetap stabil meski digunakan untuk pemotongan berat setiap hari. Kaki dilengkapi adjustable feet untuk menyesuaikan lantai yang tidak rata.",
      "Kami memproduksi sesuai layout dapur Anda — mulai dari pengukuran di lokasi, gambar kerja, hingga instalasi dan commissioning bersama tim operasional.",
    ],
    features: [
      "Stainless steel 304 food grade",
      "Sambungan las mulus dan higienis",
      "Ukuran kustom sesuai layout dapur",
      "Adjustable feet anti-korosi",
    ],
    specs: [
      { label: "Material", value: "SS 304 / 316" },
      { label: "Ketebalan", value: "1,0 – 1,5 mm" },
      { label: "Finishing", value: "Brushed / Mirror" },
      { label: "Waktu Produksi", value: "2 – 4 minggu" },
    ],
  },
  {
    slug: "peralatan-rumah-sakit",
    title: "Peralatan Rumah Sakit",
    description: "Troli, lemari, dan perlengkapan medis yang higienis dan mudah disterilkan.",
    image: hospital,
    intro: "Perlengkapan medis stainless yang memenuhi tuntutan kebersihan ruang perawatan, ruang operasi, dan laboratorium klinis.",
    body: [
      "Desain tanpa sudut mati memastikan tidak ada celah tempat bakteri berkembang. Semua sambungan dilas penuh lalu dihaluskan hingga rata dengan permukaan.",
      "Material 316L direkomendasikan untuk area yang sering terpapar disinfektan agresif karena ketahanan korosinya jauh lebih tinggi.",
      "Roda medical grade dengan rem ganda memberi mobilitas aman di koridor dan ruang tindakan.",
    ],
    features: [
      "Permukaan mudah disterilkan",
      "Opsi material 316L tahan disinfektan",
      "Roda medical grade dengan rem",
      "Sesuai standar higienis fasilitas kesehatan",
    ],
    specs: [
      { label: "Material", value: "SS 304 / 316L" },
      { label: "Ketebalan", value: "1,0 – 1,2 mm" },
      { label: "Finishing", value: "Brushed No.4" },
      { label: "Waktu Produksi", value: "2 – 3 minggu" },
    ],
  },
  {
    slug: "peralatan-laboratorium",
    title: "Peralatan Laboratorium",
    description: "Meja lab presisi, lemari asam, dan fitting tahan korosi.",
    image: lab,
    intro: "Furnitur dan fitting laboratorium yang presisi, stabil, dan tahan terhadap bahan kimia keras.",
    body: [
      "Meja lab kami dirancang dengan toleransi kerataan ketat agar instrumen sensitif bekerja akurat tanpa getaran.",
      "Lemari asam dilengkapi jalur exhaust yang dihitung sesuai volume ruang dan jenis reagen yang digunakan.",
      "Semua fitting dan bracket menggunakan material tahan korosi sehingga usia pakai panjang meski terpapar uap kimia.",
    ],
    features: [
      "Kerataan permukaan presisi",
      "Tahan bahan kimia dan reagen",
      "Integrasi jalur utilitas dan exhaust",
      "Modular dan mudah dikembangkan",
    ],
    specs: [
      { label: "Material", value: "SS 316L" },
      { label: "Ketebalan", value: "1,2 – 2,0 mm" },
      { label: "Finishing", value: "Brushed / Epoxy hybrid" },
      { label: "Waktu Produksi", value: "3 – 5 minggu" },
    ],
  },
  {
    slug: "peralatan-pengolahan-makanan",
    title: "Peralatan Pengolahan Makanan",
    description: "Tangki, konveyor, dan permukaan yang memenuhi standar keamanan pangan.",
    image: food,
    intro: "Peralatan produksi pangan untuk lini kerja berkelanjutan dengan standar sanitasi tinggi.",
    body: [
      "Tangki dan hopper difabrikasi dengan radius dalam yang cukup besar agar mudah dibersihkan dan tidak menahan produk.",
      "Konveyor dirancang dengan sistem quick-release sehingga proses sanitasi harian bisa dilakukan cepat tanpa alat khusus.",
      "Kami mendampingi validasi kebersihan bersama tim QA/QC Anda sebelum lini dinyatakan siap produksi.",
    ],
    features: [
      "Desain sanitary dan mudah dibongkar",
      "Radius dalam anti-residu",
      "Ketertelusuran material penuh",
      "Cocok untuk produksi kontinu",
    ],
    specs: [
      { label: "Material", value: "SS 304 / 316" },
      { label: "Ketebalan", value: "1,5 – 3,0 mm" },
      { label: "Finishing", value: "Sanitary polish" },
      { label: "Waktu Produksi", value: "4 – 6 minggu" },
    ],
  },
  {
    slug: "penyimpanan-industri",
    title: "Penyimpanan Industri",
    description: "Rak dan sistem racking heavy-duty untuk gudang dan pabrik.",
    image: storage,
    intro: "Sistem penyimpanan heavy-duty yang dihitung berdasarkan beban aktual dan alur material di fasilitas Anda.",
    body: [
      "Setiap rak dihitung kapasitas bebannya oleh tim engineering, lengkap dengan faktor keamanan dan simulasi pembebanan.",
      "Konfigurasi bay dan tinggi level disesuaikan dengan dimensi pallet serta jangkauan forklift yang digunakan.",
      "Instalasi dilakukan dengan anchoring sesuai kondisi lantai dan disertai dokumentasi kapasitas beban per level.",
    ],
    features: [
      "Perhitungan beban oleh engineer",
      "Konfigurasi bay fleksibel",
      "Tahan korosi untuk area basah",
      "Instalasi dan anchoring profesional",
    ],
    specs: [
      { label: "Material", value: "SS 304 / mild steel coated" },
      { label: "Kapasitas", value: "300 – 1.500 kg per level" },
      { label: "Finishing", value: "Brushed / Powder coat" },
      { label: "Waktu Produksi", value: "3 – 5 minggu" },
    ],
  },
  {
    slug: "railing-balustrade",
    title: "Railing & Balustrade",
    description: "Railing arsitektural dan balustrade kaca dengan finishing sempurna.",
    image: handrails,
    intro: "Railing arsitektural yang menggabungkan keamanan struktural dengan tampilan yang bersih dan elegan.",
    body: [
      "Sambungan dilas penuh lalu dipoles hingga garis las tidak terlihat — detail inilah yang membedakan railing kelas premium.",
      "Balustrade kaca menggunakan tempered laminated glass dengan spigot atau clamp stainless sesuai konsep desain.",
      "Kami bekerja dari gambar arsitek dan melakukan pengukuran ulang di lokasi agar hasil pas tanpa penyesuaian kasar.",
    ],
    features: [
      "Las mulus tanpa garis sambungan",
      "Opsi kaca tempered laminated",
      "Finishing mirror atau brushed",
      "Pengukuran presisi di lokasi",
    ],
    specs: [
      { label: "Material", value: "SS 304 / 316" },
      { label: "Diameter Pipa", value: "38 – 50,8 mm" },
      { label: "Finishing", value: "Mirror / Brushed / Hairline" },
      { label: "Waktu Produksi", value: "2 – 4 minggu" },
    ],
  },
  {
    slug: "troli",
    title: "Troli",
    description: "Troli layanan dan utilitas mobile untuk sektor kesehatan dan perhotelan.",
    image: hospital,
    intro: "Troli serbaguna yang ringan didorong namun kuat menahan beban harian operasional.",
    body: [
      "Rangka pipa stainless dengan bracing diagonal membuat troli tetap kaku meski dipakai intensif di koridor sempit.",
      "Level dan aksesori seperti pegangan, bumper, atau drawer bisa ditambahkan sesuai kebutuhan unit kerja.",
      "Roda dipilih berdasarkan jenis lantai agar dorongan ringan dan tidak meninggalkan bekas.",
    ],
    features: [
      "Rangka kaku dengan bracing",
      "Roda sesuai jenis lantai",
      "Level dan aksesori kustom",
      "Bumper pelindung opsional",
    ],
    specs: [
      { label: "Material", value: "SS 304" },
      { label: "Beban", value: "80 – 250 kg" },
      { label: "Finishing", value: "Brushed" },
      { label: "Waktu Produksi", value: "1 – 3 minggu" },
    ],
  },
  {
    slug: "meja-kerja",
    title: "Meja Kerja",
    description: "Meja kerja stainless yang diperkuat untuk area produksi dan persiapan.",
    image: kitchen,
    intro: "Meja kerja produksi dengan top plate diperkuat agar tidak melendut walau dipakai untuk pekerjaan berat.",
    body: [
      "Top plate didukung rangka sub-frame sehingga permukaan tetap rata dalam pemakaian jangka panjang.",
      "Tersedia opsi undershelf, backsplash, drawer, dan lubang utilitas sesuai alur kerja tim Anda.",
      "Tinggi meja dapat disesuaikan dengan ergonomi operator untuk mengurangi kelelahan kerja.",
    ],
    features: [
      "Top plate diperkuat sub-frame",
      "Opsi undershelf dan backsplash",
      "Tinggi ergonomis sesuai operator",
      "Sudut membulat aman",
    ],
    specs: [
      { label: "Material", value: "SS 304" },
      { label: "Ketebalan", value: "1,2 – 2,0 mm" },
      { label: "Finishing", value: "Brushed No.4" },
      { label: "Waktu Produksi", value: "2 – 3 minggu" },
    ],
  },
  {
    slug: "rak-susun",
    title: "Rak Susun",
    description: "Rak dinding dan lantai modular dengan kapasitas beban yang dapat diatur.",
    image: storage,
    intro: "Rak modular yang bisa diatur ketinggian levelnya mengikuti perubahan kebutuhan penyimpanan.",
    body: [
      "Sistem level adjustable memudahkan penyesuaian saat jenis barang yang disimpan berubah.",
      "Tersedia varian rak dinding untuk area kerja sempit dan rak lantai untuk penyimpanan volume besar.",
      "Semua komponen tahan korosi sehingga aman untuk area lembab seperti dapur dan cold storage.",
    ],
    features: [
      "Level adjustable",
      "Varian dinding dan lantai",
      "Tahan area lembab",
      "Perakitan cepat",
    ],
    specs: [
      { label: "Material", value: "SS 304" },
      { label: "Kapasitas", value: "60 – 200 kg per level" },
      { label: "Finishing", value: "Brushed" },
      { label: "Waktu Produksi", value: "1 – 3 minggu" },
    ],
  },
  {
    slug: "produk-kustom",
    title: "Produk Kustom",
    description: "Fabrikasi khusus yang disesuaikan persis dengan spesifikasi Anda.",
    image: lab,
    intro: "Punya kebutuhan yang tidak ada di katalog? Tim engineering kami membangunnya dari nol.",
    body: [
      "Kami mulai dari diskusi kebutuhan, lalu menerjemahkannya menjadi gambar CAD dan mock-up bila diperlukan.",
      "Setelah desain disetujui, produksi berjalan di fasilitas kami dengan inspeksi kualitas di setiap tahap.",
      "Hasil akhir dipasang di lokasi oleh tim instalasi kami dan diserahkan bersama dokumentasi teknis lengkap.",
    ],
    features: [
      "Desain CAD dari nol",
      "Prototipe dan mock-up",
      "Inspeksi tiap tahap produksi",
      "Instalasi dan dokumentasi teknis",
    ],
    specs: [
      { label: "Material", value: "Sesuai kebutuhan" },
      { label: "Ketebalan", value: "Sesuai perhitungan" },
      { label: "Finishing", value: "Semua opsi tersedia" },
      { label: "Waktu Produksi", value: "Sesuai lingkup" },
    ],
  },
];

export const PROJECTS = [
  { title: "Hotel Aurora Grand", category: "Hotel", image: kitchen, description: "Fit-out stainless lengkap untuk area belakang dapur di tiga dapur dan dua area persiapan banquet hotel bintang lima." },
  { title: "RS St. Vincent", category: "Rumah Sakit", image: hospital, description: "Perlengkapan steril, meja operasi, dan lemari modular yang memenuhi standar kesehatan ketat." },
  { title: "Restoran Harborview", category: "Restoran", image: kitchen, description: "Lini dapur terbuka kustom dengan meja kerja, hood, dan konter berpendingin." },
  { title: "Gudang Metro Central", category: "Gudang", image: storage, description: "Racking heavy-duty dan rak mezzanine untuk pusat distribusi seluas 3.700 m²." },
  { title: "Pabrik Pangan Northfield", category: "Pabrik", image: food, description: "Tangki pengolahan higienis dan permukaan konveyor untuk produksi berkelanjutan." },
  { title: "Lobi Civic Tower", category: "Dapur Komersial", image: handrails, description: "Railing arsitektural dan balustrade untuk pengembangan komersial ikonik." },
];

export const SERVICES = [
  { icon: "Hammer", title: "Fabrikasi Kustom", description: "Fabrikasi khusus menyeluruh yang disesuaikan dengan kebutuhan Anda." },
  { icon: "Zap", title: "Pemotongan Laser", description: "Pemotongan laser CNC presisi tinggi untuk hasil bersih dan konsisten." },
  { icon: "Frame", title: "Pembentukan Logam", description: "Bending, rolling, dan pembentukan geometri stainless yang kompleks." },
  { icon: "Flame", title: "Pengelasan", description: "Pengelasan TIG dan MIG bersertifikat dengan sambungan mulus dan tahan lama." },
  { icon: "Wrench", title: "Instalasi", description: "Instalasi profesional di lokasi ke seluruh penjuru negeri." },
  { icon: "Settings", title: "Perawatan", description: "Servis terjadwal agar peralatan Anda selalu prima." },
  { icon: "PencilRuler", title: "Desain Rekayasa", description: "Dukungan desain dan rekayasa berbasis CAD sejak hari pertama." },
  { icon: "ShieldCheck", title: "Inspeksi Kualitas", description: "Inspeksi ketat di setiap tahap produksi." },
];

export const WHY_CHOOSE = [
  { icon: "Gem", title: "Stainless Steel Premium" },
  { icon: "Users", title: "Insinyur Berpengalaman" },
  { icon: "Tag", title: "Harga Kompetitif" },
  { icon: "PencilRuler", title: "Desain Kustom" },
  { icon: "Truck", title: "Pengiriman Cepat" },
  { icon: "MapPin", title: "Instalasi Seluruh Negeri" },
  { icon: "Award", title: "Produksi Standar ISO" },
  { icon: "Headphones", title: "Dukungan Pelanggan Prima" },
];

export const PROCESS = [
  { title: "Konsultasi", description: "Kami mendengarkan kebutuhan dan menilai lingkup proyek Anda." },
  { title: "Perencanaan", description: "Penjadwalan, anggaran, dan perencanaan material yang detail." },
  { title: "Desain", description: "Rekayasa CAD dan gambar teknis untuk persetujuan." },
  { title: "Produksi", description: "Fabrikasi presisi di fasilitas bersertifikat kami." },
  { title: "Cek Kualitas", description: "Inspeksi multi-titik sesuai standar ISO." },
  { title: "Instalasi", description: "Perakitan dan commissioning profesional di lokasi." },
  { title: "Layanan Purnajual", description: "Perawatan berkelanjutan dan dukungan khusus." },
];

export const STATS = [
  { value: 20, suffix: "+", label: "Tahun Pengalaman" },
  { value: 1500, suffix: "+", label: "Proyek Selesai" },
  { value: 500, suffix: "+", label: "Klien Puas" },
  { value: 98, suffix: "%", label: "Tingkat Kepuasan" },
];

export const INDUSTRIES = [
  { icon: "UtensilsCrossed", title: "Industri Makanan" },
  { icon: "HeartPulse", title: "Kesehatan" },
  { icon: "Hotel", title: "Perhotelan" },
  { icon: "Factory", title: "Manufaktur" },
  { icon: "Building2", title: "Gedung Komersial" },
  { icon: "Cog", title: "Pabrik Industri" },
];

export const TESTIMONIALS = [
  { name: "Maria Alvarez", role: "Direktur Operasional, Aurora Hotels", quote: "Exotic Stainless menyelesaikan fit-out dapur dengan sempurna, tepat waktu dan sesuai anggaran. Kualitas finishing-nya luar biasa." },
  { name: "dr. James Whitford", role: "Kepala Fasilitas, St. Vincent Medical", quote: "Perhatian mereka pada standar higienis dan presisi persis seperti yang dibutuhkan rumah sakit kami. Mitra yang andal." },
  { name: "Sophie Tan", role: "Chef Utama, Harborview", quote: "Meja kerja kustom mengubah alur kerja dapur kami. Dirancang dengan indah dan dibuat untuk tahan lama." },
  { name: "Daniel Brooks", role: "Manajer Pabrik, Northfield Foods", quote: "Kokoh, aman untuk pangan, dan dipasang dengan ahli. Exotic Stainless memahami kebutuhan produksi kami sejak awal." },
];

export const CERTIFICATIONS = [
  { icon: "Award", title: "ISO 9001:2015", subtitle: "Manajemen Mutu" },
  { icon: "ShieldCheck", title: "Bersertifikat Keselamatan", subtitle: "Kepatuhan OHSAS" },
  { icon: "BadgeCheck", title: "Jaminan Kualitas", subtitle: "Grade Material Terverifikasi" },
  { icon: "Users", title: "Keanggotaan Profesional", subtitle: "Anggota Asosiasi Industri" },
];

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  isoDate: string;
  author: string;
  readTime: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const BLOG: BlogPost[] = [
  {
    slug: "memilih-grade-stainless-steel",
    category: "Rekayasa",
    title: "Memilih Grade Stainless Steel yang Tepat",
    excerpt: "304 vs 316 dan lainnya — cara memilih paduan yang tepat untuk lingkungan dan anggaran Anda.",
    image: lab,
    date: "12 Jun 2026",
    isoDate: "2026-06-12",
    author: "Tim Rekayasa Exotic Stainless",
    readTime: "5 menit baca",
    body: [
      {
        paragraphs: [
          "Salah memilih grade stainless steel adalah kesalahan yang biayanya baru terasa satu sampai dua tahun kemudian, ketika korosi mulai muncul di titik-titik sambungan. Memahami perbedaan dasar antar grade membuat keputusan pembelian jauh lebih tenang.",
        ],
      },
      {
        heading: "304: pilihan default yang solid",
        paragraphs: [
          "Grade 304 adalah tulang punggung industri: tahan korosi baik, mudah difabrikasi, dan harganya paling masuk akal. Untuk dapur komersial, rak penyimpanan, dan railing interior, 304 hampir selalu cukup.",
          "Batasnya muncul ketika ada paparan klorida terus-menerus — air laut, larutan pembersih berbasis klorin, atau lingkungan pesisir. Di sana 304 rentan pitting corrosion.",
        ],
      },
      {
        heading: "316 dan 316L: untuk lingkungan agresif",
        paragraphs: [
          "Tambahan molibdenum pada 316 memberi ketahanan jauh lebih tinggi terhadap klorida. Ini pilihan tepat untuk pengolahan pangan basah, fasilitas kesehatan dengan disinfektan kuat, dan area pesisir.",
          "Varian 316L punya kandungan karbon lebih rendah sehingga lebih aman untuk konstruksi yang banyak pengelasan — risiko korosi di area heat-affected zone berkurang signifikan.",
        ],
      },
      {
        heading: "Finishing juga menentukan usia pakai",
        paragraphs: [
          "Permukaan yang dipoles halus lebih sulit ditempeli kotoran dan lebih mudah dibersihkan, sehingga secara tidak langsung memperpanjang usia material. Sebaliknya permukaan kasar menahan residu dan mempercepat korosi lokal.",
          "Rekomendasi praktis kami: tentukan lingkungan kerja dulu, baru pilih grade, lalu tentukan finishing. Urutan ini mencegah keputusan yang didorong harga semata.",
        ],
      },
    ],
  },
  {
    slug: "standar-higienis-fasilitas-pangan",
    category: "Industri",
    title: "Standar Higienis di Fasilitas Pangan Modern",
    excerpt: "Apa arti regulasi terbaru bagi permukaan stainless dan lini pengolahan Anda.",
    image: food,
    date: "28 Mei 2026",
    isoDate: "2026-05-28",
    author: "Divisi Quality Assurance",
    readTime: "6 menit baca",
    body: [
      {
        paragraphs: [
          "Audit keamanan pangan kini tidak hanya memeriksa kebersihan permukaan, tapi juga apakah desain peralatan memungkinkan pembersihan menyeluruh. Ini pergeseran penting: masalah bisa ada pada desain, bukan pada petugas sanitasi.",
        ],
      },
      {
        heading: "Desain sanitary sebagai syarat, bukan nilai tambah",
        paragraphs: [
          "Sudut dalam yang terlalu tajam, celah antar panel, dan baut terbuka adalah temuan audit yang paling sering muncul. Solusinya struktural: radius dalam yang cukup, las penuh, dan meminimalkan fastener di zona kontak produk.",
          "Peralatan yang bisa dibongkar tanpa alat khusus mempercepat siklus sanitasi harian dan menurunkan risiko human error.",
        ],
      },
      {
        heading: "Ketertelusuran material",
        paragraphs: [
          "Auditor semakin sering meminta bukti grade material yang dipakai. Mill certificate dan penandaan batch adalah dokumen yang wajib tersedia sejak tahap pengadaan, bukan dicari saat audit berlangsung.",
        ],
      },
      {
        heading: "Langkah praktis",
        paragraphs: [
          "Mulailah dari pemetaan zona kontak produk, lalu evaluasi tiap peralatan di zona tersebut terhadap tiga hal: apakah bisa dibersihkan, bisa diperiksa, dan bisa dibuktikan materialnya. Peralatan yang gagal salah satu poin sebaiknya masuk daftar penggantian.",
        ],
      },
    ],
  },
  {
    slug: "stainless-arsitektural",
    category: "Desain",
    title: "Stainless Arsitektural: Bentuk Bertemu Fungsi",
    excerpt: "Bagaimana railing dan balustrade kustom mempercantik ruang komersial.",
    image: handrails,
    date: "09 Mei 2026",
    isoDate: "2026-05-09",
    author: "Studio Desain Exotic Stainless",
    readTime: "4 menit baca",
    body: [
      {
        paragraphs: [
          "Di ruang komersial, railing sering jadi elemen yang paling sering disentuh sekaligus paling terlihat. Karena itu ia harus memenuhi dua hal sekaligus: aman secara struktural dan rapi secara visual.",
        ],
      },
      {
        heading: "Detail sambungan menentukan kesan premium",
        paragraphs: [
          "Perbedaan antara railing biasa dan railing kelas premium hampir selalu ada di sambungan. Las yang dipoles hingga menyatu dengan permukaan membuat garis railing terlihat menerus dan bersih.",
          "Sebaliknya sambungan yang hanya dirapikan sekilas akan terlihat jelas begitu terkena cahaya dari samping.",
        ],
      },
      {
        heading: "Kombinasi dengan kaca dan kayu",
        paragraphs: [
          "Balustrade kaca dengan spigot stainless memberi kesan ringan dan membuka pandangan, cocok untuk lobi dan void. Handrail kayu di atas struktur stainless menghadirkan kehangatan pada ruang yang dominan material dingin.",
        ],
      },
      {
        heading: "Mulai dari pengukuran, bukan dari katalog",
        paragraphs: [
          "Railing arsitektural yang baik selalu dibuat berdasarkan pengukuran aktual di lokasi. Toleransi bangunan hampir selalu berbeda dari gambar, dan hanya pengukuran ulang yang mencegah penyesuaian kasar saat instalasi.",
        ],
      },
    ],
  },
];

export const FAQS = [
  { q: "Grade stainless steel apa saja yang Anda kerjakan?", a: "Kami mengerjakan semua grade arsitektural dan industri umum, termasuk 304 dan 316/316L, serta paduan khusus atas permintaan." },
  { q: "Apakah Anda menangani instalasi di seluruh negeri?", a: "Ya. Tim instalasi kami beroperasi di seluruh negeri dan kami mengoordinasikan logistik menyeluruh untuk setiap proyek." },
  { q: "Berapa lama proyek pada umumnya berlangsung?", a: "Waktu pengerjaan tergantung lingkup, namun sebagian besar fabrikasi standar dikirim dalam 2–4 minggu. Kami mengonfirmasi timeline pasti saat perencanaan." },
  { q: "Bisakah Anda membuat desain sepenuhnya kustom?", a: "Tentu saja. Fabrikasi kustom adalah keahlian kami — kirimkan gambar atau kebutuhan Anda dan insinyur kami akan menanganinya." },
  { q: "Apakah produk Anda bersertifikat?", a: "Seluruh produksi mengikuti standar ISO 9001:2015 dengan ketertelusuran material penuh dan inspeksi kualitas di setiap tahap." },
  { q: "Apakah Anda menawarkan perawatan purnajual?", a: "Ya, kami menyediakan servis terjadwal dan dukungan responsif agar peralatan Anda awet bertahun-tahun." },
];

export const NAV_LINKS = [
  { label: "Beranda", to: "/" },
  { label: "Tentang", to: "/about" },
  { label: "Produk", to: "/products" },
  { label: "Layanan", to: "/", hash: "services" },
  { label: "Proyek", to: "/projects" },
  { label: "Galeri", to: "/gallery" },
  { label: "Kontak", to: "/contact" },
] as const;
