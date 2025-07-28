"use client";

import { useEffect, useState } from "react";
import { useLanguageContext } from "../../_context/LanguageContext";


export default function CourseDetails(){

    const { lang } = useLanguageContext();
    const [data, setData] = useState<{name: string}>({name: ""});

    useEffect(() => {
        (async function(){
            try {
                const res = await fetch(`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`, {
                    cache: "no-store",
                });
                const { data: { sections } } = await res.json();
                setData(sections[13]);
            } catch (error) {
                console.error(error);
            }
        })()
    }, [lang]);

    return(
        <div id="requirements">


            {
                data && 
                    <div className="mb-6 bg-[#E5E7EB] pb-2 md:mb-12 md:bg-white md:py-0">

                        <div className="pb-6 bg-white md:pb-0">

                            <div className="mb-0 ">

                                <h2 className="mb-4 text-xl font-semibold md:text-2xl"> {data.name} </h2>
                                <div className="py-2 rounded-md md:border md:p-6">

                                    <ul>

                                        <li className="flex items-start gap-2 mb-2">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="text-[#6294F8]" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <h3>ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)</h3>
                                        </li>
                                        
                                        <li className="flex items-start gap-2">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="text-[#6294F8]" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <h3>স্মার্টফোন অথবা পিসি</h3>
                                        </li>
                                        
                                    </ul>

                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
            }

            
        </div>
    );
}