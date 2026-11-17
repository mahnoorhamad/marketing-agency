import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#17152F]/90 backdrop-blur-md border-b border-purple-500/15 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single clean element) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#17152F] to-[#251E49] border border-purple-500/30 flex items-center justify-center p-1 overflow-hidden shadow-inner group-hover:border-[#38D9C5] transition-colors">
              <img
                src="/assets/aistudio/file_000000005fd08211910a8ab4a71ebcc1_c1c3bf9a.png"
                alt="W Logo"
                className="w-full h-full object-contain mix-blend-screen"
              />
            </div>
            <span className="font-display uppercase tracking-wider text-2xl font-black bg-gradient-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent">
              HAWAR STUDIO
            </span>
          </a>

          {/* Zone 2: 4–5 single-line clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a
              href="#services"
              className="hover:text-[#38D9C5] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#38D9C5]"
            >
              Services
            </a>
            <a
              href="#brand-system"
              className="hover:text-[#38D9C5] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#38D9C5]"
            >
              Brand Identity
            </a>
            <a
              href="#pillars"
              className="hover:text-[#38D9C5] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#38D9C5]"
            >
              Our Approach
            </a>
            <a
              href="#work"
              className="hover:text-[#38D9C5] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#38D9C5]"
            >
              Selected Work
            </a>
            <a
              href="#process"
              className="hover:text-[#38D9C5] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#38D9C5]"
            >
              Client Process
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#17152F] bg-[#F4E84A] rounded-lg hover:bg-yellow-300 transition-all shadow-[0_0_20px_rgba(244,232,74,0.3)] hover:shadow-[0_0_25px_rgba(244,232,74,0.5)] active:scale-95 whitespace-nowrap shrink-0 uppercase tracking-wider cursor-pointer"
            >
              Start a Project
              <ArrowUpRight className="w-3.5 h-3.5 text-[#17152F]" />
            </button>

            {/* Mobile hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg border border-purple-500/20"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 mt-3 border-t border-purple-500/20 space-y-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#38D9C5] hover:bg-white/5 rounded-lg"
            >
              Services
            </a>
            <a
              href="#brand-system"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#38D9C5] hover:bg-white/5 rounded-lg"
            >
              Brand Identity
            </a>
            <a
              href="#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#38D9C5] hover:bg-white/5 rounded-lg"
            >
              Our Approach
            </a>
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#38D9C5] hover:bg-white/5 rounded-lg"
            >
              Selected Work
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#38D9C5] hover:bg-white/5 rounded-lg"
            >
              Client Process
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-[#17152F] bg-[#F4E84A] rounded-lg uppercase tracking-wider"
            >
              Start a Project
              <ArrowUpRight className="w-3.5 h-3.5 text-[#17152F]" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
