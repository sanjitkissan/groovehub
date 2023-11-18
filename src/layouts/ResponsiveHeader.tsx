import React, { useState } from 'react'
import { main_logo } from '../assets/header'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Collapse } from '@mui/material';
import Link from 'next/link';
import { headerArr } from '../utils/header';
export default function ResponsiveHeader() {
      const [isOpen, setIsOpen]=useState<boolean>(false)
  return (
    <section className='sticky top-0 lg:hidden block bg-white z-[999]'>
    <section className="w-full h-16 main-container flex items-center justify-between ">
      <picture>
        <img src={main_logo.src} alt="" className='w-auto h-14 ' />
      </picture>
       <div className='w-1/4 flex items-center justify-end'>
        {!isOpen ? <>
      <MenuIcon onClick={()=>{setIsOpen(true)}}/>
        </>:<>
        <CloseIcon onClick={()=>{setIsOpen(false)}}/>
        </>}
      </div>
    </section>
    <Collapse in={isOpen} timeout="auto" unmountOnExit>
      <section className='w-full z-[999] bg-white'>
      {headerArr.map((item)=>(
        <Link href={`${item.path}`}  key={item.id}>
      <h2 className='w-full border-b border-b-black p-2 capitalize text-lg font-bold'>
        {item.title}
      </h2>
        </Link>
      ))}
      </section>
    </Collapse>
    </section>
  )
}
