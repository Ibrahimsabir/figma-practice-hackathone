import React from 'react'
import { Poppins } from '@next/font/google'
import NewArrivalGrid from './newarrivalgrid';





const poppin = Poppins({
    subsets: ['latin'],
    weight: ['400','700'],
  });

const NewArrival = () => {
  return (
    <div className={`${poppin.className} w-[1170px] h-[103] pl-10 pt-36`}>
        <div className='w-full h-full p-6 flex flex-col gap-4 justify-start items-start ' >
        <div className='flex justify-start items-center gap-4'>
        <div className=' w-[20px] h-[40px] rounded bg-red-600' ></div>
        <h1 className='text-xl font-semibold text-red-600'>Featured</h1>
        </div>
        <div className='flex w-[1170px] h-[103] pr-16 justify-between items-center '>
        <div className='flex justify-start items-baseline gap-16'>
        <h2 className='text-3xl font-bold'>New Arrivals</h2>
       
        </div>
        
        </div>
        </div>
        <div>
        <NewArrivalGrid/>
        </div>
    </div>
  )
}

export default NewArrival