import { useState } from 'react';
import { portfolioItems } from '../data';
import { Sparkles, Eye, Code, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState<'all' | 'website' | 'video'>('all');

  const filteredItems = portfolioItems.filter(
    (item) => filter === 'all' || item.type === filter
  );

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-black">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-neon-blue/4 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Container */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 mb-4">
            <Sparkles className="w-4 h-4 text-neon-blue" />
            <span className="text-xs uppercase font-mono tracking-widest text-[#00f0ff] font-bold">
              Hasil Kerja Unggulan
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Portofolio <span className="text-neon-blue neon-glow-text">Kreasi Klien</span> Kami
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Jelajahi beberapa hasil karya pembuatan website canggih dan video promosi animasi realistis yang telah membantu bisnis klien bertumbuh pesat.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-12">
          {['all', 'website', 'video'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type as any)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                filter === type
                  ? 'bg-neon-blue text-black border-neon-blue shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                  : 'bg-white/5 text-gray-400 border-white/5 hover:border-white/10 hover:text-white'
              }`}
            >
              {type === 'all' ? 'Semua Projek' : type === 'website' ? 'Website Portal' : 'Video Animasi'}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden glass-card border border-white/5 hover:border-neon-blue/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Product Aspect Photo frame */}
              <div className="aspect-video w-full overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent opacity-90"></div>
                
                {/* Type Tag badge */}
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/80 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-neon-blue border border-neon-blue/30 font-mono">
                  {item.category}
                </span>
              </div>

              {/* Text detail metadata */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white font-display group-hover:text-neon-blue transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center gap-1.5 mt-4 text-[10px] font-mono uppercase tracking-widest text-gray-500 font-bold group-hover:text-neon-blue/80 transition-colors">
                  <span>Lihat Detil</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
