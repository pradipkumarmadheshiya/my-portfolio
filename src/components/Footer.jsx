import React from 'react'
import { MdEmail } from 'react-icons/md'
import CallIcon from '@mui/icons-material/Call';
import { social_links } from '../constants';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <div className='bg-tertiary p-8 flex justify-center'>
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
                <MdEmail className='text-[20px]'/>
                <p>prdpmadheshiya@gmail.com</p>
            </div>
            <div className='flex items-center gap-2'>
                <CallIcon className='text-[20px]'/>
                <p>+91 9721824212</p>
            </div>
            <div className='flex gap-4 mt-4'>
                {
                    social_links.map((link, index)=>(
                        <a key={index} href={link.link} target="_blank" >
                            <img src={link.icon} alt={link.name}
                            className='w-8'/>
                        </a>
                    ))
                }
            </div>
            <p className='mt-4'>Thanks for visiting my Portfolio. Made with <FavoriteIcon/> by Pradip.</p>
        </div>
    </div>
  )
}

export default Footer
