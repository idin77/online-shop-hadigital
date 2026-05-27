import { WebPackage, VideoPackage, FAQItem, PortfolioItem } from './types';

export const webPackages: WebPackage[] = [
  {
    id: 'web-basic',
    name: 'WEBSITE BASIC',
    price: 'Rp 700.000',
    priceValue: 700000,
    description: 'Solusi cepat dan hemat untuk memperkenalkan produk atau portofolio bisnis Anda secara online secara instan.',
    features: [
      'Landing Page Profesional',
      'Mobile Friendly / Responsive',
      'Integrasi Tombol WhatsApp',
      'SEO Friendly Standard',
      'Gratis SSL HTTPS (Aman)'
    ]
  },
  {
    id: 'web-business',
    name: 'WEBSITE BUSINESS',
    price: 'Rp 1.500.000',
    priceValue: 1500000,
    badge: 'Paling Populer',
    description: 'Pilihan terbaik untuk UMKM, CV, atau instansi yang membutuhkan profil web multi-halaman dengan kredibilitas tinggi.',
    features: [
      'Multi Halaman (Hingga 5 Halaman)',
      'Halaman Company Profile Lengkap',
      'Optimasi SEO Tingkat Lanjut',
      'Integrasi Google Maps Alamat Anda',
      'Formulir Kontak Kustom Langsung',
      'Responsive di Semua Device'
    ]
  },
  {
    id: 'web-premium',
    name: 'WEBSITE PREMIUM',
    price: 'Rp 3.000.000',
    priceValue: 3000000,
    badge: 'Eksklusif',
    description: 'Website profesional scale-up dengan kustomisasi penuh, siap diintegrasikan dengan transaksi pembayaran & admin panel.',
    features: [
      'Desain Premium Custom (Sesuai Request)',
      'Admin Panel untuk Edit Konten',
      'Integrasi Gateway Payment modern',
      'Optimasi Kecepatan Ekstrim',
      'SEO Maksimal & Riset Kata Kunci',
      'Support & Maintenance Selama 3 Bulan'
    ]
  }
];

export const videoPackages: VideoPackage[] = [
  {
    id: 'video-8s',
    duration: 8,
    price: 'Rp 99.000',
    priceValue: 99000,
    description: 'Sangat cocok untuk short video TikTok, Reels, atau iklan super cepat dengan retensi penonton tinggi.'
  },
  {
    id: 'video-15s',
    duration: 15,
    price: 'Rp 179.000',
    priceValue: 179000,
    badge: 'Terlaris',
    description: 'Durasi optimal untuk promosi produk yang fokus pada solusi, keunggulan, dan Call to Action instan.'
  },
  {
    id: 'video-30s',
    duration: 30,
    price: 'Rp 299.000',
    priceValue: 299000,
    description: 'Sempurna untuk video branding, penjelas, atau presentasi keunggulan fitur utama dari produk/layanan Anda.'
  },
  {
    id: 'video-60s',
    duration: 60,
    price: 'Rp 499.000',
    priceValue: 499000,
    badge: 'Paling Hemat',
    description: 'Dapat merangkum company profile, tutorial pemakaian produk secara komparatif, dan ulasan lengkap.'
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p-web-1',
    type: 'website',
    title: 'Aora Creative Agency',
    category: 'Company Profile',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    description: 'Web interaktif berenergi tinggi untuk agency kreatif Jakarta.'
  },
  {
    id: 'p-web-2',
    type: 'website',
    title: 'ElectroMart Store',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600&auto=format&fit=crop',
    description: 'Toko online berkecepatan tinggi dengan pembayaran otomatis.'
  },
  {
    id: 'p-video-1',
    type: 'video',
    title: 'Kinetic Watch Promo',
    category: 'Animasi Video 3D',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop',
    description: 'Iklan jam tangan futuristik, pencahayaan dramatis, detail mekanik.'
  },
  {
    id: 'p-web-3',
    type: 'website',
    title: 'Prime Medical Clinic',
    category: 'Professional Web',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop',
    description: 'Sistem janji temu pasien medis online dengan desain ramah pengguna.'
  },
  {
    id: 'p-video-2',
    type: 'video',
    title: 'Crypto Wallet Launch',
    category: 'Animasi Explainer',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=600&auto=format&fit=crop',
    description: 'Video sinematik menjelaskan detail keamanan aset digital modern.'
  },
  {
    id: 'p-video-3',
    type: 'video',
    title: 'SaaS Dashboard Commercial',
    category: 'Animasi Antarmuka UI',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
    description: 'Reels promosi aplikasi analitik dengan transisi ultra smooth.'
  }
];

export const faqItems: FAQItem[] = [
  {
    question: 'Bagaimana alur pemesanan jasa di HADIGITAL?',
    answer: 'Pilih paket yang Anda butuhkan (Website / Video), lalu klik "Pesan Sekarang" atau hubungi via WhatsApp. Tim kami akan melakukan briefing singkat mengenai konsep produk, data yang diperlukan, dan struktur yang Anda inginkan. Setelah pembayaran, pengerjaan langsung dimulai!'
  },
  {
    question: 'Berapa lama waktu pengerjaan untuk Website?',
    answer: 'Pengerjaan Website Basic berkisar antara 2-3 hari kerja. Website Business membutuhkan waktu sekitar 4-7 hari kerja, dan Website Premium berkisar antara 7-14 hari kerja tergantung dengan tingkat kompleksitas desain custom dan fitur integrasi pembayaran.'
  },
  {
    question: 'Apakah estimasi selesai Video Animasi benar-benar 1 hari kerja?',
    answer: 'Ya, untuk durasi di bawah 60 detik standar (8s, 15s, 30s, 60s) pengerjaan selesai dalam waktu 1 hari kerja setelah pengumpulan aset seperti logo dan poin utama skrip disepakati. Kepuasan terjamin!'
  },
  {
    question: 'Apakah harga video sudah termasuk pengisian suara (Voice Over)?',
    answer: 'Betul sekali, semua paket video animasi realistis sudah lengkap (All-in-One): mencakup penyusunan konsep & draf skrip, pengisian suara AI Voice Over premium yang natural, video sinematik background berlisensi, 2 pilihan lagu pengiring, serta file final beresolusi Full HD.'
  },
  {
    question: 'Bisa nego harga jika durasi di atas 1 menit?',
    answer: 'Tentu saja! Untuk durasi video yang lebih panjang atau membutuhkan penggabungan multi-ad (misalnya konten Reels harian), kami menyediakan opsi negosiasi harga dan Kontrak Bulanan khusus yang jauh lebih murah.'
  },
  {
    question: 'Bagaimana dengan metode pembayarannya?',
    answer: 'Kami mendukung transfer Instan via DANA, ShopeePay ke nomor resmi kami: 085716551653. Anda dapat mengunggah bukti transfer Anda melalui antarmuka pembayaran digital di website kami guna verifikasi instan ke WhatsApp admin.'
  },
  {
    question: 'Apakah ada biaya tambahan bulanan atau tahunan untuk Website?',
    answer: 'Untuk tahun pertama, paket sudah All-In termasuk Server Hosting & domain (.com / .id / .xyz sesuai paket). Di tahun berikutnya, Anda hanya membayar biaya perpanjangan domain & hosting tahunan yang sangat terjangkau (mulai Rp 250.000/tahun tergantung paket).'
  }
];
