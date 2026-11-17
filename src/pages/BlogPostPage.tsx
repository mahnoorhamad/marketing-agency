import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, CheckCircle2, Share2, Sparkles } from 'lucide-react';
import { BlogArticle } from '../data/blogData';

const CALENDLY_LINK = 'https://calendly.com/wardakhawaja-works/30min';

interface BlogPostPageProps {
  article: BlogArticle;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ article }) => {
  useEffect(() => {
    document.title = article.titleTag || (article.title.includes('Hawar Studio') ? article.title : `${article.title} | Hawar Studio`);
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', article.metaDescription);
    }
  }, [article]);

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-body">
      {/* Header & Breadcrumbs */}
      <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 px-4 sm:px-6 bg-white border-b border-[var(--line)]">
        <div className="wrap max-w-3xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--muted)]">
              <li>
                <a href="/" className="hover:text-[var(--ink)] transition-colors">Home</a>
              </li>
              <li aria-hidden="true">&middot;</li>
              <li>
                <a href="/blog" className="hover:text-[var(--ink)] transition-colors">Blog</a>
              </li>
              <li aria-hidden="true">&middot;</li>
              <li className="text-[var(--orchid-deep)] font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
                {article.title}
              </li>
            </ol>
          </nav>

          {/* Unboxed Metadata (Zero-Pill discipline) */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-[var(--muted)] font-mono mb-4">
            <span className="font-semibold text-[var(--orchid-deep)] uppercase tracking-wider">
              {article.category}
            </span>
            <span aria-hidden="true">&middot;</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={article.datePublished} className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Published {article.dateFormatted}
            </time>
          </div>

          {/* Single H1 per page requirement */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--ink)] leading-[1.15] tracking-tight mb-4">
            {article.h1 || article.title}
          </h1>

          {/* Byline / Timestamp as requested */}
          {article.byline ? (
            <p className="text-sm font-medium text-[var(--muted)] mb-6">
              {article.byline}
            </p>
          ) : (
            /* Author Box */
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#FAF9F6] border border-[var(--line)] mb-2">
              <div className="w-11 h-11 rounded-full bg-[var(--ink)] text-white flex items-center justify-center font-bold text-sm">
                WK
              </div>
              <div>
                <strong className="block text-sm text-[var(--ink)] font-semibold">
                  Warda Khawaja
                </strong>
                <span className="text-xs text-[var(--muted)]">
                  Founder &amp; Creative Director &middot; Hawar Studio
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Article Body */}
      <main className="py-12 sm:py-16 px-4 sm:px-6">
        <article className="wrap max-w-3xl mx-auto space-y-8">
          {/* Quick Answer Callout */}
          {article.quickAnswer && (
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8F6FF] border border-[var(--orchid)]/40 text-[var(--ink)] shadow-xs">
              <strong className="block text-xs font-mono uppercase tracking-wider text-[var(--orchid-deep)] mb-1.5 font-bold">
                Quick answer:
              </strong>
              <p className="text-base sm:text-lg leading-relaxed font-medium">
                {article.quickAnswer}
              </p>
            </div>
          )}

          {/* Article Introduction */}
          {article.content.intro && (
            <p className="text-lg sm:text-xl text-[var(--muted)] font-medium leading-relaxed italic border-l-4 border-[var(--orchid)] pl-5">
              {article.content.intro}
            </p>
          )}

          {/* Article Sub-sections */}
          {article.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-4 pt-2">
              {/* H2 in question format */}
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--ink)] leading-snug">
                {section.heading}
              </h2>

              <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
                {section.body}
              </p>

              {/* Semantic Table if present */}
              {section.table && (
                <div className="overflow-x-auto rounded-2xl border border-[var(--line)] bg-white shadow-xs my-5">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-[#FAF9F6] border-b border-[var(--line)] text-[var(--ink)]">
                        {section.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-3.5 sm:p-4 font-display font-bold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--line)] text-[var(--muted)]">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-[#FAF8FF] transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`p-3.5 sm:p-4 ${cIdx === 0 ? 'font-semibold text-[var(--ink)]' : ''}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Key Takeaways List */}
              {section.takeaways && (
                <div className="bg-[#F8F6FF] rounded-2xl p-5 border border-[var(--line)] space-y-3 mt-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--orchid-deep)] font-semibold block">
                    Key Principles &amp; Takeaways
                  </span>
                  <ul className="space-y-2">
                    {section.takeaways.map((takeaway, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-[var(--ink)]">
                        <CheckCircle2 className="w-4 h-4 text-[var(--orchid)] flex-shrink-0 mt-1" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}

          {/* Conclusion */}
          <div className="pt-6 border-t border-[var(--line)] text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            <p>{article.content.conclusion}</p>
          </div>

          {/* Bottom Callout & CTA */}
          <div className="mt-12 p-6 sm:p-8 rounded-[24px] bg-[#FAF8FF] border border-[var(--orchid)]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--orchid-deep)] font-semibold block">
                Hawar Studio &middot; Strategic Partner
              </span>
              <h3 className="text-lg sm:text-xl font-display font-bold text-[var(--ink)]">
                Ready to elevate your brand’s content?
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Book a friendly 30-minute discovery call to explore content systems built for your goals.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a href="/blog" className="px-4 py-2.5 rounded-full border border-[var(--line)] bg-white hover:bg-slate-50 text-xs font-semibold text-[var(--muted)] hover:text-[var(--ink)] transition-colors">
                Back to Blog
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
        </article>
      </main>
    </div>
  );
};
