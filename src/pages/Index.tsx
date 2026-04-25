import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, MapPin, Clock, Share2, CalendarPlus } from "lucide-react";
import arch from "@/assets/mughal-arch.png";
import couple from "@/assets/couple-illustration.png";
import Section from "@/components/wedding/Section";
import Divider from "@/components/wedding/Divider";
import Lanterns from "@/components/wedding/Lanterns";
import Envelope from "@/components/wedding/Envelope";

const EVENT = {
  title: "Walima — Amir & Sana",
  details: "Walima Reception of Amir Sohail Shaikh & Sana Khan",
  location: "Tandel Ground, Nerul, Navi Mumbai",
  start: "20260511T190000",
  end: "20260511T233000",
};

const icsHref = () => {
  const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${EVENT.title}\nDESCRIPTION:${EVENT.details}\nLOCATION:${EVENT.location}\nDTSTART:${EVENT.start}\nDTEND:${EVENT.end}\nEND:VEVENT\nEND:VCALENDAR`;
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;
};

const shareWhatsapp = () => {
  const text = encodeURIComponent(
    "You are cordially invited to the Walima of Amir Sohail Shaikh & Sana Khan — Monday, 11th May 2026, Tandel Ground, Nerul, Navi Mumbai, 7:30 PM – 11:30 PM."
  );
  window.open(`https://wa.me/?text=${text}`, "_blank");
};

const Index = () => {
  const [opened, setOpened] = useState(false);

  return (
    <main className="relative w-full">
      <AnimatePresence>
        {!opened && <Envelope key="env" onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {/* SECTION 1 — Hero */}
      <Section className="pt-0">
        <Lanterns />
        <div className="relative w-full max-w-2xl mx-auto pt-20 md:pt-28">
          <img
            src={arch}
            alt="Decorative Mughal arch"
            width={1024}
            height={1024}
            className="w-full opacity-95 select-none pointer-events-none animate-fade-in"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.4 }}
            className="absolute inset-x-0 top-[22%] sm:top-[24%] md:top-[25%] bottom-[18%] flex flex-col items-center justify-center px-[14%] sm:px-[16%] md:px-[18%] text-center"
          >
            <p
              className="font-script text-gold leading-[1.15] pb-1"
              style={{ fontSize: "clamp(1.75rem, 8vw, 3rem)" }}
            >
              Bismillah
            </p>
            <p
              className="font-display tracking-[0.15em] text-brown/80 mt-1"
              style={{ fontSize: "clamp(0.85rem, 3.5vw, 1.125rem)" }}
            >
              ﷽
            </p>
            <p
              className="font-serif italic text-brown/90 mt-2 leading-snug font-medium"
              style={{ fontSize: "clamp(0.8rem, 3.4vw, 1.15rem)" }}
            >
              Assalamualaikum<br />warahmatullahi wabarakatuh
            </p>
            <p
              className="font-serif text-brown/80 mt-2 leading-snug font-medium"
              style={{ fontSize: "clamp(0.7rem, 2.9vw, 1rem)" }}
            >
              In the name of Allah,<br />the most beneficent &amp; most merciful
            </p>
          </motion.div>
        </div>
        <p className="mt-10 text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-deep animate-shimmer font-display">
          Scroll to begin
        </p>
      </Section>

      {/* SECTION 2 — Invitation */}
      <Section>
        <Divider />
        <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-brown/85 font-medium">
          You are cordially invited to the
        </p>
        <h2 className="font-script text-6xl sm:text-7xl md:text-9xl text-gold mt-6 md:mt-8 leading-[1.15] pb-3 px-4">
          Walima
        </h2>
        <p className="font-display tracking-[0.4em] text-xs sm:text-sm md:text-base text-brown/75 mt-4">
          R E C E P T I O N
        </p>
        <Divider />
      </Section>

      {/* SECTION 3 — Couple Names */}
      <Section>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          <p className="font-display tracking-[0.4em] text-[11px] sm:text-xs text-brown/65 mb-6">
            T O G E T H E R &nbsp; F O R E V E R
          </p>
          <h2 className="font-script text-5xl sm:text-6xl md:text-8xl text-gold leading-[1.15] pb-2 break-words max-w-full">
            Amir Sohail<br />Shaikh
          </h2>
          <p className="font-script text-4xl sm:text-5xl md:text-7xl text-gold-deep my-3 md:my-4 leading-none">
            &amp;
          </p>
          <h2 className="font-script text-5xl sm:text-6xl md:text-8xl text-gold leading-[1.15] pb-2 break-words max-w-full">
            Sana Khan
          </h2>
          <Divider className="mt-8" />
        </motion.div>
      </Section>

      {/* SECTION 3.5 — Couple Illustration & Invitation Note */}
      <Section>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={couple}
          alt="Illustration of bride and groom in traditional wedding attire"
          width={768}
          height={1024}
          loading="lazy"
          className="w-44 sm:w-56 md:w-72 h-auto select-none pointer-events-none drop-shadow-[0_8px_20px_rgba(94,0,6,0.25)]"
        />
        <p className="font-display tracking-[0.3em] text-[10px] text-brown/60 mt-6 mb-4">
          O U R &nbsp; S T O R Y
        </p>
        <p className="font-serif italic text-base sm:text-lg md:text-xl text-brown/90 leading-relaxed max-w-xl px-2 font-medium">
          A beautiful new chapter of our lives is about to begin, filled with love,
          faith, and togetherness. As we step forward hand in hand, we carry dreams
          of a future built on trust, understanding, and endless support for one
          another. This journey is not just about two hearts uniting, but about
          creating a life full of shared moments, laughter, and cherished memories.
          With the blessings of our families and the grace of Allah, we begin this
          path with hope and gratitude. We warmly invite you to join us, celebrate
          our union, and be a part of the joy as our forever story unfolds.
        </p>
        <Divider className="mt-8" />
      </Section>

      {/* SECTION 4 — Family */}
      <Section>
        <div className="cream-card border border-gold/40 rounded-lg px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-16 max-w-xl w-full">
          <p className="font-display tracking-[0.4em] text-[11px] sm:text-xs text-brown/65 mb-8">
            W I T H &nbsp; B L E S S I N G S &nbsp; O F
          </p>
          <p className="font-serif text-base sm:text-lg md:text-xl text-brown/85 italic font-medium">Son of</p>
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-brown mt-1 font-medium">
            Mohammed Abullais Shaikh<br />&amp; Anwari Begam Shaikh
          </p>
          <Divider />
          <p className="font-serif text-base sm:text-lg md:text-xl text-brown/85 italic font-medium">Daughter of</p>
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-brown mt-1 font-medium">
            Haji Shamshulhuda Khan<br />&amp; Azizunnisa Khan
          </p>
        </div>
      </Section>

      {/* SECTION 5 — Event Details */}
      <Section>
        <p className="font-display tracking-[0.4em] text-xs text-brown/60 mb-3">
          S A V E   T H E   D A T E
        </p>
        <h3 className="font-script text-5xl sm:text-6xl md:text-7xl text-gold mb-10 leading-[1.15] pb-2">
          Join us
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            { Icon: Calendar, label: "When", value: "Monday\n11th May, 2026" },
            { Icon: Clock, label: "Time", value: "7:30 PM\n— 11:30 PM" },
            { Icon: MapPin, label: "Venue", value: "Tandel Ground\nNerul, Navi Mumbai" },
          ].map(({ Icon, label, value }) => (
            <div
              key={label}
              className="cream-card border border-gold/40 rounded-lg px-6 py-8 flex flex-col items-center"
            >
              <div className="h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-[var(--shadow-gold)]">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="font-display tracking-[0.3em] text-[10px] text-brown/60 mt-4">
                {label.toUpperCase()}
              </p>
              <p className="font-serif text-base md:text-lg text-brown mt-2 whitespace-pre-line leading-snug">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href={icsHref()}
            download="walima-amir-sana.ics"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground font-display tracking-[0.2em] text-xs shadow-[var(--shadow-gold)] hover:scale-105 transition-transform"
          >
            <CalendarPlus className="h-4 w-4" />
            ADD TO CALENDAR
          </a>
          <button
            onClick={shareWhatsapp}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gold-deep text-brown font-display tracking-[0.2em] text-xs hover:bg-gold/10 transition-colors"
          >
            <Share2 className="h-4 w-4" />
            SHARE ON WHATSAPP
          </button>
        </div>
      </Section>

      {/* SECTION 6 — Closing */}
      <Section>
        <Divider />
        <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-gold leading-[1.15] pb-3">
          Barakallah
        </h2>
        <p className="font-serif italic text-base sm:text-lg md:text-xl text-brown/85 mt-6 max-w-md font-medium">
          We look forward to celebrating this blessed occasion with you and your loved ones.
        </p>
        <p className="font-display tracking-[0.4em] text-[11px] sm:text-xs text-brown/65 mt-10">
          A M I R &nbsp; S O H A I L &nbsp; S H A I K H &nbsp;&nbsp;·&nbsp;&nbsp; S A N A &nbsp; K H A N
        </p>
        <Divider />
      </Section>
    </main>
  );
};

export default Index;
