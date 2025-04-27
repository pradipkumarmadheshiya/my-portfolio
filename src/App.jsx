import React from 'react'
import {BrowserRouter} from "react-router-dom"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import  Skills from './components/Skills'
import Tools from "./components/Tools"
import Projects from './components/Projects'
import Contact from './components/Contact'
import { StarsCanvas } from './components'
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary '>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <div>
          <About/>
          <Skills/>
          <Tools/>
          <Projects/>
        </div>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
