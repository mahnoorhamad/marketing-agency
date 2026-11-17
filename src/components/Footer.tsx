import React from 'react';
import { ArrowUp, Mail, MapPin, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-purple-500/20 bg-[#100D22] pt-16 pb-12 px-6 sm:px-8 z-10 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#17152F] border border-purple-500/30 p-1.5 flex items-center justify-center group-hover:border-[#38D9C5] transition-colors">
                <img
                  src="/assets/aistudio/file_000000005fd08211910a8ab4a71ebcc1_c1c3bf9a.png"
                  alt="Hawar Studio W Mark"
                  className="w-full h-full object-contain mix-blend-screen"
                />
              </div>
              <div>
                <span className="font-display font-black text-2xl uppercase tracking-wider text-white block">
                  HAWAR STUDIO
                </span>
                <span className="text-[11px] text-[#38D9C5] font-mono tracking-wider block">
                  Where Worth Grows
                </span>
              </div>
            </a>

            <p className="text-slate-300 max-w-sm text-xs leading-relaxed">
              Full-service AI-powered digital marketing agency specializing in high-velocity content, AI UGC, performance Meta ad creatives, and studio product photography.
            </p>

            <div className="pt-2 text-[11px] font-mono text-purple-300">
              Tagline: "Where Brands Come to Bloom"
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Capabilities
            </div>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-[#38D9C5] transition-colors">AI Content Creation</a></li>
              <li><a href="#services" className="hover:text-[#38D9C5] transition-colors">AI UGC & Video</a></li>
              <li><a href="#services" className="hover:text-[#38D9C5] transition-colors">Social Media Marketing</a></li>
              <li><a href="#services" className="hover:text-[#38D9C5] transition-colors">Product Photography</a></li>
              <li><a href="#services" className="hover:text-[#38D9C5] transition-colors">Meta Ad Creatives</a></li>
              <li><a href="#services" className="hover:text-[#38D9C5] transition-colors">Brand Content</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Agency
            </div>
            <ul className="space-y-2">
              <li><a href="#brand-system" className="hover:text-[#38D9C5] transition-colors">Brand Architecture</a></li>
              <li><a href="#pillars" className="hover:text-[#38D9C5] transition-colors">Why Hawar Studio</a></li>
              <li><a href="#work" className="hover:text-[#38D9C5] transition-colors">Case Studies</a></li>
              <li><a href="#process" className="hover:text-[#38D9C5] transition-colors">Client Process</a></li>
              <li><a href="#contact" className="hover:text-[#38D9C5] transition-colors">Project Estimator</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Dispatch
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#38D9C5] shrink-0" />
                <span>Cantt, Sialkot District, Punjab, Pakistan (Worldwide)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#38D9C5] shrink-0" />
                <a href="mailto:info.hawarstudio@gmail.com" className="hover:text-white transition-colors">
                  info.hawarstudio@gmail.com
                </a>
              </div>
              <div className="text-slate-300 space-y-1 pt-1">
                <a href="https://wa.me/923038662249" target="_blank" rel="noopener noreferrer" className="block hover:text-[#38D9C5] transition-colors">
                  WhatsApp: +92 303 8662249
                </a>
                <a href="https://wa.me/923038662259" target="_blank" rel="noopener noreferrer" className="block hover:text-[#38D9C5] transition-colors">
                  WhatsApp: +92 303 8662259
                </a>
              </div>
              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono text-purple-200">
                  Private Staging Build · Reveal Nov 2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Hawar Studio. All rights reserved. Where Brands Come to Bloom.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/hawarstudio.marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38D9C5] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/hawarstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38D9C5] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/hawarstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38D9C5] transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@hawarstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38D9C5] transition-colors"
            >
              TikTok
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer flex items-center gap-1 ml-4"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
