import React from 'react'
import { Poppins } from '@next/font/google';
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";

import Link from 'next/link';

const poppin = Poppins({
    subsets: ['latin'],
    weight: ['400','700'],
  });
const Navbar = () => {
  return (
    <div className={`${poppin.className} min-w-full h-[100px] md:flex   border-b-2 3%`}>
        <div className='max-w-[1170px] h[38px] flex flex-col md:flex-row justify-evenly items-center gap-36 m-auto'>
        <h1 className='text-3xl font-bold inline'>Exclusive</h1>
        <ul className='flex gap-4 cursor-pointer '>
            <li className=' hover:border-b-2 border-gray-400 '>Home</li>
            <li className=' hover:border-b-2 border-gray-400 '>Contact</li>
            <li className=' hover:border-b-2 border-gray-400 '>About</li>
            <li className=' hover:border-b-2 border-gray-400 '>Sign Up</li>
        </ul>
        <div className='flex justify-evenly items-center gap-6'>
        <div  className='bg-[#F5F5F5] flex justify-center gap-2 items-center rounded-[4px]' >
        <input type="text" placeholder='What are you looking for ?'
        className='bg-[#F5F5F5] py-2 px-4' />
        <IoSearch className='text-xl text-gray-700 mr-4'/>
        </div>
        <FaRegHeart className='text-xl text-gray-700 mr-4'/>
        <FaShoppingCart className='text-xl text-gray-700 mr-4'/>
        <IoPersonCircleSharp className='text-3xl text-red-700 mr-4'/>
        </div>
        </div>
 </div>)
}

export default Navbar