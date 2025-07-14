"use client"
import { Projets } from "@/components/Projets";
import SkillSection from "@/components/SkillSection";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
        <Hero/>
        <About/>
        <Projets/>
        <SkillSection/>
        <Footer/>
      </main>
    </>  
  );
}
