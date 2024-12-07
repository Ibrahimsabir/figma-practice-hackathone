import React from 'react';
import { Poppins } from '@next/font/google';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { IoArrowBackSharp } from 'react-icons/io5';
import CategoryName from './categoryname';

const poppin = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Category = () => {
  return (
    <div className={`${poppin.className} w-full md:w-[1170px] pl-10 pt-36`}>
      <div className="w-full h-full p-6 flex flex-col gap-4 justify-start items-start">
        <div className="flex justify-start items-center gap-4">
          <div className="w-[20px] h-[40px] rounded bg-red-600"></div>
          <h1 className="text-xl font-semibold text-red-600">Categories</h1>
        </div>
        <div className="flex w-full md:w-[1170px] justify-between items-center pr-4 md:pr-16">
          <div className="flex justify-start items-baseline gap-16">
            <h2 className="text-2xl sm:text-3xl font-bold">Browse By Category</h2>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <IoArrowBackSharp className="text-2xl sm:text-3xl text-gray-700 bg-gray-200 border-2 rounded-full p-2" />
            <IoArrowForwardSharp className="text-2xl sm:text-3xl text-gray-700 bg-gray-200 border-2 rounded-full p-2" />
          </div>
        </div>
      </div>
      <div className="">
        <CategoryName />
      </div>
    </div>
  );
};

export default Category;
