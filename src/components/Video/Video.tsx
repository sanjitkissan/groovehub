import { videoArr } from '@/src/utils/home'
import React from 'react'

export default function Video() {
  return (
    <section className='w-full main-container flex flex-col items-center justify-center gap-10 my-24' id='video'>
    <h2 className='text-4xl font-bold text-blue-900 uppercase'>videos</h2>
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
          videoArr.map((item:any)=>(
          <div className='w-full h-96 rounded-md overflow-hidden' key={item.id}>
              <iframe width="100%" height="100%" src={item.src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
           ))
      } 
    </div>
    <button className='px-8 py-3 rounded-full text-white text-xl font-bold bg-blue-900 active:scale-90 !transition-all !duration-500 !ease-in-out'>Show More</button>
  </section>
  )
}
