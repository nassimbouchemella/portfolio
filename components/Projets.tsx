"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { projets } from "@/data/projets";
import ProjectsMobile from "./ProjectsMobile";

export function Projets() {
  return <>
          <HeroParallax products={projets}/>;
          <ProjectsMobile/>
        </>
  
}
export default Projets


