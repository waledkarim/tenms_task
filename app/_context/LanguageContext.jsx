'use client';

import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageContextProvider = ({children}) => {

    const [lang, setLang] = useState("en");

    return(
        <LanguageContext.Provider value={{
            lang,
            setLang: (lang) => {
                console.log(lang);
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
    return useContext(LanguageContext);
    
}