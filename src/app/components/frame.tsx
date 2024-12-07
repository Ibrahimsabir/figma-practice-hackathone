import React from 'react'
import Image from 'next/image'

export const Frame = () => {
  return (
    <div className='w-full h-[500px] flex justify-center items-center m-auto'>
        <Image
          src={"/images/Frame 600.png"}
          width={1000}
          height={1000}
          alt='frame image'

        />
    </div>
  )
}
