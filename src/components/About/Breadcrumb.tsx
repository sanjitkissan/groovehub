import { danceArr, fitnessArr } from '@/src/utils/about'
import React from 'react'
import AboutCard from '../card/AboutCard'

export default function Breadcrumb() {
  return (
    <section className='w-full main-container flex flex-col items-center justify-center gap-2 my-24'>
      <h1 className='text-4xl text-blue-900 font-bold uppercase mb-4'>about us</h1>
      <p className='text-lg font-medium text-gray-700 text-center'>
      Introducing TheGrooveHub - Your Ultimate Dance & Fitness Studio!
We are a magical Dance & Fitness Studio, here in vibrant Bangalore, enchanting young hearts nationwide and beyond. Our passion lies in creating captivating live performances, hosting exciting kids dance workshops, energizing corporate dance fitness classes, crafting delightful kid choreography, and igniting boundless creativity!
      </p>
      <p className='text-lg font-medium text-gray-700 text-center'>
      Founded by the Subhalaxmi, winner of the esteemed Dance Odisha Dance Reality Show, and a shining star who has bagged multiple dance competition awards since her early childhood. With over nine years of enchanting experience, she established TheGrooveHub in 2020, sprinkling our studio with fairy dust of creativity.
      </p>
      <p className='text-lg font-medium text-gray-700 text-center'>
      In our wonder-filled studio, young talents find their rhythm, unleash their imaginations, and sparkle like stars! {`We're `}all about creating magical memories, leaving a trail of joy with every young heart we touch.
      </p>

      <p className='text-lg font-medium text-gray-700 text-center'>Join us on this empowering journey, where dance and fitness intertwine, and the magic of {`kids'`} dreams takes center stage. Subhalaxmi, a certified fitness instructor from Karnataka Fitness Academy, Bangalore, adds an extra touch of expertise to our holistic approach.</p>

      <p className='text-lg font-medium text-gray-700 text-center'>Welcome to TheGrooveHub - Where little feet dance, big dreams happen, and the enchantment never ends!</p>

      
      <p className='text-lg font-medium text-gray-700 text-center'>Benefits of joining our fitness & dance studio:</p>
      <div className='w-full flex flex-col items-center justify-center gap-6 mt-4'>
        <h2 className='text-2xl font-bold text-blue-900'>Dance</h2>
        <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-6'>
            {
                danceArr.map((item:any)=>(
                    <AboutCard item={item} key={item.id}/>
                ))
            }
        </div>
      </div>

      <div className='w-full flex flex-col items-center justify-center gap-6 mt-10'>
        <h2 className='text-2xl font-bold text-blue-900'>Fitness</h2>
        <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-6'>
            {
                fitnessArr.map((item:any)=>(
                    <AboutCard item={item} key={item.id}/>
                ))
            }
        </div>
      </div>
    </section>
  )
}
