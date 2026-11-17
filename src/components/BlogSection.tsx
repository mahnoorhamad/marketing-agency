import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock, Calendar, X, Sparkles, CheckCircle2 } from 'lucide-react';

const CALENDLY_LINK = 'https://calendly.com/wardakhawaja-works/30min';

export interface BlogPost {
  id: string;
  title: string;
  category: 'Strategy & AI' | 'Case Studies' | 'Product & UGC';
  categoryLabel: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      takeaways?: string[];
    }[];
    conclusion: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'why-brands-need-intelligence',
    title: 'Your Brand Deserves More Than AI. It Needs Intelligence.',
    category: 'Strategy & AI',
    categoryLabel: 'Agency Philosophy',
    readTime: '4 min read',
    date: 'March 2026',
    excerpt:
      'AI image and video generators are now widely accessible to anyone with a browser. But accessibility is not advantage. Why taste, creative direction, and strategic thinking remain the ultimate differentiator.',
    content: {
      intro:
        'Over the past two years, the cost of generating an image or video dropped to near zero. Yet, scrolling through social feeds reveals a paradox: brands have access to more content than ever, but less of it than ever actually makes people stop, look, and buy.',
      sections: [
        {
          heading: 'The "Uncanny Valley" of Generic AI Output',
          body:
            'When a brand uses raw AI tools without human direction, the result is immediately recognizable: plastic textures, unnatural lighting, erratic hands, and vacant aesthetics that erode customer trust. AI is trained on averages; brands, however, win on distinctiveness.',
          takeaways: [
            'Prompting alone does not equal art direction or brand voice.',
            'Raw model outputs lack commercial intent and emotional resonance.',
            'Audiences have developed subconscious filters against automated slop.',
          ],
        },
        {
          heading: 'The 3-Layer Intelligent Workflow',
          body:
            'At Hawar Studio, AI is an accelerator, not the creative director. We combine 6+ years of professional visual production experience with custom AI pipelines to deliver what traditional agencies charge tens of thousands for—delivered faster and sharper.',
          takeaways: [
            'Strategic Briefing: Grounding each visual in audience psychology and conversion intent.',
            'Specialized Generation: Custom trained weights and multi-step composition passes.',
            'Human Direction: Precision retouching, typographic balance, color calibration, and brand consistency.',
          ],
        },
      ],
      conclusion:
        'The future does not belong to agencies that fear AI, nor to tools that automate blindly. It belongs to studios that master the technology with taste, strategic judgment, and human soul.',
    },
  },
  {
    id: 'visualizing-40-campus-spaces',
    title: 'Transforming 40+ Spaces Before Implementation: The Campus Story',
    category: 'Case Studies',
    categoryLabel: 'Spatial Visualization',
    readTime: '5 min read',
    date: 'February 2026',
    excerpt:
      'How Hawar Studio reimagined over 40 physical spaces for the Campus Redevelopment Project—giving leadership a photorealistic preview of prayer areas, student cafeterias, and accessible pathways.',
    content: {
      intro:
        'Architectural renovations often suffer from a costly dilemma: stakeholders cannot truly visualize how a barren lot or neglected exterior will look until concrete is poured and budgets are spent. We used AI content design to solve this problem for over 40 distinct spaces.',
      sections: [
        {
          heading: 'The Challenge: Underutilized Grounds to Functional Hubs',
          body:
            'In collaboration with Sheikh Hassnain Haider, Operations Manager at NOWPDP, we tackled an extensive campus redevelopment scope. The primary objective was turning vacant ground into vibrant student-focused zones: outdoor cafeterias, shaded prayer areas, and barrier-free access routes for students with physical needs.',
          takeaways: [
            'Capturing on-ground reference coordinates and natural daylight angles.',
            'Balancing aesthetic aspiration with practical structural feasibility.',
            'Validating functional usability before committing physical construction capital.',
          ],
        },
        {
          heading: 'Photorealistic Previews Endorsed by Leadership',
          body:
            'By synthesizing 3D spatial principles with generative diffusion models, we rendered photorealistic "Before vs. Transformed" presentations that gave administration complete confidence to move forward.',
          takeaways: [
            'Turnaround delivered within strict committed timelines.',
            '40+ spaces visualized, reviewed, and finalized with stakeholder buy-in.',
            'Proved how visual storytelling accelerates public and institutional approvals.',
          ],
        },
      ],
      conclusion:
        'Whether it is a single commercial storefront or a multi-zone institutional campus, seeing the potential of a physical space before construction builds trust and prevents costly rework.',
    },
  },
  {
    id: 'ai-product-photography-playbook',
    title: 'From Single Packshot to 50 Studio Variations: The Modern Product Playbook',
    category: 'Product & UGC',
    categoryLabel: 'E-Commerce & DTC',
    readTime: '4 min read',
    date: 'January 2026',
    excerpt:
      'Physical studio rentals, lighting rigs, and model bookings are eating brand margins. Learn how forward-thinking fashion and lifestyle brands are replacing traditional shoots with AI studio production.',
    content: {
      intro:
        'Booking a physical photoshoot used to require renting a studio space, hiring photographers, booking models across multiple demographics, and spending weeks in post-production. Today, a single clean product photo is all you need to generate high-converting e-commerce assets.',
      sections: [
        {
          heading: 'Any Model, Any Skin Tone, Any Global Market',
          body:
            'If you are expanding an apparel or cosmetics line internationally, you no longer need five separate photoshoots. With Hawar Studio’s AI model pipelines, your garments can be showcased on diverse models of any nationality and ethnicity with natural fabric drape and realistic lighting.',
          takeaways: [
            'Zero travel, studio rental, or equipment logistics fees.',
            'Consistent lighting and color accuracy matching the real product.',
            'Instant adaptation for seasonal themes, holiday campaigns, and regional aesthetics.',
          ],
        },
        {
          heading: 'High-Velocity Video Ads & UGC',
          body:
            'Meta and TikTok algorithms punish ad fatigue relentlessly. Brands running the same two video creatives see CPA surge within weeks. Our UGC and Reels workflows let brands test 15–20 visual hooks every month without exhausting their budget.',
        },
      ],
      conclusion:
        'Modern e-commerce moves at the speed of social algorithms. High-velocity visual production is no longer a luxury—it is the baseline for sustainable brand growth.',
    },
  },
  {
    id: 'creative-automation-10x-leverage',
    title: 'Creative Automation: How Cesar Garcia & The Maruca Group Scaled Video',
    category: 'Case Studies',
    categoryLabel: 'Video Automation',
    readTime: '3 min read',
    date: 'December 2025',
    excerpt:
      'Why traditional video editing workflows fall short for fast-moving founders, and how combining AI automation with disciplined editing delivers 10x to 100x operational output.',
    content: {
      intro:
        'Luxury hospitality and vacation rentals thrive on visual desire. When Cesar David Garcia, founder of The Maruca Group, needed rapid video editing and scalable automation, traditional single-output freelance models were not fast enough.',
      sections: [
        {
          heading: 'The 10x-to-100x Multiplier in Action',
          body:
            'As Cesar noted in his testimonial: "Warda is capable of forward thinking and planning to create automations and actively learning AI... an individual who will collaborate with AI to 10x to 100x her results." By building automated ingestion and rendering templates, video output expanded exponentially.',
          takeaways: [
            'Automated timeline framing for high-retention vertical Reels and Shorts.',
            'Consistent luxury aesthetic matching high-end villa destinations.',
            'Rapid turnaround enabling real-time promotional pushes for open booking dates.',
          ],
        },
      ],
      conclusion:
        'When human taste guides automated pipelines, video production transforms from a bottleneck into a core growth engine.',
    },
  },
];

export const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Strategy & AI', 'Case Studies', 'Product & UGC'];

  const filteredPosts =
    selectedCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  return (
    <section id="blog" className="py-16 sm:py-24 px-4 sm:px-6 bg-[var(--paper)] border-t border-[var(--line)]">
      <div className="wrap">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--orchid-deep)] mb-3">
            <BookOpen className="w-4 h-4 text-[var(--orchid)]" />
            <span>Studio Insights &middot; Strategic Thinking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--ink)] tracking-tight">
            How we think about content, AI &amp; growth.
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted)] mt-3 leading-relaxed">
            Practical strategies, behind-the-scenes case studies, and honest analyses from the intersection of human creative direction and generative AI.
          </p>
        </div>

        {/* Filter Controls (Segmented Tabs adhering to frontend design guidelines) */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-[var(--ink)] text-white shadow-xs'
                  : 'bg-white border border-[var(--line)] text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--orchid)]'
              }`}
            >
              {category}
            </button>
          ))}
          <span className="text-xs text-[var(--muted)] ml-auto hidden sm:inline-block">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          </span>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-[24px] border border-[var(--line)] p-6 sm:p-8 flex flex-col justify-between hover:border-[var(--orchid)] hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Zero-Pill Unboxed Metadata (strict rule from frontend-design) */}
                <div className="flex items-center gap-2 text-xs text-[var(--muted)] mb-4 font-mono">
                  <span className="font-semibold text-[var(--orchid-deep)]">{post.categoryLabel}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readTime}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--ink)] group-hover:text-[var(--orchid-deep)] transition-colors leading-snug mb-3">
                  {post.title}
                </h3>

                <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between">
                <button
                  onClick={() => setActivePost(post)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--orchid-deep)] transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-xs text-[var(--muted)] font-mono">
                  By Warda Khawaja
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reader Modal */}
        {activePost && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) setActivePost(null);
            }}
          >
            <div className="relative w-full max-w-2xl bg-white rounded-[28px] p-6 sm:p-10 shadow-2xl border border-[var(--line)] my-8 max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-[var(--muted)] hover:text-[var(--ink)] transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Metadata */}
              <div className="flex items-center gap-2 text-xs text-[var(--muted)] font-mono mb-3">
                <span className="font-semibold text-[var(--orchid-deep)]">{activePost.categoryLabel}</span>
                <span aria-hidden="true">&middot;</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {activePost.readTime}
                </span>
                <span aria-hidden="true">&middot;</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {activePost.date}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--ink)] leading-tight mb-5">
                {activePost.title}
              </h2>

              {/* Author Strip */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FAF9F6] border border-[var(--line)] mb-6 text-xs text-[var(--muted)]">
                <div className="w-9 h-9 rounded-full bg-[var(--ink)] text-white flex items-center justify-center font-bold text-sm">
                  WK
                </div>
                <div>
                  <strong className="block text-[var(--ink)] font-semibold">Warda Khawaja</strong>
                  <span>Founder &amp; Creative Director &middot; Hawar Studio</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="space-y-6 text-sm sm:text-base text-[var(--ink)] leading-relaxed">
                <p className="text-base sm:text-lg text-[var(--muted)] font-medium leading-relaxed italic border-l-2 border-[var(--orchid)] pl-4">
                  {activePost.content.intro}
                </p>

                {activePost.content.sections.map((section, idx) => (
                  <div key={idx} className="space-y-3 pt-2">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-[var(--ink)]">
                      {section.heading}
                    </h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      {section.body}
                    </p>
                    {section.takeaways && (
                      <div className="bg-[#F8F6FF] rounded-2xl p-4 border border-[var(--line)] space-y-2 mt-3">
                        <span className="text-xs font-mono uppercase tracking-wider text-[var(--orchid-deep)] font-semibold block">
                          Key Principles:
                        </span>
                        <ul className="space-y-1.5">
                          {section.takeaways.map((takeaway, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--ink)]">
                              <CheckCircle2 className="w-4 h-4 text-[var(--orchid)] flex-shrink-0 mt-0.5" />
                              <span>{takeaway}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}

                <p className="text-[var(--muted)] pt-3 border-t border-[var(--line)]">
                  {activePost.content.conclusion}
                </p>
              </div>

              {/* Bottom CTA within Modal */}
              <div className="mt-8 pt-6 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[var(--muted)] block">Want to discuss your brand's content?</span>
                  <strong className="text-sm text-[var(--ink)]">Book a friendly 30-min strategy call.</strong>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActivePost(null)}
                    className="px-4 py-2 rounded-full border border-[var(--line)] text-xs font-semibold text-[var(--muted)] hover:text-[var(--ink)] cursor-pointer"
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
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
