"use client";
import React, { useState } from 'react'
import { OnBoardingPage2 } from '../components/OnBoardingPage2'
import FetchingDetail from '../components/FetchingDetail'
import OnBoardingPage1 from '../components/OnBoardingPage1'
import ShowDetails from '../components/ShowDetails';

const PaginationContainer  = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const [isOnboardingOpen, setIsOnboardingOpen] = useState(true);

  const handleCloseOnboarding = () => {
    setIsOnboardingOpen(false);
  };
  return (
    <div className='h-screen w-screen overflow-x-hidden'>
     {currentPage === 1 && <OnBoardingPage1 onNext={nextPage} currentPage={currentPage} handleCloseOnboarding={handleCloseOnboarding} isOnboardingOpen={isOnboardingOpen}/>}
      {currentPage === 2 && <OnBoardingPage2 onNext={nextPage} onPrev={prevPage}  currentPage={currentPage} handleCloseOnboarding={handleCloseOnboarding} isOnboardingOpen={isOnboardingOpen}/>}
      {currentPage === 3 && <FetchingDetail onPrev={prevPage} onNext={nextPage} handleCloseOnboarding={handleCloseOnboarding} isOnboardingOpen={isOnboardingOpen}/>}
      {currentPage === 4 && <ShowDetails handleCloseOnboarding={handleCloseOnboarding} isOnboardingOpen={isOnboardingOpen}/>}
    </div>
  )
}

export default PaginationContainer 