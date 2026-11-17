import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Mail } from 'lucide-react';

const CALENDLY_LINK = 'https://calendly.com/wardakhawaja-works/30min';

interface FaqItem {
  id: string;
  question: string;
  category: 'Services & Scope' | 'Plans & Pricing' | 'Ads & Workflow';
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-does-hawar-studio-do',
    category: 'Services & Scope',
    question: 'What does Hawar Studio do?',
    answer:
      'Hawar Studio is a full-scope creative, social media, and AI content studio. We handle content strategy, brand storytelling, social media management, Reels & video editing, AI product photography, virtual model shoots, Amazon & Shopify listing visuals, AI UGC video commercials, graphic & print design, marketing consulting, and Meta Ads.',
  },
  {
    id: 'who-do-you-work-with',
    category: 'Services & Scope',
    question: 'Who do you work with?',
    answer:
      'We work with D2C brands, e-commerce businesses, modest fashion & clothing labels, Amazon sellers, Shopify stores, corporate companies, personal brands, and schools or educational institutions in Pakistan and internationally (UK, USA, and beyond).',
  },
  {
    id: 'what-plans-do-you-offer',
    category: 'Plans & Pricing',
    question: 'What plans do you offer?',
    answer:
      "Grow, Thrive and Partner. Grow covers 15 reels, 5 carousels, 15 stories, posting, and community replies. Thrive covers 20 reels, 10 carousels, 30 stories, full strategy, TOFU/MOFU/BOFU funnel, and one Meta Ads campaign management. Partner is a fully customized growth partnership (30 reels, 15 carousels, exclusive stories, dedicated WhatsApp group, tailored strategy and optimization). Plans have a 3-month minimum and 50% advance payment.",
  },
  {
    id: 'can-i-buy-just-one-service',
    category: 'Services & Scope',
    question: 'Can I buy just one service?',
    answer:
      'Yes. AI product photography, virtual model shoots, Amazon & Shopify images, AI UGC videos, Reels/video editing, graphic & Panaflex design, Meta ad creatives, and consulting are all available as standalone services alongside our monthly packages.',
  },
  {
    id: 'do-i-pay-for-ads-through-you',
    category: 'Ads & Workflow',
    question: 'Do I pay for ads through you?',
    answer:
      'Please Note: Meta Ads management fees and advertising spend are two separate costs. Management fees are charged by HAWAR STUDIO according to your package, while the actual advertising budget is paid directly to Meta through your own connected payment card. Advertising spend is not included in any package price.',
  },
  {
    id: 'do-you-use-ai-for-everything',
    category: 'Ads & Workflow',
    question: 'Do you use AI for everything?',
    answer:
      'No. AI makes us faster, and people make the decisions. Strategy, scripts and review are always human-led.',
  },
  {
    id: 'do-you-build-or-fix-websites',
    category: 'Services & Scope',
    question: 'Do you build or fix websites?',
    answer:
      "No. We can do a website audit if you ask, but we don't build or fix sites.",
  },
  {
    id: 'can-you-guarantee-viral-results',
    category: 'Ads & Workflow',
    question: 'Can you guarantee viral results?',
    answer:
      'No one honestly can. We guarantee a clear strategy, consistent quality and honest monthly reporting.',
  },
  {
    id: 'how-do-we-start',
    category: 'Plans & Pricing',
    question: 'How do we start?',
    answer:
      'Click "Book a call." We\'ll talk about your goals and tell you honestly whether we\'re the right fit.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['what-does-hawar-studio-do']);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Services & Scope', 'Plans & Pricing', 'Ads & Workflow'];

  const toggleQuestion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => {
    if (openIds.length === FAQ_ITEMS.length) {
      setOpenIds([]);
    } else {
      setOpenIds(FAQ_ITEMS.map((item) => item.id));
    }
  };

  const filteredFaqs =
    filter === 'All'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="faqs" className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-[var(--line)]">
      <div className="wrap">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--orchid-deep)] mb-3">
            <HelpCircle className="w-4 h-4 text-[var(--orchid)]" />
            <span>Clear Answers &middot; No Agency Jargon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--ink)] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted)] mt-3 leading-relaxed">
            Everything you need to know about what we do, how we work with AI, plans, and getting started.
          </p>
        </div>

        {/* Filter Bar & Toggle All (Segmented Controls) */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-[var(--ink)] text-white shadow-xs'
                    : 'bg-[#FAF9F6] border border-[var(--line)] text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--orchid)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={handleExpandAll}
            className="text-xs font-semibold text-[var(--orchid-deep)] hover:text-[var(--ink)] transition-colors cursor-pointer"
          >
            {openIds.length === FAQ_ITEMS.length ? 'Collapse All' : 'Expand All'}
          </button>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FAF8FF] border-[var(--orchid)] shadow-xs'
                    : 'bg-[#FAF9F6] border-[var(--line)] hover:border-slate-300'
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
                    <span className="text-base sm:text-lg font-display font-bold text-[var(--ink)] leading-snug block">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[var(--orchid)] text-white rotate-180'
                        : 'bg-white border border-[var(--line)] text-[var(--muted)]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[var(--muted)] leading-relaxed border-t border-[var(--line)]/50">
                    <p className="pt-2 text-[var(--ink)] font-normal leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions? Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-[24px] bg-[#FAF9F6] border border-[var(--line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 max-w-4xl">
          <div className="space-y-1.5">
            <h3 className="text-lg sm:text-xl font-display font-bold text-[var(--ink)]">
              Still have a question?
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              We’re happy to answer questions directly or review your brand during a discovery call.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:info.hawarstudio@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--line)] bg-white hover:bg-slate-50 text-xs font-semibold text-[var(--ink)] transition-colors"
            >
              <Mail className="w-4 h-4 text-[var(--orchid-deep)]" />
              <span>Email Us</span>
            </a>
            <a
              href="https://wa.me/923038662249"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--line)] bg-white hover:bg-slate-50 text-xs font-semibold text-[var(--ink)] transition-colors"
            >
              <img src="/assets/aistudio/image_bf98a500.png" alt="WhatsApp" className="w-4 h-4 rounded-[3px] object-cover shrink-0" />
              <span>WhatsApp</span>
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
        </div>
      </div>
    </section>
  );
};
