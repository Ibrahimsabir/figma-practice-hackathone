import React from 'react'
import { Poppins } from '@next/font/google';
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import Link from 'next/link';

const poppin = Poppins({
    subsets: ['latin'],
    weight: ['400','700'],
  });
const Navbar = () => {
  return (
    <div className='min-w-full h-[100px] md:flex  justify-evenly gap-36 items-center m-auto border-b-2'>
        <h1 className='text-3xl inline'>Exclusive</h1>
        <ul className='flex gap-4 '>
            <li className=' hover:border-b-2 border-gray-400 '>Home</li>
            <li className=' hover:border-b-2 border-gray-400 '>Contact</li>
            <li className=' hover:border-b-2 border-gray-400 '>About</li>
            <li className=' hover:border-b-2 border-gray-400 '>Sign Up</li>
        </ul>
        <div className='flex justify-evenly items-center gap-6'>
        <div  className='bg-gray-100 flex justify-center gap-2 items-center rounded' >
        <input type="text" placeholder='What are you looking for ?'
        className='bg-gray-100 py-2 px-4' />
        <IoSearch className='text-xl text-gray-700 mr-4'/>
        </div>
        <FaRegHeart className='text-xl text-gray-700 mr-4'/>
        <FaShoppingCart className='text-xl text-gray-700'/>
        </div>
 </div>)
}

export default Navbar