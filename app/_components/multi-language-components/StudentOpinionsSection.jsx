"use client";

import { useEffect, useState } from "react";
import { useLanguageContext } from "../../_context/LanguageContext";

export default function TestimonialsSection(){

    const { lang } = useLanguageContext();
    const [data, setData] = useState({});

    useEffect(() => {
        (async function(){
            try {
                const res = await fetch(`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`, {
                    cache: "no-store",
                });
                const { data: { sections } } = await res.json();
                setData(sections[12]);
            } catch (error) {
                console.error(error);
            }
        })()
    }, [lang]);

    return(
        <div id="testimonials">
            <div className="mb-10">

                <h2 class="mb-4 text-xl font-semibold">{}</h2>

                <div className="relative">
                    
                </div>

            </div>
        </div>
    );
}