'use client';

import { useEffect, useState } from "react";
import { LeftArrowSVG, PlayBtnSVG, RightArrowSVG, SmallPlayBtnSVG } from "../_svg";

export default function Carousel({ extraClass }: {extraClass?: string}){

    const [media, setMedia] = useState([]);

    useEffect(() => {
        (async function(){
            try {

                const res = await fetch(`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course`, {
                    cache: "no-store",
                });
                const { data: { media } } = await res.json();
                console.log(media);
                setMedia(media);

            } catch (error) {
                console.error(error);
            }
        })()
    }, [])

    return(
        <div className={`flex flex-col gap-y-2 pt-5 ${extraClass}`}>

            {/* Preview Section */}
            <div className="relative">

                <img className="bg-black opacity-50 md:opacity-70 select-none" src={media[0]?.thumbnail_url} alt="Default Image" />
                <LeftArrowSVG extraDesign={"absolute left-5 top-1/2 cursor-pointer"} />
                <PlayBtnSVG extraDesign={"absolute left-1/2 right-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"} />
                <RightArrowSVG extraDesign={"absolute right-5 top-1/2 cursor-pointer"} />

            </div>

            {/* items in preview section */}
            <div className="flex gap-x-2 overflow-x-auto p-2 w-full">

                {
                    media?.map((item) => (
                        item?.name === "preview_gallery" ?
                        (
                            item?.resource_type === "image" ? 
                            <div className={`w-14 h-10 flex-none cursor-pointer`}>
                                <img src={item?.resource_value} alt="some" />
                            </div> : 
                            <div className="relative w-14 h-10 flex-none cursor-pointer">
                                <img className="rounded-lg" src={item?.thumbnail_url} alt="some"/>
                                <SmallPlayBtnSVG extraDesign={"absolute left-1/2 right-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"} />
                            </div>
                        )
                            : null
                    ))
                }

            </div>

        </div>
    );
}