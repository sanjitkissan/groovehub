import React from 'react'

export default function AboutCard({item}:any) {
  return (
    <section className='w-full flex flex-col items-start justify-center gap-4 p-4 shadow-xl rounded-md overflow-hidden'>
      <img src={item.img.src} alt="" className='w-full h-64 rounded-md' />
      <h2 className='text-2xl font-bold text-blue-900 uppercase'>{item.title}</h2>
      <p className='text-lg font-medium text-gray-700 tracking-wider'>{item.content}</p>
    </section>
  )
}
