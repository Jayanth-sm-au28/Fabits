"use client";
import React, { useState } from "react";
import Cards from "./components/Cards";
import Image from "next/image";
import HeaderCarousel from "./components/HeaderCarousel";
import MobileHeaderCarousel from "./components/MobileHeaderCarousel";

const PlanPage = () => {
  const [active, setActive] = useState({
    icon: "/target.svg",
    label: "Plan a Goal",
  });
  const data = [
    {
      category: "Finance",
      items: [
        {
          icon: "/target.svg",
          label: "Plan a Goal",
        },
        {
          icon: "/bubble.svg",
          label: "Discover Top Funds",
        },
        {
          icon: "/realEstate.svg",
          label: "My Investments",
        },
        {
          icon: "/ipo.svg",
          label: "IPO",
        },
      ],
    },
    {
      category: "Insurance",
      items: [
        {
          icon: "/insurance.svg",
          label: "Insurance",
        },
        {
          icon: "/setting.svg",
          label: "Setting",
        },
      ],
    },
  ];
  const handleActive = (activeObj: any) => {
    setActive(activeObj);
  };

  return (
    <>
      <div className="overflow-x-hidden ">
        <div className="flex overflow-x-hidden ">
          {/* left side */}
          <aside
            id="sidebar"
            className="fixed hidden z-20 h-full top-0 left-0  lg:flex flex-shrink-0 flex-col w-[296px] transition-width duration-75"
            aria-label="Sidebar"
          >
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-[#F4F7FE]">
              <div className="flex-1 flex flex-col pb-4 overflow-y-auto">
                <div className="flex-1 px-6 bg-[#F4F7FE]  mt-12 ">
                  <div className="flex items-center justify-between mt-6">
                    <Image
                      className=""
                      alt="fabit"
                      src={"/fabit.svg"}
                      height={32}
                      width={120}
                    />
                    <Image
                      className=""
                      alt="bell"
                      src={"/bell.svg"}
                      height={40}
                      width={40}
                    />
                  </div>
                  <div className="bg-[#E7EDFC] px-4 py-3 rounded-2xl flex flex-row item-center justify-around mt-12">
                    <div className="mr-4">
                      <Image
                        className="h-12 w-12"
                        alt="avatar"
                        src={"/avatar.svg"}
                        height={200}
                        width={200}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base font-semibold text-[#2D2D2D]">
                        Dhruv S.
                      </p>
                      <p className="text-sm font-normal text-[#5D5D5D]">
                        dhruv@fabits.com
                      </p>
                    </div>
                    <div>
                      <Image
                        className="h-6 w-6"
                        alt="menuDots"
                        src={"/menuDots.svg"}
                        height={100}
                        width={100}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center ml-4 mt-6 mb-4 py-2">
                    {" "}
                    <Image
                      className="h-5 w-5 mr-3"
                      alt="home"
                      src={"/home.svg"}
                      height={24}
                      width={24}
                    />
                    <p className="text-[#2D2D2D] text-base font-normal">Home</p>
                  </div>
                  <div className="">
                    {data.map((category, index) => (
                      <div key={index}>
                        <h2 className="text-[#6E6E6E] text-xs font-medium uppercase">
                          {category.category}
                        </h2>
                        <ul className="space-y-2 pb-2 flex flex-col items-start">
                          {category.items.map((item, idx) => (
                            <li
                              key={idx}
                              className={`text-[#2D2D2D] text-sm font-normal mt-4 w-full
                            px-4 py-2
                            ${
                              active.label === item.label
                                ? "text-[#41558D] bg-[#E7EDFC] border-2 rounded-xl border-[#41558D]"
                                : "text-[#2D2D2D]"
                            }`}
                              onClick={() => handleActive(item)}
                            >
                              <div className="flex flex-row item-start ">
                                <Image
                                  className={`mr-3 ${
                                    active.label === item.label
                                      ? "fill-[#41558D] "
                                      : "fill-[#2D2D2D]"
                                  }`}
                                  alt="image"
                                  src={item.icon}
                                  height={20}
                                  width={20}
                                />
                                <p>{item.label}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
          {/* right side */}
          <div
            className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
            id="sidebarBackdrop"
          ></div>
          <div
            id="main-content"
            className="h-full w-full bg-[#F4F7FE] relative overflow-y-auto lg:ml-[296px]"
          >
            <main className="w-full 2xl:px-12 xl:px-6 overflow-x-hidden">
              <div className="lg:pt-6  lg:mt-12 mt-0 pt-0">
                <div className="lg:hidden w-full py-5 flex items-center justify-between px-4 bg-white">
                  <div className="flex items-center">
                  <Image
                      className="h-6 w-6"
                      alt="fabit"
                      src={"/MobileMenu.svg"}
                      height={32}
                      width={120}
                    /> 
                <Image
                      className="h-6"
                      alt="fabit"
                      src={"/fabit.svg"}
                      height={32}
                      width={120}
                    />
                  </div>
                  <div className="flex items-center">
                  <Image
                      className="h-6 w-6 mr-4"
                      alt="fabit"
                      src={"/notifications.svg"}
                      height={32}
                      width={120}
                    /> 
                <Image
                      className="h-6 w-6"
                      alt="fabit"
                      src={"/account_circle.svg"}
                      height={32}
                      width={120}
                    />
                  </div>
                </div>
                <div className="bg-[#F4F7FE] lg:hidden w-full py-4 flex items-center px-4 border border-[#D3DBEC]">
                <Image
                      className="h-6 w-6"
                      alt="chevron_left"
                      src={"/chevron_left.svg"}
                      height={32}
                      width={120}
                    /> 
                    <p className="text-[#2D2D2D] font-semibold text-base">Plan a Goal</p>
                
                </div>
                <div className="px-4 hidden xl:block">
                  <HeaderCarousel />
                </div>
                <div className=" xl:hidden">
                  <MobileHeaderCarousel />
                </div>
                <div className="lg:px-4">
                <Cards />
                </div>
              </div>
            </main>
            {/* <footer className=" overflow-x-hidden bg-white rounded-xl shadow m-4 dark:bg-gray-800 lg:mx-16  h-20 flex min-w-[300px]">
              <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  © 2023{" "}
                  <a href="https://fabits.com/" className="hover:underline">
                    Fabits™
                  </a>
                  . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                  <li>
                    <a href="#" className="hover:underline me-4 md:me-6">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline me-4 md:me-6">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline me-4 md:me-6">
                      Licensing
                    </a>
                  </li>
                  <li className="hidden md:flex">
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </footer> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanPage;
