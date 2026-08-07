import Link from "next/link";
import Image from "next/image";
import { FaClock, FaArrowRight } from "react-icons/fa";
import { formatPrice, getCategoryShort } from "../products/product";

/**
 * Catalogue thumbnails are small (300×300) and some have text baked into the
 * artwork, so the image sits in a square frame with only a light bottom scrim —
 * enough to float the duration chip without washing out the picture.
 */
export default function TourCard({ tour, priority = false, className = "" }) {
  return (
    <Link
      href={`/product/${tour.id}`}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-ink/[0.07] bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${className}`}
    >
      <div className="relative aspect-square overflow-hidden bg-ink/5">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          priority={priority}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22rem"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/70 to-transparent"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ink/70 backdrop-blur">
          {getCategoryShort(tour.category)}
        </span>
        <span className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs font-medium text-white">
          <FaClock className="text-[0.65rem]" />
          {tour.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-3 font-display text-[1.05rem] font-semibold leading-snug text-ink transition-colors group-hover:text-palm-700">
          {tour.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-ink/55">
          {tour.desc}
        </p>

        <div className="mt-5 flex items-end justify-between border-t border-ink/[0.07] pt-4">
          <div>
            <span className="block text-[0.68rem] font-medium uppercase tracking-wider text-ink/45">
              From
            </span>
            <span className="font-display text-2xl font-semibold text-palm-700">
              {formatPrice(tour.priceLowest)}
            </span>
            <span className="ml-1 text-xs text-ink/45">/ person</span>
          </div>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-palm-50 text-palm-700 transition-all duration-300 group-hover:bg-palm-600 group-hover:text-white">
            <FaArrowRight className="text-xs" />
          </span>
        </div>
      </div>
    </Link>
  );
}
