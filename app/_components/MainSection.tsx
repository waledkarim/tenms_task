import CourseDetails from "./multi-language-components/CourseDetails";
import CourseExclusiveDetailsSection from "./multi-language-components/CourseExclusieFeatureSection";
import CourseInstructorSection from "./multi-language-components/CourseInstructorSection";
import FreeItems from "./multi-language-components/FreeItems";
import GroupJoinEngagement from "./multi-language-components/GroupJoinEngagement";
import HowCourseLaidOut from "./multi-language-components/HowCourseLaidOutSection";
import Pointers from "./multi-language-components/PointersSection";
import WhatYouGetInCourseSection from "./multi-language-components/WhatYouGetCourseSection";

export default function MainSection(){
    return(
        <main className="wrapper md:mx-0 xl:pl-32 md:max-w-[calc(100%_-_330px)] lg:max-w-[calc(100%_-_400px)] xl:lg:max-w-[calc(100%_-_527px)]">

            <section className="flex flex-col gap-y-2">

                <WhatYouGetInCourseSection extraClass={"md:hidden"}/>

                <hr className="border-4 md:hidden" />

                <CourseInstructorSection />
                <HowCourseLaidOut />
                <GroupJoinEngagement />
                <Pointers />

                <CourseExclusiveDetailsSection />
                <FreeItems />

                <CourseDetails />

            </section>
            
        </main>
    );
}