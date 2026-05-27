import { WebPackage } from '../types';
import { webPackages } from '../data';
import { Check, Laptop, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';

interface WebsiteSectionProps {
  onOpenOrderModal: (type: 'web' | 'video' | 'custom', initialProduct?: any) => void;
}

export default function WebsiteSection({ onOpenOrderModal }: WebsiteSectionProps) {
  return (
    <section id="website" className="py-24 relative overflow-hidden bg-black">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Container */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 mb-4">
            <Laptop className="w-4 h-4 text-neon-blue" />
            <span className="text-xs uppercase font-mono tracking-widest text-neon-cyan font-bold">
              Layanan Website Profesional
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Paket Pembuatan <span className="text-neon-blue neon-glow-text">Website Modern</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Kami membangun website responsif dengan performa maksimal dan optimasi SEO guna memastikan bisnis Anda sukses merebut pasar online digital.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {webPackages.map((pkg) => {
            const isBusiness = pkg.id === 'web-business';
            const isPremium = pkg.id === 'web-premium';

            return (
              <div
                id={`card-${pkg.id}`}
                key={pkg.id}
                className={`relative flex flex-col justify-between p-8 rounded-3xl h-full transition-all duration-300 ${
                  isBusiness
                    ? 'glass-card border-none neon-border-blue scale-102 z-10 shadow-[0_0_30px_rgba(0,240,255,0.15)] md:-translate-y-2'
                    : 'glass-card border border-white/5 hover:border-white/15'
                }`}
              >
                {/* Popularity Badge */}
                {pkg.badge && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold font-mono tracking-wider shadow-lg flex items-center gap-1 ${
                    isBusiness ? 'bg-neon-blue text-black' : 'bg-neon-purple text-white'
                  }`}>
                    <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '3s' }} />
                    {pkg.badge.toUpperCase()}
                  </div>
                )}

                {/* Card Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono tracking-widest text-gray-400 font-bold uppercase">
                      {pkg.name}
                    </span>
                    {isPremium ? (
                      <Zap className="w-5 h-5 text-purple-400" />
                    ) : isBusiness ? (
                      <Sparkles className="w-5 h-5 text-neon-blue" />
                    ) : (
                      <Globe className="w-5 h-5 text-gray-500" />
                    )}
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed min-h-12">
                    {pkg.description}
                  </p>

                  <div className="mb-8 border-b border-white/5 pb-6">
                    <span className="text-sm text-gray-400">Mulai dari</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white">
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">
                      Fitur Termasuk:
                    </span>
                    <ul className="space-y-3.5">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                          <div className={`mt-1 flex items-center justify-center p-0.5 rounded-full ${
                            isBusiness ? 'bg-neon-blue/10 text-neon-blue' : 'bg-white/10 text-gray-300'
                          }`}>
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Order Button */}
                <button
                  id={`btn-${pkg.id}`}
                  onClick={() => onOpenOrderModal('web', pkg)}
                  className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all duration-300 hover:scale-103 active:scale-97 text-center cursor-pointer ${
                    isBusiness
                      ? 'bg-neon-blue text-black shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]'
                      : 'bg-white/5 hover:bg-neon-blue/10 text-white border border-white/15 hover:border-neon-blue/40'
                  }`}
                >
                  Pesan via WhatsApp
                </button>
              </div>
            );
          })}
        </div>

        {/* Minimal Additional Info banner */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-neon-blue/10 text-neon-blue">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">Sistem Keamanan & Garansi Terbaik</h4>
              <p className="text-xs text-gray-400 mt-1">Semua website yang kami luncurkan gratis instalasi SSL HTTPS, support maintenance, serta jaminan uptime website Anda.</p>
            </div>
          </div>
          <button 
            onClick={() => onOpenOrderModal('custom')}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-white/5 border border-white/10 hover:border-neon-blue/50 text-white hover:text-neon-blue transition-all cursor-pointer whitespace-nowrap"
          >
            Konsultasi Gratis
          </button>
        </div>

      </div>
    </section>
  );
}
