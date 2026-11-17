import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, X, Hand } from 'lucide-react';

const CALENDLY_LINK = 'https://calendly.com/wardakhawaja-works/30min';

interface PeekZone {
  min: number;
  max: number;
  side: 'right' | 'left';
  actionLabel: string;
  message: string;
  targetHash: string;
  actionType: 'wave' | 'think' | 'cheer';
}

const PEEK_ZONES: PeekZone[] = [
  {
    min: 0.06,
    max: 0.24,
    side: 'right',
    actionLabel: 'Waving hi',
    message: "Hey there! Peek-a-boo — let's explore what we build!",
    targetHash: '#services',
    actionType: 'wave',
  },
  {
    min: 0.28,
    max: 0.48,
    side: 'left',
    actionLabel: 'Cheering you on',
    message: 'Grow, Thrive, or Partner — pick your growth level!',
    targetHash: '#plans',
    actionType: 'cheer',
  },
  {
    min: 0.52,
    max: 0.74,
    side: 'right',
    actionLabel: 'Game time',
    message: 'Tap Next in my 4-card Growth Roadmap game!',
    targetHash: '#approach',
    actionType: 'wave',
  },
  {
    min: 0.77,
    max: 0.98,
    side: 'left',
    actionLabel: 'Waving',
    message: "Still thinking? Let's grow together!",
    targetHash: '#book-call',
    actionType: 'think',
  },
];

/**
 * Floating viewport-edge mascot that peeks in & out between scroll milestones on all screen sizes
 */
export const GrowdyScrollPeeker: React.FC = () => {
  const [activeZoneIdx, setActiveZoneIdx] = useState<number | null>(null);
  const [isPeeking, setIsPeeking] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [jumping, setJumping] = useState(false);
  const lastIdxRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || dismissed) return;

    const checkScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 200) return;

      const progress = Math.max(0, Math.min(1, window.scrollY / docHeight));
      const matchedIdx = PEEK_ZONES.findIndex((z) => progress >= z.min && progress <= z.max);

      if (matchedIdx !== -1) {
        if (matchedIdx !== lastIdxRef.current) {
          lastIdxRef.current = matchedIdx;
          setActiveZoneIdx(matchedIdx);
          setIsPeeking(true);

          if (hideTimerRef.current) {
            window.clearTimeout(hideTimerRef.current);
          }
          // Stay visible long enough to read & wave, then tuck softly
          hideTimerRef.current = window.setTimeout(() => {
            setIsPeeking(false);
          }, 6500);
        }
      } else {
        setIsPeeking(false);
        lastIdxRef.current = null;
      }
    };

    const introPeekTimer = window.setTimeout(() => {
      checkScroll();
    }, 1200);

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => {
      window.clearTimeout(introPeekTimer);
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
      window.removeEventListener('scroll', checkScroll);
    };
  }, [dismissed]);

  if (dismissed || activeZoneIdx === null) return null;

  const zone = PEEK_ZONES[activeZoneIdx];
  const isLeft = zone.side === 'left';
  const visible = isPeeking || hovered;

  const handleMascotClick = () => {
    setJumping(true);
    window.setTimeout(() => setJumping(false), 700);
    if (zone.targetHash === '#book-call') {
      window.open(CALENDLY_LINK, '_blank', 'noopener,noreferrer');
      return;
    }
    const target = document.querySelector(zone.targetHash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-4 sm:bottom-10 z-[85] pointer-events-none flex items-end gap-1.5 sm:gap-2.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isLeft ? 'left-0 flex-row' : 'right-0 flex-row-reverse'
      }`}
      style={{
        transform: visible
          ? 'translate3d(0, 0, 0)'
          : isLeft
            ? 'translate3d(-120%, 16px, 0)'
            : 'translate3d(120%, 16px, 0)',
      }}
      onMouseEnter={() => {
        setHovered(true);
        if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
      }}
      onMouseLeave={() => {
        setHovered(false);
        hideTimerRef.current = window.setTimeout(() => setIsPeeking(false), 2600);
      }}
    >
      {/* Larger Peeking Growdy Cutout + Animated Wave Badge */}
      <div
        className={`relative pointer-events-auto group cursor-pointer ${jumping ? 'animate-bounce' : 'growdy-wave'}`}
        onClick={handleMascotClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleMascotClick();
          }
        }}
        aria-label={`Growdy mascot: ${zone.message}`}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setDismissed(true);
          }}
          className={`absolute -top-1 ${isLeft ? 'right-1' : 'left-1'} z-30 w-6 h-6 rounded-full bg-[#17152F]/90 text-white border border-white/30 flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-opacity cursor-pointer shadow-md`}
          aria-label="Hide Growdy peek-a-boo"
          title="Hide Growdy"
        >
          <X className="w-3 h-3" />
        </button>

        {/* Waving Hand Indicator */}
        <span
          className={`growdy-hand-wave absolute -top-2 ${
            isLeft ? 'right-3' : 'left-3'
          } z-20 w-7 h-7 rounded-full bg-[#FEE75C] text-[#17152F] border-2 border-[#17152F] flex items-center justify-center shadow-md pointer-events-none`}
          aria-hidden="true"
        >
          <Hand className="w-3.5 h-3.5" />
        </span>

        <img
          src="/assets/aistudio/growdy-peek.png"
          alt="Growdy peeking and waving"
          className={`w-24 sm:w-32 lg:w-36 h-auto object-contain select-none drop-shadow-[0_14px_24px_rgba(23,21,47,0.38)] transition-transform duration-300 group-hover:scale-105 ${
            isLeft ? 'rotate-[10deg] -ml-2 sm:-ml-3' : '-rotate-[10deg] -mr-2 sm:-mr-3'
          }`}
        />
      </div>

      {/* Speech Whisper Bubble (visible on mobile & desktop) */}
      <button
        type="button"
        onClick={handleMascotClick}
        className="pointer-events-auto mb-10 sm:mb-14 max-w-[175px] sm:max-w-[225px] rounded-2xl bg-[#17152F] text-white border border-[#38D9C5]/60 px-3 py-2 sm:px-4 sm:py-2.5 text-left text-[11px] sm:text-xs shadow-[0_12px_30px_rgba(19,1,55,0.45)] hover:border-[#FEE75C] transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#38D9C5] mb-0.5">
          <Sparkles className="w-3 h-3 text-[#FEE75C]" />
          <span>Growdy &middot; {zone.actionLabel}</span>
        </div>
        <span className="block leading-snug text-[#F3F0FF] font-medium">{zone.message}</span>
      </button>
    </div>
  );
};

interface GrowdySectionPeekProps {
  align?: 'left' | 'right';
  label?: string;
  subAction?: string;
  targetId?: string;
  externalHref?: string;
  darkBg?: boolean;
  actionMode?: 'wave' | 'think';
}

/**
 * Unclipped in-flow Growdy cameo anchored cleanly at section seams so his full face, ears,
 * chest emblem, waving hand badge, and speech bubble are always clearly visible.
 */
export const GrowdySectionPeek: React.FC<GrowdySectionPeekProps> = ({
  align = 'right',
  label = "Still thinking? Let's grow together!",
  subAction,
  targetId = '#approach',
  externalHref,
  darkBg = false,
  actionMode = 'wave',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [waved, setWaved] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleAction = () => {
    setWaved(true);
    window.setTimeout(() => setWaved(false), 700);
    if (externalHref) {
      window.open(externalHref, '_blank', 'noopener,noreferrer');
      return;
    }
    const target = document.querySelector(targetId);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      className={`relative z-30 w-full overflow-x-clip ${
        darkBg ? 'bg-[var(--band)]' : 'bg-[#FAF9F6]'
      }`}
    >
      <div className="wrap px-4 sm:px-6 pt-3 pb-0 flex items-end justify-end">
        <div
          className={`w-full flex items-end gap-2.5 sm:gap-4 ${
            align === 'left' ? 'flex-row justify-start' : 'flex-row-reverse justify-start'
          }`}
        >
          {/* Full Unclipped Larger Growdy Peeker */}
          <button
            type="button"
            onClick={handleAction}
            className={`group relative shrink-0 focus:outline-none cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${waved ? 'animate-bounce' : 'growdy-wave'}`}
            aria-label={`Growdy mascot: ${label}`}
          >
            {/* Waving Hand Badge */}
            <span
              className={`growdy-hand-wave absolute top-1 ${
                align === 'left' ? '-right-1' : '-left-1'
              } z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FEE75C] text-[#17152F] border-2 border-[#17152F] flex items-center justify-center shadow-md`}
              aria-hidden="true"
            >
              <Hand className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </span>

            <img
              src="/assets/aistudio/growdy-peek.png"
              alt="Growdy smiling and waving"
              className="w-24 sm:w-28 md:w-32 h-auto object-contain select-none drop-shadow-[0_10px_20px_rgba(23,21,47,0.28)] group-hover:scale-105 transition-transform"
            />
          </button>

          {/* Interactive Speech Bubble (visible on mobile and desktop) */}
          <button
            type="button"
            onClick={handleAction}
            className={`mb-5 sm:mb-7 max-w-[230px] sm:max-w-[280px] rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-left border shadow-md transition-all duration-500 cursor-pointer hover:scale-[1.02] ${
              darkBg
                ? 'bg-[#211A4A] text-white border-[#38D9C5]/55 hover:border-[#FEE75C]'
                : 'bg-white text-[var(--ink)] border-[#8B5CF6]/40 hover:border-[var(--orchid-deep)]'
            } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--orchid-deep)] mb-0.5">
              <Sparkles className="w-3 h-3 text-[#F4E84A] fill-[#F4E84A]" />
              <span className={darkBg ? 'text-[#38D9C5]' : 'text-[var(--orchid-deep)]'}>
                {actionMode === 'think' ? 'Growdy · Waving to you' : 'Growdy · Peek-a-boo'}
              </span>
            </div>
            <span className="block text-xs sm:text-[13px] font-display font-bold leading-snug">
              {label}
            </span>
            {subAction && (
              <span
                className={`block text-[11px] mt-0.5 font-medium ${
                  darkBg ? 'text-[#FEE75C]' : 'text-[var(--orchid-deep)]'
                }`}
              >
                {subAction} &rarr;
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
