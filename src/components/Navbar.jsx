import React, { useState, useEffect } from "react"
import {style} from "../style"
import { Link } from "react-router-dom"
import { navLinks } from "../constants"
import { menu, close, logo } from "../assets";

const Navbar = () => {

    const [active, setActive]=useState("")
    const [toggle, setToggle]=useState(false)
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${style.paddingX} w-full flex items-center py-4 fixed top-0 z-20
            ${scrolled ? "bg-primary" : "bg-transparent"}`}>
            <div className="w-full flex justify-between items-center mx-auto">
                <Link to="/" onClick={()=>{setActive(""); scrollTo(0,0)}} className="flex items-center">
                    <img className=" w-[18px] object-contain" src={logo} alt="logo"/> 
                    <p className="text-[18px]">radip</p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-8">
                    {
                        navLinks.map((link)=>(
                            <li key={link.id} className={`${active===link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>setActive(link.title)}>
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img onClick={()=>setToggle(!toggle)} src={toggle ? close : menu} alt="menu" className="object-contain cursor-pointer"/>
                    <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-12 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                    <ul className="list-none flex justify-end items-start flex-col gap-4">
                        {
                            navLinks.map((link)=>(
                                <li key={link.id} className={`${active===link.title ? "text-white" : "text-secondary"} hover:text-white text-[16px] font-poppins font-medium cursor-pointer`} onClick={()=>{setActive(link.title); setToggle(!toggle)}}>
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar