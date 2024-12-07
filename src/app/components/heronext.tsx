import React from 'react'
import { Poppins } from '@next/font/google'

const poppin = Poppins({
    subsets: ['latin'],
    weight: ['400','700'],
  });

const HeroNext = () => {
  return (
    <div className={`${poppin.className} flex flex-col justify-start place-items-start gap-4 w-[1170px] h-[103] pl-10 pt-16`}>
        <div className='flex justify-start items-center gap-4 m-auto'>
        <div className=' w-[20px] h-[40px] rounded bg-red-800' ></div>
        <h1 className='text-xl font-semibold text-red-800'>Today's</h1>
        </div>
        <div>
        <div className='text-3xl font-bold'>Flash Sales</div>
        </div>
    </div>
  )
}

export default HeroNext