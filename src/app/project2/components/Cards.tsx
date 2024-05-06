import React from "react";
import Image from "next/image";

const Cards = () => {
  const data = [
    {
      name: "Dhairyadev & Sayali’s Vacation Plan 1",
      goalProgress: "₹ 2,70,00,000",
      goalDate: "March 2035",
      goalHealth: "Excellent!",
      goalAmount: "₹ 5,00,00,000",
      goalAheadBy: "16 months",
    },
    {
      name: "Dhairyadev & Sayali’s Vacation Plan 2",
      goalProgress: "₹ 2,70,00,000",
      goalDate: "Jan 2040",
      goalHealth: "Good",
      goalAmount: "₹ 5,00,00,000",
      goalAheadBy: "On track",
    },
    {
      name: "Dhairyadev & Sayali’s Vacation Plan 3",
      goalProgress: "₹ 42,00,000",
      goalDate: "March 2035",
      goalHealth: "Weak",
      goalAmount: "₹ 10,00,00,000",
      goalAheadBy: "2 months",
    },
    {
      name: "Dhairyadev & Sayali’s Vacation Plan 4",
      goalProgress: "₹ 11,24,00,000",
      goalDate: "March 2035",
      goalHealth: "Poor",
      goalAmount: "₹ 15,00,00,000",
      goalAheadBy: "18 months",
    },
    {
      name: "Dhairyadev & Sayali’s Vacation Plan 5",
      goalProgress: "₹ 11,24,00,000",
      goalDate: "March 2035",
      goalHealth: "Excellent!",
      goalAmount: "₹ 15,00,00,000",
      goalAheadBy: "3 months",
    },
  ];

  const getProgressBarFilledColor = (goalHealth: any) => {
    switch (goalHealth) {
      case "Excellent!":
      case "Good":
        return "bg-[#C5DEBD]";
      case "Weak":
        return "bg-[#F7DA95]";
      case "Poor":
        return "bg-[#FFB9B9]";
      default:
        return "bg-gray-500";
    }
  };

  const getProgressBarUnfilledColor = (goalHealth: any) => {
    switch (goalHealth) {
      case "Excellent!":
        return "bg-[#5B8350]";
      case "Good":
        return "bg-[#74A766]";
      case "Weak":
        return "bg-[#D99E16]";
      case "Poor":
        return "bg-[#E85D5D]";
      default:
        return "";
    }
  };

  const getImageSource = (goalHealth: any) => {
    switch (goalHealth) {
      case "Excellent!":
        return "/heart.svg";
      case "Good":
        return "/goodHeart.svg";
      case "Weak":
        return "/weekHeart.svg";
      case "Poor":
        return "/poorHeart.svg";
      default:
        return "";
    }
  };

  const getTextColor = (goalHealth: any) => {
    switch (goalHealth) {
      case "Excellent!":
        return "text-[#5B8350]";
      case "Good":
        return "text-[#74A766]";
      case "Weak":
        return "text-[#D99E16]";
      case "Poor":
        return "text-[#E85D5D]";
      default:
        return "";
    }
  };

  return (
    <section className="bg-white lg:pt-2  pt-6 lg:rounded-3xl lg:mt-6 pb-16 min-w-[300px] lg:shadow-md  lg:border lg:border-[#D3DBEC]">
      {/* Header Section */}
      <div className="bg-white outline-none lg:border-b-2 2xl:p-8 lg:p-4   2xl:mx-10 flex flex-col xl:flex-row text-left lg:items-center justify-between">
        <div className="lg:mt-0">
          <p className="text-[#2D2D2D] text-xl lg:text-2xl font-semibold px-4">
            Track current goals
          </p>
        </div>
        <div className="flex items-center justify-between">
          {" "}
          <div className="hidden 2xl:flex flex-row justify-between mr-6 ">
            {" "}
            <p className="text-[#41558D] font-medium text-sm">Filter</p>
            <Image
              className="p-1"
              alt="filter"
              src={"/filter.svg"}
              height={18}
              width={18}
            />
          </div>
          <div className="hidden 2xl:flex flex-row justify-between">
            {" "}
            <p className="text-[#727272] font-medium text-sm">
              Sort by:
              <span className="text-[#41558D] ml-1">Progress (High to Low)</span>
            </p>
            <Image
              className="p-1"
              alt="dropDown"
              src={"/dropDown.svg"}
              height={18}
              width={18}
            />
          </div>
          <div className=" flex flex-row items-center justify-around mt-6 lg:mt-4 px-4">
            <div className="border-2 p-2 border-[#D3DBEC] rounded-md flex flex-row  lg:mt-4 xl:mt-0 lg:p-0 lg:ml-0">
              <Image
                className="xl:ml-2 "
                alt="search"
                src={"/search.svg"}
                height={20}
                width={20}
              />{" "}
              <input
                placeholder="Search"
                className="sm:h-6 lg:h-10 ml-4 outline-none w-full"
              />
            </div>
            <div className="sm:ml-4 2xl:hidden">
              {" "}
              <Image
                className="h-10 w-10 ml-4"
                alt="menu"
                src={"/menu.svg"}
                height={40}
                width={40}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center border-[#D3DBEC] justify-center lg:hidden bg-[#F4F7FE] border-y-2 mt-6 py-3">
        <Image
          className="h-4 w-4"
          alt="info"
          src={"/info.svg"}
          height={16}
          width={16}
        />
        <p className="text-[#575757] font-medium text-sm ml-1">
          Tap on a card to view more information
        </p>
      </div>
      {/* Body Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 mt-6">
        <div className="grid grid-cols-1 gap-4 2xl:gap-4 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 rounded-3xl  shadow-lg p-6 transform hover:scale-105 transition duration-300"
            >
              {/* Plan Name Section */}
              <div className="mb-8  flex flex-row item-center justify-around">
                <Image
                  className="xl:h-14 2xl:w-16 lg:h-16 lg:w-16 hidden xl:block"
                  alt="Rectangle"
                  src={"/Rectangle.svg"}
                  height={72}
                  width={72}
                />
                <Image
                  className="h-14 w-14 xl:hidden block"
                  alt="vacation"
                  src={"/vacation.svg"}
                  height={72}
                  width={72}
                />
                <p className="text-[#2D2D2D] font-semibold text-xl ml-4">
                  {item.name}
                </p>
              </div>
              {/* Goal Details Section */}
              <div className="border-y border-[#D3DBEC]">
                <div className="flex items-center justify-between my-6">
                  <div className="flex flex-col items-start">
                    <div className="mt-3">
                      <p className="text-[#727272] font-medium text-sm">
                        Goal Progress
                      </p>
                      <p className="text-[#2D2D2D] font-semibold text-base mt-1">
                        {item.goalProgress}
                      </p>

                    </div>
                    <div className="mt-3">
                      <p className="text-[#727272] font-medium text-sm">
                        Goal Date
                      </p>
                      <p className="text-[#2D2D2D] font-semibold text-base mt-1">
                        {item.goalDate}
                      </p>
                    </div>
                  </div>
                  <div>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="mt-3">
                      <p className="text-[#727272] font-medium text-sm">
                        Goal Amount
                      </p>
                      <p className="text-[#2D2D2D] font-semibold text-base mt-1">
                        {item.goalAmount}
                      </p>
                    </div>
                    <div className="flex items-center justify-between  mt-3">
                      <div className="">
                        <p className="text-[#727272] font-medium text-sm">
                          Goal Health
                        </p>
                        <div className="flex items-center mt-1">
                          <Image
                            className={`p-1 ${getImageSource(item.goalHealth)}`}
                            alt="heart"
                            src={getImageSource(item.goalHealth)}
                            height={26}
                            width={26}
                          />
                          <p
                            className={`font-semibold text-base ${getTextColor(
                              item.goalHealth
                            )}`}
                          >
                            {item.goalHealth}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>

              </div>

              {/* Progress Bar Section */}
              <div
                className={`w-full h-2  ${getProgressBarUnfilledColor(
                  item.goalHealth
                )} rounded-full mt-6 ${getProgressBarFilledColor(
                  item.goalHealth
                )}`}
              >
                <div
                  className={`w-2/3 h-full text-center text-xs text-white rounded-full ${getProgressBarUnfilledColor(
                    item.goalHealth
                  )}`}
                ></div>
              </div>
              {/* Goal Ahead By Section */}
              <div className="mt-4">
                <p className="text-[#575757] text-sm font-medium">
                  {item.goalHealth === "Excellent!" && "Goal ahead by"}
                  {(item.goalHealth === "Weak" || item.goalHealth === "Poor") &&
                    "Goal behind by"}
                  <span
                    className={`ml-1 text-sm font-medium ${getTextColor(
                      item.goalHealth
                    )}`}
                  >
                    {item.goalAheadBy}
                  </span>
                </p>
              </div>
              {/* Footer Section */}
              {["Weak", "Poor"].includes(item.goalHealth) && (
                <div className="mt-4 bg-[#FDF7E8] flex items-center py-[6px] px-2 rounded-lg">
                  <Image
                    className="p-1"
                    alt="emoji"
                    src={"/emoji.svg"}
                    height={18}
                    width={18}
                  />
                  <p className="text-[#D99E16] text-sm font-medium ">
                    Boost to reach your goal sooner!
                  </p>
                </div>
              )}
              {["Weak", "Poor"].includes(item.goalHealth) && (
                <div className="flex justify-center items-center mt-8">
                  <button className="p-3 flex justify-center items-center border-2 rounded-lg w-full text-lg text-white font-semibold bg-[#41558D] ">
                    <Image
                      className="mr-2"
                      alt="bolt"
                      src={"/bolt.svg"}
                      height={14}
                      width={14}
                    />
                    Boost
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
