import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

const TESTIMONIALS = [
  {
    quote:
      'Hawar Studio turned our visual marketing from a chaotic weekly scramble into our highest-yielding growth driver. The AI UGC ads dropped our CAC by 44% in under 3 weeks.',
    author: 'Elena Vance',
    role: 'VP of Growth',
    company: 'Apex Apparel Group (London)',
    metric: '-44% Customer Acquisition Cost',
    verified: true,
  },
  {
    quote:
      'The virtual studio photography was so crisp that our retail buyers assumed we spent $30,000 in New York. The Hawar team delivers with immense speed and unmatched taste.',
    author: 'Marc Dubois',
    role: 'Co-Founder & CEO',
    company: 'Aurélia Botanicals (Geneva)',
    metric: '+380% Return on Ad Spend',
    verified: true,
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-24 px-6 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <div className="text-xs uppercase tracking-widest text-[#38D9C5] font-mono">
            Partner Testimonials
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-white tracking-tight">
            Validated by <span className="brand-gradient-text">Brand Leaders</span>
          </h2>
        </div>

        {/* Testimonials 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 sm:p-10 rounded-2xl bg-[#13102A]/90 border border-purple-500/25 relative flex flex-col justify-between shadow-2xl group hover:border-[#38D9C5]/50 transition-colors"
            >
              <div>
                <Quote className="w-10 h-10 text-[#8B5CF6]/30 mb-6 group-hover:text-[#38D9C5]/50 transition-colors" />
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-purple-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-white text-base">{t.author}</div>
                  <div className="text-xs text-purple-300">
                    {t.role} · <span className="text-[#DDD4FF]">{t.company}</span>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-lg bg-[#100D22] border border-purple-500/30 text-xs font-mono text-[#38D9C5] font-bold self-start sm:self-auto">
                  {t.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
