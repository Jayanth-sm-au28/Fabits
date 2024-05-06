import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { url } from "inspector";
let slidesToShow = 5;
function NextArrow(props: any) {
  const { className, style, onClick, currentSlide, slideCount } = props;
  console.log(currentSlide);
  const handleKeyDown = (e: any) => {
    if (e.key === "ArrowRight") {
      // Handle Enter or Space key
      onClick(); // Trigger the same action as clicking
    }
  };

  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div
          className={className}
          style={{
            height: "44px",
            width: "44px",
            backgroundImage: "url('/carousel_right_Arrow.svg')",
          }}
          onClick={onClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* <Image src={"/carousel_right_Arrow.svg"} alt="arrow" height={44} width={44} className="h-11 w-11 absolute top-0 left-0" /> */}
        </div>
      )}
    </>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick, currentSlide } = props;
  const handleKeyDown = (e: any) => {
    if (e.key === "ArrowLeft") {
      // Handle Enter or Space key
      onClick(); // Trigger the same action as clicking
    }
  };
  return (
    <>
      {currentSlide !== 0 && (
        <div
          className={className}
          style={{
            height: "44px",
            width: "44px",
            backgroundImage: "url('/carousel_left_Arrow.svg')",
          }}
          onClick={onClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        />
      )}
    </>
  );
}
const MobileHeaderCarousel = () => {
  const data = [
    {
      image: {
        src: "/retirement.svg",
        alt: "retirement",
        height: 48,
        width: 48,
      },
      heading: "Retirement",
      description: "Your old age, taken care of",
    },
    {
      image: {
        src: "/emergency.svg",
        alt: "emergency",
        height: 48,
        width: 48,
      },
      heading: "Emergency",
      description: "Be prepared at all times",
    },
    {
      image: {
        src: "/wedding.svg",
        alt: "wedding",
        height: 48,
        width: 48,
      },
      heading: "Wedding",
      description: "Plan your dream wedding today",
    },
    {
      image: {
        src: "/vacation.svg",
        alt: "vacation",
        height: 48,
        width: 48,
      },
      heading: "Education",
      description: "Build your career, tension-free",
    },
    {
      image: {
        src: "/vacation.svg",
        alt: "vacation",
        height: 48,
        width: 48,
      },
      heading: "Vacation",
      description: "Never too late for the Bahamas!",
    },
    {
      image: {
        src: "/retirement.svg",
        alt: "retirement",
        height: 48,
        width: 48,
      },
      heading: "Retirement",
      description: "Your old age, taken care of",
    },
    {
      image: {
        src: "/emergency.svg",
        alt: "emergency",
        height: 48,
        width: 48,
      },
      heading: "Emergency",
      description: "Be prepared at all times",
    },
    {
      image: {
        src: "/wedding.svg",
        alt: "wedding",
        height: 48,
        width: 48,
      },
      heading: "Wedding",
      description: "Plan your dream wedding today",
    },
    {
      image: {
        src: "/vacation.svg",
        alt: "vacation",
        height: 48,
        width: 48,
      },
      heading: "Education",
      description: "Build your career, tension-free",
    },
    {
      image: {
        src: "/vacation.svg",
        alt: "vacation",
        height: 48,
        width: 48,
      },
      heading: "Vacation",
      description: "Never too late for the Bahamas!",
    },
    {
      image: {
        src: "/retirement.svg",
        alt: "retirement",
        height: 48,
        width: 48,
      },
      heading: "Retirement",
      description: "Your old age, taken care of",
    },
    {
      image: {
        src: "/emergency.svg",
        alt: "emergency",
        height: 48,
        width: 48,
      },
      heading: "Emergency",
      description: "Be prepared at all times",
    },
    {
      image: {
        src: "/wedding.svg",
        alt: "wedding",
        height: 48,
        width: 48,
      },
      heading: "Wedding",
      description: "Plan your dream wedding today",
    },
    {
      image: {
        src: "/vacation.svg",
        alt: "vacation",
        height: 48,
        width: 48,
      },
      heading: "Education",
      description: "Build your career, tension-free",
    },
    {
      image: {
        src: "/vacation.svg",
        alt: "vacation",
        height: 48,
        width: 48,
      },
      heading: "Vacation",
      description: "Never too late for the Bahamas!",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    width: 40,

    // arrows:false
  };

  return (
    <div className="bg-white pt-4">
   
            <p className="text-[#2D2D2D] text-xl font-semibold px-4">
              What financial goal do you want to plan today?
            </p>
            <p className="text-[#575757] text-sm font-normal mt-2 px-4">
              Select a goal to start planning
            </p>
          <div className="py-6 flex items-center overflow-auto scroll-smooth snap-start snap-x ">
          {data.map((item, index) => (
            // <>
            <div
              key={index}
              className=" border border-[#D3DBEC] rounded-2xl p-4 flex-col items-start bg-white  outline-none hover:border hover:border-[#D3DBEC] hover:rounded-2xl hover:shadow-xl hover:dark:bg-gray-800 ml-4  flex"
            >
              <Image
                className=""
                alt={item.image.alt}
                src={item.image.src}
                height={item.image.height}
                width={item.image.width}
              />
              <p className="mt-4 text-[#2D2D2D] font-semibold text-base ">
                {item.heading}
              </p>
              <p className="text-[#575757] font-normal text-sm min-w-32">
                {item.description}
              </p>
            </div>
            // </>
          ))}
          </div>
          <div className="bg-[#F4F7FE] lg:hidden w-full h-2 flex items-center px-4 border border-[#D3DBEC]"></div>
          </div>
    
  );
};

export default MobileHeaderCarousel;
    {/* <Slider {...settings} className="">
        
          {data.map((item, index) => (
            // <>
            <div
              key={index}
              className="w-32 h-40 p-4 outline-none hover:border hover:border-[#D3DBEC] hover:rounded-2xl hover:shadow-xl hover:dark:bg-gray-800 ml-4 hidden lg:flex"
            >
              <Image
                className=""
                alt={item.image.alt}
                src={item.image.src}
                height={item.image.height}
                width={item.image.width}
              />
              <p className="mt-2 text-[#2D2D2D] font-semibold text-base w-40">
                {item.heading}
              </p>
              <p className="text-[#575757] font-normal text-sm w-32">
                {item.description}
              </p>
            </div>
            // </>
          ))}
        </Slider> */}