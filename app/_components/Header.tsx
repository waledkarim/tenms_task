"use client";

import { IoIosArrowDown } from "react-icons/io";
import { AllCoursesSVG, AllProgrammesSVG, BanglaSVG, BundleSVG, CareerReadinessSVG, ClassEightSVG, ClassNineSVG, ClassSevenSVG, ClassSixSVG, ClassTenSVG, CloseHamburgerSVG, DesignAndCreativeSVG, EnglishFoundationProgrammeSVG, EngSVG, FreelancingSVG, FreeSVG, HSCSVG, IELTSProgrammeSVG, KidsAgeSevenFourteenSVG, KidsEnglishSVG, LanguageLearningSVG, OpenHamburgerSVG, ProfessionalSVG, SkillsAndITSVG, SpokenEnglishSVG } from "../_svg";
import DropDownMenuTwo from "./DropdonMenuTwo";
import DropDownMenu from "./DropdownMenu";
import Image from "next/image";
import SideBar from "./Sidebar";
import { useState } from "react";
import { useLanguageContext } from "../_context/LanguageContext";

export default function Header(){

    const [open, setOpen] = useState(false);
    const { lang, setLang } = useLanguageContext();

    return(
        <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b py-3">

                {/* header */}
                <div className="wrapper flex gap-x-2 justify-between items-center relative">

                    {/* sidebar in SM SCREEN and MD SCREEN when button clicked */}
                    {
                        open && <SideBar />
                    }
                    

                    {/* hamburger ar logo ar input*/}
                    <div className="flex gap-2 flex-1">

                        <div className="flex justify-center items-center gap-2">

                            <button onClick={() => setOpen(!open)} className="xl:hidden">
                                {
                                    open ? < CloseHamburgerSVG /> : <OpenHamburgerSVG />
                                }
                            </button>
                            
                            <Image
                                src={"https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"}
                                width={100}
                                height={28}
                                alt="10MS Logo"
                            />
                        </div>

                        {/* input only dekha jabe on md screens */}
                        <div className="hidden md:flex px-3 py-2 border-2 rounded-3xl focus-within:rounded-br-none focus-within:rounded-bl-none w-2/3 relative">

                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" fill="none" viewBox="0 0 27 24"><path fill="#fff" d="M0 0H26.514V23.99H0z"></path><path fill="#111827" d="M21.247 20.065l-2.83-2.82a6.59 6.59 0 001.407-4.078 6.657 6.657 0 10-6.657 6.657 6.59 6.59 0 004.077-1.407l2.82 2.83a.834.834 0 001.365-.271.833.833 0 00-.182-.911zM8.174 13.167a4.993 4.993 0 119.985 0 4.993 4.993 0 01-9.985 0z"></path><path fill="#F1844C" d="M3.875.975l1.238 1.807c.33.481.853.794 1.433.857l2.178.236-1.807 1.239c-.481.33-.794.852-.857 1.432l-.237 2.178-1.238-1.807a1.998 1.998 0 00-1.432-.857L.974 5.824l1.808-1.239c.48-.33.794-.853.857-1.432L3.875.975zM8.59 19.77l-.337.54a1.998 1.998 0 00-.21 1.656l.19.607-.54-.337a1.998 1.998 0 00-1.655-.21l-.607.19.337-.54c.308-.494.385-1.099.21-1.655l-.19-.607.54.337c.494.308 1.099.385 1.655.21l.607-.19zM23.575 6.068l.223 1.396c.092.576.43 1.083.927 1.388l1.205.74-1.396.222a1.998 1.998 0 00-1.388.928l-.74 1.204-.222-1.396a1.997 1.997 0 00-.927-1.387l-1.205-.74 1.396-.223a1.997 1.997 0 001.388-.927l.74-1.205z"></path></svg>
                            </span>
                            <input type="search" placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..." className="focus-visible:outline-none pl-2 w-full placeholder:text-sm placeholder:font-medium placeholder:text-gray-500 peer"/>

                            {/* suggestion dropdown when search focused */}
                            <div className="hidden peer-focus:flex absolute left-0 right-0 top-full flex-col rounded-b-3xl border-0 bg-white pb-5 pt-3 md:max-h-[450px] md:min-h-[200px] md:border md:shadow">

                                <div className="flex flex-col gap-2">

                                    <p className="px-5 text-sm font-medium leading-[21px] text-[#111827]">জনপ্রিয় অনুসন্ধান</p>
                                    <ul>

                                        <li className="block cursor-pointer px-5 py-1.5 hover:bg-[#F3F4F6]">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 text-sm font-normal text-[#6B7280]">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#9CA3AF" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(156, 163, 175)"}}><path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"></path></svg>
                                                    <p className="truncate block max-w-[190px]">HSC 25 শেষ মুহূর্তের প্রস্তুতি কোর্স</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="block cursor-pointer px-5 py-1.5 hover:bg-[#F3F4F6]">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 text-sm font-normal text-[#6B7280]">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#9CA3AF" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(156, 163, 175)"}}><path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"></path></svg>
                                                    <p className="truncate block max-w-[190px]">hsc 26</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="block cursor-pointer px-5 py-1.5 hover:bg-[#F3F4F6]">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 text-sm font-normal text-[#6B7280]">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#9CA3AF" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(156, 163, 175)"}}><path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"></path></svg>
                                                    <p className="truncate block max-w-[190px]">english</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="block cursor-pointer px-5 py-1.5 hover:bg-[#F3F4F6]">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 text-sm font-normal text-[#6B7280]">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#9CA3AF" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(156, 163, 175)"}}><path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"></path></svg>
                                                    <p className="truncate block max-w-[190px]">ielts</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="block cursor-pointer px-5 py-1.5 hover:bg-[#F3F4F6]">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 text-sm font-normal text-[#6B7280]">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#9CA3AF" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(156, 163, 175)"}}><path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"></path></svg>
                                                    <p className="truncate block max-w-[190px]">৯ম শ্রেণি - অনলাইন ব্যাচ ২০২৫</p>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>

                                </div>
                                <div className="fixed top-[calc(100vh - 40px)] left-0 w-full h-full backdrop bg-black/50 z-[-1]"/>

                            </div>


                        </div>

                    </div>

                    {/* search, telephone ar login button eikhane only in SM SCREENS */}
                    <div className="flex gap-x-3 items-center md:hidden">

                        {/* search ar phone ekshathe */}
                        <div className="flex items-center justify-center gap-2">
                            <button className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" fill="none" viewBox="0 0 27 24"><path fill="#fff" d="M0 0H26.514V23.99H0z"></path><path fill="#111827" d="M21.247 20.065l-2.83-2.82a6.59 6.59 0 001.407-4.078 6.657 6.657 0 10-6.657 6.657 6.59 6.59 0 004.077-1.407l2.82 2.83a.834.834 0 001.365-.271.833.833 0 00-.182-.911zM8.174 13.167a4.993 4.993 0 119.985 0 4.993 4.993 0 01-9.985 0z"></path><path fill="#F1844C" d="M3.875.975l1.238 1.807c.33.481.853.794 1.433.857l2.178.236-1.807 1.239c-.481.33-.794.852-.857 1.432l-.237 2.178-1.238-1.807a1.998 1.998 0 00-1.432-.857L.974 5.824l1.808-1.239c.48-.33.794-.853.857-1.432L3.875.975zM8.59 19.77l-.337.54a1.998 1.998 0 00-.21 1.656l.19.607-.54-.337a1.998 1.998 0 00-1.655-.21l-.607.19.337-.54c.308-.494.385-1.099.21-1.655l-.19-.607.54.337c.494.308 1.099.385 1.655.21l.607-.19zM23.575 6.068l.223 1.396c.092.576.43 1.083.927 1.388l1.205.74-1.396.222a1.998 1.998 0 00-1.388.928l-.74 1.204-.222-1.396a1.997 1.997 0 00-.927-1.387l-1.205-.74 1.396-.223a1.997 1.997 0 001.388-.927l.74-1.205z"></path></svg>
                            </button>
                            <button className="self-end">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#130F26" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.61 10.394c3.325 3.323 4.079-.522 6.195 1.594 2.04 2.04 3.214 2.448.628 5.033-.323.26-2.381 3.391-9.612-3.838C-.41 5.953 2.72 3.893 2.98 3.57c2.592-2.592 2.993-1.412 5.034.628 2.116 2.116-1.727 2.873 1.597 6.196z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <button className="bg-green-600 text-white px-3 py-2 rounded-lg text-xs font-bold">
                            লগ-ইন
                        </button>

                    </div>

                    {/* language, tel, login and XL-SCREEN nav */}
                    <div className="hidden md:flex gap-2 items-center">



                        {/* nav only in XL SCREENS */}
                        <nav className="hidden xl:flex gap-x-3 text-gray-600 font-medium">

                            <a className="flex gap-1 items-center relative group cursor-pointer select-none hover:text-green-500">

                                Class 6-12<IoIosArrowDown size={15}/>
                                <DropDownMenu extraDesign={"w-[320px] left-0"} items={[
                                {
                                    icon: <HSCSVG />,
                                    name: "HSC"
                                },
                                {
                                    icon: <ClassTenSVG />,
                                    name: "Class Ten"
                                },
                                {
                                    icon: <ClassNineSVG />,
                                    name: "Class Nine"
                                },
                                {
                                    icon: <ClassEightSVG />,
                                    name: "Class Eight"
                                },
                                {
                                    icon: <ClassSevenSVG />,
                                    name: "Class Seven"
                                },
                                {
                                    icon: <ClassSixSVG />,
                                    name: "Class Six"
                                }
                                ]}/>

                            </a>
                            <a className="flex gap-1 items-center relative group cursor-pointer select-none hover:text-green-500">

                                Skills<IoIosArrowDown size={15}/>
                                <DropDownMenu  extraDesign={"w-[320px] left-0"} items={[
                                    {
                                        icon: <AllCoursesSVG />,
                                        name: "All Courses"
                                    },
                                    {
                                        icon: <LanguageLearningSVG />,
                                        name: "Language Learning"
                                    },
                                    {
                                        icon: <FreelancingSVG />,
                                        name: "Freelancing"
                                    },
                                    {
                                        icon: <BundleSVG />,
                                        name: "Bundle"
                                    },
                                    {
                                        icon: <SkillsAndITSVG />,
                                        name: "Skills and IT"
                                    },
                                    {
                                        icon: <DesignAndCreativeSVG />,
                                        name: "Design and Creative"
                                    },
                                    {
                                        icon: <CareerReadinessSVG />,
                                        name: "Career Readiness"
                                    },
                                    {
                                        icon: <KidsAgeSevenFourteenSVG />,
                                        name: "Kids (Age 7-14)"
                                    },
                                    {
                                        icon: <ProfessionalSVG />,
                                        name: "Professional"
                                    },
                                    {
                                        icon: <FreeSVG />,
                                        name: "Free"
                                    }
                                ]}/>

                            </a>
                            <a className="cursor-pointer select-none hover:text-green-500">Admission</a>
                            <a className="flex gap-1 items-center relative group cursor-pointer select-none hover:text-green-500">
                                
                                Online Batch<IoIosArrowDown size={15}/>
                                <DropDownMenuTwo extraDesign={"w-[250px] right-0"} items={[
                                    "Online Batch (Class 6-10)",
                                    "HSC"
                                ]}/>

                            </a>
                            <a className="flex gap-1 items-center relative group cursor-pointer select-none hover:text-green-500">

                                English Centre<IoIosArrowDown size={15}/>
                                <DropDownMenu extraDesign={"w-[320px] right-0"} items={[
                                    {
                                        icon: <AllProgrammesSVG />,
                                        name: "All Programmes"
                                    },
                                    {
                                        icon: <IELTSProgrammeSVG />,
                                        name: "IELTS Programme"
                                    },
                                    {
                                        icon: <SpokenEnglishSVG />,
                                        name: "Spoken English (Junior)"
                                    },
                                    {
                                        icon: <EnglishFoundationProgrammeSVG />,
                                        name: "English Foundation Programme"
                                    },
                                    {
                                        icon: <KidsEnglishSVG />,
                                        name: "Kid's English"
                                    }
                                ]}/>

                            </a>
                            <a className="flex gap-1 items-center relative group cursor-pointer select-none hover:text-green-500">

                                More<IoIosArrowDown size={15}/>
                                <DropDownMenuTwo extraDesign={"w-[320px] right-0"} items={[
                                    "Job Preparation Courses",
                                    "Blog",
                                    "Book Store",
                                    "Free Notes and Guides",
                                    "Academic Digital Content",
                                    "Verify Certificate",
                                    "Career / Recruitment",
                                    "Join as a Teacher",
                                    "Join as an Affiliate"
                                ]} itemBorders={"[&:nth-child(7)]:border-b-2"} />

                            </a>

                        </nav>


                        <button onClick={() => setLang(lang === "en" ? "bn" : "en")} className="border flex gap-1 items-center px-3 rounded-md">

                            {
                                lang === "en" ? 
                                <>
                                    <BanglaSVG />
                                    <span>বাং</span>
                                </> :
                                <>
                                    <EngSVG />
                                    <span>EN</span>
                                </>
                            }

                        </button>

                        <div className="text-green-600 flex gap-x-1 p-2 items-center text-lg">

                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path></svg>
                            <p className="select-none">16910</p>

                        </div>
                        <button className="bg-green-600 text-white px-7 py-1 rounded-md font-bold">
                            লগ-ইন
                        </button>

                    </div>


                </div>

                {/* nav only in SM SCREENS  */}
                <nav className="flex justify-center items-end h-12 md:hidden">

                    <div className="flex gap-x-5 relative text-xs text-gray-600 font-semibold">

                        <a className="flex gap-1 items-center group cursor-pointer select-none hover:text-green-500">

                            Class 6-12<IoIosArrowDown size={15}/>
                            <DropDownMenu extraDesign={"left-0 right-0"} items={[
                                {
                                    icon: <HSCSVG />,
                                    name: "HSC"
                                },
                                {
                                    icon: <ClassTenSVG />,
                                    name: "Class Ten"
                                },
                                {
                                    icon: <ClassNineSVG />,
                                    name: "Class Nine"
                                },
                                {
                                    icon: <ClassEightSVG />,
                                    name: "Class Eight"
                                },
                                {
                                    icon: <ClassSevenSVG />,
                                    name: "Class Seven"
                                },
                                {
                                    icon: <ClassSixSVG />,
                                    name: "Class Six"
                                }
                            ]}/>

                        </a>
                        <a className="flex gap-1 items-center group cursor-pointer select-none hover:text-green-500">

                            Skills<IoIosArrowDown size={15}/>
                            <DropDownMenu  extraDesign={"right-0 left-0"} items={[
                                    {
                                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="w-[20px] h-[20px]"><path fill="#0FD8DE" d="M12.012 7.98a.34.34 0 01.357 0l9.954 6.116a.34.34 0 010 .58l-9.954 6.116a.341.341 0 01-.357 0l-9.955-6.115a.34.34 0 010-.581l9.955-6.115z"></path><path fill="#2696FF" d="M12.012 3.208a.34.34 0 01.356 0l9.955 6.115a.34.34 0 010 .581l-9.955 6.115a.34.34 0 01-.356 0L2.057 9.904a.34.34 0 010-.58l9.955-6.116z"></path><path fill="#0C7EE9" d="M18.912 12l-6.722 4.129L5.47 12l6.721-4.129L18.912 12z"></path></svg>,
                                        name: "All Courses"
                                    },
                                    {
                                        icon: <img alt="skills" data-original-src="https://cdn.10minuteschool.com/images/icons8-speech-bubble_1710918691528.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="https://cdn.10minuteschool.com/images/icons8-speech-bubble_1710918691528.png" style={{color: "transparent"}}></img>,
                                        name: "Language Learning"
                                    },
                                    {
                                        icon: <img  alt="skills" data-original-src="https://cdn.10minuteschool.com/images/Group_1116605411_1710918747102.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="https://cdn.10minuteschool.com/images/Group_1116605411_1710918747102.png" style={{color: "transparent"}}></img>,
                                        name: "Freelancing"
                                    },
                                    {
                                        icon: <img alt="skills" data-original-src="https://cdn.10minuteschool.com/images/bundle_1708241463619.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="https://cdn.10minuteschool.com/images/bundle_1708241463619.png" style={{color: "transparent"}}></img>,
                                        name: "Bundle"
                                    },
                                    {
                                        icon: <img alt="skills" data-original-src="https://cdn.10minuteschool.com/images/Group_1125212631_1710918785394.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="https://cdn.10minuteschool.com/images/Group_1125212631_1710918785394.png" style={{color: "transparent"}}></img>,
                                        name: "Skills and IT"
                                    },
                                    {
                                        icon: <img alt="skills" data-original-src="https://cdn.10minuteschool.com/images/Group_1116604786_1710918818930.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="https://cdn.10minuteschool.com/images/Group_1116604786_1710918818930.png" style={{color: "transparent"}}></img>,
                                        name: "Design and Creative"
                                    },
                                    {
                                        icon: <img alt="skills" data-original-src="https://cdn.10minuteschool.com/fonts/Job-ready-page-icon.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="https://cdn.10minuteschool.com/fonts/Job-ready-page-icon.png" style={{color: "transparent"}}></img>,
                                        name: "Career Readiness"
                                    },
                                    {
                                        icon: <img alt="skills" data-original-src="https://cdn.10minuteschool.com/images/Group_1710918880992.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="https://cdn.10minuteschool.com/images/Group_1710918880992.png" style={{color: "transparent"}}></img>,
                                        name: "Kids (Age 7-14)"
                                    },
                                    {
                                        icon: <img alt="skills" data-original-src="https://cdn.10minuteschool.com/images/developer_1_%281%29_1710918943745.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="https://cdn.10minuteschool.com/images/developer_1_%281%29_1710918943745.png" style={{color: "transparent"}}></img>,
                                        name: "Professional"
                                    },
                                    {
                                        icon: <img alt="skills" data-original-src="https://cdn.10minuteschool.com/images/Group_1116604282_1710918903488.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="https://cdn.10minuteschool.com/images/Group_1116604282_1710918903488.png" style={{color: "transparent"}}></img>,
                                        name: "Free"
                                    }
                            ]}/>
                        </a>
                        <a className="cursor-pointer select-none hover:text-green-500">Admission</a>
                        <a className="flex gap-1 items-center group cursor-pointer select-none hover:text-green-500">

                            More<IoIosArrowDown size={15}/>
                            <DropDownMenuTwo extraDesign={"left-0 right-0"} items={[
                                "English Centre",
                                "Job Preparation Courses",
                                "Blog",
                                "Book Store",
                                "Free Notes and Guides",
                                "Academic Digital Content",
                                "Verify Certificate",
                                "Career / Recruitment",
                                "Join as a Teacher",
                                "Join as an Affiliate"
                            ]} itemBorders={"[&:nth-child(1)]:border-b-2 [&:nth-child(7)]:border-b-2"} />
                        
                        </a>

                    </div>

                </nav>

        </header>
    );
}