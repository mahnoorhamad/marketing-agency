import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, BarChart3, Layers, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-6 sm:px-8 z-10">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Brand Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#100D22]/80 border border-purple-500/30 backdrop-blur-md shadow-lg"
        >
          <div className="w-2 h-2 rounded-full bg-[#38D9C5] shadow-[0_0_8px_#38D9C5]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#DDD4FF]">
            Where Brands Come to Bloom
          </span>
          <span className="text-purple-400/60 text-xs">·</span>
          <span className="text-xs text-[#38D9C5] font-medium hidden sm:inline">
            Where Worth Grows
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display uppercase font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-white"
        >
          AI-POWERED MARKETING FOR BRANDS READY TO{' '}
          <span className="brand-gradient-text inline-block">
            GROW.
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 font-normal leading-relaxed"
        >
          Creative content. Stronger identity. Marketing that gets results. We synthesize AI-speed production with elite creative direction to expand your market presence.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-[#17152F] bg-[#F4E84A] rounded-xl hover:bg-yellow-300 transition-all shadow-[0_0_30px_rgba(244,232,74,0.35)] hover:shadow-[0_0_40px_rgba(244,232,74,0.6)] active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
          >
            Start a Project
            <ArrowRight className="w-4 h-4 text-[#17152F]" />
          </button>

          <a
            href="#work"
            className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 rounded-xl border border-purple-500/30 hover:border-[#38D9C5]/60 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Live Brand Proof Highlights Ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="pt-10 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-left"
        >
          <div className="p-4 rounded-xl bg-[#100D22]/60 border border-purple-500/20 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight tabular-nums">
              +380%
            </div>
            <div className="text-xs text-purple-200/70 font-medium mt-0.5">Average Client ROAS</div>
          </div>

          <div className="p-4 rounded-xl bg-[#100D22]/60 border border-purple-500/20 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-display font-black text-[#38D9C5] tracking-tight tabular-nums">
              72h
            </div>
            <div className="text-xs text-purple-200/70 font-medium mt-0.5">Creative Turnaround</div>
          </div>

          <div className="p-4 rounded-xl bg-[#100D22]/60 border border-purple-500/20 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight tabular-nums">
              100%
            </div>
            <div className="text-xs text-purple-200/70 font-medium mt-0.5">Performance-Tested</div>
          </div>

          <div className="p-4 rounded-xl bg-[#100D22]/60 border border-purple-500/20 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-display font-black text-[#F4E84A] tracking-tight tabular-nums">
              0 Fluff
            </div>
            <div className="text-xs text-purple-200/70 font-medium mt-0.5">Strategy-First Execution</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
