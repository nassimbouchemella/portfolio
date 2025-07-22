import React from 'react'
import { projets } from '@/data/projets'

const ProjectsMobile = () => {
  return (
    <div className='grid xl:hidden grid-cols-1 w-[100vw] justify-items-center items-center mt-10'>
        <h1 className='font-cremisse text-white text-9xl text-center'>
            Mes projets
        </h1>
        {projets.map((element)=>
            <div className='relative hover:opacity-80 my-10'>
                <a href={element.link}>
                    <img src={element.thumbnail} className='w-[80vw]'/>
                    <h2 className="absolute text-3xl bottom-4 left-4 font-cremisse text-white bg-black-100 py-1 px-2 rounded-xl">
                        {element.title}
                    </h2>
                </a>
            </div>
        )}
    </div>
  )
}

export default ProjectsMobile