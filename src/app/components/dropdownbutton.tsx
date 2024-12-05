import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

interface DropdownButtonProps {
    textColor: string;
    textContent: string;
  }
export const DropdownButton = ({textColor,textContent}) => {
  return (
<button className={`flex  font-medium gap-2 `}>
    
    <h1 className={`${textColor} flex text-xl mx-auto`}>{textContent}</h1>
    <FaAngleDown className={`${textColor} text-2xl pt-[4px]`}/>
    </button>


  )
}
