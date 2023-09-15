import './NavEl.css'
import { DICT, } from '../../../utils/dict'
import { useContext } from 'react'
import { ContextLanguage } from '../../../context/ContextLanguage'
import { scroll } from '../../../utils/scroll'

const NavEl = (props) => {
    const [lang,] = useContext(ContextLanguage)

    return (
        <nav className={props.isHamburgerActive ? 'navbar__nav_elements_cntr_ham_active' : 'navbar__nav_elements_cntr'}
            onClick={() => props.setIsHamburgerActive(false)}>
            <div className={props.isHamburgerActive ? 'navbar__el_ham_active' : 'navbar__el'}
                onClick={() => scroll('about')}
            >{DICT[lang].navbarAbout}</div>
            <div className={props.isHamburgerActive ? 'navbar__el_ham_active' : 'navbar__el'}
                onClick={() => scroll('skills')}
            >{DICT[lang].navbarSkills}</div>
            <div className={props.isHamburgerActive ? 'navbar__el_ham_active' : 'navbar__el'}
                onClick={() => scroll('projects')}
            >{DICT[lang].navbarExperience}</div>
            <div className={props.isHamburgerActive ? 'navbar__el_ham_active' : 'navbar__el'}
                onClick={() => scroll('contact')}
            >{DICT[lang].navbarContact}</div>
            <div className={props.isHamburgerActive ? 'navbar__empty_ham_active' : 'navbar__empty'}></div>
        </nav>
    )
}

export default NavEl