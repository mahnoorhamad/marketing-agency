import React, { useState, useEffect } from 'react';
import { Film, Menu, X, ArrowRight } from 'lucide-react';

const CALENDLY_LINK = 'https://calendly.com/wardakhawaja-works/30min';

const MOBILE_NAV_LINKS = [
  { href: '/#clients', label: 'Clients' },
  { href: '/#services', label: 'Services' },
  { href: '/#plans', label: 'Plans' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/#founder', label: 'Founder' },
];

interface SiteHeaderProps {
  onPlayIntro?: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ onPlayIntro }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close on Escape and prevent background scrolling while drawer is open
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#131126]/95 backdrop-blur-md border-b border-white/10 transition-colors">
        <div className="wrap flex items-center justify-between gap-4 px-4 sm:px-6 py-3.5">
          {/* Brand Lockup matching Screenshot 1 */}
          <a href="/" aria-label="Hawar Studio home" className="flex items-center gap-3 group">
            <img
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl shadow-xs object-cover border border-white/10 group-hover:scale-105 transition-transform"
              alt="Hawar Studio Icon"
              src="/assets/aistudio/file_000000005fd08211910a8ab4a71ebcc1_c1c3bf9a.png"
            />
            <div className="flex flex-col text-left">
              <span className="font-display font-black text-white text-base sm:text-lg tracking-tight uppercase leading-tight group-hover:text-[#DDD4FF] transition-colors">
                HAWAR STUDIO
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#38D9C5] tracking-widest uppercase leading-none mt-0.5">
                WHERE WORTH GROWS.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-[#DDD4FF]/80">
            <a href="/#clients" className="hover:text-[#38D9C5] transition-colors">Clients</a>
            <a href="/#services" className="hover:text-[#38D9C5] transition-colors">Services</a>
            <a href="/#plans" className="hover:text-[#38D9C5] transition-colors">Plans</a>
            <a href="/#reviews" className="hover:text-[#38D9C5] transition-colors">Reviews</a>
            <a href="/blog" className="hover:text-[#38D9C5] transition-colors">Blog</a>
            <a href="/faq" className="hover:text-[#38D9C5] transition-colors">FAQ</a>
            <a href="/#founder" className="hover:text-[#38D9C5] transition-colors">Founder</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {onPlayIntro && (
              <button
                onClick={onPlayIntro}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono uppercase text-white transition-all cursor-pointer shadow-xs"
                title="Replay animated intro video"
              >
                <Film className="w-3.5 h-3.5 text-[#38D9C5]" />
                <span>Play Intro</span>
              </button>
            )}

            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow-gold inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FEE75C] hover:bg-[#FFF07C] text-[#17152F] font-display font-black text-xs uppercase tracking-wider shadow-xs"
            >
              <span>Book a call</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-xl text-white hover:text-[#38D9C5] hover:bg-white/8 transition-colors flex items-center justify-center cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            <span className="relative w-6 h-6 flex items-center justify-center">
              <Menu
                className={`w-6 h-6 absolute transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X
                className={`w-6 h-6 absolute transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Backdrop */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
        className={`lg:hidden fixed inset-0 z-[60] bg-[#0B081D]/70 backdrop-blur-xs transition-opacity duration-300 ease-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Smooth Slide-In Mobile Navigation Drawer */}
      <aside
        id="mobile-nav-drawer"
        aria-label="Mobile Navigation"
        aria-hidden={!mobileMenuOpen}
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-[70] w-[min(86vw,340px)] bg-[#131126] border-l border-[#8B5CF6]/30 shadow-[-16px_0_48px_rgba(8,5,24,0.65)] flex flex-col justify-between p-6 overflow-y-auto transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between gap-3 pb-5 mb-5 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <img
                className="w-9 h-9 rounded-lg object-cover border border-white/15"
                alt="Hawar Studio Icon"
                src="/assets/aistudio/file_000000005fd08211910a8ab4a71ebcc1_c1c3bf9a.png"
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-white text-sm tracking-tight uppercase leading-none">
                  HAWAR STUDIO
                </span>
                <span className="font-mono text-[9px] font-bold text-[#38D9C5] tracking-widest uppercase mt-1">
                  Navigation
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="min-w-[44px] min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-[#38D9C5] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Staggered Slide-In Links */}
          <nav className="flex flex-col gap-1.5">
            {MOBILE_NAV_LINKS.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  transitionDelay: mobileMenuOpen ? `${60 + idx * 35}ms` : '0ms',
                }}
                className={`min-h-[44px] px-3.5 py-2.5 rounded-xl flex items-center justify-between text-sm font-mono uppercase tracking-wider text-[#DDD4FF] hover:text-white hover:bg-white/8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#38D9C5]/75 shrink-0" />
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Drawer Actions */}
        <div
          style={{ transitionDelay: mobileMenuOpen ? '260ms' : '0ms' }}
          className={`pt-5 mt-6 border-t border-white/10 flex flex-col gap-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {onPlayIntro && (
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onPlayIntro();
              }}
              className="min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono uppercase text-white transition-colors cursor-pointer"
            >
              <Film className="w-4 h-4 text-[#38D9C5]" />
              <span>Play Intro</span>
            </button>
          )}
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-glow-gold min-h-[48px] flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#FEE75C] text-[#17152F] font-display font-black text-xs uppercase tracking-wider shadow-xs"
          >
            <span>Book a call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </aside>
    </>
  );
};
