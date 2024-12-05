import React from 'react'
import { Poppins } from '@next/font/google';
import { DropdownButton } from './dropdownbutton';

const poppin = Poppins({
    subsets: ['latin'],
    weight: ['400','700'],
  });
const Top = () => {
  return (
    <div className='flex  sm:font-thin sm:flex-col '>
    <div className={`${poppin.className} w-full h-[48px] flex bg-black text-white  justify-center items-center m-auto`}>
        <p className='text-gray-200'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </p>
             <span className='underline hover:font-bold ml-4'>SHOP NOW</span>
             <h1 className='ml-44'><DropdownButton/></h1>
    </div>
    
    </div>
  )
}
export default Top