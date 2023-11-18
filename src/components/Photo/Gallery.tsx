import { galleryArr } from '@/src/utils/home'
import { useRouter } from 'next/router'
import React from 'react'

export default function Gallery() {
const router= useRouter()
  return (
    <section className='w-full main-container flex flex-col items-center justify-center gap-10 my-24' id='photo'>
      <h2 className='text-4xl font-bold text-blue-900 uppercase'>Photos</h2>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            galleryArr.map((item:any)=>(
                <img src={item.img.src} alt="" key={item.id} className='w-full h-96 object-cover' />
            ))
        }
      </div>
      <button className='px-8 py-3 rounded-full text-white text-xl font-bold bg-blue-900 active:scale-90 !transition-all !duration-500 !ease-in-out' onClick={()=>{router.push("/showphoto")}}>Show More</button>
    </section>
  )
}
