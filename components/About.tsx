"use client"
import React from 'react'
import TiltedCard from './ui/TiltedCard'

const About = () => {
  return (
     <section id="about" className='flex flex-col justify-around items-center xl:flex-row w-[100vw] xl:h-[100vh] relative gap-10 mb-20 xl:my-40 '>
      <div className='flex justify-center items-center w-[40vw] h-[vh] z-10 lg:ml-20'>
        <TiltedCard
          imageSrc="/profil.png"
          altText="Profil picture"
          rotateAmplitude={20}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
        />
          
      </div>
      <div className='relative flex justify-center items-center h-[vh] w-[70vw] mx-auto text-white z-10'>
        <ul className='flex flex-col gap-10 font-cremisse text-2xl xl:text-4xl break-words'>
          <li className='text-center hidden xl:block w-[50vw]'>
            Étudiant à l&apos;ETS. Passionné de programmation, d&apos;informatique, de design et d&apos;audiovisuel.<br/>
            Autodidacte toujours curieux. J&apos;explore de nouvelles technologies et je repousse mes limites à travers des projets créatifs.<br/>
            Dynamique et super sociable. J&apos;aime travailler en équipe et partager des idées pour aller plus loin.
          </li>
          <li className='text-center xl:hidden'>
            Étudiant à l&apos;ETS. Passionné de programmation, d&apos;informatique, de design et d&apos;audiovisuel.
            Autodidacte toujours curieux. J&apos;explore de nouvelles technologies et je repousse mes limites à travers des projets créatifs.
            Dynamique et super sociable. J&apos;aime travailler en équipe et partager des idées pour aller plus loin.
          </li>
          <li className='flex justify-center'>
            <a href=" https://eportfolio.etsmtl.ca/Portfolio/Clef/ftQBpgCgP0Qg0dphcwBl" className="text-center shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
              Accéder à mon CV
            </a>
          </li>
        </ul>
      </div>
      
    </section>
  )
}

export default About