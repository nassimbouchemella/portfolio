"use client"
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { testimonials } from '@/data/testimonials'
import Particles from './ui/Particles'
import { cn } from '@/lib/utils'
import Button from './ui/Button'

const Hero = () => {
  return (
    <div className='relative w-[100vw] h-[100vh] text-white flex justify-center items-center flex-col overflow-hidden'>
        <h1 className='w-[50vw] text-center text-[20vw] font-cremisse z-10'>
            Nassim
        </h1>
        <div className='w-full flex flex-row justify-center gap-8'>
          <p className='pb-10 font-cremisse text-3xl'>étudiant à l'école de technologie supérieur de Montréal</p>
        </div>
          <div className='flex justify-center z-10'>
            <a href="#about" className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-9 py-5 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
              Cliquez pour scroller
            </a>
          </div>  
          <div style={{ width: '100%', height: '100vh', position: 'absolute', opacity:"0.5"}}>
          <Particles
            particleColors={['#ffffff', '#9d00ff']}
            particleCount={800}
            particleSpread={10}
            speed={0.05}
            particleBaseSize={80}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
          </div>
    </div>
  )
}

export default Hero