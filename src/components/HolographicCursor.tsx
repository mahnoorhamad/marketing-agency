import React, { useEffect, useRef } from 'react';

export const HolographicCursor: React.FC = () => {
  const auraRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return;

    let mouseX = -500;
    let mouseY = -500;
    let auraX = -500;
    let auraY = -500;
    let ringX = -500;
    let ringY = -500;
    let visible = false;
    let isHoveringInteractive = false;
    let isPressed = false;
    let rafId = 0;

    const root = document.documentElement;

    const updateStates = (target: HTMLElement | null) => {
      const textInput = target?.closest('input, textarea, select, [contenteditable="true"]');
      if (textInput) {
        root.classList.remove('holo-cursor-active');
        if (arrowRef.current) arrowRef.current.style.opacity = '0';
        return;
      }

      if (visible) {
        root.classList.add('holo-cursor-active');
        if (arrowRef.current) arrowRef.current.style.opacity = '1';
      }

      const interactive = target?.closest('a, button, [role="button"], .plan-holo, summary, label');
      isHoveringInteractive = Boolean(interactive);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;

      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!visible) {
        visible = true;
        auraX = mouseX;
        auraY = mouseY;
        ringX = mouseX;
        ringY = mouseY;
        if (auraRef.current) auraRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
        if (arrowRef.current) arrowRef.current.style.opacity = '1';
        root.classList.add('holo-cursor-active');
      }

      // Update CSS vars on :root for full-website holographic background light
      root.style.setProperty('--cursor-x', `${mouseX}px`);
      root.style.setProperty('--cursor-y', `${mouseY}px`);

      if (arrowRef.current) {
        const scale = isPressed ? 0.88 : isHoveringInteractive ? 1.14 : 1;
        arrowRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(${scale})`;
      }

      updateStates(e.target as HTMLElement | null);
    };

    const handlePointerDown = () => {
      isPressed = true;
      if (arrowRef.current && visible) {
        arrowRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(0.86)`;
      }
    };

    const handlePointerUp = () => {
      isPressed = false;
      if (arrowRef.current && visible) {
        const scale = isHoveringInteractive ? 1.14 : 1;
        arrowRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(${scale})`;
      }
    };

    const handlePointerLeave = () => {
      visible = false;
      root.classList.remove('holo-cursor-active');
      if (auraRef.current) auraRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (arrowRef.current) arrowRef.current.style.opacity = '0';
    };

    const animate = () => {
      auraX += (mouseX - auraX) * 0.14;
      auraY += (mouseY - auraY) * 0.14;
      ringX += (mouseX - ringX) * 0.24;
      ringY += (mouseY - ringY) * 0.24;

      if (auraRef.current && visible) {
        const auraScale = isHoveringInteractive ? 1.2 : 1;
        auraRef.current.style.transform = `translate3d(${auraX}px, ${auraY}px, 0) translate(-50%, -50%) scale(${auraScale})`;
      }

      if (ringRef.current && visible) {
        const ringScale = isPressed ? 0.8 : isHoveringInteractive ? 1.45 : 1;
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;
      }

      rafId = window.requestAnimationFrame(animate);
    };

    rafId = window.requestAnimationFrame(animate);

    document.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('pointerdown', handlePointerDown, { passive: true });
    document.addEventListener('pointerup', handlePointerUp, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    window.addEventListener('blur', handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(rafId);
      root.classList.remove('holo-cursor-active');
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('blur', handlePointerLeave);
    };
  }, []);

  return (
    <>
      {/* Full-website trailing holographic prism spotlight */}
      <div
        ref={auraRef}
        aria-hidden="true"
        className="holo-cursor-aura fixed top-0 left-0 pointer-events-none z-[9990] opacity-0 transition-opacity duration-300"
      />

      {/* Holographic rotating prism ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="holo-cursor-ring fixed top-0 left-0 pointer-events-none z-[9995] opacity-0 transition-opacity duration-200"
      />

      {/* Instant 3D Growth Sign Cursor (arrow tip anchored accurately at 0,0) */}
      <div
        ref={arrowRef}
        aria-hidden="true"
        className="holo-cursor-3d-growth fixed top-0 left-0 pointer-events-none z-[9999] opacity-0"
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            marginLeft: '-29px',
            marginTop: '-4px',
            filter: 'drop-shadow(0 4px 10px rgba(19, 1, 55, 0.45)) drop-shadow(0 0 8px rgba(56, 217, 197, 0.55))',
          }}
        >
          <defs>
            {/* Holographic 3D face gradient */}
            <linearGradient id="holoGrowthFace" x1="3" y1="30" x2="31" y2="4" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="45%" stopColor="#8B5CF6" />
              <stop offset="78%" stopColor="#38D9C5" />
              <stop offset="100%" stopColor="#F4E84A" />
            </linearGradient>

            {/* 3D bevel extrusion shadow gradient */}
            <linearGradient id="holoGrowthDepth" x1="3" y1="32" x2="31" y2="8" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4C1D95" />
              <stop offset="60%" stopColor="#1E1B4B" />
              <stop offset="100%" stopColor="#0F766E" />
            </linearGradient>

            {/* 3D ascending bars gradient */}
            <linearGradient id="holoBarsGrad" x1="12" y1="32" x2="30" y2="16" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#38D9C5" />
            </linearGradient>
          </defs>

          {/* 3D Ascending Growth Bars (extrusion + front face) */}
          <g>
            {/* Bar 1 */}
            <rect x="13" y="25" width="4" height="7" rx="1" fill="#17152F" transform="translate(1.2, 1.4)" />
            <rect x="13" y="25" width="4" height="7" rx="1" fill="url(#holoBarsGrad)" stroke="#FFFFFF" strokeWidth="0.9" />
            {/* Bar 2 */}
            <rect x="19" y="21" width="4" height="11" rx="1" fill="#17152F" transform="translate(1.2, 1.4)" />
            <rect x="19" y="21" width="4" height="11" rx="1" fill="url(#holoBarsGrad)" stroke="#FFFFFF" strokeWidth="0.9" />
            {/* Bar 3 */}
            <rect x="25" y="17" width="4" height="15" rx="1" fill="#17152F" transform="translate(1.2, 1.4)" />
            <rect x="25" y="17" width="4" height="15" rx="1" fill="url(#holoBarsGrad)" stroke="#FFFFFF" strokeWidth="0.9" />
          </g>

          {/* 3D Extruded Depth Layer of Growth Zig-Zag & Arrow */}
          <path
            d="M4.5 24.5 L10.5 16.5 L15.5 21.5 L27.5 8.5 L24 6.5 L31.5 5.5 L30.5 13 L28.5 10.8 L15.5 25 L10.5 20 L6 26.5 Z"
            fill="url(#holoGrowthDepth)"
            transform="translate(1.6, 2)"
          />

          {/* Crisp Outer White Contrast Rim + Front 3D Holographic Growth Arrow (Tip at ~29, 4) */}
          <path
            d="M3.5 23.5 L9.8 15 L15 20.2 L26 7.8 L22.5 6.2 L30.5 4 L29 12.2 L27 9.6 L15 23.6 L9.8 18.4 L5.2 25 Z"
            fill="url(#holoGrowthFace)"
            stroke="#FFFFFF"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />

          {/* Top 3D Specular Highlight Facet */}
          <path
            d="M10 15.8 L15 20.8 L26.5 8.1 L29.6 4.7"
            stroke="rgba(255,255,255,0.75)"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
};
