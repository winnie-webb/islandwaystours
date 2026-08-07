import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCompass, FaHeart } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import FleetSection from "../components/FleetSection";
import StatsBar from "../components/StatsBar";
import CtaBand from "../components/CtaBand";
import { site, promise } from "../data/site";

export const metadata = {
  title: "About Us",
  description:
    "Island Ways Tours is a locally owned private tour and transfer company based in Montego Bay, running airport transfers, island tours and cruise-pier excursions across Jamaica.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get to know us"
        title="Jamaica, shown to you by Jamaicans."
        description={site.about}
        image="/local/hero-2.jpg"
        breadcrumbs={[{ label: "About Us" }]}
      />

      <StatsBar />

      {/* Story */}
      <section className="shell py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A private tour agency, not a booking desk."
              description="We drive the routes ourselves. That's the whole difference."
            />
            <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink/70">
              <p>
                Island Ways Tours is a locally owned private tour and
                transportation company based in Montego Bay, running airport
                transfers, island tours and cruise-pier pickups across the whole
                of Jamaica — Ocho Rios, Negril, Falmouth, the South Coast and
                Kingston included.
              </p>
              <p>
                Every booking is your group alone in an air-conditioned vehicle
                with a driver who knows the island and is happy to talk about it.
                No shared vans, no hotel-hopping pickup circuit, and no fixed
                departure time you have to make.
              </p>
              <p>
                Because you&apos;re booking us directly rather than through a
                resort tour desk, you skip the markup as well. That&apos;s how a
                run to Scotchies starts at ten dollars a head and a full combo day
                still costs less than the same attractions booked apart.
              </p>
            </div>

            <Link href="/tours" className="btn-primary group mt-8">
              Browse the catalogue
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <figure className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl shadow-card">
              <Image
                src="/local/hero-1.jpg"
                alt="An Island Ways Tours group before river tubing"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </figure>
            <figure className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
              <Image
                src="/local/hero-5.jpg"
                alt="Guests collected from the cruise pier in Falmouth"
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="object-cover"
              />
            </figure>
            <figure className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
              <Image
                src="/local/hero-4.jpg"
                alt="Guests rafting the Martha Brae"
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="object-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="relative overflow-hidden bg-ink py-16 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grain opacity-[0.04]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-palm-600/20 blur-3xl"
        />
        <div className="shell relative">
          <SectionHeading
            light
            align="center"
            eyebrow="How we work"
            title="Three things we never compromise on."
          />
          <div className="grid gap-5 sm:grid-cols-3">
            {promise.map((p, i) => (
              <div
                key={p.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-gold-400/30 bg-palm-600/25 font-display text-base font-semibold text-gold-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {p.label}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-white/60">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FleetSection />

      {/* Mission & vision */}
      <section className="shell py-16 lg:py-24">
        <SectionHeading
          align="center"
          eyebrow="What drives us"
          title="Our mission and vision."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            { Icon: FaCompass, title: "Our mission", body: site.mission },
            { Icon: FaHeart, title: "Our vision", body: site.vision },
          ].map(({ Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-ink/[0.07] bg-white p-8 shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-palm-50 text-palm-600">
                <Icon className="text-lg" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-3 text-[1.02rem] leading-relaxed text-ink/65">
                {body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
