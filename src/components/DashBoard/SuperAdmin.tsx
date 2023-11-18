import React from 'react'
import Image from './Image'
import Leads from './Leads'
import AdminHeader from '@/src/layouts/AdminHeader'
export default function SuperAdmin() {
  return (
    <>
    <AdminHeader/>
    <div className='w-full main-container flex flex-col items-center justify-start gap-10'>
    <Image/>
    <Leads/>
  </div>
    </>
  )
}
