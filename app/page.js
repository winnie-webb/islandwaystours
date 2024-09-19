import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import ElfSightWidget from "./components/Elfsight";
import Category from "./components/Category";
import { filterProductByCategory } from "./products/product";
export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <ElfSightWidget />
      <Category
        title="Most Popular Tours"
        data={filterProductByCategory("mpt")}
      ></Category>
      <Category
        title="Airport Transfers"
        data={filterProductByCategory("at")}
      ></Category>
    </>
  );
}
