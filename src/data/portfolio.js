import { LayoutDashboard, Globe, AppWindow, Smartphone } from "lucide-react";

const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const profile = {
  name: "Arkanul Adelis",
  role: "Fullstack Developer",
  email: "arkanuladelis8@gmail.com", // [GANTI]
  whatsapp: "6285795715960", // [GANTI] format 62..., tanpa + dan spasi
  github: "https://github.com/arkan0303", // [GANTI]
  linkedin: "https://linkedin.com/in/arkanul-adelis", // [GANTI]
  cv: "#", // [GANTI] link file CV (mis. /cv-arkanul.pdf di folder public)
  photo: "/arkan.png", // [GANTI] foto asli
};

export const nav = [
  { label: "Proyek", href: "#proyek" },
  { label: "Layanan", href: "#layanan" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Tanya jawab", href: "#faq" },
];

export const hero = {
  status: "Tersedia untuk proyek baru",
  headline: "Sistem web yang rapi, cepat, dan siap dipakai bisnis Anda.",
  highlight: ["siap", "dipakai"],
  intro:
    "Saya Arkanul, membangun aplikasi web dan mobile dari kebutuhan sampai rilis. Lebih dari tiga tahun bekerja sebagai fullstack developer dan freelancer.",
};

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React JS",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Material UI",
      "Bootstrap",
    ],
  },
  { title: "Backend", items: ["Express", "Golang", "PHP", "Laravel"] },
  { title: "Database", items: ["Prisma", "Supabase", "MySQL", "PostgreSQL"] },
  {
    title: "Yang saya bangun",
    items: ["Sistem informasi", "Aplikasi web", "Aplikasi mobile", "REST API"],
  },
];

export const techs = [
  "React",
  "Next.js",
  "TypeScript",
  "Golang",
  "Laravel",
  "Express",
  "Prisma",
  "Supabase",
  "PostgreSQL",
  "MySQL",
  "Material UI",
  "Bootstrap",
  "PHP",
  "JavaScript",
];

export const stats = [
  { value: 3, suffix: "+", unit: "tahun", label: "Fullstack developer" },
  { value: 3, suffix: "+", unit: "tahun", label: "Freelance web" },
  {
    value: techs.length,
    suffix: "",
    unit: "teknologi",
    label: "Dikuasai dan dipakai di proyek",
  },
  { text: "Web & Apps", label: "Dari tampilan sampai database" },
];

export const about = {
  title: "Developer yang paham alur bisnis, bukan hanya kode.",
  paragraphs: [
    "Saya Arkanul Adelis, fullstack developer dengan pengalaman lebih dari tiga tahun, dan freelancer web selama lebih dari tiga tahun. Saya menangani web dan aplikasi dari antarmuka sampai database.",
    "Saya senang membangun sistem yang memecahkan masalah nyata, mulai dari aplikasi sederhana sampai sistem informasi yang kompleks. Bagi saya, coding bukan cuma soal sintaks, tapi bagaimana membuat teknologi benar-benar membantu orang dan bisnis.",
  ],
  principles: ["Kode mudah dirawat", "Komunikasi jelas", "Progres transparan"],
  band: unsplash("photo-1498050108023-c5249f4df085", 1800),
  quote: "Sistem yang baik terasa sederhana bagi penggunanya.",
};

export const projects = [
  {
    title: "Bali Bike School Management System",
    type: "Sistem Informasi",
    year: "2026",
    desc: "Sistem manajemen penjadwalan les mengemudi motor yang mengintegrasikan pencatatan otomatis admin web dengan portal jadwal instruktur secara real-time.",
    stack: ["Next.js", "TypeScript", "Supabase"], // Sesuaikan jika ada teknologi lain (misal: Tailwind CSS, Vercel)
    image: "/bbs.jpeg",
    link: "#",
  },
  {
    title: "Kostrea - Property & Room Management System",
    type: "Aplikasi Web",
    year: "2026",
    desc: "Sistem manajemen kos dan properti terpusat untuk memantau status okupansi kamar, pencatatan keuangan otomatis, dan pengelolaan tagihan penghuni.",
    stack: ["Next.js", "Supabase", "Material UI"], // Sesuaikan dengan tech stack yang Anda gunakan
    image: "/kostrea.jpeg",
    link: "#",
  },
  {
    title: "Kopi Senja - Self-Ordering System & POS",
    type: "Website & API",
    year: "2026",
    desc: "Sistem pemesanan kopi digital mandiri yang memudahkan pelanggan melakukan kustomisasi pesanan serta mempercepat proses operasional kasir secara terintegrasi.",
    stack: ["React", "Express", "PostgreSQL"], // Sesuaikan jika ada teknologi pendukung lain (misal: Tailwind CSS, Node.js)
    image: "/coffe.jpeg",
    link: "#",
  },
];

export const services = [
  {
    icon: LayoutDashboard,
    title: "Sistem informasi & dashboard",
    desc: "Panel admin, manajemen data, laporan, dan pengaturan hak akses pengguna.",
  },
  {
    icon: Globe,
    title: "Website & landing page",
    desc: "Company profile, toko online, dan halaman promosi yang cepat serta responsif di semua perangkat.",
  },
  {
    icon: AppWindow,
    title: "Aplikasi web kustom",
    desc: "Aplikasi fullstack dengan autentikasi, database, dan fitur sesuai proses bisnis Anda.",
  },
  {
    icon: Smartphone,
    title: "Aplikasi mobile & REST API",
    desc: "Backend rapi dengan Golang atau Express, siap dihubungkan ke aplikasi dan layanan lain.",
  },
];

export const experience = [
  {
    period: "2023 — Sekarang",
    role: "Freelance Web Developer",
    org: "Mandiri / Klien Bisnis",
    points: [
      "Membangun website, sistem informasi bisnis, dan dashboard manajemen untuk klien dari analisis kebutuhan hingga deployment.",
      "Mengembangkan arsitektur aplikasi menyeluruh menggunakan Next.js, React, Supabase, dan PostgreSQL.",
      "Menerapkan solusi digital seperti sistem reservasi real-time, manajemen okupansi kamar, dan self-ordering POS yang langsung dipakai operasional klien.",
    ],
  },
  {
    period: "2023 — Sekarang",
    role: "Fullstack Developer",
    org: "PT PERMATA SOLUSINDO",
    points: [
      "Mengembangkan aplikasi web dan mobile end-to-end, mulai dari desain antarmuka responsif hingga arsitektur database dan backend API.",
      "Membangun layanan backend efisien dengan Golang, Express, dan Laravel serta mengintegrasikan database relasional (PostgreSQL, MySQL) dengan Prisma ORM.",
      "Fokus pada kode yang rapi, keamanan data, type safety dengan TypeScript, serta performa sistem yang siap untuk skala bisnis.",
    ],
  },
];

export const process = [
  {
    title: "Diskusi kebutuhan",
    desc: "Memahami alur bisnis, target pengguna, dan batasan anggaran.",
  },
  {
    title: "Rancang",
    desc: "Struktur data dan desain tampilan disepakati sebelum coding.",
  },
  {
    title: "Bangun & uji",
    desc: "Pengerjaan bertahap dengan demo berkala agar progres terlihat.",
  },
  {
    title: "Rilis & dukungan",
    desc: "Deploy, serah terima dokumentasi, dan perbaikan setelah rilis.",
  },
];

export const testimonials = [
  {
    quote:
      "Sistem manajemen jadwal yang dibangun Arkanul sangat memangkas beban operasional kami. Sekarang admin dan instruktur terhubung otomatis secara real-time. Komunikasinya sangat solutif.",
    name: "Hendra Wijaya",
    role: "Founder, Bali Bike School",
  },
  {
    quote:
      "Aplikasi Kostrea membuat pencatatan okupansi kamar dan rekap keuangan kos kami jauh lebih rapi. Tampilannya intuitif dan mudah digunakan oleh staf kami sehari-hari.",
    name: "Sarah Amanda",
    role: "Property Manager, Kostrea",
  },
  {
    quote:
      "Self-ordering dan sistem POS untuk café kami berjalan sangat cepat dan stabil saat peak hours. Pelayanan maintenance setelah rilis juga cepat tanggap menangani kendala teknis.",
    name: "Reza Pratama",
    role: "Operational Lead, Kopi Senja",
  },
];

export const faqs = [
  {
    q: "Berapa lama pengerjaan sebuah sistem?",
    a: "Waktu pengerjaan bergantung pada skala dan kompleksitas fitur. Website profil atau landing page umumnya selesai dalam 1–2 minggu, sedangkan sistem informasi atau web app kustom membutuhkan sekitar 3–6 minggu. Estimasi jadwal kerja (timeline) yang rinci akan saya berikan di awal setelah sesi diskusi kebutuhan.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Pembayaran dilakukan bertahap dan transparan, umumnya dengan skema: DP (Down Payment) sebesar 50% di awal sebagai tanda jadi pengerjaan, dan pelunasan 50% setelah sistem selesai diuji serta siap serah terima.",
  },
  {
    q: "Apakah ada revisi selama pengerjaan?",
    a: "Ya, revisi disediakan selama proses pembangunan sesuai dengan ruang lingkup (scope) yang telah disepakati bersama di awal. Saya selalu memberikan sesi demo berkala agar Anda dapat memantau progres dan memberikan feedback secara langsung sebelum sistem difinalisasi.",
  },
  {
    q: "Apakah ada dukungan setelah rilis?",
    a: "Ya, setiap sistem mendapatkan masa pemeliharaan (maintenance) gratis selama 3 bulan setelah rilis. Ini mencakup penanganan bug, perbaikan kendala teknis, serta penyesuaian minor agar sistem berjalan stabil. Namun, penambahan fitur baru di luar ruang lingkup yang sudah disepakati di awal tidak termasuk dalam maintenance ini dan akan dihitung sebagai pengembangan terpisah.",
  },
  {
    q: "Apakah source code dan akses sistem menjadi milik saya?",
    a: "Tentu. Seluruh source code proyek, aset, serta akun/kredensial database akan diserahkan sepenuhnya kepada Anda setelah serah terima selesai. Saya juga akan mendampingi proses deployment ke domain dan server hosting Anda.",
  },
];
