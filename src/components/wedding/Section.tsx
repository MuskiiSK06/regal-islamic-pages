import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className = "", id }: SectionProps) => (
  <section
    id={id}
    className={`relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-16 overflow-hidden ${className}`}
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center"
    >
      {children}
    </motion.div>
  </section>
);

export default Section;
