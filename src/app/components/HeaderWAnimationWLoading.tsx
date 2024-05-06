"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const HeaderWAnimationWLoading = (props: any) => {
    const { heading, description,onNext } = props;
    const carRef = useRef(null);
    const leftWheelRef = useRef(null);
    const rightWheelRef = useRef(null);
    const [translucent, setTranslucent] = useState(false);

    useEffect(() => {
        const car: any = carRef.current;
        const leftWheel: any = leftWheelRef.current;
        const rightWheel: any = rightWheelRef.current;

        // Define keyframes animation
        const keyframes = `
            @keyframes moveCar {
                0% {
                    transform: translateX(-100%);
                }  
                100% {
                    transform: translateX(50vw);
                }
            }

            @keyframes bounceCar {
                0%,100%  {
                    transform: translateY(0px)  translateX(50vw);
                    
                }
                50% {
                    transform: translateY(-5px)  translateX(50vw);
                }
            }

            @keyframes rotateWheel {
                100% {
                    transform: rotate(360deg);
                }
            }
        `;

        // Create a style element and append the keyframes to it
        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);

        // Apply animation to the car and wheels
        car.style.animation = 'moveCar 4s ease-in-out forwards';
        leftWheel.style.animation = 'rotateWheel 1s linear infinite';
        rightWheel.style.animation = 'rotateWheel 1s linear infinite';
        const timeout = setTimeout(() => {
            car.style.animation = 'bounceCar 1s ease-in-out infinite';
            leftWheel.style.animation = '';
            rightWheel.style.animation = '';
        }, 4000);
       
        const timeoutForTranslucent = setTimeout(() => {
           setTranslucent(true);
           setTimeout(() => {
            onNext();
        }, 2000);
        }, 8000);



        // Cleanup function
        return () => {
            document.head.removeChild(style);
            car.style.animation = '';
            leftWheel.style.animation = '';
            rightWheel.style.animation = '';
            clearTimeout(timeout);
            clearTimeout(timeoutForTranslucent);
        };
        
    }, []);

    return (
        <div className={`relative bg-on-loading-senery min-h-[534px] min-w-screen bg-no-repeat bg-bottom bg-cover pt-12 px-4 rounded-t-2xl ${translucent ? 'opacity-50' : ''}`}>
            <div>
                <p className="text-2xl font-semibold text-[#1D3B7A]">{heading}</p>
                <p className="text-base font-normal text-[#2E529E]">{description}</p>
            </div>
            <div className="bg-car bg-no-repeat bg-bottom bg-cover z-10"></div>
            <div ref={carRef} className="absolute bottom-36 h-10 w-20">
                <Image src="/car/car.png" alt="car_body" className="h-full w-full" height={30} width={40} />
                <div className="relative">
                    <div ref={leftWheelRef} className="absolute -top-5 left-1.5 h-5 w-5">
                        <Image src="/car/wheel.png" alt="car_wheel" className="h-full w-full" height={30} width={40} />
                    </div>
                    <div ref={rightWheelRef} className="absolute -top-5 right-2.5 h-5 w-5">
                        <Image src="/car/wheel.png" alt="car_wheel" className="h-full w-full" height={30} width={40} />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default HeaderWAnimationWLoading