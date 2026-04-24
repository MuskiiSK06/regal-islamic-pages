import divider from "@/assets/divider.png";

const Divider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center w-full my-6 ${className}`}>
    <img
      src={divider}
      alt=""
      width={1024}
      height={512}
      loading="lazy"
      className="w-64 md:w-80 opacity-80 select-none pointer-events-none"
    />
  </div>
);

export default Divider;
