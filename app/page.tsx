"use client";

import React, { useState, useEffect, useRef } from 'react';

// ==========================================
// DATA PORTOFOLIO (Edit teks di sini jika ada perubahan)
// ==========================================
const SKILLS = [
  { title: 'Web Development', icon: '</>', tech: 'Laravel, Next.js, Tailwind, PHP, MySQL', desc: 'Membangun API yang solid dan antarmuka web yang responsif.' },
  { title: 'IoT & Smart System', icon: '⚡', tech: 'NodeMCU, MQTT, Sensors', desc: 'Menghubungkan hardware fisik ke dalam ekosistem digital.' },
  { title: 'Mobile & Game', icon: '📱', tech: 'Kotlin, Godot, MVVM', desc: 'Pembuatan aplikasi Android Native dan Game Edukasi 2D.' },
];

const PROJECTS = [
  { id: 1, title: 'Secure REST API', category: 'Web', tech: ['Laravel', 'Sanctum', 'MySQL'], desc: 'Backend operasi CRUD dengan autentikasi token untuk keamanan akses data.', link: 'https://github.com/khanif' },
  { id: 2, title: 'Alphabet Adventure', category: 'Game', tech: ['Godot', 'GDScript'], desc: 'Game edukasi 2D dengan sistem auto-restart tanpa layar Game Over.', link: 'https://github.com/khanif' },
  { id: 3, title: 'Real-Time Monitor', category: 'IoT', tech: ['NodeMCU', 'MQTT', 'DHT11'], desc: 'Sistem kendali LED & sensor suhu berbasis Web Dashboard.', link: 'https://github.com/khanif' },
  { id: 4, title: 'Native Android App', category: 'Mobile', tech: ['Kotlin', 'MVVM'], desc: 'Aplikasi mobile berstandar industri menggunakan Repository Pattern.', link: 'https://github.com/khanif' },
  { id: 5, title: 'Sistem Daftar Ulang', category: 'Web', tech: ['Laravel', 'MySQL'], desc: 'Platform administrasi akademik web untuk pendaftaran ulang mahasiswa.', link: 'https://github.com/khanif' },
  { id: 6, title: 'Sistem Reservasi Meja', category: 'Web', tech: ['PHP Native', 'MySQL'], desc: 'Aplikasi web operasional untuk meminimalkan double-booking.', link: 'https://github.com/khanif' },
];

const EXPERIENCES = [
  { year: '2020 - Sekarang', role: 'Operasional & Administrasi', company: 'KSP Buana Artha Prima', desc: 'Menangani integritas data administrasi harian dan memberikan problem-solving cepat tanggap untuk kendala teknis dasar operasional.' },
  { year: '2020', role: 'Frontliner Konter', company: 'Trio Cell', desc: 'Menganalisis kebutuhan perangkat pelanggan, mencatat metrik penjualan harian, dan mengelola stok inventaris fisik.' }
];

const FILTERS = ['Semua', 'Web', 'IoT', 'Mobile', 'Game'];

// ==========================================
// KOMPONEN UTAMA
// ==========================================
export default function Home() {
  // --- STATE ---
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // --- REFS (Untuk Animasi Halus) ---
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const bgParallaxRef = useRef(null);

  // --- EFEK & LIFECYCLE ---
  useEffect(() => {
    // 1. PAKSA UBAH NAMA TAB BROWSER
    document.title = "Portofolio AKKhanif";

    // 2. DETEKSI SCROLL UNTUK NAVBAR
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // 3. ANIMASI KURSOR & PARALLAX BACKGROUND
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.animate({
          transform: `translate3d(${clientX}px, ${clientY}px, 0)`
        }, { duration: 500, fill: "forwards" });
      }
      if (bgParallaxRef.current) {
        const x = (clientX - window.innerWidth / 2) * -0.02;
        const y = (clientY - window.innerHeight / 2) * -0.02;
        bgParallaxRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Filter Proyek
  const filteredProjects = activeFilter === 'Semua' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-slate-900 scroll-smooth custom-cursor-area">
      
      {/* --- CUSTOM CURSOR --- */}
      <div ref={cursorDotRef} className="cursor-dot hidden md:block w-2 h-2 bg-cyan-400 rounded-full fixed top-0 left-0 pointer-events-none z-[100] -ml-1 -mt-1 shadow-[0_0_10px_#22d3ee]"></div>
      <div ref={cursorOutlineRef} className="cursor-outline hidden md:flex justify-center items-center w-8 h-8 border border-cyan-400/50 rounded-full fixed top-0 left-0 pointer-events-none z-[100] -ml-4 -mt-4 transition-all duration-200">
        <div className="w-1 h-1 bg-cyan-400/30 rounded-full animate-ping"></div>
      </div>

      {/* --- PARALLAX BACKGROUND LIGHTS --- */}
      <div ref={bgParallaxRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-600/20 rounded-full blur-[100px] md:blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-700/10 rounded-full blur-[120px] md:blur-[150px]"></div>
      </div>

      {/* --- TOP NOTIFICATION BAR --- */}
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-slate-950 text-cyan-100 text-center py-2.5 text-xs md:text-sm font-medium tracking-wide border-b border-cyan-900/50 relative z-50 flex justify-center items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        Sedang mencari pekerjaan tetap atau peluang magang (Remote/Semarang).
      </div>

      {/* --- SMART NAVBAR --- */}
      <nav className={`fixed top-10 md:top-12 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className={`max-w-6xl mx-auto px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-full shadow-lg py-3 px-6' : 'bg-transparent'}`}>
          
          <a href="#" className="font-extrabold text-xl tracking-tighter text-white flex items-center gap-1 group z-50">
            <span className="text-cyan-500 group-hover:-translate-x-1 transition-transform">{'<'}</span> 
            A.K. KHANIF 
            <span className="text-cyan-500 group-hover:translate-x-1 transition-transform">{'/>'}</span>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-400 items-center">
            {['Profil', 'Keahlian', 'Proyek', 'Pengalaman'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors duration-300 hover:-translate-y-0.5 active:scale-95">
                {item}
              </a>
            ))}
            <a href="#kontak" className="px-5 py-2 rounded-full text-sm font-bold bg-white text-slate-900 hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95">
              Kontak
            </a>
          </div>

          {/* Tombol Menu Mobile */}
          <button 
            className="md:hidden text-white p-2 z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Overlay Menu Mobile */}
        <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out flex flex-col justify-center items-center gap-8 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
           {['Profil', 'Keahlian', 'Proyek', 'Pengalaman', 'Kontak'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
              >
                {item}
              </a>
            ))}
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="profil" className="max-w-6xl mx-auto px-6 min-h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-12 pt-32 pb-20">
        <div className="flex-1 space-y-6 md:space-y-8 relative z-10 text-center md:text-left">
          
          <div className="inline-flex items-center justify-center md:justify-start gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-sm cursor-default hover:border-cyan-500/50 transition-colors">
            <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
            <span className="text-xs font-bold text-slate-300 tracking-wider uppercase">Semarang, Indonesia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-lg">
            Software,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 hover:to-purple-500 transition-colors duration-700">
              Smart Systems,
            </span><br />
            & Operasional.
          </h1>
          
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0">
            Halo, saya <strong className="text-white">Awwalul Khoirul Khanif</strong>. Mahasiswa Teknik Informatika semester 6. Berfokus memecahkan masalah nyata melalui kode web yang rapi, perangkat keras fungsional, dan operasional yang solid.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <a href="#proyek" className="px-8 py-3.5 rounded-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center gap-2 group">
              Lihat Karya 
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-full bg-slate-900 border border-slate-700 text-white font-bold hover:bg-slate-800 hover:border-slate-500 active:scale-95 transition-all duration-300 flex items-center gap-2">
              GitHub Profile
            </a>
          </div>
        </div>
        
        {/* Visual Foto */}
        <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] group flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 group-hover:opacity-60 transition-all duration-1000 animate-spin-slow"></div>
          <div className="relative w-full h-full transform group-hover:scale-105 group-hover:-translate-y-4 transition-transform duration-700 ease-out z-10">
            <img src="/profile.png" alt="Khanif" className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(6,182,212,0.3)]" />
          </div>
        </div>
      </section>

      {/* --- KEAHLIAN --- */}
      <section id="keahlian" className="py-24 relative z-10 bg-slate-900/40 border-y border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center md:text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Senjata <span className="text-cyan-400">Teknis.</span></h2>
            <p className="text-slate-400 max-w-md mx-auto md:mx-0">Toolset yang telah saya asah melalui pembelajaran intensif dan implementasi proyek nyata.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-slate-900/80 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)] transition-all duration-300 relative overflow-hidden cursor-default">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-colors duration-500"></div>
                <div className="text-4xl mb-6 transform group-hover:scale-110 origin-left transition-transform duration-300">{skill.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{skill.title}</h3>
                <p className="text-cyan-500 text-xs font-bold tracking-widest uppercase mb-4">{skill.tech}</p>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROYEK (Dengan Filter) --- */}
      <section id="proyek" className="py-32 max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Eksplorasi <span className="text-cyan-400">Karya.</span></h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {FILTERS.map((filter) => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 active:scale-95 ${activeFilter === filter ? 'bg-cyan-500 text-slate-950 shadow-[0_5px_15px_rgba(34,211,238,0.4)]' : 'bg-slate-900/80 text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-white'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article 
              key={project.id} 
              className="group p-8 rounded-[2rem] bg-slate-900/60 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.2)] flex flex-col relative overflow-hidden animate-fade-in"
            >
              <span className="text-xs font-bold text-cyan-500 tracking-widest uppercase mb-3 block">{project.category}</span>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold px-3 py-1.5 rounded-md uppercase bg-slate-950 border border-slate-800 text-slate-400 group-hover:border-slate-600 transition-colors">
                    {t}
                  </span>
                ))}
              </div>

              <a href={project.link} target="_blank" rel="noreferrer" className="mt-auto py-3 w-full rounded-xl bg-slate-800 text-white font-bold text-sm text-center flex justify-center items-center gap-2 hover:bg-cyan-500 hover:text-slate-950 active:scale-[0.98] transition-all duration-300 group/btn">
                Lihat Kode 
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* --- PENGALAMAN --- */}
      <section id="pengalaman" className="py-32 bg-slate-900/40 border-t border-slate-800/80 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Rekam <span className="text-cyan-400">Jejak.</span></h2>
            <p className="text-slate-400">Terbiasa bekerja secara profesional, disiplin, dan mampu menyelesaikan masalah operasional di lapangan.</p>
          </div>
          
          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:pl-0 space-y-12 before:hidden md:before:block before:absolute before:inset-0 before:mx-auto before:w-0.5 before:bg-slate-800">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0 flex flex-col md:flex-row items-center justify-between group">
                
                <div className="absolute w-6 h-6 bg-slate-950 border-4 border-slate-600 rounded-full -left-[13px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-6 group-hover:border-cyan-500 group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-300 z-10"></div>
                
                <div className={`w-full md:w-[45%] p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 group-hover:border-cyan-500/50 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)] transition-all duration-300 ${idx % 2 === 0 ? 'md:text-right md:mr-auto' : 'md:text-left md:ml-auto'}`}>
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-950 border border-slate-700 text-cyan-400 font-bold text-xs tracking-widest uppercase mb-4">{exp.year}</span>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{exp.role}</h3>
                  <p className="text-slate-500 font-semibold mb-4">{exp.company}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- KONTAK --- */}
      <section id="kontak" className="py-32 relative overflow-hidden border-t border-slate-800 z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent -z-10"></div>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Mari Berkolaborasi.</h2>
          <p className="text-lg text-slate-400 mb-12">Saya sedang mencari pekerjaan tetap atau peluang magang di bidang IT. Mari berdiskusi tentang bagaimana saya bisa membantu dan berkontribusi di tim Anda.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/628151827774" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-[#25D366] text-white font-bold flex justify-center items-center gap-3 hover:bg-[#20b858] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(37,211,102,0.3)] active:scale-95 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 21.055h-.005a9.882 9.882 0 01-5.005-1.353l-.36-.214-3.715.975.992-3.623-.235-.373a9.854 9.854 0 01-1.51-5.26c0-5.454 4.438-9.89 9.896-9.89 2.642 0 5.122 1.029 6.988 2.898a9.873 9.873 0 012.893 6.994c-.001 5.45-4.437 9.888-9.888 9.888l-.051-.042zm5.424-7.398c-.297-.149-1.758-.868-2.031-.968-.273-.099-.47-.149-.668.149-.198.297-.768.968-.94 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.88-.788-1.473-1.761-1.646-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.1-.198.05-.372-.025-.521-.074-.149-.668-1.613-.916-2.207-.241-.579-.487-.501-.668-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.478s1.064 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.306 1.265.489 1.695.626.713.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.174-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              WhatsApp Saya
            </a>
            <a href="mailto:khanifdrakstar@gmail.com" className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold flex justify-center items-center gap-3 hover:bg-slate-800 hover:-translate-y-1 hover:border-slate-500 active:scale-95 transition-all duration-300 border border-slate-700">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Kirim Email
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center border-t border-slate-800/80 bg-slate-950 relative z-10">
        <p className="text-sm font-medium text-slate-500">© {new Date().getFullYear()} Awwalul Khoirul Khanif.</p>
      </footer>

      {/* --- CUSTOM STYLES --- */}
      <style dangerouslySetInnerHTML={{__html: `
        .animate-spin-slow { animation: spin 20s linear infinite; }
        
        /* Cursor kustom aktif jika pakai mouse (Laptop/PC) */
        @media (pointer: fine) {
          .custom-cursor-area, .custom-cursor-area * { cursor: none !important; }
        }
        
        /* Efek Fade-in untuk Filter Proyek */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
      `}} />
    </main>
  );
}