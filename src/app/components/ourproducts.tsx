import React from 'react'
import { Poppins } from '@next/font/google'
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";
import OurProductsCard from './ourproductcard';



const poppin = Poppins({
    subsets: ['latin'],
    weight: ['400','700'],
  });

const OurProducts = () => {
  return (
    <div className={`${poppin.className} w-[1170px] h-[103] pl-10 pt-36`}>
        <div className='w-full h-full p-6 flex flex-col gap-4 justify-start items-start ' >
        <div className='flex justify-start items-center gap-4'>
        <div className=' w-[20px] h-[40px] rounded bg-red-600' ></div>
        <h1 className='text-xl font-semibold text-red-600'>Our Products</h1>
        </div>
        <div className='flex w-[1170px] h-[103] pr-16 justify-between items-center '>
        <div className='flex justify-start items-baseline gap-16'>
        <h2 className='text-3xl font-bold'>Explore Our Products</h2>
        
        </div>
        <div className='flex gap-2 justify-center items-center'>
        < IoArrowBackSharp className='text-xl text-gray-700 bg-gray-200 border-2 rounded-full' />
          < IoArrowForwardSharp className='text-xl text-gray-700 bg-gray-200 border-2 rounded-full'/>
          
        </div>
        </div>
        </div>
        <div>
        <OurProductsCard/>
        
        </div>
        <div className="flex justify-center mt-8">
        <button className="bg-red-600 text-sm text-white px-6 py-3 rounded-[4px] ">
          View All Products
        </button>
      </div>
    </div>
  )
}

export default OurProducts