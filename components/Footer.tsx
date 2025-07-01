import React from 'react'
import Button from './ui/Button'
import { CiLocationArrow1 } from "react-icons/ci";
import { BackgroundBeams } from './ui/background-beams';
import { socials } from '@/data/socials';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='absolute w-[100vw] h-[50vh] bg-black flex flex-col justify-center' id="contact ">
        <BackgroundBeams className='absolute inset-0 z-0 w-full h-full'/>
        <div className='relative z-10 w-full flex  flex-col justify-center items-center h-full gap-6'>
          <h1 className='text-white'>
            Une offre de <span className='text-purple'> stage ? </span>
          </h1>
          <a href='mailto:nassim.bouchemella@gmail.com'>
            <Button 
            title='Lets get in touch'
            icon={<CiLocationArrow1 />}
            />
          </a>
          <div className='flex items-center md:gap-3 gap-6'>
            {socials.map((social)=>
              <>
              <div className="flex  flex-col justify-center items-center cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 w-[5vw] h-[5vh] border border-black-300" key={social.id}>
                <FaGithub color='white' size={30}/> 
              </div>
            </>
            )}
          </div>
        </div>
    </footer>
  )
}

export default Footer