"use client";

import { useEffect, useState } from "react";
import { useLanguageContext } from "../../_context/LanguageContext";

export default function FreeItems(){

    const { lang } = useLanguageContext();
    const [data, setData] = useState<{name: string}>({name: ""});

    useEffect(() => {
        (async function(){
            try {
                const res = await fetch(`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`, {
                    cache: "no-store",
                });
                const { data: { sections } } = await res.json();
                setData(sections[9]);
            } catch (error) {
                console.error(error);
            }
        })()
    }, [lang]);

    return(
        <div id="free_items">

            {
                data &&
                    <div className="mb-14 ">

                        <h2 className="my-5 text-xl font-semibold leading-[30px] text-black ">{data.name}</h2>

                        <div className="relative w-full overflow-hidden bg-no-repeat bg-cover rounded-lg bg-[url(https://cdn.10minuteschool.com/images/banner_background_1731401239364.png)]" style={{borderRadius: "20px"}}>

                            <div className="p-4 absolute w-full h-full filter [&amp;&gt;*]:row-[1] [&amp;&gt;*]:col-[1]" style={{display: "grid", gridTemplateColumns: "1fr"}}>

                                <div className="relative w-full h-full opacity-30 rounded-xl">
                                </div>

                                <div className="rounded-2xl blur-sm mix-blend-hard-light overflow-hidden relative w-full h-full z-[1] before:contnet-[''] before:border-[6px] before:border-t-0 before:border-b-0 before:blur-[8px] before:absolute before:w-full before:h-full before:rounded-xl before:[border-image:conic-gradient(from_180deg_at_50%_50%,#FFE2BE_0deg,#FFA42D_36.0000005364418deg,#EDAE64_50.40000021457672deg,#8E9AFC_90.12555956840515deg,#67D1FF_102.59999871253967deg,#FFF_126.76394462585449deg,#FCD6F7_144.0000021457672deg,#F3CFFF_156.10909223556519deg,#CCA5F3_180deg,#E0CDF9_227.39765882492065deg,#472FFF_240.4190754890442deg,#479BFF_270deg,#B6E0FF_296.89493894577026deg,#FF8E75_323.99999141693115deg)_1]">
                                </div>
                                <div className="relative rounded-xl overflow-hidden w-full h-full z-[1] before:blur-[1.5px] before:absolute before:border before:w-full before:h-full before:contnet-[''] before:mix-blend-hard-light before:[border-image:conic-gradient(from_180deg_at_50%_50%,#FFE2BE_0deg,#FFA42D_36.0000005364418deg,#EDAE64_50.40000021457672deg,#8E9AFC_90.12555956840515deg,#67D1FF_102.59999871253967deg,#FFF_126.76394462585449deg,#FCD6F7_144.0000021457672deg,#F3CFFF_156.10909223556519deg,#CCA5F3_180deg,#E0CDF9_227.39765882492065deg,#472FFF_240.4190754890442deg,#479BFF_270deg,#B6E0FF_296.89493894577026deg,#FF8E75_323.99999141693115deg)_1]"></div>
                                <div className="rounded-xl w-full h-full z-[1] border-2 border-white blur-[1px] mix-blend-soft-light"></div>

                            </div>
                            
                            <div className="text-white divide-y rounded-lg divide-dashed divide-slate-600 p-4 px-10 relative z-[1]">

                                <div className="relative flex flex-col items-start justify-between gap-1 px-5 py-5 overflow-hidden md:flex-row">

                                    <div className="flex flex-col items-start gap-1 ">

                                        <h3 className="mb-2 text-base md:text-xl font-[600px] leading-[26px] text-white">ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)</h3>

                                        <div className="flex flex-col gap-2">

                                            <ul className="list-disc list-inside">
                                                <li className="flex flex-row items-center gap-3 text-sm font-[400px] leading-[24px] mb-1">
                                                    <span className="opacity-60">•</span>
                                                    <p className="font-[400px] leading-[24px] text-[#fff] md:text-[16px]">360 পৃষ্ঠা</p>
                                                </li>
                                                
                                                <li className="flex flex-row items-center gap-3 text-sm font-[400px] leading-[24px] mb-1">
                                                    <span className="opacity-60">•</span>
                                                    <p className="font-[400px] leading-[24px] text-[#fff] md:text-[16px]">প্রিমিয়াম হার্ডকপি</p>
                                                </li>
                                                
                                                <li className="flex flex-row items-center gap-3 text-sm font-[400px] leading-[24px] mb-1">
                                                    <span className="opacity-60">•</span>
                                                    <p className="font-[400px] leading-[24px] text-[#fff] md:text-[16px]">ফ্রি ডেলিভারি</p>
                                                </li>
                                                
                                                <li className="flex flex-row items-center gap-3 text-sm font-[400px] leading-[24px] mb-1">
                                                    <span className="opacity-60">•</span>
                                                    <p className="font-[400px] leading-[24px] text-[#fff] md:text-[16px]">৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি</p>
                                                </li>

                                            </ul>
                                            
                                        </div>
                                        
                                    </div>
                                        
                                        <div className="z-[1] flex w-full sm:items-center md:mr-5 md:w-fit md:items-end">

                                            <div className="mx-auto">
                                                <img alt="call us" data-original-src="https://cdn.10minuteschool.com/images/catalog/media/Book_Image_1731924602665.png" loading="lazy" width="120" height="150" decoding="async" data-nimg="1" src="https://cdn.10minuteschool.com/images/catalog/media/Book_Image_1731924602665.png?w=120&amp;h=150"/>
                                            </div>

                                        </div>
                                        
                                </div>
                                
                            </div>
                            
                        </div>
                                
                    </div>

            }

                        
        </div>
    );
}