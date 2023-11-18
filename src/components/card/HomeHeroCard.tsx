import React from 'react'

export default function HomeHeroCard({item}:any) {
  return (
    <section className={`w-full flex flex-col lg:flex-row items-center shadow-2xl rounded-md p-4 justify-center gap-6 ${item.id==2 && "lg:flex-row-reverse"}`}>
      <div className='w-full h-auto flex flex-col items-start justify-center gap-6'>
        <p className='lg:text-2xl text-xl font-bold text-gray-500'>{item.title}</p>
        <h2 className='lg:text-5xl text-2xl font-bold text-blue-900 '>{item.heading} </h2>
        <p className='lg:text-lg tracking-wide text-gray-700 font-medium'>{item.content} </p>
      </div>
      <div className='w-full lg:h-[50vh] h-auto'>
        <img src={item.img.src} alt="" className='w-full h-full object-cover rounded-md' />
      </div>
    </section>
  )
}
