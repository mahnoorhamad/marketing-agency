/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { FaqPage } from './pages/FaqPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { IntroVideoSplash } from './components/IntroVideoSplash';
import { HolographicCursor } from './components/HolographicCursor';
import { GrowdyScrollPeeker } from './components/GrowdyPeekaboo';
import { BLOG_ARTICLES } from './data/blogData';
import { getPageMetadata } from './server/seoMetadata';

interface AppProps {
  initialPath?: string;
}

export default function App({ initialPath }: AppProps) {
  // Path state: works seamlessly in SSR and in client browser
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (initialPath) return initialPath;
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  // Always play the video on initial load in browser
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    return typeof window !== 'undefined';
  });
  const [introKey, setIntroKey] = useState<number>(0);

  // Whenever a person switches between browser tabs, play the video again
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let wasHidden = false;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        wasHidden = true;
      } else if (document.visibilityState === 'visible') {
        if (wasHidden) {
          wasHidden = false;
          setShowIntro(true);
          setIntroKey((prev) => prev + 1);
        }
      }
    };

    const handleFocus = () => {
      if (wasHidden) {
        wasHidden = false;
        setShowIntro(true);
        setIntroKey((prev) => prev + 1);
      }
    };

    const handleBlur = () => {
      wasHidden = true;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  // Client-side navigation & popstate listener
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    // Global link click interceptor for clean internal routing
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Handle internal relative paths starting with /
      if (href.startsWith('/') && !href.startsWith('//') && !target.hasAttribute('download') && target.target !== '_blank') {
        const [path, hash] = href.split('#');
        const targetPath = path || '/';

        // If navigating to a different page route
        if (targetPath !== window.location.pathname) {
          e.preventDefault();
          window.history.pushState({}, '', href);
          setCurrentPath(targetPath);
          window.scrollTo({ top: 0, behavior: 'smooth' });

          // Update page title and meta description dynamically
          const meta = getPageMetadata(targetPath);
          document.title = meta.title;
          const descMeta = document.querySelector('meta[name="description"]');
          if (descMeta) descMeta.setAttribute('content', meta.description);
          const canonicalLink = document.querySelector('link[rel="canonical"]');
          if (canonicalLink) canonicalLink.setAttribute('href', meta.canonicalUrl);
        } else if (hash) {
          // In-page hash scroll
          const element = document.getElementById(hash);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    // Interactive cursor-following glow & holographic tilt tracking
    let activeHoloCard: HTMLElement | null = null;

    const resetHoloCard = (card: HTMLElement | null) => {
      if (!card) return;
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    };

    const handlePointerMove = (e: PointerEvent) => {
      const targetEl = e.target as HTMLElement | null;

      const btn = targetEl?.closest<HTMLElement>('.btn, .btn-glow-gold');
      if (btn) {
        const rect = btn.getBoundingClientRect();
        btn.style.setProperty('--glow-x', `${e.clientX - rect.left}px`);
        btn.style.setProperty('--glow-y', `${e.clientY - rect.top}px`);
      }

      const holoCard = targetEl?.closest<HTMLElement>('.plan-holo');
      if (holoCard) {
        if (activeHoloCard && activeHoloCard !== holoCard) {
          resetHoloCard(activeHoloCard);
        }
        activeHoloCard = holoCard;
        const rect = holoCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const px = Math.max(0, Math.min(100, (x / rect.width) * 100));
        const py = Math.max(0, Math.min(100, (y / rect.height) * 100));
        const rx = ((py - 50) / 50) * -2.2;
        const ry = ((px - 50) / 50) * 2.2;

        holoCard.style.setProperty('--hx', `${x}px`);
        holoCard.style.setProperty('--hy', `${y}px`);
        holoCard.style.setProperty('--hx-pct', `${px.toFixed(1)}`);
        holoCard.style.setProperty('--hy-pct', `${py.toFixed(1)}`);
        holoCard.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
        holoCard.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
      } else if (activeHoloCard) {
        resetHoloCard(activeHoloCard);
        activeHoloCard = null;
      }

      const siteCard = targetEl?.closest<HTMLElement>('section article, section .group');
      if (siteCard && !siteCard.classList.contains('plan-holo')) {
        const rect = siteCard.getBoundingClientRect();
        siteCard.style.setProperty('--card-hx', `${e.clientX - rect.left}px`);
        siteCard.style.setProperty('--card-hy', `${e.clientY - rect.top}px`);
      }
    };

    const handlePointerOut = (e: PointerEvent) => {
      if (!activeHoloCard) return;
      const related = e.relatedTarget as HTMLElement | null;
      if (!related || !activeHoloCard.contains(related)) {
        resetHoloCard(activeHoloCard);
        activeHoloCard = null;
      }
    };

    document.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('pointerover', handlePointerMove, { passive: true });
    document.addEventListener('pointerout', handlePointerOut, { passive: true });

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleLinkClick);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerover', handlePointerMove);
      document.removeEventListener('pointerout', handlePointerOut);
    };
  }, []);

  // Determine which page to render based on path
  const normalizedPath = currentPath.replace(/\/$/, '') || '/';

  let pageContent: React.ReactNode;

  if (normalizedPath === '/faq') {
    pageContent = <FaqPage />;
  } else if (normalizedPath === '/blog') {
    pageContent = <BlogIndexPage />;
  } else if (normalizedPath.startsWith('/blog/')) {
    const slug = normalizedPath.replace('/blog/', '');
    const article = BLOG_ARTICLES.find((a) => a.slug === slug);
    if (article) {
      pageContent = <BlogPostPage article={article} />;
    } else {
      pageContent = (
        <div className="py-20 text-center wrap">
          <h1 className="text-3xl font-display font-bold mb-4">Article Not Found</h1>
          <p className="text-[var(--muted)] mb-6">The article you are looking for does not exist.</p>
          <a href="/blog" className="btn small">View All Articles</a>
        </div>
      );
    }
  } else {
    pageContent = <HomePage />;
  }

  return (
    <div id="top" className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-body relative overflow-x-hidden">
      {/* Website-wide Holographic Cursor & 3D Growth Sign Pointer */}
      <HolographicCursor />

      {/* Scroll-triggered Growdy Peek-a-Boo Mascot */}
      <GrowdyScrollPeeker />

      {/* Video Intro Splash Screen (auto-plays on initial visit & on tab switches) */}
      {showIntro && (
        <IntroVideoSplash
          key={introKey}
          onComplete={() => setShowIntro(false)}
        />
      )}

      {/* Global Site Header */}
      <SiteHeader
        onPlayIntro={() => {
          setShowIntro(true);
          setIntroKey((prev) => prev + 1);
        }}
      />

      {/* Dynamic Page Content */}
      {pageContent}

      {/* Global Site Footer */}
      <SiteFooter
        onPlayIntro={() => {
          setShowIntro(true);
          setIntroKey((prev) => prev + 1);
        }}
      />
    </div>
  );
}
