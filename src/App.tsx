import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WebsiteSection from './components/WebsiteSection';
import VideoSection from './components/VideoSection';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import PaymentSection from './components/PaymentSection';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function App() {
  // Modal State Manager
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'web' | 'video' | 'custom'>('custom');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleOpenOrderModal = (type: 'web' | 'video' | 'custom', initialProduct?: any) => {
    setModalType(type);
    setSelectedProduct(initialProduct || null);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedProduct(null);
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppFloatingClick = () => {
    const text = encodeURIComponent("Halo HADIGITAL, saya ingin memesan jasa digital.");
    window.open(`https://wa.me/6285716551653?text=${text}`, '_blank');
  };

  return (
    <div id="applet-root" className="min-h-screen relative text-gray-100 bg-[#030712] selection:bg-neon-blue selection:text-black">
      
      {/* Decorative Global Ambient Lights */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent z-40"></div>

      {/* Persistent Navigation Header */}
      <Header 
        onOpenOrderModal={handleOpenOrderModal} 
        onScrollToSection={handleScrollToSection} 
      />

      {/* Main Container contents */}
      <main>
        {/* HERO SECTION */}
        <Hero 
          onOpenOrderModal={handleOpenOrderModal} 
          onScrollToSection={handleScrollToSection} 
        />

        {/* SECTION PRODUK WEBSITE */}
        <WebsiteSection 
          onOpenOrderModal={handleOpenOrderModal} 
        />

        {/* SECTION VIDEO ANIMASI REALISTIS */}
        <VideoSection 
          onOpenOrderModal={handleOpenOrderModal} 
        />

        {/* OUR PORTFOLIO TIMELINE */}
        <Portfolio />

        {/* METODE PEMBAYARAN SECTION */}
        <PaymentSection />

        {/* FAQ COLLAPSIBLE WINDOWS */}
        <FAQ />
      </main>

      {/* FOOTER WIDGET SECTION */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* WHATSAPP FLOATING BUTTON */}
      <button
        id="whatsapp-floating-button"
        onClick={handleWhatsAppFloatingClick}
        title="Hubungi Kami Sekarang di WhatsApp"
        aria-label="Contact HADIGITAL via WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
      >
        <MessageSquare className="w-6 h-6 stroke-[2.5]" />
        
        {/* Animated Ripple ring effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/20 blur-[3px] animate-ping pointer-events-none"></span>
        
        {/* Pulse micro toast indicator helper balloon */}
        <div className="absolute right-16 scale-0 group-hover:scale-100 origin-right transition-all duration-300 bg-gray-950 border border-white/10 text-white font-semibold font-mono text-[10px] tracking-wider py-1.5 px-3 rounded-lg flex items-center gap-1.5 whitespace-nowrap shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-neon-blue" />
          Tanya Layanan HADIGITAL
        </div>
      </button>

      {/* MODAL ORDER DIALOG SHEETS */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        type={modalType}
        initialProduct={selectedProduct}
      />

    </div>
  );
}
