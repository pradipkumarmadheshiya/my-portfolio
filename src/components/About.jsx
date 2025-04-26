import React from 'react'
import {Tilt} from "react-tilt"
import {motion} from "framer-motion"
import { style } from '../style'
import {fadeIn, textVariant} from "../utils/motion"
import {pradip} from "../assets"
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={`${style.sectionHeadText}`}>About Me</h1>
      </motion.div>
      <div className='flex gap-4 flex-wrap mt-4'>
        <div>
          <Tilt className="xs:w-[250px] w-full">
            <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
              <div options={{
                max:45,
                scale:1,
                speed:450
              }}
              className='bg-[#151030] rounded-[20px] h-[176px] w-[166px] sm:h-[190px] sm:w-[180px] flex justify-center items-center'>
                <img src={pradip} alt="pradip" className='w-[164px] h-[174px] sm:w-[178px] sm:h-[188px] rounded-[20px]'/>
              </div>
            </motion.div>
          </Tilt>
        </div>
        <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='text-secondary text-[15px] sm:text-[17px] leading [30px] max-w-3xl'>
        Front-end Developer with hands-on experience in building responsive and user-friendly web applications. Gained a solid
  understanding of data structures and algorithms using Python, along with proficiency in front-end technologies such as
  HTML, CSS, JavaScript, React, Redux, Tailwind CSS, and Chakra UI. Developed multiple projects, including e-commerce websites.
  Eager to contribute to a dynamic development team and grow as a Front-end Developer.
        </motion.p>
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
