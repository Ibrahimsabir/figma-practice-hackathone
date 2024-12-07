import React from 'react';
import { Poppins } from '@next/font/google';
import Image from 'next/image';
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";
import FlashCard from './flashcard';

const poppin = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const HeroNext = () => {
  return (
    <div className={`${poppin.className} w-full max-w-[1200px] mx-auto px-4 lg:px-8 pt-20`}>
      {/* Header Section */}
      <div className="flex flex-col gap-6">
        {/* Title Section */}
        <div className="flex items-center gap-4">
          <div className="w-4 h-10 bg-red-600 rounded"></div>
          <h1 className="text-xl font-semibold text-red-600">Today&apos;s</h1>
        </div>

        {/* Flash Sales Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col lg:flex-row items-baseline gap-6 lg:gap-16">
            <h2 className="text-2xl lg:text-3xl font-bold">Flash Sales</h2>
            <Image
              src="/images/timer.png"
              width={1000}
              height={1000}
              alt="Flash sale"
              className="w-full lg:w-[302px] h-auto"
            />
          </div>
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <IoArrowBackSharp className="text-3xl text-gray-700 bg-gray-200 border-2 p-2 rounded-full cursor-pointer hover:bg-gray-300" />
            <IoArrowForwardSharp className="text-3xl text-gray-700 bg-gray-200 border-2 p-2 rounded-full cursor-pointer hover:bg-gray-300" />
          </div>
        </div>
      </div>

      {/* FlashCard Section */}
      <div className="mt-8">
        <FlashCard />
      </div>
    </div>
  );
};

export default HeroNext;
