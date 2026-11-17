import React, { useState, useCallback, useEffect } from 'react';
import {
  Target,
  Zap,
  TrendingUp,
  Compass,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface RoadmapStage {
  number: string;
  stageLabel: string;
  title: string;
  summary: string;
  proof: string;
  growdyLine: string;
  accentColor: string;
  glowColor: string;
  badgeText: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PILLARS: RoadmapStage[] = [
  {
    number: '01',
    stageLabel: 'Level 01 · Foundation',
    title: 'Strategy-First Content',
    summary:
      'No post or video is made in a vacuum. We research references, define content pillars, and craft hooks tailored to your target audience.',
    proof: 'Clear editorial direction before producing a single frame of content.',
    growdyLine:
      'Step 1 unlocked! Before we film anything, I map out your pillars, hooks, and winning references.',
    accentColor: '#38D9C5',
    glowColor: 'rgba(56, 217, 197, 0.32)',
    badgeText: 'Blueprint Locked',
    icon: Target,
  },
  {
    number: '02',
    stageLabel: 'Level 02 · Momentum',
    title: 'Organic First, Then Paid',
    summary:
      'We grow your presence organically first to find what resonates. Ad spend is put only behind proven winners, so every marketing rupee or dollar works harder.',
    proof: 'Prevents wasted ad budget by validating audience interest organically.',
    growdyLine:
      'Level up! Grow organically first so your ad spend only amplifies content your audience already loves.',
    accentColor: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.36)',
    badgeText: 'Signal Validated',
    icon: TrendingUp,
  },
  {
    number: '03',
    stageLabel: 'Level 03 · Hyper-Production',
    title: 'AI Speed, Human Taste',
    summary:
      'We leverage modern AI tools to accelerate research, script variations, and production workflows, while every creative decision is guided by human artistic discernment.',
    proof: 'Faster turnaround without ever settling for generic or robotic templates.',
    growdyLine:
      'Power boost! AI handles speed & scale while real creative taste keeps every visual unmistakably yours.',
    accentColor: '#EC4899',
    glowColor: 'rgba(236, 72, 153, 0.32)',
    badgeText: 'Craft + AI Sync',
    icon: Zap,
  },
  {
    number: '04',
    stageLabel: 'Level 04 · Full Autopilot',
    title: 'End-to-End Execution',
    summary:
      'From concept and script to video editing, carousel design, scheduling, community replies, and monthly reporting, we handle the complete journey.',
    proof: 'Consistent, dependable presence that allows founders to focus on their core business.',
    growdyLine:
      'Final boss cleared! We run the full creative & publishing loop so you stay focused on building your brand.',
    accentColor: '#F4E84A',
    glowColor: 'rgba(244, 232, 74, 0.32)',
    badgeText: 'Mission Complete',
    icon: Compass,
  },
];

function playRoadmapChime(stageIndex: number) {
  if (typeof window === 'undefined') return;
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const baseFreqs = [440, 523.25, 587.33, 659.25];
    const f1 = baseFreqs[stageIndex % baseFreqs.length];
    const f2 = f1 * 1.25;

    const now = ctx.currentTime;
    [f1, f2].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = i === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.055);
      gain.gain.setValueAtTime(0.001, now + i * 0.055);
      gain.gain.exponentialRampToValueAtTime(0.055, now + i * 0.055 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.055 + 0.24);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.055);
      osc.stop(now + i * 0.055 + 0.25);
    });
    setTimeout(() => {
      ctx.close().catch(() => {});
    }, 450);
  } catch {
    // Ignore audio errors when blocked
  }
}

export const WhyUsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visitedMax, setVisitedMax] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [cardDirection, setCardDirection] = useState<'next' | 'prev'>('next');

  const activeStage = PILLARS[activeIndex];
  const ActiveIcon = activeStage.icon;
  const progressPercent = (activeIndex / (PILLARS.length - 1)) * 100;

  const goToStage = useCallback(
    (targetIndex: number) => {
      const clamped = Math.max(0, Math.min(PILLARS.length - 1, targetIndex));
      if (clamped === activeIndex) return;
      setCardDirection(clamped > activeIndex ? 'next' : 'prev');
      setActiveIndex(clamped);
      setVisitedMax((prev) => Math.max(prev, clamped));
      if (soundEnabled) {
        playRoadmapChime(clamped);
      }
    },
    [activeIndex, soundEnabled]
  );

  const handleNext = useCallback(() => {
    if (activeIndex < PILLARS.length - 1) {
      goToStage(activeIndex + 1);
    } else {
      // Loop back to Stage 01 when clicking replay/next on final stage
      setCardDirection('next');
      setActiveIndex(0);
      if (soundEnabled) playRoadmapChime(0);
    }
  }, [activeIndex, goToStage, soundEnabled]);

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) {
      goToStage(activeIndex - 1);
    }
  }, [activeIndex, goToStage]);

  // Keyboard arrow navigation when focused inside section
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const el = document.activeElement;
      const section = document.getElementById('approach');
      if (!section || !el || !section.contains(el)) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section
      id="approach"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#0F0B24] text-white border-t border-[#8B5CF6]/25 overflow-hidden"
    >
      {/* Futuristic Perspective Grid Floor & Cosmic Ambient Lights */}
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(56, 217, 197, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.14) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <div
        className="absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full blur-[120px] pointer-events-none transition-colors duration-500"
        style={{ background: activeStage.glowColor }}
      />
      <div className="absolute -bottom-32 right-10 w-[380px] h-[380px] bg-[#8B5CF6]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="wrap relative z-10">
        {/* Section Header + HUD Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="grid gap-2.5 max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#38D9C5]">
              Our Approach &middot; Interactive Growth Roadmap
            </p>
            <h2 className="text-[clamp(1.8rem,4.6vw,2.75rem)] font-display font-bold text-white">
              Creative content built for real growth
            </h2>
            <p className="text-[#DDD4FF]/85 leading-relaxed max-w-[60ch]">
              We handle your marketing end to end: strategy, content, video and ads. We grow your brand organically first, then put money only behind what is already proven.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <span className="font-mono text-xs tabular-nums text-[#DDD4FF] bg-white/8 border border-white/15 rounded-lg px-3 py-2">
              Card {activeStage.number} / 04
            </span>
            <button
              type="button"
              onClick={() => setSoundEnabled((prev) => !prev)}
              className="w-10 h-10 rounded-lg bg-white/8 hover:bg-white/15 border border-white/15 flex items-center justify-center text-[#DDD4FF] hover:text-[#38D9C5] transition-colors cursor-pointer"
              aria-label={soundEnabled ? 'Mute roadmap sound effects' : 'Enable roadmap sound effects'}
              title={soundEnabled ? 'Roadmap SFX On' : 'Roadmap SFX Off'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Futuristic Digital Game Roadmap Track (Interactive Level Nodes 01 -> 04) */}
        <div className="mb-8 rounded-2xl bg-[#161233]/90 border border-white/12 p-4 sm:p-6 shadow-xl">
          <div className="relative">
            {/* Background & Active Animated Circuit Track Line */}
            <div className="hidden sm:block absolute top-6 left-[10%] right-[10%] h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${progressPercent}%`,
                  background: 'linear-gradient(90deg, #38D9C5 0%, #8B5CF6 55%, #F4E84A 100%)',
                  boxShadow: '0 0 14px rgba(56, 217, 197, 0.7)',
                }}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 relative z-10">
              {PILLARS.map((stage, idx) => {
                const isActive = idx === activeIndex;
                const isVisited = idx <= visitedMax;
                const StageIcon = stage.icon;

                return (
                  <button
                    key={stage.number}
                    type="button"
                    onClick={() => goToStage(idx)}
                    className={`group text-left sm:text-center flex sm:flex-col items-center gap-3 sm:gap-2 p-2.5 sm:p-2 rounded-xl transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white/10 sm:bg-transparent ring-1 sm:ring-0 ring-[#38D9C5]/60'
                        : 'hover:bg-white/5 sm:hover:bg-transparent'
                    }`}
                  >
                    {/* Glowing Game Node Circle */}
                    <div
                      className={`relative w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 shrink-0 ${
                        isActive
                          ? 'scale-110 text-[#120F26] font-bold shadow-[0_0_24px_rgba(56,217,197,0.55)]'
                          : isVisited
                            ? 'bg-[#221C4A] border-[#8B5CF6]/70 text-white'
                            : 'bg-[#191538] border-white/20 text-[#DDD4FF]/65 group-hover:border-white/40'
                      }`}
                      style={
                        isActive
                          ? {
                              background: stage.accentColor,
                              borderColor: '#FFFFFF',
                            }
                          : undefined
                      }
                    >
                      {isVisited && !isActive ? (
                        <CheckCircle2 className="w-5 h-5 text-[#38D9C5]" />
                      ) : (
                        <StageIcon className="w-5 h-5" />
                      )}
                      <span
                        className={`absolute -top-2 -right-2 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md border ${
                          isActive
                            ? 'bg-[#131126] text-[#F4E84A] border-[#F4E84A]'
                            : 'bg-[#131126] text-[#DDD4FF] border-white/20'
                        }`}
                      >
                        {stage.number}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <span
                        className={`block text-xs sm:text-[13px] font-display font-bold truncate ${
                          isActive ? 'text-white' : 'text-[#DDD4FF]/80 group-hover:text-white'
                        }`}
                      >
                        {stage.title}
                      </span>
                      <span className="hidden sm:block text-[11px] font-mono text-[#DDD4FF]/55">
                        {stage.badgeText}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Futuristic Game Arena: Growdy Mascot Holding the Active Stage Card */}
        <div className="relative rounded-[26px] bg-gradient-to-br from-[#19143A]/95 via-[#130F2D]/95 to-[#0D0A1E]/95 border border-[#8B5CF6]/40 p-5 sm:p-8 lg:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.45)] overflow-hidden">
          {/* Holographic corner brackets (arcade/futuristic frame) */}
          <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#38D9C5]/70 rounded-tl-md pointer-events-none" />
          <span className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#38D9C5]/70 rounded-tr-md pointer-events-none" />
          <span className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#8B5CF6]/70 rounded-bl-md pointer-events-none" />
          <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#8B5CF6]/70 rounded-br-md pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Pedestal: Exact Growdy Mascot Presenting & Holding the Card */}
            <div className="lg:col-span-5 flex flex-col items-center relative">
              {/* Growdy Dialogue Bubble */}
              <div
                key={`speech-${activeStage.number}`}
                className="roadmap-card-enter relative mb-4 w-full max-w-sm rounded-2xl bg-[#221B4D]/95 border border-[#38D9C5]/45 px-4 py-3 text-xs sm:text-[13px] text-[#F3F0FF] leading-relaxed shadow-lg"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#F4E84A] shrink-0" />
                  <span className="font-display font-bold text-[#F4E84A] tracking-wide uppercase text-[11px]">
                    Growdy &middot; Your Growth Guide
                  </span>
                </div>
                <p>{activeStage.growdyLine}</p>
                {/* Downward speech arrow pointing to Growdy */}
                <span className="hidden sm:block absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 bg-[#221B4D] border-r border-b border-[#38D9C5]/45" />
              </div>

              {/* Futuristic Hologram Pedestal + Exact Growdy Character Cutout */}
              <div className="relative flex flex-col items-center justify-center pt-1 pb-4">
                {/* Backlit Energy Halo behind Growdy */}
                <div
                  className="absolute top-6 w-52 h-52 sm:w-64 sm:h-64 rounded-full blur-2xl pointer-events-none transition-colors duration-500"
                  style={{ background: activeStage.glowColor }}
                />

                <div className="growdy-float relative z-10 flex items-center justify-center">
                  <img
                    src="/assets/aistudio/growdy-full.png"
                    alt="Growdy, Hawar Studio mascot holding the growth strategy roadmap card"
                    className="w-[185px] sm:w-[225px] lg:w-[245px] h-auto object-contain select-none drop-shadow-[0_18px_28px_rgba(10,5,30,0.85)]"
                  />
                </div>

                {/* Glowing Futuristic Holo-Disc Pedestal Base */}
                <div className="relative -mt-3 w-48 sm:w-56 h-7 rounded-[100%] bg-gradient-to-r from-[#38D9C5]/30 via-[#8B5CF6]/55 to-[#F4E84A]/35 border border-[#38D9C5]/60 shadow-[0_0_26px_rgba(56,217,197,0.45)] flex items-center justify-center">
                  <span className="w-32 h-2 rounded-full bg-[#38D9C5]/50 blur-[2px]" />
                </div>
              </div>
            </div>

            {/* Right Card Presentation: Holographic Stage Card Held by Growdy + Next Arrow Controls */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* Futuristic connector rail visually linking Growdy's pedestal to the held card */}
              <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#38D9C5]/90">
                <span className="w-2.5 h-2.5 rounded-full bg-[#38D9C5] shadow-[0_0_10px_#38D9C5]" />
                <span className="h-[2px] w-12 bg-gradient-to-r from-[#38D9C5] to-[#8B5CF6]" />
                <span>GROWDY PRESENTS &middot; {activeStage.stageLabel.toUpperCase()}</span>
              </div>

              {/* Active Roadmap Stage Card */}
              <div
                key={`card-${activeStage.number}-${cardDirection}`}
                className="roadmap-card-enter plan-holo relative rounded-[22px] bg-white text-[var(--ink)] border-2 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                style={{ borderColor: activeStage.accentColor }}
              >
                <div className="plan-holo-foil" aria-hidden="true" />

                <div className="relative z-10">
                  {/* Top Row: Stage Number & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex items-center justify-center px-3 py-1 rounded-lg font-mono font-bold text-base tabular-nums text-[#120F26]"
                        style={{ background: activeStage.accentColor }}
                      >
                        {activeStage.number}
                      </span>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--orchid-deep)]">
                        {activeStage.stageLabel}
                      </span>
                    </div>

                    <div className="w-11 h-11 rounded-xl bg-[#F4F1FC] border border-[var(--line)] flex items-center justify-center text-[var(--orchid-deep)] shrink-0">
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--ink)] mb-3">
                    {activeStage.title}
                  </h3>

                  {/* Exact Card Copy */}
                  <p className="text-[15px] sm:text-base text-[var(--muted)] leading-relaxed mb-6">
                    {activeStage.summary}
                  </p>

                  {/* Outcome Proof Box */}
                  <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[var(--line)] text-xs sm:text-sm text-[var(--ink)] font-medium flex items-start sm:items-center gap-2.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0 mt-1 sm:mt-0"
                      style={{ background: activeStage.accentColor }}
                    />
                    <span>{activeStage.proof}</span>
                  </div>
                </div>
              </div>

              {/* Game Navigation Bar: Back Arrow, Progress Dots, Prominent Next Arrow */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={activeIndex === 0}
                    className={`inline-flex items-center gap-2 px-4 py-3 rounded-full border font-display font-semibold text-sm transition-all min-h-[44px] ${
                      activeIndex === 0
                        ? 'bg-white/5 border-white/10 text-white/35 cursor-not-allowed'
                        : 'bg-white/10 hover:bg-white/20 border-white/25 text-white cursor-pointer'
                    }`}
                    aria-label="Previous roadmap card"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Prev</span>
                  </button>

                  {/* Interactive Stage Indicator Dots */}
                  <div className="flex items-center gap-1.5 px-2" role="tablist" aria-label="Approach stages">
                    {PILLARS.map((stage, idx) => (
                      <button
                        key={stage.number}
                        type="button"
                        role="tab"
                        aria-selected={idx === activeIndex}
                        aria-label={`View stage ${stage.number}: ${stage.title}`}
                        onClick={() => goToStage(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === activeIndex
                            ? 'w-7 bg-[#38D9C5] shadow-[0_0_10px_#38D9C5]'
                            : 'w-2.5 bg-white/25 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Next Arrow CTA Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-glow-gold inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FEE75C] hover:bg-[#FFF07C] text-[#17152F] font-display font-black text-sm tracking-wide shadow-[0_4px_24px_rgba(254,231,92,0.35)] min-h-[44px] cursor-pointer whitespace-nowrap"
                >
                  {activeIndex < PILLARS.length - 1 ? (
                    <>
                      <span>Next Card ({PILLARS[activeIndex + 1].number})</span>
                      <ArrowRight className="w-4 h-4 text-[#17152F]" />
                    </>
                  ) : (
                    <>
                      <span>Replay Roadmap</span>
                      <RotateCcw className="w-4 h-4 text-[#17152F]" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
