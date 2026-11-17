import React, { useState } from 'react';
import { ArrowRight, Crown, Target, PlayCircle, Cpu, TrendingUp, Handshake } from 'lucide-react';
import { ServicesSection } from '../components/ServicesSection';
import { WhyUsSection } from '../components/WhyUsSection';
import { ProcessSection } from '../components/ProcessSection';
import { FounderSection } from '../components/FounderSection';
import { ClientLogosSection } from '../components/ClientLogosSection';
import { BlogSection } from '../components/BlogSection';
import { FaqSection } from '../components/FaqSection';
import { GrowdySectionPeek } from '../components/GrowdyPeekaboo';
import { ReviewCarouselSection } from '../components/ReviewCarouselSection';

const CALENDLY_LINK = 'https://calendly.com/wardakhawaja-works/30min';

type PlatformKey = 'TikTok' | 'Facebook' | 'Instagram' | 'YouTube' | 'LinkedIn' | 'Pinterest';

function PlatformBadge({ platform }: { platform: PlatformKey }) {
  return (
    <span className="inline-flex flex-col items-center gap-1 px-2 py-1.5 rounded-lg bg-[#FAF9F6] border border-[var(--line)] min-w-[54px]">
      {platform === 'TikTok' && (
        <img src="/assets/aistudio/tiktok-icon.png" alt="TikTok" className="w-4 h-4 rounded-[3px] bg-white object-contain" />
      )}
      {platform === 'Facebook' && (
        <img src="/assets/aistudio/image_6b62e2d5.png" alt="Facebook" className="w-4 h-4 rounded-[3px] object-cover" />
      )}
      {platform === 'Instagram' && (
        <img src="/assets/aistudio/instagram-icon.png" alt="Instagram" className="w-4 h-4 rounded-[3px] object-cover" />
      )}
      {platform === 'LinkedIn' && (
        <img src="/assets/aistudio/image_f6fedbe9.png" alt="LinkedIn" className="w-4 h-4 rounded-[3px] object-cover" />
      )}
      {platform === 'YouTube' && (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-label="YouTube">
          <rect width="24" height="17" y="3.5" rx="4" fill="#FF0000" />
          <polygon points="10,8.5 16,12 10,15.5" fill="#FFFFFF" />
        </svg>
      )}
      {platform === 'Pinterest' && (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-label="Pinterest">
          <circle cx="12" cy="12" r="11" fill="#E60023" />
          <path
            d="M12.2 6.5c-3.1 0-5 2.1-5 4.3 0 1 .4 2 1.2 2.4.1.1.2 0 .3-.1l.2-.9c0-.1 0-.2-.1-.3-.2-.3-.4-.7-.4-1.2 0-1.6 1.2-3 3.2-3 1.7 0 2.9 1.1 2.9 2.7 0 1.9-.9 3.3-2.1 3.3-.7 0-1.2-.5-1-1.2.2-.8.6-1.7.6-2.3 0-.5-.3-1-.9-1-.7 0-1.3.7-1.3 1.7 0 .6.2 1 .2 1l-.9 3.6c-.2 1-.1 2.2 0 2.4 0 .1.1.1.2 0 .1-.1 1-1.3 1.3-2.3l.5-2c.3.5 1 .9 1.7.9 2.3 0 3.9-2.1 3.9-4.9 0-2.6-2.2-4.4-4.8-4.4z"
            fill="#FFFFFF"
          />
        </svg>
      )}
      <span className="text-[10px] font-medium text-[var(--ink)] leading-none">{platform}</span>
    </span>
  );
}

export const HomePage: React.FC = () => {
  const [currency, setCurrency] = useState<'USD' | 'PKR' | 'GBP'>('USD');

  const prices = {
    grow: {
      USD: '$250 / month',
      PKR: 'PKR 70,000 / month',
      GBP: '£200 / month',
    },
    thrive: {
      USD: '$550 / month',
      PKR: 'PKR 155,000 / month',
      GBP: '£435 / month',
    },
    partner: {
      USD: '$1,500 / month',
      PKR: 'PKR 420,000 / month',
      GBP: '£1,190 / month',
    },
  };

  return (
    <main className="relative z-10">
      {/* 1. Hero Section: Screenshot Visual Style with Original Brand Copy */}
      <div className="hero relative pt-12 sm:pt-20 pb-28 sm:pb-36 px-4 sm:px-6 overflow-hidden bg-[#131126] text-white">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 z-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(139, 92, 246, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.12) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Ambient radial lighting glows */}
        <div className="absolute top-1/4 right-0 w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] bg-[#8B5CF6]/20 rounded-full blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 left-0 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-[#38D9C5]/15 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="hero-inner wrap relative z-10">
          <div className="hero-copy grid gap-5 sm:gap-6 max-w-3xl">
            {/* Eyebrow badge matching Screenshot style with "Hawar Studio" */}
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38D9C5] shadow-[0_0_12px_#38D9C5] animate-pulse"></span>
              <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-[#38D9C5]">
                HAWAR STUDIO
              </p>
            </div>

            {/* Main Display Headline: Original copy with Screenshot bold styling */}
            <h1 className="text-[clamp(2.3rem,6.2vw,4.5rem)] font-display font-black leading-[1.04] tracking-tight uppercase text-white max-w-[20ch]">
              YOUR BRAND DESERVES MORE THAN AI. IT NEEDS <span className="bg-gradient-to-r from-[#38D9C5] via-[#5DE0E6] to-[#8B5CF6] text-transparent bg-clip-text">INTELLIGENCE.</span>
              <span className="block mt-3 sm:mt-4 text-[clamp(1.3rem,3.2vw,2.2rem)] font-display font-bold text-[#DDD4FF] tracking-tight">
                MARKETING BUILT FOR THE NEXT ERA.
              </span>
            </h1>

            {/* Original Subtitle Body Copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#DDD4FF]/85 leading-relaxed max-w-[52ch]">
              We combine AI, creative strategy, and human direction to build smarter content and marketing systems for modern brands.
            </p>

            {/* Original CTA: Book a call */}
            <div className="hero-actions flex flex-wrap items-center gap-4 sm:gap-6 pt-3 sm:pt-4">
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow-gold inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FEE75C] hover:bg-[#FFF07C] text-[#17152F] font-display font-black text-sm tracking-wider uppercase shadow-[0_4px_25px_rgba(254,231,92,0.35)] cursor-pointer"
              >
                <span>Book a call</span>
                <ArrowRight className="w-4 h-4 text-[#17152F]" />
              </a>

              <span className="text-sm font-medium text-[#DDD4FF]/80">
                Friendly, strategic and no obligation.
              </span>
            </div>
          </div>
        </div>

        {/* Transition wave curve seamlessly blending into #FAF9F6 */}
        <svg
          className="wave absolute bottom-0 left-0 right-0 w-full h-[60px] sm:h-[90px] pointer-events-none z-10"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M0 60 C 280 120, 620 10, 920 60 C 1040 80, 1140 40, 1200 50 L1200 120 L0 120 Z"
            fill="#FAF9F6"
          />
        </svg>
      </div>

      {/* Growdy peeking up cleanly above Clients */}
      <GrowdySectionPeek
        align="right"
        label="Peek-a-boo! I'm Growdy — ready to level up?"
        subAction="Jump to my Growth Roadmap"
        targetId="#approach"
        actionMode="wave"
      />

      {/* 2. Verified Client & Organization Credentials */}
      <div id="clients">
        <ClientLogosSection />
      </div>

      {/* 3. Core Services */}
      <ServicesSection />

      {/* 4. Pricing Plans (Holographic Cards) */}
      <section id="plans" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FAF9F6] border-t border-[var(--line)]">
        <div className="wrap">
          <div className="section-head grid gap-2.5 mb-8 max-w-[60ch]">
            <div className="flex items-center justify-between">
              <p className="eyebrow">Social Media Management Plans</p>
              {/* Currency Switcher */}
              <div className="flex items-center gap-1 p-0.5 rounded-full bg-[#EAE6F5] border border-[var(--line)] text-xs font-semibold">
                {(['USD', 'PKR', 'GBP'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                      currency === curr
                        ? 'bg-[var(--ink)] text-white shadow-xs'
                        : 'text-[var(--muted)] hover:text-[var(--ink)]'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            <h2 className="text-[clamp(1.8rem,4.6vw,2.7rem)] font-display font-bold text-[var(--ink)]">
              Content &bull; Strategy &bull; Growth
            </h2>
            <p className="text-[var(--muted)]">
              Pick the package that fits where your brand is today. We take a 50% advance payment to initiate onboarding and strategy. Every plan starts with a call, so we can match the work to your goals.
            </p>
          </div>

          <div className="plans grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Plan 1: Grow */}
            <article className="plan plan-holo relative bg-[var(--card)] border border-[var(--line)] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between gap-5 shadow-xs">
              <div className="plan-holo-foil" aria-hidden="true" />
              <div className="space-y-4">
                <div className="plan-top grid gap-1.5">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0E7A5A]">
                    Entry-Level &middot; Build Your Online Presence
                  </div>
                  <h3 className="plan-name flex items-center gap-2.5 font-display font-bold text-3xl">
                    <span className="w-3 h-3 rounded-full bg-[var(--mint)] flex-shrink-0" />
                    Grow
                  </h3>
                  <p className="text-[var(--muted)] text-[14px] leading-relaxed">
                    Your brand&apos;s social media, taken care of. We create your basic content strategy, content pillars, ideas, scripts, and engaging hooks. We provide storytelling-based Reel concepts and reference videos so you know exactly what to shoot. You just record. We handle the editing, captions, scheduling, and publishing.
                  </p>
                </div>

                {/* Deliverables summary badge */}
                <div className="p-3 rounded-xl bg-[#F0FAF7] border border-[#C5EDE1] text-xs font-semibold text-[#0E7A5A] flex flex-wrap items-center gap-2">
                  <span>15 Reels</span>
                  <span>&bull;</span>
                  <span>5 Carousels</span>
                  <span>&bull;</span>
                  <span>15 Stories</span>
                </div>

                {/* Platforms Covered */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--orchid-deep)]">
                    Platforms Covered:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <PlatformBadge platform="TikTok" />
                    <PlatformBadge platform="Facebook" />
                    <PlatformBadge platform="Instagram" />
                  </div>
                </div>

                <div className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wider">
                  Features Included:
                </div>

                <ul className="list-none m-0 p-0 grid gap-2 text-[14px]">
                  <li className="plan-li">Basic social media strategy and content pillars</li>
                  <li className="plan-li">Content ideas, scripts, and engaging hooks</li>
                  <li className="plan-li">Storytelling-based Reel concepts</li>
                  <li className="plan-li">Reference videos for easy shooting</li>
                  <li className="plan-li">Social media management and content calendar</li>
                  <li className="plan-li">Video editing (AI-generated and recorded footage)</li>
                  <li className="plan-li">Captions, scheduling, and publishing</li>
                  <li className="plan-li">Community replies</li>
                </ul>

                {/* Meta Ads Add-on Notice */}
                <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[var(--line)] text-xs text-[var(--muted)] leading-relaxed">
                  <strong className="text-[var(--ink)] block mb-1 font-semibold">Meta Ads Add-on (Optional):</strong>
                  Meta Ads management is available as an optional add-on. Agency management fees are charged separately and are not included in the Grow plan.
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--line)]">
                <div className="price font-display font-bold text-xl sm:text-2xl text-[var(--ink)]">
                  {prices.grow[currency]}
                </div>
                <div className="text-xs text-[var(--muted)] mb-3 flex items-center justify-between">
                  <span>50% advance to start</span>
                  <span>&middot;</span>
                  <span>3-month minimum</span>
                </div>
                <a
                  className="btn full-width"
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Book a call</span>
                </a>
              </div>
            </article>

            {/* Plan 2: Thrive */}
            <article className="plan popular plan-holo plan-holo-popular relative bg-[var(--card)] border-2 border-[var(--orchid)] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between gap-5 shadow-md">
              <div className="plan-holo-foil" aria-hidden="true" />
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[var(--orchid)] text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                Most popular
              </div>

              <div className="space-y-4 pt-1">
                <div className="plan-top grid gap-1.5">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--orchid-deep)]">
                    Most Popular &middot; Turn Attention into Real Growth
                  </div>
                  <h3 className="plan-name flex items-center gap-2.5 font-display font-bold text-3xl text-[var(--orchid-deep)]">
                    <span className="w-3 h-3 rounded-full bg-[var(--orchid)] flex-shrink-0" />
                    Thrive
                  </h3>
                  <p className="text-[var(--muted)] text-[14px] leading-relaxed">
                    Ready to turn your social media into a growth engine? We combine advanced content strategy, powerful hooks, storytelling-driven videos, and consistent social media management to help your brand attract attention and turn viewers into customers. We provide clear video references and creative direction. You just shoot. We take care of everything else.
                  </p>
                </div>

                {/* Deliverables summary badge */}
                <div className="p-3 rounded-xl bg-[#F5F0FF] border border-[#DDD4FF] text-xs font-semibold text-[var(--orchid-deep)] flex flex-wrap items-center gap-2">
                  <span>20 Reels</span>
                  <span>&bull;</span>
                  <span>10 Carousels</span>
                  <span>&bull;</span>
                  <span>30 Stories</span>
                </div>

                {/* Platforms Covered */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--orchid-deep)]">
                    Platforms Covered:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <PlatformBadge platform="TikTok" />
                    <PlatformBadge platform="Facebook" />
                    <PlatformBadge platform="Instagram" />
                    <PlatformBadge platform="YouTube" />
                  </div>
                </div>

                <div className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wider">
                  Features Included:
                </div>

                <ul className="list-none m-0 p-0 grid gap-2 text-[14px]">
                  <li className="plan-li font-medium">Advanced social media and content strategy</li>
                  <li className="plan-li font-medium">Audience positioning and competitive edge</li>
                  <li className="plan-li">Strategic content ideas and storytelling-based scripts</li>
                  <li className="plan-li">Powerful hooks and high-converting story sequences</li>
                  <li className="plan-li">TOFU / MOFU / BOFU funnel content</li>
                  <li className="plan-li">Reference videos and creative direction for shooting</li>
                  <li className="plan-li">Professional video editing</li>
                  <li className="plan-li">Captions, scheduling, and publishing</li>
                  <li className="plan-li">Social media management</li>
                  <li className="plan-li">Monthly performance review and next-month content plan</li>
                  <li className="plan-li font-semibold text-[var(--orchid-deep)]">One Meta Ads campaign management included in the plan</li>
                </ul>

                {/* Meta Ads Payment Terms Notice */}
                <div className="p-3.5 rounded-xl bg-[#F5F0FF] border border-[#DDD4FF] text-xs text-[var(--ink)] leading-relaxed space-y-1.5">
                  <strong className="text-[var(--orchid-deep)] block font-semibold">Meta Ads Payment Terms:</strong>
                  <p className="text-xs text-[var(--ink)]">
                    One Meta Ads campaign management is included in the Thrive plan. Management of additional campaigns requires separate agency fees.
                  </p>
                  <p className="text-[11px] text-[var(--muted)] pt-1.5 border-t border-[var(--orchid)]/20">
                    <strong className="text-[var(--ink)]">Ad Spend Notice:</strong> Actual advertising budget is <em>not</em> included. The client pays Meta directly using their own debit or credit card connected to their advertising account.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--line)]">
                <div className="price font-display font-bold text-xl sm:text-2xl text-[var(--orchid-deep)]">
                  {prices.thrive[currency]}
                </div>
                <div className="text-xs text-[var(--muted)] mb-3 flex items-center justify-between">
                  <span>50% advance to start</span>
                  <span>&middot;</span>
                  <span>3-month minimum</span>
                </div>
                <a
                  className="btn full-width"
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Book a call</span>
                </a>
              </div>
            </article>

            {/* Plan 3: Dedicated Partner */}
            <article className="plan plan-holo plan-holo-premium relative bg-[var(--card)] border-2 border-[#38D9C5]/70 rounded-[20px] p-6 sm:p-7 flex flex-col justify-between gap-5 shadow-md">
              <div className="plan-holo-foil" aria-hidden="true" />
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#FEE75C] text-[#17152F] border border-[#E5C935] text-[11px] font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-xs">
                <Crown className="w-3 h-3 fill-current" />
                <span>Our Premium Plan</span>
              </div>

              <div className="space-y-4 pt-1">
                <div className="plan-top grid gap-1.5">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--orchid-deep)]">
                    Your Dedicated Growth Partner &middot; Exclusive Partnership
                  </div>
                  <h3 className="plan-name flex items-center gap-2.5 font-display font-bold text-3xl">
                    <span className="w-3 h-3 rounded-full bg-[var(--lemon)] flex-shrink-0" />
                    Partner
                  </h3>
                  <p className="text-[var(--muted)] text-[14px] leading-relaxed">
                    Consider us your in-house marketing team. We treat your brand like our own, handling everything from in-depth market research and competitor analysis to advanced content strategy, creative direction, detailed shoot guidance, editing, publishing, and ongoing optimization. You focus on running your business. We take responsibility for building its digital presence and driving growth.
                  </p>
                </div>

                {/* Deliverables summary badge */}
                <div className="p-3 rounded-xl bg-[#FFFDF0] border border-[#FEE75C] text-xs font-semibold text-[#8A7100] flex flex-wrap items-center gap-2">
                  <span>30 Reels</span>
                  <span>&bull;</span>
                  <span>15 Carousels</span>
                  <span>&bull;</span>
                  <span>Exclusive Stories</span>
                </div>

                {/* Platforms Covered */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--orchid-deep)]">
                    Platforms Covered:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <PlatformBadge platform="TikTok" />
                    <PlatformBadge platform="Facebook" />
                    <PlatformBadge platform="Instagram" />
                    <PlatformBadge platform="YouTube" />
                    <PlatformBadge platform="LinkedIn" />
                    <PlatformBadge platform="Pinterest" />
                  </div>
                </div>

                <div className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wider">
                  Features Included:
                </div>

                <ul className="list-none m-0 p-0 grid gap-2 text-[14px]">
                  <li className="plan-li font-bold text-[var(--ink)]">Everything included in Thrive</li>
                  <li className="plan-li">Fully customized deliverables according to brand requirements and growth goals</li>
                  <li className="plan-li">In-depth market and audience research</li>
                  <li className="plan-li">Comprehensive competitor analysis</li>
                  <li className="plan-li">Advanced brand positioning and content strategy</li>
                  <li className="plan-li">Detailed shoot directions and creative guidance</li>
                  <li className="plan-li">Storytelling-based scripts, hooks, and content concepts</li>
                  <li className="plan-li">Complete social media management</li>
                  <li className="plan-li">AI-powered creative production and experimentation</li>
                  <li className="plan-li plan-box font-medium text-[var(--ink)] bg-[#F0FAF7] rounded-xl border border-[#C5EDE1]">
                    <strong className="text-[#0E7A5A] block mb-0.5">Dedicated WhatsApp Group:</strong>
                    A private, dedicated WhatsApp group with direct access to the HAWAR STUDIO team for seamless communication, project coordination, updates, feedback, and priority support.
                  </li>
                  <li className="plan-li">Continuous performance monitoring and strategy optimization</li>
                  <li className="plan-li font-medium">Your brand treated as our own</li>
                  <li className="plan-li font-semibold text-[var(--orchid-deep)]">
                    Exclusive niche partnership: We do not accept competing brands within the same niche under the Partner Plan.
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[var(--line)]">
                <div className="price font-display font-bold text-xl sm:text-2xl text-[var(--ink)]">
                  {prices.partner[currency]}
                </div>
                <div className="text-xs text-[var(--muted)] mb-3 flex items-center justify-between">
                  <span>50% advance to start</span>
                  <span>&middot;</span>
                  <span>3-month minimum</span>
                </div>
                <a
                  className="btn full-width"
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Book a call</span>
                </a>
              </div>
            </article>
          </div>

          {/* 5-Pillar Plan Highlights Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { label: 'Strategy First', icon: Target },
              { label: 'High-Impact Content', icon: PlayCircle },
              { label: 'AI-Powered Production', icon: Cpu },
              { label: 'Growth Focused', icon: TrendingUp },
              { label: 'Dedicated Support', icon: Handshake },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white border border-[var(--line)] text-xs font-semibold text-[var(--ink)] shadow-2xs"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#F4F1FC] border border-[#DDD4FF] flex items-center justify-center text-[var(--orchid-deep)] shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          {/* IMPORTANT META ADS PAYMENT POLICY BANNER */}
          <div className="mt-8 rounded-[20px] bg-white border border-[var(--line)] p-5 sm:p-7 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F0F5FF] border border-[#D0E0FF] flex items-center justify-center shrink-0 text-[#2563EB]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-display font-bold text-base sm:text-lg text-[var(--ink)]">
                    Important Meta Ads Payment Policy
                  </h4>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF9F6] border border-[var(--line)] text-[var(--muted)] font-semibold">
                    Billing Transparency
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[var(--line)] text-xs sm:text-sm text-[var(--ink)] font-medium leading-relaxed">
                  &ldquo;Please Note: Meta Ads management fees and advertising spend are two separate costs. Management fees are charged by HAWAR STUDIO according to your selected package, while the actual advertising budget is paid directly to Meta through your own connected payment card. Advertising spend is not included in any package price.&rdquo;
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-white border border-[var(--line)] text-xs space-y-1">
                    <strong className="text-[var(--ink)] block font-semibold text-[13px]">A. Agency Management Fee</strong>
                    <p className="text-[var(--muted)] leading-relaxed">
                      This is the fee charged by HAWAR STUDIO for managing Meta Ads campaigns, including campaign setup, audience targeting, creative management, monitoring, testing, and optimization.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[var(--line)] text-xs space-y-1">
                    <strong className="text-[var(--ink)] block font-semibold text-[13px]">B. Meta Advertising Spend</strong>
                    <p className="text-[var(--muted)] leading-relaxed">
                      This is the actual advertising budget paid directly to Meta (Facebook and Instagram). Ads run using your own Meta advertising account and connected payment card.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PARTNER PLAN | Fully Customized Growth Partnership Feature Spotlight */}
          <div className="mt-8 rounded-[24px] bg-gradient-to-br from-[#17152F] via-[#1E1A3F] to-[#121024] text-white p-6 sm:p-9 border border-[#8B5CF6]/30 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B5CF6]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-xs font-mono uppercase tracking-widest text-[#38D9C5]">
                  <span className="w-2 h-2 rounded-full bg-[#38D9C5] animate-pulse" />
                  PARTNER PLAN &middot; Fully Customized Growth Partnership
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Consider us your in-house marketing team.
                </h3>
                <p className="text-[#C9C0EE] text-sm sm:text-base leading-relaxed max-w-2xl">
                  We treat your brand like our own, handling everything from in-depth market research and competitor analysis to advanced content strategy, creative direction, detailed shoot guidance, editing, publishing, and ongoing optimization. You focus on running your business. We take responsibility for building its digital presence and driving growth.
                </p>
              </div>

              <div className="lg:col-span-5 bg-white/5 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-white/10 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#FAF9F6]/80 font-bold">
                  Includes in Partnership:
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#DDD4FF]">
                  <li className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#38D9C5] shrink-0" />
                    <strong className="text-white font-semibold">30 Reels</strong>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#38D9C5] shrink-0" />
                    <strong className="text-white font-semibold">15 Carousels</strong>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#38D9C5] shrink-0" />
                    <strong className="text-white font-semibold">Exclusive, customized Stories</strong>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#38D9C5] shrink-0 mt-1.5" />
                    <span className="text-white font-medium">
                      <strong>Dedicated WhatsApp Group:</strong> Direct team access for seamless coordination, updates &amp; priority support
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shrink-0" />
                    <span>In-depth market &amp; competitor analysis</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shrink-0" />
                    <span>Detailed shoot directions &amp; creative guidance</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shrink-0" />
                    <span>Exclusive niche partnership (zero competing brands)</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-xs text-[#C9C0EE]">Partner rate</span>
                    <div className="text-xl font-display font-bold text-white">{prices.partner[currency]}</div>
                  </div>
                  <a
                    href={CALENDLY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn on-dark small"
                  >
                    <span>Book a partnership call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growdy waving between Plans and Reviews */}
      <GrowdySectionPeek
        align="left"
        label="See how we work step by step"
        subAction="Explore the 4-stage game"
        targetId="#approach"
        actionMode="wave"
      />

      {/* 5. Interactive Client Testimonials Carousel */}
      <ReviewCarouselSection />

      {/* 6. Strategic Pillars */}
      <WhyUsSection />

      {/* 7. Client Process */}
      <ProcessSection />

      {/* 8. Blog Section Preview */}
      <BlogSection />

      {/* 9. FAQs Section */}
      <FaqSection />

      {/* 10. Founder Section */}
      <FounderSection />

      {/* Growdy peeking & waving above the Closing Dark Band */}
      <GrowdySectionPeek
        align="right"
        label="Still thinking? Let's grow together!"
        subAction="Book your free strategy call"
        externalHref={CALENDLY_LINK}
        actionMode="think"
      />

      {/* 11. Closing Dark Band */}
      <div className="band bg-[var(--band)] text-[var(--band-text)] py-16 sm:py-20 px-4 sm:px-6">
        <section className="p-0">
          <div className="wrap grid gap-5 justify-items-start">
            <img
              alt="Hawar Studio"
              src="/assets/aistudio/file_00000000889c8211b5bc0ad5658ce4eb_dd2d4f6c.png"
              className="block w-auto max-w-[280px] h-auto rounded-md mb-1"
            />

            <h2 className="text-[clamp(2rem,5.4vw,3.3rem)] font-display font-bold max-w-[16ch] text-white">
              Let&rsquo;s talk about your brand.
            </h2>

            <p className="text-[#C9C0EE] text-base sm:text-lg max-w-[46ch] leading-relaxed">
              Tell us what you are building. We will listen first, then show you how the right content can help it grow.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <a
                className="btn on-dark"
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Book a call</span>
              </a>
            </div>

            <div className="pt-4 mt-2 border-t border-white/15 w-full flex flex-wrap items-center gap-3 text-xs text-[#DDD4FF]">
              <a
                href="https://wa.me/923038662249"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-colors"
              >
                <img src="/assets/aistudio/image_bf98a500.png" alt="WhatsApp" className="w-4 h-4 rounded-[4px] object-cover shrink-0" />
                <span>WhatsApp: +92 303 8662249</span>
              </a>
              <a
                href="https://wa.me/923038662259"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-colors"
              >
                <img src="/assets/aistudio/image_bf98a500.png" alt="WhatsApp" className="w-4 h-4 rounded-[4px] object-cover shrink-0" />
                <span>WhatsApp: +92 303 8662259</span>
              </a>
              <a
                href="https://www.instagram.com/hawarstudio.marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-colors"
              >
                <img src="/assets/aistudio/instagram-icon.png" alt="Instagram" className="w-4 h-4 rounded-[4px] object-cover shrink-0" />
                <span>@hawarstudio.marketing</span>
              </a>
              <a
                href="https://www.linkedin.com/company/hawarstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-colors"
              >
                <img src="/assets/aistudio/image_f6fedbe9.png" alt="LinkedIn" className="w-4 h-4 rounded-[4px] object-cover shrink-0" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com/hawarstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-colors"
              >
                <img src="/assets/aistudio/image_6b62e2d5.png" alt="Facebook" className="w-4 h-4 rounded-[4px] object-cover shrink-0" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.tiktok.com/@hawarstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-colors"
              >
                <img src="/assets/aistudio/tiktok-icon.png" alt="TikTok" className="w-4 h-4 rounded-[4px] bg-white p-[1px] object-contain shrink-0" />
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
