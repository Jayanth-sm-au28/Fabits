import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { url } from "inspector";
let slidesToShow = 5;
let currentslide=0;
function NextArrow(props: any) {
  const { className, style, onClick, currentSlide, slideCount } = props;
  
  currentslide=currentSlide;
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
            right:"1rem"
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
  currentslide=currentSlide;
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
const HeaderCarousel = () => {
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
    // width: 40,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: false,
    //       dots: false,
    //       nextArrow: <NextArrow />,
    //       prevArrow: <PrevArrow />,
    //       width: 40,
    //     }
    //   }]
    // arrows:false
  };

  return (
    <div className="bg-white shadow-md rounded-3xl sm:pl-6 sm:pt-6 xl:pt-8 xl:pl-8 w-full  pl-8 pt-8 pb-0 border border-[#D3DBEC] min-w-[300]">
      <div className="slider-container ">
        <Slider {...settings} className="">
          <div className=" flex flex-col lg:flex-row">
            <p className="text-[#2D2D2D] md:text-2xl  text-sm font-semibold">
              What financial goal do you want to plan today?
            </p>
            <p className="text-[#575757] text-sm font-normal mt-2">
              Select a goal to start planning
            </p>
            <Image
              className="hidden lg:flex"
              alt="noteAdd"
              src={"/noteAdd.svg"}
              height={128}
              width={128}
            />
          </div>
          {data.map((item, index) => (
            // <>
            <div
              key={index}
              className={`w-32 h-40 p-4 outline-none hover:border hover:border-[#D3DBEC] hover:rounded-2xl hover:shadow-xl hover:dark:bg-gray-800 ml-4 hidden lg:flex`}
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
        </Slider>
      </div>
    </div>
  );
};

export default HeaderCarousel;
