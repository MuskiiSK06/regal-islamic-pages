import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Decorative doves that glide across the screen as the user scrolls.
 * Lightweight: pure SVG + transform driven by scroll progress (no JS rAF loops).
 */
const Dove = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 64 40" className={className} style={style} aria-hidden>
    <g fill="hsl(33 64% 96%)" stroke="hsl(357 100% 18% / 0.35)" strokeWidth="0.6">
      {/* body */}
      <ellipse cx="32" cy="24" rx="10" ry="4" />
      {/* head */}
      <circle cx="42" cy="21" r="3.2" />
      {/* beak */}
      <polygon points="45,21 49,22 45,23" fill="hsl(14 86% 45%)" />
      {/* tail */}
      <polygon points="22,24 14,20 16,26" />
      {/* wings (animated flap via CSS) */}
      <g className="dove-wing" style={{ transformOrigin: "32px 22px" }}>
        <path d="M22 22 Q30 6 42 18 Q34 22 22 22 Z" />
      </g>
    </g>
  </svg>
);

const Birds = () => {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Each bird flies across at a slightly different scroll range / direction
  const x1 = useTransform(scrollYProgress, [0.05, 0.45], ["-15vw", "115vw"]);
  const y1 = useTransform(scrollYProgress, [0.05, 0.45], ["10vh", "22vh"]);

  const x2 = useTransform(scrollYProgress, [0.25, 0.7], ["115vw", "-15vw"]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.7], ["35vh", "18vh"]);

  const x3 = useTransform(scrollYProgress, [0.5, 0.95], ["-20vw", "115vw"]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.95], ["28vh", "12vh"]);

  if (reduce) return null;

  return (
    <>
      <style>{`
        @keyframes dove-flap {
          0%, 100% { transform: scaleY(1); }
          50%      { transform: scaleY(0.45); }
        }
        .dove-wing { animation: dove-flap 0.55s ease-in-out infinite; }
      `}</style>
      <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
        <motion.div
          style={{ x: x1, y: y1, position: "absolute", top: 0, left: 0 }}
        >
          <Dove className="w-12 md:w-16 drop-shadow-[0_4px_8px_rgba(94,0,6,0.35)]" />
        </motion.div>
        <motion.div
          style={{ x: x2, y: y2, position: "absolute", top: 0, left: 0, transform: "scaleX(-1)" }}
        >
          <Dove className="w-10 md:w-14 drop-shadow-[0_4px_8px_rgba(94,0,6,0.35)]" />
        </motion.div>
        <motion.div
          style={{ x: x3, y: y3, position: "absolute", top: 0, left: 0 }}
        >
          <Dove className="w-9 md:w-12 opacity-90 drop-shadow-[0_4px_8px_rgba(94,0,6,0.3)]" />
        </motion.div>
      </div>
    </>
  );
};

export default Birds;
