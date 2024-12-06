import React from 'react'
import { DropdownButton } from './dropdownbutton'
import { FaAngleRight } from "react-icons/fa6";

export const Sidebar = () => {
  return (
    <div className='border-r-2 border-gray-200'>
        <div className="absolute w-[217px] h-[344px] left-[55px]  flex flex-col border-r-2 border-gray-200 items-start pt-8 gap-4">
    {/* Your content here */}
  <DropdownButton textSize={11}textColor="#403c3b" textContent="Women's Fashion" icon={(<FaAngleRight/>)}/>
  <DropdownButton textSize={11}textColor="#403c3b" textContent="Men's Fashion" icon={(<FaAngleRight/>)}/>
    <h1 className='text-[15px]'>Home & Lifestyle</h1>
    <h1 className='text-[15px]'>Medicines</h1>
    <h1 className='text-[15px]'>Sports & Outdoor</h1>
    <h1 className='text-[15px]'>Babies & Toys</h1>
    <h1 className='text-[15px]'>Electroncs</h1>
    <h1 className='text-[15px]'>Groceries & Pets</h1>
    <h1 className='text-[15px]'>Health & Beauty</h1>
    
    
    </div>

    </div>
  )
}
