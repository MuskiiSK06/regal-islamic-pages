import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail } from "lucide-react";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    // Allow flap + letter animation to play before revealing invitation
    setTimeout(() => onOpen(), 1700);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="envelope-cover"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-background via-secondary to-background px-6"
      >
        {/* Decorative top text */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-script text-3xl md:text-5xl text-gold mb-3"
        >
          Bismillah
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display tracking-[0.3em] text-[10px] md:text-xs text-foreground/70 mb-10"
        >
          A   S P E C I A L   I N V I T A T I O N
        </motion.p>

        {/* Envelope */}
        <button
          onClick={handleOpen}
          aria-label="Open invitation"
          className="relative w-[280px] h-[190px] md:w-[420px] md:h-[290px] cursor-pointer group"
          style={{ perspective: "1200px" }}
        >
          {/* Envelope body */}
          <div
            className="absolute inset-0 rounded-md shadow-[var(--shadow-gold)] border border-foreground/30"
            style={{ background: "var(--gradient-envelope)" }}
          >
            {/* Bottom triangular folds (visual seams) */}
            <div className="absolute inset-0 overflow-hidden rounded-md">
              <div
                className="absolute bottom-0 left-0 w-1/2 h-full origin-bottom-left"
                style={{
                  background: "hsl(var(--foreground) / 0.18)",
                  clipPath: "polygon(0 100%, 100% 100%, 0 0)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-1/2 h-full origin-bottom-right"
                style={{
                  background: "hsl(var(--foreground) / 0.18)",
                  clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
                }}
              />
            </div>

            {/* Wax seal */}
            <motion.div
              initial={{ scale: 1 }}
              animate={opened ? { scale: 0, opacity: 0 } : { scale: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 h-16 w-16 md:h-24 md:w-24 rounded-full flex items-center justify-center font-display font-semibold tracking-[0.15em] text-base md:text-xl text-primary-foreground border-2 border-primary-foreground/50 whitespace-nowrap"
              style={{
                background:
                  "radial-gradient(circle at 30% 25%, hsl(14 86% 55%) 0%, hsl(4 92% 32%) 45%, hsl(357 100% 18%) 100%)",
                boxShadow:
                  "inset -4px -6px 12px hsl(357 100% 10% / 0.55), inset 4px 6px 10px hsl(33 64% 90% / 0.25), 0 8px 22px hsl(4 92% 18% / 0.55), 0 0 24px hsl(14 86% 45% / 0.35)",
                textShadow: "0 1px 2px hsl(357 100% 10% / 0.6)",
              }}
            >
              A&nbsp;&amp;&nbsp;S
            </motion.div>
          </div>

          {/* Letter sliding up */}
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={opened ? { y: -120, opacity: 1 } : { y: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="absolute left-[6%] right-[6%] top-[10%] bottom-[10%] z-10 rounded-sm bg-gradient-to-b from-secondary to-background border border-foreground/20 flex flex-col items-center justify-center px-4"
          >
            <p className="font-script text-xl md:text-3xl text-gold leading-none">
              Amir &amp; Sana
            </p>
            <div className="h-px w-16 md:w-24 bg-foreground/40 my-2" />
            <p className="font-display tracking-[0.3em] text-[8px] md:text-[10px] text-foreground/70">
              W A L I M A &nbsp; · &nbsp; 2 0 2 6
            </p>
          </motion.div>

          {/* Top flap (opens on click) */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={opened ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute left-0 right-0 top-0 h-1/2 z-20 origin-top"
            style={{
              transformStyle: "preserve-3d",
              background: "var(--gradient-envelope)",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              borderTop: "1px solid hsl(var(--foreground) / 0.3)",
            }}
          />

          {/* Hint */}
          {!opened && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap font-display tracking-[0.3em] text-[10px] text-foreground/70 group-hover:text-accent transition-colors flex items-center gap-2"
            >
              <Mail className="h-3 w-3" />
              T A P &nbsp; T O &nbsp; O P E N
            </motion.p>
          )}
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Envelope;
