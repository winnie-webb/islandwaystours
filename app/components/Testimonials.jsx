import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../data/site";
import SectionHeading from "./SectionHeading";
import ElfSightWidget from "./Elfsight";

export default function Testimonials() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="shell">
        <SectionHeading
          align="center"
          eyebrow="Guest reviews"
          title="The same three words, over and over."
          description="Punctual. Patient. Private. Here's what guests say after the day is done."
        />

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="break-inside-avoid rounded-2xl border border-ink/[0.07] bg-white p-6 shadow-card transition-shadow hover:shadow-lift"
            >
              <FaQuoteLeft className="text-lg text-palm-200" />
              <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-ink/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between gap-4 border-t border-ink/[0.07] pt-4">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink">{t.author}</p>
                  <p className="truncate text-xs text-ink/45">{t.trip}</p>
                </div>
                <div className="flex shrink-0 text-gold-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="text-[0.7rem]" />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Live review feed — renders only once Elfsight's script has loaded. */}
        <div className="mt-12">
          <ElfSightWidget />
        </div>
      </div>
    </section>
  );
}
