import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from 'framer-motion'
import { style } from '../style'
import {textVariant} from "../utils/motion"

const Skills = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h1 className={`${style.sectionHeadText}`}>Technical Skills</h1>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-4'>
        {
          technologies.map((technology)=>(
            <div key={technology.name} className='w-28 h-28 '>
              <BallCanvas icon={technology.icon}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SectionWrapper(Skills, "skills")
