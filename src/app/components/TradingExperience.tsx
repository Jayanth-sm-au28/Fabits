"use client";
import Image from 'next/image';
import React, { useState } from 'react'

const TradingExperience = ({onNext,currentPage}:any) => {
  const [active, setActive] = useState({ label: "Beginner", year: "1Y-3Y" });

  const handleActive = (activeObj: any) => {
    setActive(activeObj)
  }
  // via-transparent to-transparent
  return (
    <div className="bg-gradient-to-b from-[#E6E66A] to-[#FFFFDB]  relative z-50">
      <div className="flex justify-between items-start px-4 pt-6">
        <p className="font-semibold text-xl text-[#2D2D2D] mr-4">
          How much trading experience do you have?
        </p>
        <p className="py-1 px-2 font-medium bg-[#2D2D2D] rounded-full text-white text-xs  text-center inline-flex items-center justify-center">
         {`${currentPage}/2`}
        </p>
      </div>
      <div className=''>
      <div className="flex items-center justify-around mt-6 mb-8 font-semibold text-base text-[#394C03] px-1.5">
        {[
          { label: "None", year: "<1Y" },
          { label: "Beginner", year: "1Y-3Y" },
          { label: "Mid", year: "3Y-5Y" },
          { label: "Pro", year: ">5Y" },
        ].map((item, index, array) => (
          <div
            key={`item${index}`}
            className={`flex flex-col items-center lg:py-2.5 lg:px-5 xs:py-1.5 xs:px-2.5 justify-center hover:border-2 hover:rounded-xl 
          hover:border-[#83A720]	w-full  ${active.label === item.label ?
                "border-2 border-[#83A720] border-solid rounded-xl bg-[#83A720] bg-opacity-[8%]" : ""} ${index !== array.length - 1 ? "mr-2" : ""}`}
            onClick={() => handleActive(item)}
          >
            <p className='text-[#394C03] font-semibold text-base'>{item.label}</p>
            <p className='text-[#677C2B] font-normal text-sm mt-1'>{item.year}</p>
          </div>
        ))}
      </div>
      <div className="w-full px-4 pb-6">
        <button onClick={onNext} className="w-full rounded-xl inline-flex items-center justify-between bg-[#83A720] px-4 py-3 text-white font-medium text-base">
          Next
          <Image src={"/arrow_right_alt.svg"} alt="right_arrow" height={10} width={10} className='h-6 w-6' />
        </button>
      </div>
      </div>
    </div>
  )
}

export default TradingExperience