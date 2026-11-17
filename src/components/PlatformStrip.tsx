import React from 'react';

export const PlatformStrip: React.FC = () => {
  return (
    <div className="py-10 px-4 sm:px-6 border-y border-[var(--line)] bg-white/70 backdrop-blur-sm">
      <div className="wrap">
        <p className="text-center text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-8">
          Campaigns Engineered &amp; Scaled Across Major Commercial Channels
        </p>

        {/* Clean, spacious row honoring official brand guidelines (no recoloring, ample clear space) */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-16">
          {/* Meta */}
          <div className="flex items-center gap-2 group" title="Meta Ads (Facebook & Instagram)">
            <svg className="h-6 w-auto" viewBox="0 0 100 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.86 0C10.74 0 6.64 3.4 5.37 7.74C4.1 3.4 0 0 0 0v21h4.4V8.58C4.4 5.56 6.84 3.12 9.86 3.12c3.02 0 5.46 2.44 5.46 5.46V21h4.4V8.58C19.72 5.56 22.16 3.12 25.18 3.12c3.02 0 5.46 2.44 5.46 5.46V21h4.4V8.58C35.04 3.84 31.2 0 26.46 0c-4.48 0-8.24 2.92-9.74 6.94C15.22 2.92 11.46 0 15.86 0z" fill="#0081FB" />
              <path d="M50.4 15.22c-3.1 0-5.1-2.18-5.1-5.32 0-3.12 2-5.3 5.1-5.3 3.1 0 5.08 2.18 5.08 5.3 0 3.14-1.98 5.32-5.08 5.32zm0-14.3c-5.74 0-9.44 4.02-9.44 9 0 4.96 3.7 8.98 9.44 8.98 5.72 0 9.42-4.02 9.42-8.98 0-4.98-3.7-9-9.42-9z" fill="#1C2B33"/>
              <text x="64" y="16" fill="#1C2B33" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="16">Meta</text>
            </svg>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-2" title="Instagram Advertising">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="ig-grad" cx="20%" cy="100%" r="130%">
                  <stop offset="0%" stopColor="#fdf497"/>
                  <stop offset="5%" stopColor="#fdf497"/>
                  <stop offset="45%" stopColor="#fd5949"/>
                  <stop offset="60%" stopColor="#d6249f"/>
                  <stop offset="90%" stopColor="#285AEB"/>
                </radialGradient>
              </defs>
              <rect width="24" height="24" rx="6" fill="url(#ig-grad)"/>
              <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zM17.8 6.2a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" fill="#fff"/>
            </svg>
            <span className="font-semibold text-sm text-[#262626]">Instagram</span>
          </div>

          {/* Facebook */}
          <div className="flex items-center gap-2" title="Facebook App & Ads">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#1877F2"/>
              <path d="M15.5 12h-2.5v8h-3v-8H8V9.5h2V7.8c0-2.3 1.4-3.6 3.5-3.6 1 0 1.9.1 2.1.1v2.4h-1.4c-1.1 0-1.4.5-1.4 1.3V9.5h2.8l-.5 2.5z" fill="#fff"/>
            </svg>
            <span className="font-semibold text-sm text-[#1877F2]">Facebook</span>
          </div>

          {/* YouTube */}
          <div className="flex items-center gap-2" title="YouTube Shorts & Video Ads">
            <svg className="h-5 w-auto" viewBox="0 0 90 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.97 3.12A3.5 3.5 0 0025.5.65C23.32.07 14 .07 14 .07s-9.32 0-11.5.58A3.5 3.5 0 00.03 3.12C-.55 5.3-.55 10-.55 10s0 4.7.58 6.88a3.5 3.5 0 002.47 2.47c2.18.58 11.5.58 11.5.58s9.32 0 11.5-.58a3.5 3.5 0 002.47-2.47c.58-2.18.58-6.88.58-6.88s0-4.7-.58-6.88z" fill="#FF0000"/>
              <path d="M11.2 14.25L18.6 10l-7.4-4.25v8.5z" fill="#fff"/>
              <text x="32" y="15" fill="#282828" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="14">YouTube</text>
            </svg>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-1.5" title="LinkedIn Professional & B2B">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="#0A66C2"/>
              <path d="M5.5 8.5h3v10h-3v-10zM7 4a1.75 1.75 0 110 3.5A1.75 1.75 0 017 4zM11 8.5h2.8v1.4h.1c.4-.8 1.4-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.8v5.4h-3v-4.8c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v4.9h-3.3v-10z" fill="#fff"/>
            </svg>
            <span className="font-semibold text-sm text-[#0A66C2]">LinkedIn</span>
          </div>

          {/* Pinterest */}
          <div className="flex items-center gap-1.5" title="Pinterest Shopping & Visual Ads">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#E60023"/>
              <path d="M12 4a8 8 0 00-2.8 15.5c-.1-.7-.1-1.8.1-2.5l1.3-5.3s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.8-2.3 3.8-5.6 0-2.9-2.1-5-5.1-5-3.5 0-5.6 2.6-5.6 5.4 0 1.1.4 2.2 1 2.8.1.1.1.2.1.3l-.4 1.5c0 .2-.2.2-.3.1-1.7-.8-2.8-3.2-2.8-5.2 0-4.2 3.1-8.1 8.9-8.1 4.7 0 8.3 3.4 8.3 7.8 0 4.7-2.9 8.4-7 8.4-1.4 0-2.7-.7-3.1-1.6l-.8 3.2c-.3 1.2-1.1 2.6-1.7 3.5A8 8 0 1012 4z" fill="#fff"/>
            </svg>
            <span className="font-semibold text-sm text-[#E60023]">Pinterest</span>
          </div>

          {/* TikTok note reference */}
          <div className="flex items-center gap-1.5" title="TikTok Video & UGC Creatives">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="5" fill="#010101"/>
              <path d="M16.5 8.2c-1.1-.3-1.9-1-2.2-2.1V3.5h-2.5v11.7a2.6 2.6 0 11-2.6-2.6c.3 0 .6 0 .9.1V10a5 5 0 104.2 5V9.4a7 7 0 003.8 1.3V8.2c-.6 0-1.1-.1-1.6-.2z" fill="#25F4EE"/>
              <path d="M16.8 8c-1.1-.3-1.9-1-2.2-2.1V3.5h-2.5v11.7a2.6 2.6 0 11-2.6-2.6c.3 0 .6 0 .9.1V10a5 5 0 104.2 5V9.4a7 7 0 003.8 1.3V8.2c-.6 0-1.1-.1-1.6-.2z" fill="#FE2C55" style={{ mixBlendMode: 'screen' }}/>
            </svg>
            <span className="font-semibold text-sm text-[#010101]">TikTok Ads</span>
          </div>
        </div>

        <p className="text-center text-[11px] text-[var(--muted)] mt-5">
          Campaign management &amp; creative production across client ad accounts. All trademarks remain property of their respective owners.
        </p>
      </div>
    </div>
  );
};
