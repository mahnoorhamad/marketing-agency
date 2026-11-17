import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, ArrowRight } from 'lucide-react';

interface IntroVideoSplashProps {
  onComplete: () => void;
}

export const IntroVideoSplash: React.FC<IntroVideoSplashProps> = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);
  // Always-on opening sound by default on first open
  const [isMuted, setIsMuted] = useState(false);
  const [awaitingAudioGesture, setAwaitingAudioGesture] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const userMutedRef = useRef(false);

  const VIDEO_SRC = '/assets/aistudio/264066653_1793598342024069_17e00c7e.mp4';

  const handleFinish = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.volume = 1;
    video.muted = false;

    const unlockSoundOnGesture = () => {
      if (!video || userMutedRef.current) return;
      video.muted = false;
      video.volume = 1;
      setIsMuted(false);
      setAwaitingAudioGesture(false);
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    // Attempt unmuted playback immediately on opening
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMuted(false);
          setAwaitingAudioGesture(false);
        })
        .catch(() => {
          // Browser blocked unmuted autoplay prior to interaction:
          // Keep visual reveal rolling and unmute immediately on first gesture
          video.muted = true;
          setIsMuted(true);
          setAwaitingAudioGesture(true);
          video.play().catch(() => {});

          window.addEventListener('pointerdown', unlockSoundOnGesture, { once: true, capture: true });
          window.addEventListener('keydown', unlockSoundOnGesture, { once: true, capture: true });
          window.addEventListener('touchstart', unlockSoundOnGesture, { once: true, capture: true });
        });
    }

    const updateTime = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', updateTime);

    // Fallback safety timeout in case video fails or gets stuck
    const safetyTimer = setTimeout(() => {
      handleFinish();
    }, 8500);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      window.removeEventListener('pointerdown', unlockSoundOnGesture, true);
      window.removeEventListener('keydown', unlockSoundOnGesture, true);
      window.removeEventListener('touchstart', unlockSoundOnGesture, true);
      clearTimeout(safetyTimer);
    };
  }, []);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      userMutedRef.current = nextMuted;
      videoRef.current.muted = nextMuted;
      if (!nextMuted) {
        videoRef.current.volume = 1;
        setAwaitingAudioGesture(false);
        if (videoRef.current.paused) {
          videoRef.current.play().catch(() => {});
        }
      }
      setIsMuted(nextMuted);
    }
  };

  const handleVideoClick = () => {
    // If browser required a tap to enable audio, clicking once unlocks sound cleanly
    if (awaitingAudioGesture && videoRef.current) {
      userMutedRef.current = false;
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      setIsMuted(false);
      setAwaitingAudioGesture(false);
      return;
    }
    handleFinish();
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0c0424] flex flex-col items-center justify-center select-none transition-all duration-700 ${
        isFading ? 'opacity-0 scale-102 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Top Header Controls */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--lemon)] animate-pulse" />
          <span className="text-white/80 font-display font-semibold text-xs tracking-wider uppercase">
            Hawar Studio &middot; Reveal
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Mute / Unmute Toggle (Always starts On) */}
          <button
            onClick={toggleSound}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium backdrop-blur-md border transition-all cursor-pointer ${
              awaitingAudioGesture
                ? 'bg-[#FEE75C] text-[#17152F] border-[#FEE75C] font-bold animate-pulse'
                : 'bg-white/10 hover:bg-white/20 text-white/90 border-white/15'
            }`}
            title={isMuted ? 'Turn Sound On' : 'Mute Sound'}
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-[var(--lemon)]" />
            )}
            <span>
              {awaitingAudioGesture
                ? 'Tap to Enable Sound'
                : isMuted
                  ? 'Sound Off'
                  : 'Sound On'}
            </span>
          </button>

          {/* Skip / Enter Site Button */}
          <button
            onClick={handleFinish}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[var(--ink)] hover:bg-[var(--lemon)] text-xs font-bold transition-all shadow-md cursor-pointer group"
          >
            <span>Enter Site</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Main Video Display */}
      <div className="relative flex items-center justify-center max-w-full max-h-[85vh] p-4 z-10">
        {/* Glow halo behind the video */}
        <div className="absolute w-[80%] h-[80%] bg-[var(--orchid)]/20 blur-3xl rounded-full pointer-events-none" />

        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black/40 backdrop-blur-sm">
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            playsInline
            autoPlay
            muted={isMuted}
            onEnded={handleFinish}
            className="max-h-[80vh] sm:max-h-[82vh] w-auto h-auto object-contain cursor-pointer"
            onClick={handleVideoClick}
            title={awaitingAudioGesture ? 'Tap to enable opening sound' : 'Click to enter website'}
          />
        </div>
      </div>

      {/* Subtle Progress Bar & Action Hint */}
      <div className="absolute bottom-6 left-6 right-6 max-w-md mx-auto flex flex-col items-center gap-2.5 z-20">
        <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[var(--orchid)] via-[var(--mint)] to-[var(--lemon)] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-[11px] font-mono text-white/60 tracking-wider text-center">
          {awaitingAudioGesture
            ? 'Opening Sound Ready · Tap anywhere to unmute audio'
            : 'Where Worth Grows · Opening sound enabled · Click Enter Site anytime'}
        </p>
      </div>
    </div>
  );
};
