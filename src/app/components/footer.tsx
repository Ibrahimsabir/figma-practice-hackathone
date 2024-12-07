import { Poppins } from '@next/font/google'
import React from 'react'
import { LuSendHorizontal } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Image from 'next/image';



const poppin = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const Footer = () => {
  return (
    <div className={`${poppin.className} bg-black text-gray-700 flex flex-col `}>
    <div className={`  mb-0 w-full h-[441px] bg-black text-[#FAFAFA] m-auto `}>
        <div className='w-[1170px] h-[236px] flex m-auto'>
        <div className='w-1/5 flex flex-col p-4'>
            <h2 className='text-xl font-medium ml-4 mt-6'>Exclusive</h2>
            <h2 className='text-sm font-light ml-4 mt-6'>Subscribe</h2>
            <h3 className='text-sm font-light ml-4 mt-6'>Get 10% off on your first order </h3>
            <button className='flex ml-4 mt-6 px-2 py-2 gap-2 text-gray-400 border-2 border-gray-200  justify-between items-center'>
             Enter Your Email
            <LuSendHorizontal className='text-2xl text-gray-100'/>
            
            </button>
        </div>
        <div className='w-1/5 flex flex-col p-4'>
            <h2 className='text-xl font-medium ml-4 mt-6'>Support</h2>
            <h2 className='text-sm font-light ml-4 mt-6'>Phase-2 Gulshan, Karachi</h2>
            <h3 className='text-sm font-light ml-4 mt-6'>exclusive@gmail.com</h3>
            <h3 className='text-sm font-light ml-4 mt-6'>+44-3434-34343</h3>
           
        </div>
        <div className='w-1/5 flex flex-col p-4'>
            <h2 className='text-xl font-medium ml-4 mt-6'>Account</h2>
            <h2 className='text-sm font-normal ml-4 mt-6'>My Account</h2>
            <h3 className='text-sm font-light ml-4 mt-6'>Login / Register </h3>
            <h2 className='text-sm font-normal ml-4 mt-6'>Cart</h2>
            <h2 className='text-sm font-normal ml-4 mt-6'>Wishlist</h2>
            <h2 className='text-sm font-normal ml-4 mt-6'>Shop</h2>
           </div>
           <div className='w-1/5 flex flex-col p-4'>
            <h2 className='text-xl font-medium ml-4 mt-6'>Quick Link</h2>
            <h2 className='text-sm font-normal ml-4 mt-6'>Privacy Policy</h2>
            <h3 className='text-sm font-light ml-4 mt-6'>Terms Of Use</h3>
            <h2 className='text-sm font-normal ml-4 mt-6'>FAQ</h2>
            <h2 className='text-sm font-normal ml-4 mt-6'>Contact</h2>
           </div>
           <div className='w-1/5 flex flex-col p-4'>
            <h2 className='text-xl font-medium ml-4 mt-6'>Download App</h2>
            <h2 className='text-sm font-normal ml-4 mt-6'>Save $3 With App New User Only</h2>
            <div className='flex justify-center items-center m-auto'>
                <div className=' p-4 gap-2'>
            <Image 
           src='/images/Qr Code.png'
           alt='Qr code'
           width={100}
           height={100}/>
           </div>
           <div>
           <Image 
           src='/images/GooglePlay.png'
           alt='facebook icon'
           width={100}
           height={100}/>
           <Image 
           src='/images/AppStore.png'
           alt='appstore icon'
           width={100}
           height={100}/>
         
           </div>
            </div>
            <div className='flex justify-evenly px-2 py-4 gap-4 items-center font-thin m-auto '>
           <FaFacebookF  className='w-[24px] h-[24px]'/>
           <CiTwitter className='w-[24px] h-[24px]'/>
           <FaInstagram className='w-[24px] h-[24px]'/>
           <FaLinkedinIn className='w-[24px] h-[24px]'/>

           </div>
           </div>
    </div>
   
    </div>
    <div className='flex  justify-center items-center m-auto gap-2 pb-4'>
    <FaRegCopyright className='text-2xl'/>
    <p className='text-xl text-gray-700'>Copyright Rimel 2022. All right reserved</p>
    </div>
    </div>
  )
}

export default Footer