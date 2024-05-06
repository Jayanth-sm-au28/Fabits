import React from "react";
import HeaderWAnimationImg from "./HeaderWAnimationImg";
import PanVerification from "./PanVerification";
import Image from "next/image";

export const OnBoardingPage2 = ({ onNext, onPrev, currentPage, isOnboardingOpen, handleCloseOnboarding }: any) => {
  return (
    <div className={` w-screen h-screen min-w-screen bg-no-repeat bg-bottom bg-cover relative ${isOnboardingOpen ? "bg-calculator" : "bg-calculator p-2"}`}>
      {isOnboardingOpen && (
        <>
          <div className="h-screen w-screen flex flex-col-reverse ">
            <PanVerification onNext={onNext} onPrev={onPrev} currentPage={currentPage} />
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
        </>
      )}
    </div>
  );
};
