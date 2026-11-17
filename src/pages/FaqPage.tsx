import React, { useState, useEffect } from 'react';
import { HelpCircle, ChevronDown, Mail, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { FAQ_QUESTIONS, PLAN_COMPARISON_ROWS } from '../data/faqData';

const CALENDLY_LINK = 'https://calendly.com/wardakhawaja-works/30min';

export const FaqPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Hawar Studio FAQ | AI-Powered Digital Marketing Studio in Pakistan';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Answers to common questions about Hawar Studio: what we do, who we work with, plans, ads, AI and how to get started.'
      );
    }
  }, []);

  const [openIds, setOpenIds] = useState<string[]>(FAQ_QUESTIONS.map((q) => q.id));
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Overview & Services', 'Plans & Pricing', 'Ads & Strategy'];

  const toggleQuestion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredQuestions =
    filter === 'All'
      ? FAQ_QUESTIONS
      : FAQ_QUESTIONS.filter((q) => q.category === filter);

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-body">
      {/* 1. Header / Breadcrumbs */}
      <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 px-4 sm:px-6 bg-white border-b border-[var(--line)]">
        <div className="wrap max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs font-mono text-[var(--muted)]">
              <li>
                <a href="/" className="hover:text-[var(--ink)] transition-colors">Home</a>
              </li>
              <li aria-hidden="true">&middot;</li>
              <li className="text-[var(--orchid-deep)] font-semibold" aria-current="page">FAQ</li>
            </ol>
          </nav>

          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--orchid-deep)] mb-3">
            <HelpCircle className="w-4 h-4 text-[var(--orchid)]" />
            <span>Hawar Studio &middot; Clear Answers &amp; Terms</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions About Hawar Studio
          </h1>

          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl">
            Answers to common questions about Hawar Studio: what we do, who we work with, plans, ads, AI and how to get started.
          </p>
        </div>
      </section>

      {/* 2. Main FAQ Accordion Section */}
      <main className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="wrap max-w-4xl mx-auto">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    filter === cat
                      ? 'bg-[var(--ink)] text-white shadow-xs'
                      : 'bg-white border border-[var(--line)] text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--orchid)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                if (openIds.length === FAQ_QUESTIONS.length) {
                  setOpenIds([]);
                } else {
                  setOpenIds(FAQ_QUESTIONS.map((q) => q.id));
                }
              }}
              className="text-xs font-semibold text-[var(--orchid-deep)] hover:text-[var(--ink)] transition-colors cursor-pointer"
            >
              {openIds.length === FAQ_QUESTIONS.length ? 'Collapse All' : 'Expand All'}
            </button>
          </div>

          {/* Semantic Q&A List (Fully rendered in initial HTML for crawlers) */}
          <section className="space-y-4" aria-label="FAQ Questions and Answers">
            {filteredQuestions.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <article
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#FAF8FF] border-[var(--orchid)] shadow-xs'
                      : 'bg-white border-[var(--line)] hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orchid)]"
                  >
                    <div className="space-y-1 pr-2">
                      <span className="text-[11px] font-mono text-[var(--orchid-deep)] font-semibold uppercase tracking-wider block">
                        {faq.category}
                      </span>
                      {/* H3 question format as requested */}
                      <h3 className="text-base sm:text-lg font-display font-bold text-[var(--ink)] leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'bg-[var(--orchid)] text-white rotate-180'
                          : 'bg-[#FAF9F6] border border-[var(--line)] text-[var(--muted)]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Answer Container (Always rendered for SEO crawlers) */}
                  <div
                    className={`px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[var(--muted)] leading-relaxed border-t border-[var(--line)]/50 ${
                      isOpen ? 'block' : 'hidden'
                    }`}
                  >
                    <p className="pt-2 text-[var(--ink)] font-normal leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              );
            })}
          </section>

          {/* 3. Semantic Table: Plans Comparison */}
          <section className="mt-14 sm:mt-20 pt-10 border-t border-[var(--line)]" aria-labelledby="plans-table-heading">
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--orchid-deep)] font-semibold block mb-1">
                Plan Comparison
              </span>
              <h2 id="plans-table-heading" className="text-2xl sm:text-3xl font-display font-bold text-[var(--ink)]">
                Grow vs. Thrive vs. Dedicated Partner
              </h2>
              <p className="text-sm text-[var(--muted)] mt-1.5">
                All plans require a 50% advance payment to begin onboarding and have a 3-month minimum commitment to ensure proper strategy execution, testing, and compounding growth.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[var(--line)] bg-white shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[var(--line)] text-[var(--ink)]">
                    <th className="p-4 sm:p-5 font-display font-bold">Feature / Scope</th>
                    <th className="p-4 sm:p-5 font-display font-bold text-emerald-700">Grow ($250/mo)</th>
                    <th className="p-4 sm:p-5 font-display font-bold text-[var(--orchid-deep)]">Thrive ($550/mo)</th>
                    <th className="p-4 sm:p-5 font-display font-bold text-amber-700">Partner ($1,500/mo)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)] text-[var(--muted)]">
                  {PLAN_COMPARISON_ROWS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF8FF] transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-[var(--ink)] whitespace-nowrap">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-5">{row.grow}</td>
                      <td className="p-4 sm:p-5 font-medium text-[var(--ink)]">{row.thrive}</td>
                      <td className="p-4 sm:p-5">{row.partner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Contact & Call CTA Banner */}
          <section className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-[24px] bg-[#FAF8FF] border border-[var(--orchid)]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <h3 className="text-lg sm:text-xl font-display font-bold text-[var(--ink)]">
                Still have a question not listed here?
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Send us an email or book a friendly 30-minute discovery call to discuss your brand goals.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:info.hawarstudio@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--line)] bg-white hover:bg-slate-50 text-xs font-semibold text-[var(--ink)] transition-colors"
              >
                <Mail className="w-4 h-4 text-[var(--orchid-deep)]" />
                <span>info.hawarstudio@gmail.com</span>
              </a>
              <a
                href="https://wa.me/923038662249"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--line)] bg-white hover:bg-slate-50 text-xs font-semibold text-[var(--ink)] transition-colors"
              >
                <img src="/assets/aistudio/image_bf98a500.png" alt="WhatsApp" className="w-4 h-4 rounded-[3px] object-cover shrink-0" />
                <span>WhatsApp: +92 303 8662249</span>
              </a>
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn small"
              >
                <span>Book a call</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
