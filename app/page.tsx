import React from 'react';

export default function Home() {
  const skillCategories = [
    {
      title: "Web Fundamentals",
      color: "text-blue-400",
      glow: "group-hover:shadow-[0_0_20px_rgba(96,165,250,0.15)] group-hover:border-blue-500/50",
      skills: ["HTML5", "CSS3", "PHP (Native)", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Backend & Database",
      color: "text-rose-400",
      glow: "group-hover:shadow-[0_0_20px_rgba(251,113,133,0.15)] group-hover:border-rose-500/50",
      skills: ["Laravel Framework", "MySQL Database", "RESTful API", "Laravel Sanctum"]
    },
    {
      title: "Mobile & Software",
      color: "text-emerald-400",
      glow: "group-hover:shadow-[0_0_20px_rgba(52,211,153,0.15)] group-hover:border-emerald-500/50",
      skills: ["Kotlin", "Android SDK", "MVVM Architecture", "Repository Pattern"]
    },
    {
      title: "Smart System / IoT",
      color: "text-cyan-400",
      glow: "group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] group-hover:border-cyan-500/50",
      skills: ["NodeMCU ESP8266", "MQTT Protocol", "DHT11 Sensor", "Hardware Logic"]
    },
    {
      title: "Game Development",
      color: "text-orange-400",
      glow: "group-hover:shadow-[0_0_20px_rgba(251,146,60,0.15)] group-hover:border-orange-500/50",
      skills: ["Godot Engine", "GDScript", "Game Logic", "2D Design"]
    },
    {
      title: "Tools & Administration",
      color: "text-purple-400",
      glow: "group-hover:shadow-[0_0_20px_rgba(192,132,252,0.15)] group-hover:border-purple-500/50",
      skills: ["Microsoft Office", "Git / GitHub", "UI/UX Design", "Operasional & Admin"]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-900 selection:text-cyan-100 overflow-x-hidden">
      
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white text-center py-2.5 text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(6,182,212,0.3)] relative z-50 flex justify-center items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        Open for Remote & Online Internship Opportunities
      </div>

      {/* Floating Glassmorphism Navigation */}
      <nav className="fixed top-12 left-0 right-0 z-40 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl px-6 py-4 flex justify-between items-center shadow-2xl">
          {/* PERBAIKAN ERROR DI SINI: Menggunakan tag <a> alih-alih <span onClick> */}
          <a href="#" className="font-extrabold text-xl tracking-tighter text-white flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
            <span className="text-cyan-400">{'<'}</span>
            A.K. KHANIF
            <span className="text-cyan-400">{'/>'}</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          </div>
          <a href="#contact" className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 px-5 py-2 rounded-xl text-sm font-bold hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 pt-48 pb-24 flex flex-col-reverse md:flex-row items-center gap-16 relative scroll-mt-32">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-600/20 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>

        <div className="flex-1 space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-xs font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Semarang, Indonesia
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Smart Systems
            </span> <br />
            & Software.
          </h1>
          
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-light">
            Halo, saya <strong className="text-white font-semibold">Awwalul Khoirul Khanif</strong>, Mahasiswa Teknik Informatika semester 6 di Universitas Semarang. Membangun fondasi yang kuat di berbagai bidang IT—mulai dari <strong className="text-cyan-300 font-semibold">Web, Mobile, hingga IoT</strong>—untuk menciptakan solusi teknologi yang efisien dan berdampak nyata.
          </p>
          
          <div className="flex flex-wrap gap-5 pt-4">
            <a href="#projects" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 flex items-center gap-2">
              Jelajahi Karya Saya
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-all duration-300 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>
        
        {/* Frame Foto Transparan */}
        <div className="relative group cursor-pointer flex justify-center items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 -z-10"></div>
          <div className="relative w-72 h-72 md:w-96 md:h-96 transform group-hover:-translate-y-3 transition-transform duration-500">
            {/* Pastikan file bernama profile.png dan transparan ada di folder public */}
            <img 
              src="/profile.png" 
              alt="Awwalul Khoirul Khanif" 
              className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(6,182,212,0.4)]"
            />
          </div>
        </div>
      </section>

      {/* REVISED SKILLS SECTION - BENTO GRID */}
      <section id="skills" className="py-24 border-y border-slate-800/50 bg-slate-900/30 scroll-mt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Core Technologies & Competencies</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Fondasi keilmuan dan teknologi yang terus saya kembangkan, dari pemahaman tingkat dasar (Fundamental) hingga implementasi framework modern.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, index) => (
              <div key={index} className={`group bg-slate-950/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 transition-all duration-500 ${cat.glow}`}>
                <h3 className={`text-xl font-bold mb-6 ${cat.color}`}>{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm font-medium text-slate-300 group-hover:bg-slate-800 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-32 scroll-mt-24">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-slate-700"></div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">Featured Solutions</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-slate-700"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <article className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 hover:border-rose-500/50 hover:bg-slate-800/50 transition-all duration-500 flex flex-col relative overflow-hidden">
            <span className="text-xs font-bold text-rose-400 tracking-widest uppercase mb-4 block">Backend Engineering</span>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-rose-300 transition-colors">Secure API Backend Management</h3>
            <p className="text-slate-400 text-sm flex-grow mb-8 leading-relaxed">
              Pengembangan RESTful API untuk operasi CRUD menggunakan framework Laravel. Sistem ini dilengkapi dengan keamanan autentikasi berbasis token menggunakan Laravel Sanctum dan basis data terelasi dengan MySQL.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['Laravel', 'MySQL', 'Sanctum', 'RESTful API'].map(tag => <span key={tag} className="text-[10px] font-bold text-slate-300 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-md uppercase tracking-wide">{tag}</span>)}
            </div>
          </article>

          <article className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/50 transition-all duration-500 flex flex-col relative overflow-hidden">
            <span className="text-xs font-bold text-amber-400 tracking-widest uppercase mb-4 block">Frontend & UI/UX</span>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-amber-300 transition-colors">Educational Foundation Platform</h3>
            <p className="text-slate-400 text-sm flex-grow mb-8 leading-relaxed">
              Merancang dan membangun antarmuka website yang responsif untuk sebuah yayasan pendidikan fiktif. Berfokus pada arsitektur informasi yang jelas dan pengalaman pengguna (UI/UX) yang intuitif.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['Web Development', 'UI/UX Design', 'Responsive', 'Prototyping'].map(tag => <span key={tag} className="text-[10px] font-bold text-slate-300 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-md uppercase tracking-wide">{tag}</span>)}
            </div>
          </article>

          <article className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-500 flex flex-col relative overflow-hidden">
            <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-4 block">Smart System / Hardware</span>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">IoT Real-Time Monitoring & Control</h3>
            <p className="text-slate-400 text-sm flex-grow mb-8 leading-relaxed">
              Sistem kendali LED dan monitoring suhu & kelembaban menggunakan NodeMCU ESP8266. Mengirimkan data secara real-time via MQTT ke Dashboard Web, dilengkapi dengan sistem alarm bertingkat.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['ESP8266', 'MQTT', 'DHT11', 'Dashboard'].map(tag => <span key={tag} className="text-[10px] font-bold text-slate-300 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-md uppercase tracking-wide">{tag}</span>)}
            </div>
          </article>

          <article className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/50 transition-all duration-500 flex flex-col relative overflow-hidden">
            <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase mb-4 block">Mobile App</span>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors">Native Android Application</h3>
            <p className="text-slate-400 text-sm flex-grow mb-8 leading-relaxed">
              Pengembangan aplikasi Android berperforma tinggi menggunakan Kotlin. Arsitektur dibangun dengan standar industri (MVVM + Repository Pattern) memastikan *codebase* yang terukur dan mudah dikelola.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['Kotlin', 'MVVM', 'Repository', 'Android SDK'].map(tag => <span key={tag} className="text-[10px] font-bold text-slate-300 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-md uppercase tracking-wide">{tag}</span>)}
            </div>
          </article>

          <article className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all duration-500 flex flex-col relative overflow-hidden">
            <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-4 block">Web Application</span>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors">Sistem Daftar Ulang Mahasiswa</h3>
            <p className="text-slate-400 text-sm flex-grow mb-8 leading-relaxed">
              Membangun platform administrasi akademik berbasis web untuk memfasilitasi proses daftar ulang mahasiswa secara efisien, terstruktur, dan aman. Terintegrasi sepenuhnya dengan database MySQL.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['Laravel', 'MySQL', 'Web Admin', 'Academic System'].map(tag => <span key={tag} className="text-[10px] font-bold text-slate-300 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-md uppercase tracking-wide">{tag}</span>)}
            </div>
          </article>

          <article className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800/50 transition-all duration-500 flex flex-col relative overflow-hidden">
            <span className="text-xs font-bold text-purple-400 tracking-widest uppercase mb-4 block">Web Application</span>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">Sistem Reservasi Meja Dinamis</h3>
            <p className="text-slate-400 text-sm flex-grow mb-8 leading-relaxed">
              Aplikasi manajemen operasional untuk menangani pemesanan dan alokasi reservasi meja secara real-time, meminimalkan *double-booking* menggunakan arsitektur *Native PHP*.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['Native PHP', 'MySQL', 'Booking System'].map(tag => <span key={tag} className="text-[10px] font-bold text-slate-300 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-md uppercase tracking-wide">{tag}</span>)}
            </div>
          </article>

          <article className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 hover:border-orange-500/50 hover:bg-slate-800/50 transition-all duration-500 flex flex-col md:col-span-2 lg:col-span-3 relative overflow-hidden">
            <span className="text-xs font-bold text-orange-400 tracking-widest uppercase mb-4 block">Game Development / Final Project</span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-orange-300 transition-colors">Alphabet Adventure: A-Z Collector</h3>
            <p className="text-slate-400 text-sm md:text-base flex-grow mb-8 leading-relaxed max-w-4xl">
              Game edukasi interaktif 2D. Mengeliminasi layar *Game Over* tradisional dengan sistem **auto-restart** yang mereset waktu dan huruf otomatis saat kondisi kalah terpenuhi, menciptakan *loop* bermain tanpa henti yang dirancang khusus untuk mempertahankan fokus belajar anak-anak.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['Godot Engine', 'GDScript', 'Game Logic', '2D Design', 'Educational Software'].map(tag => <span key={tag} className="text-[10px] md:text-xs font-bold text-slate-300 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-md uppercase tracking-wide">{tag}</span>)}
            </div>
          </article>

        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-32 bg-slate-950 relative scroll-mt-24">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-16 text-center">Professional Journey</h2>
          
          <div className="space-y-16">
            <div className="relative pl-10 border-l border-slate-800 group">
              <div className="absolute w-5 h-5 bg-slate-950 border-2 border-cyan-500 rounded-full -left-[10.5px] top-1 shadow-[0_0_10px_rgba(6,182,212,0.8)] group-hover:bg-cyan-500 transition-colors duration-300"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">Operational Support & Administrasi</h3>
                <span className="text-cyan-500 text-sm font-bold mt-2 md:mt-0 px-3 py-1 bg-cyan-950/30 rounded-full border border-cyan-900/50">2020 — 2026</span>
              </div>
              <p className="text-lg text-slate-400 font-medium mb-6">KSP Buana Artha Prima</p>
              <ul className="text-slate-400 leading-relaxed list-none space-y-3">
                <li className="flex gap-3"><span className="text-cyan-500">▹</span> Mengelola integritas data administrasi dan memastikan kelancaran alur operasional harian.</li>
                <li className="flex gap-3"><span className="text-cyan-500">▹</span> Menjadi garda depan dalam memberikan dukungan teknis dan operasional secara komprehensif.</li>
                <li className="flex gap-3"><span className="text-cyan-500">▹</span> Menerapkan kemampuan *problem-solving* cepat tanggap dan manajemen waktu dalam ekosistem kerja yang dinamis.</li>
              </ul>
            </div>

            <div className="relative pl-10 border-l border-slate-800 group">
              <div className="absolute w-5 h-5 bg-slate-950 border-2 border-slate-500 rounded-full -left-[10.5px] top-1 group-hover:border-cyan-500 group-hover:bg-cyan-500 transition-colors duration-300"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">Frontliner Konter</h3>
                <span className="text-slate-400 text-sm font-bold mt-2 md:mt-0 px-3 py-1 bg-slate-800 rounded-full border border-slate-700">2020</span>
              </div>
              <p className="text-lg text-slate-400 font-medium mb-6">Trio Cell</p>
              <ul className="text-slate-400 leading-relaxed list-none space-y-3">
                <li className="flex gap-3"><span className="text-cyan-500">▹</span> Memfasilitasi transaksi langsung dan menganalisis kebutuhan pelanggan untuk memberikan solusi terbaik.</li>
                <li className="flex gap-3"><span className="text-cyan-500">▹</span> Melakukan pencatatan metrik penjualan harian dan manajemen stok barang secara akurat.</li>
                <li className="flex gap-3"><span className="text-cyan-500">▹</span> Menyusun laporan analitik penjualan secara berkala kepada manajemen.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-32 relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-cyan-900/10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">Mari Bangun Sesuatu yang Hebat</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
            Saya selalu terbuka untuk mendiskusikan inovasi teknologi, peluang <strong className="text-cyan-400">Remote Internship</strong>, atau kolaborasi proyek.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="https://wa.me/628151827774" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold flex justify-center items-center gap-3 hover:bg-[#1ebd5a] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.3)]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 21.055h-.005a9.882 9.882 0 01-5.005-1.353l-.36-.214-3.715.975.992-3.623-.235-.373a9.854 9.854 0 01-1.51-5.26c0-5.454 4.438-9.89 9.896-9.89 2.642 0 5.122 1.029 6.988 2.898a9.873 9.873 0 012.893 6.994c-.001 5.45-4.437 9.888-9.888 9.888l-.051-.042zm5.424-7.398c-.297-.149-1.758-.868-2.031-.968-.273-.099-.47-.149-.668.149-.198.297-.768.968-.94 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.88-.788-1.473-1.761-1.646-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.1-.198.05-.372-.025-.521-.074-.149-.668-1.613-.916-2.207-.241-.579-.487-.501-.668-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.478s1.064 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.306 1.265.489 1.695.626.713.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.174-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              WhatsApp Saya
            </a>
            
            <a href="mailto:khanifdrakstar@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold flex justify-center items-center gap-3 hover:bg-slate-700 hover:scale-105 transition-all duration-300">
              <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Email Saya
            </a>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="border-t border-slate-800/50 bg-slate-950 py-10 text-center text-sm font-medium text-slate-600">
        <p>© {new Date().getFullYear()} Awwalul Khoirul Khanif. Crafted with precision in Semarang.</p>
        <p className="mt-2 text-xs flex justify-center items-center gap-1">
          Built with <span className="text-cyan-500 font-bold">Next.js</span> & <span className="text-cyan-500 font-bold">Tailwind CSS</span>
        </p>
      </footer>

    </main>
  );
}