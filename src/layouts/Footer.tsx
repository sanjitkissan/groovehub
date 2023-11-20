import React from 'react'
import { footerLogo, main_logo } from '../assets/header'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
import { headerArr } from '../utils/header';
import { useRouter } from 'next/router';
export default function Footer() {
  const router= useRouter()
  return (
    <section className='w-full py-10 bg-blue-900'>
        <div className='w-full flex items-center justify-between mb-6 main-container'>
        <img src={footerLogo.src} alt="" className="lg:h-16 h-14 w-auto" />
        <div className='w-1/2 flex items-center justify-end gap-6'>
          <Link href={"https://www.instagram.com/the_groove_hub.official/?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D&__coig_restricted=1"} target='_blank'>
        <InstagramIcon className="!text-pink-400 cursor-pointer !text-4xl" />
          </Link>

          {/* <Link href={""} target='_blank'> */}
        <FacebookIcon className="!text-blue-600 cursor-pointer !text-4xl" onClick={()=>{router.push("https://www.facebook.com/dancefitnessanushka?mibextid=ZbWKwL")}}/>
          {/* </Link> */}
        <YouTubeIcon className="!text-red-600 cursor-pointer !text-4xl" />
        </div>
        </div>
      <div className='w-full main-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className='w-full flex flex-col items-start justify-start gap-6'>
          {
            headerArr.map((item:any)=>(
              <Link href={`${item.path}`} key={item.id}>
              <p className="text-lg font-bold text-white uppercase hover:text-red-600 !transition-all !duration-500 !ease-in-out cursor-pointer" >{item.title}</p>
              </Link>
            ))
          }
           
        </div>
        <div className='w-full flex flex-col items-start justify-start gap-4'>
            <h2 className='text-2xl font-bold text-white uppercase'>
                dance
            </h2>
            <p className='text-white font-semibold tracking-wide'>Designed for Empowering Ladies of all Ages - Experience the Energy of Dance & Unleash Your Strength!.</p>
        </div>
        <div className='w-full flex flex-col items-start justify-start gap-4'>
        <p className='text-lg text-white font-semibold tracking-wide'>Address: LBS nagar, 6th cross, HAL, Bangalore 17</p>
        <p className='text-lg text-white font-semibold tracking-wide'>Email: info@groovehub.in, marketing@groovehub.in </p>
        <p className='text-lg text-white font-semibold tracking-wide'> <a href="tel:8095204712"> Phone: 8095204712</a></p>
        </div>
      </div>
      <div className='w-full center pt-6 border-t mt-2'>
        <h2 className='text-white font-bold text-lg capitalize text-center'>Copyright &copy; {new Date().getFullYear()} grooveHub All rights reserved.</h2>
      </div>
    </section>
  )
}
