import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(() => onOpen(), 1000);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="envelope-cover"
        initial={{ opacity: 1, x: 0 }}
        animate={opened ? { opacity: 0, x: "110vw" } : { opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.0, ease: [0.65, 0, 0.35, 1] }}
        className="fixed inset-0 z-[100] overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, hsl(4 92% 38%) 0%, hsl(357 100% 22%) 45%, hsl(357 100% 14%) 100%)",
        }}
      >
        {/* Diagonal envelope-flap seams */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "linear-gradient(135deg, transparent 0%, transparent 38%, hsl(357 100% 12% / 0.55) 38.2%, transparent 38.6%, transparent 61.4%, hsl(357 100% 12% / 0.55) 61.6%, transparent 62%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "linear-gradient(45deg, transparent 0%, transparent 38%, hsl(357 100% 10% / 0.5) 38.2%, transparent 38.6%, transparent 61.4%, hsl(357 100% 10% / 0.5) 61.6%, transparent 62%, transparent 100%)",
          }}
        />
        {/* Soft vignette */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, hsl(357 100% 8% / 0.55) 100%)",
          }}
        />

        {/* Bismillah at top */}
        <div className="absolute inset-x-0 top-[6vh] sm:top-[8vh] flex flex-col items-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-script text-cream leading-[1.2] pb-1"
            style={{
              fontSize: "clamp(2.2rem, 7vw, 3.75rem)",
              textShadow: "0 2px 14px hsl(357 100% 8% / 0.6)",
            }}
          >
            Bismillah
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="font-display tracking-[0.35em] text-[10px] sm:text-xs text-cream/75 mt-2"
          >
            Y O U ' V E &nbsp; B E E N &nbsp; I N V I T E D
          </motion.p>
        </div>

        {/* Wax seal — perfectly centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={handleOpen}
            aria-label="Open invitation"
            className="relative cursor-pointer group focus:outline-none"
            style={{ width: "min(58vw, 280px)", height: "min(58vw, 280px)" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.3 },
              }}
              className="relative w-full h-full"
            >
              {/* Outer scalloped gold rim (SVG for true scallop) */}
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full drop-shadow-[0_18px_30px_rgba(0,0,0,0.55)]"
                aria-hidden
              >
                <defs>
                  <radialGradient id="goldRim" cx="35%" cy="30%" r="75%">
                    <stop offset="0%" stopColor="hsl(45 95% 88%)" />
                    <stop offset="40%" stopColor="hsl(42 88% 62%)" />
                    <stop offset="75%" stopColor="hsl(38 75% 42%)" />
                    <stop offset="100%" stopColor="hsl(32 70% 28%)" />
                  </radialGradient>
                  <radialGradient id="waxRed" cx="35%" cy="28%" r="75%">
                    <stop offset="0%" stopColor="hsl(14 90% 58%)" />
                    <stop offset="40%" stopColor="hsl(4 92% 35%)" />
                    <stop offset="100%" stopColor="hsl(357 100% 16%)" />
                  </radialGradient>
                  <path
                    id="curveTap"
                    d="M 30 110 A 75 75 0 0 0 170 110"
                    fill="none"
                  />
                </defs>

                {/* Scalloped outer edge */}
                <g fill="url(#goldRim)">
                  {Array.from({ length: 28 }).map((_, i) => {
                    const a = (i / 28) * Math.PI * 2;
                    const cx = 100 + Math.cos(a) * 92;
                    const cy = 100 + Math.sin(a) * 92;
                    return <circle key={i} cx={cx} cy={cy} r="7" />;
                  })}
                </g>

                {/* Gold disc */}
                <circle cx="100" cy="100" r="88" fill="url(#goldRim)" />

                {/* Tiny embossed dots on rim */}
                <g fill="hsl(32 70% 22%)" opacity="0.55">
                  {Array.from({ length: 32 }).map((_, i) => {
                    const a = (i / 32) * Math.PI * 2;
                    const cx = 100 + Math.cos(a) * 80;
                    const cy = 100 + Math.sin(a) * 80;
                    return <circle key={i} cx={cx} cy={cy} r="1.4" />;
                  })}
                </g>

                {/* Inner red wax */}
                <circle cx="100" cy="100" r="66" fill="url(#waxRed)" />
                {/* Thin gold inner ring */}
                <circle
                  cx="100"
                  cy="100"
                  r="66"
                  fill="none"
                  stroke="hsl(42 88% 65%)"
                  strokeWidth="1.2"
                  opacity="0.85"
                />
                {/* Glossy highlight */}
                <ellipse
                  cx="80"
                  cy="78"
                  rx="32"
                  ry="14"
                  fill="hsl(33 80% 92%)"
                  opacity="0.18"
                />
              </svg>

              {/* A & S in capital script */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                  className="font-script text-cream"
                  style={{
                    fontSize: "min(18vw, 90px)",
                    lineHeight: 1,
                    textShadow:
                      "0 2px 4px hsl(357 100% 8% / 0.7), 0 0 18px hsl(14 86% 45% / 0.35)",
                    letterSpacing: "0.02em",
                  }}
                >
                  A&nbsp;&amp;&nbsp;S
                </span>
              </div>
            </motion.div>

            {/* Curved TAP TO OPEN below seal */}
            <svg
              viewBox="0 0 200 80"
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: "calc(100% + 8px)", width: "min(70vw, 320px)" }}
              aria-hidden
            >
              <defs>
                <path
                  id="tapCurve"
                  d="M 18 18 A 90 90 0 0 0 182 18"
                  fill="none"
                />
              </defs>
              <text
                fill="hsl(33 64% 92%)"
                style={{
                  fontFamily: "'Cinzel', serif",
                  letterSpacing: "0.5em",
                  fontSize: "13px",
                }}
              >
                <textPath href="#tapCurve" startOffset="50%" textAnchor="middle">
                  TAP TO OPEN
                </textPath>
              </text>
            </svg>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Envelope;
