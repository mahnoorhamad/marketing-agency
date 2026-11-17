import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export interface VerifiedReview {
  id: string;
  name: string;
  role: string;
  subRole?: string;
  category: string;
  date?: string;
  rating: number;
  pct: string;
  quote: string;
  region: 'local' | 'international';
  country?: 'USA' | 'UK';
}

const VERIFIED_REVIEWS: VerifiedReview[] = [
  {
    id: 'sheikh-hassnain',
    name: 'Sheikh Hassnain Haider',
    role: 'Operations Manager at NOWPDP',
    category: 'AI Content Design · Spatial Visualization',
    date: 'October 12, 2026',
    rating: 4.8,
    pct: '96%',
    quote:
      'I had the opportunity to work with Warda on a project involving the design of over 40 spaces. Despite the scale and complexity of the project, she took the time to understand all the requirements and translated them into designs that met our expectations. What I appreciated most was her ability to deliver quality work within the committed timeline. I truly value her professionalism and would highly recommend Warda to anyone looking for a reliable design professional.',
    region: 'local',
  },
  {
    id: 'maam-tahira',
    name: "Ma'am Tahira",
    role: 'Principal, Government Technical Training Institute (TEVTA)',
    category: '100% AI Video Ad · TEVTA Punjab',
    rating: 5.0,
    pct: '100%',
    quote:
      'Warda did a wonderful job creating a 100% AI-generated video advertisement for our institute. I absolutely loved the ad, and our higher authorities, including the DM, appreciated it as well. The video looked incredibly realistic, and we were very impressed with the overall quality and creativity of her work. It was a wonderful experience working with Warda, and I truly appreciate her dedication and effort.',
    region: 'local',
  },
  {
    id: 'nida-komal',
    name: 'Ms. Nida Komal Parvez',
    role: 'Past President, Sialkot Stars Lions Club',
    category: 'Social Creatives · Banners · Lions Club',
    rating: 5.0,
    pct: '100%',
    quote:
      'Warda worked with Sialkot Stars Lions Club as a volunteer graphic designer during my tenure as President. She designed our social media creatives, promotional posters, and Panaflex banners with great creativity and dedication. I was extremely happy with the quality of her work, her commitment, and her willingness to contribute her skills voluntarily to our club. It was a wonderful experience working with her, and I truly appreciate her efforts and creative contribution.',
    region: 'local',
  },
  {
    id: 'maryam-noor',
    name: 'Dr. Maryam Noor Malik',
    role: 'Assistant Professor at CMH Kharian · Ex Senior Registrar at Shifa International Hospitals Islamabad',
    subRole: 'Fertility & IVF Specialist · Presentation & Ad Creatives',
    category: 'Presentation & Ad Creatives',
    date: 'August 21, 2026',
    rating: 5.0,
    pct: '100%',
    quote:
      'Highly recommend Warda for her expertise in AI-driven content and social media. She helped me with presentations and ad campaigns that were creative, professional, and audience-focused. Her attention to detail, reliability, and strategic thinking made a real impact. A valuable asset to any brand looking to grow.',
    region: 'local',
  },
  {
    id: 'cesar-garcia',
    name: 'Cesar David Garcia',
    role: 'Founder at "The Maruca Group" · Luxury Villa Vacation Rentals',
    subRole: 'Video Editing · Automation & AI Workflows',
    category: 'Video Editing & AI Automation',
    date: 'March 14, 2026',
    rating: 5.0,
    pct: '100%',
    quote:
      'Warda is capable of doing forward thinking and planning to create automations and actively learning AI, so she will make a great asset for someone who is looking for an individual who will collaborate with AI to 10x to 100x her results instead of working like a traditional individual who you are lucky to get even 1x from them!',
    region: 'local',
  },
  {
    id: 'intl-usa-model',
    name: 'International Client · USA',
    role: 'Brand Partner · Verified Engagement',
    category: 'AI Model Photography',
    rating: 5.0,
    pct: '100%',
    quote:
      'I was extremely impressed with the AI model photography. The images looked incredibly realistic and professionally produced. Warda understood the creative direction perfectly and delivered visuals that exceeded my expectations.',
    region: 'international',
    country: 'USA',
  },
  {
    id: 'intl-uk-furniture',
    name: 'International Client · UK',
    role: 'Furniture Brand · Verified Engagement',
    category: 'Furniture Factory-to-Studio Photography',
    rating: 5.0,
    pct: '100%',
    quote:
      'Warda did a fantastic job transforming our ordinary furniture photographs into premium studio-style product images. The final results looked clean, realistic, and professionally photographed. Very impressed with the transformation!',
    region: 'international',
    country: 'UK',
  },
  {
    id: 'intl-usa-product',
    name: 'International Client · USA',
    role: 'E-Commerce Seller · Verified Engagement',
    category: 'Raw-to-Studio Product Transformation',
    rating: 5.0,
    pct: '100%',
    quote:
      'Excellent work! Warda transformed our basic product images into beautiful commercial-quality visuals. The lighting, backgrounds, and overall presentation were outstanding. Highly satisfied with the results.',
    region: 'international',
    country: 'USA',
  },
  {
    id: 'intl-uk-fashion',
    name: 'International Client · UK',
    role: 'Apparel Label · Verified Engagement',
    category: 'AI Fashion Photography',
    rating: 5.0,
    pct: '100%',
    quote:
      'The AI-generated fashion images were exactly what we needed for our brand. The models looked realistic, and the overall photography had a premium feel. Warda was creative, professional, and delivered beautiful results.',
    region: 'international',
    country: 'UK',
  },
  {
    id: 'intl-usa-commercial',
    name: 'International Client · USA',
    role: 'Commercial Client · Verified Engagement',
    category: 'AI Commercial Photography',
    rating: 5.0,
    pct: '100%',
    quote:
      'Working with Warda was a great experience. She turned our product photography ideas into polished, professional marketing visuals using AI. The quality and attention to detail were impressive.',
    region: 'international',
    country: 'USA',
  },
];

function CountryBadge({ country }: { country: 'USA' | 'UK' }) {
  if (country === 'USA') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--muted)]" title="United States">
        <svg className="w-4 h-3 rounded-[2px] border border-black/10 shrink-0" viewBox="0 0 741 390" aria-label="USA flag">
          <rect width="741" height="390" fill="#b22234" />
          <path d="M0,45H741M0,105H741M0,165H741M0,225H741M0,285H741M0,345H741" stroke="#fff" strokeWidth="30" />
          <rect width="296" height="210" fill="#3c3b6e" />
        </svg>
        <span>USA</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--muted)]" title="United Kingdom">
      <svg className="w-4 h-3 rounded-[2px] border border-black/10 shrink-0" viewBox="0 0 60 30" aria-label="UK flag">
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </svg>
      <span>UK</span>
    </span>
  );
}

export const ReviewCarouselSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'local' | 'international'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTwoUp, setIsTwoUp] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const pointerStartX = useRef<number | null>(null);
  const pointerStartY = useRef<number | null>(null);
  const didDrag = useRef(false);

  const filteredReviews = VERIFIED_REVIEWS.filter((item) => {
    if (filter === 'all') return true;
    return item.region === filter;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 768px)');
    const syncLayout = () => setIsTwoUp(mq.matches);
    syncLayout();
    mq.addEventListener('change', syncLayout);
    return () => mq.removeEventListener('change', syncLayout);
  }, []);

  const visibleCount = isTwoUp ? 2 : 1;
  const maxIndex = Math.max(0, filteredReviews.length - visibleCount);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex, filter]);

  const goTo = useCallback(
    (nextIndex: number) => {
      setCurrentIndex(Math.max(0, Math.min(maxIndex, nextIndex)));
    },
    [maxIndex]
  );

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handleFilterChange = (nextFilter: 'all' | 'local' | 'international') => {
    setFilter(nextFilter);
    setCurrentIndex(0);
  };

  // Pointer & Touch Swipe Gestures
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Allow interactive buttons inside cards without hijacking drag unless moved horizontally
    if ((e.target as HTMLElement).closest('button, a')) return;
    pointerStartX.current = e.clientX;
    pointerStartY.current = e.clientY;
    didDrag.current = false;
    setIsDragging(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null || pointerStartY.current === null) return;
    const dx = e.clientX - pointerStartX.current;
    const dy = e.clientY - pointerStartY.current;
    if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
      didDrag.current = true;
      setDragOffset(dx);
    }
  };

  const onPointerEnd = () => {
    if (pointerStartX.current === null) return;
    const threshold = 55;
    if (dragOffset <= -threshold) {
      handleNext();
    } else if (dragOffset >= threshold) {
      handlePrev();
    }
    pointerStartX.current = null;
    pointerStartY.current = null;
    setIsDragging(false);
    setDragOffset(0);
  };

  // Keyboard Left/Right navigation when carousel has focus
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    }
  };

  const slideStepPercent = isTwoUp ? 50 : 100;

  return (
    <section
      id="reviews"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-[var(--paper)]"
      onKeyDown={handleKeyDown}
    >
      <div className="wrap grid gap-8">
        {/* Header + Verified Rating Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="section-head grid gap-2.5 max-w-[56ch]">
            <p className="eyebrow">Client Words</p>
            <h2 className="text-[clamp(1.8rem,4.6vw,2.7rem)] font-display font-bold text-[var(--ink)]">
              Real feedback from people we have worked with
            </h2>
            <p className="text-[var(--muted)]">
              Swipe or use the arrows to browse verified reviews from founders, educators, institutions, and global USA &amp; UK clients.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 self-start lg:self-auto">
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-[var(--line)] text-xs font-medium text-[var(--ink)]">
              <span className="text-[#F4E84A] text-base leading-none" aria-hidden="true">★★★★★</span>
              <span className="font-mono font-bold tabular-nums">4.98 / 5.0</span>
              <span className="text-[var(--muted)]" aria-hidden="true">&middot;</span>
              <span className="text-[var(--muted)] tabular-nums">10 Verified Reviews</span>
            </div>
          </div>
        </div>

        {/* Filter Segmented Control + Top Carousel Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Interactive Category Filter Buttons */}
          <div
            className="inline-flex items-center gap-1 p-1 rounded-xl bg-[#EFEBF9] border border-[var(--line)]"
            role="tablist"
            aria-label="Filter client reviews"
          >
            {[
              { key: 'all' as const, label: 'All Reviews (10)' },
              { key: 'local' as const, label: 'Organizations & Leaders (5)' },
              { key: 'international' as const, label: 'Global USA & UK (5)' },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={filter === tab.key}
                onClick={() => handleFilterChange(tab.key)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer min-h-[36px] ${
                  filter === tab.key
                    ? 'bg-white text-[var(--ink)] shadow-xs'
                    : 'text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Carousel Controls: Index + Prev / Next Buttons */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tabular-nums text-[var(--muted)]">
              {String(currentIndex + 1).padStart(2, '0')} &ndash;{' '}
              {String(Math.min(currentIndex + visibleCount, filteredReviews.length)).padStart(2, '0')} of{' '}
              {String(filteredReviews.length).padStart(2, '0')}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous client review"
                className="w-11 h-11 rounded-full bg-white border border-[var(--line)] hover:border-[var(--orchid)] hover:bg-[#F5F0FF] text-[var(--ink)] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next client review"
                className="w-11 h-11 rounded-full bg-[var(--ink)] hover:bg-[var(--orchid-deep)] text-white flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Swipeable Review Viewport */}
        <div
          ref={viewportRef}
          className="relative overflow-hidden -mx-2.5 sm:-mx-3 touch-pan-y select-none cursor-grab active:cursor-grabbing"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerEnd}
          aria-roledescription="carousel"
          aria-label="Verified client feedback carousel"
        >
          <div
            className="flex items-stretch"
            style={{
              transform: `translate3d(calc(-${currentIndex * slideStepPercent}% + ${dragOffset}px), 0, 0)`,
              transition: isDragging ? 'none' : 'transform 0.48s cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'transform',
            }}
          >
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="w-full md:w-1/2 shrink-0 px-2.5 sm:px-3 flex"
              >
                <figure className="w-full bg-white rounded-[20px] p-6 sm:p-8 border border-[var(--line)] flex flex-col justify-between gap-5 shadow-xs hover:border-[#8B5CF6]/50 transition-colors">
                  <div className="space-y-4">
                    {/* Top Row: Star Rating + Numeric Rating + Optional Country Flag */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="rate flex items-center gap-2.5">
                        <span
                          className="stars"
                          style={{ '--pct': review.pct } as React.CSSProperties}
                          aria-label={`${review.rating} out of 5 stars`}
                        >
                          ★★★★★
                        </span>
                        <b className="font-mono text-sm tabular-nums text-[var(--ink)]">
                          {review.rating.toFixed(1)}
                        </b>
                        {review.date && (
                          <span className="text-xs text-[var(--muted)] tabular-nums">
                            &middot; {review.date}
                          </span>
                        )}
                      </div>

                      {review.country ? (
                        <CountryBadge country={review.country} />
                      ) : (
                        <Quote className="w-4 h-4 text-[#8B5CF6]/45 shrink-0" aria-hidden="true" />
                      )}
                    </div>

                    {/* Clean Unboxed Metadata */}
                    <div className="text-xs font-medium text-[var(--orchid-deep)]">
                      {review.category}
                    </div>

                    {/* Verbatim Quote */}
                    <blockquote className="m-0 font-body text-[15px] sm:text-base leading-relaxed text-[var(--ink)]">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Author / Role Attribution */}
                  <figcaption className="pt-4 border-t border-[var(--line)] flex items-end justify-between gap-3">
                    <div className="grid gap-0.5 min-w-0">
                      <strong className="text-base font-display font-bold text-[var(--ink)] flex items-center gap-1.5">
                        <span className="truncate">{review.name}</span>
                        <CheckCircle2 className="w-4 h-4 text-[#0E7A5A] shrink-0" aria-label="Verified review" />
                      </strong>
                      <span className="text-sm text-[var(--muted)] leading-snug">
                        {review.role}
                      </span>
                      {review.subRole && (
                        <span className="text-xs text-[var(--muted)]/85 mt-0.5">
                          {review.subRole}
                        </span>
                      )}
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Swipe Dots + Helper Caption */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Review slide pagination">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={idx === currentIndex}
                aria-label={`Go to review slide ${idx + 1}`}
                onClick={() => goTo(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-7 bg-[var(--orchid-deep)]'
                    : 'w-2.5 bg-[#D5CDEB] hover:bg-[var(--orchid)]'
                }`}
              />
            ))}
          </div>

          <span className="text-xs text-[var(--muted)]">
            Swipe horizontally or click arrows to browse reviews
          </span>
        </div>
      </div>
    </section>
  );
};
