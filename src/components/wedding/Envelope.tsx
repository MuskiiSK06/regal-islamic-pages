import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail } from "lucide-react";
import waxSeal from "@/assets/wax-seal.png";

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
              whileHover={{ scale: 1.08, filter: "drop-shadow(0 0 18px hsl(14 86% 45% / 0.55))" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 h-20 w-20 md:h-28 md:w-28"
              style={{
                filter:
                  "drop-shadow(0 8px 18px hsl(4 92% 18% / 0.55)) drop-shadow(0 0 10px hsl(14 86% 45% / 0.25))",
              }}
            >
              <img
                src={waxSeal}
                alt="Royal Mughal wax seal with A & S monogram"
                width={256}
                height={256}
                className="h-full w-full object-contain select-none pointer-events-none"
                draggable={false}
              />
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
