import Image from "next/image";
import logo from "../../public/logo.jpg";

/**
 * The supplied logo artwork is a square JPEG on a white field, which reads
 * poorly against the dark hero. So the mark is used at a small fixed size in a
 * rounded white tile, paired with a wordmark drawn in markup — that part can
 * invert cleanly and stays crisp at any size.
 */
export default function Logo({ light = false, className = "" }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-ink/10">
        <Image
          src={logo}
          alt=""
          width={44}
          height={44}
          className="h-full w-full object-cover"
          priority
        />
      </span>

      <span className="leading-none">
        <span
          className={`block font-display text-[1.15rem] font-semibold tracking-tight transition-colors ${
            light ? "text-white" : "text-ink"
          }`}
        >
          Island Ways
        </span>
        <span
          className={`mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.22em] transition-colors ${
            light ? "text-gold-400" : "text-palm-600"
          }`}
        >
          Tours Jamaica
        </span>
      </span>
    </span>
  );
}
