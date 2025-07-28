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
        <MainSection />
      </main>
      
    </LanguageContextProvider>
    </>
  );
}
