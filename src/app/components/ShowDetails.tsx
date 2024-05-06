import Image from "next/image";
import React from "react";
import TradingExperience from "./TradingExperience";
import HeaderWAnimationImg from "./HeaderWAnimationImg";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ShowDetails = ({ handleCloseOnboarding, isOnboardingOpen }: any) => {
    const data = [
        {
            "img": "/showdetails/1.png",
            "accInfo": {
                "heading": "CMRPMXXXXF",
                "description": ["ASHAR RAI MUJEEB"]
            },
            "fetchedDetails": {
                "heading": "Fetched Via",
                "description": "NSDL"
            },
            "UpdatedDeatils": {
                "heading": "Last Updated",
                "description": "24/04/2024"
            }
        },
        {
            "img": "/showdetails/2.png",
            "accInfo": {
                "heading": "Address",
                "description": ["Aadhaar", "UID"]
            },
            "fetchedDetails": {
                "heading": "Fetched Via",
                "description": "Digio"
            },
            "UpdatedDeatils": {
                "heading": "Date of Birth",
                "description": "18/10/1994"
            }
        },
        {
            "img": "/showdetails/3.png",
            "accInfo": {
                "heading": "Address",
                "description": ["16/2, 8 Jat Regiment, c/o 56 APO"]
            },
            "fetchedDetails": {
                "heading": "Fetched Via",
                "description": "Digio"
            },
            "UpdatedDeatils": {
                "heading": "Address Type",
                "description": "Correspondence"
            }
        }
    ];
    const router = useRouter();
    return (
        <div className={` w-screen h-screen min-w-screen bg-no-repeat bg-bottom bg-cover relative ${isOnboardingOpen ? "bg-calculator" : "bg-calculator p-2"}`}>
            {isOnboardingOpen && (
                <>
                    <div className="h-screen w-screen flex flex-col-reverse "
                    // style={{ height: 'calc(100vh + 119px)'}}
                    >
                        <div className="relative bg-on-loading-senery min-h-[350px] min-w-screen bg-no-repeat bg-bottom bg-cover pt-6 px-4 rounded-t-2xl  ">

                            <div className="">
                                <p
                                    className="text-2xl font-semibold text-[#1D3B7A]"
                                >
                                    Verify your details
                                </p>
                                <p className="text-base font-normal text-[#2E529E]">Aadhaar link found</p>
                            </div>
                            <div className="pb-20">
                                {
                                    data.map((item: any, index: any) => (
                                        <Link key={`item-${index}`} className="shadow-2xl p-4 rounded-[20px] bg-white w-full mt-6 flex flex-col items-start " href="https://www.linkedin.com/in/jayanth-s-m-042450250/" target="_blank" rel="noopener noreferrer">
                                            <div className="flex items-start">
                                                <Image alt={`item${index}`} src={item?.img} className="h-16 w-16 rounded-full mr-3" height={64} width={64} />
                                                <div>
                                                    <p className="text-[#1D3B7A] font-semibold text-xl" >{item?.accInfo?.heading}</p>
                                                    {
                                                        item?.accInfo?.description?.map((desc: any, index: any) => (
                                                            <p key={`desc${index}`} className="text-[#5E78AE] font-medium text-sm">{desc}</p>
                                                        ))
                                                    }
                                                </div>

                                            </div>
                                            <div className="mt-2.5 flex">
                                                <div className="mr-6">
                                                    <p className="text-[#5E78AE] font-medium text-sm">{item?.fetchedDetails?.heading}</p>
                                                    <p className="text-[#1D3B7A] font-semibold text-base">{item?.fetchedDetails?.description}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[#5E78AE] font-medium text-sm">{item?.UpdatedDeatils?.heading}</p>
                                                    <p className="text-[#1D3B7A] font-semibold text-base">{item?.UpdatedDeatils?.description}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        {/* <HeaderWAnimationImg heading={`Verify your details`} description={`Aadhaar link found`} /> */}
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
            )
            }
        </div>
    );
};

export default ShowDetails;
