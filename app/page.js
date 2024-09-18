import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
    </>
  );
}
