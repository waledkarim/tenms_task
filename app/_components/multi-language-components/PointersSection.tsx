"use client";

import { useEffect, useState } from "react";
import { useLanguageContext } from "../../_context/LanguageContext";


export default function Pointers(){

    const { lang } = useLanguageContext();
    const [data, setData] = useState<{name: string, values: {text: string}[]}>({name: "", values: [{text: "string"}]});

    useEffect(() => {
        (async function(){
            try {
                const res = await fetch(`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`, {
                    cache: "no-store",
                });
                const { data: { sections } } = await res.json();
                setData(sections[5]);
            } catch (error) {
                console.error(error);
            }
        })()
    }, [lang]);

    return(

        <div id="pointers">

            {
                data && data.values &&
                    <div className="mb-6 md:mb-10 relative bg-[#E5E7EB] py-2 md:bg-white md:py-0">

                        <div className="pt-6 pb-6 bg-white md:pb-0 md:pt-0">

                                <h2 className="mb-4 text-xl font-semibold md:text-2xl">What you will learn by doing the course</h2>
                                <div className="rounded-md md:border">

                                    <div className="pt-2 md:p-6">

                                        <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">

                                            {
                                                data.values.map((item, ind) => (

                                                    <li key={ind} className="flex items-start gap-2 mb-2">
                                                        
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="mr-1 mt-[2px]" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(98, 148, 248)"}}><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                        <div className="flex-1">{item.text}</div>

                                                    </li>

                                                ))
                                            }


                                        </ul>

                                    </div>

                                </div>
                        </div>

                    </div>

            }

        </div>
    );
}