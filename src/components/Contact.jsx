import React, {useState, useRef} from 'react'
import {motion} from "framer-motion"
import emailjs from "@emailjs/browser"
import { style } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {

  const formRef=useRef()
  const [form, setForm]=useState({name:"", email:"", message:""})
  const [loading, setLoading]=useState(false)

  const handleChange=(e)=>{
    const {name, value}= e.target
    setForm({...form, [name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    setLoading(true)
    // service_yxbfm1m
    // template_dzly3xk
    // xx7HpfOs4uGoQlFq8
    emailjs.send("service_yxbfm1m", "template_dzly3xk", {
      from_name: form.name,
      to_name: "Pradip",
      from_email: form.email,
      to_email: "prdpmadheshiya@gmail.com",
      message: form.message
    },
    "xx7HpfOs4uGoQlFq8"
  )
  .then(()=>{
    setLoading(false)
    alert("Thank you. I will get back to you.")
    setForm({name: "", email: "", message: ""})
  })
  ,(error)=>{
    setLoading(false)
    console.log(error)
    alert('Something went wrong.')
  }
  }

  return (
    <div className='xl:mt-10 flex xl:flex-row flex-col-reverse gap-8 overflow-hidden'>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}
      className='flex-[0.75] bg-[#100d25] p-6 rounded-2xl max-w-[560px]'>
        <h1 className={`${style.sectionHeadText}`}>Contact</h1>

        <form ref={formRef} onSubmit={handleSubmit}
        className='mt-10 flex flex-col gap-6 max-w-[500px]'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?"
            className='bg-tertiary py-3 px-4 placeholder:text-secondary placeholder:text-[14px] text-white rounded-lg outline-none border-none font-medium'/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?"
            className='bg-tertiary py-3 px-4 placeholder:text-secondary placeholder:text-[14px] text-white rounded-lg outline-none border-none font-medium'/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Message</span>
            <textarea rows={5} name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?"
            className='bg-tertiary py-3 px-4 placeholder:text-secondary placeholder:text-[14px] text-white rounded-lg outline-none border-none font-medium'/>
          </label>

          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit rounded text-white font-bold shadow-md shadow-primary cursor-pointer hover:shadow-[0_4px_20px_0_rgba(255,255,255,0.1)]'>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[500px] h-[350px]'>
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
