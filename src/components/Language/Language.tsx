import './Language.css'
import { useContext } from 'react'
import { ContextLanguage, stateType } from '../../context/ContextLanguage'

interface ILanguageProps {
    key: string;
    language: string;
}

const Language = (props: ILanguageProps) => {
    const [lang, setLang] = useContext<stateType>(ContextLanguage)

    return (
        <div className='language'
            onClick={() => setLang(props.language)}
            style={{
                backgroundColor: (props.language === lang && 'var(--accent)') as string,
                color: (props.language === lang && 'black') as string
            }}
        >{props.language.toUpperCase()}</div>
    )
}

export default Language