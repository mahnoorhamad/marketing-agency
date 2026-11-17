import React from 'react';
import { Mail, MapPin } from 'lucide-react';

interface SiteFooterProps {
  onPlayIntro?: () => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ onPlayIntro }) => {
  return (
    <footer className="wrap py-10 px-4 sm:px-6 flex flex-col gap-6 text-sm text-[var(--muted)] border-t border-[var(--line)]">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <div>
            <span className="font-semibold text-[var(--ink)]">Hawar Studio</span> &middot; Where Worth Grows.
          </div>
          <span aria-hidden="true" className="text-[var(--line)] hidden sm:inline">|</span>
          <span className="inline-flex items-center gap-1 text-xs text-[var(--muted)]">
            <MapPin className="w-3.5 h-3.5 text-[var(--orchid-deep)] shrink-0" />
            <span>Cantt, Sialkot District, Punjab, Pakistan</span>
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs">
          {onPlayIntro && (
            <button
              onClick={onPlayIntro}
              className="hover:text-[var(--ink)] cursor-pointer transition-colors"
            >
              Replay Intro
            </button>
          )}
          <a href="/#clients" className="hover:text-[var(--ink)]">Clients</a>
          <a href="/#services" className="hover:text-[var(--ink)]">Services</a>
          <a href="/#plans" className="hover:text-[var(--ink)]">Plans</a>
          <a href="/#reviews" className="hover:text-[var(--ink)]">Reviews</a>
          <a href="/blog" className="hover:text-[var(--ink)]">Blog</a>
          <a href="/faq" className="hover:text-[var(--ink)]">FAQ</a>
          <a href="/#founder" className="hover:text-[var(--ink)]">Founder</a>
        </div>
      </div>

      {/* Contact Channels & Socials */}
      <div className="pt-5 border-t border-[var(--line)] flex flex-wrap gap-4 justify-between items-center text-xs">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="mailto:info.hawarstudio@gmail.com"
            className="inline-flex items-center gap-1.5 text-[var(--orchid-deep)] font-medium hover:underline"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>info.hawarstudio@gmail.com</span>
          </a>
          <span aria-hidden="true" className="text-[var(--line)]">|</span>
          <a
            href="https://wa.me/923038662249"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--ink)] hover:text-[#0E7A5A] font-medium transition-colors"
          >
            <img src="/assets/aistudio/image_bf98a500.png" alt="WhatsApp" className="w-4 h-4 rounded-[3px] object-cover shrink-0" />
            <span>+92 303 8662249</span>
          </a>
          <a
            href="https://wa.me/923038662259"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--ink)] hover:text-[#0E7A5A] font-medium transition-colors"
          >
            <img src="/assets/aistudio/image_bf98a500.png" alt="WhatsApp" className="w-4 h-4 rounded-[3px] object-cover shrink-0" />
            <span>+92 303 8662259</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://www.instagram.com/hawarstudio.marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--ink)] hover:text-[var(--orchid-deep)] font-medium transition-colors"
            aria-label="Hawar Studio on Instagram"
          >
            <img src="/assets/aistudio/instagram-icon.png" alt="Instagram" className="w-4 h-4 rounded-[3px] object-cover shrink-0" />
            <span>@hawarstudio.marketing</span>
          </a>
          <a
            href="https://www.linkedin.com/company/hawarstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--ink)] hover:text-[var(--orchid-deep)] font-medium transition-colors"
            aria-label="Hawar Studio on LinkedIn"
          >
            <img src="/assets/aistudio/image_f6fedbe9.png" alt="LinkedIn" className="w-4 h-4 rounded-[3px] object-cover shrink-0" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.facebook.com/hawarstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--ink)] hover:text-[var(--orchid-deep)] font-medium transition-colors"
            aria-label="Hawar Studio on Facebook"
          >
            <img src="/assets/aistudio/image_6b62e2d5.png" alt="Facebook" className="w-4 h-4 rounded-[3px] object-cover shrink-0" />
            <span>Facebook</span>
          </a>
          <a
            href="https://www.tiktok.com/@hawarstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--ink)] hover:text-[var(--orchid-deep)] font-medium transition-colors"
            aria-label="Hawar Studio on TikTok"
          >
            <img src="/assets/aistudio/tiktok-icon.png" alt="TikTok" className="w-4 h-4 rounded-[3px] bg-white border border-[var(--line)] p-[1px] object-contain shrink-0" />
            <span>TikTok</span>
          </a>
          <span className="text-[var(--muted)]">
            &copy; 2026 Hawar Studio. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
