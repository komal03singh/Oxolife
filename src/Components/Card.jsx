import React from 'react'
import Image from 'next/image'

function Card({ heading, content, imageUrl }) {
  return (
    <div className="flex p-4 w-[280px] flex-col gap-4 px-6 lg:flex-row lg:gap-6 bg-[#18181B] lg:w-full lg:p-5 lg:px-0 rounded-lg border border-white/10">
      
      <div className="rounded-full w-13 h-13 flex-shrink-0 flex items-center justify-center bg-[#F5F5F5] m-4">
        <Image 
          src={imageUrl} 
          alt="icon" 
          width={30} 
          height={30}
        />
      </div>

      <div className="flex flex-col items-start gap-1">
        <h2 className="text-lg font-medium text-white">{heading}</h2>
        <p className="text-[#787882]">{content}</p>
      </div>

    </div>
  )
}

export default Card
