import { heroSectionArr } from '@/src/utils/home'
import React from 'react'
import HomeHeroCard from '../card/HomeHeroCard'

export default function HeroSection() {
  return (
    <section className='w-full main-container flex flex-col items-center justify-center gap-10 my-12 lg:my-24'>
      {
        heroSectionArr.map((item:any)=>(

            <HomeHeroCard item={item} key={item.id}/>
        ))
      }
    </section>
  )
}
