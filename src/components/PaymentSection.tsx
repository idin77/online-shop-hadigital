import { useState } from 'react';
import { CreditCard, Copy, Check, MessageSquare, ShieldCheck, PhoneCall, QrCode } from 'lucide-react';

export default function PaymentSection() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'info' | 'qr'>('info');

  const PAYMENT_NUMBER = '085716551653';

  const handleCopy = () => {
    navigator.clipboard.writeText(PAYMENT_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openWhatsAppAdmin = () => {
    const text = encodeURIComponent("Halo HADIGITAL, saya ingin konfirmasi pembayaran untuk pesanan digital saya.");
    window.open(`https://wa.me/6285716551653?text=${text}`, '_blank');
  };

  return (
    <section id="payment" className="py-24 relative overflow-hidden bg-gray-950">
      {/* Decorative Orbs */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Container */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 mb-4">
            <CreditCard className="w-4 h-4 text-neon-blue" />
            <span className="text-xs uppercase font-mono tracking-widest text-[#00f0ff] font-bold">
              Metode Pembayaran Digital
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Transaksi <span className="text-neon-blue neon-glow-text">Mudah & Aman</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Kami mendukung transfer dana melalui dompet digital terpercaya untuk memudahkan peluncuran projek impian Anda.
          </p>
        </div>

        {/* Payment Center Panel */}
        <div className="max-w-3xl mx-auto rounded-3xl glass-card border border-white/5 overflow-hidden shadow-2xl shadow-black/80">
          
          {/* Header tabs toggle */}
          <div className="flex border-b border-white/5 bg-white/2">
            <button
              onClick={() => setActiveTab('info')}
              className={`flex-1 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'info' 
                  ? 'border-b-2 border-neon-blue text-neon-blue bg-white/2' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Transfer Manual
            </button>
            <button
              onClick={() => setActiveTab('qr')}
              className={`flex-1 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'qr' 
                  ? 'border-b-2 border-neon-blue text-neon-blue bg-white/2' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              QR Code Scanner
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'info' ? (
              <div className="space-y-8">
                {/* Brand Logos */}
                <div className="grid grid-cols-2 gap-4">
                  {/* DANA Card */}
                  <div className="p-5 rounded-2xl bg-white/2 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#00f0ff]/30 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-sky-500"></div>
                    <span className="text-lg font-extrabold text-sky-400 tracking-wider font-display">
                      DANA
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono mt-1">E-WALLET VERIFIED</span>
                  </div>

                  {/* ShopeePay Card */}
                  <div className="p-5 rounded-2xl bg-white/2 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#00f0ff]/30 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-orange-500"></div>
                    <span className="text-lg font-extrabold text-orange-500 tracking-wider font-display">
                      ShopeePay
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono mt-1">E-WALLET VERIFIED</span>
                  </div>
                </div>

                {/* Account Details Box */}
                <div className="p-6 rounded-2xl bg-black border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 font-bold">Nomor E-Wallet (DANA / ShopeePay)</span>
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-neon-blue mt-1 tracking-wider">
                      {PAYMENT_NUMBER}
                    </div>
                    <span className="text-xs text-gray-400 mt-1 block">Atas Nama: <strong className="text-white">HADIGITAL INDONESIA</strong></span>
                  </div>
                  
                  <button
                    onClick={handleCopy}
                    className={`px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      copied 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-white/5 text-white hover:bg-neon-blue hover:text-black border border-white/10 hover:border-transparent'
                    }`}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Tersalin' : 'Salin Nomor'}
                  </button>
                </div>

                {/* Instructions Lists */}
                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider block">Panduan Transfer Dana:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-white/2 border border-white/5">
                      <span className="text-xs font-extrabold text-[#00f0ff] font-mono">STEP 01</span>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">Salin nomor handphone tujuan di atas, lalu buka aplikasi dompet digital Anda.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/2 border border-white/5">
                      <span className="text-xs font-extrabold text-[#00f0ff] font-mono">STEP 02</span>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">Transfer nominal sesuai dengan paket jasa website atau video yang Anda pilih.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/2 border border-white/5">
                      <span className="text-xs font-extrabold text-[#00f0ff] font-mono">STEP 03</span>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">Kirimkan bukti capture pembayaran ke admin via WhatsApp untuk verifikasi.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-6 text-center">
                {/* QR Code Graphic Representation */}
                <div className="relative p-4 rounded-2xl bg-white border-4 border-neon-blue/30 shadow-[0_0_20px_rgba(0,240,255,0.2)] mb-6 animate-float">
                  <div className="w-48 h-48 bg-gray-100 flex items-center justify-center relative rounded-lg overflow-hidden border border-gray-200">
                    {/* Simulated elegant vector code */}
                    <QrCode className="w-40 h-40 text-gray-900" />
                    {/* Tiny logo badge in center of QR */}
                    <div className="absolute inset-0 m-auto w-10 h-10 bg-black rounded-xl border border-neon-blue flex items-center justify-center">
                      <span className="text-[10px] font-extrabold font-display text-white">HA</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white font-display">Pindai QR Code untuk DANA & ShopeePay</h3>
                <p className="text-xs text-gray-400 max-w-sm mt-2 leading-relaxed">
                  Buka aplikasi e-wallet Anda, pilih menu Scan / Bayar, lalu arahkan kamera ke layar ini guna melakukan transaksi instan.
                </p>
              </div>
            )}

            {/* Action buttons footer section */}
            <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4">
              <button
                id="payment-cta-pay"
                onClick={openWhatsAppAdmin}
                className="w-full sm:flex-1 py-4 rounded-xl font-bold uppercase tracking-wider text-sm bg-neon-blue text-black shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:scale-103 active:scale-97 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-black" />
                Bayar Sekarang
              </button>

              <button
                id="payment-cta-contact"
                onClick={openWhatsAppAdmin}
                className="w-full sm:flex-1 py-4 rounded-xl font-bold uppercase tracking-wider text-sm bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-neon-blue/30 hover:scale-103 active:scale-97 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                Hubungi Admin
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
