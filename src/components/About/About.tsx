import './About.css'
import alexa_pict from '../../assets/pict/damian.png'
import { DICT } from '../../utils/dict'
import { useContext } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'
import { stateType } from '../../context/ContextLanguage'

const About: () => JSX.Element = () => {
    const [lang,] = useContext<stateType>(ContextLanguage)

    return (
        <div className='about component' id='about'>
            <div className='about__title_cntr'>
                <div className='horizontal_line horizontal_line_before about__line'></div>
                <p className='about__title title'>{DICT[lang].navbarAbout}</p>
                <div className='horizontal_line horizontal_line_after about__line'></div>
            </div>
            <div className='about__content_cntr'>
                <ul className='about__attribute_ul'>
                    <li className='about__attribute_el_li'>{DICT[lang].aboutAttributeOne}</li>
                    <li className='about__attribute_el_li'>{DICT[lang].aboutAttributeTwo}</li>
                    <li className='about__attribute_el_li'>{DICT[lang].aboutAttributeThree}</li>
                    <li className='about__attribute_el_li'>{DICT[lang].aboutAttributeFour}</li>
                    <li className='about__attribute_el_li'>{DICT[lang].aboutAttributeFive}</li>
                    <li className='about__attribute_el_li'>{DICT[lang].aboutAttributeSix}</li>
                    <li className='about__attribute_el_li'>{DICT[lang].aboutAttributeSeven}</li>
                </ul>
                <div className='about__img_wrapper'>
                    <figure className='about__img_cntr'>
                        <div
                            data-aos="fade-up-left"
                            data-aos-duration="1000"
                        >
                            <img src={alexa_pict} alt='headshot' className='about__img' />
                            <div className='about__img_background'></div>
                        </div>
                        <div className='about__img_frame'></div>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default About