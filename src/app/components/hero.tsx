import React from 'react'
import Image from 'next/image'; 
import { Sidebar } from './sidebar'
import { FaApple } from "react-icons/fa6";
import { Poppins } from '@next/font/google';
import { FaArrowRight } from "react-icons/fa6";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

 const poppin = Poppins({
    subsets: ['latin'],
    weight: ['400','700'],
  });

const Hero = () => {
  return (
    <div className={`${poppin.className} flex sm:flex-col w-[90%] h-[344px] justify-between items-center mt-0 mx-auto`}>
        <div className='w-1/4 pb-0 '>
        <Sidebar  />
        </div>
        <div className="absolute flex flex-col w-[786px] h-[320px] left-[413px] top-[182px] bg-black ">
         <div className='flex '>
         <div className='flex flex-col justify-center items-start  w-1/3 h-full pl-12 pt- '>
            <div className='flex justify-between items-center gap-4'>
            <FaApple className='text-4xl text-white '/>
            <h2 className='text-white text-sm'>iPhone 14 Series</h2>
            </div><br />
            <h1 className='text-4xl text-white  '>Up to 10% Off Voucher</h1><br />
            <div  className='flex justify-center items-center gap-2'>
            <button className='text-gray-200 text-sm px-0 py-1 border-b-2 border-gray-200'>Shop Now </button>
            <FaArrowRight className='text-lg text-gray-200'/>
            </div>
         </div>
         <div className='w-2/3 justify-start items-start pl-10 pt-6 '>
            <Image 
            src='/images/hero.png'
            width={400}
            height={400}
            alt='iPhone 14'/>
         </div>
         </div>
         <div className='flex justify-center m-auto'>
         <GoDotFill className='text-gray-400 text-xl'/>
        <GoDotFill className='text-gray-400 text-xl'/>
        <GoDotFill className='text-red-600  text-xl'/>
        <GoDotFill className='text-gray-400 text-xl'/>
        <GoDotFill className='text-gray-400 text-xl'/>
         </div>

        </div>
        


    </div>
  )
}

export default Hero