"use client";
import React from 'react'
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Button from './ui/Button';
import {skillsItem} from '@/data/SkillsItem';
import { FaReact } from 'react-icons/fa';

const Card = ({
  title,
  icon1,
  icon2,
  children,
}: {
  title: string;
  icon1?: React.ReactNode;
  icon2?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative aspect-square"
    >
 
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
 
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center">
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover/canvas-card:opacity-0 group-hover/canvas-card:-translate-y-5 group-hover/canvas-card:scale-150 transition-transform ease-out">
          <div className="text-5xl text-white">{icon1}</div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-5 group-hover/canvas-card:scale-150 transition-transform ease-out">
          <div className="text-5xl text-white">{icon2}</div>
        </div>

        <h2 className="mt-20 text-white text-sm sm:text-base font-bold opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition duration-300">
          {title}
        </h2>
      </div>
    </div>
  );
};

const SkillSection = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("language");

  const filteredSkills = skillsItem.filter(
    (skill) => skill.category === selectedCategory
  );

  return (
    <div className='flex flex-col bg-[#101012] p-10'>
      <div className='bg-transparent w-full text-center text-white text-2xl'>
        <h1>
          Découvrez une liste de mes compétences
        </h1>
      </div>
      
      <div className='flex flex-row bg-[#101012] p-10 justify-center items-center'>
        <div className='flex flex-col justify-around gap-4 w-1/3 h-full'>
          <Button title="Language" onClick={() => setSelectedCategory("language")} />
          <Button title="Framework" onClick={() => setSelectedCategory("framework")} />
          <Button title="Design" onClick={() => setSelectedCategory("design")} />
        </div>

        <div className=" grid grid-cols-5 auto-rows-[1fr] w-2/3 h-full items-start">
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
              >
                <Card title={skill.name} icon1={skill.icon1} icon2={skill.icon2}>
                  <CanvasRevealEffect
                    animationSpeed={1.0}
                    colors={[skill.color]}
                    dotSize={2}
                    showGradient={true}
                  />
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};


export default SkillSection