import './Home.css'
import Intro from '../../components/Intro/Intro'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Contact from '../../components/Contact/Contact'
import Experience from '../../components/Experience/Experience'

const Home: () => JSX.Element = () => {
    return (
        <div className='home'>
            <Intro />
            <About />
            <Skills />
            <Experience />
            <Contact />
        </div>
    )
}

export default Home