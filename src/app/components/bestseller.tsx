import React from 'react'
import { Poppins } from '@next/font/google'
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";
import BestSellerProducts from './bestsellrproducts';

const poppin = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const BestSeller = () => {
    return (
        <div className={`${poppin.className} w-full px-6 md:px-10 pt-36`}>
            <div className="w-full h-full p-6 flex flex-col gap-4 justify-start items-start">
                <div className="flex justify-start items-center gap-4">
                    <div className="w-[20px] h-[40px] rounded bg-red-600"></div>
                    <h1 className="text-xl font-semibold text-red-600">This Month's</h1>
                </div>
                <div className="flex w-full md:w-[1170px] justify-between items-center pr-4 md:pr-16">
                    <div className="flex justify-start items-baseline gap-4">
                        <h2 className="text-3xl font-bold">Best Selling Products</h2>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <button className="rounded bg-red-600 text-sm text-gray-100 px-8 py-3 sm:px-10 sm:py-4">
                            View All
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <BestSellerProducts />
            </div>
        </div>
    );
};

export default BestSeller;
