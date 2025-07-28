import Carousel from "./Carousel";
import WhatYouGetInCourseSection from "./multi-language-components/WhatYouGetCourseSection";

export default function Float(){
    return(
        <div className={`hidden md:block w-full md:max-w-[330px] lg:max-w-[400px] md:absolute top-10 right-0 xl:right-32`}>

            <section className="border px-2 bg-white">

                <div className="mb-5">
                    <Carousel />
                </div>
                <WhatYouGetInCourseSection />

            </section>

            {/* course shomporke bistarito jante text */}
            <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex-row">
                <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
                <span className="flex items-center justify-center cursor-pointer text-green-500 underline"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg> 
                    <span className="ml-2">ফোন করুন (16910)</span>
                </span>
            </p>

        </div>
    );
}