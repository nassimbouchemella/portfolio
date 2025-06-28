import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black">
      <section>
        <Navbar/>
      </section>
      <Hero/>
    </main>
  );
}
