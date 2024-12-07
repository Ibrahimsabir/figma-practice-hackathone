import React from 'react';
import { Poppins } from '@next/font/google';
import { DropdownButton } from './dropdownbutton';
import { FaAngleDown } from "react-icons/fa6";

const poppin = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Top = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-black text-white">
      {/* Sale Banner */}
      <div
        className={`${poppin.className} w-full h-[48px] flex justify-center items-center px-4 sm:px-8`}
      >
        <p className="text-gray-300 text-sm text-center sm:text-left">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="underline hover:font-bold ml-2 text-white cursor-pointer">
            SHOP NOW
          </span>
        </p>
      </div>

      {/* Language Selector */}
      <div className="w-full sm:w-auto h-[48px] flex justify-center items-center sm:justify-end px-4 sm:px-8 mt-2 sm:mt-0">
        <h1 className="flex items-center text-gray-300 space-x-2">
          <span>English</span>
          <DropdownButton icon={<FaAngleDown />} textColor="text-gray-300" textSize={15} />
        </h1>
      </div>
    </div>
  );
};

export default Top;
