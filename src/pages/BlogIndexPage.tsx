import React, { useEffect, useState, useMemo } from 'react';
import { BookOpen, ArrowRight, Clock, Search, X } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/blogData';

export const BlogIndexPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    document.title = 'Studio Insights & Articles — Hawar Studio';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Strategic insights, case studies, and practical guides on combining human creative direction with artificial intelligence to build smarter content.'
      );
    }
  }, []);

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(BLOG_ARTICLES.map((a) => a.category)))];
  }, []);

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return BLOG_ARTICLES.filter((article) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!query) return true;

      const inTitle = article.title.toLowerCase().includes(query);
      const inExcerpt = article.excerpt.toLowerCase().includes(query);
      const inCategory = article.category.toLowerCase().includes(query);
      const inSections = article.content.sections?.some(
        (s) => s.heading.toLowerCase().includes(query) || s.body.toLowerCase().includes(query)
      );
      return inTitle || inExcerpt || inCategory || inSections;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-body">
      {/* Header & Breadcrumbs */}
      <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 px-4 sm:px-6 bg-white border-b border-[var(--line)]">
        <div className="wrap max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs font-mono text-[var(--muted)]">
              <li>
                <a href="/" className="hover:text-[var(--ink)] transition-colors">Home</a>
              </li>
              <li aria-hidden="true">&middot;</li>
              <li className="text-[var(--orchid-deep)] font-semibold" aria-current="page">Blog</li>
            </ol>
          </nav>

          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--orchid-deep)] mb-3">
            <BookOpen className="w-4 h-4 text-[var(--orchid)]" />
            <span>Studio Insights &middot; Strategic Thinking</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--ink)] tracking-tight mb-4">
            How we think about content, AI &amp; growth.
          </h1>

          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl">
            Practical strategies, behind-the-scenes case studies, and honest analyses from the intersection of human creative direction and generative AI.
          </p>
        </div>
      </section>

      {/* Main Blog Post Listing */}
      <main className="py-10 sm:py-14 px-4 sm:px-6">
        <div className="wrap max-w-4xl mx-auto space-y-8">
          {/* Search Bar & Category Filters */}
          <div className="space-y-4">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 absolute left-4 text-[var(--muted)] pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, topic, or keyword..."
                className="w-full pl-12 pr-10 py-3.5 bg-white border border-[var(--line)] rounded-2xl text-sm sm:text-base text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--orchid)] focus:ring-2 focus:ring-[var(--orchid)]/20 transition-all shadow-2xs"
                aria-label="Search blog articles"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 p-1 rounded-full text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[#FAF9F6] transition-colors cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Category Filter Badges & Counter */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[var(--muted)] font-mono text-[11px] uppercase mr-1">Filter:</span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[var(--ink)] text-white border-[var(--ink)] shadow-2xs'
                        : 'bg-white text-[var(--muted)] border-[var(--line)] hover:text-[var(--ink)] hover:border-[var(--ink)]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="text-xs text-[var(--muted)] font-mono">
                {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
                {(searchQuery || selectedCategory !== 'All') && ' found'}
              </div>
            </div>
          </div>

          {/* Articles Grid or Empty State */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="group bg-white rounded-[24px] border border-[var(--line)] p-6 sm:p-8 flex flex-col justify-between hover:border-[var(--orchid)] hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    {/* Zero-Pill Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs text-[var(--muted)] mb-4 font-mono">
                      <span className="font-semibold text-[var(--orchid-deep)]">{article.category}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{article.dateFormatted}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--ink)] group-hover:text-[var(--orchid-deep)] transition-colors leading-snug mb-3">
                      <a href={`/blog/${article.slug}`} className="hover:underline">
                        {article.title}
                      </a>
                    </h2>

                    <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between">
                    <a
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--orchid-deep)] transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <span className="text-xs text-[var(--muted)] font-mono">
                      By Warda Khawaja
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[var(--line)] p-8 sm:p-12 space-y-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#F4F1FC] border border-[var(--line)] flex items-center justify-center text-[var(--orchid-deep)]">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-[var(--ink)]">
                No matching articles found
              </h3>
              <p className="text-sm text-[var(--muted)] max-w-md mx-auto leading-relaxed">
                We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;strategy&rdquo;, &ldquo;funnel&rdquo;, &ldquo;TOFU&rdquo;, or &ldquo;reels&rdquo;.
              </p>
              <div>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="btn small"
                >
                  Clear search filters
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
