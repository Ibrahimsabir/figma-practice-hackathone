import React from 'react';
import { Poppins } from '@next/font/google';
import { IoSearch } from "react-icons/io5";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import Link from 'next/link';

const poppin = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Navbar = () => {
  return (
    <div className={`${poppin.className} w-full h-[100px] border-b-2 border-gray-200`}>
      <div className="max-w-[1170px] h-full flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-0 m-auto">
        {/* Logo */}
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Exclusive</h1>
        
        {/* Navigation Links */}
        <ul className="flex gap-4 text-sm sm:text-base md:gap-6 cursor-pointer">
          <li className="hover:border-b-2 border-gray-400">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:border-b-2 border-gray-400">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:border-b-2 border-gray-400">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:border-b-2 border-gray-400">
            <Link href="/login" target="_blank">Sign Up</Link>
          </li>
        </ul>

        {/* Search Bar and Icons */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-6">
          {/* Search Input */}
          <div className="flex items-center bg-[#F5F5F5] rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-[#F5F5F5] px-4 py-2 outline-none text-sm w-[200px] sm:w-[250px]"
            />
            <IoSearch className="text-xl text-gray-700 px-2" />
          </div>
          {/* Icons */}
          <FaRegHeart className="text-xl text-gray-700 cursor-pointer" />
          <FaShoppingCart className="text-xl text-gray-700 cursor-pointer" />
          <IoPersonCircleSharp className="text-3xl text-red-700 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
