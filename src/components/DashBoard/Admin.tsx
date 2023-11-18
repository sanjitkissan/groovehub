import React, {useState} from 'react'

import SuperAdmin from './SuperAdmin'
import Login from './Login'


export default function Dashboard() {
  const [isLogin, setIsLogin] =useState<any>(false)
  return (
   <div className='w-full'>
      
    {
      !isLogin ? <Login setIsLogin={setIsLogin}/>:<SuperAdmin/>
    }
   
    
   </div>
  )
}
