import './Skills.css'
import { DICT } from '../../utils/dict'
import { useContext } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'
import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css.png'
import js from '../../assets/skills/js.png'
import react_ from '../../assets/skills/react.png'
import ts from '../../assets/skills/ts.png'
import git from '../../assets/skills/git.png'
import cypress from '../../assets/skills/cypress.png'
import redux from '../../assets/skills/redux.png'
import java from '../../assets/skills/java.png'
import mui from '../../assets/skills/mui.png'
import swift from '../../assets/skills/swift.png'
import solidity from '../../assets/skills/solidity.png'
import star from '../../assets/stars/star.svg'
import star_full from '../../assets/stars/star-full.svg'
import { stateType } from '../../context/ContextLanguage'


const Skills: () => JSX.Element = () => {
    const [lang,] = useContext<stateType>(ContextLanguage)

    const skillStars = {
        react: 4,
        js: 4,
        ts: 4,
        redux: 4,
        html: 4,
        css: 4,
        git: 4,
        cypress: 3,
        mui: 3,
        solidity: 2,
        java: 2,
        swift: 1,
    }

    const getStars: (starsQuantity: number) => JSX.Element[] = (starsQuantity: number) => {
        return new Array(5).fill("").map((x, index) =>
            <img src={index + 1 > starsQuantity ? star : star_full} alt='star' key={index} />)
    }

    return (
        <div className='skills component' id='skills'>
            <div className='skills__title_cntr'>
                <div className='horizontal_line horizontal_line_before skills__line'></div>
                <p className='skills__title title'>{DICT[lang].navbarSkills}</p>
                <div className='horizontal_line horizontal_line_after skills__line'></div>
            </div>
            <div className='skills__content_cntr content'>
                <div className='skills__tools__cntr'>
                    <div className='skills_tools_part'>
                        <div className='skills__tool_cntr'>
                            <figure data-aos="zoom-in" data-aos-duration="1000" className='skills__tools__figure'>
                                <img className='skills__img' src={react_} alt='react_' />
                            </figure>
                            <p className='skills__tool_desc'>{DICT[lang].skills_react}</p>
                            <div>
                                {getStars(skillStars.react)}
                            </div>
                        </div>
                        <div className='skills__tool_cntr'>
                            <figure data-aos="zoom-in" data-aos-duration="1000" className='skills__tools__figure'>
                                <img className='skills__img' src={js} alt='java script' />
                            </figure>
                            <p className='skills__tool_desc'>{DICT[lang].skills_js}</p>
                            <div>
                                {getStars(skillStars.js)}
                            </div>
                        </div>
                        <div className='skills__tool_cntr'>
                            <figure data-aos="zoom-in" data-aos-duration="1000" className='skills__tools__figure'>
                                <img className='skills__img' src={ts} alt='type script' />
                            </figure>
                            <p className='skills__tool_desc'>{DICT[lang].skills_ts}</p>
                            <div>
                                {getStars(skillStars.ts)}
                            </div>
                        </div>
                        <div className='skills__tool_cntr'>
                            <figure data-aos="zoom-in" data-aos-duration="1000" className='skills__tools__figure'>
                                <img className='skills__img' src={redux} alt='redux' />
                            </figure>
                            <p className='skills__tool_desc'>{DICT[lang].skills_redux}</p>
                            <div>
                                {getStars(skillStars.redux)}
                            </div>
                        </div>
                        <div className='skills__tool_cntr'>
                            <figure data-aos="zoom-in" data-aos-duration="1000" className='skills__tools__figure'>
                                <img className='skills__img' src={html} alt='html5' />
                            </figure>
                            <p className='skills__tool_desc'>{DICT[lang].skills_html}</p>
                            <div>
                                {getStars(skillStars.html)}
                            </div>
                        </div>
                        <div className='skills__tool_cntr'>
                            <figure data-aos="zoom-in" data-aos-duration="1000" className='skills__tools__figure'>
                                <img className='skills__img' src={css} alt='css3' />
                            </figure>
                            <p className='skills__tool_desc'>{DICT[lang].skills_css}</p>
                            <div>
                                {getStars(skillStars.css)}
                            </div>
                        </div>
                        <div className='skills__tool_cntr'>
                            <figure data-aos="zoom-in" data-aos-duration="1000" className='skills__tools__figure'>
                                <img className='skills__img' src={git} alt='git' />
                            </figure>
                            <p className='skills__tool_desc'>{DICT[lang].skills_git}</p>
                            <div>
                                {getStars(skillStars.git)}
                            </div>
                        </div>
                        <div className='skills__tool_cntr'>
                            <figure data-aos="zoom-in" data-aos-duration="1000" className='skills__tools__figure'>
                                <img className='skills__img' src={cypress} alt='cypress' />
                            </figure>
                            <p className='skills__tool_desc'>{DICT[lang].skills_cypress}</p>
                            <div>
                                {getStars(skillStars.cypress)}
                            </div>
                        </div>
                        <div className='skills__tool_cntr'>
                            <figure data-aos="zoom-in" data-aos-duration="1000" className='skills__tools__figure'>
                                <img className='skills__img' src={mui} alt='mui' />
                            </figure>
                            <p className='skills__tool_desc'>{DICT[lang].skills_mui}</p>
                            <div>
                                {getStars(skillStars.mui)}
                            </div>
                        </div>
                        <div className='skills__tool_cntr'>
                            <figure data-aos="zoom-in" data-aos-duration="1000" className='skills__tools__figure'>
                                <img className='skills__img' src={solidity} alt='solidity' />
                            </figure>
                            <p className='skills__tool_desc'>{DICT[lang].skills_solidity}</p>
                            <div>
                                {getStars(skillStars.solidity)}
                            </div>
                        </div>
                        <div className='skills__tool_cntr'>
                            <figure data-aos="zoom-in" data-aos-duration="1000" className='skills__tools__figure'>
                                <img className='skills__img' src={java} alt='java' />
                            </figure>
                            <p className='skills__tool_desc'>{DICT[lang].skills_java}</p>
                            <div>
                                {getStars(skillStars.java)}
                            </div>
                        </div>
                        <div className='skills__tool_cntr'>
                            <figure data-aos="zoom-in" data-aos-duration="1000" className='skills__tools__figure'>
                                <img className='skills__img' src={swift} alt='swift' />
                            </figure>
                            <p className='skills__tool_desc'>{DICT[lang].skills_swift}</p>
                            <div>
                                {getStars(skillStars.swift)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills