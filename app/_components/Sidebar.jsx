"use client";

import { useState } from "react";
import { AllCoursesSVG, AllProgrammesSVG, BundleSVG, CareerReadinessSVG, ClassEightSVG, ClassNineSVG, ClassSevenSVG, ClassSixSVG, ClassTenSVG, DesignAndCreativeSVG, FreelancingSVG, FreeSVG, HSCSVG, IELTSProgrammeSVG, KidsAgeSevenFourteenSVG, KidsEnglishSVG, LanguageLearningSVG, ProfessionalSVG, SkillsAndITSVG, SpokenEnglishSVG } from "../_svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


export default function SideBar(){

    const [open, setOpen] = useState({
        isClassOpen: false,
        isSkillsOpen: false,
        isOnlineBatchOpen: false,
        isEnglishCentreOpen: false,
    });


    return(
        <nav className="absolute z-50 h-[calc(100vh_-_64px)] overflow-y-auto border-t bg-white top-full inset-x-0 xl:hidden mt-1 pt-5">
            <div className="wrapper">

                <ul className="flex flex-col">

                    {/* class 6-12 */}
                    <li onClick={() => setOpen((prev) => ({...prev, isClassOpen: !open.isClassOpen}))} className="text-[#4B5563] flex flex-col rounded hover:bg-gray-100 cursor-pointer gap-1 py-3 text-base select-none">
                        <p className="text-[#111827] text-base font-medium flex gap-x-1 items-center">
                            Class 6-12
                            {
                                open.isClassOpen ? <IoIosArrowUp size={20}/> : <IoIosArrowDown size={20}/>
                            }
                        </p>
                    </li>
                    {
                        open.isClassOpen &&
                        <ul className="">

                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <HSCSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">HSC</span>
                            </li>
                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <ClassTenSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">Class Ten</span>
                            </li>
                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <ClassNineSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">Class Nine</span>
                            </li>
                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <ClassEightSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">Class Eight</span>
                            </li>
                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <ClassSevenSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">Class Seven</span>
                            </li>
                            
                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <ClassSixSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">Class Six</span>
                            </li>

                        </ul>
                    }

                    {/* skills */}
                    <li onClick={() => setOpen((prev) => ({...prev, isSkillsOpen: !open.isSkillsOpen}))} className="text-[#4B5563] font-medium flex rounded hover:bg-gray-100 cursor-pointer items-center gap-1 py-3 text-base select-none">
                        <p className="text-[#111827] text-base font-medium flex gap-x-1 items-center">
                            Skills
                            {
                                open.isSkillsOpen ? <IoIosArrowUp size={20}/> : <IoIosArrowDown size={20}/>
                            }
                        </p>
                    </li>
                    {
                        open.isSkillsOpen &&
                        <ul className="">

                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <AllCoursesSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">All courses</span>
                            </li>
                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <LanguageLearningSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">Language Learning</span>
                            </li>
                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <FreelancingSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">Freelancing</span>
                            </li>
                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <BundleSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">Bundle</span>
                            </li>
                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <SkillsAndITSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">Skills and IT</span>
                            </li>
                            
                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <DesignAndCreativeSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">Design and Creative</span>
                            </li>

                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <CareerReadinessSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">Career Readiness</span>
                            </li>

                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <KidsAgeSevenFourteenSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">Kid's (Age 7-14)</span>
                            </li>

                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <ProfessionalSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">Professional</span>
                            </li>

                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <FreeSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">Free</span>
                            </li>

                        </ul>
                    }

                    {/* Admission */}
                    <li className="text-[#4B5563] font-medium flex rounded hover:bg-gray-100 cursor-pointer items-center gap-1 py-3 text-base border-b-2 select-none">
                        <p className="text-[#111827] text-base font-medium flex gap-x-1 items-center">
                            Admission
                        </p>
                    </li>

                    {/* Online Batch */}
                    <li onClick={() => setOpen((prev) => ({...prev, isOnlineBatchOpen: !open.isOnlineBatchOpen}))} className="text-[#4B5563] font-medium flex rounded hover:bg-gray-100 cursor-pointer items-center gap-1 py-3 text-base select-none">
                        <p className="text-[#111827] text-base font-medium flex gap-x-1 items-center">
                            Online Batch
                            {
                                open.isOnlineBatchOpen ? <IoIosArrowUp size={20}/> : <IoIosArrowDown size={20}/>
                            }
                        </p>
                    </li>
                    {
                        open.isOnlineBatchOpen &&
                        <ul className="">

                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="text-[#111827] text-base font-medium">Online Batch (Class 6-10)</span>
                            </li>
                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="text-[#111827] text-base font-medium">HSC</span>
                            </li>

                        </ul>
                    }

                    {/* English Centre */}
                    <li onClick={() => setOpen((prev) => ({...prev, isEnglishCentreOpen: !open.isEnglishCentreOpen}))} className="text-[#4B5563] font-medium flex rounded hover:bg-gray-100 cursor-pointer items-center gap-1 py-3 text-base select-none border-b-2">
                        <p className="text-[#111827] text-base font-medium flex gap-x-1 items-center">
                            English Centre
                            {
                                open.isEnglishCentreOpen ? <IoIosArrowUp size={20}/> : <IoIosArrowDown size={20}/>
                            }
                        </p>
                    </li>
                    {
                        open.isEnglishCentreOpen && 
                        <ul className="">

                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <AllProgrammesSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">All Programmes</span>
                            </li>
                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <IELTSProgrammeSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">IELTS Programme</span>
                            </li>
                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <SpokenEnglishSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">Spoken English (Junior)</span>
                            </li>

                            <li class="text-[#4B5563] text-base font-medium flex items-center py-3 px-2 rounded cursor-pointer hover:bg-gray-100 ">
                                <span class="mr-4">
                                    <KidsEnglishSVG />
                                </span>
                                <span class="text-[#111827] text-base font-medium">Kid's English</span>
                            </li>

                        </ul>
                    }

                    {/* Middle six items */}
                    <li className="text-[#4B5563] font-medium flex rounded hover:bg-gray-100 cursor-pointer items-center gap-1 py-3 text-base select-none">
                        <p className="text-[#111827] text-base font-medium flex gap-x-1 items-center">
                            Job Preparation Courses
                        </p>
                    </li>
                    <li className="text-[#4B5563] font-medium flex rounded hover:bg-gray-100 cursor-pointer items-center gap-1 py-3 text-base select-none">
                        <p className="text-[#111827] text-base font-medium flex gap-x-1 items-center">
                            Blog
                        </p>
                    </li>
                    <li className="text-[#4B5563] font-medium flex rounded hover:bg-gray-100 cursor-pointer items-center gap-1 py-3 text-base select-none">
                        <p className="text-[#111827] text-base font-medium flex gap-x-1 items-center">
                            Book Store
                        </p>
                    </li>
                    <li className="text-[#4B5563] font-medium flex rounded hover:bg-gray-100 cursor-pointer items-center gap-1 py-3 text-base select-none">
                        <p className="text-[#111827] text-base font-medium flex gap-x-1 items-center">
                            Free Notes & Guides
                        </p>
                    </li>
                    <li className="text-[#4B5563] font-medium flex rounded hover:bg-gray-100 cursor-pointer items-center gap-1 py-3 text-base select-none">
                        <p className="text-[#111827] text-base font-medium flex gap-x-1 items-center">
                            Academic Digital Content
                        </p>
                    </li>
                    <li className="text-[#4B5563] font-medium flex rounded hover:bg-gray-100 cursor-pointer items-center gap-1 py-3 text-base border-b-2 select-none">
                        <p className="text-[#111827] text-base font-medium flex gap-x-1 items-center">
                            Verify Cerificate
                        </p>
                    </li>

                    {/* Last 3 items */}
                    <li className="text-[#4B5563] font-medium flex rounded hover:bg-gray-100 cursor-pointer items-center gap-1 py-3 text-base select-none">
                        <p className="text-[#111827] text-base font-medium flex gap-x-1 items-center">
                            Career / Recruitment
                        </p>
                    </li>
                    <li className="text-[#4B5563] font-medium flex rounded hover:bg-gray-100 cursor-pointer items-center gap-1 py-3 text-base select-none">
                        <p className="text-[#111827] text-base font-medium flex gap-x-1 items-center">
                            Join as a Teacher
                        </p>
                    </li>
                    <li className="text-[#4B5563] font-medium flex rounded hover:bg-gray-100 cursor-pointer items-center gap-1 py-3 text-base select-none">
                        <p className="text-[#111827] text-base font-medium flex gap-x-1 items-center">
                            Join as an Affiliate
                        </p>
                    </li>


                </ul>

            </div>

        </nav>
    );
}