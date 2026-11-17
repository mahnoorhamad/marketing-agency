import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, Mail, Phone, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const SERVICE_OPTIONS = [
  'AI Content Creation',
  'AI UGC & Video',
  'Social Media Marketing',
  'Product Photography',
  'Meta Ad Creatives',
  'Brand Content',
];

const BUDGET_TIERS = [
  '$2,500 – $5,000 (Sprint)',
  '$5,000 – $15,000 (Growth Engine)',
  '$15,000+ (Enterprise Multi-Channel)',
];

interface ContactSectionProps {
  preselectedService?: string;
  onClearPreselected?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
  onClearPreselected,
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>(BUDGET_TIERS[1]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brandUrl: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedService && !selectedServices.includes(preselectedService)) {
      setSelectedServices((prev) => [...prev, preselectedService]);
    }
  }, [preselectedService]);

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid work email';
    }
    if (selectedServices.length === 0) {
      errs.services = 'Please select at least one service capability';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 700);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Closing CTA Banner */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#100D22] border border-purple-500/30 text-xs font-mono uppercase tracking-widest text-[#38D9C5]">
            <Sparkles className="w-3.5 h-3.5 text-[#F4E84A]" />
            Initiate Your Growth Architecture
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black uppercase text-white tracking-tight leading-[0.95]">
            Where Brands Come to <span className="brand-gradient-text">Bloom</span>
          </h2>

          <p className="text-purple-200/80 text-base sm:text-lg max-w-xl mx-auto font-normal">
            Where Worth Grows. Tell us about your brand targets, and we will formulate a 72-hour creative roadmap.
          </p>
        </div>

        {/* Form & Direct Outreach Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Inquiries & Agency Details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-2xl bg-[#13102A]/90 border border-purple-500/25 space-y-6 shadow-xl">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-widest text-[#38D9C5]">
                  Direct Channels
                </div>
                <h3 className="text-2xl font-display font-bold uppercase text-white">
                  Fast-Track Contact
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Connect directly with our founder or creative strategy lead for immediate priority turnaround.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                {/* Email Direct */}
                <a
                  href="mailto:info.hawarstudio@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#100D22] border border-purple-500/20 text-slate-200 hover:text-white hover:border-[#38D9C5] transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center text-[#38D9C5] group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-purple-300 font-mono uppercase block">Direct Email</span>
                    <span className="font-semibold text-white">info.hawarstudio@gmail.com</span>
                  </div>
                </a>

                {/* WhatsApp Priority Dispatch */}
                <div className="space-y-2.5">
                  <a
                    href="https://wa.me/923038662249?text=Hi%20Hawar%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-[#100D22] border border-purple-500/20 text-slate-200 hover:text-white hover:border-[#38D9C5] transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-purple-300 font-mono uppercase block">WhatsApp Primary</span>
                      <span className="font-semibold text-white">+92 303 8662249</span>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/923038662259?text=Hi%20Hawar%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-[#100D22] border border-purple-500/20 text-slate-200 hover:text-white hover:border-[#38D9C5] transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-purple-300 font-mono uppercase block">WhatsApp Secondary</span>
                      <span className="font-semibold text-white">+92 303 8662259</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Agency Presence */}
              <div className="p-4 rounded-xl bg-[#100D22] border border-purple-500/15 text-xs space-y-1">
                <span className="font-bold text-white block">Headquarters:</span>
                <span className="text-slate-300 block">Cantt, Sialkot District, Punjab, Pakistan</span>
                <span className="text-purple-300 text-[11px] block mt-1">
                  Global Remote Agency Serving US, UK, EU & MENA Markets
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Project Estimator Form */}
          <div className="lg:col-span-8">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#13102A]/95 border border-purple-500/30 shadow-2xl relative overflow-hidden">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-display font-black uppercase text-white">
                    Project Request Received
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Warda and the Hawar Studio team will review your objectives and contact you at <strong className="text-[#38D9C5]">{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', brandUrl: '', message: '' });
                      setSelectedServices([]);
                    }}
                    className="px-6 py-2.5 rounded-xl border border-purple-500/30 text-xs font-semibold text-purple-200 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Service Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-purple-200 flex items-center justify-between">
                      <span>1. Select Required Capabilities *</span>
                      {errors.services && (
                        <span className="text-rose-400 text-[11px] font-sans normal-case">
                          {errors.services}
                        </span>
                      )}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {SERVICE_OPTIONS.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`p-3 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#38D9C5]/15 border-[#38D9C5] text-white shadow-sm'
                                : 'bg-[#100D22] border-purple-500/20 text-slate-300 hover:border-purple-400'
                            }`}
                          >
                            <span className="block">{srv}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Budget Tier */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-purple-200 block">
                      2. Target Project / Monthly Budget Tier
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {BUDGET_TIERS.map((tier) => (
                        <button
                          type="button"
                          key={tier}
                          onClick={() => setSelectedBudget(tier)}
                          className={`p-3 rounded-xl text-xs font-medium text-center border transition-all cursor-pointer ${
                            selectedBudget === tier
                              ? 'bg-gradient-to-r from-[#8B5CF6]/20 to-[#38D9C5]/20 border-[#38D9C5] text-white font-bold'
                              : 'bg-[#100D22] border-purple-500/20 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Contact Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono uppercase tracking-wider text-purple-200 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alexander Vance"
                        className="w-full px-4 py-3 rounded-xl bg-[#100D22] border border-purple-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#38D9C5] transition-colors"
                      />
                      {errors.name && <p className="text-rose-400 text-[11px]">{errors.name}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono uppercase tracking-wider text-purple-200 block">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alexander@brand.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#100D22] border border-purple-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#38D9C5] transition-colors"
                      />
                      {errors.email && <p className="text-rose-400 text-[11px]">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase tracking-wider text-purple-200 block">
                      Brand Website / Instagram Handle (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.brandUrl}
                      onChange={(e) => setFormData({ ...formData, brandUrl: e.target.value })}
                      placeholder="e.g. https://aureliabotanicals.com or @aureliaskincare"
                      className="w-full px-4 py-3 rounded-xl bg-[#100D22] border border-purple-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#38D9C5] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase tracking-wider text-purple-200 block">
                      Project Goals & Context (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your timeline, current bottlenecks, or desired deliverables..."
                      className="w-full px-4 py-3 rounded-xl bg-[#100D22] border border-purple-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#38D9C5] transition-colors resize-none"
                    />
                  </div>

                  {/* Primary Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#F4E84A] text-[#17152F] font-bold text-xs uppercase tracking-wider hover:bg-yellow-300 transition-all shadow-[0_0_25px_rgba(244,232,74,0.3)] hover:shadow-[0_0_35px_rgba(244,232,74,0.5)] active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Synthesizing Brief...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief → Schedule Discovery</span>
                        <Send className="w-4 h-4 text-[#17152F]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
