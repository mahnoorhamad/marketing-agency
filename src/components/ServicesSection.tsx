import React, { useState } from 'react';
import {
  Sparkles,
  Video,
  Share2,
  Camera,
  Layers,
  FileText,
  Clapperboard,
  Palette,
  Briefcase,
  ArrowRight,
  Check,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CALENDLY_LINK = 'https://calendly.com/wardakhawaja-works/30min';

interface ServiceItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  shortDesc: string;
  deliverables: string[];
  scope: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'social-media-management',
    name: 'Social Media Management & Organic Growth',
    icon: Share2,
    shortDesc: 'End-to-end management of your Instagram and Facebook channels: organic growth systems, consistent publishing, and active community engagement.',
    deliverables: [
      'Comprehensive monthly content calendar',
      'Daily publishing, formatting & feed curation',
      'Community engagement & audience replies',
      'Organic growth systems built for leads & admissions',
    ],
    scope: 'Ideal for D2C brands, schools, and businesses wanting a consistent, high-trust presence.',
  },
  {
    id: 'video-editing-reels',
    name: 'Reels & Short-Form Video Production',
    icon: Video,
    shortDesc: 'Storytelling-driven Reels, short-form videos, and dynamic video editing engineered to stop the scroll, hold attention, and convert.',
    deliverables: [
      'Short-form Reels & vertical video editing',
      'Dynamic pacing, subtitles & motion cuts',
      'Storytelling concepts & shoot direction references',
      'High-retention hooks structured to drive action',
    ],
    scope: 'Designed for brands wanting high-retention video content that builds organic authority.',
  },
  {
    id: 'ai-product-photography',
    name: 'AI Product Photography & Virtual Models',
    icon: Camera,
    shortDesc: 'Turn ordinary mobile-phone or factory photos into studio-quality commercial visuals, virtual fashion model shoots, and Amazon & Shopify store assets.',
    deliverables: [
      'Raw-to-studio product image transformation',
      'Amazon listing images & Shopify product photography',
      'AI virtual model shoots for fashion & modest clothing',
      'High-resolution lifestyle & e-commerce campaigns',
    ],
    scope: 'Perfect for e-commerce brands, Shopify stores, and Amazon sellers without physical studio overhead.',
  },
  {
    id: 'ai-ugc-commercials',
    name: 'AI UGC Videos & AI Commercials',
    icon: Clapperboard,
    shortDesc: 'Realistic 100% AI-generated video advertisements, UGC-style product reels, and commercial brand promos produced faster and sharper.',
    deliverables: [
      '100% AI-generated commercial & institutional video ads',
      'UGC-style product showcase & testimonial videos',
      'Product-in-motion visuals from static product photos',
      'Creative direction & human quality polish',
    ],
    scope: 'Built for brands and institutions seeking cinematic ad creatives without traditional crew costs.',
  },
  {
    id: 'social-media-marketing',
    name: 'Social Media Marketing & Brand Storytelling',
    icon: Sparkles,
    shortDesc: 'Audience-first marketing strategies built to expand organic reach, position your brand clearly, and turn scrollers into loyal buyers.',
    deliverables: [
      'Brand storytelling & audience positioning',
      'Content pillar planning & organic lead generation',
      'D2C, modest fashion & educational growth playbooks',
      'Engagement-driven feed & story sequences',
    ],
    scope: 'For businesses that need their digital presence to actively drive visibility, trust, and sales.',
  },
  {
    id: 'content-strategy-copywriting',
    name: 'Content Strategy & Copywriting',
    icon: FileText,
    shortDesc: 'Strategic content planning, compelling scripts, scroll-stopping hooks, and persuasive captions written to turn interest into conversions.',
    deliverables: [
      'Original video scripts & storytelling-based hooks',
      'High-converting captions & clear calls to action',
      'Content planning aligned with buyer psychology',
      'Full TOFU / MOFU / BOFU funnel architecture',
    ],
    scope: 'Ensures every single reel, carousel, and campaign has a clear commercial purpose.',
  },
  {
    id: 'meta-ads-strategy',
    name: 'Meta Ads, Ad Design & Paid Growth',
    icon: Layers,
    shortDesc: 'High-converting ad design and targeted Meta campaign management that scales your proven organic winners into predictable revenue.',
    deliverables: [
      'Scroll-stopping ad creative & static/video ad design',
      'Targeted Meta Ads campaign setup & optimization',
      'A/B creative testing on proven organic winners',
      'Transparent monthly performance reviews & scaling',
    ],
    scope: 'Included with Thrive & Partner plans; available as an add-on or standalone service.',
  },
  {
    id: 'graphic-design-branding',
    name: 'Graphic Design & Brand Collateral',
    icon: Palette,
    shortDesc: 'Polished visual identity assets, social media creatives, promotional posters, carousels, and print-ready Panaflex & event banners.',
    deliverables: [
      'Custom social media creatives & swipe-worthy carousels',
      'Promotional posters, flyers & institutional graphics',
      'Large-format Panaflex & event banner design',
      'Cohesive visual guidelines across digital & print',
    ],
    scope: 'Trusted by corporate brands, NGOs, clubs, and educational organizations for complete visual design.',
  },
  {
    id: 'marketing-consulting-management',
    name: 'Marketing Consulting & Project Management',
    icon: Briefcase,
    shortDesc: 'Hands-on marketing consulting, creative project management, and full-team coordination tailored to your brand goals and launch timelines.',
    deliverables: [
      '1-on-1 growth strategy audits & consulting calls',
      'End-to-end creative campaign project management',
      'Competitor research & market positioning',
      'Dedicated team execution & priority coordination',
    ],
    scope: 'Ideal for founders wanting an in-house style strategic partner guiding their entire marketing.',
  },
];

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FAF9F6] border-t border-[var(--line)]">
      <div className="wrap">
        {/* Section Header */}
        <div className="section-head grid gap-2.5 mb-10 max-w-[68ch]">
          <p className="eyebrow">Services</p>
          <h2 className="text-[clamp(1.8rem,4.6vw,2.7rem)] font-display font-bold text-[var(--ink)]">
            Full-scope creative &amp; digital marketing under one roof
          </h2>
          <p className="text-[var(--muted)] leading-relaxed">
            From social media management, brand storytelling, and Reels to AI product photography, Amazon &amp; Shopify visuals, AI UGC commercials, graphic design, consulting, and paid growth—tailored for D2C brands, e-commerce sellers, corporate teams, and educational institutions.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedService(service)}
                className="group relative bg-white border border-[var(--line)] hover:border-[var(--orchid)] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-md cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6] group-hover:bg-[#F3F0FF] border border-[var(--line)] flex items-center justify-center text-[var(--orchid-deep)] mb-5 transition-colors">
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-[var(--ink)] mb-2 group-hover:text-[var(--orchid-deep)] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs font-semibold text-[var(--ink)] group-hover:text-[var(--orchid-deep)]">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Detail Dialog */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-lg bg-white rounded-[24px] p-6 sm:p-8 shadow-2xl border border-[var(--line)]"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-[var(--muted)] hover:text-[var(--ink)] transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#F3F0FF] border border-[var(--line)] flex items-center justify-center text-[var(--orchid-deep)]">
                    {React.createElement(selectedService.icon, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <span className="eyebrow block">Service</span>
                    <h4 className="text-2xl font-display font-bold text-[var(--ink)]">
                      {selectedService.name}
                    </h4>
                  </div>
                </div>

                <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                  {selectedService.shortDesc}
                </p>

                <div className="mb-6">
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--ink)] mb-3">
                    What is Included
                  </h5>
                  <ul className="space-y-2">
                    {selectedService.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[var(--muted)]">
                        <Check className="w-4 h-4 text-[var(--mint)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[var(--line)] text-xs text-[var(--muted)] mb-6">
                  <strong className="text-[var(--ink)] block mb-1">Scope &amp; Alignment:</strong>
                  {selectedService.scope}
                </div>

                <div className="flex items-center justify-end gap-3 pt-2 border-t border-[var(--line)]">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-4 py-2.5 rounded-full border border-[var(--line)] text-xs font-semibold text-[var(--muted)] hover:text-[var(--ink)]"
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
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
