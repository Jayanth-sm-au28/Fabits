import React from "react";
import HeaderWAnimationImg from "./HeaderWAnimationImg";
import Image from "next/image";
import PanVerification from "./PanVerification";
import HeaderWAnimationWLoading from "./HeaderWAnimationWLoading";

const FetchingDetail = ({ onPrev, onNext, isOnboardingOpen, handleCloseOnboarding }: any) => {
  return (
    <div className={` w-screen h-screen min-w-screen bg-no-repeat bg-bottom bg-cover relative ${isOnboardingOpen ? "bg-calculator" : "bg-calculator p-2"}`}>
      {isOnboardingOpen && (
        <>
          <div className="h-screen w-screen flex flex-col-reverse ">
            <div className="bg-gradient-to-b from-[#E6E66A] to-[#FFFFDB] px-4 "></div>

            <HeaderWAnimationWLoading
              heading={"Fetching your PAN Details"}
              description={"Getting your PAN details by your chosen method"}
              onNext={onNext}
            />
            <div className="flex items-center justify-center" onClick={handleCloseOnboarding}>
              <Image
                className="w-10 h-10 "
                alt="closeIcon"
                src={"/closeIcon.svg"}
                height={40}
                width={40}
              />
            </div>
          </div>
        </>)}
    </div>
  );
};

export default FetchingDetail;
