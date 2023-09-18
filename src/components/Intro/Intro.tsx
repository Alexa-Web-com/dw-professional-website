import './Intro.css'
import { DICT } from '../../utils/dict'
import { useContext } from 'react'
import { ContextLanguage, stateType } from '../../context/ContextLanguage'
import { scroll } from '../../utils/scroll'

const Intro: () => JSX.Element = () => {
    const [lang,] = useContext<stateType>(ContextLanguage)

    return (
        <div className='intro component' id='intro'>
            <p className='intro__hello'>{DICT[lang].introHello}</p>
            <p className='intro__hello_mobile'>{DICT[lang].introHelloMobile}</p>
            <div className='intro__name'>
                <p className='intro__name_fullname'>
                    {DICT[lang].introName}
                </p>
                <p className='intro__name_firstName'>
                    {DICT[lang].introFirstName}
                </p>
            </div>
            <p className='intro__desc_top'>{DICT[lang].introDescTopOne} <span style={{ color: 'var(--accent)' }}>{DICT[lang].introDescTopTwo}</span>{DICT[lang].aboutDescTopTree}</p>
            <p className='intro__desc_add content'>{DICT[lang].introDescAdd}</p>
            <button className='intro__btn'
                onClick={() => scroll('experience')}>{DICT[lang].introBtn}</button>
        </div>

    )
}

export default Intro

