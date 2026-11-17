import React from 'react';
import { MapPin } from 'lucide-react';

const CALENDLY_LINK = 'https://calendly.com/wardakhawaja-works/30min';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FAF9F6] border-t border-[var(--line)]">
      <div className="wrap">
        <div className="rounded-[24px] bg-white border border-[var(--line)] overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Founder Editorial Portrait */}
            <div className="lg:col-span-5 relative min-h-[460px] lg:min-h-full bg-gradient-to-b from-[#E7E5EF] via-[#DDD9EC] to-[#CFCAE5] flex items-center justify-center overflow-hidden">
              <img
                src="/assets/aistudio/founder-warda.jpg"
                alt="Warda Khawaja - Founder & Creative Director, Hawar Studio"
                className="w-full h-full object-cover object-top select-none"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[var(--line)] flex items-center justify-between gap-2 text-xs shadow-md">
                <div>
                  <span className="font-bold text-[var(--ink)] block text-sm">Warda Khawaja</span>
                  <span className="text-[11px] text-[var(--muted)]">Growth Strategist &middot; Founder &amp; Creative Director</span>
                </div>
                <span className="text-[var(--orchid-deep)] font-semibold flex items-center gap-1 bg-[#F3F0FF] px-2.5 py-1 rounded-full text-[11px] shrink-0">
                  <MapPin className="w-3 h-3 shrink-0" /> Cantt, Sialkot
                </span>
              </div>
            </div>

            {/* Founder Statement & Bio */}
            <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div className="space-y-5">
                <p className="eyebrow">Founder &amp; Creative Leadership</p>

                <h3 className="text-2xl sm:text-4xl font-display font-bold text-[var(--ink)] leading-tight">
                  &ldquo;We turn brand stories into content that{' '}
                  <span className="text-[var(--orchid-deep)]">connects, converts &amp; drives growth.&rdquo;</span>
                </h3>

                <div className="space-y-3.5 text-sm text-[var(--muted)] leading-relaxed">
                  <p>
                    I&apos;m <strong>Warda Khawaja</strong>, a Social Media Growth Strategist, Content Creator, and Founder of <strong>HAWAR STUDIO</strong>—a social media and AI content studio based in Pakistan working with clients locally and internationally. With <strong>6+ years of experience</strong> and <strong>1,000+ creative projects</strong>, I help D2C brands, e-commerce stores, Amazon &amp; Shopify sellers, modest fashion labels, UK businesses, and educational institutions build visibility and earn trust.
                  </p>
                  <p>
                    From scaling a school&apos;s Facebook page organically from <strong>105 to 10K followers in 6 months</strong> (bringing in <strong>100+ admissions</strong>) to transforming ordinary mobile-phone product photos into studio-grade commercial visuals and virtual model shoots, my edge blends storytelling with modern AI workflows. <strong>Beyond my individual work, HAWAR STUDIO operates as a full-scope creative and marketing company</strong>—delivering end-to-end social media management, Reels &amp; short-form video, AI UGC commercials, Meta Ads &amp; ad design, graphic &amp; print design, and consulting for brands worldwide.
                  </p>
                </div>

                {/* Proven Track Record Metrics */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <div className="p-3 rounded-xl bg-[#FAF9F6] border border-[var(--line)]">
                    <span className="block font-display font-bold text-base sm:text-lg text-[var(--ink)]">6+ Years</span>
                    <span className="block text-[11px] text-[var(--muted)] leading-tight mt-0.5">Creative &amp; Strategy Experience</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF9F6] border border-[var(--line)]">
                    <span className="block font-display font-bold text-base sm:text-lg text-[var(--ink)]">1,000+</span>
                    <span className="block text-[11px] text-[var(--muted)] leading-tight mt-0.5">Creative Projects Delivered</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F4F1FC] border border-[#DDD4FF]">
                    <span className="block font-display font-bold text-base sm:text-lg text-[var(--orchid-deep)]">105 &rarr; 10K</span>
                    <span className="block text-[11px] text-[var(--muted)] leading-tight mt-0.5">Organic Growth &middot; 100+ Admissions</span>
                  </div>
                </div>

                {/* Verified Credential Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-full bg-[#FAF9F6] border border-[var(--line)] text-[11px] font-medium text-[var(--ink)]">
                    🇬🇧 Rayo Rise (UK Tracksuit Manufacturer)
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#FAF9F6] border border-[var(--line)] text-[11px] font-medium text-[var(--ink)]">
                    🇺🇸 The Maruca Group (USA)
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#FAF9F6] border border-[var(--line)] text-[11px] font-medium text-[var(--ink)]">
                    🇵🇰 NOWPDP &amp; TEVTA Punjab
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#FAF9F6] border border-[var(--line)] text-[11px] font-medium text-[var(--ink)]">
                    🎓 STEP Schools
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#FAF9F6] border border-[var(--line)] text-[11px] font-medium text-[var(--ink)]">
                    🦁 Lions Clubs International
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#FAF9F6] border border-[var(--line)] text-[11px] font-medium text-[var(--ink)]">
                    🛍️ D2C, Amazon &amp; Shopify Brands
                  </span>
                </div>

                {/* Details */}
                <div className="pt-4 border-t border-[var(--line)] flex flex-wrap items-center gap-5 text-xs text-[var(--muted)]">
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-slate-400">Founder &amp; Growth Strategist</span>
                    <strong className="text-[var(--ink)] text-sm">Warda Khawaja</strong>
                  </div>
                  <div className="hidden sm:block w-px h-7 bg-[var(--line)]" />
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-slate-400">Company Address</span>
                    <span className="text-[var(--ink)]">Cantt, Sialkot District, Punjab, Pakistan &middot; Worldwide</span>
                  </div>
                  <div className="hidden sm:block w-px h-7 bg-[var(--line)]" />
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-slate-400">Direct Inquiries</span>
                    <a href="mailto:info.hawarstudio@gmail.com" className="text-[var(--orchid-deep)] font-mono hover:underline">
                      info.hawarstudio@gmail.com
                    </a>
                  </div>
                  <div className="hidden sm:block w-px h-7 bg-[var(--line)]" />
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-slate-400">WhatsApp</span>
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[var(--ink)]">
                      <a href="https://wa.me/923038662249" target="_blank" rel="noopener noreferrer" className="hover:text-[#0E7A5A] hover:underline">
                        +92 303 8662249
                      </a>
                      <span aria-hidden="true">&middot;</span>
                      <a href="https://wa.me/923038662259" target="_blank" rel="noopener noreferrer" className="hover:text-[#0E7A5A] hover:underline">
                        +92 303 8662259
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex flex-wrap items-center gap-2.5">
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <span>Book a call</span>
                </a>
                <a
                  href="https://wa.me/923038662249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-[var(--line)] bg-[#FAF9F6] hover:border-[#0E7A5A] text-xs font-semibold text-[var(--ink)] transition-colors"
                >
                  <img src="/assets/aistudio/image_bf98a500.png" alt="WhatsApp" className="w-4 h-4 rounded-[3px] object-cover shrink-0" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/hawarstudio.marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-[var(--line)] bg-[#FAF9F6] hover:border-[var(--orchid)] text-xs font-semibold text-[var(--ink)] transition-colors"
                  aria-label="Hawar Studio Instagram"
                >
                  <img src="/assets/aistudio/instagram-icon.png" alt="Instagram" className="w-4 h-4 rounded-[3px] object-cover shrink-0" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/hawarstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-[var(--line)] bg-[#FAF9F6] hover:border-[var(--orchid)] text-xs font-semibold text-[var(--ink)] transition-colors"
                  aria-label="Hawar Studio LinkedIn"
                >
                  <img src="/assets/aistudio/image_f6fedbe9.png" alt="LinkedIn" className="w-4 h-4 rounded-[3px] object-cover shrink-0" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.facebook.com/hawarstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-[var(--line)] bg-[#FAF9F6] hover:border-[var(--orchid)] text-xs font-semibold text-[var(--ink)] transition-colors"
                  aria-label="Hawar Studio Facebook"
                >
                  <img src="/assets/aistudio/image_6b62e2d5.png" alt="Facebook" className="w-4 h-4 rounded-[3px] object-cover shrink-0" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.tiktok.com/@hawarstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-[var(--line)] bg-[#FAF9F6] hover:border-[var(--orchid)] text-xs font-semibold text-[var(--ink)] transition-colors"
                  aria-label="Hawar Studio TikTok"
                >
                  <img src="/assets/aistudio/tiktok-icon.png" alt="TikTok" className="w-4 h-4 rounded-[3px] bg-white border border-[var(--line)] p-[1px] object-contain shrink-0" />
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
