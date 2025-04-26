import React from 'react'
import { motion } from 'framer-motion'
import { style } from '../style'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { tools, statistics } from '../constants'
import { div } from 'framer-motion/client'

const ToolCard=({index, name, icon})=>(
  <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}
  className='bg-[#090325] p-6 sm:p-8 rounded-2xl min-w-[100px] flex justify-center items-center flex-col hover:shadow-[0_4px_20px_0_rgba(255,255,255,0.1)]'>
    <img src={icon} alt={name} 
    className='w-8 sm:w-14'/>
    <p className='mt-2 sm:mt-4 text-[14px]'>{name}</p>
  </motion.div>
)

const StatisticCard=({index, name, icon})=>(
  <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}
  className='bg-[#090325] p-6 sm:p-8 rounded-2xl flex justify-center items-center flex-col hover:shadow-[0_4px_20px_0_rgba(255,255,255,0.1)]'>
    <img src={icon} alt={name} 
    className='w-8 sm:w-14'/>
    <p className='mt-2 sm:mt-4 text-[14px] text-center'>{name}</p>
  </motion.div>
)

const Tools = () => {
  return (
    <div className='flex gap-5 flex-wrap'>
      <div className='bg-[#100d25] rounded-[20px]'>
        <div className={`p-6 rounded-2xl`}>
          <motion.div variants={textVariant()}>
          <h1 className={`${style.sectionHeadText}`}>Tools</h1>
          </motion.div>
        </div>
        <div className={`${style.paddingX} pb-12 flex flex-wrap gap-5`}>
          {
            tools.map((tool, index)=>(
              <ToolCard key={tool.name} index={index} {...tool}/>
            ))
          }
        </div>
      </div>
      {/* statistics */}
      <div className='bg-[#100d25] rounded-[20px]'>
        <div className={`p-6 rounded-2xl`}>
          <motion.div variants={textVariant()}>
          <h1 className={`${style.sectionHeadText}`}>Statistics</h1>
          </motion.div>
        </div>
        <div className={`${style.paddingX} pb-12 flex flex-wrap gap-5`}>
          {
            statistics.map((statistic, index)=>(
              <StatisticCard key={statistic.name} index={index} {...statistic}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Tools, "tools")