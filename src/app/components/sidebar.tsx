import React from 'react'
import { DropdownButton } from './dropdownbutton'

export const Sidebar = () => {
  return (
    <div>
        <div className="absolute w-[217px] h-[344px] left-[135px] top-[185px] flex flex-col items-start p-0 gap-4">
    {/* Your content here */}
  <DropdownButton textColor="#403c3b" textContent="Women's Fashion"/>
  <DropdownButton textColor="#403c3b" textContent="Men's Fashion"/>
    </div>

    </div>
  )
}
