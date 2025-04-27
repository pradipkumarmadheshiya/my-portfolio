import React from 'react'
import {motion} from "framer-motion"
import { style } from '../style'
import { ComputersCanvas } from './canvas'
import {herobg} from "../assets"
import { FaDownload, FaEye } from "react-icons/fa";

const Hero = () => {

  return (
    <section style={{ backgroundImage: `url(${herobg})` }} 
      className='relative w-full h-screen mx-auto bg-cover bg-center' >
      <div className={`${style.paddingX} absolute inset-0 top-[100px] sm:top-[120px] mx-auto max-w-7xl flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${style.heroHeadText}`}>Hi, my name is <br /> <span className='text-[#915eff]'>Pradip Madheshiya</span></h1>
          <p className={`${style.heroSubText} relative z-10`}>I'm a Frontend Developer</p>
          <div className='flex gap-8 mt-4'>
            <a className=" flex justify-center items-center gap-2 w-fit bg-[#915eff] text-white px-4 py-2 rounded hover:bg-[#854dff] transition cursor-pointer z-10"
              href="/pradip_resume.pdf"
              target='_blank'>
              <FaEye className='text-white text-[14px] sm:text-[16px]'/>Resume
            </a>
            <a
              href="/pradip_resume.pdf"
              download="pradip_resume.pdf"
              className=" flex justify-center items-center gap-2 w-fit bg-[#915eff] text-white px-4 py-2 rounded hover:bg-[#854dff] transition cursor-pointer z-10">
              <FaDownload className='text-white text-[14px] sm:text-[16px]'/>Resume
            </a>
          </div>
        </div>
      </div>
      <ComputersCanvas/>
      <div 
        className='absolute xs:bottom-4 bottom-6 w-full flex justify-center items-center cursor-pointer z-10'>
        <a href="#about">
          <div className='w-[28px] h-[50px] rounded-3xl border-3 border-secondary flex justify-center items-start p-2 '>
            <motion.div
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration: 1.5,
                // repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
