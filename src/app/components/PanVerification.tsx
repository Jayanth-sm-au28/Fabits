"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
const PanVerification = ({onNext,onPrev,currentPage}:any) => {
  const [active, setActive] = useState("Automatic");
  const [value,setValue]=useState("DKWPAXXXXM")
  const inputRef = useRef<HTMLInputElement>(null);

  const handleActive = (activeObj: any) => {
    focusInputField
    setActive(activeObj)
  };
  const focusInputField = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className="bg-gradient-to-b from-[#E6E66A] to-[#FFFFDB]  px-4">
      <div className="flex justify-between items-center pt-6">
        <p className=" font-semibold text-xl text-[#2D2D2D] mr-4">
          Please enter your PAN details to complete verification
        </p>
        <p className="py-1 px-2 font-medium bg-[#2D2D2D] rounded-full text-white text-xs  text-center inline-flex items-center justify-center">
        {`${currentPage}/2`}
        </p>
      </div>
      <div className="">
      <div className="mt-6">
        <p className="text-[#575757] font-medium text-sm text-[DM Sans]">
          Verification method
        </p>
        <div className="flex items-center justify-around mt-2  w-full"> 
          <button className={`py-2.5 w-full mr-2 hover:border-2  hover:rounded-xl hover:border-[#83A720] text-[#394C03] font-semibold text-base  ${active === "Manual" ?
                "border-2 border-[#83A720] border-solid rounded-xl bg-[#83A720] bg-opacity-[8%]" : ""}`}   onClick={() => handleActive("Manual")}>
            Manual
          </button>
          <button className={`py-2.5 w-full hover:border-2 hover:rounded-xl hover:border-[#83A720] text-[#394C03] font-semibold text-base ${active === "Automatic" ?
                "border-2 border-[#83A720] border-solid rounded-xl bg-[#83A720] bg-opacity-[8%]" : ""}`}  onClick={() => handleActive("Automatic")}>
            Automatic
          </button>
        </div>
        <div className="flex items-center justify-between mt-6  w-full">
          <p className="text-[#575757] font-medium text-sm w-full ">PAN Card Number</p>
          <input className="bg-[#F5F8CC] border border-[#EAF0BB] pl-3 py-2.5 text-base font-medium w-full h-11 text-[#394C03] rounded-xl outline-none " value={active === "Automatic" ? value :""} onClick={focusInputField}/>
        </div>
      </div>
      <div className="w-full pb-6 flex flex-row items-center justify-around mt-8 ">
        <button onClick={onPrev} className="bg-[#F5F8CC] px-4 py-3 rounded-xl text-white items-center justify-center border-2 border-[#83A720]  border-opacity-10 mr-4 ">
        <Image
          className=" fill-[#83A720] h-6 w-6"
          alt="keyboard_backspace"
          src={"/keyboard_backspace.svg"}
          height={12}
          width={18}
        />
        </button>
        <div onClick={onNext} className="rounded-xl w-full px-4 py-3 flex items-center justify-between bg-[#83A720] font-medium text-base  text-white">
          <span>Complete</span>
          <Image
          className=" fill-white h-6 w-6"
          alt="arrow_right_alt"
          src={"/arrow_right_alt.svg"}
          height={20}
          width={20}
        />
        </div>
      </div>
      </div>
    </div>
  );
};

export default PanVerification;
