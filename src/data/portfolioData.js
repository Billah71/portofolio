export const portfolioData = {
  personal: {
    name: "Al-mutasim Bihablillah A",
    shortName: "Al-mutasim",
    profession: "Web Developer & UI/UX Designer",
    status: "Mahasiswa Teknik Informatika",
    field: "Web Development dan UI/UX Design",
    statusBadge: "Open to Collaborate & Learn",
    heroDescription:
      "Saya adalah mahasiswa Teknik Informatika yang memiliki ketertarikan dalam pengembangan website dan desain antarmuka pengguna. Saya senang membangun pengalaman digital yang modern, fungsional, dan mudah digunakan.",
    aboutDescription:
      "Saya merupakan mahasiswa Teknik Informatika yang memiliki minat dalam dunia teknologi, khususnya Web Development dan UI/UX Design. Saya terus belajar dan mengembangkan kemampuan dalam membangun website serta menciptakan desain antarmuka yang menarik, responsif, dan mudah digunakan.",
    whatsapp: "083128581787",
    whatsappDisplay: "083128581787",
    whatsappUrl:
      "https://wa.me/6283128581787?text=Halo%20Al-mutasim%20Bihablillah,%20saya%20tertarik%20bekerja%20sama%20dengan%20Anda.",
    email: "mutasimbillah153@gmail.com",
    emailUrl:
      "mailto:mutasimbillah153@gmail.com?subject=Tawaran%20Kerjasama%20-%20Web%20Developer%20/%20UI/UX",
    location: "Indonesia",
    avatar: "/profile.jpg",
    github: "https://github.com/Billah71/mutasim-billah",
    linkedin: "https://linkedin.com/in/al-mutasim-bihablillah",
    instagram: "https://www.instagram.com/a.mubasa?obrf=ZWNqazRyODVodHhl&utm_source=qr",
    highlights: [
      {
        title: "Pendidikan & Status",
        value: "Mahasiswa Aktif",
        subtitle: "Teknik Informatika",
        description: "Fokus pada struktur data, rekayasa perangkat lunak, dan interaksi manusia-komputer."
      },
      {
        title: "Bidang Keahlian",
        value: "Web & UI/UX",
        subtitle: "Development & Design",
        description: "Membangun website responsif dari tahap wireframing hingga deployment fungsional."
      },
      {
        title: "Prinsip Kerja",
        value: "Modern & Clean",
        subtitle: "User-Centric Design",
        description: "Mengutamakan kode yang rapi, aksesibilitas tinggi, dan pengalaman pengguna yang intuitif."
      }
    ]
  },

  skills: [
    {
      name: "HTML",
      category: "Frontend",
      level: "Proficient",
      color: "#E34F26",
      bgGlow: "rgba(227, 79, 38, 0.12)",
      description: "Semantic HTML5, Accessibility (a11y), SEO-friendly structure",
      iconType: "html"
    },
    {
      name: "CSS",
      category: "Frontend",
      level: "Proficient",
      color: "#38BDF8",
      bgGlow: "rgba(56, 189, 248, 0.12)",
      description: "Modern CSS3, Flexbox, Grid, Keyframe Animations, Utility-First",
      iconType: "css"
    },
    {
      name: "JavaScript",
      category: "Frontend / Lang",
      level: "Proficient",
      color: "#F7DF1E",
      bgGlow: "rgba(247, 223, 30, 0.12)",
      description: "ES6+, Async/Await, DOM manipulation, Reactive interactions",
      iconType: "javascript"
    },
    {
      name: "Python",
      category: "Language",
      level: "Intermediate",
      color: "#38BDF8",
      bgGlow: "rgba(56, 189, 248, 0.12)",
      description: "Algoritma pemrograman, logic scripting, pengolahan data dasar",
      iconType: "python"
    },
    {
      name: "Jaringan",
      category: "Networking / IT",
      level: "Proficient",
      color: "#38BDF8",
      bgGlow: "rgba(56, 189, 248, 0.12)",
      description: "Konfigurasi topologi LAN/WLAN, routing & switching, subnetting IP, serta troubleshooting jaringan",
      iconType: "jaringan"
    },
    {
      name: "Laravel",
      category: "Backend",
      level: "Proficient",
      color: "#FF2D20",
      bgGlow: "rgba(255, 45, 32, 0.12)",
      description: "MVC architecture, Blade engine, Eloquent ORM, auth & routing",
      iconType: "laravel"
    },
    {
      name: "MySQL",
      category: "Database",
      level: "Proficient",
      color: "#00758F",
      bgGlow: "rgba(0, 117, 143, 0.12)",
      description: "Relational database schema, SQL queries, indexing, table relations",
      iconType: "mysql"
    },
    {
      name: "Figma",
      category: "UI/UX & Design",
      level: "Proficient",
      color: "#A259FF",
      bgGlow: "rgba(162, 89, 255, 0.12)",
      description: "High-fidelity wireframing, prototyping, design systems, components",
      iconType: "figma"
    },
    {
      name: "UI/UX Design",
      category: "UI/UX & Design",
      level: "Proficient",
      color: "#38BDF8",
      bgGlow: "rgba(56, 189, 248, 0.12)",
      description: "User research, user journey, visual hierarchy, typography & layout",
      iconType: "uiux"
    },
    {
      name: "Responsive Web Design",
      category: "Frontend & Design",
      level: "Advanced",
      color: "#34D399",
      bgGlow: "rgba(52, 211, 153, 0.12)",
      description: "Mobile-first approach, fluid breakpoints, cross-browser compatibility",
      iconType: "responsive"
    }
  ],

  projects: [
    {
      id: "digital-library-website",
      name: "Digital Library Website",
      category: "Web Development",
      categoryBadge: "Web Development & UI/UX",
      preview: "/projects/digital-library.webp",
      shortDescription:
        "Website perpustakaan digital interaktif untuk eksplorasi katalog buku, sistem peminjaman online, dan manajemen sirkulasi anggota perpustakaan yang efisien.",
      fullDescription:
        "Digital Library Website adalah platform perpustakaan modern berbasis web yang dirancang untuk mendigitalkan seluruh aktivitas peminjaman dan pengelolaan buku. Sistem ini mempermudah pencarian koleksi berdasarkan kategori, pengarang, maupun nomor ISBN, dilengkapi dengan panel peminjaman daring dan dashboard admin untuk monitoring sirkulasi buku serta manajemen anggota secara aman dan terstruktur.",
      stats: {
        totalTech: 5,
        keyFeatures: 4
      },
      technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
      features: [
        "Katalog buku interaktif dengan filter multi-kategori, pencarian cepat, dan status ketersediaan stok buku secara real-time.",
        "Sistem reservasi dan peminjaman online dengan penghitungan tanggal jatuh tempo serta kalkulasi denda otomatis.",
        "Dashboard admin terpadu untuk pendataan buku baru, verifikasi anggota, dan rekapitulasi data sirkulasi bulanan.",
        "Antarmuka responsif dengan desain modern yang nyaman diakses melalui smartphone maupun perangkat desktop."
      ],
      liveDemo: "https://github.com/Billah71/mutasim-billah",
      github: "https://github.com/Billah71/mutasim-billah"
    },
    {
      id: "e-work-platform",
      name: "E-Work Platform",
      category: "Web Development",
      categoryBadge: "Web Development & UI/UX",
      preview: "/projects/e-work-platform.svg",
      shortDescription:
        "Platform kolaborasi dan manajemen pekerjaan digital yang memfasilitasi pencarian tugas, monitoring progres kerja, dan manajemen tim secara terstruktur.",
      fullDescription:
        "E-Work Platform adalah solusi web kolaboratif yang menjembatani tim kerja dan pekerja digital dalam mengelola tugas, proyek, dan komunikasi kerja secara terpusat. Dilengkapi dengan kanban board interaktif, sistem penugasan dinamis, milestone tracking, dan desain antarmuka dark minimalist yang meningkatkan fokus produktivitas pengguna.",
      stats: {
        totalTech: 5,
        keyFeatures: 4
      },
      technologies: ["Laravel", "MySQL", "JavaScript", "Tailwind CSS", "UI/UX Design"],
      features: [
        "Manajemen proyek berbasis papan Kanban interaktif dengan status tugas: To Do, In Progress, dan Completed.",
        "Sistem penugasan tim dengan timeline deadline, upload berkas proyek, dan pelacakan progres persentase.",
        "Role-based access control (Admin, Project Leader, Team Member) untuk menjaga privasi data tugas.",
        "Desain antarmuka modern bertema dark aesthetic yang meminimalkan kelelahan mata saat bekerja intensif."
      ],
      liveDemo: "https://github.com/Billah71/mutasim-billah",
      github: "https://github.com/Billah71/mutasim-billah"
    },
    {
      id: "hospital-management-system",
      name: "Hospital Management System",
      category: "Web Development",
      categoryBadge: "Web Development",
      preview: "/projects/hospital-management.png",
      shortDescription:
        "Sistem informasi manajemen rumah sakit terintegrasi untuk pendaftaran pasien, penjadwalan dokter, dan pengelolaan data rekam medis secara cepat dan aman.",
      fullDescription:
        "Hospital Management System adalah aplikasi web terpadu yang dibangun untuk mengoptimalkan efisiensi pelayanan rumah sakit dan klinik kesehatan. Mulai dari sistem antrean registrasi pasien, penjadwalan konsultasi dokter poliklinik, pencatatan rekam medis digital (Electronic Medical Record), hingga manajemen resep farmasi yang transparan dan akurat.",
      stats: {
        totalTech: 5,
        keyFeatures: 4
      },
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Responsive Web Design"],
      features: [
        "Sistem pendaftaran pasien baru dan rawat jalan dengan nomor tiket antrean otomatis sesuai poliklinik tujuan.",
        "Pengelolaan jadwal praktek dokter spesialis lengkap dengan pembatasan kuota konsultasi harian.",
        "Pencatatan dan pengarsipan data riwayat rekam medis pasien serta resep obat yang aman dan terstruktur.",
        "Laporan analitik kunjungan pasien harian dan performa pelayanan poliklinik untuk pihak manajemen rumah sakit."
      ],
      liveDemo: "https://github.com/Billah71/mutasim-billah",
      github: "https://github.com/Billah71/mutasim-billah"
    },
    {
      id: "parental-control-app",
      name: "Parental Control App",
      category: "Mobile App & UI/UX",
      categoryBadge: "Mobile App & UI/UX",
      preview: "/projects/parental-control.webp",
      shortDescription:
        "Aplikasi kontrol orang tua untuk memantau penggunaan perangkat anak, mengatur batas waktu layar, mengelola izin aplikasi, dan melihat lokasi anak.",
      fullDescription:
        "Parental Control App adalah aplikasi pendamping keluarga yang membantu orang tua mengelola penggunaan ponsel anak secara lebih aman dan terarah. Fitur utamanya mencakup pemantauan waktu pemakaian perangkat, pengaturan batas waktu dan jadwal penggunaan, pengelolaan izin aplikasi serta situs, dan fitur berbagi lokasi anak. Antarmuka dirancang sederhana agar orang tua dapat mengakses kontrol utama dengan mudah.",
      stats: {
        totalTech: 4,
        keyFeatures: 4
      },
      technologies: ["UI/UX Design", "Figma", "Mobile App Design", "Prototyping"],
      features: [
        "Dashboard waktu pemakaian perangkat untuk melihat durasi penggunaan ponsel anak.",
        "Pengaturan batas waktu layar dan jadwal penggunaan, termasuk waktu istirahat.",
        "Kontrol aplikasi dan penelusuran untuk mengelola izin aplikasi serta pembatasan situs.",
        "Fitur berbagi lokasi untuk membantu orang tua mengetahui lokasi perangkat anak."
      ],
      liveDemo: "https://github.com/Billah71/mutasim-billah",
      github: "https://github.com/Billah71/mutasim-billah"
    },
    {
      id: "personal-portfolio-website",
      name: "Personal Portfolio Website",
      category: "UI/UX Design",
      categoryBadge: "UI/UX Design & Web Dev",
      preview: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
      shortDescription:
        "Website portfolio personal berkonsep dark minimalist modern dengan pola grid tipis, typography elegan, dan interaksi animasi yang halus.",
      fullDescription:
        "Personal Portfolio Website adalah etalase digital profesional Al-mutasim Bihablillah A sebagai Mahasiswa Teknik Informatika, Web Developer, dan UI/UX Designer. Mengusung konsep Dark Minimalist dengan latar belakang hitam, pola grid tipis, aksen warna putih, abu-abu, dan biru muda yang elegan. Dibangun dengan kode yang bersih, performa tinggi, dan responsif di seluruh ukuran layar.",
      stats: {
        totalTech: 6,
        keyFeatures: 4
      },
      technologies: ["HTML", "CSS", "JavaScript", "Figma", "UI/UX Design", "Responsive Web Design"],
      features: [
        "Tema visual Dark Minimalist dengan pola grid tipis, tipografi modern besar, dan aksen warna biru muda yang elegan.",
        "Hero section interaktif dengan frame kartu profil modern dan indikator status ketersediaan kolaborasi.",
        "Showcase proyek dengan filter kategori terpadu dan modal detail komprehensif untuk setiap proyek.",
        "Integrasi kontak langsung ke WhatsApp dan Email dilengkapi form validasi serta navigasi sticky yang mulus."
      ],
      liveDemo: "https://github.com/Billah71/mutasim-billah",
      github: "https://github.com/Billah71/mutasim-billah"
    }
  ]
};
