import Carousel from "./Carousel";
import Float from "./Float";
import HeroPara from "./multi-language-components/HeroPara";

export default function HeroSection(){

    return(
        <section className="bg-[url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)] bg-center bg-cover">

            <div className="relative wrapper xl:pl-32 md:flex md:items-center min-h-[300px]">

                    <Carousel extraClass={"md:hidden"}/>
                    
                    {/* Hero Texts */}
                    <div className="flex flex-col items-start gap-y-2 md:flex-row md:items-center md:py-5 md:max-w-[calc(100%_-_330px)] lg:max-w-[calc(100%_-_527px)]">
                        <div className="flex items-center">

                            <div className="flex flex-col">
                                <h1 class="text-white text-[21px] font-bold md:text-4xl mb-2">IELTS Course by Munzereen Shahid</h1>
                                <p className="flex flex-col">
                                    <button className="flex flex-wrap gap-3 text-white">
                                        <span class="inline-block">
                                            <img class="md:w-[130px] w-[100px]" src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"/>
                                        </span>
                                        <span class="inline-block text-sm md:text-base font-medium">
                                            (81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
                                        </span>
                                    </button>
                                </p>
                                <HeroPara />
                    
                            </div>
                            
                        </div>
                    </div>

                    <Float />

            </div>

        </section>
    );
}