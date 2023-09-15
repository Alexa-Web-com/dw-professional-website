import './Navbar.css'
import logo from '../../assets/logo.png'
import { languages } from '../../utils/dict'
import { useState, useEffect } from 'react'
import Language from '../Language/Language'
import { scroll } from '../../utils/scroll'
import NavEl from './NavEl/NavEl'


const Navbar = () => {
    const [isHamburgerActive, setIsHamburgerActive] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('resize', (e: UIEvent) => {
            const w = e.target as Window
            w.innerWidth > 1024 && setIsHamburgerActive(false)
        })

        return () => window.removeEventListener('resize', (e: UIEvent) => {
            const w = e.target as Window
            w.innerWidth > 1024 && setIsHamburgerActive(false)
        })
    }, [])



    useEffect(() => {
        const hashSection = window.location.hash.slice(1)
        if (hashSection) {
            setTimeout(() => {
                scroll(hashSection)
            }, 300)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='navbar'>
            <div className='navbar__left'
                onClick={() => {
                    scroll('intro')
                    setIsHamburgerActive(false)
                }
                }>
                <figure>
                    <img src={logo} alt='logo' className='navbar__logo' />
                </figure>
                <h1 className='navbar__title'>
                    <span>Damian </span><span>Wilczyński</span></h1>
            </div>


            <div className='hamburger_cntr'>
                <div className={isHamburgerActive
                    ? 'hamburger_active'
                    : 'hamburger'}
                    onClick={() => setIsHamburgerActive(prevState => !prevState)}>

                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>

                <NavEl isHamburgerActive={isHamburgerActive} setIsHamburgerActive={setIsHamburgerActive} />
            </div>


            <div className='navbar__right'>

                <NavEl isHamburgerActive={isHamburgerActive} setIsHamburgerActive={setIsHamburgerActive} />

                <div className='navbar__languages'>
                    {languages.map(language =>
                        <Language key={language} language={language} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar