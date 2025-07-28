'use client';

import { useEffect, useState } from "react";
import { useLanguageContext } from "../../_context/LanguageContext";


export default function WhatYouGetInCourseSection({ extraClass }){

    const { lang } = useLanguageContext();
    const [data, setData] = useState([]);

    useEffect(() => {
        (async function(){
            try {

                const res = await fetch(`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`, {
                    cache: "no-store",
                });
                const { data: { checklist } } = await res.json();
                setData(checklist);

            } catch (error) {
                console.error(error);
            }
        })()
    }, [lang]);


    return(
        <section className={`flex flex-col gap-y-6 ${extraClass} `}>

            <p className="text-xl font-semibold">এই কোর্সে যা থাকছে</p>

            <div className="flex flex-col gap-y-2">

                {
                    data && data.map((item, ind) => (
                        <div key={ind} class="flex items-center mb-3 leading-5">

                            <div class="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out" style={{fontSize: "0px", opacity: "1"}}>
                                <img alt="icon" width="20" height="20" src={item.icon}/>
                            </div>
                            <h4 class="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">{item.text}</h4>

                        </div>
                    ))
                }

            </div>

        </section>  
    );
}