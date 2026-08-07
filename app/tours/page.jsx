import PageHeader from "../components/PageHeader";
import TourGrid from "../components/TourGrid";
import CtaBand from "../components/CtaBand";
import { getAllProducts } from "../products/product";

export const metadata = {
  title: "All Tours & Transfers",
  description:
    "Every tour, excursion and airport transfer Island Ways Tours runs across Jamaica — filter by category, price or keyword.",
};

export default function ToursPage() {
  const tours = getAllProducts();

  return (
    <>
      <PageHeader
        eyebrow="The full catalogue"
        title="Every tour and transfer we run."
        description={`${tours.length} routes across the island — from a ten-dollar run to Scotchies jerk centre to a full South Coast day at YS Falls and the Pelican Bar.`}
        image="/local/hero-1.jpg"
        breadcrumbs={[{ label: "Tours" }]}
      />

      <section className="shell py-14 lg:py-20">
        <TourGrid tours={tours} />
      </section>

      <CtaBand />
    </>
  );
}
