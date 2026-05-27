import { Sparkles, Phone, Mail, MapPin, Instagram, Youtube, Twitter, Laptop, Video, Award } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 relative overflow-hidden pt-16 pb-8">
      {/* Background Subtle Neon Grid */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/5">
          
          {/* Col 1: Bio Branding (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onScrollToSection('home')}>
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-black border border-neon-blue/30 shadow-[0_0_10px_rgba(0,240,255,0.05)]">
                <Sparkles className="w-4 h-4 text-neon-blue" />
              </div>
              <span className="text-lg font-bold tracking-wider text-white font-display">
                HA<span className="text-neon-blue neon-glow-text">DIGITAL</span>
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              HADIGITAL — Digital Solutions & Innovation adalah agensi teknologi modern yang mendedikasikan pengerjaan website performa tinggi dan video animasi sinematik realistis untuk kesuksesan pemasaran digital Anda.
            </p>

            {/* Social media icons with neon micro effects */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Instagram, href: 'https://instagram.com' },
                { icon: Youtube, href: 'https://youtube.com' },
                { icon: Twitter, href: 'https://twitter.com' }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#00f0ff]/10 text-gray-400 hover:text-neon-blue border border-white/10 hover:border-neon-blue/30 flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Services List (3.5 Cols) */}
          <div className="md:col-span-3.5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] font-mono">
              Layanan Kami
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onScrollToSection('website')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Laptop className="w-3.5 h-3.5 text-neon-blue/70" />
                  Jasa Pembuatan Website
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('video')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Video className="w-3.5 h-3.5 text-neon-blue/70" />
                  Video Animasi Realistis
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Award className="w-3.5 h-3.5 text-neon-blue/70" />
                  Branding Digital & Desain
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details (3.5 Cols) */}
          <div className="md:col-span-3.5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Hubungi Kami
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-neon-blue stroke-[2]" />
                <a href="tel:085716551653" className="hover:text-white transition-colors">
                  085716551653
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00f0ff] stroke-[2]" />
                <a href="mailto:info@hadigital.id" className="hover:text-white transition-colors">
                  info@hadigital.id
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-neon-blue stroke-[2] shrink-0 mt-0.5" />
                <span>Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copywrite Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-500 font-mono text-center sm:text-left">
          <span>
            &copy; {currentYear} <strong>HADIGITAL INDONESIA</strong>. All Rights Reserved.
          </span>
          <div className="flex items-center gap-4">
            <span className="text-[#00f0ff] neon-glow-text">DIGITAL SOLUTIONS & INNOVATION</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
