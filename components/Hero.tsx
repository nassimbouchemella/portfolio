import React from 'react'
import { Spotlight } from '@/components/ui/Spotlight'
import { CanvasRevealEffect } from './ui/canvas-reveal-effect'
import Card from './ui/Card'
import { TextHoverEffect } from './ui/text-hover-effect'

const Hero = () => {
  return (
    <div className='h-[40rem] flex items-center justify-center'>
      <TextHoverEffect text="Nassim" />
    </div>
  )
}

export default Hero