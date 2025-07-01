import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { about } from '@/data/about'

const About = () => {
  return (
    <div className='bg-black-100'>
        <BentoGrid>
            {about.map((item)=>
            <BentoGridItem
                key={item.title}
                title={item.title}
                header={item.text}
                className={item.className}
            />
            )}
        </BentoGrid>
    </div>
  )
}

export default About