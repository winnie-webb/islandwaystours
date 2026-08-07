import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { promise, site } from "../data/site";
import SectionHeading from "./SectionHeading";

/**
 * The three-part promise, paired with a collage of real guest photos rather
 * than stock scenery — it's the strongest proof the company has.
 */
export default function PromiseSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.04]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 h-[30rem] w-[30rem] rounded-full bg-palm-600/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl"
      />

      <div className="shell relative grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
        <div>
          <SectionHeading
            light
            eyebrow="Why book direct"
            title="Your group, your vehicle, your day."
            description="Booking through the resort desk means a shared van, a fixed departure and a markup on top. Booking with us means none of the three."
          />

          <ol className="mt-2 space-y-1">
            {promise.map((p, i) => (
              <li
                key={p.label}
                className="group flex gap-5 rounded-2xl p-4 transition-colors hover:bg-white/[0.04]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-gold-400/30 bg-palm-600/25 font-display text-lg font-semibold text-gold-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {p.label}
                  </h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-white/60">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <Link href="/about-us" className="btn-gold group mt-8">
            More about {site.name}
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Guest photo collage */}
        <div className="relative grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-10">
            <figure className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/local/hero-6.jpg"
                alt="Guests met at their resort by an Island Ways Tours driver"
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="object-cover"
              />
            </figure>
            <figure className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/local/hero-3.jpg"
                alt="An Island Ways Tours group at Devon House in Kingston"
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="object-cover"
              />
            </figure>
          </div>
          <div className="space-y-4">
            <figure className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/local/hero-8.jpg"
                alt="Guests relaxing at a stop with their Island Ways Tours guide"
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="object-cover"
              />
            </figure>
            <figure className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/local/hero-7.jpg"
                alt="An Island Ways Tours group beside the private air-conditioned van"
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/50 to-transparent p-4 pt-10">
                <span className="block text-sm font-semibold text-white">
                  Private &amp; air-conditioned
                </span>
                <span className="block text-[0.7rem] text-white/60">
                  Sized to your group, every trip
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Sits bottom-left, clear of the caption on the right-hand tile. */}
          <div className="absolute -bottom-5 left-4 w-[12.5rem] rounded-2xl border border-white/10 bg-ink-700/95 p-4 text-center shadow-lift backdrop-blur">
            <p className="font-display text-3xl font-semibold text-gold-400">
              Pay later
            </p>
            <p className="mt-1 text-[0.7rem] uppercase tracking-wider text-white/55">
              Card online or cash on the day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
