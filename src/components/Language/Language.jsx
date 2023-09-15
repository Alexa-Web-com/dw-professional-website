import './Language.css'
import { useContext } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'

const Language = (props) => {
    const [lang, setLang] = useContext(ContextLanguage)

    return (
        <div className='language'
            onClick={() => setLang(props.language)}
            style={{
                backgroundColor: props.language === lang && 'var(--accent)',
                color: props.language === lang && 'black'
            }}
        >{props.language.toUpperCase()}</div>
    )
}

export default Language