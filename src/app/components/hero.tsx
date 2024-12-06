import React from 'react'
import { Sidebar } from './sidebar'

const Hero = () => {
  return (
    <div className='flex sm:flex-col justify-between items-center mt-0 mx-auto divide-x-2'>
        <div className='w-1/4'>
        <Sidebar />
        </div>
        <div className="absolute w-[892px] h-[344px] left-[413px] top-[182px] bg-black">
        
        </div>


    </div>
  )
}

export default Hero