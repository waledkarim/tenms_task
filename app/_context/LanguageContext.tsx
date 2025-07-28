'use client';

import { createContext, useState, useContext } from "react";

type langType = {
    lang: string;
    setLang: (lang: string) => void;
}

const LanguageContext = createContext<langType | string>("en");

export const LanguageContextProvider = ({ children }: {children: React.ReactNode}) => {

    const [lang, setLang] = useState<string>("en");

    return(
        <LanguageContext.Provider value={{
            lang,
            setLang: (lang) => {
                setLang(lang);
            }
        }}>
            {
                children
            }
        </LanguageContext.Provider>
    )

}

export function useLanguageContext(){
    return useContext(LanguageContext) as langType;
    
}