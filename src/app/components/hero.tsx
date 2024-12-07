import React from 'react';
import Image from 'next/image';
import { Sidebar } from './sidebar';
import { FaApple, FaArrowRight } from "react-icons/fa6";
import { Poppins } from '@next/font/google';
import { GoDot, GoDotFill } from "react-icons/go";

const poppin = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Hero = () => {
  return (
    <div className={`${poppin.className} flex flex-col lg:flex-row w-full max-w-[1200px] mx-auto mt-8`}>
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full lg:pb-0 pb-6">
        <Sidebar />
      </div>

      {/* Hero Content */}
      <div className="relative flex flex-col w-full lg:w-3/4 bg-black rounded-md overflow-hidden lg:mt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 gap-6 lg:gap-0">
          {/* Text Content */}
          <div className="flex flex-col justify-center items-start text-left w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <FaApple className="text-4xl text-white" />
              <h2 className="text-white text-sm">iPhone 14 Series</h2>
            </div>
            <h1 className="text-3xl lg:text-4xl text-white mb-4">
              Up to 10% Off Voucher
            </h1>
            <div className="flex items-center gap-2">
              <button className="text-gray-200 text-sm border-b-2 border-gray-200 hover:opacity-80 transition">
                Shop Now
              </button>
              <FaArrowRight className="text-lg text-gray-200" />
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/images/hero.png"
              width={400}
              height={400}
              alt="iPhone 14"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-4 lg:mt-6">
          <GoDotFill className="text-gray-400 text-xl" />
          <GoDotFill className="text-gray-400 text-xl" />
          <GoDotFill className="text-red-600 text-xl" />
          <GoDotFill className="text-gray-400 text-xl" />
          <GoDotFill className="text-gray-400 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
