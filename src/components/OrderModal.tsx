import { useState, useEffect, FormEvent } from 'react';
import { webPackages, videoPackages } from '../data';
import { X, Send, CreditCard, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'web' | 'video' | 'custom';
  initialProduct?: any;
}

export default function OrderModal({ isOpen, onClose, type, initialProduct }: OrderModalProps) {
  // Client Details Form State
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedServiceType, setSelectedServiceType] = useState<'web' | 'video' | 'custom'>('web');
  const [selectedPackageId, setSelectedPackageId] = useState('');
  
  // Custom Extras state
  const [expressDelivery, setExpressDelivery] = useState(false);
  const [extraRevisions, setExtraRevisions] = useState(false);

  // Sync state with open triggers
  useEffect(() => {
    if (isOpen) {
      setSelectedServiceType(type);
      if (initialProduct) {
        setSelectedPackageId(initialProduct.id);
      } else {
        if (type === 'web') {
          setSelectedPackageId(webPackages[0].id);
        } else if (type === 'video') {
          setSelectedPackageId(videoPackages[0].id);
        } else {
          setSelectedPackageId('custom');
        }
      }
    }
  }, [isOpen, type, initialProduct]);

  if (!isOpen) return null;

  // Find active package to show live price feedback
  let activePackageName = '';
  let activePackagePrice = 0;

  if (selectedServiceType === 'web') {
    const pkg = webPackages.find(p => p.id === selectedPackageId);
    if (pkg) {
      activePackageName = pkg.name;
      activePackagePrice = pkg.priceValue;
    }
  } else if (selectedServiceType === 'video') {
    // If it is a custom slider input product
    if (initialProduct && initialProduct.id.startsWith('video-custom-')) {
      activePackageName = initialProduct.name;
      activePackagePrice = initialProduct.priceValue;
    } else {
      const pkg = videoPackages.find(p => p.id === selectedPackageId);
      if (pkg) {
        activePackageName = `VIDEO ${pkg.duration} DETIK`;
        activePackagePrice = pkg.priceValue;
      }
    }
  } else {
    activePackageName = 'KUSTOM AGENCY / KONSULTASI';
    activePackagePrice = 0;
  }

  // Live total pricing based on Addons
  let totalWithAddons = activePackagePrice;
  if (expressDelivery && activePackagePrice > 0) totalWithAddons += 100000; // +100k express
  if (extraRevisions && activePackagePrice > 0) totalWithAddons += 50000;   // +50k extra revision

  const formatRupiah = (num: number): string => {
    return 'Rp ' + num.toLocaleString('id-ID');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !businessName) {
      alert('Mohon lengkapi Nama Anda dan Nama Bisnis terlebih dahulu.');
      return;
    }

    // Build WhatsApp Structured message
    let message = `Halo HADIGITAL,\n\nSaya ingin memesan solusi digital sebagai berikut:\n\n`;
    message += `👤 *Nama Pemesan:* ${name}\n`;
    message += `🏢 *Nama Bisnis/Instansi:* ${businessName}\n`;
    message += `🛠️ *Tipe Jasa:* ${selectedServiceType === 'web' ? 'Pembuatan Website' : selectedServiceType === 'video' ? 'Video Animasi Realistis' : 'Kustom / Konsultasi'}\n`;
    
    if (selectedServiceType !== 'custom') {
      message += `📦 *Model Paket:* ${activePackageName}\n`;
      message += `💰 *Nilai Investasi:* ${formatRupiah(totalWithAddons)} (sudah termasuk addon)\n`;
    }

    // Addons listing
    if (expressDelivery || extraRevisions) {
      message += `⚡ *Fitur Tambahan:* `;
      const addons = [];
      if (expressDelivery) addons.push('Express Delivery (1-Hari Selesai)');
      if (extraRevisions) addons.push('Ekstra 3x Sesi Revisi');
      message += addons.join(', ') + `\n`;
    }

    if (notes.trim()) {
      message += `📝 *Catatan Detail/Brief:* ${notes}\n`;
    }

    message += `\nMohon petunjuk teknis pembayaran dan detail pengisian materi selanjutnya. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6285716551653?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity cursor-pointer animate-fade-in"
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-lg rounded-3xl glass-card border border-neon-blue/30 shadow-[0_0_35px_rgba(0,240,255,0.15)] overflow-hidden flex flex-col max-h-[90vh] animate-float">
        
        {/* Header bar */}
        <div className="relative p-6 border-b border-white/5 bg-white/2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-neon-blue animate-pulse" />
            <h3 className="text-lg font-bold font-display text-white">
              Formulir <span className="text-neon-blue font-bold">Pemesanan Jasa</span>
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form area */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6 no-scrollbar flex-1 pb-8">
          
          {/* Tipe Layanan dropdown */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'web', label: 'Website' },
              { id: 'video', label: 'Animasi Video' },
              { id: 'custom', label: 'Lainnya' }
            ].map((srv) => (
              <button
                key={srv.id}
                type="button"
                onClick={() => {
                  setSelectedServiceType(srv.id as any);
                  if (srv.id === 'web') setSelectedPackageId(webPackages[0].id);
                  else if (srv.id === 'video') setSelectedPackageId(videoPackages[0].id);
                  else setSelectedPackageId('custom');
                }}
                className={`py-2 text-xs font-bold rounded-lg border uppercase tracking-wider transition-all cursor-pointer ${
                  selectedServiceType === srv.id
                    ? 'bg-neon-blue/15 text-neon-blue border-neon-blue shadow-[0_0_10px_rgba(0,240,255,0.15)]'
                    : 'bg-white/2 text-gray-400 border-white/5 hover:border-white/10'
                }`}
              >
                {srv.label}
              </button>
            ))}
          </div>

          {/* Model Paket select option */}
          {selectedServiceType !== 'custom' && (
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-bold">Model Paket Layanan</label>
              <select
                value={selectedPackageId}
                onChange={(e) => setSelectedPackageId(e.target.value)}
                className="w-full bg-black/60 rounded-xl px-4 py-3 text-sm text-white border border-white/5 focus:border-neon-blue focus:outline-none transition-colors cursor-pointer"
              >
                {selectedServiceType === 'web' 
                  ? webPackages.map((p) => (
                      <option key={p.id} value={p.id} className="bg-black text-white">{p.name} - {p.price}</option>
                    ))
                  : (initialProduct && initialProduct.id.startsWith('video-custom-') ? (
                      <option value={initialProduct.id} className="bg-black text-white">{initialProduct.name}</option>
                    ) : (
                      videoPackages.map((p) => (
                        <option key={p.id} value={p.id} className="bg-black text-white">Video {p.duration} Detik - {p.price}</option>
                      ))
                    ))
                }
              </select>
            </div>
          )}

          {/* Customer info fields */}
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-bold block">Nama Anda / Penanggung Jawab *</label>
              <input
                type="text"
                required
                placeholder="cth. Muhammad Ridwan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-black/60 rounded-xl px-4 py-3 text-sm text-white border border-white/5 focus:border-neon-blue focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-bold block">Nama Perusahaan / Bisnis *</label>
              <input
                type="text"
                required
                placeholder="cth. Prime Coffee Shop"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full bg-black/60 rounded-xl px-4 py-3 text-sm text-white border border-white/5 focus:border-neon-blue focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-bold block">Catatan Pendukung / Keterangan Tambahan</label>
              <textarea
                placeholder="Sebutkan detail singkat referensi tema, alamat website, dominasi warna, atau kebutuhan khusus lainnya..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="w-full bg-black/60 rounded-xl px-4 py-3 text-sm text-white border border-white/5 focus:border-neon-blue focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
          </div>

          {/* Add-ons Checklist */}
          {selectedServiceType !== 'custom' && (
            <div className="space-y-3 p-4 rounded-xl bg-white/2 border border-white/5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neon-blue font-bold block">Fitur Pendukung (Add-Ons)</span>
              
              <div className="space-y-2.5">
                <label className="flex items-center gap-3.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={expressDelivery}
                    onChange={(e) => setExpressDelivery(e.target.checked)}
                    className="w-4.5 h-4.5 rounded border-white/10 text-neon-blue bg-black focus:ring-0 cursor-pointer"
                  />
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block group-hover:text-neon-blue transition-colors">Express Delivery (+Rp 100.000)</span>
                    <span className="text-[10px] text-gray-400">Pengerjaan diprioritaskan selesai dalam 1x24 jam kerja (maks).</span>
                  </div>
                </label>

                <label className="flex items-center gap-3.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={extraRevisions}
                    onChange={(e) => setExtraRevisions(e.target.checked)}
                    className="w-4.5 h-4.5 rounded border-white/10 text-neon-blue bg-black focus:ring-0 cursor-pointer"
                  />
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block group-hover:text-neon-blue transition-colors">Ekstra Revisions (+Rp 50.000)</span>
                    <span className="text-[10px] text-gray-400">Menambahkan kuota 3x revisi tambahan di luar paket reguler.</span>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Cost Summary Box */}
          {selectedServiceType !== 'custom' && (
            <div className="p-4 rounded-xl bg-black border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 font-bold block">Grand Total Investasi</span>
                <span className="text-lg font-bold text-white font-display mt-0.5 block">{activePackageName}</span>
              </div>
              <div className="text-right">
                <span className="text-xl font-extrabold text-[#00f0ff] font-display block neon-glow-text">
                  {formatRupiah(totalWithAddons)}
                </span>
                <span className="text-[10px] text-gray-500">Bayar ke DANA/ShopeePay</span>
              </div>
            </div>
          )}

          {/* Footer Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold bg-[#00f0ff] text-black text-sm shadow-[0_4px_15px_rgba(0,240,255,0.3)] hover:shadow-[0_4px_25px_rgba(0,240,255,0.6)] cursor-pointer transition-all hover:scale-102 active:scale-98 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-black" />
              Kirim Pemesanan ke WhatsApp
            </button>
            <div className="flex items-center justify-center gap-1 mt-4 text-[10px] text-gray-500 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Semua data dinegosiasikan secara privat ke WhatsApp HADIGITAL.</span>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}
