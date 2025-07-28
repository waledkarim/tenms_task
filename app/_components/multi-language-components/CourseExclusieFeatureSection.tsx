"use client";

import { useEffect, useState } from "react";
import { useLanguageContext } from "../../_context/LanguageContext";



export default function CourseExclusiveDetailsSection(){

    const { lang } = useLanguageContext();
    const [data, setData] = useState<{name: string, values: {checklist: string[], file_url: string, title: string}[]}>({
        name: "",
        values: [
            {
                checklist: [""],
                file_url: "",
                title: ""
            }
        ]
    });

    useEffect(() => {
        (async function(){
            try {

                const res = await fetch(`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`, {
                    cache: "no-store",
                });
                const { data: { sections } } = await res.json();
                setData(sections[8]);

            } catch (error) {
                console.error(error);
            }
        })()
    }, [lang]);


    return(
        <div id="feature_explanations">

            {
                data && data.values &&
                        <div>

                            <div className="flex flex-col gap-3 mb-10">

                                <h2 className=" text-xl font-semibold leading-[30px] text-black">{data.name}</h2>

                                <div className="grid grid-cols-1 px-5 border divide-y rounded-md ">

                                    {
                                        data.values.map((item, ind) => (

                                            <div key={ind} className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row">

                                                <div className="flex flex-col gap-2">

                                                    <h2 className="text-[14px] font-[500px] leading-[30px] text-[#111827] md:text-[16px]">{item.title}</h2>

                                                    {
                                                        item.checklist.map((text, ind) => (

                                                            <div key={ind} className="flex flex-row items-center gap-5">

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" fill="none" viewBox="0 0 19 15"><path fill="#6294F8" stroke="#6294F8" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.893" d="M18.168 1.508a.792.792 0 01-.006 1.111L6.645 14.143a.77.77 0 01-1.087.005L.77 9.433a.792.792 0 01-.015-1.11.77.77 0 011.098-.016l4.242 4.177L17.07 1.502a.77.77 0 011.098.006z"></path></svg>
                                                                <p className="text-[14px] font-[400px] leading-[24px] text-[#4B5563] md:text-[16px]">{text}</p>
                                                                
                                                            </div>

                                                        ))
                                                    }
                                                    


                                                </div>
                                                <div>
                                                    <div className="mb-4 mx-auto max-w-[350px]">
                                                        <img width="250" height="200" src={item.file_url}/>
                                                        </div>
                                                </div>
                                                
                                            </div>

                                        ))
                                    }

                                    
                                    
                                </div>
                                
                            </div>
                                
                        </div>

            }

            
        </div>
    );
}