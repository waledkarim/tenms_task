'use client';

import { useEffect, useState } from "react";
import { useLanguageContext } from "../../_context/LanguageContext";


export default function WhatYouGetInCourseSection({ extraClass }: { extraClass?: string }){

    const { lang } = useLanguageContext();
    const [data, setData] = useState<{icon: string, text: string}[]>([]);
    const [text, setText] = useState<{name: string}>({name: ""});

    useEffect(() => {
        (async function(){
            try {

                const res = await fetch(`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`, {
                    cache: "no-store",
                });
                const { data: { checklist, cta_text } } = await res.json();
                setData(checklist);
                setText(cta_text);

            } catch (error) {
                console.error(error);
            }
        })()
    }, [lang]);


    return(
        <section className={`flex flex-col gap-y-6 ${extraClass}`}>

            {/* Enroll section */}
            <div className="w-full py-2 flex flex-col gap-y-2">
                <div className="flex gap-x-4 items-center">
                    <p className="text-3xl font-medium">৳1000</p>
                </div>
                <button className="select-none bg-green-500 border-green-700 border-b-4 rounded-lg py-2 px-4 text-white w-full">
                    {
                        text && text.name
                    }
                </button>
            </div>

            <p className="text-xl font-semibold">এই কোর্সে যা থাকছে</p>

            {/* checklist section */}
            <div className="flex flex-col gap-y-2">

                {
                    data && data.map((item, ind) => (
                        <div key={ind} className="flex items-center mb-3 leading-5">

                            <div className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out" style={{fontSize: "0px", opacity: "1"}}>
                                <img alt="icon" width="20" height="20" src={item.icon}/>
                            </div>
                            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">{item.text}</h4>

                        </div>
                    ))
                }

            </div>

        </section>  
    );
}