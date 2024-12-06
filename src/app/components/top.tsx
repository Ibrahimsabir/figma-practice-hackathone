import React from 'react'
import { Poppins } from '@next/font/google';
import { DropdownButton } from './dropdownbutton';
import { FaAngleDown } from "react-icons/fa6";

const poppin = Poppins({
    subsets: ['latin'],
    weight: ['400','700'],
  });
const Top = () => {
  return (
    <div className='flex  sm:font-thin sm:flex-col '>
    <div className={`${poppin.className} w-full h-[48px] flex bg-black text-white  justify-center items-center m-auto`}>
        <p className='text-gray-300 text-sm ml-64'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
        <span className='underline hover:font-bold ml-4  text-white'>SHOP NOW</span>
        </p>
             
             <h1 className='ml-44 flex text-gray-300'>English<DropdownButton icon={(<FaAngleDown/>)} textColor={"text-gray-300"}  textSize={15}/></h1>
    </div>
    
    </div>
  )
}
export default Top