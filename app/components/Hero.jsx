"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowRight, FaPlane, FaShip, FaUmbrellaBeach } from "react-icons/fa";
import { site } from "../data/site";

/** Real guest photos, not stock — the ones with the most room for a headline. */
const SLIDES = [
  { src: "/local/hero-4.jpg", alt: "Guests rafting the Martha Brae with Island Ways Tours" },
  { src: "/local/hero-1.jpg", alt: "An Island Ways Tours group ready for river tubing" },
  { src: "/local/hero-7.jpg", alt: "An Island Ways Tours group beside the private tour van" },
];

const QUICK_LINKS = [
  { href: "/category/at", label: "Airport transfers", Icon: FaPlane },
  { href: "/category/cse", label: "Cruise excursions", Icon: FaShip },
  { href: "/category/abc", label: "Beaches & attractions", Icon: FaUmbrellaBeach },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative -mt-[4.5rem] flex min-h-[44rem] items-end overflow-hidden bg-ink lg:-mt-20 lg:min-h-[48rem]">
      {/* Crossfading backdrop */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover object-center ${
              i === index ? "animate-slow-zoom" : ""
            }`}
          />
        </div>
      ))}

      {/* Legibility scrims */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/35 to-transparent"
      />

      <div className="shell relative w-full pb-14 pt-32 lg:pb-20 lg:pt-40">
        <div className="max-w-3xl">
          <div className="flex animate-fade-up flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Locally owned &amp; island-wide
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
              {site.tagline}
            </span>
          </div>

          <h1
            className="mt-6 animate-fade-up font-display text-[2.75rem] font-semibold leading-[1.03] text-white sm:text-6xl lg:text-[4.75rem]"
            style={{ animationDelay: "80ms" }}
          >
            See Jamaica the
            <br />
            <span className="text-gold-400">island way.</span>
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-white/75"
            style={{ animationDelay: "160ms" }}
          >
            Private airport transfers, island tours and cruise-pier excursions —
            from Montego Bay to Ocho Rios, Negril and the South Coast. No shared
            vans, no rushed schedules, and the most affordable rates on the
            island.
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <Link href="/tours" className="btn-gold group">
              Explore tours
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/category/at" className="btn-ghost-light">
              Book an airport transfer
            </Link>
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="btn text-white/80 hover:text-white"
            >
              <FaWhatsapp className="text-lg" />
              {site.contact.phone}
            </a>
          </div>

          {/* Quick jumps into the three things people actually arrive looking for */}
          <div
            className="mt-12 flex animate-fade-up flex-wrap items-center gap-2.5"
            style={{ animationDelay: "320ms" }}
          >
            {QUICK_LINKS.map(({ href, label, Icon }) => (
              <Link
                key={href}
                href={href}
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 text-sm font-medium text-white/80 backdrop-blur transition hover:border-white/35 hover:bg-white/15 hover:text-white"
              >
                <Icon className="text-gold-400" />
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Slide indicators */}
        <div
          className="mt-12 flex animate-fade-up gap-2"
          style={{ animationDelay: "400ms" }}
        >
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-gold-400" : "w-5 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
