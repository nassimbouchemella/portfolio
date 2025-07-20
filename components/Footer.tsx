import React from 'react'
import Button from './ui/Button'
import { CiLocationArrow1 } from "react-icons/ci";
import { BackgroundBeams } from './ui/background-beams';
import { socials } from '@/data/socials';

const Footer = () => {
  return (
    <footer className='relative w-[100vw] h-[50vh] bg-black flex flex-col justify-center' id="contact ">
        <BackgroundBeams className='absolute inset-0 z-0 w-full h-full'/>
        <div className='relative z-10 w-full flex  flex-col justify-center items-center h-full gap-6'>
          <h1 className='font-cremisse text-white text-4xl font-bold'>
            Vous êtes <span className='text-purple'>intéressés </span> ?
          </h1>
          <a href='mailto:nassim.bouchemella@gmail.com' className='m-3 p-2'>
            <Button 
            title='Prenons contact'
            icon={<CiLocationArrow1 color='white'/>}
            classNameButton="bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
            />
          </a>
          <div className='flex items-center md:gap-3 gap-6 '>
            {socials.map((social)=>
              <div key={social.id}>
              <a href={social.link}>
                <div className="flex  flex-col justify-center items-center cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 w-[4vw] h-[4vh] border border-black-300" key={social.id}>
                  {social.icon}
                </div>
              </a>
            </div>
            )}
          </div>
        </div>
    </footer>
  )
}

export default Footer