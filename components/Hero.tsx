import React from 'react'
import { Spotlight } from '@/components/ui/Spotlight'
import { CanvasRevealEffect } from './ui/canvas-reveal-effect'
import { TextHoverEffect } from './ui/text-hover-effect'
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';

const Hero = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-black-100 ">
      <div>
        <div className='h-[50vh] flex items-center justify-center z-10 relative'>
        <TextHoverEffect text="Nassim"/>
        </div>
      </div>
      <div className=' absolute w-full h-full opacity-30 z-0'>
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] dark:bg-black"></div>
        </div>
    </div>
  )
}

export default Hero