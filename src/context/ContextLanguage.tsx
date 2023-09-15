import { createContext, useState } from "react";
import { languages } from "../utils/dict";

type stateType = [state: string, setLang: React.Dispatch<React.SetStateAction<string>>]

export const ContextLanguage = createContext<stateType>(['', () => ''])

export const ContextLanguageProvider = (props: { children: JSX.Element }) => {
    const langFromNavivgator = navigator.language.slice(0, 2)

    const [lang, setLang] = useState<string>(langFromNavivgator === languages.find(lang => lang === langFromNavivgator) ? langFromNavivgator : 'en')

    return (
        <ContextLanguage.Provider value={[lang, setLang]}>
            {props.children}
        </ContextLanguage.Provider>
    )
}