import React, { useState } from 'react';
import { ShieldCheck, X } from 'lucide-react';

const CALENDLY_LINK = 'https://calendly.com/wardakhawaja-works/30min';

interface PartnerBrand {
  id: string;
  name: string;
  category: string;
  region: string;
  role: string;
  highlight: string;
  renderLogo: () => React.ReactNode;
}

export const PARTNER_BRANDS: PartnerBrand[] = [
  {
    id: 'rayo-rise',
    name: 'Rayo Rise',
    category: 'Tracksuit Manufacturing Company',
    region: 'United Kingdom · Remote',
    role: 'Social Media Content, Reels & Video Production',
    highlight: 'Managing social media presence, apparel product showcases, Reels workflows, and audience growth for tracksuit manufacturing.',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <img
          src="/assets/aistudio/Black_Gold_and_Blue_Modern_Professional_Headshot_LinkedIn_Profile_Picture__1__8a8027bf.png"
          alt="Rayo Rise"
          className="h-10 w-10 rounded-xl object-contain bg-black shadow-xs ring-1 ring-black/10 flex-shrink-0"
        />
        <div className="flex flex-col">
          <span className="font-display font-extrabold text-sm tracking-wider text-[#17152F] uppercase leading-tight">
            RAYO RISE
          </span>
          <span className="text-[10px] text-[#5B5878] font-mono">United Kingdom · Remote</span>
        </div>
      </div>
    ),
  },
  {
    id: 'nowpdp',
    name: 'NOWPDP',
    category: 'Disability Inclusion Organization',
    region: 'Pakistan',
    role: 'Visual Direction & Awareness Collateral',
    highlight: 'Visual storytelling, event banners, and digital collateral for Pakistan’s leading disability inclusion organization.',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <img
          src="/assets/aistudio/ogimage__1__000a3a9c.jpg"
          alt="NOWPDP - A Part. Not Apart."
          className="h-10 w-10 rounded-xl object-contain bg-white shadow-xs border border-emerald-100 flex-shrink-0"
        />
        <div className="flex flex-col">
          <span className="font-serif font-black text-base tracking-tight text-[#17152F] leading-tight">
            NOWPDP
          </span>
          <span className="text-[9px] font-sans font-semibold tracking-wider text-[#00843D] uppercase">
            A Part. Not Apart.
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'tevta',
    name: 'TEVTA Punjab',
    category: 'Govt. Vocational Authority',
    region: 'Punjab, Pakistan',
    role: 'Government Collateral & Program Materials',
    highlight: 'Designed educational collateral and vocational campaign promotional materials for government initiatives.',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <img
          src="/assets/aistudio/tevta-logo-png_seeklogo-326246_29bd7817.png"
          alt="TEVTA Government of the Punjab"
          className="h-10 w-10 rounded-xl object-contain bg-white p-0.5 shadow-xs border border-emerald-100 flex-shrink-0"
        />
        <div className="flex flex-col">
          <span className="font-sans font-black text-sm tracking-tight text-[#17152F] leading-tight">
            TEVTA
          </span>
          <span className="text-[9.5px] font-sans font-semibold tracking-wider text-[#0F743E] uppercase mt-0.5">
            Govt. of the Punjab
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'tmg',
    name: 'The Maruca Group',
    category: 'Luxury Vacation Rentals & Digital Media',
    region: 'United States · Remote',
    role: 'Video Editing & Content Automation',
    highlight: 'Video editing, forward-thinking creative automations, and AI collaboration endorsed by Founder Cesar David Garcia.',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <img
          src="/assets/aistudio/the_maruca_group_logo.png"
          alt="The Maruca Group (TMG)"
          className="h-10 w-10 rounded-full object-cover flex-shrink-0 border border-amber-500/30 shadow-xs"
        />
        <div className="flex flex-col">
          <span className="font-serif font-bold text-sm tracking-wide text-[#17152F] leading-tight">
            The Maruca Group
          </span>
          <span className="text-[10px] text-[#8B5CF6] font-mono font-medium">United States · TMG</span>
        </div>
      </div>
    ),
  },
  {
    id: 'step-schools',
    name: 'STEP Schools',
    category: 'Premier Educational Network',
    region: 'Pakistan',
    role: 'Academic Visual Collateral & Campaign Design',
    highlight: 'Branded educational materials, campus collateral, campaign graphics, and institutional visual presentations.',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <img
          src="/assets/aistudio/images__1__cbe7c5d3.png"
          alt="STEP Schools"
          className="h-10 w-10 rounded-xl object-contain bg-white p-0.5 shadow-xs border border-slate-200 flex-shrink-0"
        />
        <div className="flex flex-col">
          <span className="font-sans font-bold text-sm tracking-tight text-[#17152F] leading-tight">
            STEP Schools
          </span>
          <span className="text-[9.5px] text-[#5B5878]">Educational Network</span>
        </div>
      </div>
    ),
  },
  {
    id: 'lions',
    name: 'Lions Clubs International',
    category: 'Humanitarian Service Organization',
    region: 'Sialkot Stars Lions Club',
    role: 'Volunteer Graphic Designer',
    highlight: 'Designed flexes, banners, wallpapers, monthly reports, and digital social media campaigns for community causes.',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <img
          src="/assets/aistudio/images_b0f43bce.png"
          alt="Lions Clubs International"
          className="h-10 w-10 rounded-full object-contain flex-shrink-0 shadow-xs border border-amber-200/50"
        />
        <div className="flex flex-col">
          <span className="font-display font-bold text-sm tracking-tight text-[#17152F] leading-tight">
            Lions Clubs
          </span>
          <span className="text-[10px] text-[#5B5878]">Sialkot Stars Club</span>
        </div>
      </div>
    ),
  },
];

export const ClientLogosSection: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<PartnerBrand | null>(null);

  return (
    <section className="py-12 px-4 sm:px-6 bg-white border-y border-[var(--line)]">
      <div className="wrap">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F0FF] border border-[var(--line)] text-xs font-semibold text-[var(--orchid-deep)] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--orchid)]" />
            Verified Client Engagements &amp; Collaborations
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--ink)]">
            Trusted by Brands, NGOs &amp; Institutions
          </h2>
          <p className="text-sm text-[var(--muted)] mt-2">
            Selected brands, organizations, and clients we have collaborated with on content, design, and video.
          </p>
        </div>

        {/* Continuous Smooth Marquee Track */}
        <div className="marquee-container py-3 overflow-hidden">
          <div className="marquee-track flex items-center gap-6 sm:gap-8">
            {/* Double duplicate for seamless infinite loop */}
            {[...PARTNER_BRANDS, ...PARTNER_BRANDS].map((brand, idx) => (
              <button
                key={`${brand.id}-${idx}`}
                onClick={() => setSelectedBrand(brand)}
                className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-[var(--paper)] border border-[var(--line)] hover:border-[var(--orchid)] hover:bg-[#FAF8FF] transition-all cursor-pointer shadow-xs whitespace-nowrap text-left"
                title={`Click to view verified work with ${brand.name}`}
              >
                {brand.renderLogo()}
                <div className="hidden sm:block pl-2 border-l border-[var(--line)]">
                  <span className="block text-[11px] font-semibold text-[var(--ink)] group-hover:text-[var(--orchid-deep)] transition-colors">
                    {brand.category}
                  </span>
                  <span className="block text-[9.5px] text-[var(--muted)]">
                    {brand.region}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Brand Detail Modal */}
        {selectedBrand && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="relative w-full max-w-md bg-white rounded-[24px] p-6 sm:p-7 shadow-2xl border border-[var(--line)]">
              <button
                onClick={() => setSelectedBrand(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-[var(--muted)] hover:text-[var(--ink)] transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                {selectedBrand.renderLogo()}
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <span className="eyebrow block">Scope &amp; Role</span>
                  <h4 className="text-lg font-display font-bold text-[var(--ink)]">
                    {selectedBrand.role}
                  </h4>
                </div>

                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {selectedBrand.highlight}
                </p>

                <div className="p-3 rounded-xl bg-[#FAF9F6] border border-[var(--line)] text-xs text-[var(--muted)]">
                  <span className="font-semibold text-[var(--ink)] block mb-0.5">Location / Network:</span>
                  {selectedBrand.region} &middot; {selectedBrand.category}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[var(--line)]">
                <button
                  onClick={() => setSelectedBrand(null)}
                  className="px-4 py-2 rounded-full border border-[var(--line)] text-xs font-semibold text-[var(--muted)] hover:text-[var(--ink)] cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn small"
                >
                  <span>Book a call</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
