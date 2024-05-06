import Image from "next/image";
import React from "react";
import TradingExperience from "./TradingExperience";
import HeaderWAnimationImg from "./HeaderWAnimationImg";

const OnBoardingPage1 = ({ onNext, currentPage, handleCloseOnboarding,isOnboardingOpen }: any) => {
  return (
    <div className={`bg-calculator w-screen h-screen min-w-screen  bg-bottom bg-cover relative ${isOnboardingOpen ? "" : "bg-calculator bg-no-repeat p-2"}`}>

      {/* style={{ height: 'calc(100vh + 119px)'}} */}
      {isOnboardingOpen && (
        <>
          <div className=" w-screen flex flex-col-reverse h-screen z-20 relative"   >
            <TradingExperience onNext={onNext} currentPage={currentPage} style={{ zIndex: 10 }} />
            <HeaderWAnimationImg heading={`Get started with Fabits`} description={`Answer a few questions to begin onboarding`} />
            <div className="flex items-center justify-center pb-4" onClick={handleCloseOnboarding}>
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

export default OnBoardingPage1;
