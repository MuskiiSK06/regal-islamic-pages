import lantern from "@/assets/lantern.png";

const Lanterns = () => (
  <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between px-2 md:px-10 z-0">
    <img
      src={lantern}
      alt=""
      width={512}
      height={768}
      loading="lazy"
      className="w-16 md:w-28 origin-top animate-sway opacity-90 drop-shadow-[0_8px_18px_rgba(180,130,40,0.35)]"
    />
    <img
      src={lantern}
      alt=""
      width={512}
      height={768}
      loading="lazy"
      style={{ animationDelay: "1.2s" }}
      className="w-16 md:w-28 origin-top animate-sway opacity-90 drop-shadow-[0_8px_18px_rgba(180,130,40,0.35)]"
    />
  </div>
);

export default Lanterns;
