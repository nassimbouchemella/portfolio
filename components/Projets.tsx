"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { projets } from "@/data/projets";

export function Projets() {
  return <HeroParallax products={projets}/>;
}
export default Projets


