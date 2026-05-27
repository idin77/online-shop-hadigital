import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send, Laptop, Video, CreditCard } from 'lucide-react';

interface HeaderProps {
  onOpenOrderModal: (type: 'web' | 'video' | 'custom', initialProduct?: any) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Header({ onOpenOrderModal, onScrollToSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home', icon: Sparkles },
    { name: 'Jasa Website', href: 'website', icon: Laptop },
    { name: 'Video Animasi', href: 'video', icon: Video },
    { name: 'Hasil Kerja', href: 'portfolio', icon: Sparkles },
    { name: 'Tanya Jawab', href: 'faq', icon: Sparkles },
    { name: 'Pembayaran', href: 'payment', icon: CreditCard },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-header py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-black border border-neon-blue/30 group-hover:border-neon-blue transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.05)]">
              <Sparkles className="w-5 h-5 text-neon-blue animate-pulse" />
              <div className="absolute inset-0 rounded-lg bg-neon-blue/10 bluropacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider text-white font-display flex items-center gap-1">
                HA<span className="text-neon-blue neon-glow-text">DIGITAL</span>
              </span>
              <span className="hidden sm:block text-[9px] -mt-1 tracking-widest text-gray-500 font-mono font-bold">
                DIGITAL SOLUTIONS & INNOVATION
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-gray-400 hover:text-neon-blue text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                </button>
              );
            })}
          </nav>

          {/* CTA Header Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              id="header-cta-order"
              onClick={() => onOpenOrderModal('custom')}
              className="px-5 py-2 rounded-lg text-sm font-semibold text-black bg-neon-blue shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
            >
              Mulai Proyek
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenOrderModal('custom')}
              className="sm:hidden px-3 py-1.5 rounded-md text-xs font-semibold text-black bg-neon-blue shadow-[0_0_10px_rgba(0,240,255,0.3)] hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] text-center transition-all cursor-pointer"
            >
              Mulai
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-y-0 right-0 w-full sm:max-w-xs z-50 bg-gray-950/98 backdrop-blur-xl border-l border-white/10 shadow-2xl p-6 transition-all duration-300">
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-bold text-white font-display">
              HA<span className="text-neon-blue">DIGITAL</span>
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 focus:outline-none cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              return (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="flex items-center gap-3 text-left py-2.5 px-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-neon-blue/50"></span>
                  <span className="text-base font-medium">{link.name}</span>
                </button>
              );
            })}

            <div className="h-[1px] bg-white/10 my-4"></div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenOrderModal('custom');
              }}
              className="w-full py-3 rounded-xl font-bold bg-neon-blue text-black text-center shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] transition-all cursor-pointer"
            >
              Mulai Proyek Baru
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
