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
        <div className="relative w-full max-w-2xl mx-auto pt-20 md:pt-24">
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
            className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-10 md:px-20 text-center"
          >
            <p className="font-script text-xl sm:text-2xl md:text-4xl text-gold leading-tight">
              Bismillah
            </p>
            <p className="font-display text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-brown/80 mt-1 md:mt-3">
              ﷽
            </p>
            <p className="font-serif italic text-[11px] sm:text-sm md:text-lg text-brown/85 mt-2 md:mt-4 leading-snug">
              Assalamualaikum<br />warahmatullahi wabarakatuh
            </p>
            <p className="font-serif text-[9px] sm:text-[10px] md:text-xs text-brown/70 mt-2 md:mt-3 max-w-[10rem] sm:max-w-[12rem] md:max-w-xs leading-snug">
              In the name of Allah,<br />the most beneficent &amp; most merciful
            </p>
          </motion.div>
        </div>
        <p className="mt-10 text-xs uppercase tracking-[0.3em] text-gold-deep animate-shimmer">
          Scroll to begin
        </p>
      </Section>

      {/* SECTION 2 — Invitation */}
      <Section>
        <Divider />
        <p className="font-serif italic text-lg md:text-2xl text-brown/80">
          You are cordially invited to the
        </p>
        <h2 className="font-script text-7xl md:text-9xl text-gold mt-4 md:mt-6 leading-none">
          Walima
        </h2>
        <p className="font-display tracking-[0.4em] text-xs md:text-sm text-brown/70 mt-4">
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
          className="flex flex-col items-center"
        >
          <p className="font-display tracking-[0.4em] text-xs text-brown/60 mb-6">
            T O G E T H E R   F O R E V E R
          </p>
          <h2 className="font-script text-6xl md:text-8xl text-gold leading-tight">
            Amir Sohail
          </h2>
          <p className="font-script text-5xl md:text-7xl text-gold-deep my-2 md:my-4">
            &amp;
          </p>
          <h2 className="font-script text-6xl md:text-8xl text-gold leading-tight">
            Sana Khan
          </h2>
          <Divider className="mt-8" />
        </motion.div>
      </Section>

      {/* SECTION 4 — Family */}
      <Section>
        <div className="cream-card border border-gold/40 rounded-lg px-8 py-12 md:px-14 md:py-16 max-w-xl">
          <p className="font-display tracking-[0.4em] text-xs text-brown/60 mb-8">
            W I T H   B L E S S I N G S   O F
          </p>
          <p className="font-serif text-base md:text-lg text-brown/85 italic">Son of</p>
          <p className="font-serif text-lg md:text-2xl text-brown mt-1">
            Mohammed Abullais Shaikh<br />&amp; Anwari Begam Shaikh
          </p>
          <Divider />
          <p className="font-serif text-base md:text-lg text-brown/85 italic">Daughter of</p>
          <p className="font-serif text-lg md:text-2xl text-brown mt-1">
            Haji Shamshulhuda Khan<br />&amp; Azizunnisa Khan
          </p>
        </div>
      </Section>

      {/* SECTION 5 — Event Details */}
      <Section>
        <p className="font-display tracking-[0.4em] text-xs text-brown/60 mb-3">
          S A V E   T H E   D A T E
        </p>
        <h3 className="font-script text-5xl md:text-6xl text-gold mb-10">
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
        <p className="font-script text-5xl md:text-7xl text-gold leading-tight">
          Barakallah
        </p>
        <p className="font-serif italic text-base md:text-xl text-brown/80 mt-6 max-w-md">
          We look forward to celebrating this blessed occasion with you and your loved ones.
        </p>
        <p className="font-display tracking-[0.4em] text-[10px] md:text-xs text-brown/60 mt-10">
          A M I R   &nbsp;&amp;&nbsp;   S A N A &nbsp;&nbsp;·&nbsp;&nbsp; 2 0 2 6
        </p>
        <Divider />
      </Section>
    </main>
  );
};

export default Index;
