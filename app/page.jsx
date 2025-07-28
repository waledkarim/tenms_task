import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import MainSection from "./_components/MainSection";
import { LanguageContextProvider } from "./_context/LanguageContext";

export default function Home() {
  return (
    <>
    <LanguageContextProvider>
      <Header />
      <main>
        <HeroSection />
        {/* <div className="bg-red-300 h-[1000px] wrapper md:mx-0 xl:pl-32 md:max-w-[calc(100%_-_330px)] lg:max-w-[calc(100%_-_400px)] xl:lg:max-w-[calc(100%_-_527px)]">
          <div className="bg-black h-full w-full"></div>
        </div> */}
        
        <MainSection />
      </main>
    </LanguageContextProvider>
    </>
  );
}
