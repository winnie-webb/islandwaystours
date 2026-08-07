import Image from "next/image";
import { FaUsers, FaSnowflake, FaSuitcase, FaShieldAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { credentials } from "../data/site";

const ICONS = [FaUsers, FaShieldAlt, FaSnowflake, FaSuitcase];

/** What every booking includes, next to a photo of the actual vehicle. */
export default function FleetSection() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="shell grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
        <figure className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lift sm:aspect-[4/3] lg:aspect-[4/5]">
          <Image
            src="/local/hero-2.jpg"
            alt="An Island Ways Tours group with their private air-conditioned van"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/55 to-transparent p-6 pt-16">
            <p className="font-display text-lg font-semibold text-white">
              One group, one vehicle
            </p>
            <p className="mt-1 text-sm text-white/65">
              From a car for two to a bus for a family reunion
            </p>
          </figcaption>
        </figure>

        <div>
          <SectionHeading
            eyebrow="What you get"
            title="Included in every booking."
            description="No add-ons at the end of the day and nothing quietly left off the quote."
          />

          <ul className="space-y-3">
            {credentials.map((c, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <li
                  key={c.title}
                  className="flex gap-4 rounded-2xl border border-ink/[0.07] bg-white p-5 shadow-card"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-palm-50 text-palm-600">
                    <Icon className="text-base" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                      {c.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
