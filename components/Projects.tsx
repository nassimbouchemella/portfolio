import React from 'react'
import {projects} from '@/data/projects'
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const Projects = () => {
  const cards = projects.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

    return (
    <div className="w-full h-full py-20 bg-black-100">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 dark:text-neutral-200 font-sans">
        Découvrez mes récents projets.
      </h2>
      <Carousel items={cards} />
    </div>
  )
}

export default Projects