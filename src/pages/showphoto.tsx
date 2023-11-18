import React from 'react'
import { main_logo } from '../assets/header'
import { useRouter } from 'next/router'
import ShowImage from '../components/Photo/ShowPhoto'
import Head from 'next/head'

export default function ShowPhoto() {
    const router=useRouter()
  return (
    <>
     <Head>
        <title>GrooveHub dance studio</title>
        <link rel="icon" href="/mainLogo.png"></link>
    </Head>
         <section className="w-full h-20  bg-white  ">
      <div className="w-full h-full main-container flex items-center justify-between">
        <picture className="w-full h-full flex items-center justify-start">
          
          <img src={main_logo.src} alt="" className="h-16 w-auto" />
       
        </picture>
        <div className="w-full h-full flex items-center justify-end">
        <button
              className="px-9 py-3 rounded-md bg-blue-900 text-white text-lg tracking-wider w-fit uppercase z-50"
              type="button"
            onClick={()=>{router.push("/")}}
            >
              back to home
            </button>
        </div>
      </div>
    </section>
    <ShowImage/>
    </>
  )
}
