"use client";

import { useEffect, useState } from "react";
import { useLanguageContext } from "../../_context/LanguageContext";

export default function HowCourseLaidOut(){

    const { lang } = useLanguageContext();
    const [data, setData] = useState({});

    useEffect(() => {
            (async function(){
                try {
                    const res = await fetch(`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`, {
                        cache: "no-store",
                    });
                    const { data: { sections } } = await res.json();
                    setData(sections[3]);
                } catch (error) {
                    console.error(error);
                }
            })()
    }, [lang]);

    return(

        <div id="features">

            {
                data && data.values &&
                    <div class="flex flex-col gap-y-3 mb-3">

                        <h2 class=" text-xl font-semibold leading-[30px] text-black">{data.name}</h2>
                        <div class="grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">

                            {
                                data.values.map((item, ind) => (

                                    <div class="flex flex-row items-start gap-3 m-1 ">

                                        <div>
                                            <div class="mb-4 mx-auto">
                                                <img name="৫০+ ভিডিও লেকচার" alt="৫০+ ভিডিও লেকচার" width="36" height="36" src={item.icon} />
                                            </div>
                                        </div>

                                        <div class="flex flex-col flex-1 gap-2">
                                            <h2 class="text-[18px] font-[500px] leading-[26px] text-white ">{item.title}</h2>
                                            <h2 class="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">{item.subtitle}</h2>
                                        </div>

                                    </div>

                                ))
                            }


                        </div>

                    </div>
            }

        </div>

    );
}