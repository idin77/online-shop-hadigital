import { useState } from 'react';
import { faqItems } from '../data';
import { HelpCircle, ChevronRight, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openWhatsAppAdmin = () => {
    const text = encodeURIComponent("Halo HADIGITAL, saya ingin berkonsultasi mengenai layanan Anda.");
    window.open(`https://wa.me/6285716551653?text=${text}`, '_blank');
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-black">
      {/* Decorative Orb */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-neon-blue/4 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Container */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 mb-4">
            <HelpCircle className="w-4 h-4 text-neon-blue" />
            <span className="text-xs uppercase font-mono tracking-widest text-[#00f0ff] font-bold">
              Pertanyaan Umum (FAQ)
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Tanya Jawab <span className="text-neon-blue neon-glow-text">Layanan Kami</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Temukan jawaban cepat seputar durasi pengerjaan, skema pembayaran, sistem revisi, dan proses peluncuran produk digital Anda.
          </p>
        </div>

        {/* Collapsible Accordion Group list */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl glass-card border border-white/5 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white font-display pr-4 group-hover:text-neon-blue transition-colors">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white/5 text-gray-400 transition-all duration-300 ${
                    isOpen ? 'rotate-90 text-[#00f0ff] bg-neon-blue/10' : ''
                  }`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated expand-collapse content window */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100 border-t border-white/5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 text-xs sm:text-sm text-gray-400 leading-relaxed bg-black/40">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Help Card Contact CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-neon-blue/5 to-purple-500/5 border border-neon-blue/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider">Punya Pertanyaan Lain?</h4>
            <p className="text-xs text-gray-400 mt-1">Tim support kami siap melayani dan memberikan konsultasi solusi digital gratis khusus bisnis Anda.</p>
          </div>
          <button
            onClick={openWhatsAppAdmin}
            className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-neon-blue text-black hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-black" />
            Tanya Admin Sekarang
          </button>
        </div>

      </div>
    </section>
  );
}
