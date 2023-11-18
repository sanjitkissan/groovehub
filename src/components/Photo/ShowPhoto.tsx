import { galleryImg } from '@/src/assets/header'
import { photoArr } from '@/src/utils/gallary'
import { Dialog } from '@mui/material'
import React, {useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function ShowImage() {
  const [activeIndex, setActiveIndex] =useState<number>(0)
  const [isImage, setIsImage] =useState<number>(0)
  const [isOpen, setIsOpen] =useState<boolean>(false)

  const forword =()=>{
    if(activeIndex===photoArr.length-1){
      setActiveIndex(0)
    }else{
      setActiveIndex(activeIndex + 1)
    }
}
const reverse =()=>{
    if(activeIndex<= 0){
      setActiveIndex(photoArr.length-1)
    }else{
      setActiveIndex(activeIndex-1)
    }
}

  return (
    <section className='w-full flex flex-col items-center justify-start gap-8 mb-8'>
        <div className='w-full h-[60vh]'>
            <img src={galleryImg.src} alt="" className='w-full h-full object-cover' />
        </div>
      <div className='flex flex-col main-container items-center justify-start gap-4'>
        <h1 className='text-4xl font-bold text-blue-900 uppercase'>photos</h1>
        <div className='w-full  gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            photoArr.map((item, index)=>(

              <img src={item.img.src} alt="" className='w-full h-full object-cover' key={item.id} onClick={()=>{
                setActiveIndex(index)
                setIsOpen(true)
            }}/>
            ))
          }
        </div>
      </div>
      <Dialog
    fullWidth
    maxWidth={"xl"}
    open={isOpen}
    onClose={()=>{setIsOpen(false)}}
    className='hidden md:block w-full'
  >
    <div className=' w-full h-[90vh] py-8 px-20 relative'>
       <CloseIcon className='!text-red-600 absolute top-5 right-8' onClick={()=>{setIsOpen(false)}} />
       <span className='p-4 rounded-full cursor-pointer absolute top-1/2 right-2 -translate-y-1/2' onClick={forword} >
            <ArrowForwardIosIcon className='!text-red-600 !font-bold'/>
       </span>
       <span className='p-4 rounded-full cursor-pointer absolute top-1/2 left-2 -translate-y-1/2' onClick={reverse} >
            <ArrowForwardIosIcon className='!text-red-600 !font-bold rotate-180'/>
       </span>
        <img src={photoArr[activeIndex].img.src} alt="" className='w-full h-full object-contain'/>
    </div>
  </Dialog>
    </section>
  )
}
