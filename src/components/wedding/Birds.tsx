import { useReducedMotion } from "framer-motion";

/**
 * Decorative doves that glide continuously across the screen.
 * Constrained to top + bottom safe zones so they never cover important text.
 */
const Dove = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 64 40" className={className} style={style} aria-hidden>
    <g fill="hsl(33 64% 96%)" stroke="hsl(357 100% 18% / 0.35)" strokeWidth="0.6">
      <ellipse cx="32" cy="24" rx="10" ry="4" />
      <circle cx="42" cy="21" r="3.2" />
      <polygon points="45,21 49,22 45,23" fill="hsl(14 86% 45%)" />
      <polygon points="22,24 14,20 16,26" />
      <g className="dove-wing" style={{ transformOrigin: "32px 22px" }}>
        <path d="M22 22 Q30 6 42 18 Q34 22 22 22 Z" />
      </g>
    </g>
  </svg>
);

const Birds = () => {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <>
      <style>{`
        @keyframes dove-flap {
          0%, 100% { transform: scaleY(1); }
          50%      { transform: scaleY(0.45); }
        }
        .dove-wing { animation: dove-flap 0.55s ease-in-out infinite; }

        @keyframes dove-fly-ltr {
          0%   { transform: translate(-15vw, 0); }
          50%  { transform: translate(50vw, -2vh); }
          100% { transform: translate(115vw, 0); }
        }
        @keyframes dove-fly-rtl {
          0%   { transform: translate(115vw, 0) scaleX(-1); }
          50%  { transform: translate(50vw, 2vh) scaleX(-1); }
          100% { transform: translate(-15vw, 0) scaleX(-1); }
        }
        .dove-track-1 { top: 6vh;  animation: dove-fly-ltr 22s linear infinite; }
        .dove-track-2 { top: 12vh; animation: dove-fly-rtl 28s linear infinite; animation-delay: -8s; }
        .dove-track-3 { bottom: 8vh; animation: dove-fly-ltr 26s linear infinite; animation-delay: -14s; }
        .dove-track-4 { bottom: 14vh; animation: dove-fly-rtl 32s linear infinite; animation-delay: -20s; }
      `}</style>
      <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
        <div className="dove-track-1 absolute left-0">
          <Dove className="w-10 md:w-14 drop-shadow-[0_4px_8px_rgba(94,0,6,0.35)]" />
        </div>
        <div className="dove-track-2 absolute left-0">
          <Dove className="w-9 md:w-12 drop-shadow-[0_4px_8px_rgba(94,0,6,0.35)]" />
        </div>
        <div className="dove-track-3 absolute left-0">
          <Dove className="w-9 md:w-12 opacity-90 drop-shadow-[0_4px_8px_rgba(94,0,6,0.3)]" />
        </div>
        <div className="dove-track-4 absolute left-0">
          <Dove className="w-8 md:w-11 opacity-85 drop-shadow-[0_4px_8px_rgba(94,0,6,0.3)]" />
        </div>
      </div>
    </>
  );
};

export default Birds;
