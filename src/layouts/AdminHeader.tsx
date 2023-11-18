
import React from 'react'
import { main_logo } from '../assets/header'
import { useRouter } from 'next/router'

export default function AdminHeader() {
    const router= useRouter()
  return (
    <section className="w-full h-20 sticky bg-white top-0 z-[999] ">
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
              log out
            </button>
        </div>
      </div>
    </section>
  )
}
