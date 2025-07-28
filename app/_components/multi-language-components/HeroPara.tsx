'use client';

import { useEffect, useState } from "react";
import { useLanguageContext } from "../../_context/LanguageContext";
import extractHTML from "../../_utils/extractTextContent";

export default function HeroPara(){

    const { lang } = useLanguageContext();
    const [text, setText] = useState<string>("");

    useEffect(() => {
        (async function(){
            try {
                const res = await fetch(`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`, {
                    cache: "no-store",
                });
                const { data: { description } } = await res.json();
                setText(description);
            } catch (error) {
                console.error(error);
            }
        })()
    }, [lang]);

    return(
        <p className="text-zinc-500 leading-6 font-medium text-lg py-4">

            <span>
                {
                    extractHTML(text, "span")
                }
            </span>

        </p>
    );
}