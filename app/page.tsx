import Hero from "@/components/Hero";
import { HeroParallaxDemo } from "@/components/ProjetsParallax";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import SkillSection from "@/components/SkillSection";
import Image from "next/image";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <header className="absolute">
        <Navbar/>
      </header>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
        <Hero/>
        <About/>
        <HeroParallaxDemo/>
        <SkillSection/>
        <Footer/>
      </main>
    </>  
  );
}
