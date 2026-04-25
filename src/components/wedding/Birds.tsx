import { motion, useReducedMotion } from "framer-motion";

/**
 * Free-flying decorative doves. Continuous, slow, graceful paths
 * (not scroll-driven). Kept in side/background regions to avoid text.
 */
const Dove = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 40" className={className} aria-hidden>
    <g fill="hsl(33 64% 97%)" stroke="hsl(357 100% 18% / 0.25)" strokeWidth="0.5">
      <ellipse cx="32" cy="24" rx="10" ry="3.6" />
      <circle cx="42" cy="21" r="3" />
      <polygon points="45,21 49,22 45,23" fill="hsl(14 86% 45%)" />
      <polygon points="22,24 14,20 16,26" />
      <g className="dove-wing" style={{ transformOrigin: "32px 22px" }}>
        <path d="M22 22 Q30 6 42 18 Q34 22 22 22 Z" />
      </g>
    </g>
  </svg>
);

type Path = {
  duration: number;
  delay: number;
  x: string[];
  y: string[];
  flip?: boolean;
  size: string;
  opacity: number;
};

const PATHS: Path[] = [
  {
    duration: 38,
    delay: 0,
    x: ["-12vw", "30vw", "60vw", "112vw"],
    y: ["18vh", "10vh", "22vh", "14vh"],
    size: "w-12 md:w-16",
    opacity: 0.95,
  },
  {
    duration: 46,
    delay: 6,
    x: ["112vw", "70vw", "30vw", "-12vw"],
    y: ["32vh", "24vh", "38vh", "20vh"],
    flip: true,
    size: "w-10 md:w-14",
    opacity: 0.9,
  },
  {
    duration: 52,
    delay: 14,
    x: ["50vw", "80vw", "20vw", "50vw"],
    y: ["-10vh", "30vh", "55vh", "-10vh"],
    size: "w-9 md:w-12",
    opacity: 0.85,
  },
];

const Birds = () => {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <>
      <style>{`
        @keyframes dove-flap {
          0%, 100% { transform: scaleY(1); }
          50%      { transform: scaleY(0.4); }
        }
        .dove-wing { animation: dove-flap 0.55s ease-in-out infinite; }
      `}</style>
      <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
        {PATHS.map((p, i) => (
          <motion.div
            key={i}
            initial={{ x: p.x[0], y: p.y[0], opacity: 0 }}
            animate={{
              x: p.x,
              y: p.y,
              opacity: [0, p.opacity, p.opacity, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.15, 0.85, 1],
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              transform: p.flip ? "scaleX(-1)" : undefined,
            }}
          >
            <Dove
              className={`${p.size} drop-shadow-[0_4px_10px_rgba(94,0,6,0.3)]`}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Birds;
