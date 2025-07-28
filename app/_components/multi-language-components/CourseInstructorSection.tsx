"use client";

import { useState, useEffect } from "react";
import { useLanguageContext } from "../../_context/LanguageContext";
import { IoIosArrowDropright } from "react-icons/io";

export default function CourseInstructorSection(){

    const { lang } = useLanguageContext();
    const [data, setData] = useState<{name: string, values: {name: string, image: string}[]}>({name: "", values: [{name: "", image: ""}]});

    useEffect(() => {
        (async function(){
            try {

                const res = await fetch(`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`, {
                    cache: "no-store",
                });
                const { data: { sections } } = await res.json();
                setData(sections[2]);

            } catch (error) {
                console.error(error);
            }
        })()
    }, [lang]);

    return(
        <>
            {
                data && data.values && 
                    <div id="instructors" className="mb-7">

                        <h3 className="mb-4 text-xl pt-5 font-semibold md:text-2xl">{data.name}</h3>

                        <div className="md:border md:rounded-lg md:p-5 flex">

                            <div className="self-center">
                                <img alt="Instructor Munzereen Shahid" width="73" height="73" src={data.values[0].image} className="rounded-full" />
                            </div>
                            <div className="flex-1 ml-4">

                                <h3 className="text-lg">{data.values[0].name} </h3>
                                <p className="text-sm">
                                    MSc (English), University of Oxford (UK)
                                    <br/>
                                    BA, MA (English), University of Dhaka
                                    <br/>
                                    IELTS: 8.5
                                </p>

                            </div>

                        </div>
                        
                        
                    </div>
            }
        </>
    );
}