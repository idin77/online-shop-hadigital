import { useState } from 'react';
import { VideoPackage } from '../types';
import { videoPackages } from '../data';
import { Video, Check, HelpCircle, Sparkles, Sliders, Play, Volume2, Clock, Music, FileText } from 'lucide-react';

interface VideoSectionProps {
  onOpenOrderModal: (type: 'web' | 'video' | 'custom', initialProduct?: any) => void;
}

export default function VideoSection({ onOpenOrderModal }: VideoSectionProps) {
  // Custom Slider State (default 30 seconds)
  const [customDuration, setCustomDuration] = useState<number>(30);

  // Simple formula helper to estimate custom duration prices
  // Rp 10.000 per second base for pricing dynamic logic
  const calculateCustomPrice = (sec: number): number => {
    if (sec <= 8) return 99000;
    if (sec <= 15) return 179000;
    if (sec <= 30) return 299000;
    if (sec <= 60) return 499000;
    // Over 60 seconds gets custom estimated rate (e.g. 7500 per additional second)
    const extraSec = sec - 60;
    return Math.round((499000 + extraSec * 7500) / 1000) * 1000;
  };

  const formatRupiah = (num: number): string => {
    return 'Rp ' + num.toLocaleString('id-ID');
  };

  const handleCustomOrder = () => {
    const customProduct = {
      id: `video-custom-${customDuration}s`,
      name: `Kustom Video ${customDuration} Detik`,
      price: formatRupiah(calculateCustomPrice(customDuration)),
      priceValue: calculateCustomPrice(customDuration),
      badge: 'Formula Kustom',
      description: `Kustomisasi penuh dengan durasi presisi ${customDuration} detik.`
    };
    onOpenOrderModal('video', customProduct);
  };

  const featuresList = [
    { name: 'Skrip & Konsep Kreatif', desc: 'Briefing ide disulap menjadi draft skrip siap saji.', icon: FileText },
    { name: 'Voice Over Pengisi Suara', desc: 'Narasi suara AI premium alami berlipat ganda.', icon: Volume2 },
    { name: 'Klip Video Sinematik Realistis', desc: 'Aset background ultra-realistis resolusi tinggi.', icon: Video },
    { name: '2 Lagu Pengiring Audio', desc: 'Musik komersial bebas klaim hak cipta musik.', icon: Music },
    { name: 'Hasil Kerja Super Cepat', desc: 'Estimasi proses pengerjaan selesai 1 hari kerja.', icon: Clock }
  ];

  return (
    <section id="video" className="py-24 relative overflow-hidden bg-gray-950">
      {/* Background Decorative Neon Light Beam */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[300px] bg-gradient-to-r from-neon-blue/5 to-purple-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Container */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <Video className="w-4 h-4 text-purple-400" />
            <span className="text-xs uppercase font-mono tracking-widest text-purple-400 font-bold">
              Layanan Video Animasi Realistis
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Video Promosi <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-purple-400">Sinematik & Realistis</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Ubah ide produk Anda menjadi mahakarya video promosi dengan retensi penonton tinggi. Sangat cocok untuk sirkulasi iklan TikTok, Instagram, & Shopee.
          </p>
        </div>

        {/* Master Content Section: Standard Cards + Custom Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Standard Cards (8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videoPackages.map((pkg) => {
              const isBest = pkg.id === 'video-15s';
              return (
                <div
                  id={`card-video-${pkg.id}`}
                  key={pkg.id}
                  className={`p-6 rounded-2xl flex flex-col justify-between transition-all duration-350 transform relative ${
                    isBest 
                      ? 'glass-card neon-border-blue border-none shadow-[0_0_20px_rgba(0,240,255,0.1)] scale-102' 
                      : 'glass-card border border-white/5 hover:border-white/12'
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-neon-blue/10 text-neon-blue text-[10px] font-bold font-mono tracking-wider border border-neon-blue/20">
                      {pkg.badge.toUpperCase()}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                        <Play className="w-4 h-4 text-[#00f0ff]" />
                      </div>
                      <span className="text-sm font-bold font-display text-white">
                        VIDEO {pkg.duration} DETIK
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 min-h-10 mt-2 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-white/5 pt-4">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500 font-bold">Investasi</span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-xl sm:text-2xl font-bold font-display text-white">{pkg.price}</span>
                      <button
                        onClick={() => {
                          const productFormat = {
                            id: pkg.id,
                            name: `Video ${pkg.duration} Detik`,
                            price: pkg.price,
                            priceValue: pkg.priceValue,
                            description: pkg.description
                          };
                          onOpenOrderModal('video', productFormat);
                        }}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white/5 hover:bg-neon-blue hover:text-black border border-white/10 hover:border-transparent transition-all cursor-pointer"
                      >
                        Pilih
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Interactive Estimasor Slider (4 Cols) */}
          <div className="lg:col-span-4 p-6 rounded-2xl glass-card border border-neon-blue/20 shadow-[0_0_20px_rgba(0,240,255,0.05)] h-full">
            <div className="flex items-center gap-2 mb-4">
              <Sliders className="w-5 h-5 text-neon-blue" />
              <h3 className="text-base font-bold text-white font-display uppercase tracking-wide">
                Kalkulator Durasi
              </h3>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Butuh durasi spesifik? Geser slider di bawah ini sesuai kebutuhan video pemasaran Anda secara real-time.
            </p>

            <div className="space-y-6">
              {/* Slider Input */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray-400 font-bold">Durasi:</span>
                  <span className="text-neon-blue font-bold">{customDuration} Detik</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="120"
                  value={customDuration}
                  onChange={(e) => setCustomDuration(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-neon-blue"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>5s</span>
                  <span>60s (1m)</span>
                  <span>120s (2m)</span>
                </div>
              </div>

              {/* Dynamic Price Output */}
              <div className="bg-white/3 p-4 rounded-xl border border-white/5 text-center">
                <span className="text-xs text-gray-400 uppercase font-mono tracking-wider">Estimasi Harga Kustom</span>
                <div className="text-2xl font-extrabold text-[#00f0ff] font-display mt-1 neon-glow-text">
                  {formatRupiah(calculateCustomPrice(customDuration))}
                </div>
                {customDuration > 60 && (
                  <p className="text-[10px] text-purple-400 font-bold mt-1">
                    🎉 Nego khusus untuk durasi panjang!
                  </p>
                )}
              </div>

              <button
                onClick={handleCustomOrder}
                className="w-full py-3.5 rounded-xl font-bold bg-neon-blue text-black text-sm shadow-[0_5px_15px_rgba(0,240,255,0.2)] hover:shadow-[0_5px_25px_rgba(0,240,255,0.4)] transition-all cursor-pointer text-center"
              >
                Pemesanan Kustom
              </button>
            </div>
          </div>

        </div>

        {/* Video Features Bullet Grid */}
        <div className="mt-16 pt-12 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuresList.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="p-4 rounded-xl bg-white/2 border border-white/5 hover:border-purple-500/15 transition-all duration-300">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-extrabold text-white uppercase tracking-wider font-display">
                    {f.name}
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-1.5 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Negotiate Note banner */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-center text-xs text-gray-400 font-mono">
          <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
            💡 Lebih dari 1 menit harga bisa nego
          </span>
          <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[#00f0ff] border-neon-blue/20">
            🤝 Kontrak bulanan untuk order rutin tersedia harga khusus
          </span>
        </div>

      </div>
    </section>
  );
}
