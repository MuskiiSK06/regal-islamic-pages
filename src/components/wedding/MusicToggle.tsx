import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(
      "https://cdn.pixabay.com/audio/2022/10/18/audio_31a1b8b1cf.mp3"
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Mute music" : "Play music"}
      className="fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full bg-gradient-gold text-primary-foreground shadow-[var(--shadow-gold)] flex items-center justify-center hover:scale-110 transition-transform"
    >
      {playing ? <Music className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
    </button>
  );
};

export default MusicToggle;
