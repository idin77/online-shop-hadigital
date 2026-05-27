import { Sparkles, ArrowRight, Laptop, Video, ChevronDown, CheckCircle } from 'lucide-react';

interface HeroProps {
  onOpenOrderModal: (type: 'web' | 'video' | 'custom', initialProduct?: any) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onOpenOrderModal, onScrollToSection }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-radial from-gray-950 via-gray-950 to-black"
    >
      {/* Dynamic Grid Background with Cyan Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35"></div>

      {/* Decorative Orbs with Neon Glows - Animate Float */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-neon-blue/8 blur-[100px] animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-neon-purple/8 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      {/* Abstract Tech Waves */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-neon-blue/5 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] border border-neon-purple/5 rounded-full border-dashed pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-neon-blue/30 transition-all duration-300 mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-neon-blue animate-spin" style={{ animationDuration: '4s' }} />
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-gray-200">
            DREAMS MEET <span className="text-neon-blue">DIGITAL INNOVATION</span>
          </span>
        </div>

        {/* Master Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-white max-w-5xl mx-auto leading-tight sm:leading-none">
          Jasa <span className="text-neon-blue neon-glow-text relative">Website</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-purple-400">Video Animasi</span> Realistis Profesional
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          HADIGITAL membantu bisnis tampil lebih profesional dengan website modern berdaya kerja kilat dan video promosi realistis berkualitas tinggi untuk meroketkan omset Anda.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            id="hero-cta-order-now"
            onClick={() => onOpenOrderModal('custom')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-black bg-neon-blue shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.8)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-base cursor-pointer"
          >
            Pesan Sekarang
            <ArrowRight className="w-5 h-5 text-black" />
          </button>
          
          <button
            id="hero-cta-view-packages"
            onClick={() => onScrollToSection('website')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-white/5 border border-white/10 hover:border-neon-blue/50 hover:bg-neon-blue/5 transition-all duration-300 flex items-center justify-center gap-2 text-base cursor-pointer"
          >
            Lihat Paket
          </button>
        </div>

        {/* Features Minimal Grid */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto pt-10 border-t border-white/5">
          <div className="flex flex-col items-center p-4 bg-white/2 rounded-xl border border-white/5 hover:border-neon-blue/20 transition-all duration-350">
            <Laptop className="w-6 h-6 text-neon-blue mb-2" />
            <span className="text-xl sm:text-2xl font-bold text-white font-display">100% Mobile</span>
            <span className="text-xs text-gray-500 mt-1">SEO Optimized Website</span>
          </div>

          <div className="flex flex-col items-center p-4 bg-white/2 rounded-xl border border-white/5 hover:border-neon-blue/20 transition-all duration-350">
            <Video className="w-6 h-6 text-neon-blue mb-2" />
            <span className="text-xl sm:text-2xl font-bold text-white font-display">1 Hari Selesai</span>
            <span className="text-xs text-gray-500 mt-1">Video Animasi Cepat</span>
          </div>

          <div className="flex flex-col items-center p-4 bg-white/2 rounded-xl border border-white/5 hover:border-purple-500/20 transition-all duration-350">
            <CheckCircle className="w-6 h-6 text-purple-400 mb-2" />
            <span className="text-xl sm:text-2xl font-bold text-white font-display">Revisi Puas</span>
            <span className="text-xs text-gray-500 mt-1">Sesuai Kebutuhan Industri</span>
          </div>

          <div className="flex flex-col items-center p-4 bg-white/2 rounded-xl border border-white/5 hover:border-neon-blue/20 transition-all duration-350">
            <Sparkles className="w-6 h-6 text-neon-blue mb-2" />
            <span className="text-xl sm:text-2xl font-bold text-white font-display">All-in-One</span>
            <span className="text-xs text-gray-500 mt-1">Hosting, Domain, & VO</span>
          </div>
        </div>

        {/* Floating Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 animate-bounce cursor-pointer" onClick={() => onScrollToSection('website')}>
          <span className="text-xs font-mono font-bold tracking-widest text-[#00f0ff] uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 text-neon-blue" />
        </div>
      </div>
    </section>
  );
}
