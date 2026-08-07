import Link from "next/link";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import CategoryChips from "./components/CategoryChips";
import TourRail from "./components/TourRail";
import PromiseSection from "./components/PromiseSection";
import FleetSection from "./components/FleetSection";
import DestinationsGrid from "./components/DestinationsGrid";
import Testimonials from "./components/Testimonials";
import FaqAccordion from "./components/FaqAccordion";
import CtaBand from "./components/CtaBand";
import SectionHeading from "./components/SectionHeading";
import TourCard from "./components/TourCard";
import { getProductsByCategory, sortByPrice } from "./products/product";
import { faqs } from "./data/site";

export default function Home() {
  const popular = sortByPrice(getProductsByCategory("mpt"));
  const transfers = sortByPrice(getProductsByCategory("at"));
  const combos = sortByPrice(getProductsByCategory("ctp"));

  return (
    <>
      <Hero />
      <StatsBar />

      <TourRail
        eyebrow="Guest favourites"
        title="The days people book twice."
        description="Dunn's River, Doctor's Cave, Scotchies jerk centre — the ones that end up in the photo album."
        href="/category/mpt"
        tours={popular}
      />

      <div className="shell">
        <div className="hairline" />
      </div>

      <TourRail
        eyebrow="Airport transfers"
        title="From Sangster to your front door."
        description="Flat rates to every resort area on the island. Flight tracked, driver waiting, luggage handled."
        href="/category/at"
        tours={transfers}
      />

      <PromiseSection />
      <CategoryChips />

      <div className="bg-sand py-16 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Two in one day"
            title="Combo packages, without the rush."
            description="Our most-requested build: pair two or three attractions into a single day and pay far less than booking them apart."
            href="/category/ctp"
          />
          <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
            {combos.slice(0, 4).map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                className="w-[18rem] shrink-0 snap-start sm:w-[20rem] lg:w-auto"
              />
            ))}
          </div>
        </div>
      </div>

      <DestinationsGrid />
      <FleetSection />
      <Testimonials />

      <section className="shell py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Good to know"
              title="Questions we get asked most."
              description="Anything else, just message us — someone answers seven days a week."
            />
            <Link href="/contact-us" className="btn-primary">
              Ask us something
            </Link>
          </div>
          <FaqAccordion items={faqs.slice(0, 6)} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
